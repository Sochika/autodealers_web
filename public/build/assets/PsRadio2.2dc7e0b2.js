import c from"./PsLabel.3935ab2c.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as u,b as f,w as m,a as _,l as s,r as h}from"./app.df1b8390.js";const v={name:"PsRadio2",components:{PsLabel:c},props:{value:String,selectedValue:String,id:{type:String,default:"N.A"},onChange:Function},setup(e,{emit:n}){function a(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue==e.value&&(t=!0),t}function l(t){const o=t;n("update:selectedValue",o),e.onChange!=null&&e.onChange(o)}return{getValue:a,handleInput:l}}},g={class:"flex flex-row justify-between"},p=["id","checked"];function V(e,n,a,l,t,o){const i=h("ps-label");return r(),u("div",g,[f(i,{class:"select-none inline-flex flex-row items-center"},{default:m(()=>[_("input",{type:"radio",class:"form-radio me-2 checked:bg-fePrimary-500",id:a.id,checked:l.getValue(),onChange:n[0]||(n[0]=b=>l.handleInput(a.value))},null,40,p),s(e.$slots,"title")]),_:3}),s(e.$slots,"price")])}var k=d(v,[["render",V]]);export{k as default};