Þ    g      T           °  '   ±     Ù     á     é     	     	  
   &	     1	     H	     `	     g	     {	     	     £	  C   ²	     ö	  D   
     Z
     l
  $   
  %   ¨
  !   Î
  "   ð
  3     +   G  F   s  '   º  B   â  '   %  ;   M  	     
             ®     ·  C   Õ  
     
   $     /     B     X     j     }          ©     ¼     Ö     ß     ï                      7     E     ]  !   l            )   ¬     Ö     è  	             )     F     Z  '   n       %   ¶     Ü  $   ð       #   .     R  G   r  G   º               &     E  >   `  H     T   è  >   =     |  )        Â  1   Ò       ;   #  r   _  "   Ò  '   õ          %  /   +     [     z            2   ©     Ü  +  ò  ,        K     S     [     v               ­  $   È     í     ô  '        :     K  D   c  1   ¨  [   Ú     6     M      c  *         ¯  *   Ð  <   û  4   8  W   m  4   Å  W   ú  .   R  H        Ê     Ñ     å       #     N   ,     {       !         ¹  
   Ú     å     ÷          2  !   P     r               «     ¿     Ð     ë  $   ÿ     $  $   B     g       6        Å  -   Ù  	          $   /     T     s  -     0   »  D   ì  1   1  D   c  7   ¨  )   à  "   
   Z   -   W         à      þ      !     9!  O   X!  `   ¨!  j   	"  O   t"     Ä"  1   ß"     #  ;   /#  #   k#  B   #  ¦   Ò#  5   y$  &   ¯$     Ö$     ä$  <   ð$  $   -%     R%     Y%     t%  >   %     Ç%            D   V       +   X   /   C   5   H   Z   .           ]      W      J      4   8   F   3   $   %   d   ^              _   L   c   Y       <   #       "          2   (                  G   T   A   9   I   @   1   B         g   :      [                       P             ;   ?          *   f   
       a   `       \           	              ,           e   Q       -                 !          N   U   R              O   S            E      7   '   0   b   K   =   &   )           6   M      >                    Split Knowledge Documents into chunks. API Key API URL Character Text Splitter Chunk Manager Operator Chunk Overlap Chunk Size Chunk Split Parameters Chunk Split Parameters. Chunks CrossEncoder Rerank CrossEncoder ranker. Default Embeddings Default Ranker Default embeddings(using default embedding model of current system) Default ranker(Rank by score). Device to run model. If None, the device is automatically determined Embed Instruction HuggingFace Embeddings HuggingFace Inference API Embeddings HuggingFace Inference API embeddings. HuggingFace Instructor Embeddings HuggingFace Instructor embeddings. HuggingFace sentence_transformers embedding models. Instruction to use for embedding documents. Instruction to use for embedding documents. Just for Instructor model. Instruction to use for embedding query. Instruction to use for embedding query. Just for Instructor model. Keyword arguments to pass to the model. Keyword arguments to pass when calling the `encode` method. Knowledge LLM Client LLM model name. Language Markdown Header Text Splitter Max length for input sequences. Longer sequences will be truncated. Model Name Model name Model name to use. Normalize embeddings. Number of results OpenAPI Embeddings OpenAPI embeddings. Overlap between chunks. Page Text Splitter Path of the cache folder. Pipeline Prompt language Prompt language. Query Instruction Query Rewrite Query Rewrite Operator Query context Query rewrite operator. Query rewrite. Recursive Character Text Splitter Rerank Model Return Each Line Return each line with associated headers. Rewritten queries Run encode() on multiple GPUs. Separator Separator Text Splitter Separator to split the text. Size of each chunk. Spacy Text Splitter Spacy pipeline to use for tokenization. Split markdown text by headers. Split text by characters recursively. Split text by page. Split text by sentences using Spacy. Split text by separator. The API key for the embeddings API. The API key for the rerank API. The GTE models are trained by Alibaba DAMO Academy, supporting Chinese. The GTE models are trained by Alibaba DAMO Academy, supporting English. The LLM Client. The LLM model name. The URL of the embeddings API. The URL of the rerank API. The embedding model are trained by HKUNLP, it support English. The embedding model are trained by MokaAI, this version support Chinese. The embedding model are trained by MokaAI, this version support English and Chinese. The embedding model are trained by OpenAI, it support English. The knowledge to be loaded. The language of the query rewrite prompt. The llm client. The name of the model to use for text embeddings. The number of top k documents. The path of the model, if you want to deploy a local model. The real model name to pass to the provider, default is None. If backend is None, use name as the real model name. The split chunks by chunk manager. The timeout for the request in seconds. Timeout Top k Your API key for the HuggingFace Inference API. Your API key for the Open API. device device name, e.g., 'cpu'. query context rerank model name, e.g., 'BAAI/bge-reranker-base'. rewrite query number. Project-Id-Version: PACKAGE VERSION
Report-Msgid-Bugs-To: 
PO-Revision-Date: 2025-02-23 13:40+0800
Last-Translator: Automatically generated
Language-Team: none
Language: ko
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=1; plural=0;
  ì§ì ë¬¸ìë¥¼ ì²­í¬ë¡ ë¶í í©ëë¤. API í¤ API URL ë¬¸ì íì¤í¸ ë¶í ê¸° ì²­í¬ ê´ë¦¬ì ì°ì°ì ì²­í¬ ì¤ì²© ì²­í¬ í¬ê¸° ì²­í¬ ë¶í  ë§¤ê°ë³ì ì²­í¬ ë¶í  ë§¤ê°ë³ììëë¤. ì²­í¬ CrossEncoder ì¬ìì ì§ì  CrossEncoder ìì ì§ì ê¸°ìëë¤. ê¸°ë³¸ ìë² ë© ê¸°ë³¸ ìì ì§ì ê¸° ê¸°ë³¸ ìë² ë©(íì¬ ìì¤íì ê¸°ë³¸ ìë² ë© ëª¨ë¸ ì¬ì©) ê¸°ë³¸ ìì ì§ì ê¸°(ì ìë³ ìì ì§ì ). ëª¨ë¸ì ì¤íí  ì¥ì¹ìëë¤. Noneì¸ ê²½ì° ì¥ì¹ê° ìëì¼ë¡ ê²°ì ë©ëë¤. ìë² ë© ì§ìì¬í­ HuggingFace ìë² ë© HuggingFace ì¶ë¡  API ìë² ë© HuggingFace ì¶ë¡  API ìë² ë©ìëë¤. HuggingFace Instructor ìë² ë© HuggingFace Instructor ìë² ë©ìëë¤. HuggingFace sentence_transformers ìë² ë© ëª¨ë¸ìëë¤. ë¬¸ì ìë² ë©ì ì¬ì©í  ì§ìì¬í­ìëë¤. ë¬¸ì ìë² ë©ì ì¬ì©í  ì§ìì¬í­ìëë¤. Instructor ëª¨ë¸ ì ì©ìëë¤. ì¿¼ë¦¬ ìë² ë©ì ì¬ì©í  ì§ìì¬í­ìëë¤. ì¿¼ë¦¬ ìë² ë©ì ì¬ì©í  ì§ìì¬í­ìëë¤. Instructor ëª¨ë¸ ì ì©ìëë¤. ëª¨ë¸ì ì ë¬í  í¤ìë ì¸ììëë¤. `encode` ë©ìëë¥¼ í¸ì¶í  ë ì ë¬í  í¤ìë ì¸ììëë¤. ì§ì LLM í´ë¼ì´ì¸í¸ LLM ëª¨ë¸ ì´ë¦ìëë¤. ì¸ì´ Markdown í¤ë íì¤í¸ ë¶í ê¸° ìë ¥ ìíì¤ì ìµë ê¸¸ì´ìëë¤. ë ê¸´ ìíì¤ë ìë¦½ëë¤. ëª¨ë¸ ì´ë¦ ëª¨ë¸ ì´ë¦ ì¬ì©í  ëª¨ë¸ ì´ë¦ìëë¤. ìë² ë©ì ì ê·íí©ëë¤. ê²°ê³¼ ì OpenAPI ìë² ë© OpenAPI ìë² ë©ìëë¤. ì²­í¬ ê°ì ì¤ì²©ìëë¤. íì´ì§ íì¤í¸ ë¶í ê¸° ìºì í´ëì ê²½ë¡ìëë¤. íì´íë¼ì¸ íë¡¬íí¸ ì¸ì´ íë¡¬íí¸ ì¸ì´. ì¿¼ë¦¬ ì§ìì¬í­ ì¿¼ë¦¬ ì¬ìì± ì¿¼ë¦¬ ì¬ìì± ì°ì°ì ì¿¼ë¦¬ ì»¨íì¤í¸ ì¿¼ë¦¬ ì¬ìì± ì°ì°ììëë¤. ì¿¼ë¦¬ë¥¼ ì¬ìì±í©ëë¤. ì¬ê·ì  ë¬¸ì íì¤í¸ ë¶í ê¸° ì¬ìì ì§ì  ëª¨ë¸ ê° ì¤ ë°í ì°ê´ë í¤ëì í¨ê» ê° ì¤ì ë°íí©ëë¤. ì¬ìì±ë ì¿¼ë¦¬ ì¬ë¬ GPUìì encode()ë¥¼ ì¤íí©ëë¤. êµ¬ë¶ì êµ¬ë¶ì íì¤í¸ ë¶í ê¸° íì¤í¸ë¥¼ ë¶í íë êµ¬ë¶ì. ê° ì²­í¬ì í¬ê¸°ìëë¤. Spacy íì¤í¸ ë¶í ê¸° í í°íì ì¬ì©í  Spacy íì´íë¼ì¸. Markdown íì¤í¸ë¥¼ í¤ëë¡ ë¶í í©ëë¤. ë¬¸ìë¥¼ ê¸°ì¤ì¼ë¡ íì¤í¸ë¥¼ ì¬ê·ì ì¼ë¡ ë¶í í©ëë¤. íì´ì§ ë¨ìë¡ íì¤í¸ë¥¼ ë¶í í©ëë¤. Spacyë¥¼ ì¬ì©íì¬ íì¤í¸ë¥¼ ë¬¸ì¥ ë¨ìë¡ ë¶í í©ëë¤. êµ¬ë¶ìë¥¼ ê¸°ì¤ì¼ë¡ íì¤í¸ë¥¼ ë¶í í©ëë¤. ìë² ë© APIì ëí API í¤ìëë¤. ì¬ì ë ¬ APIì API í¤ìëë¤. GTE ëª¨ë¸ì Alibaba DAMO Academyìì íìµëìì¼ë©°, ì¤êµ­ì´ë¥¼ ì§ìí©ëë¤. GTE ëª¨ë¸ì Alibaba DAMO Academyìì íìµëìì¼ë©°, ìì´ë¥¼ ì§ìí©ëë¤. LLM í´ë¼ì´ì¸í¸ìëë¤. LLM ëª¨ë¸ ì´ë¦ìëë¤. ìë² ë© APIì URLìëë¤. ì¬ì ë ¬ APIì URLìëë¤. ìë² ë© ëª¨ë¸ì HKUNLPìì íìµëìì¼ë©°, ìì´ë¥¼ ì§ìí©ëë¤. ìë² ë© ëª¨ë¸ì MokaAIìì íìµëìì¼ë©°, ì´ ë²ì ì ì¤êµ­ì´ë¥¼ ì§ìí©ëë¤. ìë² ë© ëª¨ë¸ì MokaAIìì íìµëìì¼ë©°, ì´ ë²ì ì ìì´ì ì¤êµ­ì´ë¥¼ ì§ìí©ëë¤. ìë² ë© ëª¨ë¸ì OpenAIìì íìµëìì¼ë©°, ìì´ë¥¼ ì§ìí©ëë¤. ë¡ëí  ì§ììëë¤. ì¿¼ë¦¬ ì¬ìì± íë¡¬íí¸ì ì¸ì´ìëë¤. LLM í´ë¼ì´ì¸í¸ìëë¤. íì¤í¸ ìë² ë©ì ì¬ì©í  ëª¨ë¸ì ì´ë¦ìëë¤. ìì kê°ì ë¬¸ì ììëë¤. ë¡ì»¬ ëª¨ë¸ì ë°°í¬íë ¤ë ê²½ì° ëª¨ë¸ì ê²½ë¡ìëë¤. ê³µê¸ììê² ì ë¬í  ì¤ì  ëª¨ë¸ ì´ë¦ìëë¤. ê¸°ë³¸ê°ì Noneìëë¤. ë°±ìëê° Noneì¸ ê²½ì° ì´ë¦ì ì¤ì  ëª¨ë¸ ì´ë¦ì¼ë¡ ì¬ì©í©ëë¤. ì²­í¬ ê´ë¦¬ìì ìí´ ë¶í ë ì²­í¬ìëë¤. ìì²­ì ì í ìê°(ì´)ìëë¤. ì í ìê° ìì kê° HuggingFace ì¶ë¡  APIì ëí ê·íì API í¤ìëë¤. Open APIì ëí API í¤ìëë¤. ì¥ì¹ ì¥ì¹ ì´ë¦, ì: 'cpu'. ì¿¼ë¦¬ ì»¨íì¤í¸ ì¬ìì ì§ì  ëª¨ë¸ ì´ë¦, ì: 'BAAI/bge-reranker-base'. ì¿¼ë¦¬ ì¬ìì± ë²í¸. 