(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9400],{66309:function(e,r,o){"use strict";o.d(r,{Z:function(){return E}});var l=o(67294),t=o(93967),n=o.n(t),a=o(98423),c=o(98787),s=o(69760),i=o(96159),u=o(45353),d=o(53124),p=o(25446),g=o(10274),b=o(14747),f=o(83262),m=o(83559);let h=e=>{let{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:l,componentCls:t,calc:n}=e,a=n(l).sub(o).equal(),c=n(r).sub(o).equal();return{[t]:Object.assign(Object.assign({},(0,b.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},C=e=>{let{lineWidth:r,fontSizeIcon:o,calc:l}=e,t=e.fontSizeSM,n=(0,f.IX)(e,{tagFontSize:t,tagLineHeight:(0,p.bf)(l(e.lineHeightSM).mul(t).equal()),tagIconSize:l(o).sub(l(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg});return n},y=e=>({defaultBg:new g.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var v=(0,m.I$)("Tag",e=>{let r=C(e);return h(r)},y),k=function(e,r){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>r.indexOf(l)&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,l=Object.getOwnPropertySymbols(e);t<l.length;t++)0>r.indexOf(l[t])&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(o[l[t]]=e[l[t]]);return o};let x=l.forwardRef((e,r)=>{let{prefixCls:o,style:t,className:a,checked:c,onChange:s,onClick:i}=e,u=k(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:g}=l.useContext(d.E_),b=p("tag",o),[f,m,h]=v(b),C=n()(b,`${b}-checkable`,{[`${b}-checkable-checked`]:c},null==g?void 0:g.className,a,m,h);return f(l.createElement("span",Object.assign({},u,{ref:r,style:Object.assign(Object.assign({},t),null==g?void 0:g.style),className:C,onClick:e=>{null==s||s(!c),null==i||i(e)}})))});var $=o(98719);let O=e=>(0,$.Z)(e,(r,o)=>{let{textColor:l,lightBorderColor:t,lightColor:n,darkColor:a}=o;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:l,background:n,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:a,borderColor:a},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var w=(0,m.bk)(["Tag","preset"],e=>{let r=C(e);return O(r)},y);let S=(e,r,o)=>{let l=function(e){if("string"!=typeof e)return e;let r=e.charAt(0).toUpperCase()+e.slice(1);return r}(o);return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${l}Bg`],borderColor:e[`color${l}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var j=(0,m.bk)(["Tag","status"],e=>{let r=C(e);return[S(r,"success","Success"),S(r,"processing","Info"),S(r,"error","Error"),S(r,"warning","Warning")]},y),N=function(e,r){var o={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>r.indexOf(l)&&(o[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,l=Object.getOwnPropertySymbols(e);t<l.length;t++)0>r.indexOf(l[t])&&Object.prototype.propertyIsEnumerable.call(e,l[t])&&(o[l[t]]=e[l[t]]);return o};let _=l.forwardRef((e,r)=>{let{prefixCls:o,className:t,rootClassName:p,style:g,children:b,icon:f,color:m,onClose:h,bordered:C=!0,visible:y}=e,k=N(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:x,direction:$,tag:O}=l.useContext(d.E_),[S,_]=l.useState(!0),E=(0,a.Z)(k,["closeIcon","closable"]);l.useEffect(()=>{void 0!==y&&_(y)},[y]);let P=(0,c.o2)(m),T=(0,c.yT)(m),I=P||T,B=Object.assign(Object.assign({backgroundColor:m&&!I?m:void 0},null==O?void 0:O.style),g),Z=x("tag",o),[z,H,D]=v(Z),L=n()(Z,null==O?void 0:O.className,{[`${Z}-${m}`]:I,[`${Z}-has-color`]:m&&!I,[`${Z}-hidden`]:!S,[`${Z}-rtl`]:"rtl"===$,[`${Z}-borderless`]:!C},t,p,H,D),M=e=>{e.stopPropagation(),null==h||h(e),e.defaultPrevented||_(!1)},[,R]=(0,s.Z)((0,s.w)(e),(0,s.w)(O),{closable:!1,closeIconRender:e=>{let r=l.createElement("span",{className:`${Z}-close-icon`,onClick:M},e);return(0,i.wm)(e,r,e=>({onClick:r=>{var o;null===(o=null==e?void 0:e.onClick)||void 0===o||o.call(e,r),M(r)},className:n()(null==e?void 0:e.className,`${Z}-close-icon`)}))}}),q="function"==typeof k.onClick||b&&"a"===b.type,A=f||null,F=A?l.createElement(l.Fragment,null,A,b&&l.createElement("span",null,b)):b,X=l.createElement("span",Object.assign({},E,{ref:r,className:L,style:B}),F,R,P&&l.createElement(w,{key:"preset",prefixCls:Z}),T&&l.createElement(j,{key:"status",prefixCls:Z}));return z(q?l.createElement(u.Z,{component:"Tag"},X):X)});_.CheckableTag=x;var E=_},30132:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mobile/chat/components/DislikeDrawer",function(){return o(5583)}])},5583:function(e,r,o){"use strict";o.r(r);var l=o(85893),t=o(85265),n=o(66309),a=o(25278),c=o(14726),s=o(67294);r.default=e=>{let{open:r,setFeedbackOpen:o,list:i,feedback:u,loading:d}=e,[p,g]=(0,s.useState)([]),[b,f]=(0,s.useState)("");return(0,l.jsx)(t.Z,{title:"你的反馈助我进步",placement:"bottom",open:r,onClose:()=>o(!1),destroyOnClose:!0,height:"auto",children:(0,l.jsxs)("div",{className:"flex flex-col w-full gap-4",children:[(0,l.jsx)("div",{className:"flex w-full flex-wrap gap-2",children:null==i?void 0:i.map(e=>{let r=p.findIndex(r=>r.reason_type===e.reason_type)>-1;return(0,l.jsx)(n.Z,{className:"text-sm text-[#525964] p-1 px-2 rounded-md cursor-pointer ".concat(r?"border-[#0c75fc] text-[#0c75fc]":""),onClick:()=>{g(r=>{let o=r.findIndex(r=>r.reason_type===e.reason_type);return o>-1?[...r.slice(0,o),...r.slice(o+1)]:[...r,e]})},children:e.reason},e.reason_type)})}),(0,l.jsx)(a.default.TextArea,{placeholder:"描述一下具体问题或更优的答案",className:"h-24 resize-none mb-2",value:b,onChange:e=>f(e.target.value.trim())}),(0,l.jsxs)("div",{className:"flex gap-2 justify-end",children:[(0,l.jsx)(c.ZP,{className:"w-16 h-8",onClick:()=>{o(!1)},children:"取消"}),(0,l.jsx)(c.ZP,{type:"primary",className:"min-w-16 h-8",onClick:async()=>{let e=p.map(e=>e.reason_type);await (null==u?void 0:u({feedback_type:"unlike",reason_types:e,remark:b}))},loading:d,children:"确认"})]})]})})}}},function(e){e.O(0,[2913,5278,5265,9774,2888,179],function(){return e(e.s=30132)}),_N_E=e.O()}]);