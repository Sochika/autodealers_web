import{o as d,c as n,s as c,m,u,a as i,t as h,F as _}from"./app.df1b8390.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"CheckBox",props:["customizeDetails","customizeHeader","oldData","index"],data(){return{arr:[],error:""}},mounted(){if(this.oldData){let a=this.oldData.split(",");this.arr=a}},methods:{handleChange(a,r){this.$emit("toParent",{data:a,id:r})},handleError(){}}},p=["id","value"],x=["for"];function v(a,r,t,y,o,l){return d(!0),n(_,null,c(t.customizeDetails.filter(e=>e.core_keys_id===t.customizeHeader.core_keys_id),e=>(d(),n("div",{class:"me-2",key:e.id},[m(i("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>o.arr=s),onChange:r[1]||(r[1]=s=>l.handleChange(o.arr,t.customizeHeader.core_keys_id)),class:"me-2",type:"checkbox",id:e.id,value:e.id},null,40,p),[[u,o.arr]]),i("label",{for:e.id},h(e.name),9,x)]))),128)}var B=f(k,[["render",v]]);export{B as default};
