��    w      �  �   �      
     
  1   
  /   Q
     �
     �
     �
     �
     �
     �
     	     %     :  !   V  )   x  "   �     �     �     �     �          '     D     T  0   g  $   �  
   �  
   �     �  
   �     �               #     1     E     [     p     �     �     �     �     �     �     �  	                  .     >     K     P  3   ^  '   �  3   �  '   �  2     
   I  f   T  e   �  n   !  m   �  /   �  I   .  B   x  �   �  Z   C  V   �  \   �  I   R  F   �  �   �  S   �  �   �  �   w     �  9     G   O  @   �  �   �  R   d  .   �  +   �  G     L   Z  E   �  >   �  (   ,     U     u     �     �     �     �     �     �     �  x     z   �  z        |     �     �     �  &   �               $     3  "   E  #   h  "   �     �  !   �     �  $        4     B  ;   U  |  �  
     v     Z   �  8   �  *   $   H   O   +   �      �   ,   �   H   !  -   Z!  X   �!  <   �!  X   "  =   w"  #   �"      �"  1   �"  -   ,#  .   Z#  8   �#     �#  #   �#  ^   $  <   c$     �$     �$     �$     �$  !   �$  ]   !%  <   %     �%  ,   �%  1   	&  -   ;&  "   i&     �&     �&     �&     �&  "   �&  -   '  .   :'     i'  (   �'  )   �'  !   �'  $   �'     (     ((  a   B(  V   �(  a   �(  V   ])  v   �)     +*  �   G*  �   	+  �   �+  �   �,  O   A-  �   �-  �   .  �   �.  �   �/  �   ~0  �   21  f   �1  c   c2  f  �2  �   .4  b  �4  :  86  (   s7  |   �7  �   8  �   �8  �   ,9  �   :  >   �:  ;   �:  k   ;;  �   �;  ~   W<  �   �<  c   c=  ;   �=  ;   >     ?>  .   C>  !   r>     �>  .   �>  3   �>  /   ?  �   ??  �   9@  �   �@  Y   �A  <   B  %   [B  1   �B  (   �B  "   �B     �B     C     %C  O   DC  P   �C  O   �C  @   5D  M   vD  K   �D  Q   E  *   bE  /   �E  q   �E            ?                 G   c   r   -   R   E       T      W   m      q   n       &      v           X   (         Y   V      '   :   /       2              #   J       Z   4          M   D   p   F   ,      f   H       U       a       ;       8   `   A               e      <   O           [   o   	   B   @   Q   1           u   5   3   h                                 \      g   N      K                           7   
   s   k       _              i      )   $                 %   >      C   P   !   ]   t   ^   9   I       S   L       w   +   l       d      *   "           6   =              b   0   .       j    Alias Batch size of parallel community building process Batch size of triplets extraction from the text Builtin Graph Config Builtin Knowledge Graph Builtin Knowledge Graph Config. Builtin Knowledge Graph. Chroma Config Chroma Vector Store Chroma vector store config. Chroma vector store. Community Summary KG Config Community Summary Knowledge Graph Community Summary Knowledge Graph Config. Community Summary Knowledge Graph. Connection String Elastic Config Elastic Vector Config Elastic Vector Store Elastic vector store. Elasticsearch vector config. Embedding Field Embedding Function Enable the graph search for documents and chunks Enable the graph search for triplets Graph Name Index Name Knowledge Graph Type LLM Client LLM Model Name Max Chunks Once Load Max Threads Milvus Config Milvus Vector Store Milvus vector config. Milvus vector store. OceanBase Config OceanBase Database OceanBase Host OceanBase Password OceanBase Port OceanBase User OceanBase Vector Store OceanBase vector store. PG Config PG Vector Store PG vector store. PGVector Config Persist Path Port Primary Field Recall Score of Community Search in Knowledge Graph Recall Score of Knowledge Graph Extract Recall score of community search in knowledge graph Recall score of knowledge graph extract TBatch size of parallel community building process Text Field The access key ID of the OSS server. You can also set it in the environment variable OSS_ACCESS_KEY_ID The access key ID of the s3 server. You can also set it in the environment variable AWS_ACCESS_KEY_ID The access key secret of the OSS server. You can also set it in the environment variable OSS_ACCESS_KEY_SECRET The access key secret of the s3 server. You can also set it in the environment variable AWS_SECRET_ACCESS_KEY The additional configuration for the S3 client. The alias of elasticsearch store, if not set, will use the default alias. The alias of milvus store, if not set, will use the default alias. The chunk size when saving the file. When the file is larger 10x than this value, it will be uploaded in multiple parts. Default is 1M. The connection string of vector store, if not set, will use the default connection string. The embedding field of milvus store, if not set, will use the default embedding field. The embedding function of vector store, if not set, will use the default embedding function. The endpoint of the OSS server. e.g. https://oss-cn-hangzhou.aliyuncs.com The endpoint of the s3 server. e.g. https://s3.us-east-1.amazonaws.com The fixed bucket name to use. If set, all logical buckets in DB-GPT will be mapped to this bucket. We suggest you set this value to avoid bucket name conflicts. The index name of elasticsearch store, if not set, will use the default index name. The max number of chunks to load at once. If your document is large, you can set this value to a larger number to speed up the loading process. Default is 10. The max number of threads to use. Default is 1. If you set this bigger than 1, please make sure your vector store is thread-safe. The metadata of collection. The name of Graph, if not set, will use the default name. The port of elasticsearch store, if not set, will use the default port. The port of milvus store, if not set, will use the default port. The prefix of the bucket name. If set, all logical buckets in DB-GPT will be prefixed with this value. Just work when fixed_bucket is None. The primary field of milvus store, if not set, will use the default primary field. The region of the OSS server. e.g. cn-hangzhou The region of the s3 server. e.g. us-east-1 The signature version of the s3 server. e.g. s3v4, s3v2, None (default) The text field of milvus store, if not set, will use the default text field. The uri of elasticsearch store, if not set, will use the default uri. The uri of milvus store, if not set, will use the default uri. Top size of knowledge graph chunk search Topk of Knowledge Graph Extract Topk of knowledge graph extract Uri Vector Store Type Weaviate Config Weaviate URL Weaviate Vector Store Weaviate vector config. Weaviate vector store. Whether to create the bucket automatically if it does not exist. If set to False, the bucket must exist before using it. Whether to use the environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY as the credentials. Default is False. Whether to use the environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET as the credentials. Default is False. community Summary kg Config. database for vector tables graph store type. knowledge graph config. llm client for extract graph triplets. llm model name. oceanbase host oceanbase port password to login the chroma config of vector store. the elastic config of vector store. the milvus config of vector store. the ob config of vector store. the persist path of vector store. the pg config of vector store. the weaviate config of vector store. user to login vector store type. weaviate url address, if not set, will use the default url. Project-Id-Version: PACKAGE VERSION
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2025-02-23 13:40+0800
Last-Translator: Automatically generated
Language-Team: none
Language: ru
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
 Алиас Размер пакета для параллельного процесса построения сообщества Размер пакета для извлечения триплетов из текста Встроенная конфигурация графа Встроенный граф знаний Конфигурация встроенного графа знаний. Встроенный граф знаний. Конфигурация Chroma Векторное хранилище Chroma Конфигурация векторного хранилища Chroma. Векторное хранилище Chroma. Конфигурация графа знаний обобщения сообщества Граф знаний по сводке сообщества Конфигурация графа знаний по сводке сообщества. Граф знаний по сводке сообщества. Строка подключения Конфигурация Elastic Конфигурация векторов Elastic Elastic Векторное хранилище Elastic векторное хранилище. Конфигурация векторов Elasticsearch. Поле эмбеддинга Функция эмбеддинга Включить поиск в графе для документов и фрагментов. Включить поиск в графе для троек. Название графа Имя индекса Тип знания графа LLM 客户端 Название модели LLM Максимальное количество чанков при одном загрузке Максимальное количество потоков Конфигурация Milvus Векторное хранилище Milvus Конфигурация векторов Milvus. Векторное хранилище Milvus. Конфигурация OceanBase База данных OceanBase Хост OceanBase Пароль OceanBase Порт OceanBase Пользователь OceanBase Хранилище векторов OceanBase Хранилище векторов OceanBase. Конфигурация PG PG Векторное хранилище PG Векторное хранилище. Конфигурация PGVector Путь для сохранения Порт Основное поле Показатель полноты поиска сообщества в графе знаний. Показатель полноты извлечения знаний из графа. Показатель полноты поиска сообщества в графе знаний. Показатель полноты извлечения знаний из графа. Размер пакета для параллельного процесса построения сообщества Текстовое поле Идентификатор ключа доступа к серверу OSS. Вы также можете установить его в переменной окружения OSS_ACCESS_KEY_ID Идентификатор ключа доступа к серверу S3. Вы также можете установить его в переменной окружения AWS_ACCESS_KEY_ID Секретный ключ доступа к серверу OSS. Вы также можете установить его в переменной окружения OSS_ACCESS_KEY_SECRET Секретный ключ доступа к серверу S3. Вы также можете установить его в переменной окружения AWS_SECRET_ACCESS_KEY Дополнительная конфигурация для клиента S3. Алиас хранилища Elasticsearch. Если не задан, будет использован алиас по умолчанию. Псевдоним хранилища Milvus. Если не задано, будет использоваться псевдоним по умолчанию. Размер части при сохранении файла. Когда размер файла превышает это значение в 10 раз, он будет загружен по частям. По умолчанию — 1 МБ. Строка подключения векторного хранилища. Если не задана, будет использоваться строка подключения по умолчанию. Поле эмбеддинга хранилища Milvus. Если не задано, будет использоваться поле эмбеддинга по умолчанию. Функция эмбеддинга векторного хранилища. Если не задана, будет использована функция эмбеддинга по умолчанию. Конечная точка сервера OSS. Например, https://oss-cn-hangzhou.aliyuncs.com Конечная точка сервера S3. Например, https://s3.us-east-1.amazonaws.com Используемое фиксированное имя бакета. Если задано, все логические бакеты в DB-GPT будут сопоставлены с этим бакетом. Мы рекомендуем установить это значение, чтобы избежать конфликтов имен бакетов. Имя индекса хранилища Elasticsearch. Если не задано, будет использовано имя индекса по умолчанию. Максимальное количество чанков, которое можно загрузить за один раз. Если ваш документ большой, вы можете установить это значение большим, чтобы ускорить процесс загрузки. По умолчанию равно 10. Максимальное количество потоков для использования. По умолчанию равно 1. Если вы установите это значение больше 1, убедитесь, что ваше векторное хранилище потокобезопасно. Метаданные коллекции. Название графа. Если не задано, будет использовано имя по умолчанию. Порт хранилища Elasticsearch. Если не задан, будет использован порт по умолчанию. Порт хранилища Milvus. Если не задано, будет использоваться порт по умолчанию. Префикс имени бакета. Если задан, все логические бакеты в DB-GPT будут иметь этот префикс. Действует только когда fixed_bucket не задан. Основное поле хранилища Milvus. Если не задано, будет использоваться основное поле по умолчанию. Регион сервера OSS. Например, cn-hangzhou Регион сервера S3. Например, us-east-1 Версия подписи сервера S3. Например, s3v4, s3v2, None (по умолчанию) Текстовое поле хранилища Milvus. Если не задано, будет использоваться текстовое поле по умолчанию. URI хранилища Elasticsearch. Если не задан, будет использован URI по умолчанию. URI хранилища Milvus. Если не задано, будет использоваться значение по умолчанию. Максимальный размер поиска фрагментов в графе знаний. Топ-K извлечения знаний из графа. Топ-K извлечения знаний из графа. URI Тип векторного хранилища Конфигурация Weaviate URL-адрес Weaviate Векторное хранилище Weaviate Конфигурация векторов Weaviate. Векторное хранилище Weaviate. Создавать ли бакет автоматически, если он не существует. Если установлено значение False, бакет должен существовать перед использованием. Использовать ли переменные окружения AWS_ACCESS_KEY_ID и AWS_SECRET_ACCESS_KEY в качестве учетных данных. По умолчанию — нет. Использовать ли переменные окружения OSS_ACCESS_KEY_ID и OSS_ACCESS_KEY_SECRET в качестве учетных данных. По умолчанию — False. Конфигурация графа знаний обобщения сообщества. База данных для векторных таблиц Тип хранилища графа. Конфигурация знания графа. LLM 客户端用于提取图三元组。 Название модели LLM. Хост OceanBase Порт OceanBase Пароль для входа Конфигурация Chroma для векторного хранилища. Конфигурация Elastic для векторного хранилища. Конфигурация Milvus для векторного хранилища. Конфигурация OB хранилища векторов. Путь для сохранения векторного хранилища. Конфигурация PG для векторного хранилища. Конфигурация Weaviate для векторного хранилища. Пользователь для входа Тип векторного хранилища. URL-адрес Weaviate. Если не задан, будет использован URL по умолчанию. 