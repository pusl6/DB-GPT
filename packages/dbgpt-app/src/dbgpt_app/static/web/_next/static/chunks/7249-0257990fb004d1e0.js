(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7249],{98978:function(e,t,a){"use strict";var l=a(85893),s=a(25675),n=a.n(s);t.Z=function(e){let{src:t,label:a,width:s,height:r,className:i}=e;return(0,l.jsx)(n(),{className:"w-11 h-11 rounded-full mr-4 border border-gray-200 object-contain bg-white ".concat(i),width:s||44,height:r||44,src:t,alt:a||"db-icon"})}},43446:function(e,t,a){"use strict";var l=a(41468),s=a(64371),n=a(62418),r=a(25519),i=a(1375),o=a(45360),c=a(67294),d=a(83454);t.Z=e=>{let{queryAgentURL:t="/api/v1/chat/completions",app_code:a}=e,[u,m]=(0,c.useState)({}),{scene:p}=(0,c.useContext)(l.p),x=(0,c.useCallback)(async e=>{let{data:l,chatId:c,onMessage:u,onClose:x,onDone:h,onError:f,ctrl:v}=e;if(v&&m(v),!(null==l?void 0:l.user_input)&&!(null==l?void 0:l.doc_id)){o.ZP.warning(s.Z.t("no_context_tip"));return}let g={...l,conv_uid:c,app_code:a};try{var _,j;await (0,i.L)("".concat(null!==(_=d.env.API_BASE_URL)&&void 0!==_?_:"").concat(t),{method:"POST",headers:{"Content-Type":"application/json",[r.gp]:null!==(j=(0,n.n5)())&&void 0!==j?j:""},body:JSON.stringify(g),signal:v?v.signal:null,openWhenHidden:!0,async onopen(e){e.ok&&e.headers.get("content-type")===i.a||"application/json"!==e.headers.get("content-type")||e.json().then(e=>{null==u||u(e),null==h||h(),v&&v.abort()})},onclose(){v&&v.abort(),null==x||x()},onerror(e){throw Error(e)},onmessage:e=>{let t=e.data;try{t="chat_agent"===p?JSON.parse(t).vis:JSON.parse(t)}catch(e){t.replaceAll("\\n","\n")}"string"==typeof t?"[DONE]"===t?null==h||h():(null==t?void 0:t.startsWith("[ERROR]"))?null==f||f(null==t?void 0:t.replace("[ERROR]","")):null==u||u(t):(null==u||u(t),null==h||h())}})}catch(e){v&&v.abort(),null==f||f("Sorry, We meet some error, please try agin later.",e)}},[t,a,p]);return{chat:x,ctrl:u}}},91467:function(e,t,a){"use strict";a.d(t,{TH:function(){return h},ZS:function(){return f}});var l=a(85893),s=a(89705),n=a(83062),r=a(96074),i=a(45030),o=a(85418),c=a(93967),d=a.n(c),u=a(36609),m=a(25675),p=a.n(m);a(67294);var x=a(48218);a(11873);let h=e=>{let{onClick:t,Icon:a="/pictures/card_chat.png",text:s=(0,u.t)("start_chat")}=e;return"string"==typeof a&&(a=(0,l.jsx)(p(),{src:a,alt:a,width:17,height:15})),(0,l.jsxs)("div",{className:"flex items-center gap-1 text-default",onClick:e=>{e.stopPropagation(),t&&t()},children:[a,(0,l.jsx)("span",{children:s})]})},f=e=>{let{menu:t}=e;return(0,l.jsx)(o.Z,{menu:t,getPopupContainer:e=>e.parentNode,placement:"bottomRight",autoAdjustOverflow:!1,children:(0,l.jsx)(s.Z,{className:"p-2 hover:bg-white hover:dark:bg-black rounded-md"})})};t.ZP=e=>{let{RightTop:t,Tags:a,LeftBottom:s,RightBottom:o,onClick:c,rightTopHover:u=!0,logo:m,name:h,description:f,className:v,scene:g,code:_}=e;return"string"==typeof f&&(f=(0,l.jsx)("p",{className:"line-clamp-2 relative bottom-4 text-ellipsis min-h-[42px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]",children:f})),(0,l.jsx)("div",{className:d()("hover-underline-gradient flex justify-center mt-6 relative group w-1/3 px-2 mb-6",v),children:(0,l.jsxs)("div",{onClick:c,className:"backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-lg shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",children:[(0,l.jsxs)("div",{className:"flex items-end relative bottom-8 justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex items-end gap-4 w-11/12  flex-1",children:[(0,l.jsx)("div",{className:"bg-white rounded-lg shadow-sm w-14 h-14 flex items-center p-3",children:g?(0,l.jsx)(x.Z,{scene:g,width:14,height:14}):m&&(0,l.jsx)(p(),{src:m,width:44,height:44,alt:h,className:"w-8 min-w-8 rounded-full max-w-none"})}),(0,l.jsx)("div",{className:"flex-1",children:h.length>6?(0,l.jsx)(n.Z,{title:h,children:(0,l.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:h})}):(0,l.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:h})})]}),(0,l.jsx)("span",{className:d()("shrink-0",{hidden:u,"group-hover:block":u}),onClick:e=>{e.stopPropagation()},children:t})]}),f,(0,l.jsx)("div",{className:"relative bottom-2",children:a}),(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("div",{children:s}),(0,l.jsx)("div",{children:o})]}),_&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{className:"my-3"}),(0,l.jsx)(i.Z.Text,{copyable:!0,className:"absolute bottom-1 right-4 text-xs text-gray-500",children:_})]})]})})}},57249:function(e,t,a){"use strict";a.r(t),a.d(t,{ChatContentContext:function(){return eP},default:function(){return eM}});var l=a(85893),s=a(41468),n=a(76212),r=a(43446),i=a(50888),o=a(90598),c=a(75750),d=a(58638),u=a(45360),m=a(66309),p=a(45030),x=a(74330),h=a(20640),f=a.n(h),v=a(67294),g=a(67421),_=a(65654),j=a(48218);let b=["magenta","orange","geekblue","purple","cyan","green"];var w=e=>{var t,a,s,r,h,w;let{isScrollToTop:y}=e,{appInfo:N,refreshAppInfo:k,handleChat:Z,scrollRef:S,temperatureValue:C,resourceValue:P,currentDialogue:M}=(0,v.useContext)(eP),{t:V}=(0,g.$G)(),R=(0,v.useMemo)(()=>{var e;return(null==N?void 0:null===(e=N.team_context)||void 0===e?void 0:e.chat_scene)||"chat_agent"},[N]),T=(0,v.useMemo)(()=>(null==N?void 0:N.is_collected)==="true",[N]),{run:L,loading:O}=(0,_.Z)(async()=>{let[e]=await (0,n.Vx)(T?(0,n.gD)({app_code:N.app_code}):(0,n.mo)({app_code:N.app_code}));if(!e)return await k()},{manual:!0}),z=(0,v.useMemo)(()=>{var e;return(null===(e=N.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[N.param_need]);if(!Object.keys(N).length)return null;let E=async()=>{let e=f()(location.href);u.ZP[e?"success":"error"](e?V("copy_success"):V("copy_failed"))};return(0,l.jsx)("div",{className:"h-20 mt-6 ".concat((null==N?void 0:N.recommend_questions)&&(null==N?void 0:null===(t=N.recommend_questions)||void 0===t?void 0:t.length)>0?"mb-6":""," sticky top-0 bg-transparent z-30 transition-all duration-400 ease-in-out"),children:y?(0,l.jsxs)("header",{className:"flex items-center justify-between w-full h-14 bg-[#ffffffb7] dark:bg-[rgba(41,63,89,0.4)]  px-8 transition-all duration-500 ease-in-out",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg mr-2 bg-white",children:(0,l.jsx)(j.Z,{scene:R})}),(0,l.jsxs)("div",{className:"flex items-center text-base text-[#1c2533] dark:text-[rgba(255,255,255,0.85)] font-semibold gap-2",children:[(0,l.jsx)("span",{children:null==N?void 0:N.app_name}),(0,l.jsxs)("div",{className:"flex gap-1",children:[(null==N?void 0:N.team_mode)&&(0,l.jsx)(m.Z,{color:"green",children:null==N?void 0:N.team_mode}),(null==N?void 0:null===(a=N.team_context)||void 0===a?void 0:a.chat_scene)&&(0,l.jsx)(m.Z,{color:"cyan",children:null==N?void 0:null===(s=N.team_context)||void 0===s?void 0:s.chat_scene})]})]})]}),(0,l.jsxs)("div",{className:"flex gap-8",onClick:async()=>{await L()},children:[O?(0,l.jsx)(x.Z,{spinning:O,indicator:(0,l.jsx)(i.Z,{style:{fontSize:24},spin:!0})}):(0,l.jsx)(l.Fragment,{children:T?(0,l.jsx)(o.Z,{style:{fontSize:18},className:"text-yellow-400 cursor-pointer"}):(0,l.jsx)(c.Z,{style:{fontSize:18,cursor:"pointer"}})}),(0,l.jsx)(d.Z,{className:"text-lg",onClick:e=>{e.stopPropagation(),E()}})]})]}):(0,l.jsxs)("header",{className:"flex items-center justify-between w-5/6 h-full px-6  bg-[#ffffff99] border dark:bg-[rgba(255,255,255,0.1)] dark:border-[rgba(255,255,255,0.1)] rounded-2xl mx-auto transition-all duration-400 ease-in-out relative",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"flex w-12 h-12 justify-center items-center rounded-xl mr-4 bg-white",children:(0,l.jsx)(j.Z,{scene:R,width:16,height:16})}),(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsxs)("div",{className:"flex items-center text-base text-[#1c2533] dark:text-[rgba(255,255,255,0.85)] font-semibold gap-2",children:[(0,l.jsx)("span",{children:null==N?void 0:N.app_name}),(0,l.jsxs)("div",{className:"flex gap-1",children:[(null==N?void 0:N.team_mode)&&(0,l.jsx)(m.Z,{color:"green",children:null==N?void 0:N.team_mode}),(null==N?void 0:null===(r=N.team_context)||void 0===r?void 0:r.chat_scene)&&(0,l.jsx)(m.Z,{color:"cyan",children:null==N?void 0:null===(h=N.team_context)||void 0===h?void 0:h.chat_scene})]})]}),(0,l.jsx)(p.Z.Text,{className:"text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)] leading-6",ellipsis:{tooltip:!0},children:null==N?void 0:N.app_describe})]})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)("div",{onClick:async()=>{await L()},className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:O?(0,l.jsx)(x.Z,{spinning:O,indicator:(0,l.jsx)(i.Z,{style:{fontSize:24},spin:!0})}):(0,l.jsx)(l.Fragment,{children:T?(0,l.jsx)(o.Z,{style:{fontSize:18},className:"text-yellow-400 cursor-pointer"}):(0,l.jsx)(c.Z,{style:{fontSize:18,cursor:"pointer"}})})}),(0,l.jsx)("div",{onClick:E,className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:(0,l.jsx)(d.Z,{className:"text-lg"})})]}),!!(null==N?void 0:null===(w=N.recommend_questions)||void 0===w?void 0:w.length)&&(0,l.jsxs)("div",{className:"absolute  bottom-[-40px] left-0",children:[(0,l.jsx)("span",{className:"text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)] leading-6",children:"或许你想问："}),N.recommend_questions.map((e,t)=>(0,l.jsx)(m.Z,{color:b[t],className:"text-xs p-1 px-2 cursor-pointer",onClick:async()=>{Z((null==e?void 0:e.question)||"",{app_code:N.app_code,...z.includes("temperature")&&{temperature:C},...z.includes("resource")&&{select_param:"string"==typeof P?P:JSON.stringify(P)||M.select_param}}),setTimeout(()=>{var e,t;null===(e=S.current)||void 0===e||e.scrollTo({top:null===(t=S.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})},0)},children:e.question},e.id))]})]})})},y=a(5152),N=a.n(y);let k=N()(()=>Promise.all([a.e(3662),a.e(7034),a.e(6106),a.e(8674),a.e(3166),a.e(2837),a.e(2168),a.e(8163),a.e(2398),a.e(4567),a.e(1300),a.e(9773),a.e(4035),a.e(152),a.e(2510),a.e(8592),a.e(9202),a.e(3764),a.e(5e3),a.e(6216),a.e(626),a.e(3913),a.e(4434),a.e(9958)]).then(a.bind(a,88331)),{loadableGenerated:{webpack:()=>[88331]},ssr:!1});var Z=(0,v.forwardRef)((e,t)=>{let{}=e,a=(0,v.useRef)(null),[s,n]=(0,v.useState)(!1);return(0,v.useImperativeHandle)(t,()=>a.current),(0,v.useEffect)(()=>(a.current&&a.current.addEventListener("scroll",()=>{var e;let t=(null===(e=a.current)||void 0===e?void 0:e.scrollTop)||0;t>=74?n(!0):n(!1)}),()=>{a.current&&a.current.removeEventListener("scroll",()=>{})}),[]),(0,l.jsx)("div",{className:"flex flex-1 overflow-hidden",children:(0,l.jsxs)("div",{ref:a,className:"h-full w-full mx-auto overflow-y-auto",children:[(0,l.jsx)(w,{isScrollToTop:s}),(0,l.jsx)(k,{})]})})}),S=a(89546),C=a(91467),P=a(7134),M=a(32983),V=a(25675),R=a.n(V),T=a(11163),L=a(70065),O=e=>{let{apps:t,refresh:a,loading:r,type:i}=e,d=async e=>{let[t]=await (0,n.Vx)("true"===e.is_collected?(0,n.gD)({app_code:e.app_code}):(0,n.mo)({app_code:e.app_code}));t||a()},{setAgent:u,model:m,setCurrentDialogInfo:p}=(0,v.useContext)(s.p),h=(0,T.useRouter)(),f=async e=>{if("native_app"===e.team_mode){let{chat_scene:t=""}=e.team_context,[,a]=await (0,n.Vx)((0,n.sW)({chat_mode:t}));a&&(null==p||p({chat_scene:a.chat_mode,app_code:e.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:a.chat_mode,app_code:e.app_code})),h.push("/chat?scene=".concat(t,"&id=").concat(a.conv_uid).concat(m?"&model=".concat(m):"")))}else{let[,t]=await (0,n.Vx)((0,n.sW)({chat_mode:"chat_agent"}));t&&(null==p||p({chat_scene:t.chat_mode,app_code:e.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:t.chat_mode,app_code:e.app_code})),null==u||u(e.app_code),h.push("/chat/?scene=chat_agent&id=".concat(t.conv_uid).concat(m?"&model=".concat(m):"")))}};return r?(0,l.jsx)(x.Z,{size:"large",className:"flex items-center justify-center h-full",spinning:r}):(0,l.jsx)("div",{className:"flex flex-wrap mt-4 w-full overflow-y-auto ",children:(null==t?void 0:t.length)>0?t.map(e=>{var t;return(0,l.jsx)(C.ZP,{name:e.app_name,description:e.app_describe,onClick:()=>f(e),RightTop:"true"===e.is_collected?(0,l.jsx)(o.Z,{onClick:t=>{t.stopPropagation(),d(e)},style:{height:"21px",cursor:"pointer",color:"#f9c533"}}):(0,l.jsx)(c.Z,{onClick:t=>{t.stopPropagation(),d(e)},style:{height:"21px",cursor:"pointer"}}),LeftBottom:(0,l.jsxs)("div",{className:"flex gap-8 items-center text-gray-500 text-sm",children:[e.owner_name&&(0,l.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,l.jsx)(P.C,{src:null==e?void 0:e.owner_avatar_url,className:"bg-gradient-to-tr from-[#31afff] to-[#1677ff] cursor-pointer",children:e.owner_name}),(0,l.jsx)("span",{children:e.owner_name})]}),"used"!==i&&(0,l.jsxs)("div",{className:"flex items-start gap-1",children:[(0,l.jsx)(L.Z,{type:"icon-hot",className:"text-lg"}),(0,l.jsx)("span",{className:"text-[#878c93]",children:e.hot_value})]})]}),scene:(null==e?void 0:null===(t=e.team_context)||void 0===t?void 0:t.chat_scene)||"chat_agent"},e.app_code)}):(0,l.jsx)(M.Z,{image:(0,l.jsx)(R(),{src:"/pictures/empty.png",alt:"empty",width:142,height:133,className:"w-[142px] h-[133px]"}),className:"flex justify-center items-center w-full h-full min-h-[200px]"})})},z=a(62418),E=a(25278),A=a(14726),D=a(93967),G=a.n(D),J=function(){let{setCurrentDialogInfo:e}=(0,v.useContext)(s.p),{t}=(0,g.$G)(),a=(0,T.useRouter)(),[r,i]=(0,v.useState)(""),[o,c]=(0,v.useState)(!1),[d,u]=(0,v.useState)(!1),m=async()=>{let[,t]=await (0,n.Vx)((0,n.sW)({chat_mode:"chat_normal"}));t&&(null==e||e({chat_scene:t.chat_mode,app_code:t.chat_mode}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:t.chat_mode,app_code:t.chat_mode})),localStorage.setItem(z.rU,JSON.stringify({id:t.conv_uid,message:r})),a.push("/chat/?scene=chat_normal&id=".concat(t.conv_uid))),i("")};return(0,l.jsxs)("div",{className:"flex flex-1 h-12 p-2 pl-4 items-center justify-between bg-white dark:bg-[#242733] dark:border-[#6f7f95] rounded-xl  border-t border-b border-l border-r ".concat(o?"border-[#0c75fc]":""),children:[(0,l.jsx)(E.default.TextArea,{placeholder:t("input_tips"),className:"w-full resize-none border-0 p-0 focus:shadow-none",value:r,autoSize:{minRows:1},onKeyDown:e=>{"Enter"===e.key&&!e.shiftKey&&!d&&(e.preventDefault(),r.trim()&&m())},onChange:e=>{i(e.target.value)},onFocus:()=>{c(!0)},onBlur:()=>c(!1),onCompositionStart:()=>u(!0),onCompositionEnd:()=>u(!1)}),(0,l.jsx)(A.ZP,{type:"primary",className:G()("flex items-center justify-center w-14 h-8 rounded-lg text-sm  bg-button-gradient border-0",{"opacity-40 cursor-not-allowed":!r.trim()}),onClick:()=>{r.trim()&&m()},children:t("sent")})]})},W=a(28459),I=a(92783),$=a(36609),q=function(){let{setCurrentDialogInfo:e,model:t}=(0,v.useContext)(s.p),a=(0,T.useRouter)(),[r,i]=(0,v.useState)({app_list:[],total_count:0}),[o,c]=(0,v.useState)("recommend"),d=e=>(0,n.Vx)((0,n.yk)({...e,page_no:"1",page_size:"6"})),u=e=>(0,n.Vx)((0,n.mW)({page_no:"1",page_size:"6",...e})),{run:m,loading:p,refresh:x}=(0,_.Z)(async e=>{switch(o){case"recommend":return await u({});case"used":return await d({is_recent_used:"true",need_owner_info:"true",...e&&{app_name:e}});default:return[]}},{manual:!0,onSuccess:e=>{let[t,a]=e;if("recommend"===o)return i({app_list:a,total_count:(null==a?void 0:a.length)||0});i(a||{})},debounceWait:500});(0,v.useEffect)(()=>{m()},[o,m]);let h=[{value:"recommend",label:(0,$.t)("recommend_apps")},{value:"used",label:(0,$.t)("used_apps")}],{data:f}=(0,_.Z)(async()=>{let[,e]=await (0,n.Vx)((0,S.A)({is_hot_question:"true"}));return null!=e?e:[]});return(0,l.jsx)(W.ZP,{theme:{components:{Button:{defaultBorderColor:"white"},Segmented:{itemSelectedBg:"#2867f5",itemSelectedColor:"white"}}},children:(0,l.jsxs)("div",{className:"px-28 py-10 h-full flex flex-col justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)(I.Z,{className:"backdrop-filter h-10 backdrop-blur-lg bg-white bg-opacity-30 border border-white rounded-lg shadow p-1 dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",options:h,value:o,onChange:e=>{c(e)}}),(0,l.jsxs)("span",{className:"flex items-center text-gray-500 gap-1 dark:text-slate-300",children:[(0,l.jsx)("span",{children:(0,$.t)("app_in_mind")}),(0,l.jsxs)("span",{className:"flex items-center cursor-pointer",onClick:()=>{a.push("/")},children:[(0,l.jsx)(R(),{src:"/pictures/explore_active.png",alt:"construct_image",width:24,height:24},"image_explore"),(0,l.jsx)("span",{className:"text-default",children:(0,$.t)("explore")})]}),(0,l.jsx)("span",{children:(0,$.t)("Discover_more")})]})]}),(0,l.jsx)(O,{apps:(null==r?void 0:r.app_list)||[],loading:p,refresh:x,type:o}),f&&f.length>0&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-medium text-xl my-4",children:(0,$.t)("help")}),(0,l.jsx)("div",{className:"flex justify-start gap-4",children:f.map(s=>(0,l.jsxs)("span",{className:"flex gap-4 items-center backdrop-filter backdrop-blur-lg cursor-pointer bg-white bg-opacity-70 border-0 rounded-lg shadow p-2 relative dark:bg-[#6f7f95] dark:bg-opacity-60",onClick:async()=>{let[,l]=await (0,n.Vx)((0,n.sW)({chat_mode:"chat_knowledge",model:t}));l&&(null==e||e({chat_scene:l.chat_mode,app_code:s.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:l.chat_mode,app_code:s.app_code})),localStorage.setItem(z.rU,JSON.stringify({id:l.conv_uid,message:s.question})),a.push("/chat/?scene=".concat(l.chat_mode,"&id=").concat(null==l?void 0:l.conv_uid)))},children:[(0,l.jsx)("span",{children:s.question}),(0,l.jsx)(R(),{src:"/icons/send.png",alt:"construct_image",width:20,height:20},"image_explore")]},s.id))})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(J,{})})]})})},F=a(39332),B=a(30159),H=a(87740),U=a(52645),K=a(83062),X=a(11186),Y=a(55241),Q=a(30568),ee=a(13457),et=(0,v.memo)(e=>{let{maxNewTokensValue:t,setMaxNewTokensValue:a}=e,{appInfo:s}=(0,v.useContext)(eP),{t:n}=(0,g.$G)(),r=(0,v.useMemo)(()=>{var e;return(null===(e=s.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[s.param_need]);if(!r.includes("max_new_tokens"))return(0,l.jsx)(K.Z,{title:n("max_new_tokens_tip"),children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)] cursor-pointer",children:(0,l.jsx)(X.Z,{className:"text-xl cursor-not-allowed opacity-30"})})});let i=e=>{null===e||isNaN(e)||a(e)},o=e=>{a(e)};return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(Y.Z,{arrow:!1,trigger:["click"],placement:"topLeft",content:()=>(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(Q.Z,{className:"w-32",min:1,max:20480,step:1,onChange:o,value:"number"==typeof t?t:2048}),(0,l.jsx)(ee.Z,{size:"small",className:"w-20",min:1,max:20480,step:1,onChange:i,value:t})]}),children:(0,l.jsx)(K.Z,{title:n("max_new_tokens"),placement:"bottom",arrow:!1,children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)] cursor-pointer",children:(0,l.jsx)(X.Z,{})})})}),(0,l.jsx)("span",{className:"text-sm ml-2",children:t})]})}),ea=a(42952),el=a(34041),es=a(39718),en=(0,v.memo)(()=>{let{modelList:e}=(0,v.useContext)(s.p),{appInfo:t,modelValue:a,setModelValue:n}=(0,v.useContext)(eP),{t:r}=(0,g.$G)(),i=(0,v.useMemo)(()=>{var e;return(null===(e=t.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[t.param_need]);return i.includes("model")?(0,l.jsx)(el.default,{value:a,placeholder:r("choose_model"),className:"h-8 rounded-3xl",onChange:e=>{n(e)},popupMatchSelectWidth:300,children:e.map(e=>(0,l.jsx)(el.default.Option,{children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(es.Z,{model:e}),(0,l.jsx)("span",{className:"ml-2",children:e})]})},e))}):(0,l.jsx)(K.Z,{title:r("model_tip"),children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)]",children:(0,l.jsx)(ea.Z,{className:"text-xl cursor-not-allowed opacity-30"})})})}),er=a(98978),ei=a(90725),eo=a(83266),ec=a(2093),ed=a(23799),eu=(0,v.memo)(e=>{var t,a,s,r,i;let{fileList:o,setFileList:c,setLoading:d,fileName:u}=e,{setResourceValue:m,appInfo:p,refreshHistory:x,refreshDialogList:h,modelValue:f,resourceValue:j}=(0,v.useContext)(eP),b=(0,F.useSearchParams)(),w=null!==(t=null==b?void 0:b.get("scene"))&&void 0!==t?t:"",y=null!==(a=null==b?void 0:b.get("id"))&&void 0!==a?a:"",{t:N}=(0,g.$G)(),[k,Z]=(0,v.useState)([]),S=(0,v.useMemo)(()=>{var e;return(null===(e=p.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[p.param_need]),C=(0,v.useMemo)(()=>{var e,t;return S.includes("resource")&&(null===(e=null===(t=p.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type)[0])||void 0===e?void 0:e.value)==="database"},[p.param_need,S]),P=(0,v.useMemo)(()=>{var e,t;return S.includes("resource")&&(null===(e=null===(t=p.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type)[0])||void 0===e?void 0:e.value)==="knowledge"},[p.param_need,S]),M=(0,v.useMemo)(()=>{var e;return null===(e=p.param_need)||void 0===e?void 0:e.find(e=>"resource"===e.type)},[p.param_need]),{run:V,loading:R}=(0,_.Z)(async()=>await (0,n.Vx)((0,n.vD)(w)),{manual:!0,onSuccess:e=>{let[,t]=e;Z(null!=t?t:[])}});(0,ec.Z)(async()=>{(C||P)&&!(null==M?void 0:M.bind_value)&&await V()},[C,P,M]);let T=(0,v.useMemo)(()=>{var e;return null===(e=k.map)||void 0===e?void 0:e.call(k,e=>({label:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(er.Z,{width:24,height:24,src:z.S$[e.type].icon,label:z.S$[e.type].label,className:"w-[1.5em] h-[1.5em] mr-1 inline-block mt-[-4px]"}),e.param]}),value:e.param}))},[k]),L=(0,v.useCallback)(async()=>{let e=new FormData;e.append("doc_file",null==o?void 0:o[0]),d(!0);let[t,a]=await (0,n.Vx)((0,n.qn)({convUid:y,chatMode:w,data:e,model:f,config:{timeout:36e5}})).finally(()=>{d(!1)});a&&(m(a),await x(),await h())},[y,o,f,h,x,w,d,m]);if(!S.includes("resource"))return(0,l.jsx)(K.Z,{title:N("extend_tip"),children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)]",children:(0,l.jsx)(ei.Z,{className:"text-lg cursor-not-allowed opacity-30"})})});switch(null==M?void 0:M.value){case"excel_file":case"text_file":case"image_file":return(0,l.jsx)(ed.default,{name:"file",accept:".csv,.xlsx,.xls",fileList:o,showUploadList:!1,beforeUpload:(e,t)=>{null==c||c(t)},customRequest:L,disabled:!!u||!!(null===(s=o[0])||void 0===s?void 0:s.name),children:(0,l.jsx)(K.Z,{title:N("file_tip"),arrow:!1,placement:"bottom",children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)]",children:(0,l.jsx)(eo.Z,{className:G()("text-xl",{"cursor-pointer":!(u||(null===(r=o[0])||void 0===r?void 0:r.name))})})})})});case"database":case"knowledge":case"plugin":case"awel_flow":return j||m(null==T?void 0:null===(i=T[0])||void 0===i?void 0:i.value),(0,l.jsx)(el.default,{value:j,className:"w-52 h-8 rounded-3xl",onChange:e=>{m(e)},disabled:!!(null==M?void 0:M.bind_value),loading:R,options:T})}}),em=(0,v.memo)(e=>{let{temperatureValue:t,setTemperatureValue:a}=e,{appInfo:s}=(0,v.useContext)(eP),{t:n}=(0,g.$G)(),r=(0,v.useMemo)(()=>{var e;return(null===(e=s.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[s.param_need]);if(!r.includes("temperature"))return(0,l.jsx)(K.Z,{title:n("temperature_tip"),children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)] cursor-pointer",children:(0,l.jsx)(X.Z,{className:"text-xl cursor-not-allowed opacity-30"})})});let i=e=>{isNaN(e)||a(e)};return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(Y.Z,{arrow:!1,trigger:["click"],placement:"topLeft",content:()=>(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(Q.Z,{className:"w-20",min:0,max:1,step:.1,onChange:i,value:"number"==typeof t?t:0}),(0,l.jsx)(ee.Z,{size:"small",className:"w-14",min:0,max:1,step:.1,onChange:i,value:t})]}),children:(0,l.jsx)(K.Z,{title:n("temperature"),placement:"bottom",arrow:!1,children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)] cursor-pointer",children:(0,l.jsx)(X.Z,{})})})}),(0,l.jsx)("span",{className:"text-sm ml-2",children:t})]})}),ep=e=>{var t,a;let{ctrl:s}=e,{t:r}=(0,g.$G)(),{history:o,scrollRef:c,canAbort:d,replyLoading:u,currentDialogue:m,appInfo:p,temperatureValue:h,maxNewTokensValue:f,resourceValue:_,setTemperatureValue:j,setMaxNewTokensValue:b,refreshHistory:w,setCanAbort:y,setReplyLoading:N,handleChat:k}=(0,v.useContext)(eP),[Z,S]=(0,v.useState)([]),[C,P]=(0,v.useState)(!1),[M,V]=(0,v.useState)(!1),T=(0,v.useMemo)(()=>{var e;return(null===(e=p.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[p.param_need]),L=(0,v.useMemo)(()=>[{tip:r("stop_replying"),icon:(0,l.jsx)(B.Z,{className:G()({"text-[#0c75fc]":d})}),can_use:d,key:"abort",onClick:()=>{d&&(s.abort(),setTimeout(()=>{y(!1),N(!1)},100))}},{tip:r("answer_again"),icon:(0,l.jsx)(H.Z,{}),can_use:!u&&o.length>0,key:"redo",onClick:async()=>{var e,t;let a=null===(e=null===(t=o.filter(e=>"human"===e.role))||void 0===t?void 0:t.slice(-1))||void 0===e?void 0:e[0];k((null==a?void 0:a.context)||"",{app_code:p.app_code,...T.includes("temperature")&&{temperature:h},...T.includes("max_new_tokens")&&{max_new_tokens:f},...T.includes("resource")&&{select_param:"string"==typeof _?_:JSON.stringify(_)||m.select_param}}),setTimeout(()=>{var e,t;null===(e=c.current)||void 0===e||e.scrollTo({top:null===(t=c.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})},0)}},{tip:r("erase_memory"),icon:M?(0,l.jsx)(x.Z,{spinning:M,indicator:(0,l.jsx)(i.Z,{style:{fontSize:20}})}):(0,l.jsx)(U.Z,{}),can_use:o.length>0,key:"clear",onClick:async()=>{M||(V(!0),await (0,n.Vx)((0,n.zR)(m.conv_uid)).finally(async()=>{await w(),V(!1)}))}}],[r,d,u,o,M,s,y,N,k,p.app_code,T,h,_,m.select_param,m.conv_uid,c,w]),O=(0,v.useMemo)(()=>{try{return JSON.parse(m.select_param).file_name}catch(e){return""}},[m.select_param]);return(0,l.jsxs)("div",{className:"flex flex-col  mb-2",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between h-full w-full",children:[(0,l.jsxs)("div",{className:"flex gap-3 text-lg",children:[(0,l.jsx)(en,{}),(0,l.jsx)(eu,{fileList:Z,setFileList:S,setLoading:P,fileName:O}),(0,l.jsx)(em,{temperatureValue:h,setTemperatureValue:j}),(0,l.jsx)(et,{maxNewTokensValue:f,setMaxNewTokensValue:b})]}),(0,l.jsx)("div",{className:"flex gap-1",children:(0,l.jsx)(l.Fragment,{children:L.map(e=>(0,l.jsx)(K.Z,{title:e.tip,arrow:!1,placement:"bottom",children:(0,l.jsx)("div",{className:"flex w-8 h-8 items-center justify-center rounded-md hover:bg-[rgb(221,221,221,0.6)] text-lg ".concat(e.can_use?"cursor-pointer":"opacity-30 cursor-not-allowed"),onClick:()=>{var t;null===(t=e.onClick)||void 0===t||t.call(e)},children:e.icon})},e.key))})})]}),(O||(null===(t=Z[0])||void 0===t?void 0:t.name))&&(0,l.jsx)("div",{className:"group/item flex mt-2",children:(0,l.jsxs)("div",{className:"flex items-center justify-between w-64 border border-[#e3e4e6] dark:border-[rgba(255,255,255,0.6)] rounded-lg p-2",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(R(),{src:"/icons/chat/excel.png",width:20,height:20,alt:"file-icon",className:"mr-2"}),(0,l.jsx)("span",{className:"text-sm text-[#1c2533] dark:text-white line-clamp-1",children:O||(null===(a=Z[0])||void 0===a?void 0:a.name)})]}),(0,l.jsx)(x.Z,{spinning:C,indicator:(0,l.jsx)(i.Z,{style:{fontSize:24},spin:!0})})]})})]})},ex=e=>{var t;let{ctrl:a}=e,{t:s}=(0,g.$G)(),{scrollRef:n,replyLoading:r,handleChat:o,appInfo:c,currentDialogue:d,temperatureValue:u,maxNewTokensValue:m,resourceValue:p,refreshDialogList:h}=(0,v.useContext)(eP),f=(0,F.useSearchParams)(),_=null!==(t=null==f?void 0:f.get("select_param"))&&void 0!==t?t:"",[j,b]=(0,v.useState)(""),[w,y]=(0,v.useState)(!1),[N,k]=(0,v.useState)(!1),Z=(0,v.useRef)(0),S=(0,v.useMemo)(()=>{var e;return(null===(e=c.param_need)||void 0===e?void 0:e.map(e=>e.type))||[]},[c.param_need]),C=async()=>{Z.current++,setTimeout(()=>{var e,t;null===(e=n.current)||void 0===e||e.scrollTo({top:null===(t=n.current)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"}),b("")},0),await o(j,{app_code:c.app_code||"",...S.includes("temperature")&&{temperature:u},...S.includes("max_new_tokens")&&{max_new_tokens:m},select_param:_,...S.includes("resource")&&{select_param:"string"==typeof p?p:JSON.stringify(p)||d.select_param}}),1===Z.current&&await h()};return(0,l.jsx)("div",{className:"flex flex-col w-5/6 mx-auto pt-4 pb-6 bg-transparent",children:(0,l.jsxs)("div",{className:"flex flex-1 flex-col bg-white dark:bg-[rgba(255,255,255,0.16)] px-5 py-4 pt-2 rounded-xl relative border-t border-b border-l border-r dark:border-[rgba(255,255,255,0.6)] ".concat(w?"border-[#0c75fc]":""),id:"input-panel",children:[(0,l.jsx)(ep,{ctrl:a}),(0,l.jsx)(E.default.TextArea,{placeholder:s("input_tips"),className:"w-full h-20 resize-none border-0 p-0 focus:shadow-none dark:bg-transparent",value:j,onKeyDown:e=>{"Enter"===e.key&&!e.shiftKey&&!N&&(e.preventDefault(),j.trim()&&!r&&C())},onChange:e=>{b(e.target.value)},onFocus:()=>{y(!0)},onBlur:()=>y(!1),onCompositionStart:()=>k(!0),onCompositionEnd:()=>k(!1)}),(0,l.jsx)(A.ZP,{type:"primary",className:G()("flex items-center justify-center w-14 h-8 rounded-lg text-sm absolute right-4 bottom-3 bg-button-gradient border-0",{"cursor-not-allowed":!j.trim()}),onClick:()=>{!r&&j.trim()&&C()},children:r?(0,l.jsx)(x.Z,{spinning:r,indicator:(0,l.jsx)(i.Z,{className:"text-white"})}):s("sent")})]})})},eh=a(20046),ef=a(48689),ev=a(14313),eg=a(94155),e_=a(21612),ej=a(85576),eb=a(86250);let{Sider:ew}=e_.default,ey={display:"flex",alignItems:"center",justifyContent:"center",width:16,height:48,position:"absolute",top:"50%",transform:"translateY(-50%)",border:"1px solid #d6d8da",borderRadius:8,right:-8},eN=e=>{var t,a;let{item:r,refresh:i,historyLoading:o}=e,{t:c}=(0,g.$G)(),d=(0,F.useRouter)(),m=(0,F.useSearchParams)(),x=null!==(t=null==m?void 0:m.get("id"))&&void 0!==t?t:"",h=null!==(a=null==m?void 0:m.get("scene"))&&void 0!==a?a:"",{setCurrentDialogInfo:_}=(0,v.useContext)(s.p),j=(0,v.useMemo)(()=>r.default?r.default&&!x&&!h:r.conv_uid===x&&r.chat_mode===h,[x,h,r]),b=()=>{ej.default.confirm({title:c("delete_chat"),content:c("delete_chat_confirm"),centered:!0,onOk:async()=>{let[e]=await (0,n.Vx)((0,n.MX)(r.conv_uid));e||(await (null==i?void 0:i()),r.conv_uid===x&&d.push("/chat"))}})};return(0,l.jsxs)(eb.Z,{align:"center",className:"group/item w-full h-12 p-3 rounded-lg  hover:bg-white dark:hover:bg-theme-dark cursor-pointer mb-2 relative ".concat(j?"bg-white dark:bg-theme-dark bg-opacity-100":""),onClick:()=>{o||(r.default||null==_||_({chat_scene:r.chat_mode,app_code:r.app_code}),localStorage.setItem("cur_dialog_info",JSON.stringify({chat_scene:r.chat_mode,app_code:r.app_code})),d.push(r.default?"/chat":"?scene=".concat(r.chat_mode,"&id=").concat(r.conv_uid)))},children:[(0,l.jsx)(K.Z,{title:r.chat_mode,children:(0,l.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-lg mr-3 bg-white",children:r.icon})}),(0,l.jsx)("div",{className:"flex flex-1 line-clamp-1",children:(0,l.jsx)(p.Z.Text,{ellipsis:{tooltip:!0},children:r.label})}),!r.default&&(0,l.jsxs)("div",{className:"flex gap-1 ml-1",children:[(0,l.jsx)("div",{className:"group-hover/item:opacity-100 cursor-pointer opacity-0",onClick:e=>{e.stopPropagation()},children:(0,l.jsx)(eh.Z,{style:{fontSize:16},onClick:()=>{let e=f()("".concat(location.origin,"/chat?scene=").concat(r.chat_mode,"&id=").concat(r.conv_uid));u.ZP[e?"success":"error"](e?c("copy_success"):c("copy_failed"))}})}),(0,l.jsx)("div",{className:"group-hover/item:opacity-100 cursor-pointer opacity-0",onClick:e=>{e.stopPropagation(),b()},children:(0,l.jsx)(ef.Z,{style:{fontSize:16}})})]}),(0,l.jsx)("div",{className:" w-1 rounded-sm bg-[#0c75fc] absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-500 ease-in-out ".concat(j?"h-5":"w-0 h-0")})]})};var ek=e=>{var t;let{dialogueList:a=[],refresh:n,historyLoading:r,listLoading:i,order:o}=e,c=(0,F.useSearchParams)(),d=null!==(t=null==c?void 0:c.get("scene"))&&void 0!==t?t:"",{t:u}=(0,g.$G)(),{mode:m}=(0,v.useContext)(s.p),[p,h]=(0,v.useState)("chat_dashboard"===d),f=(0,v.useMemo)(()=>p?{...ey,right:-16,borderRadius:"0px 8px 8px 0",borderLeft:"1px solid #d5e5f6"}:{...ey,borderLeft:"1px solid #d6d8da"},[p]),_=(0,v.useMemo)(()=>{let e=a[1]||[];return(null==e?void 0:e.length)>0?e.map(e=>({...e,label:e.user_input||e.select_param,key:e.conv_uid,icon:(0,l.jsx)(j.Z,{scene:e.chat_mode}),default:!1})):[]},[a]);return(0,l.jsx)(ew,{className:"bg-[#ffffff80]  border-r  border-[#d5e5f6] dark:bg-[#ffffff29] dark:border-[#ffffff66]",theme:m,width:280,collapsible:!0,collapsed:p,collapsedWidth:0,trigger:p?(0,l.jsx)(ev.Z,{className:"text-base"}):(0,l.jsx)(eg.Z,{className:"text-base"}),zeroWidthTriggerStyle:f,onCollapse:e=>h(e),children:(0,l.jsxs)("div",{className:"flex flex-col h-full w-full bg-transparent px-4 pt-6  ",children:[(0,l.jsx)("div",{className:"w-full text-base font-semibold text-[#1c2533] dark:text-[rgba(255,255,255,0.85)] mb-4 line-clamp-1",children:u("dialog_list")}),(0,l.jsxs)(eb.Z,{flex:1,vertical:!0,className:"overflow-y-auto",children:[(0,l.jsx)(eN,{item:{label:u("assistant"),key:"default",icon:(0,l.jsx)(R(),{src:"/LOGO_SMALL.png",alt:"default",width:24,height:24,className:"flex-1"}),default:!0},order:o}),(0,l.jsx)(x.Z,{spinning:i,className:"mt-2",children:!!(null==_?void 0:_.length)&&_.map(e=>(0,l.jsx)(eN,{item:e,refresh:n,historyLoading:r,order:o},null==e?void 0:e.key))})]})]})})};let eZ=N()(()=>Promise.all([a.e(3662),a.e(7034),a.e(6106),a.e(8674),a.e(3166),a.e(2837),a.e(2168),a.e(8163),a.e(4567),a.e(1300),a.e(9773),a.e(4035),a.e(152),a.e(3764),a.e(5e3),a.e(4434),a.e(4451)]).then(a.bind(a,96307)),{loadableGenerated:{webpack:()=>[96307]},ssr:!1}),eS=N()(()=>Promise.all([a.e(3662),a.e(7034),a.e(6106),a.e(8674),a.e(3166),a.e(2837),a.e(2168),a.e(8163),a.e(2398),a.e(4567),a.e(9859),a.e(1300),a.e(9773),a.e(4035),a.e(152),a.e(2510),a.e(8592),a.e(9202),a.e(3764),a.e(5e3),a.e(7855),a.e(184),a.e(626),a.e(3913),a.e(4434),a.e(4769)]).then(a.bind(a,36517)),{loadableGenerated:{webpack:()=>[36517]},ssr:!1}),{Content:eC}=e_.default,eP=(0,v.createContext)({history:[],replyLoading:!1,scrollRef:{current:null},canAbort:!1,chartsData:[],agent:"",currentDialogue:{},appInfo:{},temperatureValue:.5,maxNewTokensValue:1024,resourceValue:{},modelValue:"",setModelValue:()=>{},setResourceValue:()=>{},setTemperatureValue:()=>{},setMaxNewTokensValue:()=>{},setAppInfo:()=>{},setAgent:()=>{},setCanAbort:()=>{},setReplyLoading:()=>{},refreshDialogList:()=>{},refreshHistory:()=>{},refreshAppInfo:()=>{},setHistory:()=>{},handleChat:()=>Promise.resolve()});var eM=()=>{var e,t,a,i;let{model:o,currentDialogInfo:c}=(0,v.useContext)(s.p),{isContract:d,setIsContract:u,setIsMenuExpand:m}=(0,v.useContext)(s.p),{chat:p,ctrl:h}=(0,r.Z)({app_code:c.app_code||""}),f=(0,F.useSearchParams)(),g=null!==(e=null==f?void 0:f.get("id"))&&void 0!==e?e:"",j=null!==(t=null==f?void 0:f.get("scene"))&&void 0!==t?t:"",b=null!==(a=null==f?void 0:f.get("knowledge_id"))&&void 0!==a?a:"",w=null!==(i=null==f?void 0:f.get("db_name"))&&void 0!==i?i:"",y=(0,v.useRef)(null),N=(0,v.useRef)(1),[k,S]=(0,v.useState)([]),[C]=(0,v.useState)(),[P,M]=(0,v.useState)(!1),[V,R]=(0,v.useState)(!1),[T,L]=(0,v.useState)(""),[O,E]=(0,v.useState)({}),[A,D]=(0,v.useState)(),[G,J]=(0,v.useState)(),[W,I]=(0,v.useState)(),[$,B]=(0,v.useState)("");(0,v.useEffect)(()=>{var e,t,a,l,s,n,r,i;D((null===(e=null==O?void 0:null===(t=O.param_need)||void 0===t?void 0:t.filter(e=>"temperature"===e.type)[0])||void 0===e?void 0:e.value)||.5),J((null===(a=null==O?void 0:null===(l=O.param_need)||void 0===l?void 0:l.filter(e=>"max_new_tokens"===e.type)[0])||void 0===a?void 0:a.value)||2048),B((null===(s=null==O?void 0:null===(n=O.param_need)||void 0===n?void 0:n.filter(e=>"model"===e.type)[0])||void 0===s?void 0:s.value)||o),I(b||w||(null===(r=null==O?void 0:null===(i=O.param_need)||void 0===i?void 0:i.filter(e=>"resource"===e.type)[0])||void 0===r?void 0:r.bind_value))},[O,w,b,o]),(0,v.useEffect)(()=>{m("chat_dashboard"!==j),g&&j&&u(!1)},[g,j]);let H=(0,v.useMemo)(()=>!g&&!j,[g,j]),{data:U=[],refresh:K,loading:X}=(0,_.Z)(async()=>await (0,n.Vx)((0,n.iP)())),{run:Y,refresh:Q}=(0,_.Z)(async()=>await (0,n.Vx)((0,n.BN)({...c})),{manual:!0,onSuccess:e=>{let[,t]=e;E(t||{})}}),ee=(0,v.useMemo)(()=>{let[,e]=U;return(null==e?void 0:e.find(e=>e.conv_uid===g))||{}},[g,U]);(0,v.useEffect)(()=>{let e=(0,z.a_)();c.chat_scene!==j||H||e&&e.message||Y()},[g,c,H,Y,j]);let{run:et,loading:ea,refresh:el}=(0,_.Z)(async()=>await (0,n.Vx)((0,n.$i)(g)),{manual:!0,onSuccess:e=>{let[,t]=e,a=null==t?void 0:t.filter(e=>"view"===e.role);a&&a.length>0&&(N.current=a[a.length-1].order+1),S(t||[])}}),es=(0,v.useCallback)((e,t)=>new Promise(a=>{let l=(0,z.a_)(),s=new AbortController;if(M(!0),k&&k.length>0){var n,r;let e=null==k?void 0:k.filter(e=>"view"===e.role),t=null==k?void 0:k.filter(e=>"human"===e.role);N.current=((null===(n=e[e.length-1])||void 0===n?void 0:n.order)||(null===(r=t[t.length-1])||void 0===r?void 0:r.order))+1}let i=[...l&&l.id===g?[]:k,{role:"human",context:e,model_name:(null==t?void 0:t.model_name)||$,order:N.current,time_stamp:0},{role:"view",context:"",model_name:(null==t?void 0:t.model_name)||$,order:N.current,time_stamp:0,thinking:!0}],o=i.length-1;S([...i]),p({data:{chat_mode:j,model_name:$,user_input:e,...t},ctrl:s,chatId:g,onMessage:e=>{R(!0),(null==t?void 0:t.incremental)?(i[o].context+=e,i[o].thinking=!1):(i[o].context=e,i[o].thinking=!1),S([...i])},onDone:()=>{M(!1),R(!1),a()},onClose:()=>{M(!1),R(!1),a()},onError:e=>{M(!1),R(!1),i[o].context=e,i[o].thinking=!1,S([...i]),a()}})}),[g,k,$,p,j]);return(0,ec.Z)(async()=>{if(H)return;let e=(0,z.a_)();e&&e.id===g||await et()},[g,j,et]),(0,v.useEffect)(()=>{H&&(N.current=1,S([]))},[H]),(0,l.jsx)(eP.Provider,{value:{history:k,replyLoading:P,scrollRef:y,canAbort:V,chartsData:C||[],agent:T,currentDialogue:ee,appInfo:O,temperatureValue:A,maxNewTokensValue:G,resourceValue:W,modelValue:$,setModelValue:B,setResourceValue:I,setTemperatureValue:D,setMaxNewTokensValue:J,setAppInfo:E,setAgent:L,setCanAbort:R,setReplyLoading:M,handleChat:es,refreshDialogList:K,refreshHistory:el,refreshAppInfo:Q,setHistory:S},children:(0,l.jsx)(eb.Z,{flex:1,children:(0,l.jsxs)(e_.default,{className:"bg-gradient-light bg-cover bg-center dark:bg-gradient-dark",children:[(0,l.jsx)(ek,{refresh:K,dialogueList:U,listLoading:X,historyLoading:ea,order:N}),(0,l.jsx)(e_.default,{className:"bg-transparent",children:"chat_dashboard"===j?d?(0,l.jsx)(eZ,{}):(0,l.jsx)(eS,{}):H?(0,l.jsx)(eC,{children:(0,l.jsx)(q,{})}):(0,l.jsx)(x.Z,{spinning:ea,className:"w-full h-full m-auto",children:(0,l.jsxs)(eC,{className:"flex flex-col h-screen",children:[(0,l.jsx)(Z,{ref:y}),(0,l.jsx)(ex,{ctrl:h})]})})})]})})})}},11873:function(){}}]);