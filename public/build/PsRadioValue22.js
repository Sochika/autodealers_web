import r from"./PsLabel2.js";import{_ as n}from"./plugin-vue_export-helper.js";import{r as s,o as c,c as d,a as f,n as l,b as m,w as u,p as _,t as b}from"./app.js";const h={name:"PsRadioValue2",components:{PsLabel:r},props:{value:String,title:{type:String,default:""},title_label:{type:String,default:""},color:{type:String,default:"text-fePrimary-500 border-feAchromatic-300 focus_ring-fePrimary-500"},disabled:{type:Boolean,default:!1}},setup(i,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},g={class:"me-4"},y=["disabled","id","checked"];function x(i,t,e,a,v,P){const o=s("ps-label");return c(),d("div",g,[f("input",{type:"radio",class:l(["w-4 h-4 focus_ring-1 bg-feAchromatic-100 dark_bg-feAchromatic-700 dark_border-feAchromatic-600",[e.disabled?"text-fePrimary-400 border-feAchromatic-400 focus_ring-fePrimary-400":e.color]]),disabled:e.disabled,id:e.title,checked:e.title===e.value,onChange:t[0]||(t[0]=k=>a.handleInput(e.title))},null,42,y),m(o,{for:e.title,class:l(["ms-2 select-none inline-flex items-center",[e.disabled?"text-opacity-50":""]])},{default:u(()=>[_(b(e.title_label==""?e.title:e.title_label),1)]),_:1},8,["for","class"])])}var V=n(h,[["render",x]]);export{V as default};
