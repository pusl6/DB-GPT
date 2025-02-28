"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{21332:function(e,t,a){a.d(t,{_:function(){return I},a:function(){return D}});var l=a(85893),r=a(41468),n=a(64371),s=a(23430),i=a(32408),c=a(34041),d=a(71230),o=a(15746),u=a(42075),m=a(83062),h=a(14726),x=a(32983),p=a(96486),v=a(67294);let g=e=>{if(!e)return;let t=e.getContainer(),a=t.getElementsByTagName("canvas")[0];return a};var j=a(64352),f=a(8625);let y=e=>{let{charts:t,scopeOfCharts:a,ruleConfig:l}=e,r={};if(null==t||t.forEach(e=>{if(e.chartKnowledge.toSpec){let t=e.chartKnowledge.toSpec;e.chartKnowledge.toSpec=(e,a)=>({...t(e,a),dataProps:a})}else e.chartKnowledge.toSpec=(e,t)=>({dataProps:t});r[e.chartType]=e.chartKnowledge}),(null==a?void 0:a.exclude)&&a.exclude.forEach(e=>{Object.keys(r).includes(e)&&delete r[e]}),null==a?void 0:a.include){let e=a.include;Object.keys(r).forEach(t=>{e.includes(t)||delete r[t]})}let n={...a,custom:r},s={...l},i=new j.w({ckbCfg:n,ruleCfg:s});return i},b=e=>{var t;let{data:a,dataMetaMap:l,myChartAdvisor:r}=e,n=l?Object.keys(l).map(e=>({name:e,...l[e]})):null,s=new f.Z(a).info(),i=(0,p.size)(s)>2?null==s?void 0:s.filter(e=>"string"!==e.recommendation&&"date"!==e.recommendation||e.distinct&&e.distinct>1):s,c=null==r?void 0:r.adviseWithLog({data:a,dataProps:n,fields:null==i?void 0:i.map(e=>e.name)});return null!==(t=null==c?void 0:c.advices)&&void 0!==t?t:[]};function N(e,t){return t.every(t=>e.includes(t))}function _(e,t){let a=t.find(t=>t.name===e);return(null==a?void 0:a.recommendation)==="date"?t=>new Date(t[e]):e}function k(e){return e.find(e=>{var t;return e.levelOfMeasurements&&(t=e.levelOfMeasurements,["Time","Ordinal"].some(e=>t.includes(e)))})}function Z(e){return e.find(e=>e.levelOfMeasurements&&N(e.levelOfMeasurements,["Nominal"]))}let w=e=>{let{data:t,xField:a}=e,l=(0,p.uniq)(t.map(e=>e[a]));return l.length<=1},C=(e,t,a)=>{let{field4Split:l,field4X:r}=a;if((null==l?void 0:l.name)&&(null==r?void 0:r.name)){let a=e[l.name],n=t.filter(e=>l.name&&e[l.name]===a);return w({data:n,xField:r.name})?5:void 0}return(null==r?void 0:r.name)&&w({data:t,xField:r.name})?5:void 0},S=e=>{let{data:t,chartType:a,xField:l}=e,r=(0,p.cloneDeep)(t);try{if(a.includes("line")&&(null==l?void 0:l.name)&&"date"===l.recommendation)return r.sort((e,t)=>new Date(e[l.name]).getTime()-new Date(t[l.name]).getTime()),r;a.includes("line")&&(null==l?void 0:l.name)&&["float","integer"].includes(l.recommendation)&&r.sort((e,t)=>e[l.name]-t[l.name])}catch(e){console.error(e)}return r},O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.map(e=>{let a={};return Object.keys(e).forEach(l=>{a[l]=e[l]===t?null:e[l]}),a})},P="multi_line_chart",E="multi_measure_line_chart",T=[{chartType:"multi_line_chart",chartKnowledge:{id:P,name:"multi_line_chart",alias:["multi_line_chart"],family:["LineCharts"],def:"multi_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Trend"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:1,fieldConditions:["Time","Ordinal"]},{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:0,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{var a,l;let r=k(t),n=Z(t),s=null!==(a=null!=r?r:n)&&void 0!==a?a:t[0],i=t.filter(e=>e.name!==(null==s?void 0:s.name)),c=null!==(l=i.filter(e=>e.levelOfMeasurements&&N(e.levelOfMeasurements,["Interval"])))&&void 0!==l?l:[i[0]],d=i.filter(e=>!c.find(t=>t.name===e.name)).find(e=>e.levelOfMeasurements&&N(e.levelOfMeasurements,["Nominal"]));if(!s||!c)return null;let o={type:"view",autoFit:!0,data:S({data:e,chartType:P,xField:s}),children:[]};return c.forEach(a=>{let l={type:"line",encode:{x:_(s.name,t),y:a.name,size:t=>C(t,e,{field4Split:d,field4X:s})},legend:{size:!1}};d&&(l.encode.color=d.name),o.children.push(l)}),o}},chineseName:"折线图"},{chartType:"multi_measure_column_chart",chartKnowledge:{id:"multi_measure_column_chart",name:"multi_measure_column_chart",alias:["multi_measure_column_chart"],family:["ColumnCharts"],def:"multi_measure_column_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{let a=null==t?void 0:t.filter(e=>N(e.levelOfMeasurements,["Interval"])),l=Z(t),r=k(t),n=null!=l?l:r;if(!n||!a)return null;let s={type:"view",data:e,children:[]};return null==a||a.forEach(e=>{let t={type:"interval",encode:{x:n.name,y:e.name,color:()=>e.name,series:()=>e.name}};s.children.push(t)}),s}catch(e){return console.log(e),null}}},chineseName:"折线图"},{chartType:"multi_measure_line_chart",chartKnowledge:{id:E,name:"multi_measure_line_chart",alias:["multi_measure_line_chart"],family:["LineCharts"],def:"multi_measure_line_chart uses lines with segments to show changes in data in a ordinal dimension",purpose:["Comparison","Distribution"],coord:["Cartesian2D"],category:["Statistic"],shape:["Lines"],dataPres:[{minQty:1,maxQty:"*",fieldConditions:["Interval"]},{minQty:1,maxQty:1,fieldConditions:["Nominal"]}],channel:["Color","Direction","Position"],recRate:"Recommended",toSpec:(e,t)=>{try{var a,l;let r=null!==(l=null!==(a=Z(t))&&void 0!==a?a:k(t))&&void 0!==l?l:t[0],n=null==t?void 0:t.filter(e=>e.name!==(null==r?void 0:r.name)&&N(e.levelOfMeasurements,["Interval"]));if(!r||!n)return null;let s={type:"view",data:S({data:e,chartType:E,xField:r}),children:[]};return null==n||n.forEach(a=>{let l={type:"line",encode:{x:_(r.name,t),y:a.name,color:()=>a.name,series:()=>a.name,size:t=>C(t,e,{field4X:r})},legend:{size:!1}};s.children.push(l)}),s}catch(e){return console.log(e),null}}},chineseName:"折线图"}],D=e=>"response_line_chart"===e?["multi_line_chart","multi_measure_line_chart"]:"response_bar_chart"===e?["multi_measure_column_chart"]:"response_pie_chart"===e?["pie_chart"]:"response_scatter_chart"===e?["scatter_plot"]:"response_area_chart"===e?["area_chart"]:"response_heatmap_chart"===e?["heatmap"]:[],{Option:M}=c.default,I=e=>{let{data:t,chartType:a,scopeOfCharts:j,ruleConfig:f}=e,N=O(t),{mode:_}=(0,v.useContext)(r.p),[k,Z]=(0,v.useState)(),[w,C]=(0,v.useState)([]),[P,E]=(0,v.useState)(),D=(0,v.useRef)();(0,v.useEffect)(()=>{Z(y({charts:T,scopeOfCharts:{exclude:["area_chart","stacked_area_chart","percent_stacked_area_chart"]},ruleConfig:f}))},[f,j]);let I=e=>{if(!k)return[];let t=function(e){let{advices:t}=e;return t}({advices:e}),l=(0,p.uniq)((0,p.compact)((0,p.concat)(a,e.map(e=>e.type)))),r=l.map(e=>{let a=t.find(t=>t.type===e);if(a)return a;let l=k.dataAnalyzer.execute({data:N});if("data"in l){var r;let t=k.specGenerator.execute({data:l.data,dataProps:l.dataProps,chartTypeRecommendations:[{chartType:e,score:1}]});if("advices"in t)return null===(r=t.advices)||void 0===r?void 0:r[0]}}).filter(e=>null==e?void 0:e.spec);return r};(0,v.useEffect)(()=>{if(N&&k){var e;let t=b({data:N,myChartAdvisor:k}),a=I(t);C(a),E(null===(e=a[0])||void 0===e?void 0:e.type)}},[JSON.stringify(N),k,a]);let R=(0,v.useMemo)(()=>{if((null==w?void 0:w.length)>0){var e,t,a,r;let n=null!=P?P:w[0].type,s=null!==(t=null===(e=null==w?void 0:w.find(e=>e.type===n))||void 0===e?void 0:e.spec)&&void 0!==t?t:void 0;if(s){if(s.data&&["line_chart","step_line_chart"].includes(n)){let e=null==k?void 0:k.dataAnalyzer.execute({data:N});e&&"dataProps"in e&&(s.data=S({data:s.data,xField:null===(r=e.dataProps)||void 0===r?void 0:r.find(e=>"date"===e.recommendation),chartType:n}))}return"pie_chart"===n&&(null==s?void 0:null===(a=s.encode)||void 0===a?void 0:a.color)&&(s.tooltip={title:{field:s.encode.color}}),(0,l.jsx)(i.k,{options:{...s,autoFit:!0,theme:_,height:300},ref:D},n)}}},[w,_,P]);return P?(0,l.jsxs)("div",{children:[(0,l.jsxs)(d.Z,{justify:"space-between",className:"mb-2",children:[(0,l.jsx)(o.Z,{children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)("span",{children:n.Z.t("Advices")}),(0,l.jsx)(c.default,{className:"w-52",value:P,placeholder:"Chart Switcher",onChange:e=>E(e),size:"small",children:null==w?void 0:w.map(e=>{let t=n.Z.t(e.type);return(0,l.jsx)(M,{value:e.type,children:(0,l.jsx)(m.Z,{title:t,placement:"right",children:(0,l.jsx)("div",{children:t})})},e.type)})})]})}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(m.Z,{title:n.Z.t("Download"),children:(0,l.jsx)(h.ZP,{onClick:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Chart",a=document.createElement("a"),l="".concat(t,".png");setTimeout(()=>{let t=function(e){let t=g(e);if(t){let e=t.toDataURL("image/png");return e}}(e);if(t){a.addEventListener("click",()=>{a.download=l,a.href=t});let e=document.createEvent("MouseEvents");e.initEvent("click",!1,!1),a.dispatchEvent(e)}},16)})(D.current,n.Z.t(P)),icon:(0,l.jsx)(s.Z,{}),type:"text"})})})]}),(0,l.jsx)("div",{className:"flex",children:R})]}):(0,l.jsx)(x.Z,{image:x.Z.PRESENTED_IMAGE_SIMPLE,description:"暂无合适的可视化视图"})}},39156:function(e,t,a){a.d(t,{_z:function(){return p._},ZP:function(){return v},aG:function(){return p.a}});var l=a(85893),r=a(41118),n=a(30208),s=a(40911),i=a(67294),c=a(41468),d=a(32408);function o(e){let{chart:t}=e,{mode:a}=(0,i.useContext)(c.p);return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,l.jsx)("div",{className:"h-[300px]",children:(0,l.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:a,type:"interval",data:t.values,encode:{x:"name",y:"value",color:"type"},axis:{x:{labelAutoRotate:!1}}}})})]})})}function u(e){let{chart:t}=e,{mode:a}=(0,i.useContext)(c.p);return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:t.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:t.chart_desc}),(0,l.jsx)("div",{className:"h-[300px]",children:(0,l.jsx)(d.k,{style:{height:"100%"},options:{autoFit:!0,theme:a,type:"view",data:t.values,children:[{type:"line",encode:{x:"name",y:"value",color:"type",shape:"smooth"}},{type:"area",encode:{x:"name",y:"value",color:"type",shape:"smooth"},legend:!1,style:{fillOpacity:.15}}],axis:{x:{labelAutoRotate:!1}}}})})]})})}var m=a(61685),h=a(96486);function x(e){var t,a;let{chart:r}=e,n=(0,h.groupBy)(r.values,"type");return(0,l.jsx)("div",{className:"flex-1 min-w-0 p-4 bg-white dark:bg-theme-dark-container rounded",children:(0,l.jsxs)("div",{className:"h-full",children:[(0,l.jsx)("div",{className:"mb-2",children:r.chart_name}),(0,l.jsx)("div",{className:"opacity-80 text-sm mb-2",children:r.chart_desc}),(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsxs)(m.Z,{"aria-label":"basic table",stripe:"odd",hoverRow:!0,borderAxis:"bothBetween",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:Object.keys(n).map(e=>(0,l.jsx)("th",{children:e},e))})}),(0,l.jsx)("tbody",{children:null===(t=Object.values(n))||void 0===t?void 0:null===(a=t[0])||void 0===a?void 0:a.map((e,t)=>{var a;return(0,l.jsx)("tr",{children:null===(a=Object.keys(n))||void 0===a?void 0:a.map(e=>{var a;return(0,l.jsx)("td",{children:(null==n?void 0:null===(a=n[e])||void 0===a?void 0:a[t].value)||""},e)})},t)})})]})})]})})}var p=a(21332),v=function(e){let{chartsData:t}=e,a=(0,i.useMemo)(()=>{if(t){let e=[],a=null==t?void 0:t.filter(e=>"IndicatorValue"===e.chart_type);a.length>0&&e.push({charts:a,type:"IndicatorValue"});let l=null==t?void 0:t.filter(e=>"IndicatorValue"!==e.chart_type),r=l.length,n=0;return[[0],[1],[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]][r].forEach(t=>{if(t>0){let a=l.slice(n,n+t);n+=t,e.push({charts:a})}}),e}},[t]);return(0,l.jsx)("div",{className:"flex flex-col gap-3",children:null==a?void 0:a.map((e,t)=>(0,l.jsx)("div",{className:"".concat((null==e?void 0:e.type)!=="IndicatorValue"?"flex gap-3":""),children:e.charts.map(e=>"IndicatorValue"===e.chart_type||"IndicatorValue"===e.type?(0,l.jsx)("div",{className:"flex flex-row gap-3",children:e.values.map(e=>(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(r.Z,{sx:{background:"transparent"},children:(0,l.jsxs)(n.Z,{className:"justify-around",children:[(0,l.jsx)(s.ZP,{gutterBottom:!0,component:"div",children:e.name}),(0,l.jsx)(s.ZP,{children:e.value})]})})},e.name))},e.chart_uid):"LineChart"===e.chart_type||"LineChart"===e.type?(0,l.jsx)(u,{chart:e},e.chart_uid):"BarChart"===e.chart_type||"BarChart"===e.type?(0,l.jsx)(o,{chart:e},e.chart_uid):"Table"===e.chart_type||"TableChartData"===e.type?(0,l.jsx)(x,{chart:e},e.chart_uid):void 0)},"chart_row_".concat(t)))})}},13185:function(e,t,a){a.d(t,{Z:function(){return eC}});var l=a(85893),r=a(39156),n=a(62418),s=a(29158),i=a(98165),c=a(14079),d=a(87155),o=a(32975),u=a(57020),m=a(66309),h=a(39773),x=a(92398),p=a(14660),v=a(55186),g=a(18102),j=a(45030),f=a(96074),y=a(85265),b=a(11163),N=a(67294);let _=e=>{let{references:t}=e,a=(0,b.useRouter)(),[r,n]=(0,N.useState)(!1),i=(0,N.useMemo)(()=>a.pathname.includes("/mobile"),[a]),c=(0,N.useMemo)(()=>{var e;return null==t?void 0:null===(e=t.knowledge)||void 0===e?void 0:e.map(e=>{var t;return{label:(0,l.jsx)("div",{style:{maxWidth:"120px"},children:(0,l.jsx)(j.Z.Text,{ellipsis:{tooltip:e.name},children:decodeURIComponent(e.name).split("_")[0]})}),key:e.name,children:(0,l.jsx)("div",{className:"h-full overflow-y-auto",children:null==e?void 0:null===(t=e.chunks)||void 0===t?void 0:t.map(e=>(0,l.jsx)(g.default,{children:e.content},e.id))})}})},[t]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(f.Z,{className:"mb-1 mt-0",dashed:!0}),(0,l.jsxs)("div",{className:"flex text-sm gap-2 text-blue-400",onClick:()=>n(!0),children:[(0,l.jsx)(s.Z,{}),(0,l.jsx)("span",{className:"text-sm",children:"查看回复引用"})]}),(0,l.jsx)(y.Z,{open:r,title:"回复引用",placement:i?"bottom":"right",onClose:()=>n(!1),destroyOnClose:!0,className:"p-0",...!i&&{width:"30%"},children:(0,l.jsx)(x.Z,{items:c,size:"small"})})]})};var k=e=>{let{references:t}=e;try{let e=JSON.parse(t);return(0,l.jsx)(_,{references:e})}catch(e){return null}},Z=a(48218),w=a(24019),C=a(18429),S=a(8751),O=a(50888),P=a(74330),E=e=>{let{data:t}=e,a=(0,N.useMemo)(()=>{switch(t.status){case"todo":return(0,l.jsx)(w.Z,{});case"failed":return(0,l.jsx)(C.Z,{className:"text-[rgb(255,77,79)]"});case"complete":return(0,l.jsx)(S.Z,{className:"text-[rgb(82,196,26)]"});case"running":return(0,l.jsx)(P.Z,{indicator:(0,l.jsx)(O.Z,{style:{fontSize:24},spin:!0})});default:return null}},[t]);return t?(0,l.jsxs)("div",{className:"flex flex-col p-2 border pr-4 rounded-md min-w-fit w-2/5",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(Z.Z,{scene:"chat_agent",width:8,height:8}),(0,l.jsxs)("div",{className:"flex flex-col flex-1 ml-2",children:[(0,l.jsx)("div",{className:"flex items-center text-sm dark:text-[rgba(255,255,255,0.85)] gap-2",children:null==t?void 0:t.app_name}),(0,l.jsx)(j.Z.Text,{className:"text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)] leading-6",ellipsis:{tooltip:!0},children:null==t?void 0:t.app_desc})]})]}),(0,l.jsx)("div",{className:"text-2xl ml-1",children:a})]}),"failed"===t.status&&t.msg&&(0,l.jsx)(j.Z.Text,{type:"danger",className:"pl-12 text-xs mt-2",children:t.msg})]}):null},T=a(57249),D=a(73913),M=a(14726),I=e=>{let{children:t,msg:a}=e,{handleChat:r}=(0,N.useContext)(T.ChatContentContext),{handleChat:n}=(0,N.useContext)(D.MobileChatContext);return(0,l.jsx)(M.ZP,{className:"ml-1 inline text-xs",onClick:()=>{null==n||n(a),null==r||r(a)},type:"dashed",size:"small",children:t||"点击分析当前异常"})},R=a(41468),q=a(12576),z=a(63086),Q=a(54143),J=a(40056),L=a(93967),A=a.n(L),K=e=>{let{data:t}=e,{mode:a}=(0,N.useContext)(R.p),r=(0,N.useMemo)(()=>{switch(t.status){case"complete":return"success";case"failed":return"error";case"running":return"warning";default:return}},[t]);if(!t)return null;let n="dark"===a?z.R:Q.K;return(0,l.jsxs)("div",{className:"flex flex-1 flex-col",children:[(0,l.jsx)(J.Z,{className:A()("mb-4",{"bg-[#fafafa] border-[transparent]":!r}),message:t.name,type:r,...r&&{showIcon:!0},..."warning"===r&&{icon:(0,l.jsx)(P.Z,{indicator:(0,l.jsx)(O.Z,{spin:!0})})}}),t.result&&(0,l.jsx)(q.ZP,{style:{...n,width:"100%",padding:10},className:A()({"bg-[#fafafa]":"light"===a}),value:JSON.parse(t.result||"{}"),enableClipboard:!1,displayDataTypes:!1,objectSortKeys:!1}),t.err_msg&&(0,l.jsx)(o.Z,{components:eC,remarkPlugins:[v.Z],rehypePlugins:[p.Z],children:t.err_msg})]})},F=a(39718),B=a(32198),G=function(e){let{data:t}=e;return t&&t.length?(0,l.jsx)(l.Fragment,{children:t.map((e,t)=>(0,l.jsxs)("div",{className:"rounded",children:[(0,l.jsxs)("div",{className:"flex items-center mb-3 text-sm",children:[e.model?(0,l.jsx)(F.Z,{model:e.model}):(0,l.jsx)("div",{className:"rounded-full w-6 h-6 bg-gray-100"}),(0,l.jsxs)("div",{className:"ml-2 opacity-70",children:[e.sender,(0,l.jsx)(B.Z,{className:"mx-2 text-base"}),e.receiver]})]}),(0,l.jsx)("div",{className:"whitespace-normal text-sm mb-3",children:(0,l.jsx)(o.Z,{components:eC,remarkPlugins:[v.Z],rehypePlugins:[p.Z],children:e.markdown})}),e.resource&&"null"!==e.resource&&(0,l.jsx)(k,{references:e.resource})]},t))}):null},V=a(14313),U=a(63606),W=a(47221),$=function(e){let{data:t}=e;return t&&t.length?(0,l.jsx)(W.Z,{bordered:!0,className:"my-3",expandIcon:e=>{let{isActive:t}=e;return(0,l.jsx)(V.Z,{rotate:t?90:0})},items:t.map((e,t)=>({key:t,label:(0,l.jsxs)("div",{children:[(0,l.jsxs)("span",{children:[e.name," - ",e.agent]}),"complete"===e.status?(0,l.jsx)(U.Z,{className:"!text-green-500 ml-2"}):(0,l.jsx)(w.Z,{className:"!text-gray-500 ml-2"})]}),children:(0,l.jsx)(o.Z,{components:eC,rehypePlugins:[p.Z],remarkPlugins:[v.Z],children:e.markdown})}))}):null},H=a(57132),X=a(45360),Y=a(20640),ee=a.n(Y),et=a(84502),ea=a(94969),el=a(12187);function er(e){let{code:t,light:a,dark:r,language:n,customStyle:s}=e,{mode:i}=(0,N.useContext)(R.p);return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(M.ZP,{className:"absolute right-3 top-2 text-gray-300 hover:!text-gray-200 bg-gray-700",type:"text",icon:(0,l.jsx)(H.Z,{}),onClick:()=>{let e=ee()(t);X.ZP[e?"success":"error"](e?"复制成功":"复制失败")}}),(0,l.jsx)(et.Z,{customStyle:s,language:n,style:"dark"===i?null!=r?r:ea.Z:null!=a?a:el.Z,children:t})]})}var en=a(21332),es=function(e){var t;let{data:a,type:r,sql:s}=e,i=(null==a?void 0:a[0])?null===(t=Object.keys(null==a?void 0:a[0]))||void 0===t?void 0:t.map(e=>({title:e,dataIndex:e,key:e})):[],c={key:"chart",label:"Chart",children:(0,l.jsx)(en._,{data:a,chartType:(0,en.a)(r)})},d={key:"sql",label:"SQL",children:(0,l.jsx)(er,{language:"sql",code:(0,n._m)(null!=s?s:"","mysql")})},o={key:"data",label:"Data",children:(0,l.jsx)(h.Z,{dataSource:a,columns:i,scroll:{x:"auto"}})},u="response_table"===r?[o,d]:[c,d,o];return(0,l.jsx)(x.Z,{defaultActiveKey:"response_table"===r?"data":"chart",items:u,size:"small"})},ei=function(e){let{data:t}=e;return t?(0,l.jsx)(es,{data:null==t?void 0:t.data,type:null==t?void 0:t.type,sql:null==t?void 0:t.sql}):null},ec=a(47727),ed=a(15273),eo=a(67421),eu=a(89144),em=function(e){let{data:t}=e,{t:a}=(0,eo.$G)(),[r,n]=(0,N.useState)(0);return(0,l.jsxs)("div",{className:"bg-[#EAEAEB] rounded overflow-hidden border border-theme-primary dark:bg-theme-dark text-sm",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex",children:t.code.map((e,t)=>(0,l.jsxs)("div",{className:A()("px-4 py-2 text-[#121417] dark:text-white cursor-pointer",{"bg-white dark:bg-theme-dark-container":t===r}),onClick:()=>{n(t)},children:["CODE ",t+1,": ",e[0]]},t))}),t.code.length&&(0,l.jsx)(er,{language:t.code[r][0],code:t.code[r][1],customStyle:{maxHeight:300,margin:0},light:eu.Z,dark:el.Z})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)("div",{className:"bg-white dark:bg-theme-dark-container px-4 py-2 text-[#121417] dark:text-white",children:[a("Terminal")," ",t.exit_success?(0,l.jsx)(ec.Z,{className:"text-green-600"}):(0,l.jsx)(ed.Z,{className:"text-red-600"})]})}),(0,l.jsx)("div",{className:"p-4 max-h-72 overflow-y-auto whitespace-normal bg-white dark:dark:bg-theme-dark",children:(0,l.jsx)(o.Z,{components:eC,remarkPlugins:[v.Z],children:t.log})})]})]})},eh=function(e){let{data:t}=e;return(0,l.jsxs)("div",{className:"rounded overflow-hidden",children:[(0,l.jsx)("div",{className:"p-3 text-white bg-red-500 whitespace-normal",children:t.display_type}),(0,l.jsxs)("div",{className:"p-3 bg-red-50",children:[(0,l.jsx)("div",{className:"mb-2 whitespace-normal",children:t.thought}),(0,l.jsx)(er,{code:(0,n._m)(t.sql),language:"sql"})]})]})};let ex=[[2],[1,2],[1,3],[2,1,2],[2,1,3],[3,1,3],[3,2,3]];var ep=function(e){let{data:t}=e,a=(0,N.useMemo)(()=>{if(t.chart_count>1){let e=ex[t.chart_count-2],a=0;return e.map(e=>{let l=t.data.slice(a,a+e);return a=e,l})}return[t.data]},[t.data,t.chart_count]);return(0,l.jsx)("div",{className:"flex flex-col gap-3",children:a.map((e,t)=>(0,l.jsx)("div",{className:"flex gap-3",children:e.map((e,t)=>(0,l.jsxs)("div",{className:"flex flex-1 flex-col justify-between p-4 rounded border border-gray-200 dark:border-gray-500 whitespace-normal",children:[(0,l.jsxs)("div",{children:[e.title&&(0,l.jsx)("div",{className:"mb-2 text-lg",children:e.title}),e.describe&&(0,l.jsx)("div",{className:"mb-4 text-sm text-gray-500",children:e.describe})]}),(0,l.jsx)(r._z,{data:e.data,chartType:(0,r.aG)(e.type)})]},"chart-".concat(t)))},"row-".concat(t)))})},ev=a(97937);let eg={todo:{bgClass:"bg-gray-500",icon:(0,l.jsx)(w.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,l.jsx)(O.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,l.jsx)(ev.Z,{className:"ml-2"})},complete:{bgClass:"bg-green-500",icon:(0,l.jsx)(U.Z,{className:"ml-2"})}};var ej=function(e){var t,a;let{data:r}=e,{bgClass:n,icon:s}=null!==(t=eg[r.status])&&void 0!==t?t:{};return(0,l.jsxs)("div",{className:"bg-theme-light dark:bg-theme-dark-container rounded overflow-hidden my-2 flex flex-col",children:[(0,l.jsxs)("div",{className:A()("flex px-4 md:px-6 py-2 items-center text-white text-sm",n),children:[r.name,s]}),r.result?(0,l.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm whitespace-normal",children:(0,l.jsx)(o.Z,{components:eC,rehypePlugins:[p.Z],remarkPlugins:[v.Z],children:null!==(a=r.result)&&void 0!==a?a:""})}):(0,l.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:r.err_msg})]})},ef=a(80882),ey=a(18073);function eb(e){let{content:t}=e,{t:a}=(0,eo.$G)(),[r,n]=N.useState(!0);return(0,l.jsxs)("div",{className:"my-4 border rounded-lg overflow-hidden dark:border-gray-600",children:[(0,l.jsx)("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 cursor-pointer",onClick:()=>n(!r),children:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"mr-2 font-medium text-gray-700 dark:text-gray-300",children:r?(0,l.jsx)(ef.Z,{}):(0,l.jsx)(ey.Z,{})}),(0,l.jsx)("span",{className:"text-gray-700 dark:text-gray-300",children:a("cot_title")})]})}),r&&(0,l.jsx)("div",{className:"p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700",children:(0,l.jsx)("div",{className:"py-2 px-4 border-l-4 border-blue-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300",children:t||""})})]})}let eN=["custom-view","chart-view","references","summary"],e_={code:(0,d.r)({languageRenderers:{"agent-plans":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)($,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"agent-messages":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(G,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-convert-error":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(eh,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-dashboard":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(ep,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-db-chart":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(ei,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-plugin":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(ej,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-code":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(em,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-app-link":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(E,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-api-response":e=>{let{className:t,children:a}=e,r=String(a),n=(null==t?void 0:t.replace("language-",""))||"javascript";try{let e=JSON.parse(r);return(0,l.jsx)(K,{data:e})}catch(e){return(0,l.jsx)(er,{language:n,code:r})}},"vis-thinking":e=>{let{className:t,children:a}=e,r=String(a);return null==t||t.replace("language-",""),(0,l.jsx)(eb,{content:r})}},defaultRenderer(e){let{node:t,className:a,children:r,style:n,...s}=e,i=String(r),c=(null==a?void 0:a.replace("language-",""))||"",{context:d,matchValues:u}=function(e){let t=eN.reduce((t,a)=>{let l=RegExp("<".concat(a,"[^>]*/?>"),"gi");return e=e.replace(l,e=>(t.push(e),"")),t},[]);return{context:e,matchValues:t}}(i);return(0,l.jsxs)(l.Fragment,{children:[c?(0,l.jsx)(er,{code:d,language:c||"javascript"}):(0,l.jsx)("code",{...s,style:n,className:"p-1 mx-1 rounded bg-theme-light dark:bg-theme-dark text-sm",children:r}),(0,l.jsx)(o.Z,{components:ew,rehypePlugins:[p.Z],remarkPlugins:[v.Z],children:u.join("\n")})]})}})},ek={...e_,ul(e){let{children:t}=e;return(0,l.jsx)("ul",{className:"py-1",children:t})},ol(e){let{children:t}=e;return(0,l.jsx)("ol",{className:"py-1",children:t})},li(e){let{children:t,ordered:a}=e;return(0,l.jsx)("li",{className:"text-sm leading-7 ml-5 pl-2 text-gray-600 dark:text-gray-300 ".concat(a?"list-decimal":"list-disc"),children:t})},table(e){let{children:t}=e;return(0,l.jsx)("table",{className:"my-2 rounded-tl-md rounded-tr-md  bg-white dark:bg-gray-800 text-sm rounded-lg overflow-hidden",children:t})},thead(e){let{children:t}=e;return(0,l.jsx)("thead",{className:"bg-[#fafafa] dark:bg-black font-semibold",children:t})},th(e){let{children:t}=e;return(0,l.jsx)("th",{className:"!text-left p-4",children:t})},td(e){let{children:t}=e;return(0,l.jsx)("td",{className:"p-4 border-t border-[#f0f0f0] dark:border-gray-700",children:t})},h1(e){let{children:t}=e;return(0,l.jsx)("h3",{className:"text-2xl font-bold my-4 border-b border-slate-300 pb-4",children:t})},h2(e){let{children:t}=e;return(0,l.jsx)("h3",{className:"text-xl font-bold my-3",children:t})},h3(e){let{children:t}=e;return(0,l.jsx)("h3",{className:"text-lg font-semibold my-2",children:t})},h4(e){let{children:t}=e;return(0,l.jsx)("h3",{className:"text-base font-semibold my-1",children:t})},a(e){let{children:t,href:a}=e;return(0,l.jsxs)("div",{className:"inline-block text-blue-600 dark:text-blue-400",children:[(0,l.jsx)(s.Z,{className:"mr-1"}),(0,l.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:t})]})},img(e){let{src:t,alt:a}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(u.Z,{className:"min-h-[1rem] max-w-full max-h-full border rounded",src:t,alt:a,placeholder:(0,l.jsx)(m.Z,{icon:(0,l.jsx)(i.Z,{spin:!0}),color:"processing",children:"Image Loading..."}),fallback:"/pictures/fallback.png"})})},blockquote(e){let{children:t}=e;return(0,l.jsx)("blockquote",{className:"py-4 px-6 border-l-4 border-blue-600 rounded bg-white my-2 text-gray-500 dark:bg-slate-800 dark:text-gray-200 dark:border-white shadow-sm",children:t})},button(e){let{children:t,className:a,...r}=e;if("chat-link"===a){let e=null==r?void 0:r["data-msg"];return(0,l.jsx)(I,{msg:e,children:t})}return(0,l.jsx)("button",{className:a,...r,children:t})}},eZ=e=>{let t={"，":",","。":".","？":"?","！":"!","：":":","；":";","“":'"',"”":'"',"‘":"'","’":"'","（":"(","）":")","【":"[","】":"]","《":"<","》":">","—":"-","、":",","…":"..."},a=RegExp(Object.keys(t).join("|"),"g");return e.replace(a,e=>t[e])},ew={...ek,"chart-view":function(e){var t,a,s;let i,{content:c,children:d}=e;try{i=JSON.parse(c)}catch(e){console.log(e,c),i={type:"response_table",sql:"",data:[]}}let o=(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t[0])?null===(a=Object.keys(null==i?void 0:null===(s=i.data)||void 0===s?void 0:s[0]))||void 0===a?void 0:a.map(e=>({title:e,dataIndex:e,key:e})):[],u={key:"chart",label:"Chart",children:(0,l.jsx)(r._z,{data:null==i?void 0:i.data,chartType:(0,r.aG)(null==i?void 0:i.type)})},m={key:"sql",label:"SQL",children:(0,l.jsx)(er,{code:(0,n._m)(eZ(null==i?void 0:i.sql),"mysql"),language:"sql"})},p={key:"data",label:"Data",children:(0,l.jsx)(h.Z,{dataSource:null==i?void 0:i.data,columns:o,scroll:{x:!0},virtual:!0})},v=(null==i?void 0:i.type)==="response_table"?[p,m]:[u,m,p];return(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Z,{defaultActiveKey:(null==i?void 0:i.type)==="response_table"?"data":"chart",items:v,size:"small"}),d]})},references:function(e){let{children:t}=e;if(t)try{let e=JSON.parse(t),a=e.references;return(0,l.jsx)(k,{references:a})}catch(e){return null}},summary:function(e){let{children:t}=e;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"mb-2",children:[(0,l.jsx)(c.Z,{className:"mr-2"}),(0,l.jsx)("span",{className:"font-semibold",children:"Document Summary"})]}),(0,l.jsx)("div",{children:t})]})}};var eC=ew},18102:function(e,t,a){a.r(t);var l=a(85893),r=a(13185),n=a(32975);a(67294);var s=a(14660),i=a(55186);t.default=e=>{let{children:t}=e;return(0,l.jsx)(n.Z,{components:{...r.Z},rehypePlugins:[s.Z],remarkPlugins:[i.Z],children:t})}}}]);