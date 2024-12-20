"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2398],{24969:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(87462),o=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(13401),l=o.forwardRef(function(e,t){return o.createElement(i.Z,(0,a.Z)({},e,{ref:t,icon:r}))})},92398:function(e,t,n){n.d(t,{Z:function(){return e_}});var a=n(67294),o=n(97937),r=n(89705),i=n(24969),l=n(93967),c=n.n(l),d=n(87462),s=n(4942),u=n(1413),f=n(97685),b=n(71002),v=n(45987),p=n(21770),m=n(31131),h=(0,a.createContext)(null),g=n(74902),$=n(9220),k=n(66680),y=n(42550),x=n(75164),_=function(e){var t=e.activeTabOffset,n=e.horizontal,o=e.rtl,r=e.indicator,i=void 0===r?{}:r,l=i.size,c=i.align,d=void 0===c?"center":c,s=(0,a.useState)(),u=(0,f.Z)(s,2),b=u[0],v=u[1],p=(0,a.useRef)(),m=a.useCallback(function(e){return"function"==typeof l?l(e):"number"==typeof l?l:e},[l]);function h(){x.Z.cancel(p.current)}return(0,a.useEffect)(function(){var e={};if(t){if(n){e.width=m(t.width);var a=o?"right":"left";"start"===d&&(e[a]=t[a]),"center"===d&&(e[a]=t[a]+t.width/2,e.transform=o?"translateX(50%)":"translateX(-50%)"),"end"===d&&(e[a]=t[a]+t.width,e.transform="translateX(-100%)")}else e.height=m(t.height),"start"===d&&(e.top=t.top),"center"===d&&(e.top=t.top+t.height/2,e.transform="translateY(-50%)"),"end"===d&&(e.top=t.top+t.height,e.transform="translateY(-100%)")}return h(),p.current=(0,x.Z)(function(){v(e)}),h},[t,n,o,d,m]),{style:b}},w={width:0,height:0,left:0,top:0};function S(e,t){var n=a.useRef(e),o=a.useState({}),r=(0,f.Z)(o,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var E=n(8410);function Z(e){var t=(0,a.useState)(0),n=(0,f.Z)(t,2),o=n[0],r=n[1],i=(0,a.useRef)(0),l=(0,a.useRef)();return l.current=e,(0,E.o)(function(){var e;null===(e=l.current)||void 0===e||e.call(l)},[o]),function(){i.current===o&&(i.current+=1,r(i.current))}}var C={width:0,height:0,left:0,top:0,right:0};function R(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}function T(e){return String(e).replace(/"/g,"TABS_DQ")}function P(e,t,n,a){return!!n&&!a&&!1!==e&&(void 0!==e||!1!==t&&null!==t)}var I=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return o&&!1!==o.showAdd?a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){o.onEdit("add",{event:e})}},o.addIcon||"+"):null}),L=a.forwardRef(function(e,t){var n,o=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l={};return"object"!==(0,b.Z)(i)||a.isValidElement(i)?l.right=i:l=i,"right"===o&&(n=l.right),"left"===o&&(n=l.left),n?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null}),N=n(29171),M=n(72512),z=n(15105),B=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.id,r=e.tabs,i=e.locale,l=e.mobile,d=e.moreIcon,u=void 0===d?"More":d,b=e.moreTransitionName,v=e.style,p=e.className,m=e.editable,h=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,k=e.onTabClick,y=e.getPopupContainer,x=e.popupClassName,_=(0,a.useState)(!1),w=(0,f.Z)(_,2),S=w[0],E=w[1],Z=(0,a.useState)(null),C=(0,f.Z)(Z,2),R=C[0],T=C[1],L="".concat(o,"-more-popup"),B="".concat(n,"-dropdown"),O=null!==R?"".concat(L,"-").concat(R):null,D=null==i?void 0:i.dropdownAriaLabel,j=a.createElement(M.ZP,{onClick:function(e){k(e.key,e.domEvent),E(!1)},prefixCls:"".concat(B,"-menu"),id:L,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[R],"aria-label":void 0!==D?D:"expanded dropdown"},r.map(function(e){var t=e.closable,n=e.disabled,r=e.closeIcon,i=e.key,l=e.label,c=P(t,r,m,n);return a.createElement(M.sN,{key:i,id:"".concat(L,"-").concat(i),role:"option","aria-controls":o&&"".concat(o,"-panel-").concat(i),disabled:n},a.createElement("span",null,l),c&&a.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(B,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:i,event:e})}},r||m.removeIcon||"\xd7"))}));function G(e){for(var t=r.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===R})||0,a=t.length,o=0;o<a;o+=1){var i=t[n=(n+e+a)%a];if(!i.disabled){T(i.key);return}}}(0,a.useEffect)(function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[R]),(0,a.useEffect)(function(){S||T(null)},[S]);var W=(0,s.Z)({},g?"marginRight":"marginLeft",h);r.length||(W.visibility="hidden",W.order=1);var A=c()((0,s.Z)({},"".concat(B,"-rtl"),g)),X=l?null:a.createElement(N.Z,{prefixCls:B,overlay:j,trigger:["hover"],visible:!!r.length&&S,transitionName:b,onVisibleChange:E,overlayClassName:c()(A,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:y},a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":L,id:"".concat(o,"-more"),"aria-expanded":S,onKeyDown:function(e){var t=e.which;if(!S){[z.Z.DOWN,z.Z.SPACE,z.Z.ENTER].includes(t)&&(E(!0),e.preventDefault());return}switch(t){case z.Z.UP:G(-1),e.preventDefault();break;case z.Z.DOWN:G(1),e.preventDefault();break;case z.Z.ESC:E(!1);break;case z.Z.SPACE:case z.Z.ENTER:null!==R&&k(R,e)}}},u));return a.createElement("div",{className:c()("".concat(n,"-nav-operations"),p),style:v,ref:t},X,a.createElement(I,{prefixCls:n,locale:i,editable:m}))}),O=a.memo(B,function(e,t){return t.tabMoving}),D=function(e){var t=e.prefixCls,n=e.id,o=e.active,r=e.tab,i=r.key,l=r.label,d=r.disabled,u=r.closeIcon,f=r.icon,b=e.closable,v=e.renderWrapper,p=e.removeAriaLabel,m=e.editable,h=e.onClick,g=e.onFocus,$=e.style,k="".concat(t,"-tab"),y=P(b,u,m,d);function x(e){d||h(e)}var _=a.useMemo(function(){return f&&"string"==typeof l?a.createElement("span",null,l):l},[l,f]),w=a.createElement("div",{key:i,"data-node-key":T(i),className:c()(k,(0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(k,"-with-remove"),y),"".concat(k,"-active"),o),"".concat(k,"-disabled"),d)),style:$,onClick:x},a.createElement("div",{role:"tab","aria-selected":o,id:n&&"".concat(n,"-tab-").concat(i),className:"".concat(k,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(i),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[z.Z.SPACE,z.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},f&&a.createElement("span",{className:"".concat(k,"-icon")},f),l&&_),y&&a.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:i,event:e})}},u||m.removeIcon||"\xd7"));return v?v(w):w},j=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,o=e.offsetTop,r=e.offsetLeft,i=e.getBoundingClientRect(),l=i.width,c=i.height,d=i.x,s=i.y;return 1>Math.abs(l-n)?[l,c,d-t.x,s-t.y]:[n,a,r,o]},G=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,o=t.offsetHeight;if(e.current){var r=e.current.getBoundingClientRect(),i=r.width,l=r.height;if(1>Math.abs(i-a))return[i,l]}return[a,void 0===o?0:o]},W=function(e,t){return e[t?0:1]},A=a.forwardRef(function(e,t){var n,o,r,i,l,b,v,p,m,x,E,P,N,M,z,B,A,X,H,q,K,F,V,Y,Q,J,U,ee,et,en,ea,eo,er,ei,el,ec,ed,es,eu,ef=e.className,eb=e.style,ev=e.id,ep=e.animated,em=e.activeKey,eh=e.rtl,eg=e.extra,e$=e.editable,ek=e.locale,ey=e.tabPosition,ex=e.tabBarGutter,e_=e.children,ew=e.onTabClick,eS=e.onTabScroll,eE=e.indicator,eZ=a.useContext(h),eC=eZ.prefixCls,eR=eZ.tabs,eT=(0,a.useRef)(null),eP=(0,a.useRef)(null),eI=(0,a.useRef)(null),eL=(0,a.useRef)(null),eN=(0,a.useRef)(null),eM=(0,a.useRef)(null),ez=(0,a.useRef)(null),eB="top"===ey||"bottom"===ey,eO=S(0,function(e,t){eB&&eS&&eS({direction:e>t?"left":"right"})}),eD=(0,f.Z)(eO,2),ej=eD[0],eG=eD[1],eW=S(0,function(e,t){!eB&&eS&&eS({direction:e>t?"top":"bottom"})}),eA=(0,f.Z)(eW,2),eX=eA[0],eH=eA[1],eq=(0,a.useState)([0,0]),eK=(0,f.Z)(eq,2),eF=eK[0],eV=eK[1],eY=(0,a.useState)([0,0]),eQ=(0,f.Z)(eY,2),eJ=eQ[0],eU=eQ[1],e0=(0,a.useState)([0,0]),e1=(0,f.Z)(e0,2),e2=e1[0],e8=e1[1],e9=(0,a.useState)([0,0]),e4=(0,f.Z)(e9,2),e7=e4[0],e6=e4[1],e5=(n=new Map,o=(0,a.useRef)([]),r=(0,a.useState)({}),i=(0,f.Z)(r,2)[1],l=(0,a.useRef)("function"==typeof n?n():n),b=Z(function(){var e=l.current;o.current.forEach(function(t){e=t(e)}),o.current=[],l.current=e,i({})}),[l.current,function(e){o.current.push(e),b()}]),e3=(0,f.Z)(e5,2),te=e3[0],tt=e3[1],tn=(v=eJ[0],(0,a.useMemo)(function(){for(var e=new Map,t=te.get(null===(o=eR[0])||void 0===o?void 0:o.key)||w,n=t.left+t.width,a=0;a<eR.length;a+=1){var o,r,i=eR[a].key,l=te.get(i);l||(l=te.get(null===(r=eR[a-1])||void 0===r?void 0:r.key)||w);var c=e.get(i)||(0,u.Z)({},l);c.right=n-c.left-c.width,e.set(i,c)}return e},[eR.map(function(e){return e.key}).join("_"),te,v])),ta=W(eF,eB),to=W(eJ,eB),tr=W(e2,eB),ti=W(e7,eB),tl=ta<to+tr,tc=tl?ta-ti:ta-tr,td="".concat(eC,"-nav-operations-hidden"),ts=0,tu=0;function tf(e){return e<ts?ts:e>tu?tu:e}eB&&eh?(ts=0,tu=Math.max(0,to-tc)):(ts=Math.min(0,tc-to),tu=0);var tb=(0,a.useRef)(null),tv=(0,a.useState)(),tp=(0,f.Z)(tv,2),tm=tp[0],th=tp[1];function tg(){th(Date.now())}function t$(){tb.current&&clearTimeout(tb.current)}p=function(e,t){function n(e,t){e(function(e){return tf(e+t)})}return!!tl&&(eB?n(eG,e):n(eH,t),t$(),tg(),!0)},m=(0,a.useState)(),E=(x=(0,f.Z)(m,2))[0],P=x[1],N=(0,a.useState)(0),z=(M=(0,f.Z)(N,2))[0],B=M[1],A=(0,a.useState)(0),H=(X=(0,f.Z)(A,2))[0],q=X[1],K=(0,a.useState)(),V=(F=(0,f.Z)(K,2))[0],Y=F[1],Q=(0,a.useRef)(),J=(0,a.useRef)(),(U=(0,a.useRef)(null)).current={onTouchStart:function(e){var t=e.touches[0];P({x:t.screenX,y:t.screenY}),window.clearInterval(Q.current)},onTouchMove:function(e){if(E){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;P({x:n,y:a});var o=n-E.x,r=a-E.y;p(o,r);var i=Date.now();B(i),q(i-z),Y({x:o,y:r})}},onTouchEnd:function(){if(E&&(P(null),Y(null),V)){var e=V.x/H,t=V.y/H;if(!(.1>Math.max(Math.abs(e),Math.abs(t)))){var n=e,a=t;Q.current=window.setInterval(function(){if(.01>Math.abs(n)&&.01>Math.abs(a)){window.clearInterval(Q.current);return}p(20*(n*=.9046104802746175),20*(a*=.9046104802746175))},20)}}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,o=Math.abs(t),r=Math.abs(n);o===r?a="x"===J.current?t:n:o>r?(a=t,J.current="x"):(a=n,J.current="y"),p(-a,-a)&&e.preventDefault()}},a.useEffect(function(){function e(e){U.current.onTouchMove(e)}function t(e){U.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",t,{passive:!1}),eL.current.addEventListener("touchstart",function(e){U.current.onTouchStart(e)},{passive:!1}),eL.current.addEventListener("wheel",function(e){U.current.onWheel(e)}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",t)}},[]),(0,a.useEffect)(function(){return t$(),tm&&(tb.current=setTimeout(function(){th(0)},100)),t$},[tm]);var tk=(ee=eB?ej:eX,er=(et=(0,u.Z)((0,u.Z)({},e),{},{tabs:eR})).tabs,ei=et.tabPosition,el=et.rtl,["top","bottom"].includes(ei)?(en="width",ea=el?"right":"left",eo=Math.abs(ee)):(en="height",ea="top",eo=-ee),(0,a.useMemo)(function(){if(!er.length)return[0,0];for(var e=er.length,t=e,n=0;n<e;n+=1){var a=tn.get(er[n].key)||C;if(a[ea]+a[en]>eo+tc){t=n-1;break}}for(var o=0,r=e-1;r>=0;r-=1)if((tn.get(er[r].key)||C)[ea]<eo){o=r+1;break}return o>=t?[0,0]:[o,t]},[tn,tc,to,tr,ti,eo,ei,er.map(function(e){return e.key}).join("_"),el])),ty=(0,f.Z)(tk,2),tx=ty[0],t_=ty[1],tw=(0,k.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:em,t=tn.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eB){var n=ej;eh?t.right<ej?n=t.right:t.right+t.width>ej+tc&&(n=t.right+t.width-tc):t.left<-ej?n=-t.left:t.left+t.width>-ej+tc&&(n=-(t.left+t.width-tc)),eH(0),eG(tf(n))}else{var a=eX;t.top<-eX?a=-t.top:t.top+t.height>-eX+tc&&(a=-(t.top+t.height-tc)),eG(0),eH(tf(a))}}),tS={};"top"===ey||"bottom"===ey?tS[eh?"marginRight":"marginLeft"]=ex:tS.marginTop=ex;var tE=eR.map(function(e,t){var n=e.key;return a.createElement(D,{id:ev,prefixCls:eC,key:n,tab:e,style:0===t?void 0:tS,closable:e.closable,editable:e$,active:n===em,renderWrapper:e_,removeAriaLabel:null==ek?void 0:ek.removeAriaLabel,onClick:function(e){ew(n,e)},onFocus:function(){tw(n),tg(),eL.current&&(eh||(eL.current.scrollLeft=0),eL.current.scrollTop=0)}})}),tZ=function(){return tt(function(){var e,t=new Map,n=null===(e=eN.current)||void 0===e?void 0:e.getBoundingClientRect();return eR.forEach(function(e){var a,o=e.key,r=null===(a=eN.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat(T(o),'"]'));if(r){var i=j(r,n),l=(0,f.Z)(i,4),c=l[0],d=l[1],s=l[2],u=l[3];t.set(o,{width:c,height:d,left:s,top:u})}}),t})};(0,a.useEffect)(function(){tZ()},[eR.map(function(e){return e.key}).join("_")]);var tC=Z(function(){var e=G(eT),t=G(eP),n=G(eI);eV([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=G(ez);e8(a),e6(G(eM));var o=G(eN);eU([o[0]-a[0],o[1]-a[1]]),tZ()}),tR=eR.slice(0,tx),tT=eR.slice(t_+1),tP=[].concat((0,g.Z)(tR),(0,g.Z)(tT)),tI=tn.get(em),tL=_({activeTabOffset:tI,horizontal:eB,indicator:eE,rtl:eh}).style;(0,a.useEffect)(function(){tw()},[em,ts,tu,R(tI),R(tn),eB]),(0,a.useEffect)(function(){tC()},[eh]);var tN=!!tP.length,tM="".concat(eC,"-nav-wrap");return eB?eh?(ed=ej>0,ec=ej!==tu):(ec=ej<0,ed=ej!==ts):(es=eX<0,eu=eX!==ts),a.createElement($.Z,{onResize:tC},a.createElement("div",{ref:(0,y.x1)(t,eT),role:"tablist",className:c()("".concat(eC,"-nav"),ef),style:eb,onKeyDown:function(){tg()}},a.createElement(L,{ref:eP,position:"left",extra:eg,prefixCls:eC}),a.createElement($.Z,{onResize:tC},a.createElement("div",{className:c()(tM,(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(tM,"-ping-left"),ec),"".concat(tM,"-ping-right"),ed),"".concat(tM,"-ping-top"),es),"".concat(tM,"-ping-bottom"),eu)),ref:eL},a.createElement($.Z,{onResize:tC},a.createElement("div",{ref:eN,className:"".concat(eC,"-nav-list"),style:{transform:"translate(".concat(ej,"px, ").concat(eX,"px)"),transition:tm?"none":void 0}},tE,a.createElement(I,{ref:ez,prefixCls:eC,locale:ek,editable:e$,style:(0,u.Z)((0,u.Z)({},0===tE.length?void 0:tS),{},{visibility:tN?"hidden":null})}),a.createElement("div",{className:c()("".concat(eC,"-ink-bar"),(0,s.Z)({},"".concat(eC,"-ink-bar-animated"),ep.inkBar)),style:tL}))))),a.createElement(O,(0,d.Z)({},e,{removeAriaLabel:null==ek?void 0:ek.removeAriaLabel,ref:eM,prefixCls:eC,tabs:tP,className:!tN&&td,tabMoving:!!tm})),a.createElement(L,{ref:eI,position:"right",extra:eg,prefixCls:eC})))}),X=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.className,r=e.style,i=e.id,l=e.active,d=e.tabKey,s=e.children;return a.createElement("div",{id:i&&"".concat(i,"-panel-").concat(d),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(d),"aria-hidden":!l,style:r,className:c()(n,l&&"".concat(n,"-active"),o),ref:t},s)}),H=["renderTabBar"],q=["label","key"],K=function(e){var t=e.renderTabBar,n=(0,v.Z)(e,H),o=a.useContext(h).tabs;return t?t((0,u.Z)((0,u.Z)({},n),{},{panes:o.map(function(e){var t=e.label,n=e.key,o=(0,v.Z)(e,q);return a.createElement(X,(0,d.Z)({tab:t,key:n,tabKey:n},o))})}),A):a.createElement(A,n)},F=n(82225),V=["key","forceRender","style","className","destroyInactiveTabPane"],Y=function(e){var t=e.id,n=e.activeKey,o=e.animated,r=e.tabPosition,i=e.destroyInactiveTabPane,l=a.useContext(h),f=l.prefixCls,b=l.tabs,p=o.tabPane,m="".concat(f,"-tabpane");return a.createElement("div",{className:c()("".concat(f,"-content-holder"))},a.createElement("div",{className:c()("".concat(f,"-content"),"".concat(f,"-content-").concat(r),(0,s.Z)({},"".concat(f,"-content-animated"),p))},b.map(function(e){var r=e.key,l=e.forceRender,s=e.style,f=e.className,b=e.destroyInactiveTabPane,h=(0,v.Z)(e,V),g=r===n;return a.createElement(F.ZP,(0,d.Z)({key:r,visible:g,forceRender:l,removeOnLeave:!!(i||b),leavedClassName:"".concat(m,"-hidden")},o.tabPaneMotion),function(e,n){var o=e.style,i=e.className;return a.createElement(X,(0,d.Z)({},h,{prefixCls:m,id:t,tabKey:r,animated:p,active:g,style:(0,u.Z)((0,u.Z)({},s),o),className:c()(f,i),ref:n}))})})))};n(80334);var Q=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],J=0,U=a.forwardRef(function(e,t){var n=e.id,o=e.prefixCls,r=void 0===o?"rc-tabs":o,i=e.className,l=e.items,g=e.direction,$=e.activeKey,k=e.defaultActiveKey,y=e.editable,x=e.animated,_=e.tabPosition,w=void 0===_?"top":_,S=e.tabBarGutter,E=e.tabBarStyle,Z=e.tabBarExtraContent,C=e.locale,R=e.moreIcon,T=e.moreTransitionName,P=e.destroyInactiveTabPane,I=e.renderTabBar,L=e.onChange,N=e.onTabClick,M=e.onTabScroll,z=e.getPopupContainer,B=e.popupClassName,O=e.indicator,D=(0,v.Z)(e,Q),j=a.useMemo(function(){return(l||[]).filter(function(e){return e&&"object"===(0,b.Z)(e)&&"key"in e})},[l]),G="rtl"===g,W=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,u.Z)({inkBar:!0},"object"===(0,b.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(x),A=(0,a.useState)(!1),X=(0,f.Z)(A,2),H=X[0],q=X[1];(0,a.useEffect)(function(){q((0,m.Z)())},[]);var F=(0,p.Z)(function(){var e;return null===(e=j[0])||void 0===e?void 0:e.key},{value:$,defaultValue:k}),V=(0,f.Z)(F,2),U=V[0],ee=V[1],et=(0,a.useState)(function(){return j.findIndex(function(e){return e.key===U})}),en=(0,f.Z)(et,2),ea=en[0],eo=en[1];(0,a.useEffect)(function(){var e,t=j.findIndex(function(e){return e.key===U});-1===t&&(t=Math.max(0,Math.min(ea,j.length-1)),ee(null===(e=j[t])||void 0===e?void 0:e.key)),eo(t)},[j.map(function(e){return e.key}).join("_"),U,ea]);var er=(0,p.Z)(null,{value:n}),ei=(0,f.Z)(er,2),el=ei[0],ec=ei[1];(0,a.useEffect)(function(){n||(ec("rc-tabs-".concat(J)),J+=1)},[]);var ed={id:el,activeKey:U,animated:W,tabPosition:w,rtl:G,mobile:H},es=(0,u.Z)((0,u.Z)({},ed),{},{editable:y,locale:C,moreIcon:R,moreTransitionName:T,tabBarGutter:S,onTabClick:function(e,t){null==N||N(e,t);var n=e!==U;ee(e),n&&(null==L||L(e))},onTabScroll:M,extra:Z,style:E,panes:null,getPopupContainer:z,popupClassName:B,indicator:O});return a.createElement(h.Provider,{value:{tabs:j,prefixCls:r}},a.createElement("div",(0,d.Z)({ref:t,id:n,className:c()(r,"".concat(r,"-").concat(w),(0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(r,"-mobile"),H),"".concat(r,"-editable"),y),"".concat(r,"-rtl"),G),i)},D),a.createElement(K,(0,d.Z)({},es,{renderTabBar:I})),a.createElement(Y,(0,d.Z)({destroyInactiveTabPane:P},ed,{animated:W}))))}),ee=n(53124),et=n(35792),en=n(98675),ea=n(33603);let eo={motionAppear:!1,motionEnter:!0,motionLeave:!0};var er=n(50344),ei=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},el=n(39302),ec=n(14747),ed=n(91945),es=n(45503),eu=n(67771),ef=e=>{let{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,eu.oN)(e,"slide-up"),(0,eu.oN)(e,"slide-down")]]};let eb=e=>{let{componentCls:t,tabsCardPadding:n,cardBg:a,cardGutter:o,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${(0,el.bf)(e.lineWidth)} ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,el.bf)(o)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,el.bf)(e.borderRadiusLG)} ${(0,el.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,el.bf)(e.borderRadiusLG)} ${(0,el.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,el.bf)(o)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,el.bf)(e.borderRadiusLG)} 0 0 ${(0,el.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,el.bf)(e.borderRadiusLG)} ${(0,el.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},ev=e=>{let{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,ec.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,el.bf)(a)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},ec.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,el.bf)(e.paddingXXS)} ${(0,el.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},ep=e=>{let{componentCls:t,margin:n,colorBorderSecondary:a,horizontalMargin:o,verticalItemPadding:r,verticalItemMargin:i,calc:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,el.bf)(e.lineWidth)} ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:n,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:l(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,el.bf)(l(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,el.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:l(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,el.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},em=e=>{let{componentCls:t,cardPaddingSM:n,cardPaddingLG:a,horizontalItemPaddingSM:o,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,el.bf)(e.borderRadius)} ${(0,el.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,el.bf)(e.borderRadius)} ${(0,el.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,el.bf)(e.borderRadius)} ${(0,el.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,el.bf)(e.borderRadius)} 0 0 ${(0,el.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},eh=e=>{let{componentCls:t,itemActiveColor:n,itemHoverColor:a,iconCls:o,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:l,itemColor:c}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:c,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,ec.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s",[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${d}-active ${d}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${o}`]:{margin:0},[`${o}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:r}}}},eg=e=>{let{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:a,cardGutter:o,calc:r}=e,i=`${t}-rtl`;return{[i]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,el.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,el.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,el.bf)(r(e.marginXXS).mul(-1).equal())},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},e$=e=>{let{componentCls:t,tabsCardPadding:n,cardHeight:a,cardGutter:o,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ec.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,minHeight:a,marginLeft:{_skip_check_:!0,value:o},padding:`0 ${(0,el.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,el.bf)(e.lineWidth)} ${e.lineType} ${l}`,borderRadius:`${(0,el.bf)(e.borderRadiusLG)} ${(0,el.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,ec.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),eh(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var ek=(0,ed.I$)("Tabs",e=>{let t=(0,es.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,el.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,el.bf)(e.horizontalItemGutter)}`});return[em(t),eg(t),ep(t),ev(t),eb(t),e$(t),ef(t)]},e=>{let t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),ey=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)0>t.indexOf(a[o])&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};let ex=e=>{var t,n,l,d,s,u,f;let b;let{type:v,className:p,rootClassName:m,size:h,onEdit:g,hideAdd:$,centered:k,addIcon:y,moreIcon:x,popupClassName:_,children:w,items:S,animated:E,style:Z,indicatorSize:C,indicator:R}=e,T=ey(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","moreIcon","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:P}=T,{direction:I,tabs:L,getPrefixCls:N,getPopupContainer:M}=a.useContext(ee.E_),z=N("tabs",P),B=(0,et.Z)(z),[O,D,j]=ek(z,B);"editable-card"===v&&(b={onEdit:(e,t)=>{let{key:n,event:a}=t;null==g||g("add"===e?a:n,e)},removeIcon:a.createElement(o.Z,null),addIcon:(null!=y?y:null==L?void 0:L.addIcon)||a.createElement(i.Z,null),showAdd:!0!==$});let G=N(),W=(0,en.Z)(h),A=function(e,t){if(e)return e;let n=(0,er.Z)(t).map(e=>{if(a.isValidElement(e)){let{key:t,props:n}=e,a=n||{},{tab:o}=a,r=ei(a,["tab"]),i=Object.assign(Object.assign({key:String(t)},r),{label:o});return i}return null});return n.filter(e=>e)}(S,w),X=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{})).tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},eo),{motionName:(0,ea.m)(e,"switch")})),t}(z,E),H=Object.assign(Object.assign({},null==L?void 0:L.style),Z),q={align:null!==(t=null==R?void 0:R.align)&&void 0!==t?t:null===(n=null==L?void 0:L.indicator)||void 0===n?void 0:n.align,size:null!==(u=null!==(d=null!==(l=null==R?void 0:R.size)&&void 0!==l?l:C)&&void 0!==d?d:null===(s=null==L?void 0:L.indicator)||void 0===s?void 0:s.size)&&void 0!==u?u:null==L?void 0:L.indicatorSize};return O(a.createElement(U,Object.assign({direction:I,getPopupContainer:M,moreTransitionName:`${G}-slide-up`},T,{items:A,className:c()({[`${z}-${W}`]:W,[`${z}-card`]:["card","editable-card"].includes(v),[`${z}-editable-card`]:"editable-card"===v,[`${z}-centered`]:k},null==L?void 0:L.className,p,m,D,j,B),popupClassName:c()(_,D,j,B),style:H,editable:b,moreIcon:null!==(f=null!=x?x:null==L?void 0:L.moreIcon)&&void 0!==f?f:a.createElement(r.Z,null),prefixCls:z,animated:X,indicator:q})))};ex.TabPane=()=>null;var e_=ex}}]);