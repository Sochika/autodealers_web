import{_ as u}from"./plugin-vue_export-helper.js";import{o as i,c as d,F as c,q as f,t as m}from"./app.js";class o{constructor(){this.id="",this.name=""}}const _={name:"PsSelect",props:{dataList:{type:Array,default:()=>[new o]},value:{type:Array,default:()=>[new o]}},setup(t,{emit:n}){function r(s){let a="";for(let e=0;e<t.dataList.length;e++)if(t.dataList[e].id==s){a=t.dataList[e].name;break}return a}function l(s){let a="";for(let e=0;e<t.dataList.length;e++)if(t.dataList[e].name==s){a=t.dataList[e].id;break}n("update:value",a)}return{getValue:r,handleInput:l}}},g=["value"];function L(t,n,r,l,s,a){return i(),d("select",{class:"appearance-none form-select mt-1 w-60",value:l.getValue(r.value),onChange:n[0]||(n[0]=e=>l.handleInput(e.target.value))},[(i(!0),d(c,null,f(r.dataList,e=>(i(),d("option",{key:e.id,class:"focus_bg-fePrimary-500 dark_bg-feAccent-500"},m(e.name),1))),128))],40,g)}var y=u(_,[["render",L]]);export{y as default};