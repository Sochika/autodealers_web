import d from"./PsLabel2.js";import{_ as x}from"./plugin-vue_export-helper.js";import{r as m,o as t,c as o,a,f as l,g as n,F as u,q as y,w as f,t as i,n as p}from"./app.js";const h={name:"PsBreadcrumb2",components:{PsLabel:d},props:{iconName:{type:String,default:""},iconColor:{type:String,default:"#4B5563"},items:{type:Array,required:!0}}},k={class:"rounded-md w-full"},g={class:"list-reset flex"},S={class:"text-feSecondary-800"},b=["href"],C={key:0,class:"mx-4 text-sm flex items-center justify-center"},B={key:0,class:"mx-4 text-sm flex items-center justify-center"};function w(N,v,s,P,j,q){const _=m("ps-icon-1"),c=m("ps-label");return t(),o("nav",k,[a("ol",g,[a("li",S,[s.iconName?(t(),l(_,{key:0,name:s.iconName,class:"me-1",theme:s.iconColor},null,8,["name","theme"])):n("",!0)]),(t(!0),o(u,null,y(s.items,(e,r)=>(t(),o("li",{key:r,class:"text-feSecondary-800 first-line:items-center flex flex-row items-center"},[e.url?(t(),l(c,{key:0,textColor:e.color?e.color:"text-feSecondary-800 dark_text-feSecondary-300",class:"flex flex-row"},{default:f(()=>[a("a",{href:e.url,class:"text-sm lg:text-sm"},i(e.label),9,b),r<s.items.length-1?(t(),o("span",C," / ")):n("",!0)]),_:2},1032,["textColor"])):(t(),l(c,{key:1,class:"flex flex-row"},{default:f(()=>[a("span",{class:p([e.color?e.color:"text-feSecondary-800 dark_text-feSecondary-300","text-sm lg:text-base"])},i(e.label),3),r<s.items.length-1?(t(),o("span",B," / ")):n("",!0)]),_:2},1024))]))),128))])])}var z=x(h,[["render",w]]);export{z as default};
