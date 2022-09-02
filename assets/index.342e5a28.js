import{r as m,I as V,_ as B,j as t,R as E,aT as N,aU as s,c as _,e as C}from"./index.1a960ee0.js";import{u as g,E as x}from"./useDynamicChart.430ae34c.js";import{E as n,B as y,L as S,T as P}from"./index.c55c9a0b.js";import{g as I,O as U}from"./chart.5f16fb0e.js";import{C as b}from"./index.07dd367d.js";import{R as D}from"./index.7602be44.js";import{T as j}from"./index.2218c24b.js";import"./index.eb754cca.js";import"./DateRangePicker.11073dfe.js";import"./index.a9201b5f.js";import"./index.913e0f83.js";import"./calendar.db10e445.js";import"./dep-33f486c3.ccc67e6e.js";import"./index.e892ea5a.js";function w(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),o.push.apply(o,l)}return o}function F(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?w(Object(o),!0).forEach(function(l){B(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}var K={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.5 1c-.48 0-1 .34-1 .92v12.16c0 .58.52.92 1 .92h9c.48 0 1-.34 1-.92V5.7a1 1 0 00-.3-.71L9.5 1.3a1 1 0 00-.7-.3H3.5zm5 1v4.01h4V14h-9V2h5zm1 .7l2.3 2.31H9.5v-2.3z",fillOpacity:.9}}]},L=m.exports.forwardRef(function(e,r){return m.exports.createElement(V,F(F({},e),{},{id:"file",ref:r,icon:K}))});L.displayName="FileIcon";function T(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),o.push.apply(o,l)}return o}function A(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?T(Object(o),!0).forEach(function(l){B(e,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):T(Object(o)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))})}return e}var W={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 1c.53 0 1.02.12 1.46.35l-.63.8a2.24 2.24 0 00-3.08 2.1c0 1.23.98 2.22 2.2 2.25v1A3.25 3.25 0 016 1zM.54 9.44c1.65-.78 3.48-1.21 5.41-1.22v1c-1.77 0-3.44.4-4.95 1.1V12h1.86v1H.5a.5.5 0 01-.5-.5v-2.2c0-.36.2-.7.54-.86z"}},{tag:"path",attrs:{fill:"currentColor",d:"M10 8.31a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm0-1a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM16 11.52c0-.37-.2-.72-.54-.87a12.83 12.83 0 00-10.92 0 .96.96 0 00-.54.87V14c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-2.48zm-1 .01v1.97H5v-1.97a11.83 11.83 0 0110 0z"}}]},z=m.exports.forwardRef(function(e,r){return m.exports.createElement(V,A(A({},e),{},{id:"usergroup",ref:r,icon:W}))});z.displayName="UsergroupIcon";const k=(e=[])=>{const[r,o,l]=I(e);return{tooltip:{trigger:"item"},grid:{left:"0",right:"20px",top:"5px",bottom:"36px",containLabel:!0},legend:{left:"center",bottom:"0",orient:"horizontal",data:["\u672C\u6708","\u4E0A\u6708"],textStyle:{fontSize:12}},xAxis:{type:"category",data:r,boundaryGap:!1,axisLine:{lineStyle:{color:"#E3E6EB",width:1}}},yAxis:{type:"value"},series:[{name:"\u672C\u6708",data:l,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{borderWidth:1},areaStyle:{color:"#0053D92F"}},{name:"\u4E0A\u6708",data:o,type:"line",smooth:!1,showSymbol:!0,symbol:"circle",symbolSize:8,itemStyle:{borderWidth:1}}]}},$=(e=42)=>({tooltip:{trigger:"item"},grid:{top:"0",right:"0"},legend:{itemWidth:12,itemHeight:4,textStyle:{fontSize:12},left:"center",bottom:"0",orient:"horizontal"},series:[{name:"\u9500\u552E\u6E20\u9053",type:"pie",radius:["48%","60%"],avoidLabelOverlap:!1,silent:!0,itemStyle:{borderWidth:1},label:{show:!0,position:"center",formatter:["{value|{d}%}","{name|{b}\u6E20\u9053\u5360\u6BD4}"].join(`
`),rich:{value:{fontSize:28,fontWeight:"normal",lineHeight:46},name:{color:"#909399",fontSize:12,lineHeight:14}}},labelLine:{show:!1},data:[{value:1048,name:"\u7EBF\u4E0A"},{value:e*7,name:"\u95E8\u5E97"}]}]}),R=(e=[])=>{const[r,o,l]=I(e);return{tooltip:{trigger:"item"},xAxis:{type:"category",data:r,axisLine:{lineStyle:{width:1}}},yAxis:{type:"value"},grid:{top:"5%",left:"25px",right:0,bottom:"60px"},legend:{icon:"rect",itemWidth:12,itemHeight:4,itemGap:48,textStyle:{fontSize:12,color:"rgba(0, 0, 0, 0.6)"},left:"center",bottom:"0",orient:"horizontal",data:["\u672C\u6708","\u4E0A\u6708"]},series:[{name:"\u672C\u6708",data:l,type:"bar"},{name:"\u4E0A\u6708",data:o,type:"bar"}]}},H={xAxis:{type:"category",show:!1,data:U},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0,tooltip:{show:!1}},color:["#fff"],series:[{data:[150,230,224,218,135,147,260],type:"line",showSymbol:!1}]},G={xAxis:{type:"category",show:!1,data:U},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0,tooltip:{show:!1}},series:[{data:[100,130,184,218,{value:135,itemStyle:{opacity:.2}},{value:118,itemStyle:{opacity:.2}},{value:60,itemStyle:{opacity:.2}}],type:"bar",barWidth:9}]},X="_iconWrap_4z8yj_1",q="_svgIcon_4z8yj_13",J="_paneLineChart_4z8yj_17",Q="_paneBarChart_4z8yj_25";var p={iconWrap:X,svgIcon:q,paneLineChart:J,paneBarChart:Q},i="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Base/components/TopPanel.tsx";const Y=m.exports.memo(()=>{const e=g(G);return t.exports.jsxDEV("div",{className:p.paneBarChart,children:t.exports.jsxDEV(x,{option:e,notMerge:!0,lazyUpdate:!0,style:{height:36}},void 0,!1,{fileName:i,lineNumber:14,columnNumber:7},globalThis)},void 0,!1,{fileName:i,lineNumber:13,columnNumber:5},globalThis)}),Z=m.exports.memo(()=>t.exports.jsxDEV("div",{className:p.paneLineChart,children:t.exports.jsxDEV(x,{option:H,notMerge:!0,lazyUpdate:!0,style:{height:56}},void 0,!1,{fileName:i,lineNumber:26,columnNumber:5},globalThis)},void 0,!1,{fileName:i,lineNumber:25,columnNumber:3},globalThis)),ee=[{title:"\u603B\u6536\u5165",count:"\xA5 28,425.00",trend:n.up,trendNum:"20.5%",Icon:t.exports.jsxDEV(Z,{},void 0,!1,{fileName:i,lineNumber:41,columnNumber:11},globalThis)},{title:"\u603B\u9000\u6B3E",count:"\xA5 768.00",trend:n.down,trendNum:"20.5%",Icon:t.exports.jsxDEV(Y,{},void 0,!1,{fileName:i,lineNumber:48,columnNumber:11},globalThis)},{title:"\u6D3B\u8DC3\u7528\u6237\uFF08\u4E2A\uFF09",count:"1126",trend:n.down,trendNum:"20.5%",Icon:t.exports.jsxDEV("div",{className:p.iconWrap,children:t.exports.jsxDEV(z,{className:p.svgIcon},void 0,!1,{fileName:i,lineNumber:57,columnNumber:9},globalThis)},void 0,!1,{fileName:i,lineNumber:56,columnNumber:7},globalThis)},{title:"\u4EA7\u751F\u8BA2\u5355\uFF08\u4E2A\uFF09",count:"527",trend:n.down,trendNum:"20.5%",Icon:t.exports.jsxDEV("div",{className:p.iconWrap,children:t.exports.jsxDEV(L,{className:p.svgIcon},void 0,!1,{fileName:i,lineNumber:68,columnNumber:9},globalThis)},void 0,!1,{fileName:i,lineNumber:67,columnNumber:7},globalThis)}],te=()=>t.exports.jsxDEV(N,{gutter:[16,16],children:ee.map((e,r)=>t.exports.jsxDEV(s,{xs:6,xl:3,children:t.exports.jsxDEV(y,{title:e.title,trend:e.trend,trendNum:e.trendNum,count:e.count,desc:"\u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765",Icon:e.Icon,dark:r===0},void 0,!1,{fileName:i,lineNumber:78,columnNumber:9},globalThis)},e.title,!1,{fileName:i,lineNumber:77,columnNumber:7},globalThis))},void 0,!1,{fileName:i,lineNumber:75,columnNumber:3},globalThis);var re=E.memo(te);const oe="_middleChartPanel_1ui44_1";var le={middleChartPanel:oe},d="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Base/components/MiddleChart.tsx";const ae=k(),ue=$(),ie=()=>{const[e,r]=m.exports.useState(ae),o=v=>{const M=k(v);r(M)},l=g(e,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"],borderColor:["series.0.itemStyle.borderColor","series.1.itemStyle.borderColor"]}),c=g(ue,{placeholderColor:["legend.textStyle.color"],containerColor:["series.0.itemStyle.borderColor"],textColor:["label.color","label.color"]});return t.exports.jsxDEV(N,{gutter:[16,16],className:le.middleChartPanel,children:[t.exports.jsxDEV(s,{xs:12,xl:9,children:t.exports.jsxDEV(b,{title:"\u7EDF\u8BA1\u6570\u636E",subtitle:"(\u4E07\u5143)",header:!0,actions:S(o),children:t.exports.jsxDEV(x,{option:l,notMerge:!0,lazyUpdate:!1},void 0,!1,{fileName:d,lineNumber:35,columnNumber:11},globalThis)},void 0,!1,{fileName:d,lineNumber:34,columnNumber:9},globalThis)},void 0,!1,{fileName:d,lineNumber:33,columnNumber:7},globalThis),t.exports.jsxDEV(s,{xs:12,xl:3,children:t.exports.jsxDEV(b,{title:"\u9500\u552E\u6E20\u9053",header:!0,subtitle:"2021-12",children:t.exports.jsxDEV(x,{option:c,notMerge:!0,lazyUpdate:!0},void 0,!1,{fileName:d,lineNumber:40,columnNumber:11},globalThis)},void 0,!1,{fileName:d,lineNumber:39,columnNumber:9},globalThis)},void 0,!1,{fileName:d,lineNumber:38,columnNumber:7},globalThis)]},void 0,!0,{fileName:d,lineNumber:32,columnNumber:5},globalThis)};var ne=E.memo(ie);const se=[{growUp:1,productName:"\u56FD\u5BB6\u7535\u7F51\u6709\u9650\u516C\u53F8",count:7059,date:"2021-09-01"},{growUp:-1,productName:"\u6DF1\u5733\u71C3\u6C14\u96C6\u56E2\u80A1\u4EFD\u6709\u9650\u516C\u53F8",count:6437,date:"2021-09-01"},{growUp:4,productName:"\u56FD\u5BB6\u70DF\u8349\u4E13\u5356\u5C40",count:4221,date:"2021-09-01"},{growUp:3,productName:"\u4E2D\u56FD\u7535\u4FE1\u96C6\u56E2\u6709\u9650\u516C\u53F8",count:3317,date:"2021-09-01"},{growUp:-3,productName:"\u4E2D\u56FD\u79FB\u52A8\u901A\u4FE1\u96C6\u56E2\u6709\u9650\u516C\u53F8",count:3015,date:"2021-09-01"},{growUp:-3,productName:"\u65B0\u4F59\u5E02\u529E\u516C\u7528\u6237\u91C7\u8D2D\u9879\u76EE",count:2015,date:"2021-09-12"}],me=[{growUp:1,productName:"\u817E\u8BAF\u79D1\u6280\uFF08\u6DF1\u5733\uFF09\u6709\u9650\u516C\u53F8",count:3015,date:"2021-09-01"},{growUp:-1,productName:"\u5927\u6DA6\u53D1\u6709\u9650\u516C\u53F8",count:2015,date:"2021-09-01"},{growUp:6,productName:"\u56DB\u5DDD\u6D77\u5E95\u635E\u80A1\u4EFD\u6709\u9650\u516C\u53F8",count:1815,date:"2021-09-11"},{growUp:-3,productName:"\u7D22\u5C3C\uFF08\u4E2D\u56FD\uFF09\u6709\u9650\u516C\u53F8",count:1015,date:"2021-09-21"},{growUp:-4,productName:"\u677E\u4E0B\u7535\u5668\uFF08\u4E2D\u56FD\uFF09\u6709\u9650\u516C\u53F8",count:445,date:"2021-09-19"},{growUp:-3,productName:"\u65B0\u4F59\u5E02\u529E\u516C\u7528\u6237\u91C7\u8D2D\u9879\u76EE",count:2015,date:"2021-09-12"}],ce="_rankListPanel_1yaxr_1",de="_rankIndex_1yaxr_4",pe="_rankIndexTop_1yaxr_16";var f={rankListPanel:ce,rankIndex:de,rankIndexTop:pe},a="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Base/components/RankList.tsx";const O=t.exports.jsxDEV(D.Group,{defaultValue:"recent_week",children:[t.exports.jsxDEV(D.Button,{value:"recent_week",children:"\u672C\u5468"},void 0,!1,{fileName:a,lineNumber:11,columnNumber:5},globalThis),t.exports.jsxDEV(D.Button,{value:"recent_month",children:"\u8FD1\u4E09\u4E2A\u6708"},void 0,!1,{fileName:a,lineNumber:12,columnNumber:5},globalThis)]},void 0,!0,{fileName:a,lineNumber:10,columnNumber:3},globalThis),be=[{align:"center",colKey:"index",title:"\u6392\u540D",width:80,fixed:"left",cell:({rowIndex:e})=>t.exports.jsxDEV("span",{className:_(f.rankIndex,{[f.rankIndexTop]:e<3}),children:e+1},void 0,!1,{fileName:a,lineNumber:24,columnNumber:7},globalThis)},{align:"left",ellipsis:!0,colKey:"productName",title:"\u5BA2\u6237\u540D\u79F0",width:200},{align:"center",colKey:"growUp",width:100,title:"\u8F83\u4E0A\u5468",cell:({row:e})=>t.exports.jsxDEV(P,{trend:e.growUp<0?n.down:n.up,trendNum:Math.abs(e.growUp)},void 0,!1,{fileName:a,lineNumber:39,columnNumber:24},globalThis)},{align:"center",colKey:"count",title:"\u8BA2\u5355\u91CF",width:100},{align:"center",colKey:"date",width:140,title:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F"},{align:"center",colKey:"operation",fixed:"right",title:"\u64CD\u4F5C",width:80,cell:({row:e})=>t.exports.jsxDEV(C,{variant:"text",theme:"primary",onClick:()=>console.log(e),children:"\u64CD\u4F5C"},void 0,!1,{fileName:a,lineNumber:60,columnNumber:7},globalThis)}],he=[{align:"center",colKey:"index",title:"\u6392\u540D",width:80,fixed:"left",cell:({rowIndex:e})=>t.exports.jsxDEV("span",{className:_(f.rankIndex,{[f.rankIndexTop]:e<3}),children:e+1},void 0,!1,{fileName:a,lineNumber:75,columnNumber:7},globalThis)},{align:"left",ellipsis:!0,colKey:"productName",title:"\u4F9B\u5E94\u5546\u540D\u79F0",width:200},{align:"center",colKey:"growUp",width:100,title:"\u8F83\u4E0A\u5468",cell:({row:e})=>t.exports.jsxDEV(P,{trend:e.growUp<0?n.down:n.up,trendNum:Math.abs(e.growUp)},void 0,!1,{fileName:a,lineNumber:90,columnNumber:24},globalThis)},{align:"center",colKey:"count",title:"\u8BA2\u5355\u91CF",width:100},{align:"center",colKey:"date",width:140,title:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F"},{align:"center",colKey:"operation",title:"\u64CD\u4F5C",fixed:"right",width:80,cell:({row:e})=>t.exports.jsxDEV(C,{variant:"text",theme:"primary",onClick:()=>console.log(e),children:"\u64CD\u4F5C"},void 0,!1,{fileName:a,lineNumber:111,columnNumber:7},globalThis)}],Ne=()=>t.exports.jsxDEV(N,{gutter:[16,16],className:f.rankListPanel,children:[t.exports.jsxDEV(s,{xs:12,xl:6,span:12,children:t.exports.jsxDEV(b,{title:"\u9500\u552E\u8BA2\u5355\u6392\u540D",actions:O,header:!0,children:t.exports.jsxDEV(j,{columns:be,rowKey:"productName",size:"medium",data:se},void 0,!1,{fileName:a,lineNumber:122,columnNumber:9},globalThis)},void 0,!1,{fileName:a,lineNumber:121,columnNumber:7},globalThis)},void 0,!1,{fileName:a,lineNumber:120,columnNumber:5},globalThis),t.exports.jsxDEV(s,{xs:12,xl:6,span:12,children:t.exports.jsxDEV(b,{title:"\u91C7\u8D2D\u8BA2\u5355\u6392\u540D",actions:O,header:!0,children:t.exports.jsxDEV(j,{columns:he,rowKey:"productName",size:"medium",data:me},void 0,!1,{fileName:a,lineNumber:127,columnNumber:9},globalThis)},void 0,!1,{fileName:a,lineNumber:126,columnNumber:7},globalThis)},void 0,!1,{fileName:a,lineNumber:125,columnNumber:5},globalThis)]},void 0,!0,{fileName:a,lineNumber:119,columnNumber:3},globalThis);var xe=E.memo(Ne);const fe="_overviewPanel_cd6c7_1";var ge={overviewPanel:fe},u="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Base/components/Overview.tsx";const Ee=R(),ve=()=>{const[e,r]=m.exports.useState(Ee),o=c=>{const v=R(c);r(v)},l=g(e,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"]});return t.exports.jsxDEV("div",{className:ge.overviewPanel,children:t.exports.jsxDEV(N,{children:[t.exports.jsxDEV(s,{xs:12,xl:9,span:12,children:t.exports.jsxDEV(b,{title:" \u51FA\u5165\u5E93\u6982\u89C8 ",subtitle:"(\u4EF6)",actions:S(o),bordered:!1,children:t.exports.jsxDEV(x,{option:l,notMerge:!0,lazyUpdate:!0,style:{height:351}},void 0,!1,{fileName:u,lineNumber:28,columnNumber:13},globalThis)},void 0,!1,{fileName:u,lineNumber:27,columnNumber:11},globalThis)},void 0,!1,{fileName:u,lineNumber:26,columnNumber:9},globalThis),t.exports.jsxDEV(s,{xs:12,xl:3,span:12,children:t.exports.jsxDEV(b,{actions:t.exports.jsxDEV(C,{children:"\u5BFC\u51FA\u6570\u636E"},void 0,!1,{fileName:u,lineNumber:37,columnNumber:26},globalThis),bordered:!1,children:t.exports.jsxDEV(N,{children:[t.exports.jsxDEV(s,{xl:12,xs:6,span:12,children:t.exports.jsxDEV(y,{title:"\u672C\u6708\u51FA\u5E93\u603B\u8BA1\uFF08\u4EF6\uFF09",count:"1726",trend:n.down,trendNum:"20.3%",desc:"\u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765",border:!1},void 0,!1,{fileName:u,lineNumber:40,columnNumber:17},globalThis)},void 0,!1,{fileName:u,lineNumber:39,columnNumber:15},globalThis),t.exports.jsxDEV(s,{xl:12,xs:6,span:12,children:t.exports.jsxDEV(y,{title:"\u6D3B\u8DC3\u7528\u6237\uFF08\u4E2A\uFF09",count:"1126",trend:n.down,trendNum:"20.5%",desc:"\u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765",border:!1},void 0,!1,{fileName:u,lineNumber:50,columnNumber:17},globalThis)},void 0,!1,{fileName:u,lineNumber:49,columnNumber:15},globalThis)]},void 0,!0,{fileName:u,lineNumber:38,columnNumber:13},globalThis)},void 0,!1,{fileName:u,lineNumber:37,columnNumber:11},globalThis)},void 0,!1,{fileName:u,lineNumber:36,columnNumber:9},globalThis)]},void 0,!0,{fileName:u,lineNumber:25,columnNumber:7},globalThis)},void 0,!1,{fileName:u,lineNumber:24,columnNumber:5},globalThis)};var De=E.memo(ve),h="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Base/index.tsx";const ye=()=>t.exports.jsxDEV("div",{style:{overflowX:"hidden"},children:[t.exports.jsxDEV(re,{},void 0,!1,{fileName:h,lineNumber:9,columnNumber:5},globalThis),t.exports.jsxDEV(ne,{},void 0,!1,{fileName:h,lineNumber:10,columnNumber:5},globalThis),t.exports.jsxDEV(xe,{},void 0,!1,{fileName:h,lineNumber:11,columnNumber:5},globalThis),t.exports.jsxDEV(De,{},void 0,!1,{fileName:h,lineNumber:12,columnNumber:5},globalThis)]},void 0,!0,{fileName:h,lineNumber:8,columnNumber:3},globalThis);var Le=m.exports.memo(ye);export{Le as default};
