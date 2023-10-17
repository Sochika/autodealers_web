import{M as l}from"./Modal.js";import{_ as a}from"./plugin-vue_export-helper.js";import{d as n,r,o as i,f as d,w as m,a as s,l as o}from"./app.js";const c=n({emits:["close"],components:{Modal:l},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close(){this.$emit("close")}}}),h={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},f={class:"sm:flex sm:items-start"},p=s("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[s("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),_={class:"mt-3 text-center sm:mt-0 sm:ms-4 sm:text-left"},u={class:"text-lg"},x={class:"mt-2"},w={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};function v(e,b,$,g,k,C){const t=r("modal");return i(),d(t,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:e.close},{default:m(()=>[s("div",h,[s("div",f,[p,s("div",_,[s("h3",u,[o(e.$slots,"title")]),s("div",x,[o(e.$slots,"content")])])])]),s("div",w,[o(e.$slots,"footer")])]),_:3},8,["show","max-width","closeable","onClose"])}var j=a(c,[["render",v]]);export{j as J};
