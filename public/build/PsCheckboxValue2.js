import c from"./PsLabel2.js";import{_ as s}from"./plugin-vue_export-helper.js";import{r as i,o as l,f,w as d,a as m,p as u,t as p}from"./app.js";const _={name:"PsCheckboxValue",components:{PsLabel:c},props:{value:Boolean,title:{type:String,default:"N.A"}},setup(r,{emit:t}){function e(a){t("update:value",a)}return{handleInput:e}}},h=["id","checked"];function k(r,t,e,a,x,b){const o=i("ps-label");return l(),f(o,{class:"select-none inline-flex items-center"},{default:d(()=>[m("input",{type:"checkbox",class:"form-checkbox me-2 text-fePrimary-500 dark_text-fePrimary-500 focus_ring-2 focus_ring-fePrimary-300 hover_bg-fePrimary-500 dark_hover_bg-fePrimary-500 checked:bg-fePrimary-500 dark:checked:bg-fePrimary-500",id:e.title,checked:e.value,onInput:t[0]||(t[0]=n=>a.handleInput(n.target.checked))},null,40,h),u(" "+p(e.title),1)]),_:1})}var v=s(_,[["render",k]]);export{v as default};
