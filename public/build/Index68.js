import{P as r}from"./PsLabel.js";import{_ as s}from"./plugin-vue_export-helper.js";import{d as p,r as o,o as n,c,b as l,f as i,w as _,a as m,g as d,F as u}from"./app.js";const f=p({name:"Index",components:{PsLabel:r},props:["privacy_policy"],setup(e){return{}}}),y=["innerHTML"];function v(e,$,b,k,B,C){const a=o("Head"),t=o("ps-label");return n(),c(u,null,[l(a,{title:e.$t("privacy_policy_module")},null,8,["title"]),e.privacy_policy&&e.privacy_policy.content?(n(),i(t,{key:0,class:"p-8"},{default:_(()=>[m("span",{innerHTML:e.privacy_policy.content},null,8,y)]),_:1})):d("",!0)],64)}var N=s(f,[["render",v]]);export{N as default};
