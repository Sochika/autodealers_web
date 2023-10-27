import{d as H,Z as L,i as g,H as V,z as f,o as d,c as h,b as a,w as n,a as t,q as u,t as s,h as z,f as B,g as v,F as D,r}from"./app.df1b8390.js";import{b as F,d as T}from"./PsLayout.f3d182a2.js";import{P as x}from"./PsBreadcrumb2.51f0c9ee.js";import{u as K}from"./Validators.52e283a4.js";import{P as U}from"./PsInput.a956c4eb.js";import{P as j}from"./PsLabel.220aebc7.js";import{P as q}from"./PsButton.27aa76f7.js";import{P as M}from"./PsCard.6c5ffdd2.js";import{P as N}from"./PsLoading.d7e2b7a9.js";import{P as Z}from"./PsIcon.aabd8ae0.js";import{P as A}from"./PsLabelCaption.ee5fb266.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";const J=H({name:"Create",components:{Head:L,PsInput:U,PsLabel:j,PsButton:q,PsLabelHeader6:F,PsCard:M,PsLoading:N,PsIcon:Z,PsBreadcrumb2:x,PsLabelCaption:A},layout:T,props:["errors","mobile_language"],setup(e){const o=g(!1),p=g(!1),_=g(),b=g(),{isEmpty:$}=K(),y=(i,m)=>{e.errors[i]=m?"":$(i,m),i=="key"&&(_.value.isError=!!Boolean(e.errors.key)),i=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let c=V({symbol:"",name:"",language_id:e.mobile_language.id});function k(){this.$inertia.post(route("mobile_language_string.store",e.mobile_language),c,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{o.value=!1,_.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:y,handleSubmit:k,loading:o,success:p,value:b,key:_,form:c}},computed:{breadcrumb(){return[{label:f("core__be_dashboard_label"),url:route("admin.index")},{label:f("mobile_language_module"),url:route("mobile_language.index")},{label:f("mobile_language_string_module"),url:route("mobile_language_string.index",this.mobile_language.id)},{label:f("core__be_add_mobile_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("mobile_language_string.index",this.mobile_language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-full sm:w-1/2 gap-6"},X={class:"text-primary-500"},Y=t("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=t("span",{class:"text-red-800 font-medium ms-1"},"*",-1),oe={class:"flex flex-row justify-end mb-2.5"},ae={key:2,class:"transition-all duration-300"},te={key:3,class:""};function re(e,o,p,_,b,$){const y=r("Head"),c=r("ps-breadcrumb-2"),k=r("ps-label-header-6"),i=r("ps-label"),m=r("ps-input"),P=r("ps-label-caption"),C=r("ps-button"),E=r("ps-loading"),w=r("ps-icon"),I=r("ps-card"),S=r("ps-layout");return d(),h(D,null,[a(y,{title:e.$t("core__be_add_mobile_language_string")},null,8,["title"]),a(S,null,{default:n(()=>[a(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(I,{class:"w-full h-auto"},{default:n(()=>[t("div",O,[t("div",Q,[a(k,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[u(s(e.$t("create_language_string")),1)]),_:1})]),t("div",R,[t("form",{onSubmit:o[7]||(o[7]=z(l=>e.handleSubmit(),["prevent"]))},[t("div",W,[t("div",null,[u(s(e.$t("core__be_selected_language"))+" : ",1),t("span",X,s(e.mobile_language.name),1)]),t("div",null,[a(i,{class:"text-base mb-1"},{default:n(()=>[u(s(e.$t("core__be_key_label")),1),Y]),_:1}),a(m,{type:"text",value:e.form.key,"onUpdate:value":o[0]||(o[0]=l=>e.form.key=l),placeholder:e.$t("core__be_key_placeholder"),onKeyup:o[1]||(o[1]=l=>e.validateEmptyInput("key",e.form.key)),onBlur:o[2]||(o[2]=l=>e.validateEmptyInput("key",e.form.key))},null,8,["value","placeholder"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[u(s(e.errors.key),1)]),_:1})]),t("div",null,[a(i,{class:"text-base mb-1"},{default:n(()=>[u(s(e.$t("core__be_value_label")),1),ee]),_:1}),a(m,{type:"text",value:e.form.value,"onUpdate:value":o[3]||(o[3]=l=>e.form.value=l),placeholder:e.$t("core__be_value_placeholder"),onKeyup:o[4]||(o[4]=l=>e.validateEmptyInput("value",e.form.value)),onBlur:o[5]||(o[5]=l=>e.validateEmptyInput("value",e.form.value))},null,8,["value","placeholder"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[u(s(e.errors.value),1)]),_:1})]),t("div",oe,[a(C,{onClick:o[6]||(o[6]=l=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[u(s(e.$t("core__be_btn_cancel")),1)]),_:1}),a(C,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(d(),B(E,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(d(),B(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(d(),h("span",ae,s(e.$t("core__be_btn_saved")),1)):v("",!0),!e.loading&&!e.success?(d(),h("span",te,s(e.$t("core__be_btn_save")),1)):v("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Se=G(J,[["render",re]]);export{Se as default};