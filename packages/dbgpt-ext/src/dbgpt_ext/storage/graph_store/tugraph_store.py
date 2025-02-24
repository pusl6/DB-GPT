"""TuGraph store."""

import base64
import json
import logging
import os
from typing import List

from dbgpt._private.pydantic import ConfigDict, Field
from dbgpt.storage.graph_store.base import GraphStoreBase, GraphStoreConfig
from dbgpt.storage.graph_store.graph import GraphElemType
from dbgpt_ext.datasource.conn_tugraph import TuGraphConnector

logger = logging.getLogger(__name__)


class TuGraphStoreConfig(GraphStoreConfig):
    """TuGraph store config."""

    model_config = ConfigDict(arbitrary_types_allowed=True)

    host: str = Field(
        default="127.0.0.1",
        description="TuGraph host",
    )
    port: int = Field(
        default=7687,
        description="TuGraph port",
    )
    username: str = Field(
        default="admin",
        description="login username",
    )
    password: str = Field(
        default="73@TuGraph",
        description="login password",
    )
    vertex_type: str = Field(
        default=GraphElemType.ENTITY.value,
        description="The type of entity vertex, `entity` by default.",
    )
    document_type: str = Field(
        default=GraphElemType.DOCUMENT.value,
        description="The type of document vertex, `document` by default.",
    )
    chunk_type: str = Field(
        default=GraphElemType.CHUNK.value,
        description="The type of chunk vertex, `relation` by default.",
    )
    edge_type: str = Field(
        default=GraphElemType.RELATION.value,
        description="The type of relation edge, `relation` by default.",
    )
    include_type: str = Field(
        default=GraphElemType.INCLUDE.value,
        description="The type of include edge, `include` by default.",
    )
    next_type: str = Field(
        default=GraphElemType.NEXT.value,
        description="The type of next edge, `next` by default.",
    )
    plugin_names: List[str] = Field(
        default=["leiden"],
        description=(
            "Plugins need to be loaded when initialize TuGraph, "
            "code: https://github.com/TuGraph-family"
            "/dbgpt-tugraph-plugins/tree/master/cpp"
        ),
    )
    enable_summary: bool = Field(
        default=True,
        description="Enable graph community summary or not.",
    )
    enable_similarity_search: bool = Field(
        default=False,
        description="Enable the similarity search or not",
    )


class TuGraphStore(GraphStoreBase):
    """TuGraph graph store."""

    def __init__(self, config: TuGraphStoreConfig) -> None:
        """Initialize the TuGraphStore with connection details."""
        self._config = config
        self._host = config.host or os.getenv("TUGRAPH_HOST")
        self._port = int(config.port or os.getenv("TUGRAPH_PORT"))
        self._username = config.username or os.getenv("TUGRAPH_USERNAME")
        self._password = config.password or os.getenv("TUGRAPH_PASSWORD")
        self.enable_summary = config.enable_summary or (
            os.getenv("GRAPH_COMMUNITY_SUMMARY_ENABLED", "").lower() == "true"
        )
        self.enable_similarity_search = config.enable_similarity_search or (
            os.getenv("SIMILARITY_SEARCH_ENABLED", "").lower() == "true"
        )
        self._plugin_names = config.plugin_names or (
            os.getenv("TUGRAPH_PLUGIN_NAMES", "leiden").split(",")
        )

        self._graph_name = config.name

        self.conn = TuGraphConnector.from_uri_db(
            host=self._host,
            port=self._port,
            user=self._username,
            pwd=self._password,
            db_name=config.name,
        )

    def get_config(self) -> TuGraphStoreConfig:
        """Get the TuGraph store config."""
        return self._config

    def is_exist(self, name) -> bool:
        """Check Graph Name is Exist."""
        return self.conn.is_exist(name)

    def _add_vertex_index(self, field_name):
        """Add an index to the vertex table."""
        # TODO: Not used in the current implementation.
        gql = f"CALL db.addIndex('{GraphElemType.ENTITY.value}', '{field_name}', false)"
        self.conn.run(gql)

    def _upload_plugin(self):
        """Upload missing plugins to the TuGraph database.

        This method checks for the presence of required plugins in the database and
        uploads any missing plugins. It performs the following steps:
        1. Lists existing plugins in the database.
        2. Identifies missing plugins by comparing with the required plugin list.
        3. For each missing plugin, reads its binary content, encodes it, and uploads to
            the database.

        The method uses the 'leiden' plugin as an example, but can be extended for other
        plugins.
        """
        gql = "CALL db.plugin.listPlugin('CPP','v1')"
        result = self.conn.run(gql)
        result_names = [
            json.loads(record["plugin_description"])["name"] for record in result
        ]
        missing_plugins = [
            name for name in self._plugin_names if name not in result_names
        ]

        if len(missing_plugins):
            for name in missing_plugins:
                try:
                    from dbgpt_tugraph_plugins import (  # type: ignore
                        get_plugin_binary_path,
                    )
                except ImportError:
                    logger.error(
                        "dbgpt-tugraph-plugins is not installed, "
                        "pip install dbgpt-tugraph-plugins==0.1.1"
                    )
                plugin_path = get_plugin_binary_path("leiden")  # type: ignore
                with open(plugin_path, "rb") as f:
                    content = f.read()
                content = base64.b64encode(content).decode()
                gql = (
                    f"CALL db.plugin.loadPlugin('CPP', '{name}', '{content}', 'SO', "
                    f"'{name} Plugin', false, 'v1')"
                )
                self.conn.run(gql)
