import{R as g,j as e,aT as d,aU as N,r as D,ba as x,e as f,bb as j}from"./index.1a960ee0.js";import{E as n,B as A,L as C}from"./index.c55c9a0b.js";import{C as E}from"./index.07dd367d.js";import{u as T,E as y}from"./useDynamicChart.430ae34c.js";import{a as u,O as S,b as _,g as V}from"./chart.5f16fb0e.js";import{T as L}from"./index.913e0f83.js";import"./index.eb754cca.js";import"./DateRangePicker.11073dfe.js";import"./index.a9201b5f.js";import"./calendar.db10e445.js";const w=[{title:"\u603B\u7533\u8BF7\u6570\uFF08\u6B21\uFF09",count:"1126",trendNum:"10%",trend:n.up},{title:"\u4F9B\u5E94\u5546\u6570\u91CF\uFF08\u4E2A\uFF09",count:"13",trendNum:"13%",trend:n.down},{title:"\u91C7\u8D2D\u5546\u54C1\u54C1\u7C7B\uFF08\u7C7B\uFF09",count:"4",trendNum:"10%",trend:n.up},{title:"\u7533\u8BF7\u4EBA\u6570\u91CF\uFF08\u4EBA\uFF09",count:"90",trendNum:"44%",trend:n.down},{title:"\u7533\u8BF7\u5B8C\u6210\u7387\uFF08%\uFF09",count:"80.5",trendNum:"70%",trend:n.up},{title:"\u5230\u8D27\u53CA\u65F6\u7387\uFF08%\uFF09",count:"78",trendNum:"16%",trend:n.up}],P=[{description:"SSL\u8BC1\u4E66\u53C8\u53EB\u670D\u52A1\u5668\u8BC1\u4E66\uFF0C\u817E\u8BAF\u4E91\u4E3A\u60A8\u63D0\u4F9B\u8BC1\u4E66\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF0C\u5305\u62EC\u514D\u8D39\u3001\u4ED8\u8D39\u8BC1\u4E66\u7684\u7533\u8BF7\u3001\u7BA1\u7406\u53CA\u90E8",index:1,isSetup:!0,name:"SSL\u8BC1\u4E66",type:"D",icon:"user"},{description:"SSL\u8BC1\u4E66\u53C8\u53EB\u670D\u52A1\u5668\u8BC1\u4E66\uFF0C\u817E\u8BAF\u4E91\u4E3A\u60A8\u63D0\u4F9B\u8BC1\u4E66\u7684\u4E00\u7AD9\u5F0F\u670D\u52A1\uFF0C\u5305\u62EC\u514D\u8D39\u3001\u4ED8\u8D39\u8BC1\u4E66\u7684\u7533\u8BF7\u3001\u7BA1\u7406\u53CA\u90E8",index:1,isSetup:!0,name:"SSL\u8BC1\u4E66",type:"C",icon:"calendar"}];var b="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Detail/components/MonthPurchase.tsx";const O=()=>e.exports.jsxDEV(E,{title:"\u672C\u6708\u91C7\u8D2D\u7533\u8BF7\u60C5\u51B5",header:!0,children:e.exports.jsxDEV(d,{gutter:[16,16],children:w.map(t=>e.exports.jsxDEV(N,{xs:6,xl:3,span:12,children:e.exports.jsxDEV(A,{title:t.title,trend:t.trend,trendNum:t.trendNum,count:t.count,desc:"\u73AF\u6BD4",border:!0},void 0,!1,{fileName:b,lineNumber:11,columnNumber:11},globalThis)},t.title,!1,{fileName:b,lineNumber:10,columnNumber:9},globalThis))},void 0,!1,{fileName:b,lineNumber:8,columnNumber:5},globalThis)},void 0,!1,{fileName:b,lineNumber:7,columnNumber:3},globalThis);var W=g.memo(O);const B=(t=[])=>{let r=S;return t.length>0&&(r=_(t,7,"YYYY-MM-DD")),{grid:{top:"5%",right:"10px",left:"30px",bottom:"60px"},legend:{left:"center",bottom:"0",orient:"horizontal",data:["\u676F\u5B50","\u8336\u53F6","\u8702\u871C","\u9762\u7C89"]},xAxis:{type:"category",data:r,boundaryGap:!1,axisLabel:{color:"rgba(0, 0, 0, 0.4)"},axisLine:{lineStyle:{color:"#E3E6EB",width:1}}},yAxis:{type:"value",axisLabel:{color:"rgba(0, 0, 0, 0.4)"}},tooltip:{trigger:"item"},series:[{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u676F\u5B50",stack:"\u603B\u91CF",data:[u(),u(),u(),u(),u(),u(),u()],type:"line",itemStyle:{borderColor:"#ffffff",borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u8336\u53F6",stack:"\u603B\u91CF",data:[u(),u(),u(),u(),u(),u(),u()],type:"line",itemStyle:{borderColor:"#ffffff",borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u8702\u871C",stack:"\u603B\u91CF",data:[u(),u(),u(),u(),u(),u(),u()],type:"line",itemStyle:{borderColor:"#ffffff",borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u9762\u7C89",stack:"\u603B\u91CF",data:[u(),u(),u(),u(),u(),u(),u()],type:"line",itemStyle:{borderColor:"#ffffff",borderWidth:1}}]}},F=(t=[])=>{const[r,s,a]=V(t);return{xAxis:{data:r,axisLabel:{color:"rgba(0, 0, 0, 0.4)"},splitLine:{show:!1},axisLine:{lineStyle:{color:"#E3E6EB",width:1}}},yAxis:{type:"value",axisLabel:{color:"rgba(0, 0, 0, 0.4)"},nameTextStyle:{padding:[0,0,0,60]},axisTick:{show:!1},axisLine:{show:!1}},tooltip:{trigger:"item"},grid:{top:"5px",left:"25px",right:"5px",bottom:"60px"},legend:{left:"center",bottom:"0",orient:"horizontal",data:["\u6309\u6469\u4EEA","\u5496\u5561\u673A"],itemHeight:8,itemWidth:8},series:[{name:"\u6309\u6469\u4EEA",symbolSize:10,data:a,type:"scatter"},{name:"\u5496\u5561\u673A",symbolSize:10,data:s,type:"scatter"}]}},z="_purchaseTrendPanel_r5e4j_1",k="_productTrendPanel_r5e4j_4",U="_productLogo_r5e4j_14",M="_productName_r5e4j_25",R="_productDesc_r5e4j_31",$="_iconWrap_r5e4j_42",I="_lightBtn_r5e4j_45";var i={purchaseTrendPanel:z,productTrendPanel:k,productLogo:U,productName:M,productDesc:R,iconWrap:$,lightBtn:I},o="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Detail/components/PurchaseTrend.tsx";const Y=({type:t,isSetup:r,description:s,name:a,icon:l})=>e.exports.jsxDEV("div",{className:i.productTrendPanel,children:[e.exports.jsxDEV(d,{justify:"space-between",children:[e.exports.jsxDEV("div",{className:i.productLogo,children:e.exports.jsxDEV(x,{name:l},void 0,!1,{fileName:o,lineNumber:23,columnNumber:9},globalThis)},void 0,!1,{fileName:o,lineNumber:22,columnNumber:7},globalThis),e.exports.jsxDEV(L,{theme:"success",children:r?"\u5DF2\u542F\u7528":"\u5DF2\u505C\u7528"},void 0,!1,{fileName:o,lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:o,lineNumber:21,columnNumber:5},globalThis),e.exports.jsxDEV("p",{className:i.productName,children:a},void 0,!1,{fileName:o,lineNumber:28,columnNumber:5},globalThis),e.exports.jsxDEV("p",{className:i.productDesc,children:s},void 0,!1,{fileName:o,lineNumber:29,columnNumber:5},globalThis),e.exports.jsxDEV(d,{justify:"space-between",align:"middle",children:[e.exports.jsxDEV("div",{className:i.iconWrap,children:[e.exports.jsxDEV(f,{shape:"circle",disabled:!r,children:t},void 0,!1,{fileName:o,lineNumber:32,columnNumber:9},globalThis),e.exports.jsxDEV(f,{shape:"circle",disabled:!r,className:i.lightBtn,children:e.exports.jsxDEV(x,{name:"add"},void 0,!1,{fileName:o,lineNumber:36,columnNumber:11},globalThis)},void 0,!1,{fileName:o,lineNumber:35,columnNumber:9},globalThis)]},void 0,!0,{fileName:o,lineNumber:31,columnNumber:7},globalThis),e.exports.jsxDEV(j,{disabled:!r,options:[{content:"\u7BA1\u7406",value:"manage",onClick:()=>{}},{content:"\u5220\u9664",value:"delete",onClick:()=>{}}],children:e.exports.jsxDEV(x,{name:"more"},void 0,!1,{fileName:o,lineNumber:54,columnNumber:9},globalThis)},void 0,!1,{fileName:o,lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:o,lineNumber:30,columnNumber:5},globalThis)]},void 0,!0,{fileName:o,lineNumber:20,columnNumber:3},globalThis),G=B(),H=()=>{const[t,r]=D.exports.useState(G),s=l=>{const m=B(l);r(m)},a=T(t,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"]});return e.exports.jsxDEV(d,{className:i.purchaseTrendPanel,gutter:[16,16],children:[e.exports.jsxDEV(N,{xs:12,xl:9,children:e.exports.jsxDEV(E,{title:"\u91C7\u8D2D\u5546\u54C1\u7533\u8BF7\u8D8B\u52BF",subtitle:"(\u4EF6)",actions:C(s),header:!0,children:e.exports.jsxDEV(y,{option:a,notMerge:!0,lazyUpdate:!0,style:{height:453}},void 0,!1,{fileName:o,lineNumber:78,columnNumber:11},globalThis)},void 0,!1,{fileName:o,lineNumber:77,columnNumber:9},globalThis)},void 0,!1,{fileName:o,lineNumber:76,columnNumber:7},globalThis),e.exports.jsxDEV(N,{xs:12,xl:3,children:e.exports.jsxDEV(d,{gutter:[16,16],children:P.map((l,m)=>e.exports.jsxDEV(N,{xs:12,children:e.exports.jsxDEV(Y,{type:l.type,isSetup:l.isSetup,description:l.description,name:l.name,icon:l.icon},void 0,!1,{fileName:o,lineNumber:90,columnNumber:15},globalThis)},m,!1,{fileName:o,lineNumber:89,columnNumber:13},globalThis))},void 0,!1,{fileName:o,lineNumber:87,columnNumber:9},globalThis)},void 0,!1,{fileName:o,lineNumber:86,columnNumber:7},globalThis)]},void 0,!0,{fileName:o,lineNumber:75,columnNumber:5},globalThis)};var K=g.memo(H);const q="_satisfactionPanel_aca4b_1",J="_operation_aca4b_4",Q="_exportBtn_aca4b_7";var h={satisfactionPanel:q,operation:J,exportBtn:Q},c="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Detail/components/Satisfaction.tsx";const X=()=>{const t=F(),[r,s]=D.exports.useState(t),a=m=>{const v=F(m);s(v)},l=T(r,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"]});return e.exports.jsxDEV("div",{className:h.satisfactionPanel,children:e.exports.jsxDEV(E,{title:"\u91C7\u8D2D\u5546\u54C1\u6EE1\u610F\u5EA6\u5206\u5E03",header:!0,actions:e.exports.jsxDEV("div",{className:h.operation,children:[C(a),e.exports.jsxDEV(f,{className:h.exportBtn,children:"\u5BFC\u51FA\u6570\u636E"},void 0,!1,{fileName:c,lineNumber:29,columnNumber:13},globalThis)]},void 0,!0,{fileName:c,lineNumber:27,columnNumber:11},globalThis),children:e.exports.jsxDEV(y,{option:l,notMerge:!0,lazyUpdate:!0,style:{height:374}},void 0,!1,{fileName:c,lineNumber:33,columnNumber:9},globalThis)},void 0,!1,{fileName:c,lineNumber:23,columnNumber:7},globalThis)},void 0,!1,{fileName:c,lineNumber:22,columnNumber:5},globalThis)};var Z=g.memo(X),p="/Users/wjl/web-front-end/TDesign/tdesign-react-starter/src/pages/Dashboard/Detail/index.tsx",me=D.exports.memo(()=>e.exports.jsxDEV("div",{children:[e.exports.jsxDEV(W,{},void 0,!1,{fileName:p,lineNumber:8,columnNumber:5},globalThis),e.exports.jsxDEV(K,{},void 0,!1,{fileName:p,lineNumber:9,columnNumber:5},globalThis),e.exports.jsxDEV(Z,{},void 0,!1,{fileName:p,lineNumber:10,columnNumber:5},globalThis)]},void 0,!0,{fileName:p,lineNumber:7,columnNumber:3},globalThis));export{me as default};
