import r from"./PsLabel.3935ab2c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,f,w as m,a as h,q as k,t as p,r as _}from"./app.df1b8390.js";class i{constructor(){this.id="",this.name=""}}const b={name:"PsCheckbox",components:{PsLabel:r},props:{value:{type:i,default:new i},selectedValue:{type:Array,default:()=>[new i]},title:{type:String,default:"N.A"}},setup(t,{emit:n}){function c(){let a=!1;if(t.selectedValue!=null){for(let e=0;e<t.selectedValue.length;e++)if(t.selectedValue[e].id==t.value.id){a=!0;break}}return a}function s(a){const e=t.selectedValue;let o=!1;for(let l=0;l<e.length;l++)if(e[l].name==t.value.name){o=!0,a||e.splice(l,1);break}o||e.push(t.value),n("update:selectedValue",e)}return{getValue:c,handleInput:s}}},x=["id","checked"];function V(t,n,c,s,a,e){const o=_("ps-label");return d(),f(o,{class:"select-none inline-flex items-center"},{default:m(()=>[h("input",{type:"checkbox",class:"form-checkbox me-2 checked:bg-fePrimary-500 dark:bg-feAccent-500",id:c.title,checked:s.getValue(),onInput:n[0]||(n[0]=l=>s.handleInput(l.target.checked))},null,40,x),k(" "+p(c.title),1)]),_:1})}var C=u(b,[["render",V]]);export{C as default};
