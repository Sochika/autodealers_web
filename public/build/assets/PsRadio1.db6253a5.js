import c from"./PsLabel.3935ab2c.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as r,b as u,w as f,a as m,l as o,r as _}from"./app.df1b8390.js";const h={name:"PsRadio1",components:{PsLabel:c},props:{value:{type:Object},selectedValue:{type:Object},id:{type:String,default:"N.A"},onChange:Function},setup(e,{emit:a}){function l(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue.id==e.value.id&&(t=!0),t}function n(){const t=e.selectedValue;Object.assign(t,e.value),a("update:selectedValue",t),e.onChange!=null&&e.onChange(t)}return{getValue:l,handleInput:n}}},v={class:"flex flex-row justify-between"},b=["id","checked"];function g(e,a,l,n,t,p){const s=_("ps-label");return i(),r("div",v,[u(s,{class:"select-none inline-flex flex-row items-center"},{default:f(()=>[m("input",{type:"radio",class:"form-radio me-2 checked:bg-fePrimary-500 dark:bg-feAccent-500",id:l.id,checked:n.getValue(),onChange:a[0]||(a[0]=V=>n.handleInput())},null,40,b),o(e.$slots,"title")]),_:3}),o(e.$slots,"price")])}var C=d(h,[["render",g]]);export{C as default};
