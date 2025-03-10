(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8258,3913],{32682:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mobile/chat/components/ChatDialog",function(){return l(7332)}])},2440:function(e,t,l){"use strict";var n=l(25519);t.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(n.C9))&&void 0!==e?e:"")}},39718:function(e,t,l){"use strict";var n=l(85893),a=l(19284),r=l(25675),s=l.n(r),i=l(67294);t.Z=(0,i.memo)(e=>{let{width:t,height:l,model:r}=e,o=(0,i.useMemo)(()=>{let e=null==r?void 0:r.replaceAll("-","_").split("_")[0],t=Object.keys(a.Me);for(let l=0;l<t.length;l++){let n=t[l];if(null==e?void 0:e.includes(n))return a.Me[n]}return"/models/huggingface.svg"},[r]);return r?(0,n.jsx)(s(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:t||24,height:l||24,src:o,alt:"llm",priority:!0}):null})},7332:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(39718),r=l(18102),s=l(96074),i=l(93967),o=l.n(i),c=l(67294),d=l(73913),u=l(32966);t.default=(0,c.memo)(e=>{let{message:t,index:l}=e,{scene:i}=(0,c.useContext)(d.MobileChatContext),{context:x,model_name:m,role:p,thinking:v}=t,h=(0,c.useMemo)(()=>"view"===p,[p]),f=(0,c.useRef)(null),{value:g}=(0,c.useMemo)(()=>{if("string"!=typeof x)return{relations:[],value:"",cachePluginContext:[]};let[e,t]=x.split("	relations:"),l=t?t.split(","):[],n=[],a=0,r=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var t;let l=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),r=JSON.parse(l),s="<custom-view>".concat(a,"</custom-view>");return n.push({...r,result:j(null!==(t=r.result)&&void 0!==t?t:"")}),a++,s}catch(t){return console.log(t.message,t),e}});return{relations:l,cachePluginContext:n,value:r}},[x]),j=e=>e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>");return(0,n.jsxs)("div",{className:o()("flex w-full",{"justify-end":!h}),ref:f,children:[!h&&(0,n.jsx)("div",{className:"flex bg-[#0C75FC]  text-white p-3 rounded-xl rounded-br-none",children:x}),h&&(0,n.jsxs)("div",{className:"flex max-w-full flex-col flex-wrap bg-white dark:bg-[rgba(255,255,255,0.16)] p-3 rounded-xl rounded-bl-none",children:["string"==typeof x&&"chat_agent"===i&&(0,n.jsx)(r.default,{children:null==g?void 0:g.replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>")}),"string"==typeof x&&"chat_agent"!==i&&(0,n.jsx)(r.default,{children:j(g)}),v&&!x&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{className:"flex text-sm text-[#1c2533] dark:text-white",children:"思考中"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse1"}),(0,n.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse2"}),(0,n.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse3"})]})]}),!v&&(0,n.jsx)(s.Z,{className:"my-2"}),(0,n.jsxs)("div",{className:o()("opacity-0 h-0 w-0",{"opacity-100 flex items-center justify-between gap-6 w-auto h-auto":!v}),children:[(0,n.jsx)(u.default,{content:t,index:l,chatDialogRef:f}),"chat_agent"!==i&&(0,n.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,n.jsx)(a.Z,{width:14,height:14,model:m}),(0,n.jsx)("span",{className:"text-xs text-gray-500",children:m})]})]})]})]})})},5583:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(85265),r=l(66309),s=l(25278),i=l(14726),o=l(67294);t.default=e=>{let{open:t,setFeedbackOpen:l,list:c,feedback:d,loading:u}=e,[x,m]=(0,o.useState)([]),[p,v]=(0,o.useState)("");return(0,n.jsx)(a.Z,{title:"你的反馈助我进步",placement:"bottom",open:t,onClose:()=>l(!1),destroyOnClose:!0,height:"auto",children:(0,n.jsxs)("div",{className:"flex flex-col w-full gap-4",children:[(0,n.jsx)("div",{className:"flex w-full flex-wrap gap-2",children:null==c?void 0:c.map(e=>{let t=x.findIndex(t=>t.reason_type===e.reason_type)>-1;return(0,n.jsx)(r.Z,{className:"text-sm text-[#525964] p-1 px-2 rounded-md cursor-pointer ".concat(t?"border-[#0c75fc] text-[#0c75fc]":""),onClick:()=>{m(t=>{let l=t.findIndex(t=>t.reason_type===e.reason_type);return l>-1?[...t.slice(0,l),...t.slice(l+1)]:[...t,e]})},children:e.reason},e.reason_type)})}),(0,n.jsx)(s.default.TextArea,{placeholder:"描述一下具体问题或更优的答案",className:"h-24 resize-none mb-2",value:p,onChange:e=>v(e.target.value.trim())}),(0,n.jsxs)("div",{className:"flex gap-2 justify-end",children:[(0,n.jsx)(i.ZP,{className:"w-16 h-8",onClick:()=>{l(!1)},children:"取消"}),(0,n.jsx)(i.ZP,{type:"primary",className:"min-w-16 h-8",onClick:async()=>{let e=x.map(e=>e.reason_type);await (null==d?void 0:d({feedback_type:"unlike",reason_types:e,remark:p}))},loading:u,children:"确认"})]})]})})}},32966:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(76212),r=l(65429),s=l(15381),i=l(57132),o=l(65654),c=l(31418),d=l(96074),u=l(14726),x=l(93967),m=l.n(x),p=l(20640),v=l.n(p),h=l(67294),f=l(73913),g=l(5583);t.default=e=>{var t;let{content:l,index:x,chatDialogRef:p}=e,{conv_uid:j,history:b,scene:y}=(0,h.useContext)(f.MobileChatContext),{message:w}=c.Z.useApp(),[_,N]=(0,h.useState)(!1),[k,C]=(0,h.useState)(null==l?void 0:null===(t=l.feedback)||void 0===t?void 0:t.feedback_type),[Z,S]=(0,h.useState)([]),R=async e=>{var t;let l=null==e?void 0:e.replace(/\trelations:.*/g,""),n=v()((null===(t=p.current)||void 0===t?void 0:t.textContent)||l);n?l?w.success("复制成功"):w.warning("内容复制为空"):w.error("复制失败")},{run:E,loading:M}=(0,o.Z)(async e=>await (0,a.Vx)((0,a.zx)({conv_uid:j,message_id:l.order+"",feedback_type:e.feedback_type,reason_types:e.reason_types,remark:e.remark})),{manual:!0,onSuccess:e=>{let[,t]=e;C(null==t?void 0:t.feedback_type),w.success("反馈成功"),N(!1)}}),{run:O}=(0,o.Z)(async()=>await (0,a.Vx)((0,a.Ir)({conv_uid:j,message_id:(null==l?void 0:l.order)+""})),{manual:!0,onSuccess:e=>{let[,t]=e;t&&(C("none"),w.success("操作成功"))}}),{run:A}=(0,o.Z)(async()=>await (0,a.Vx)((0,a.Jr)()),{manual:!0,onSuccess:e=>{let[,t]=e;S(t||[]),t&&N(!0)}}),{run:P,loading:T}=(0,o.Z)(async()=>await (0,a.Vx)((0,a.Ty)({conv_id:j,round_index:0})),{manual:!0,onSuccess:()=>{w.success("操作成功")}});return(0,n.jsxs)("div",{className:"flex items-center text-sm",children:[(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(r.Z,{className:m()("cursor-pointer",{"text-[#0C75FC]":"like"===k}),onClick:async()=>{if("like"===k){await O();return}await E({feedback_type:"like"})}}),(0,n.jsx)(s.Z,{className:m()("cursor-pointer",{"text-[#0C75FC]":"unlike"===k}),onClick:async()=>{if("unlike"===k){await O();return}await A()}}),(0,n.jsx)(g.default,{open:_,setFeedbackOpen:N,list:Z,feedback:E,loading:M})]}),(0,n.jsx)(d.Z,{type:"vertical"}),(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(i.Z,{className:"cursor-pointer",onClick:()=>R(l.context)}),b.length-1===x&&"chat_agent"===y&&(0,n.jsx)(u.ZP,{loading:T,size:"small",onClick:async()=>{await P()},className:"text-xs",children:"终止话题"})]})]})}},56397:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(48218),r=l(58638),s=l(31418),i=l(45030),o=l(20640),c=l.n(o),d=l(67294),u=l(73913);t.default=(0,d.memo)(()=>{var e;let{appInfo:t}=(0,d.useContext)(u.MobileChatContext),{message:l}=s.Z.useApp(),[o,x]=(0,d.useState)(0);if(!(null==t?void 0:t.app_code))return null;let m=async()=>{let e=c()("dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(location.href),"&pc_slide=true"));l[e?"success":"error"](e?"复制成功":"复制失败")};return o>6&&l.info(JSON.stringify(window.navigator.userAgent),2,()=>{x(0)}),(0,n.jsxs)("header",{className:"flex w-full items-center justify-between bg-[rgba(255,255,255,0.9)] border dark:bg-black dark:border-[rgba(255,255,255,0.6)] rounded-xl mx-auto px-4 py-2 mb-4 sticky top-4 z-50 mt-4 shadow-md",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",onClick:()=>x(o+1),children:[(0,n.jsx)(a.Z,{scene:(null==t?void 0:null===(e=t.team_context)||void 0===e?void 0:e.chat_scene)||"chat_agent",width:8,height:8}),(0,n.jsxs)("div",{className:"flex flex-col ml-2",children:[(0,n.jsx)(i.Z.Text,{className:"text-md font-bold line-clamp-2",children:null==t?void 0:t.app_name}),(0,n.jsx)(i.Z.Text,{className:"text-sm line-clamp-2",children:null==t?void 0:t.app_describe})]})]}),(0,n.jsx)("div",{onClick:m,className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:(0,n.jsx)(r.Z,{className:"text-lg"})})]})})},74638:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(76212),r=l(62418),s=l(25519),i=l(30159),o=l(87740),c=l(50888),d=l(52645),u=l(27496),x=l(1375),m=l(65654),p=l(66309),v=l(55241),h=l(74330),f=l(25278),g=l(14726),j=l(93967),b=l.n(j),y=l(39332),w=l(67294),_=l(73913),N=l(7001),k=l(73749),C=l(97109),Z=l(83454);let S=["magenta","orange","geekblue","purple","cyan","green"];t.default=()=>{var e,t;let l=(0,y.useSearchParams)(),j=null!==(t=null==l?void 0:l.get("ques"))&&void 0!==t?t:"",{history:R,model:E,scene:M,temperature:O,resource:A,conv_uid:P,appInfo:T,scrollViewRef:V,order:I,userInput:z,ctrl:J,canAbort:D,canNewChat:$,setHistory:F,setCanNewChat:L,setCarAbort:U,setUserInput:q}=(0,w.useContext)(_.MobileChatContext),[H,W]=(0,w.useState)(!1),[B,K]=(0,w.useState)(!1),X=async e=>{var t,l,n;q(""),J.current=new AbortController;let a={chat_mode:M,model_name:E,user_input:e||z,conv_uid:P,temperature:O,app_code:null==T?void 0:T.app_code,...A&&{select_param:JSON.stringify(A)}};if(R&&R.length>0){let e=null==R?void 0:R.filter(e=>"view"===e.role);I.current=e[e.length-1].order+1}let i=[{role:"human",context:e||z,model_name:E,order:I.current,time_stamp:0},{role:"view",context:"",model_name:E,order:I.current,time_stamp:0,thinking:!0}],o=i.length-1;F([...R,...i]),L(!1);try{await (0,x.L)("".concat(null!==(t=Z.env.API_BASE_URL)&&void 0!==t?t:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[s.gp]:null!==(l=(0,r.n5)())&&void 0!==l?l:""},signal:J.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===x.a)return},onclose(){var e;null===(e=J.current)||void 0===e||e.abort(),L(!0),U(!1)},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;try{t=JSON.parse(t).vis}catch(e){t.replaceAll("\\n","\n")}"[DONE]"===t?(L(!0),U(!1)):(null==t?void 0:t.startsWith("[ERROR]"))?(i[o].context=null==t?void 0:t.replace("[ERROR]",""),i[o].thinking=!1,F([...R,...i]),L(!0),U(!1)):(U(!0),i[o].context=t,i[o].thinking=!1,F([...R,...i]))}})}catch(e){null===(n=J.current)||void 0===n||n.abort(),i[o].context="Sorry, we meet some error, please try again later.",i[o].thinking=!1,F([...i]),L(!0),U(!1)}},G=async()=>{z.trim()&&$&&await X()};(0,w.useEffect)(()=>{var e,t;null===(e=V.current)||void 0===e||e.scrollTo({top:null===(t=V.current)||void 0===t?void 0:t.scrollHeight,behavior:"auto"})},[R,V]);let Q=(0,w.useMemo)(()=>{if(!T)return[];let{param_need:e=[]}=T;return null==e?void 0:e.map(e=>e.type)},[T]),Y=(0,w.useMemo)(()=>{var e;return 0===R.length&&T&&!!(null==T?void 0:null===(e=T.recommend_questions)||void 0===e?void 0:e.length)},[R,T]),{run:ee,loading:et}=(0,m.Z)(async()=>await (0,a.Vx)((0,a.zR)(P)),{manual:!0,onSuccess:()=>{F([])}});return(0,w.useEffect)(()=>{j&&E&&P&&T&&X(j)},[T,P,E,j]),(0,n.jsxs)("div",{className:"flex flex-col",children:[Y&&(0,n.jsx)("ul",{children:null==T?void 0:null===(e=T.recommend_questions)||void 0===e?void 0:e.map((e,t)=>(0,n.jsx)("li",{className:"mb-3",children:(0,n.jsx)(p.Z,{color:S[t],className:"p-2 rounded-xl",onClick:async()=>{X(e.question)},children:e.question})},e.id))}),(0,n.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,n.jsxs)("div",{className:"flex gap-2 mb-1 w-full overflow-x-auto",children:[(null==Q?void 0:Q.includes("model"))&&(0,n.jsx)(N.default,{}),(null==Q?void 0:Q.includes("resource"))&&(0,n.jsx)(k.default,{}),(null==Q?void 0:Q.includes("temperature"))&&(0,n.jsx)(C.default,{})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between text-lg font-bold",children:[(0,n.jsx)(v.Z,{content:"暂停回复",trigger:["hover"],children:(0,n.jsx)(i.Z,{className:b()("p-2 cursor-pointer",{"text-[#0c75fc]":D,"text-gray-400":!D}),onClick:()=>{var e;D&&(null===(e=J.current)||void 0===e||e.abort(),setTimeout(()=>{U(!1),L(!0)},100))}})}),(0,n.jsx)(v.Z,{content:"再来一次",trigger:["hover"],children:(0,n.jsx)(o.Z,{className:b()("p-2 cursor-pointer",{"text-gray-400":!R.length||!$}),onClick:()=>{var e,t;if(!$||0===R.length)return;let l=null===(e=null===(t=R.filter(e=>"human"===e.role))||void 0===t?void 0:t.slice(-1))||void 0===e?void 0:e[0];X((null==l?void 0:l.context)||"")}})}),et?(0,n.jsx)(h.Z,{spinning:et,indicator:(0,n.jsx)(c.Z,{style:{fontSize:18},spin:!0}),className:"p-2"}):(0,n.jsx)(v.Z,{content:"清除历史",trigger:["hover"],children:(0,n.jsx)(d.Z,{className:b()("p-2 cursor-pointer",{"text-gray-400":!R.length||!$}),onClick:()=>{$&&ee()}})})]})]}),(0,n.jsxs)("div",{className:b()("flex py-2 px-3 items-center justify-between bg-white dark:bg-[#242733] dark:border-[#6f7f95] rounded-xl border",{"border-[#0c75fc] dark:border-[rgba(12,117,252,0.8)]":H}),children:[(0,n.jsx)(f.default.TextArea,{placeholder:"可以问我任何问题",className:"w-full resize-none border-0 p-0 focus:shadow-none",value:z,autoSize:{minRows:1},onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){if(B){e.preventDefault();return}z.trim()&&(e.preventDefault(),G())}},onChange:e=>{q(e.target.value)},onFocus:()=>{W(!0)},onBlur:()=>W(!1),onCompositionStartCapture:()=>{K(!0)},onCompositionEndCapture:()=>{setTimeout(()=>{K(!1)},0)}}),(0,n.jsx)(g.ZP,{type:"primary",className:b()("flex items-center justify-center rounded-lg bg-button-gradient border-0 ml-2",{"opacity-40 cursor-not-allowed":!z.trim()||!$}),onClick:G,children:$?(0,n.jsx)(u.Z,{}):(0,n.jsx)(h.Z,{indicator:(0,n.jsx)(c.Z,{className:"text-white"})})})]})]})}},7001:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(41468),r=l(39718),s=l(94668),i=l(85418),o=l(55241),c=l(67294),d=l(73913);t.default=()=>{let{modelList:e}=(0,c.useContext)(a.p),{model:t,setModel:l}=(0,c.useContext)(d.MobileChatContext),u=(0,c.useMemo)(()=>e.length>0?e.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{l(e)},children:[(0,n.jsx)(r.Z,{width:14,height:14,model:e}),(0,n.jsx)("span",{className:"text-xs",children:e})]}),key:e})):[],[e,l]);return(0,n.jsx)(i.Z,{menu:{items:u},placement:"top",trigger:["click"],children:(0,n.jsx)(o.Z,{content:t,children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(r.Z,{width:16,height:16,model:t}),(0,n.jsx)("span",{className:"text-xs font-medium line-clamp-1",style:{maxWidth:96},children:t}),(0,n.jsx)(s.Z,{rotate:90})]})})})}},46568:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(25675),r=l.n(a),s=l(67294);t.default=(0,s.memo)(e=>{let{width:t,height:l,src:a,label:s}=e;return(0,n.jsx)(r(),{width:t||14,height:l||14,src:a,alt:s||"db-icon",priority:!0})})},73749:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(76212),r=l(57249),s=l(62418),i=l(50888),o=l(94668),c=l(83266),d=l(65654),u=l(74330),x=l(23799),m=l(85418),p=l(67294),v=l(73913),h=l(46568);t.default=()=>{let{appInfo:e,resourceList:t,scene:l,model:f,conv_uid:g,getChatHistoryRun:j,setResource:b,resource:y}=(0,p.useContext)(v.MobileChatContext),{temperatureValue:w,maxNewTokensValue:_}=(0,p.useContext)(r.ChatContentContext),[N,k]=(0,p.useState)(null),C=(0,p.useMemo)(()=>{var t,l,n;return null===(t=null==e?void 0:null===(l=e.param_need)||void 0===l?void 0:l.filter(e=>"resource"===e.type))||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.value},[e]),Z=(0,p.useMemo)(()=>t&&t.length>0?t.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{k(e),b(e.space_id||e.param)},children:[(0,n.jsx)(h.default,{width:14,height:14,src:s.S$[e.type].icon,label:s.S$[e.type].label}),(0,n.jsx)("span",{className:"text-xs",children:e.param})]}),key:e.space_id||e.param})):[],[t,b]),{run:S,loading:R}=(0,d.Z)(async e=>{let[,t]=await (0,a.Vx)((0,a.qn)({convUid:g,chatMode:l,data:e,model:f,temperatureValue:w,maxNewTokensValue:_,config:{timeout:36e5}}));return b(t),t},{manual:!0,onSuccess:async()=>{await j()}}),E=async e=>{let t=new FormData;t.append("doc_file",null==e?void 0:e.file),await S(t)},M=(0,p.useMemo)(()=>R?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(u.Z,{size:"small",indicator:(0,n.jsx)(i.Z,{spin:!0})}),(0,n.jsx)("span",{className:"text-xs",children:"上传中"})]}):y?(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("span",{className:"text-xs",children:y.file_name}),(0,n.jsx)(o.Z,{rotate:90})]}):(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(c.Z,{className:"text-base"}),(0,n.jsx)("span",{className:"text-xs",children:"上传文件"})]}),[R,y]);return(0,n.jsx)(n.Fragment,{children:(()=>{switch(C){case"excel_file":case"text_file":case"image_file":return(0,n.jsx)("div",{className:"flex items-center justify-center gap-1 border rounded-xl bg-white dark:bg-black px-2 flex-shrink-0",children:(0,n.jsx)(x.default,{name:"file",accept:".xlsx,.xls",maxCount:1,showUploadList:!1,beforeUpload:()=>!1,onChange:E,className:"flex h-full w-full items-center justify-center",children:M})});case"database":case"knowledge":case"plugin":case"awel_flow":var e,l,a,r,i;if(!(null==t?void 0:t.length))return null;return(0,n.jsx)(m.Z,{menu:{items:Z},placement:"top",trigger:["click"],children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(h.default,{width:14,height:14,src:null===(e=s.S$[(null==N?void 0:N.type)||(null==t?void 0:null===(l=t[0])||void 0===l?void 0:l.type)])||void 0===e?void 0:e.icon,label:null===(a=s.S$[(null==N?void 0:N.type)||(null==t?void 0:null===(r=t[0])||void 0===r?void 0:r.type)])||void 0===a?void 0:a.label}),(0,n.jsx)("span",{className:"text-xs font-medium",children:(null==N?void 0:N.param)||(null==t?void 0:null===(i=t[0])||void 0===i?void 0:i.param)}),(0,n.jsx)(o.Z,{rotate:90})]})})}})()})}},97109:function(e,t,l){"use strict";l.r(t);var n=l(85893),a=l(70065),r=l(85418),s=l(30568),i=l(67294),o=l(73913);t.default=()=>{let{temperature:e,setTemperature:t}=(0,i.useContext)(o.MobileChatContext),l=e=>{isNaN(e)||t(e)};return(0,n.jsx)(r.Z,{trigger:["click"],dropdownRender:()=>(0,n.jsx)("div",{className:"flex h-28 bg-white dark:bg-[rgba(255,255,255,0.5)] items-center justify-center rounded-xl py-3",children:(0,n.jsx)(s.Z,{defaultValue:.5,max:1,min:0,step:.1,vertical:!0,onChange:l,value:e})}),placement:"top",children:(0,n.jsxs)("div",{className:"flex items-center justify-between border rounded-xl bg-white dark:bg-black w-14 p-2 flex-shrink-0",children:[(0,n.jsx)(a.Z,{type:"icon-icons-temperature",className:"text-sm"}),(0,n.jsx)("span",{className:"text-xs font-medium",children:e})]})})}},73913:function(e,t,l){"use strict";l.r(t),l.d(t,{MobileChatContext:function(){return b}});var n=l(85893),a=l(41468),r=l(76212),s=l(2440),i=l(62418),o=l(25519),c=l(1375),d=l(65654),u=l(74330),x=l(5152),m=l.n(x),p=l(39332),v=l(67294),h=l(56397),f=l(74638),g=l(83454);let j=m()(()=>Promise.all([l.e(3662),l.e(7034),l.e(6106),l.e(8674),l.e(3166),l.e(2837),l.e(2168),l.e(8163),l.e(2398),l.e(4567),l.e(1300),l.e(9773),l.e(4035),l.e(152),l.e(2510),l.e(8592),l.e(9202),l.e(3745),l.e(626),l.e(6818)]).then(l.bind(l,36818)),{loadableGenerated:{webpack:()=>[36818]},ssr:!1}),b=(0,v.createContext)({model:"",temperature:.5,resource:null,setModel:()=>{},setTemperature:()=>{},setResource:()=>{},scene:"",history:[],setHistory:()=>{},scrollViewRef:{current:null},appInfo:{},conv_uid:"",resourceList:[],order:{current:1},handleChat:()=>Promise.resolve(),canAbort:!1,setCarAbort:()=>{},canNewChat:!1,setCanNewChat:()=>{},ctrl:{current:void 0},userInput:"",setUserInput:()=>{},getChatHistoryRun:()=>{}});t.default=()=>{var e,t;let l=(0,p.useSearchParams)(),x=null!==(e=null==l?void 0:l.get("chat_scene"))&&void 0!==e?e:"",m=null!==(t=null==l?void 0:l.get("app_code"))&&void 0!==t?t:"",{modelList:y}=(0,v.useContext)(a.p),[w,_]=(0,v.useState)([]),[N,k]=(0,v.useState)(""),[C,Z]=(0,v.useState)(.5),[S,R]=(0,v.useState)(null),E=(0,v.useRef)(null),[M,O]=(0,v.useState)(""),[A,P]=(0,v.useState)(!1),[T,V]=(0,v.useState)(!0),I=(0,v.useRef)(),z=(0,v.useRef)(1),J=(0,s.Z)(),D=(0,v.useMemo)(()=>"".concat(null==J?void 0:J.user_no,"_").concat(m),[m,J]),{run:$,loading:F}=(0,d.Z)(async()=>await (0,r.Vx)((0,r.$i)("".concat(null==J?void 0:J.user_no,"_").concat(m))),{manual:!0,onSuccess:e=>{let[,t]=e,l=null==t?void 0:t.filter(e=>"view"===e.role);l&&l.length>0&&(z.current=l[l.length-1].order+1),_(t||[])}}),{data:L,run:U,loading:q}=(0,d.Z)(async e=>{let[,t]=await (0,r.Vx)((0,r.BN)(e));return null!=t?t:{}},{manual:!0}),{run:H,data:W,loading:B}=(0,d.Z)(async()=>{var e,t;let[,l]=await (0,r.Vx)((0,r.vD)(x));return R((null==l?void 0:null===(e=l[0])||void 0===e?void 0:e.space_id)||(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.param)),null!=l?l:[]},{manual:!0}),{run:K,loading:X}=(0,d.Z)(async()=>{let[,e]=await (0,r.Vx)((0,r.iP)());return null!=e?e:[]},{manual:!0,onSuccess:e=>{var t;let l=null===(t=null==e?void 0:e.filter(e=>e.conv_uid===D))||void 0===t?void 0:t[0];(null==l?void 0:l.select_param)&&R(JSON.parse(null==l?void 0:l.select_param))}});(0,v.useEffect)(()=>{x&&m&&y.length&&U({chat_scene:x,app_code:m})},[m,x,U,y]),(0,v.useEffect)(()=>{m&&$()},[m]),(0,v.useEffect)(()=>{if(y.length>0){var e,t,l;let n=null===(e=null==L?void 0:null===(t=L.param_need)||void 0===t?void 0:t.filter(e=>"model"===e.type))||void 0===e?void 0:null===(l=e[0])||void 0===l?void 0:l.value;k(n||y[0])}},[y,L]),(0,v.useEffect)(()=>{var e,t,l;let n=null===(e=null==L?void 0:null===(t=L.param_need)||void 0===t?void 0:t.filter(e=>"temperature"===e.type))||void 0===e?void 0:null===(l=e[0])||void 0===l?void 0:l.value;Z(n||.5)},[L]),(0,v.useEffect)(()=>{if(x&&(null==L?void 0:L.app_code)){var e,t,l,n,a,r;let s=null===(e=null==L?void 0:null===(t=L.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type))||void 0===e?void 0:null===(l=e[0])||void 0===l?void 0:l.value,i=null===(n=null==L?void 0:null===(a=L.param_need)||void 0===a?void 0:a.filter(e=>"resource"===e.type))||void 0===n?void 0:null===(r=n[0])||void 0===r?void 0:r.bind_value;i&&R(i),["database","knowledge","plugin","awel_flow"].includes(s)&&!i&&H()}},[L,x,H]);let G=async e=>{var t,l,n;O(""),I.current=new AbortController;let a={chat_mode:x,model_name:N,user_input:e||M,conv_uid:D,temperature:C,app_code:null==L?void 0:L.app_code,...S&&{select_param:S}};if(w&&w.length>0){let e=null==w?void 0:w.filter(e=>"view"===e.role);z.current=e[e.length-1].order+1}let r=[{role:"human",context:e||M,model_name:N,order:z.current,time_stamp:0},{role:"view",context:"",model_name:N,order:z.current,time_stamp:0,thinking:!0}],s=r.length-1;_([...w,...r]),V(!1);try{await (0,c.L)("".concat(null!==(t=g.env.API_BASE_URL)&&void 0!==t?t:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[o.gp]:null!==(l=(0,i.n5)())&&void 0!==l?l:""},signal:I.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===c.a)return},onclose(){var e;null===(e=I.current)||void 0===e||e.abort(),V(!0),P(!1)},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;try{t=JSON.parse(t).vis}catch(e){t.replaceAll("\\n","\n")}"[DONE]"===t?(V(!0),P(!1)):(null==t?void 0:t.startsWith("[ERROR]"))?(r[s].context=null==t?void 0:t.replace("[ERROR]",""),r[s].thinking=!1,_([...w,...r]),V(!0),P(!1)):(P(!0),r[s].context=t,r[s].thinking=!1,_([...w,...r]))}})}catch(e){null===(n=I.current)||void 0===n||n.abort(),r[s].context="Sorry, we meet some error, please try again later.",r[s].thinking=!1,_([...r]),V(!0),P(!1)}};return(0,v.useEffect)(()=>{x&&"chat_agent"!==x&&K()},[x,K]),(0,n.jsx)(b.Provider,{value:{model:N,resource:S,setModel:k,setTemperature:Z,setResource:R,temperature:C,appInfo:L,conv_uid:D,scene:x,history:w,scrollViewRef:E,setHistory:_,resourceList:W,order:z,handleChat:G,setCanNewChat:V,ctrl:I,canAbort:A,setCarAbort:P,canNewChat:T,userInput:M,setUserInput:O,getChatHistoryRun:$},children:(0,n.jsx)(u.Z,{size:"large",className:"flex h-screen w-screen justify-center items-center max-h-screen",spinning:F||q||B||X,children:(0,n.jsxs)("div",{className:"flex flex-col h-screen bg-gradient-light dark:bg-gradient-dark p-4 pt-0",children:[(0,n.jsxs)("div",{ref:E,className:"flex flex-col flex-1 overflow-y-auto mb-3",children:[(0,n.jsx)(h.default,{}),(0,n.jsx)(j,{})]}),(null==L?void 0:L.app_code)&&(0,n.jsx)(f.default,{})]})})})}}},function(e){e.O(0,[3662,7034,6106,8674,3166,2837,2168,8163,2913,3791,5278,8791,4330,7611,1049,5030,2783,2398,3457,2622,5914,4567,7124,1300,4633,9773,4035,152,2510,8592,9202,5382,7249,626,9774,2888,179],function(){return e(e.s=32682)}),_N_E=e.O()}]);