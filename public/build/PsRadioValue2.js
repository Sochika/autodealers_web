import l from"./PsLabel2.js";import{_ as s}from"./plugin-vue_export-helper.js";import{r as i,o as r,f as c,w as d,a as u,p as f,t as m}from"./app.js";const p={name:"PsRadioValue",components:{PsLabel:l},props:{value:String,title:{type:String,default:"N.A"}},setup(n,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},_=["id","checked"];function h(n,t,e,a,g,k){const o=i("ps-label");return r(),c(o,{class:"select-none inline-flex items-center"},{default:d(()=>[u("input",{type:"radio",class:"form-radio me-2 checked:bg-fePrimary-500 dark_bg-feAccent-500",id:e.title,checked:e.title===e.value,onChange:t[0]||(t[0]=v=>a.handleInput(e.title))},null,40,_),f(" "+m(e.title),1)]),_:1})}var P=s(p,[["render",h]]);export{P as default};
