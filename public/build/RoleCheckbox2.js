import{P as c}from"./PsLabel.js";import{r as m,o as s,c as d,q as h,m as p,s as u,a as f,b as _,w as b,p as x,t as v,F as y}from"./app.js";import{_ as C}from"./plugin-vue_export-helper.js";const k={name:"CheckBox",component:{PsLabel:c},props:["permissions","customizeHeader","module_id","oldData"],data(){return{arr:[],error:""}},mounted(){if(Array.isArray(this.oldData)&&this.oldData.map(e=>{if(e!==void 0){let t=e.permission_id.split(",");this.arr=t}}),this.oldData){let e=this.oldData.split(",");this.arr=e}},methods:{handleChange(e){this.$emit("toParent",{data:e})},handleError(){}}},D=["id","value"];function g(e,t,l,B,r,n){const i=m("ps-label");return s(!0),d(y,null,h(l.permissions,a=>(s(),d("div",{class:"me-2",key:a.id},[p(f("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>r.arr=o),onChange:t[1]||(t[1]=o=>n.handleChange(r.arr)),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:a.id,value:a.id},null,40,D),[[u,r.arr]]),_(i,{class:"text-base font-light",for:a.id},{default:b(()=>[x(v(a.title?a.title:a.name),1)]),_:2},1032,["for"])]))),128)}var P=C(k,[["render",g]]);export{P as default};
