(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172,3913],{45745:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/knowledge/chunk",function(){return t(76620)}])},2440:function(e,l,t){"use strict";var n=t(25519);l.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(n.C9))&&void 0!==e?e:"")}},39718:function(e,l,t){"use strict";var n=t(85893),a=t(19284),s=t(25675),r=t.n(s),i=t(67294);l.Z=(0,i.memo)(e=>{let{width:l,height:t,model:s}=e,o=(0,i.useMemo)(()=>{let e=null==s?void 0:s.replaceAll("-","_").split("_")[0],l=Object.keys(a.Me);for(let t=0;t<l.length;t++){let n=l[t];if(null==e?void 0:e.includes(n))return a.Me[n]}return"/models/huggingface.svg"},[s]);return s?(0,n.jsx)(r(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:l||24,height:t||24,src:o,alt:"llm",priority:!0}):null})},76620:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return R}});var n=t(85893),a=t(76212),s=t(85576),r=t(50136),i=t(67294),o=function(e){let{items:l,modal:t}=e,[a,o]=(0,i.useState)("edit");return(0,n.jsx)(s.default,{...t,children:(0,n.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,n.jsx)("div",{className:"w-1/6",children:(0,n.jsx)(r.Z,{className:"h-full",selectedKeys:[a],mode:"inline",onSelect:e=>{o(e.key)},inlineCollapsed:!1,items:l.map(e=>({key:e.key,label:e.label}))})}),(0,n.jsx)("div",{className:"w-5/6",children:l.map(e=>{if(e.key===a)return(0,n.jsx)(i.Fragment,{children:e.children},e.key)})})]})})},d=t(18102),c=t(68795),u=t(3089),m=t(24969),x=t(65654),v=t(99859),h=t(31418),p=t(85673),f=t(25278),g=t(74330),j=t(4393),b=t(42075),y=t(66309),w=t(32983),_=t(11300),N=t(14726),k=t(93967),C=t.n(k),Z=t(96486),S=t(11163),E=t(67421),R=function(){let e=(0,S.useRouter)(),{t:l}=(0,E.$G)(),[t,s]=(0,i.useState)([]),[r,k]=(0,i.useState)(0),[R,M]=(0,i.useState)(!1),[O,A]=(0,i.useState)(!1),[P,q]=(0,i.useState)(null),[T,V]=(0,i.useState)(1),[z,I]=(0,i.useState)(10),[D]=v.default.useForm(),{message:F}=h.Z.useApp(),{query:{id:J,spaceName:L}}=(0,S.useRouter)(),U=async()=>{var e;M(!0);let[l,t]=await (0,a.Vx)((0,a.gV)(L,{document_id:J,page:1,page_size:10}));s(null==t?void 0:t.data),k(null!==(e=null==t?void 0:t.total)&&void 0!==e?e:0),M(!1)},B=async(e,l)=>{I(l),M(!0);let[t,n]=await (0,a.Vx)((0,a.gV)(L,{document_id:J,page:e,page_size:l}));s((null==n?void 0:n.data)||[]),M(!1),V(e)};(0,i.useEffect)(()=>{L&&J&&U()},[J,L]);let $=async e=>{let l=e.target.value;if(!l)return;let[t,n]=await (0,a.Vx)((0,a.gV)(L,{document_id:J,page:T,page_size:z,content:l}));s((null==n?void 0:n.data)||[])},{run:H,loading:W}=(0,x.Z)(async e=>(0,a.Vx)((0,a.fU)({chunk_id:P.id,questions:e})),{manual:!0,onSuccess:async()=>{F.success("添加成功"),A(!1),await U()}});return(0,n.jsxs)("div",{className:"flex flex-col h-full w-full px-6 pb-6",children:[(0,n.jsx)(p.Z,{className:"m-6",items:[{title:"Knowledge",onClick(){e.back()},path:"/knowledge"},{title:L}]}),(0,n.jsx)("div",{className:"flex items-center gap-4",children:(0,n.jsx)(f.default,{className:"w-1/5 h-10 mb-4",prefix:(0,n.jsx)(c.Z,{}),placeholder:l("please_enter_the_keywords"),onChange:(0,Z.debounce)($,300),allowClear:!0})}),(null==t?void 0:t.length)>0?(0,n.jsxs)("div",{className:"h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  grid-flow-row auto-rows-max gap-x-6 gap-y-10 overflow-y-auto relative",children:[(0,n.jsx)(g.Z,{className:"flex flex-col items-center justify-center absolute bottom-0 top-0 left-0 right-0",spinning:R}),null==t?void 0:t.map((e,t)=>(0,n.jsxs)(j.Z,{hoverable:!0,title:(0,n.jsxs)(b.Z,{className:"flex justify-between",children:[(0,n.jsxs)(y.Z,{color:"blue",children:["# ",t+(T-1)*10]}),(0,n.jsx)("span",{className:"text-sm",children:e.doc_name})]}),className:C()("h-96 rounded-xl overflow-hidden",{"h-auto":!0}),onClick:()=>{A(!0),q(e)},children:[(0,n.jsxs)("p",{className:"font-semibold",children:[l("Content"),":"]}),(0,n.jsx)("p",{children:null==e?void 0:e.content}),(0,n.jsxs)("p",{className:"font-semibold",children:[l("Meta_Data"),": "]}),(0,n.jsx)("p",{children:null==e?void 0:e.meta_info})]},e.id))]}):(0,n.jsx)(g.Z,{spinning:R,children:(0,n.jsx)(w.Z,{image:w.Z.PRESENTED_IMAGE_DEFAULT})}),(0,n.jsx)(_.Z,{className:"flex w-full justify-end",defaultCurrent:1,defaultPageSize:10,total:r,showTotal:e=>"Total ".concat(e," items"),onChange:B}),(0,n.jsx)(o,{modal:{title:l("Manual_entry"),width:"70%",open:O,footer:!1,onCancel:()=>A(!1),afterOpenChange:e=>{if(e){var l;D.setFieldValue("questions",null===(l=JSON.parse((null==P?void 0:P.questions)||"[]"))||void 0===l?void 0:l.map(e=>({question:e})))}}},items:[{key:"edit",label:l("Data_content"),children:(0,n.jsxs)("div",{className:"flex gap-4",children:[(0,n.jsx)(j.Z,{size:"small",title:l("Main_content"),className:"w-2/3 flex-wrap overflow-y-auto",children:(0,n.jsx)(d.default,{children:null==P?void 0:P.content})}),(0,n.jsx)(j.Z,{size:"small",title:l("Auxiliary_data"),className:"w-1/3",children:(0,n.jsx)(d.default,{children:null==P?void 0:P.meta_info})})]})},{key:"delete",label:l("Add_problem"),children:(0,n.jsx)(j.Z,{size:"small",extra:(0,n.jsx)(N.ZP,{size:"small",type:"primary",onClick:async()=>{var e,t;let n=D.getFieldsValue();if(!n.questions||(null===(e=n.questions)||void 0===e?void 0:e.filter(Boolean).length)===0){F.warning(l("enter_question_first"));return}let a=null===(t=n.questions)||void 0===t?void 0:t.filter(Boolean).map(e=>e.question);await H(a)},loading:W,children:l("save")}),children:(0,n.jsx)(v.default,{form:D,children:(0,n.jsx)(v.default.List,{name:"questions",children:(e,t)=>{let{add:a,remove:s}=t;return(0,n.jsxs)(n.Fragment,{children:[e.map(e=>{let{key:t,name:a}=e;return(0,n.jsxs)("div",{className:C()("flex flex-1 items-center gap-8"),children:[(0,n.jsx)(v.default.Item,{label:"",name:[a,"question"],className:"grow",children:(0,n.jsx)(f.default,{placeholder:l("Please_Input")})}),(0,n.jsx)(v.default.Item,{children:(0,n.jsx)(u.Z,{onClick:()=>{s(a)}})})]},t)}),(0,n.jsx)(v.default.Item,{children:(0,n.jsx)(N.ZP,{type:"dashed",onClick:()=>{a()},block:!0,icon:(0,n.jsx)(m.Z,{}),children:l("Add_problem")})})]})}})})})}]})]})}},56397:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(48218),s=t(58638),r=t(31418),i=t(45030),o=t(20640),d=t.n(o),c=t(67294),u=t(73913);l.default=(0,c.memo)(()=>{var e;let{appInfo:l}=(0,c.useContext)(u.MobileChatContext),{message:t}=r.Z.useApp(),[o,m]=(0,c.useState)(0);if(!(null==l?void 0:l.app_code))return null;let x=async()=>{let e=d()("dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(location.href),"&pc_slide=true"));t[e?"success":"error"](e?"复制成功":"复制失败")};return o>6&&t.info(JSON.stringify(window.navigator.userAgent),2,()=>{m(0)}),(0,n.jsxs)("header",{className:"flex w-full items-center justify-between bg-[rgba(255,255,255,0.9)] border dark:bg-black dark:border-[rgba(255,255,255,0.6)] rounded-xl mx-auto px-4 py-2 mb-4 sticky top-4 z-50 mt-4 shadow-md",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",onClick:()=>m(o+1),children:[(0,n.jsx)(a.Z,{scene:(null==l?void 0:null===(e=l.team_context)||void 0===e?void 0:e.chat_scene)||"chat_agent",width:8,height:8}),(0,n.jsxs)("div",{className:"flex flex-col ml-2",children:[(0,n.jsx)(i.Z.Text,{className:"text-md font-bold line-clamp-2",children:null==l?void 0:l.app_name}),(0,n.jsx)(i.Z.Text,{className:"text-sm line-clamp-2",children:null==l?void 0:l.app_describe})]})]}),(0,n.jsx)("div",{onClick:x,className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:(0,n.jsx)(s.Z,{className:"text-lg"})})]})})},74638:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(76212),s=t(62418),r=t(25519),i=t(30159),o=t(87740),d=t(50888),c=t(52645),u=t(27496),m=t(1375),x=t(65654),v=t(66309),h=t(55241),p=t(74330),f=t(25278),g=t(14726),j=t(93967),b=t.n(j),y=t(39332),w=t(67294),_=t(73913),N=t(7001),k=t(73749),C=t(97109),Z=t(83454);let S=["magenta","orange","geekblue","purple","cyan","green"];l.default=()=>{var e,l;let t=(0,y.useSearchParams)(),j=null!==(l=null==t?void 0:t.get("ques"))&&void 0!==l?l:"",{history:E,model:R,scene:M,temperature:O,resource:A,conv_uid:P,appInfo:q,scrollViewRef:T,order:V,userInput:z,ctrl:I,canAbort:D,canNewChat:F,setHistory:J,setCanNewChat:L,setCarAbort:U,setUserInput:B}=(0,w.useContext)(_.MobileChatContext),[$,H]=(0,w.useState)(!1),[W,K]=(0,w.useState)(!1),G=async e=>{var l,t,n;B(""),I.current=new AbortController;let a={chat_mode:M,model_name:R,user_input:e||z,conv_uid:P,temperature:O,app_code:null==q?void 0:q.app_code,...A&&{select_param:JSON.stringify(A)}};if(E&&E.length>0){let e=null==E?void 0:E.filter(e=>"view"===e.role);V.current=e[e.length-1].order+1}let i=[{role:"human",context:e||z,model_name:R,order:V.current,time_stamp:0},{role:"view",context:"",model_name:R,order:V.current,time_stamp:0,thinking:!0}],o=i.length-1;J([...E,...i]),L(!1);try{await (0,m.L)("".concat(null!==(l=Z.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[r.gp]:null!==(t=(0,s.n5)())&&void 0!==t?t:""},signal:I.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===m.a)return},onclose(){var e;null===(e=I.current)||void 0===e||e.abort(),L(!0),U(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(L(!0),U(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(i[o].context=null==l?void 0:l.replace("[ERROR]",""),i[o].thinking=!1,J([...E,...i]),L(!0),U(!1)):(U(!0),i[o].context=l,i[o].thinking=!1,J([...E,...i]))}})}catch(e){null===(n=I.current)||void 0===n||n.abort(),i[o].context="Sorry, we meet some error, please try again later.",i[o].thinking=!1,J([...i]),L(!0),U(!1)}},X=async()=>{z.trim()&&F&&await G()};(0,w.useEffect)(()=>{var e,l;null===(e=T.current)||void 0===e||e.scrollTo({top:null===(l=T.current)||void 0===l?void 0:l.scrollHeight,behavior:"auto"})},[E,T]);let Q=(0,w.useMemo)(()=>{if(!q)return[];let{param_need:e=[]}=q;return null==e?void 0:e.map(e=>e.type)},[q]),Y=(0,w.useMemo)(()=>{var e;return 0===E.length&&q&&!!(null==q?void 0:null===(e=q.recommend_questions)||void 0===e?void 0:e.length)},[E,q]),{run:ee,loading:el}=(0,x.Z)(async()=>await (0,a.Vx)((0,a.zR)(P)),{manual:!0,onSuccess:()=>{J([])}});return(0,w.useEffect)(()=>{j&&R&&P&&q&&G(j)},[q,P,R,j]),(0,n.jsxs)("div",{className:"flex flex-col",children:[Y&&(0,n.jsx)("ul",{children:null==q?void 0:null===(e=q.recommend_questions)||void 0===e?void 0:e.map((e,l)=>(0,n.jsx)("li",{className:"mb-3",children:(0,n.jsx)(v.Z,{color:S[l],className:"p-2 rounded-xl",onClick:async()=>{G(e.question)},children:e.question})},e.id))}),(0,n.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,n.jsxs)("div",{className:"flex gap-2 mb-1 w-full overflow-x-auto",children:[(null==Q?void 0:Q.includes("model"))&&(0,n.jsx)(N.default,{}),(null==Q?void 0:Q.includes("resource"))&&(0,n.jsx)(k.default,{}),(null==Q?void 0:Q.includes("temperature"))&&(0,n.jsx)(C.default,{})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between text-lg font-bold",children:[(0,n.jsx)(h.Z,{content:"暂停回复",trigger:["hover"],children:(0,n.jsx)(i.Z,{className:b()("p-2 cursor-pointer",{"text-[#0c75fc]":D,"text-gray-400":!D}),onClick:()=>{var e;D&&(null===(e=I.current)||void 0===e||e.abort(),setTimeout(()=>{U(!1),L(!0)},100))}})}),(0,n.jsx)(h.Z,{content:"再来一次",trigger:["hover"],children:(0,n.jsx)(o.Z,{className:b()("p-2 cursor-pointer",{"text-gray-400":!E.length||!F}),onClick:()=>{var e,l;if(!F||0===E.length)return;let t=null===(e=null===(l=E.filter(e=>"human"===e.role))||void 0===l?void 0:l.slice(-1))||void 0===e?void 0:e[0];G((null==t?void 0:t.context)||"")}})}),el?(0,n.jsx)(p.Z,{spinning:el,indicator:(0,n.jsx)(d.Z,{style:{fontSize:18},spin:!0}),className:"p-2"}):(0,n.jsx)(h.Z,{content:"清除历史",trigger:["hover"],children:(0,n.jsx)(c.Z,{className:b()("p-2 cursor-pointer",{"text-gray-400":!E.length||!F}),onClick:()=>{F&&ee()}})})]})]}),(0,n.jsxs)("div",{className:b()("flex py-2 px-3 items-center justify-between bg-white dark:bg-[#242733] dark:border-[#6f7f95] rounded-xl border",{"border-[#0c75fc] dark:border-[rgba(12,117,252,0.8)]":$}),children:[(0,n.jsx)(f.default.TextArea,{placeholder:"可以问我任何问题",className:"w-full resize-none border-0 p-0 focus:shadow-none",value:z,autoSize:{minRows:1},onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){if(W){e.preventDefault();return}z.trim()&&(e.preventDefault(),X())}},onChange:e=>{B(e.target.value)},onFocus:()=>{H(!0)},onBlur:()=>H(!1),onCompositionStartCapture:()=>{K(!0)},onCompositionEndCapture:()=>{setTimeout(()=>{K(!1)},0)}}),(0,n.jsx)(g.ZP,{type:"primary",className:b()("flex items-center justify-center rounded-lg bg-button-gradient border-0 ml-2",{"opacity-40 cursor-not-allowed":!z.trim()||!F}),onClick:X,children:F?(0,n.jsx)(u.Z,{}):(0,n.jsx)(p.Z,{indicator:(0,n.jsx)(d.Z,{className:"text-white"})})})]})]})}},7001:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(41468),s=t(39718),r=t(94668),i=t(85418),o=t(55241),d=t(67294),c=t(73913);l.default=()=>{let{modelList:e}=(0,d.useContext)(a.p),{model:l,setModel:t}=(0,d.useContext)(c.MobileChatContext),u=(0,d.useMemo)(()=>e.length>0?e.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{t(e)},children:[(0,n.jsx)(s.Z,{width:14,height:14,model:e}),(0,n.jsx)("span",{className:"text-xs",children:e})]}),key:e})):[],[e,t]);return(0,n.jsx)(i.Z,{menu:{items:u},placement:"top",trigger:["click"],children:(0,n.jsx)(o.Z,{content:l,children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(s.Z,{width:16,height:16,model:l}),(0,n.jsx)("span",{className:"text-xs font-medium line-clamp-1",style:{maxWidth:96},children:l}),(0,n.jsx)(r.Z,{rotate:90})]})})})}},46568:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(25675),s=t.n(a),r=t(67294);l.default=(0,r.memo)(e=>{let{width:l,height:t,src:a,label:r}=e;return(0,n.jsx)(s(),{width:l||14,height:t||14,src:a,alt:r||"db-icon",priority:!0})})},73749:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(76212),s=t(57249),r=t(62418),i=t(50888),o=t(94668),d=t(83266),c=t(65654),u=t(74330),m=t(23799),x=t(85418),v=t(67294),h=t(73913),p=t(46568);l.default=()=>{let{appInfo:e,resourceList:l,scene:t,model:f,conv_uid:g,getChatHistoryRun:j,setResource:b,resource:y}=(0,v.useContext)(h.MobileChatContext),{temperatureValue:w,maxNewTokensValue:_}=(0,v.useContext)(s.ChatContentContext),[N,k]=(0,v.useState)(null),C=(0,v.useMemo)(()=>{var l,t,n;return null===(l=null==e?void 0:null===(t=e.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type))||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:n.value},[e]),Z=(0,v.useMemo)(()=>l&&l.length>0?l.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{k(e),b(e.space_id||e.param)},children:[(0,n.jsx)(p.default,{width:14,height:14,src:r.S$[e.type].icon,label:r.S$[e.type].label}),(0,n.jsx)("span",{className:"text-xs",children:e.param})]}),key:e.space_id||e.param})):[],[l,b]),{run:S,loading:E}=(0,c.Z)(async e=>{let[,l]=await (0,a.Vx)((0,a.qn)({convUid:g,chatMode:t,data:e,model:f,temperatureValue:w,maxNewTokensValue:_,config:{timeout:36e5}}));return b(l),l},{manual:!0,onSuccess:async()=>{await j()}}),R=async e=>{let l=new FormData;l.append("doc_file",null==e?void 0:e.file),await S(l)},M=(0,v.useMemo)(()=>E?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(u.Z,{size:"small",indicator:(0,n.jsx)(i.Z,{spin:!0})}),(0,n.jsx)("span",{className:"text-xs",children:"上传中"})]}):y?(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("span",{className:"text-xs",children:y.file_name}),(0,n.jsx)(o.Z,{rotate:90})]}):(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(d.Z,{className:"text-base"}),(0,n.jsx)("span",{className:"text-xs",children:"上传文件"})]}),[E,y]);return(0,n.jsx)(n.Fragment,{children:(()=>{switch(C){case"excel_file":case"text_file":case"image_file":return(0,n.jsx)("div",{className:"flex items-center justify-center gap-1 border rounded-xl bg-white dark:bg-black px-2 flex-shrink-0",children:(0,n.jsx)(m.default,{name:"file",accept:".xlsx,.xls",maxCount:1,showUploadList:!1,beforeUpload:()=>!1,onChange:R,className:"flex h-full w-full items-center justify-center",children:M})});case"database":case"knowledge":case"plugin":case"awel_flow":var e,t,a,s,i;if(!(null==l?void 0:l.length))return null;return(0,n.jsx)(x.Z,{menu:{items:Z},placement:"top",trigger:["click"],children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(p.default,{width:14,height:14,src:null===(e=r.S$[(null==N?void 0:N.type)||(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.type)])||void 0===e?void 0:e.icon,label:null===(a=r.S$[(null==N?void 0:N.type)||(null==l?void 0:null===(s=l[0])||void 0===s?void 0:s.type)])||void 0===a?void 0:a.label}),(0,n.jsx)("span",{className:"text-xs font-medium",children:(null==N?void 0:N.param)||(null==l?void 0:null===(i=l[0])||void 0===i?void 0:i.param)}),(0,n.jsx)(o.Z,{rotate:90})]})})}})()})}},97109:function(e,l,t){"use strict";t.r(l);var n=t(85893),a=t(70065),s=t(85418),r=t(30568),i=t(67294),o=t(73913);l.default=()=>{let{temperature:e,setTemperature:l}=(0,i.useContext)(o.MobileChatContext),t=e=>{isNaN(e)||l(e)};return(0,n.jsx)(s.Z,{trigger:["click"],dropdownRender:()=>(0,n.jsx)("div",{className:"flex h-28 bg-white dark:bg-[rgba(255,255,255,0.5)] items-center justify-center rounded-xl py-3",children:(0,n.jsx)(r.Z,{defaultValue:.5,max:1,min:0,step:.1,vertical:!0,onChange:t,value:e})}),placement:"top",children:(0,n.jsxs)("div",{className:"flex items-center justify-between border rounded-xl bg-white dark:bg-black w-14 p-2 flex-shrink-0",children:[(0,n.jsx)(a.Z,{type:"icon-icons-temperature",className:"text-sm"}),(0,n.jsx)("span",{className:"text-xs font-medium",children:e})]})})}},73913:function(e,l,t){"use strict";t.r(l),t.d(l,{MobileChatContext:function(){return b}});var n=t(85893),a=t(41468),s=t(76212),r=t(2440),i=t(62418),o=t(25519),d=t(1375),c=t(65654),u=t(74330),m=t(5152),x=t.n(m),v=t(39332),h=t(67294),p=t(56397),f=t(74638),g=t(83454);let j=x()(()=>Promise.all([t.e(3662),t.e(7034),t.e(6106),t.e(8674),t.e(3166),t.e(2837),t.e(2168),t.e(8163),t.e(2398),t.e(4567),t.e(1300),t.e(9773),t.e(4035),t.e(152),t.e(2510),t.e(8592),t.e(9202),t.e(3745),t.e(626),t.e(6818)]).then(t.bind(t,36818)),{loadableGenerated:{webpack:()=>[36818]},ssr:!1}),b=(0,h.createContext)({model:"",temperature:.5,resource:null,setModel:()=>{},setTemperature:()=>{},setResource:()=>{},scene:"",history:[],setHistory:()=>{},scrollViewRef:{current:null},appInfo:{},conv_uid:"",resourceList:[],order:{current:1},handleChat:()=>Promise.resolve(),canAbort:!1,setCarAbort:()=>{},canNewChat:!1,setCanNewChat:()=>{},ctrl:{current:void 0},userInput:"",setUserInput:()=>{},getChatHistoryRun:()=>{}});l.default=()=>{var e,l;let t=(0,v.useSearchParams)(),m=null!==(e=null==t?void 0:t.get("chat_scene"))&&void 0!==e?e:"",x=null!==(l=null==t?void 0:t.get("app_code"))&&void 0!==l?l:"",{modelList:y}=(0,h.useContext)(a.p),[w,_]=(0,h.useState)([]),[N,k]=(0,h.useState)(""),[C,Z]=(0,h.useState)(.5),[S,E]=(0,h.useState)(null),R=(0,h.useRef)(null),[M,O]=(0,h.useState)(""),[A,P]=(0,h.useState)(!1),[q,T]=(0,h.useState)(!0),V=(0,h.useRef)(),z=(0,h.useRef)(1),I=(0,r.Z)(),D=(0,h.useMemo)(()=>"".concat(null==I?void 0:I.user_no,"_").concat(x),[x,I]),{run:F,loading:J}=(0,c.Z)(async()=>await (0,s.Vx)((0,s.$i)("".concat(null==I?void 0:I.user_no,"_").concat(x))),{manual:!0,onSuccess:e=>{let[,l]=e,t=null==l?void 0:l.filter(e=>"view"===e.role);t&&t.length>0&&(z.current=t[t.length-1].order+1),_(l||[])}}),{data:L,run:U,loading:B}=(0,c.Z)(async e=>{let[,l]=await (0,s.Vx)((0,s.BN)(e));return null!=l?l:{}},{manual:!0}),{run:$,data:H,loading:W}=(0,c.Z)(async()=>{var e,l;let[,t]=await (0,s.Vx)((0,s.vD)(m));return E((null==t?void 0:null===(e=t[0])||void 0===e?void 0:e.space_id)||(null==t?void 0:null===(l=t[0])||void 0===l?void 0:l.param)),null!=t?t:[]},{manual:!0}),{run:K,loading:G}=(0,c.Z)(async()=>{let[,e]=await (0,s.Vx)((0,s.iP)());return null!=e?e:[]},{manual:!0,onSuccess:e=>{var l;let t=null===(l=null==e?void 0:e.filter(e=>e.conv_uid===D))||void 0===l?void 0:l[0];(null==t?void 0:t.select_param)&&E(JSON.parse(null==t?void 0:t.select_param))}});(0,h.useEffect)(()=>{m&&x&&y.length&&U({chat_scene:m,app_code:x})},[x,m,U,y]),(0,h.useEffect)(()=>{x&&F()},[x]),(0,h.useEffect)(()=>{if(y.length>0){var e,l,t;let n=null===(e=null==L?void 0:null===(l=L.param_need)||void 0===l?void 0:l.filter(e=>"model"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;k(n||y[0])}},[y,L]),(0,h.useEffect)(()=>{var e,l,t;let n=null===(e=null==L?void 0:null===(l=L.param_need)||void 0===l?void 0:l.filter(e=>"temperature"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;Z(n||.5)},[L]),(0,h.useEffect)(()=>{if(m&&(null==L?void 0:L.app_code)){var e,l,t,n,a,s;let r=null===(e=null==L?void 0:null===(l=L.param_need)||void 0===l?void 0:l.filter(e=>"resource"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value,i=null===(n=null==L?void 0:null===(a=L.param_need)||void 0===a?void 0:a.filter(e=>"resource"===e.type))||void 0===n?void 0:null===(s=n[0])||void 0===s?void 0:s.bind_value;i&&E(i),["database","knowledge","plugin","awel_flow"].includes(r)&&!i&&$()}},[L,m,$]);let X=async e=>{var l,t,n;O(""),V.current=new AbortController;let a={chat_mode:m,model_name:N,user_input:e||M,conv_uid:D,temperature:C,app_code:null==L?void 0:L.app_code,...S&&{select_param:S}};if(w&&w.length>0){let e=null==w?void 0:w.filter(e=>"view"===e.role);z.current=e[e.length-1].order+1}let s=[{role:"human",context:e||M,model_name:N,order:z.current,time_stamp:0},{role:"view",context:"",model_name:N,order:z.current,time_stamp:0,thinking:!0}],r=s.length-1;_([...w,...s]),T(!1);try{await (0,d.L)("".concat(null!==(l=g.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[o.gp]:null!==(t=(0,i.n5)())&&void 0!==t?t:""},signal:V.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===d.a)return},onclose(){var e;null===(e=V.current)||void 0===e||e.abort(),T(!0),P(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(T(!0),P(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(s[r].context=null==l?void 0:l.replace("[ERROR]",""),s[r].thinking=!1,_([...w,...s]),T(!0),P(!1)):(P(!0),s[r].context=l,s[r].thinking=!1,_([...w,...s]))}})}catch(e){null===(n=V.current)||void 0===n||n.abort(),s[r].context="Sorry, we meet some error, please try again later.",s[r].thinking=!1,_([...s]),T(!0),P(!1)}};return(0,h.useEffect)(()=>{m&&"chat_agent"!==m&&K()},[m,K]),(0,n.jsx)(b.Provider,{value:{model:N,resource:S,setModel:k,setTemperature:Z,setResource:E,temperature:C,appInfo:L,conv_uid:D,scene:m,history:w,scrollViewRef:R,setHistory:_,resourceList:H,order:z,handleChat:X,setCanNewChat:T,ctrl:V,canAbort:A,setCarAbort:P,canNewChat:q,userInput:M,setUserInput:O,getChatHistoryRun:F},children:(0,n.jsx)(u.Z,{size:"large",className:"flex h-screen w-screen justify-center items-center max-h-screen",spinning:J||B||W||G,children:(0,n.jsxs)("div",{className:"flex flex-col h-screen bg-gradient-light dark:bg-gradient-dark p-4 pt-0",children:[(0,n.jsxs)("div",{ref:R,className:"flex flex-col flex-1 overflow-y-auto mb-3",children:[(0,n.jsx)(p.default,{}),(0,n.jsx)(j,{})]}),(null==L?void 0:L.app_code)&&(0,n.jsx)(f.default,{})]})})})}}},function(e){e.O(0,[3662,7034,6106,8674,3166,2837,2168,8163,2913,3791,5278,8791,4330,7611,1049,5030,2783,2398,3457,2622,5914,4567,7124,9859,1300,4633,9773,4035,152,2510,8592,9202,7185,7249,626,9774,2888,179],function(){return e(e.s=45745)}),_N_E=e.O()}]);