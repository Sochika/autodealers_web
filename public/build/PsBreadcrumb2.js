import{P as x}from"./PsLabel.js";import{P as p}from"./PsIcon1.js";import{P as u}from"./PsIcon.js";import{_ as g}from"./plugin-vue_export-helper.js";import{r as c,o as t,c as a,a as l,f as i,g as d,F as y,q as w,w as m,t as f,b as n,n as C}from"./app.js";const k={name:"PsBreadcrumb2",components:{PsLabel:x,PsIcon1:p,PsIcon:u},props:{iconName:{type:String,default:""},iconColor:{type:String,default:"#4B5563"},items:{type:Array,required:!0}}},b={class:"rounded-md w-full"},v={class:"list-reset flex"},P={class:"text-secondary-800"},B=["href"],N={key:0,class:"mx-0.5 lg:mx-1 flex items-center justify-center"},S={class:"block rtl:hidden"},V={class:"hidden rtl:block"},j={key:0,class:"text-secondary-800 mx-0.5 sm:mx-1 flex items-center justify-center"},q={class:"block rtl:hidden"},F={class:"hidden rtl:block"};function I(L,z,o,A,D,E){const _=c("ps-icon-1"),e=c("ps-icon"),h=c("ps-label");return t(),a("nav",b,[l("ol",v,[l("li",P,[o.iconName?(t(),i(_,{key:0,name:o.iconName,class:"me-1",theme:o.iconColor},null,8,["name","theme"])):d("",!0)]),(t(!0),a(y,null,w(o.items,(s,r)=>(t(),a("li",{key:r,class:"text-secondary-800 first-line:items-center flex flex-row items-center"},[s.url?(t(),i(h,{key:0,textColor:s.color?s.color:"text-secondary-800 dark:text-white",class:"flex flex-row"},{default:m(()=>[l("a",{href:s.url,class:"text-sm text-xs lg:text-base"},f(s.label),9,B),r<o.items.length-1?(t(),a("span",N,[l("span",S,[n(e,{w:"24",h:"24",name:"rightChervon",class:"hidden lg:flex"}),n(e,{w:"20",h:"20",name:"rightChervon",class:"flex lg:hidden"})]),l("span",V,[n(e,{w:"24",h:"24",name:"leftChervon",class:"hidden lg:flex"}),n(e,{w:"20",h:"20",name:"leftChervon",class:"flex lg:hidden"})])])):d("",!0)]),_:2},1032,["textColor"])):(t(),i(h,{key:1,class:"flex flex-row"},{default:m(()=>[l("span",{class:C([s.color?s.color:"text-secondary-800 dark:text-white","text-sm lg:text-base"])},f(s.label),3),r<o.items.length-1?(t(),a("span",j,[l("span",q,[n(e,{w:"24",h:"24",name:"rightChervon",class:"hidden lg:flex"}),n(e,{w:"20",h:"20",name:"rightChervon",class:"flex lg:hidden"})]),l("span",F,[n(e,{w:"24",h:"24",name:"leftChervon",class:"hidden lg:flex"}),n(e,{w:"20",h:"20",name:"leftChervon",class:"flex lg:hidden"})])])):d("",!0)]),_:2},1024))]))),128))])])}var O=g(k,[["render",I]]);export{O as P};
