import{d as k,H as $,R as w,r as p,o as u,c as f,b as r,w as i,a,h as E,p as l,t as d,m as b,aP as S,F as P,q as B,s as N}from"./app.js";import{d as D}from"./PsLayout.js";import{u as L}from"./Validators.js";import{P as U}from"./PsInput.js";import{P as H}from"./PsLabel.js";import{P as F}from"./PsButton.js";import{P as K}from"./PsTextarea.js";import{P as M}from"./PsLabelHeader4.js";import{P as W}from"./PsLabelCaption.js";import{_ as T}from"./plugin-vue_export-helper.js";import"./PsIcon.js";import"./Icons.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsLoading.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./PsLoadingCircleDialog.js";const j=k({name:"Edit",components:{Head:$,PsInput:U,PsLabel:H,PsButton:F,PsTextarea:K,PsLabelHeader4:M,PsLabelCaption:W},layout:D,props:["errors","shipping","shops"],data(){return{form:w({name:this.shipping.name,shop_id:this.shipping.shop_id,price:this.shipping.price,days:this.shipping.days,status:this.shipping.status==1,_method:"put"})}},setup(t){const{isEmpty:e,minLength:v,isPrice:h}=L();return{validateEmptyInput:(o,s)=>{t.errors[o]=s?"":e(o,s)},validateNameInput:(o,s)=>{t.errors[o]=s?v(o,s,3):e(o,s)},validatePriceInput:(o,s)=>{t.errors[o]=s?h(o,s):e(o,s)},onlyNumbeWithCustom:o=>{let s=o.keyCode?o.keyCode:o.which;(s<48||s>57)&&s!==46&&s!==45&&s!==44&&o.preventDefault()}}},methods:{handleSubmit(t){this.$inertia.post(route("shipping.update",t),this.form,{forceFormData:!0})}}}),q={class:"py-6"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},R={class:"bg-white shadow-xl sm:rounded-lg"},V={class:"mt-6 ms-6 mx-auto flex justify-center"},z=l("*"),A=l("Shipping Name"),G=l("*"),J=l("Shop"),O=a("option",{value:""},"Please select shop name",-1),Q=["value"],X=l("*"),Y=l("Price"),Z=l("Days"),tt=l("Is Publish?"),et=l("Update");function ot(t,e,v,h,c,g){const y=p("Head"),_=p("ps-label-header-4"),o=p("ps-label"),s=p("ps-input"),m=p("ps-label-caption"),C=p("ps-button"),I=p("ps-layout");return u(),f(P,null,[r(y,{title:t.$t("edit_shipping")},null,8,["title"]),r(I,null,{default:i(()=>[a("div",q,[a("div",x,[a("div",R,[a("div",V,[a("form",{onSubmit:e[11]||(e[11]=E(n=>t.handleSubmit(this.shipping.id),["prevent"]))},[r(_,null,{default:i(()=>[l(d(t.$t("edit_shipping")),1)]),_:1}),a("div",null,[r(o,null,{default:i(()=>[r(o,{class:"text-red-800 font-medium me-1"},{default:i(()=>[z]),_:1}),A]),_:1}),r(s,{type:"text",value:t.form.name,"onUpdate:value":e[0]||(e[0]=n=>t.form.name=n),placeholder:"Shipping  Name",onKeyup:e[1]||(e[1]=n=>t.validateNameInput("name",t.form.name)),onBlur:e[2]||(e[2]=n=>t.validateNameInput("name",t.form.name))},null,8,["value"]),r(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[l(d(t.errors.name),1)]),_:1})]),a("div",null,[r(o,{class:"block"},{default:i(()=>[r(o,{class:"text-red-800 font-medium me-1"},{default:i(()=>[G]),_:1}),J]),_:1}),b(a("select",{type:"text",class:"w-full rounded flex-1","onUpdate:modelValue":e[3]||(e[3]=n=>t.form.shop_id=n),onChange:e[4]||(e[4]=n=>t.validateEmptyInput("shop_id",t.form.shop_id)),onBlur:e[5]||(e[5]=n=>t.validateEmptyInput("shop_id",t.form.shop_id))},[O,(u(!0),f(P,null,B(t.shops,n=>(u(),f("option",{value:n.id,key:n.id},d(n.name),9,Q))),128))],544),[[S,t.form.shop_id]]),r(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[l(d(t.errors.shop_id),1)]),_:1})]),a("div",null,[r(o,null,{default:i(()=>[r(o,{class:"text-red-800 font-medium me-1"},{default:i(()=>[X]),_:1}),Y]),_:1}),r(s,{type:"text",value:t.form.price,"onUpdate:value":e[6]||(e[6]=n=>t.form.price=n),placeholder:"Price",onKeyup:e[7]||(e[7]=n=>t.validatePriceInput("price",t.form.price)),onBlur:e[8]||(e[8]=n=>t.validatePriceInput("price",t.form.price)),onKeypress:t.onlyNumbeWithCustom},null,8,["value","onKeypress"]),r(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[l(d(t.errors.price),1)]),_:1})]),a("div",null,[r(o,null,{default:i(()=>[Z]),_:1}),r(s,{type:"text",value:t.form.days,"onUpdate:value":e[9]||(e[9]=n=>t.form.days=n),placeholder:"Days"},null,8,["value"]),r(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[l(d(t.errors.days),1)]),_:1})]),a("div",null,[b(a("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":e[10]||(e[10]=n=>t.form.status=n)},null,512),[[N,t.form.status]]),r(o,{class:"ms-2",for:""},{default:i(()=>[tt]),_:1})]),a("div",null,[r(C,null,{default:i(()=>[et]),_:1})])],32)])])])])]),_:1})],64)}var Et=T(j,[["render",ot]]);export{Et as default};