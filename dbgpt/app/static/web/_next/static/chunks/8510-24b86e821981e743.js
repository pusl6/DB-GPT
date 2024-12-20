"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8510,3913],{66309:function(e,l,t){t.d(l,{Z:function(){return E}});var n=t(67294),r=t(97937),a=t(93967),o=t.n(a),i=t(98787),s=t(69760),c=t(45353),u=t(53124),d=t(39302),m=t(10274),p=t(14747),v=t(45503),f=t(91945);let x=e=>{let{paddingXXS:l,lineWidth:t,tagPaddingHorizontal:n,componentCls:r,calc:a}=e,o=a(n).sub(t).equal(),i=a(l).sub(t).equal();return{[r]:Object.assign(Object.assign({},(0,p.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:o,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,d.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:o}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},h=e=>{let{lineWidth:l,fontSizeIcon:t,calc:n}=e,r=e.fontSizeSM,a=(0,v.TS)(e,{tagFontSize:r,tagLineHeight:(0,d.bf)(n(e.lineHeightSM).mul(r).equal()),tagIconSize:n(t).sub(n(l).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return a},g=e=>({defaultBg:new m.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var b=(0,f.I$)("Tag",e=>{let l=h(e);return x(l)},g),y=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>l.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>l.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let j=n.forwardRef((e,l)=>{let{prefixCls:t,style:r,className:a,checked:i,onChange:s,onClick:c}=e,d=y(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:p}=n.useContext(u.E_),v=m("tag",t),[f,x,h]=b(v),g=o()(v,`${v}-checkable`,{[`${v}-checkable-checked`]:i},null==p?void 0:p.className,a,x,h);return f(n.createElement("span",Object.assign({},d,{ref:l,style:Object.assign(Object.assign({},r),null==p?void 0:p.style),className:g,onClick:e=>{null==s||s(!i),null==c||c(e)}})))});var _=t(98719);let w=e=>(0,_.Z)(e,(l,t)=>{let{textColor:n,lightBorderColor:r,lightColor:a,darkColor:o}=t;return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:n,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:o,borderColor:o},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var C=(0,f.bk)(["Tag","preset"],e=>{let l=h(e);return w(l)},g);let k=(e,l,t)=>{let n=function(e){if("string"!=typeof e)return e;let l=e.charAt(0).toUpperCase()+e.slice(1);return l}(t);return{[`${e.componentCls}${e.componentCls}-${l}`]:{color:e[`color${t}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var N=(0,f.bk)(["Tag","status"],e=>{let l=h(e);return[k(l,"success","Success"),k(l,"processing","Info"),k(l,"error","Error"),k(l,"warning","Warning")]},g),S=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>l.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>l.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};let Z=n.forwardRef((e,l)=>{let{prefixCls:t,className:a,rootClassName:d,style:m,children:p,icon:v,color:f,onClose:x,closeIcon:h,closable:g,bordered:y=!0}=e,j=S(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:_,direction:w,tag:k}=n.useContext(u.E_),[Z,E]=n.useState(!0);n.useEffect(()=>{"visible"in j&&E(j.visible)},[j.visible]);let O=(0,i.o2)(f),$=(0,i.yT)(f),R=O||$,T=Object.assign(Object.assign({backgroundColor:f&&!R?f:void 0},null==k?void 0:k.style),m),I=_("tag",t),[M,P,V]=b(I),L=o()(I,null==k?void 0:k.className,{[`${I}-${f}`]:R,[`${I}-has-color`]:f&&!R,[`${I}-hidden`]:!Z,[`${I}-rtl`]:"rtl"===w,[`${I}-borderless`]:!y},a,d,P,V),z=e=>{e.stopPropagation(),null==x||x(e),e.defaultPrevented||E(!1)},[,A]=(0,s.Z)(g,null!=h?h:null==k?void 0:k.closeIcon,e=>null===e?n.createElement(r.Z,{className:`${I}-close-icon`,onClick:z}):n.createElement("span",{className:`${I}-close-icon`,onClick:z},e),null,!1),D="function"==typeof j.onClick||p&&"a"===p.type,B=v||null,F=B?n.createElement(n.Fragment,null,B,p&&n.createElement("span",null,p)):p,q=n.createElement("span",Object.assign({},j,{ref:l,className:L,style:T}),F,A,O&&n.createElement(C,{key:"preset",prefixCls:I}),$&&n.createElement(N,{key:"status",prefixCls:I}));return M(D?n.createElement(c.Z,{component:"Tag"},q):q)});Z.CheckableTag=j;var E=Z},2440:function(e,l,t){var n=t(25519);l.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(n.C9))&&void 0!==e?e:"")}},39718:function(e,l,t){var n=t(85893),r=t(19284),a=t(25675),o=t.n(a),i=t(67294);l.Z=(0,i.memo)(e=>{let{width:l,height:t,model:a}=e,s=(0,i.useMemo)(()=>{let e=null==a?void 0:a.replaceAll("-","_").split("_")[0],l=Object.keys(r.Me);for(let t=0;t<l.length;t++){let n=l[t];if(null==e?void 0:e.includes(n))return r.Me[n]}return"/models/huggingface.svg"},[a]);return a?(0,n.jsx)(o(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:l||24,height:t||24,src:s,alt:"llm",priority:!0}):null})},48218:function(e,l,t){var n=t(85893),r=t(82353),a=t(16165),o=t(67294);l.Z=e=>{let{width:l,height:t,scene:i}=e,s=(0,o.useCallback)(()=>{switch(i){case"chat_knowledge":return r.je;case"chat_with_db_execute":return r.zM;case"chat_excel":return r.DL;case"chat_with_db_qa":case"chat_dba":return r.RD;case"chat_dashboard":return r.In;case"chat_agent":return r.si;case"chat_normal":return r.O7;default:return}},[i]);return(0,n.jsx)(a.Z,{className:"w-".concat(l||7," h-").concat(t||7),component:s()})}},70065:function(e,l,t){var n=t(91321);let r=(0,n.Z)({scriptUrl:"//at.alicdn.com/t/a/font_4440880_ljyggdw605.js"});l.Z=r},77451:function(e,l,t){t.r(l);var n=t(85893),r=t(76212),a=t(18102),o=t(11475),i=t(65654),s=t(34041),c=t(85576),u=t(99859),d=t(93967),m=t.n(d),p=t(67294),v=t(67421),f=t(25934),x=t(49264);let h=e=>{let{value:l,onChange:t,promptList:r}=e,[i,u]=(0,p.useState)(!1),[d,m]=(0,p.useState)(),{t:f}=(0,v.$G)();return(0,p.useEffect)(()=>{if(l){let e=null==r?void 0:r.filter(e=>e.prompt_code===l)[0];m(e)}},[r,l]),(0,n.jsxs)("div",{className:"w-2/5 flex items-center gap-2",children:[(0,n.jsx)(s.default,{className:"w-1/2",placeholder:f("please_select_prompt"),options:r,fieldNames:{label:"prompt_name",value:"prompt_code"},onChange:e=>{let l=null==r?void 0:r.filter(l=>l.prompt_code===e)[0];m(l),null==t||t(e)},value:l,allowClear:!0,showSearch:!0}),d&&(0,n.jsxs)("span",{className:"text-sm text-blue-500 cursor-pointer",onClick:()=>u(!0),children:[(0,n.jsx)(o.Z,{className:"mr-1"}),f("View_details")]}),(0,n.jsx)(c.default,{title:"Prompt ".concat(f("details")),open:i,footer:!1,width:"60%",onCancel:()=>u(!1),children:(0,n.jsx)(a.default,{children:null==d?void 0:d.content})})]})};l.default=e=>{var l,t;let{name:a,initValue:o,modelStrategyOptions:c,resourceTypeOptions:d,updateData:g,classNames:b,promptList:y}=e,{t:j}=(0,v.$G)(),[_]=u.default.useForm(),w=u.default.useWatch("prompt_template",_),C=u.default.useWatch("llm_strategy",_),k=u.default.useWatch("llm_strategy_value",_),N=(0,p.useMemo)(()=>(null==o?void 0:o.find(e=>e.agent_name===a))||[],[o,a]),S=(0,p.useRef)([]),{run:Z,loading:E,data:O}=(0,i.Z)(async()=>{var e;let[,l]=await (0,r.Vx)((0,r.m9)("priority"));return null!==(e=null==l?void 0:l.map(e=>({label:e,value:e})))&&void 0!==e?e:[]},{manual:!0});return(0,p.useEffect)(()=>{"priority"===C&&Z()},[Z,C]),(0,p.useEffect)(()=>{var e;let l=_.getFieldsValue();g({agent_name:a,...l,llm_strategy_value:null==l?void 0:null===(e=l.llm_strategy_value)||void 0===e?void 0:e.join(","),resources:S.current})},[_,E,a,w,C,k,g]),(0,n.jsx)("div",{className:m()(b),children:(0,n.jsxs)(u.default,{style:{width:"100%"},labelCol:{span:4},form:_,initialValues:{llm_strategy:"default",...N,llm_strategy_value:null==N?void 0:null===(l=N.llm_strategy_value)||void 0===l?void 0:l.split(",")},children:[(0,n.jsx)(u.default.Item,{label:j("Prompt"),name:"prompt_template",children:(0,n.jsx)(h,{promptList:y})}),(0,n.jsx)(u.default.Item,{label:j("LLM_strategy"),required:!0,name:"llm_strategy",children:(0,n.jsx)(s.default,{className:"w-1/5",placeholder:j("please_select_LLM_strategy"),options:c,allowClear:!0})}),"priority"===C&&(0,n.jsx)(u.default.Item,{label:j("LLM_strategy_value"),required:!0,name:"llm_strategy_value",children:(0,n.jsx)(s.default,{mode:"multiple",className:"w-2/5",placeholder:j("please_select_LLM_strategy_value"),options:O,allowClear:!0})}),(0,n.jsx)(u.default.Item,{label:j("available_resources"),name:"resources",children:(0,n.jsx)(x.default,{resourceTypeOptions:d,initValue:null==N?void 0:null===(t=N.resources)||void 0===t?void 0:t.map(e=>({...e,uid:(0,f.Z)()})),updateData:e=>{S.current=null==e?void 0:e[1],g({agent_name:a,resources:S.current})},name:a})})]})})}},2856:function(e,l,t){t.r(l);var n=t(85893),r=t(76212),a=t(65654),o=t(99859),i=t(34041),s=t(72269),c=t(93967),u=t.n(c),d=t(67294),m=t(67421);l.default=e=>{let{uid:l,initValue:t,updateData:c,classNames:p,resourceTypeOptions:v,setCurIcon:f}=e,[x]=o.default.useForm(),h=o.default.useWatch("type",x),g=o.default.useWatch("is_dynamic",x),b=o.default.useWatch("value",x),{t:y}=(0,m.$G)(),j=(0,d.useMemo)(()=>(null==v?void 0:v.filter(e=>"all"!==e.value))||[],[v]),{run:_,data:w,loading:C}=(0,a.Z)(async e=>{var l;let[,n]=await (0,r.Vx)((0,r.RX)({type:e}));return x.setFieldsValue({value:(null==t?void 0:t.value)||(null==n?void 0:null===(l=n[0])||void 0===l?void 0:l.key)}),n||[]},{manual:!0});(0,d.useEffect)(()=>{h&&_(h)},[_,h]);let k=(0,d.useMemo)(()=>(null==w?void 0:w.map(e=>({...e,label:e.label,value:e.key+""})))||[],[w]);return(0,d.useEffect)(()=>{let e=x.getFieldsValue(),t=(null==e?void 0:e.is_dynamic)?"":null==e?void 0:e.value;c({uid:l,...e,value:t})},[l,g,x,c,b,h]),(0,n.jsx)("div",{className:u()("flex flex-1",p),children:(0,n.jsxs)(o.default,{style:{width:"100%"},form:x,labelCol:{span:4},initialValues:{...t},children:[(0,n.jsx)(o.default.Item,{label:y("resource_type"),name:"type",children:(0,n.jsx)(i.default,{className:"w-2/5",options:j,onChange:e=>{f({uid:l,icon:e})}})}),(0,n.jsx)(o.default.Item,{label:y("resource_dynamic"),name:"is_dynamic",children:(0,n.jsx)(s.Z,{style:{background:g?"#1677ff":"#ccc"}})}),!g&&(0,n.jsxs)(n.Fragment,{children:[" ","image_file"===h||"internet"===h||["text_file","excel_file"].includes(h)?null:(0,n.jsx)(o.default.Item,{label:y("resource_value"),name:"value",required:!0,children:(0,n.jsx)(i.default,{placeholder:y("please_select_param"),options:k,loading:C,className:"w-3/5",allowClear:!0})})]})]})})}},49264:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var n=t(85893),r=t(32983),a=t(93967),o=t.n(a),i=e=>{let{className:l,imgUrl:t="/pictures/empty.png"}=e;return(0,n.jsx)("div",{className:o()("m-auto",{className:l}),children:(0,n.jsx)(r.Z,{image:t,imageStyle:{margin:"0 auto",width:"100%",height:"100%"}})})},s=t(48689),c=t(24969),u=t(34041),d=t(7075),m=t(86738),p=t(14726),v=t(96486),f=t(67294),x=t(67421),h=t(25934),g=t(83072),b=t(2856),y=e=>{var l;let{name:t,updateData:r,resourceTypeOptions:a,initValue:y}=e,{t:j}=(0,x.$G)(),_=(0,f.useRef)(y||[]),[w,C]=(0,f.useState)({uid:"",icon:""}),[k,N]=(0,f.useState)((null==y?void 0:y.map(e=>({...e,icon:e.type,initVal:e})))||[]),[S,Z]=(0,f.useState)([...k]),[E,O]=(0,f.useState)((null==k?void 0:null===(l=k[0])||void 0===l?void 0:l.uid)||""),[$,R]=(0,f.useState)(""),T=(e,l)=>{var n,a;null==e||e.stopPropagation();let o=null===(n=_.current)||void 0===n?void 0:n.findIndex(e=>e.uid===E),i=null==k?void 0:k.filter(e=>e.uid!==l.uid);_.current=_.current.filter(e=>e.uid!==l.uid)||[],r([t,_.current]),N(i),o===(null==k?void 0:k.length)-1&&0!==o&&setTimeout(()=>{var e;O((null==i?void 0:null===(e=i[i.length-1])||void 0===e?void 0:e.uid)||"")},0),O((null==i?void 0:null===(a=i[o])||void 0===a?void 0:a.uid)||"")};return(0,f.useEffect)(()=>{Z([...k])},[k]),(0,f.useEffect)(()=>{N(k.map(e=>(null==w?void 0:w.uid)===e.uid?{...e,icon:w.icon}:e))},[w]),(0,n.jsxs)("div",{className:"flex flex-1  h-64 px-3 py-4 border border-[#d6d8da] rounded-md",children:[(0,n.jsxs)("div",{className:"flex flex-col w-40 h-full",children:[(0,n.jsx)(u.default,{options:a,className:"w-full h-8",variant:"borderless",defaultValue:"all",onChange:e=>{var l,t;if("all"===e)Z(k),O((null==k?void 0:null===(l=k[0])||void 0===l?void 0:l.uid)||"");else{let l=null==k?void 0:k.filter(l=>(null==l?void 0:l.icon)===e);O((null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.uid)||""),Z(l)}}}),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-1 overflow-y-auto",children:null==S?void 0:S.map(e=>(0,n.jsxs)("div",{className:o()("flex h-8 items-center px-3 pl-[0.6rem] rounded-md hover:bg-[#f5faff] hover:dark:bg-[#606264] cursor-pointer relative",{"bg-[#f5faff] dark:bg-[#606264]":e.uid===E}),onClick:()=>{O(e.uid||"")},onMouseEnter:()=>{R(e.uid||"")},onMouseLeave:()=>{R("")},children:[g.resourceTypeIcon[e.icon||""],(0,n.jsx)(d.Z.Text,{className:o()("flex flex-1 items-center text-sm p-0 m-0 mx-2 line-clamp-1",{"text-[#0c75fc]":e.uid===E}),editable:{autoSize:{maxRows:1},onChange:l=>{N(k.map(t=>t.uid===e.uid?{...t,name:l}:t)),_.current=_.current.map(t=>t.uid===e.uid?{...t,name:l}:t),r([t,_.current])}},ellipsis:{tooltip:!0},children:e.name}),(0,n.jsx)(m.Z,{title:j("want_delete"),onConfirm:l=>{T(l,e)},onCancel:e=>null==e?void 0:e.stopPropagation(),children:(0,n.jsx)(s.Z,{className:"text-sm cursor-pointer  absolute right-2 ".concat($===e.uid?"opacity-100":"opacity-0"),style:{top:"50%",transform:"translateY(-50%)"},onClick:e=>e.stopPropagation()})})]},e.uid))}),(0,n.jsx)(p.ZP,{className:"w-full h-8",type:"dashed",block:!0,icon:(0,n.jsx)(c.Z,{}),onClick:()=>{var e,l;let n=(0,h.Z)();_.current=(0,v.concat)(_.current,[{is_dynamic:!1,type:null===(e=null==a?void 0:a.filter(e=>"all"!==e.value))||void 0===e?void 0:e[0].value,value:"",uid:n,name:j("resource")+" ".concat(_.current.length+1)}].filter(Boolean)),r([t,_.current]),N(e=>{var l,t,r;return[...e,{icon:(null===(l=null==a?void 0:a.filter(e=>"all"!==e.value))||void 0===l?void 0:null===(t=l[0])||void 0===t?void 0:t.value)||"",uid:n,initVal:{is_dynamic:!1,type:null===(r=null==a?void 0:a.filter(e=>"all"!==e.value))||void 0===r?void 0:r[0].value,value:"",uid:n,name:j("resource")+" ".concat(e.length+1)},name:j("resource")+" ".concat(e.length+1)}]}),O(n),C({uid:n,icon:null===(l=null==a?void 0:a.filter(e=>"all"!==e.value))||void 0===l?void 0:l[0].value})},children:j("add_resource")})]}),(0,n.jsx)("div",{className:"flex flex-1 ml-6 ",children:S&&(null==S?void 0:S.length)>0?(0,n.jsx)("div",{className:"flex flex-1",children:null==S?void 0:S.map(e=>(0,n.jsx)(b.default,{classNames:e.uid===E?"block":"hidden",resourceTypeOptions:a,initValue:e.initVal,setCurIcon:C,updateData:e=>{var l;_.current=null===(l=_.current)||void 0===l?void 0:l.map(l=>(null==l?void 0:l.uid)===(null==e?void 0:e.uid)?{...l,...e}:l),r([t,_.current])},uid:e.uid||""},e.uid))}):(0,n.jsx)(i,{className:"w-40 h-40"})})]})}},83072:function(e,l,t){t.r(l),t.d(l,{agentIcon:function(){return y},resourceTypeIcon:function(){return j}});var n=t(85893),r=t(70065),a=t(89035),o=t(48869),i=t(61086),s=t(57132),c=t(97879),u=t(32319),d=t(79383),m=t(13520),p=t(14079),v=t(10524),f=t(56466),x=t(26911),h=t(97175),g=t(16801),b=t(13179);t(67294);let y={CodeEngineer:(0,n.jsx)(a.Z,{}),Reporter:(0,n.jsx)(o.Z,{}),DataScientist:(0,n.jsx)(i.Z,{}),Summarizer:(0,n.jsx)(s.Z,{}),ToolExpert:(0,n.jsx)(r.Z,{type:"icon-plugin",style:{fontSize:17.25,marginTop:2}}),Indicator:(0,n.jsx)(c.Z,{}),Dbass:(0,n.jsx)(u.Z,{})},j={all:(0,n.jsx)(d.Z,{}),database:(0,n.jsx)(m.Z,{}),knowledge:(0,n.jsx)(p.Z,{}),internet:(0,n.jsx)(v.Z,{}),plugin:(0,n.jsx)(f.Z,{}),text_file:(0,n.jsx)(x.Z,{}),excel_file:(0,n.jsx)(h.Z,{}),image_file:(0,n.jsx)(g.Z,{}),awel_flow:(0,n.jsx)(b.Z,{})};l.default=()=>(0,n.jsx)(n.Fragment,{})},56397:function(e,l,t){t.r(l);var n=t(85893),r=t(48218),a=t(58638),o=t(31418),i=t(7075),s=t(20640),c=t.n(s),u=t(67294),d=t(73913);l.default=(0,u.memo)(()=>{var e;let{appInfo:l}=(0,u.useContext)(d.MobileChatContext),{message:t}=o.Z.useApp(),[s,m]=(0,u.useState)(0);if(!(null==l?void 0:l.app_code))return null;let p=async()=>{let e=c()("dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(location.href),"&pc_slide=true"));t[e?"success":"error"](e?"复制成功":"复制失败")};return s>6&&t.info(JSON.stringify(window.navigator.userAgent),2,()=>{m(0)}),(0,n.jsxs)("header",{className:"flex w-full items-center justify-between bg-[rgba(255,255,255,0.9)] border dark:bg-black dark:border-[rgba(255,255,255,0.6)] rounded-xl mx-auto px-4 py-2 mb-4 sticky top-4 z-50 mt-4 shadow-md",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",onClick:()=>m(s+1),children:[(0,n.jsx)(r.Z,{scene:(null==l?void 0:null===(e=l.team_context)||void 0===e?void 0:e.chat_scene)||"chat_agent",width:8,height:8}),(0,n.jsxs)("div",{className:"flex flex-col ml-2",children:[(0,n.jsx)(i.Z.Text,{className:"text-md font-bold line-clamp-2",children:null==l?void 0:l.app_name}),(0,n.jsx)(i.Z.Text,{className:"text-sm line-clamp-2",children:null==l?void 0:l.app_describe})]})]}),(0,n.jsx)("div",{onClick:p,className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:(0,n.jsx)(a.Z,{className:"text-lg"})})]})})},74638:function(e,l,t){t.r(l);var n=t(85893),r=t(76212),a=t(62418),o=t(25519),i=t(30159),s=t(87740),c=t(79090),u=t(52645),d=t(27496),m=t(1375),p=t(65654),v=t(66309),f=t(55241),x=t(75081),h=t(69677),g=t(14726),b=t(93967),y=t.n(b),j=t(39332),_=t(67294),w=t(73913),C=t(7001),k=t(73749),N=t(97109),S=t(83454);let Z=["magenta","orange","geekblue","purple","cyan","green"];l.default=()=>{var e,l;let t=(0,j.useSearchParams)(),b=null!==(l=null==t?void 0:t.get("ques"))&&void 0!==l?l:"",{history:E,model:O,scene:$,temperature:R,resource:T,conv_uid:I,appInfo:M,scrollViewRef:P,order:V,userInput:L,ctrl:z,canAbort:A,canNewChat:D,setHistory:B,setCanNewChat:F,setCarAbort:q,setUserInput:W}=(0,_.useContext)(w.MobileChatContext),[H,U]=(0,_.useState)(!1),[J,G]=(0,_.useState)(!1),K=async e=>{var l,t,n;W(""),z.current=new AbortController;let r={chat_mode:$,model_name:O,user_input:e||L,conv_uid:I,temperature:R,app_code:null==M?void 0:M.app_code,...T&&{select_param:JSON.stringify(T)}};if(E&&E.length>0){let e=null==E?void 0:E.filter(e=>"view"===e.role);V.current=e[e.length-1].order+1}let i=[{role:"human",context:e||L,model_name:O,order:V.current,time_stamp:0},{role:"view",context:"",model_name:O,order:V.current,time_stamp:0,thinking:!0}],s=i.length-1;B([...E,...i]),F(!1);try{await (0,m.L)("".concat(null!==(l=S.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[o.gp]:null!==(t=(0,a.n5)())&&void 0!==t?t:""},signal:z.current.signal,body:JSON.stringify(r),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===m.a)return},onclose(){var e;null===(e=z.current)||void 0===e||e.abort(),F(!0),q(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(F(!0),q(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(i[s].context=null==l?void 0:l.replace("[ERROR]",""),i[s].thinking=!1,B([...E,...i]),F(!0),q(!1)):(q(!0),i[s].context=l,i[s].thinking=!1,B([...E,...i]))}})}catch(e){null===(n=z.current)||void 0===n||n.abort(),i[s].context="Sorry, we meet some error, please try again later.",i[s].thinking=!1,B([...i]),F(!0),q(!1)}},X=async()=>{L.trim()&&D&&await K()};(0,_.useEffect)(()=>{var e,l;null===(e=P.current)||void 0===e||e.scrollTo({top:null===(l=P.current)||void 0===l?void 0:l.scrollHeight,behavior:"auto"})},[E,P]);let Q=(0,_.useMemo)(()=>{if(!M)return[];let{param_need:e=[]}=M;return null==e?void 0:e.map(e=>e.type)},[M]),Y=(0,_.useMemo)(()=>{var e;return 0===E.length&&M&&!!(null==M?void 0:null===(e=M.recommend_questions)||void 0===e?void 0:e.length)},[E,M]),{run:ee,loading:el}=(0,p.Z)(async()=>await (0,r.Vx)((0,r.zR)(I)),{manual:!0,onSuccess:()=>{B([])}});return(0,_.useEffect)(()=>{b&&O&&I&&M&&K(b)},[M,I,O,b]),(0,n.jsxs)("div",{className:"flex flex-col",children:[Y&&(0,n.jsx)("ul",{children:null==M?void 0:null===(e=M.recommend_questions)||void 0===e?void 0:e.map((e,l)=>(0,n.jsx)("li",{className:"mb-3",children:(0,n.jsx)(v.Z,{color:Z[l],className:"p-2 rounded-xl",onClick:async()=>{K(e.question)},children:e.question})},e.id))}),(0,n.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,n.jsxs)("div",{className:"flex gap-2 mb-1 w-full overflow-x-auto",children:[(null==Q?void 0:Q.includes("model"))&&(0,n.jsx)(C.default,{}),(null==Q?void 0:Q.includes("resource"))&&(0,n.jsx)(k.default,{}),(null==Q?void 0:Q.includes("temperature"))&&(0,n.jsx)(N.default,{})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between text-lg font-bold",children:[(0,n.jsx)(f.Z,{content:"暂停回复",trigger:["hover"],children:(0,n.jsx)(i.Z,{className:y()("p-2 cursor-pointer",{"text-[#0c75fc]":A,"text-gray-400":!A}),onClick:()=>{var e;A&&(null===(e=z.current)||void 0===e||e.abort(),setTimeout(()=>{q(!1),F(!0)},100))}})}),(0,n.jsx)(f.Z,{content:"再来一次",trigger:["hover"],children:(0,n.jsx)(s.Z,{className:y()("p-2 cursor-pointer",{"text-gray-400":!E.length||!D}),onClick:()=>{var e,l;if(!D||0===E.length)return;let t=null===(e=null===(l=E.filter(e=>"human"===e.role))||void 0===l?void 0:l.slice(-1))||void 0===e?void 0:e[0];K((null==t?void 0:t.context)||"")}})}),el?(0,n.jsx)(x.Z,{spinning:el,indicator:(0,n.jsx)(c.Z,{style:{fontSize:18},spin:!0}),className:"p-2"}):(0,n.jsx)(f.Z,{content:"清除历史",trigger:["hover"],children:(0,n.jsx)(u.Z,{className:y()("p-2 cursor-pointer",{"text-gray-400":!E.length||!D}),onClick:()=>{D&&ee()}})})]})]}),(0,n.jsxs)("div",{className:y()("flex py-2 px-3 items-center justify-between bg-white dark:bg-[#242733] dark:border-[#6f7f95] rounded-xl border",{"border-[#0c75fc] dark:border-[rgba(12,117,252,0.8)]":H}),children:[(0,n.jsx)(h.default.TextArea,{placeholder:"可以问我任何问题",className:"w-full resize-none border-0 p-0 focus:shadow-none",value:L,autoSize:{minRows:1},onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){if(J){e.preventDefault();return}L.trim()&&(e.preventDefault(),X())}},onChange:e=>{W(e.target.value)},onFocus:()=>{U(!0)},onBlur:()=>U(!1),onCompositionStartCapture:()=>{G(!0)},onCompositionEndCapture:()=>{setTimeout(()=>{G(!1)},0)}}),(0,n.jsx)(g.ZP,{type:"primary",className:y()("flex items-center justify-center rounded-lg bg-button-gradient border-0 ml-2",{"opacity-40 cursor-not-allowed":!L.trim()||!D}),onClick:X,children:D?(0,n.jsx)(d.Z,{}):(0,n.jsx)(x.Z,{indicator:(0,n.jsx)(c.Z,{className:"text-white"})})})]})]})}},7001:function(e,l,t){t.r(l);var n=t(85893),r=t(41468),a=t(39718),o=t(94668),i=t(85418),s=t(55241),c=t(67294),u=t(73913);l.default=()=>{let{modelList:e}=(0,c.useContext)(r.p),{model:l,setModel:t}=(0,c.useContext)(u.MobileChatContext),d=(0,c.useMemo)(()=>e.length>0?e.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{t(e)},children:[(0,n.jsx)(a.Z,{width:14,height:14,model:e}),(0,n.jsx)("span",{className:"text-xs",children:e})]}),key:e})):[],[e,t]);return(0,n.jsx)(i.Z,{menu:{items:d},placement:"top",trigger:["click"],children:(0,n.jsx)(s.Z,{content:l,children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(a.Z,{width:16,height:16,model:l}),(0,n.jsx)("span",{className:"text-xs font-medium line-clamp-1",style:{maxWidth:96},children:l}),(0,n.jsx)(o.Z,{rotate:90})]})})})}},46568:function(e,l,t){t.r(l);var n=t(85893),r=t(25675),a=t.n(r),o=t(67294);l.default=(0,o.memo)(e=>{let{width:l,height:t,src:r,label:o}=e;return(0,n.jsx)(a(),{width:l||14,height:t||14,src:r,alt:o||"db-icon",priority:!0})})},73749:function(e,l,t){t.r(l);var n=t(85893),r=t(76212),a=t(62418),o=t(79090),i=t(94668),s=t(83266),c=t(65654),u=t(75081),d=t(23799),m=t(85418),p=t(67294),v=t(73913),f=t(46568);l.default=()=>{let{appInfo:e,resourceList:l,scene:t,model:x,conv_uid:h,getChatHistoryRun:g,setResource:b,resource:y}=(0,p.useContext)(v.MobileChatContext),[j,_]=(0,p.useState)(null),w=(0,p.useMemo)(()=>{var l,t,n;return null===(l=null==e?void 0:null===(t=e.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type))||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:n.value},[e]),C=(0,p.useMemo)(()=>l&&l.length>0?l.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{_(e),b(e.space_id||e.param)},children:[(0,n.jsx)(f.default,{width:14,height:14,src:a.S$[e.type].icon,label:a.S$[e.type].label}),(0,n.jsx)("span",{className:"text-xs",children:e.param})]}),key:e.space_id||e.param})):[],[l,b]),{run:k,loading:N}=(0,c.Z)(async e=>{let[,l]=await (0,r.Vx)((0,r.qn)({convUid:h,chatMode:t,data:e,model:x,config:{timeout:36e5}}));return b(l),l},{manual:!0,onSuccess:async()=>{await g()}}),S=async e=>{let l=new FormData;l.append("doc_file",null==e?void 0:e.file),await k(l)},Z=(0,p.useMemo)(()=>N?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(u.Z,{size:"small",indicator:(0,n.jsx)(o.Z,{spin:!0})}),(0,n.jsx)("span",{className:"text-xs",children:"上传中"})]}):y?(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("span",{className:"text-xs",children:y.file_name}),(0,n.jsx)(i.Z,{rotate:90})]}):(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(s.Z,{className:"text-base"}),(0,n.jsx)("span",{className:"text-xs",children:"上传文件"})]}),[N,y]);return(0,n.jsx)(n.Fragment,{children:(()=>{switch(w){case"excel_file":case"text_file":case"image_file":return(0,n.jsx)("div",{className:"flex items-center justify-center gap-1 border rounded-xl bg-white dark:bg-black px-2 flex-shrink-0",children:(0,n.jsx)(d.default,{name:"file",accept:".xlsx,.xls",maxCount:1,showUploadList:!1,beforeUpload:()=>!1,onChange:S,className:"flex h-full w-full items-center justify-center",children:Z})});case"database":case"knowledge":case"plugin":case"awel_flow":var e,t,r,o,s;if(!(null==l?void 0:l.length))return null;return(0,n.jsx)(m.Z,{menu:{items:C},placement:"top",trigger:["click"],children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(f.default,{width:14,height:14,src:null===(e=a.S$[(null==j?void 0:j.type)||(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.type)])||void 0===e?void 0:e.icon,label:null===(r=a.S$[(null==j?void 0:j.type)||(null==l?void 0:null===(o=l[0])||void 0===o?void 0:o.type)])||void 0===r?void 0:r.label}),(0,n.jsx)("span",{className:"text-xs font-medium",children:(null==j?void 0:j.param)||(null==l?void 0:null===(s=l[0])||void 0===s?void 0:s.param)}),(0,n.jsx)(i.Z,{rotate:90})]})})}})()})}},97109:function(e,l,t){t.r(l);var n=t(85893),r=t(70065),a=t(85418),o=t(71338),i=t(67294),s=t(73913);l.default=()=>{let{temperature:e,setTemperature:l}=(0,i.useContext)(s.MobileChatContext),t=e=>{isNaN(e)||l(e)};return(0,n.jsx)(a.Z,{trigger:["click"],dropdownRender:()=>(0,n.jsx)("div",{className:"flex h-28 bg-white dark:bg-[rgba(255,255,255,0.5)] items-center justify-center rounded-xl py-3",children:(0,n.jsx)(o.Z,{defaultValue:.5,max:1,min:0,step:.1,vertical:!0,onChange:t,value:e})}),placement:"top",children:(0,n.jsxs)("div",{className:"flex items-center justify-between border rounded-xl bg-white dark:bg-black w-14 p-2 flex-shrink-0",children:[(0,n.jsx)(r.Z,{type:"icon-icons-temperature",className:"text-sm"}),(0,n.jsx)("span",{className:"text-xs font-medium",children:e})]})})}},73913:function(e,l,t){t.r(l),t.d(l,{MobileChatContext:function(){return y}});var n=t(85893),r=t(41468),a=t(76212),o=t(2440),i=t(62418),s=t(25519),c=t(1375),u=t(65654),d=t(75081),m=t(5152),p=t.n(m),v=t(39332),f=t(67294),x=t(56397),h=t(74638),g=t(83454);let b=p()(()=>Promise.all([t.e(3662),t.e(7034),t.e(4041),t.e(2398),t.e(1300),t.e(4567),t.e(2783),t.e(9773),t.e(2797),t.e(5265),t.e(150),t.e(7962),t.e(5798),t.e(835),t.e(1798),t.e(7784),t.e(8709),t.e(7249),t.e(3534)]).then(t.bind(t,36818)),{loadableGenerated:{webpack:()=>[36818]},ssr:!1}),y=(0,f.createContext)({model:"",temperature:.5,resource:null,setModel:()=>{},setTemperature:()=>{},setResource:()=>{},scene:"",history:[],setHistory:()=>{},scrollViewRef:{current:null},appInfo:{},conv_uid:"",resourceList:[],order:{current:1},handleChat:()=>Promise.resolve(),canAbort:!1,setCarAbort:()=>{},canNewChat:!1,setCanNewChat:()=>{},ctrl:{current:void 0},userInput:"",setUserInput:()=>{},getChatHistoryRun:()=>{}});l.default=()=>{var e,l;let t=(0,v.useSearchParams)(),m=null!==(e=null==t?void 0:t.get("chat_scene"))&&void 0!==e?e:"",p=null!==(l=null==t?void 0:t.get("app_code"))&&void 0!==l?l:"",{modelList:j}=(0,f.useContext)(r.p),[_,w]=(0,f.useState)([]),[C,k]=(0,f.useState)(""),[N,S]=(0,f.useState)(.5),[Z,E]=(0,f.useState)(null),O=(0,f.useRef)(null),[$,R]=(0,f.useState)(""),[T,I]=(0,f.useState)(!1),[M,P]=(0,f.useState)(!0),V=(0,f.useRef)(),L=(0,f.useRef)(1),z=(0,o.Z)(),A=(0,f.useMemo)(()=>"".concat(null==z?void 0:z.user_no,"_").concat(p),[p,z]),{run:D,loading:B}=(0,u.Z)(async()=>await (0,a.Vx)((0,a.$i)("".concat(null==z?void 0:z.user_no,"_").concat(p))),{manual:!0,onSuccess:e=>{let[,l]=e,t=null==l?void 0:l.filter(e=>"view"===e.role);t&&t.length>0&&(L.current=t[t.length-1].order+1),w(l||[])}}),{data:F,run:q,loading:W}=(0,u.Z)(async e=>{let[,l]=await (0,a.Vx)((0,a.BN)(e));return null!=l?l:{}},{manual:!0}),{run:H,data:U,loading:J}=(0,u.Z)(async()=>{var e,l;let[,t]=await (0,a.Vx)((0,a.vD)(m));return E((null==t?void 0:null===(e=t[0])||void 0===e?void 0:e.space_id)||(null==t?void 0:null===(l=t[0])||void 0===l?void 0:l.param)),null!=t?t:[]},{manual:!0}),{run:G,loading:K}=(0,u.Z)(async()=>{let[,e]=await (0,a.Vx)((0,a.iP)());return null!=e?e:[]},{manual:!0,onSuccess:e=>{var l;let t=null===(l=null==e?void 0:e.filter(e=>e.conv_uid===A))||void 0===l?void 0:l[0];(null==t?void 0:t.select_param)&&E(JSON.parse(null==t?void 0:t.select_param))}});(0,f.useEffect)(()=>{m&&p&&j.length&&q({chat_scene:m,app_code:p})},[p,m,q,j]),(0,f.useEffect)(()=>{p&&D()},[p]),(0,f.useEffect)(()=>{if(j.length>0){var e,l,t;let n=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"model"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;k(n||j[0])}},[j,F]),(0,f.useEffect)(()=>{var e,l,t;let n=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"temperature"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;S(n||.5)},[F]),(0,f.useEffect)(()=>{if(m&&(null==F?void 0:F.app_code)){var e,l,t,n,r,a;let o=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"resource"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value,i=null===(n=null==F?void 0:null===(r=F.param_need)||void 0===r?void 0:r.filter(e=>"resource"===e.type))||void 0===n?void 0:null===(a=n[0])||void 0===a?void 0:a.bind_value;i&&E(i),["database","knowledge","plugin","awel_flow"].includes(o)&&!i&&H()}},[F,m,H]);let X=async e=>{var l,t,n;R(""),V.current=new AbortController;let r={chat_mode:m,model_name:C,user_input:e||$,conv_uid:A,temperature:N,app_code:null==F?void 0:F.app_code,...Z&&{select_param:Z}};if(_&&_.length>0){let e=null==_?void 0:_.filter(e=>"view"===e.role);L.current=e[e.length-1].order+1}let a=[{role:"human",context:e||$,model_name:C,order:L.current,time_stamp:0},{role:"view",context:"",model_name:C,order:L.current,time_stamp:0,thinking:!0}],o=a.length-1;w([..._,...a]),P(!1);try{await (0,c.L)("".concat(null!==(l=g.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[s.gp]:null!==(t=(0,i.n5)())&&void 0!==t?t:""},signal:V.current.signal,body:JSON.stringify(r),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===c.a)return},onclose(){var e;null===(e=V.current)||void 0===e||e.abort(),P(!0),I(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(P(!0),I(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(a[o].context=null==l?void 0:l.replace("[ERROR]",""),a[o].thinking=!1,w([..._,...a]),P(!0),I(!1)):(I(!0),a[o].context=l,a[o].thinking=!1,w([..._,...a]))}})}catch(e){null===(n=V.current)||void 0===n||n.abort(),a[o].context="Sorry, we meet some error, please try again later.",a[o].thinking=!1,w([...a]),P(!0),I(!1)}};return(0,f.useEffect)(()=>{m&&"chat_agent"!==m&&G()},[m,G]),(0,n.jsx)(y.Provider,{value:{model:C,resource:Z,setModel:k,setTemperature:S,setResource:E,temperature:N,appInfo:F,conv_uid:A,scene:m,history:_,scrollViewRef:O,setHistory:w,resourceList:U,order:L,handleChat:X,setCanNewChat:P,ctrl:V,canAbort:T,setCarAbort:I,canNewChat:M,userInput:$,setUserInput:R,getChatHistoryRun:D},children:(0,n.jsx)(d.Z,{size:"large",className:"flex h-screen w-screen justify-center items-center max-h-screen",spinning:B||W||J||K,children:(0,n.jsxs)("div",{className:"flex flex-col h-screen bg-gradient-light dark:bg-gradient-dark p-4 pt-0",children:[(0,n.jsxs)("div",{ref:O,className:"flex flex-col flex-1 overflow-y-auto mb-3",children:[(0,n.jsx)(x.default,{}),(0,n.jsx)(b,{})]}),(null==F?void 0:F.app_code)&&(0,n.jsx)(h.default,{})]})})})}},25934:function(e,l,t){t.d(l,{Z:function(){return u}});var n,r=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}for(var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=[],s=0;s<256;++s)i.push((s+256).toString(16).substr(1));var c=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(i[e[l+0]]+i[e[l+1]]+i[e[l+2]]+i[e[l+3]]+"-"+i[e[l+4]]+i[e[l+5]]+"-"+i[e[l+6]]+i[e[l+7]]+"-"+i[e[l+8]]+i[e[l+9]]+"-"+i[e[l+10]]+i[e[l+11]]+i[e[l+12]]+i[e[l+13]]+i[e[l+14]]+i[e[l+15]]).toLowerCase();if(!("string"==typeof t&&o.test(t)))throw TypeError("Stringified UUID is invalid");return t},u=function(e,l,t){var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,l){t=t||0;for(var r=0;r<16;++r)l[t+r]=n[r];return l}return c(n)}}}]);