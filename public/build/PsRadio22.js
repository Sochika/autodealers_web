import c from"./PsLabel2.js";import{_ as d}from"./plugin-vue_export-helper.js";import{r,o as u,c as f,b as m,w as _,a as h,l as s}from"./app.js";const v={name:"PsRadio2",components:{PsLabel:c},props:{value:String,selectedValue:String,id:{type:String,default:"N.A"},onChange:Function},setup(e,{emit:n}){function a(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue==e.value&&(t=!0),t}function l(t){const o=t;n("update:selectedValue",o),e.onChange!=null&&e.onChange(o)}return{getValue:a,handleInput:l}}},g={class:"flex flex-row justify-between"},p=["id","checked"];function V(e,n,a,l,t,o){const i=r("ps-label");return u(),f("div",g,[m(i,{class:"select-none inline-flex flex-row items-center"},{default:_(()=>[h("input",{type:"radio",class:"form-radio me-2 checked:bg-fePrimary-500",id:a.id,checked:l.getValue(),onChange:n[0]||(n[0]=b=>l.handleInput(a.value))},null,40,p),s(e.$slots,"title")]),_:3}),s(e.$slots,"price")])}var k=d(v,[["render",V]]);export{k as default};
