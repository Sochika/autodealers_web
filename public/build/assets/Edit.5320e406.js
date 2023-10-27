import{d as H,Z as V,H as B,i as c,z as k,o as m,c as h,b as a,w as u,a as o,q as i,t as r,h as x,f as C,g as b,F,r as s}from"./app.df1b8390.js";import{b as z,d as D}from"./PsLayout.f3d182a2.js";import{P as K}from"./PsBreadcrumb2.51f0c9ee.js";import{u as T}from"./Validators.52e283a4.js";import{P as U}from"./PsInput.a956c4eb.js";import{P as j}from"./PsLabel.220aebc7.js";import{P as q}from"./PsButton.27aa76f7.js";import{P as M}from"./PsCard.6c5ffdd2.js";import{P as N}from"./PsLoading.d7e2b7a9.js";import{P as Z}from"./PsIcon.aabd8ae0.js";import{P as A}from"./PsLabelCaption.ee5fb266.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";const J=H({name:"Edit",components:{Head:V,PsInput:U,PsLabel:j,PsButton:q,PsLabelHeader6:z,PsCard:M,PsLoading:N,PsIcon:Z,PsBreadcrumb2:K,PsLabelCaption:A},layout:D,props:["errors","fe_language_string","language"],data(){return{form:B({key:this.fe_language_string.key,value:this.fe_language_string.value,language_id:this.language.id,_method:"put"})}},setup(e){const t=c(!1),p=c(!1),_=c(),g=c(),{isEmpty:$}=T(),v=(n,d)=>{e.errors[n]=d?"":$(n,d),n=="key"&&(_.value.isError=!!Boolean(e.errors.key)),n=="value"&&(g.value.isError=!!Boolean(e.errors.value))};let f=B({key:e.fe_language_string.key,value:e.fe_language_string.value,language_id:e.language.id,id:e.fe_language_string.id,_method:"put"});function y(n){this.$inertia.post(route("fe_language_string.update",[e.language,n]),f,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,p.value=!0,setTimeout(()=>{p.value=!1,window.location.reload()},2e3)},onError:()=>{t.value=!1,_.value.isError=!!Boolean(e.errors.key),g.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:v,handleSubmit:y,loading:t,success:p,value:g,key:_,form:f}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("fe_language_module"),url:route("fe_language.index")},{label:k("fe_language_string_module"),url:route("fe_language_string.index",this.language.id)},{label:"Edit Frontend Language String",color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("fe_language_string.index",this.language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-1/2 gap-6"},X={class:"text-primary-500"},Y=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),te={class:"flex flex-row justify-end mb-2.5"},ae={key:2,class:"transition-all duration-300"},oe={key:3,class:""};function se(e,t,p,_,g,$){const v=s("Head"),f=s("ps-breadcrumb-2"),y=s("ps-label-header-6"),n=s("ps-label"),d=s("ps-input"),P=s("ps-label-caption"),E=s("ps-button"),w=s("ps-loading"),S=s("ps-icon"),I=s("ps-card"),L=s("ps-layout");return m(),h(F,null,[a(v,{title:e.$t("edit_language_string")},null,8,["title"]),a(L,null,{default:u(()=>[a(f,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(I,{class:"w-full h-auto"},{default:u(()=>[o("div",O,[o("div",Q,[a(y,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[i(r(e.$t("edit_language_string")),1)]),_:1})]),o("div",R,[o("form",{onSubmit:t[7]||(t[7]=x(l=>e.handleSubmit(this.fe_language_string.id),["prevent"]))},[o("div",W,[o("div",null,[i(r(e.$t("core__be_selected_language"))+" : ",1),o("span",X,r(e.language.name),1)]),o("div",null,[a(n,{class:"text-base mb-1"},{default:u(()=>[i(r(e.$t("core__be_key_label")),1),Y]),_:1}),a(d,{disabled:!0,type:"text",value:e.form.key,"onUpdate:value":t[0]||(t[0]=l=>e.form.key=l),placeholder:"Key",onKeyup:t[1]||(t[1]=l=>e.validateEmptyInput("key",e.form.key)),onBlur:t[2]||(t[2]=l=>e.validateEmptyInput("key",e.form.key))},null,8,["value"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[i(r(e.errors.key),1)]),_:1})]),o("div",null,[a(n,{class:"text-base mb-1"},{default:u(()=>[i(r(e.$t("core__be_value_label")),1),ee]),_:1}),a(d,{type:"text",value:e.form.value,"onUpdate:value":t[3]||(t[3]=l=>e.form.value=l),placeholder:"Value",onKeyup:t[4]||(t[4]=l=>e.validateEmptyInput("value",e.form.value)),onBlur:t[5]||(t[5]=l=>e.validateEmptyInput("value",e.form.value))},null,8,["value"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[i(r(e.errors.value),1)]),_:1})]),o("div",te,[a(E,{onClick:t[6]||(t[6]=l=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[i(r(e.$t("core__be_btn_cancel")),1)]),_:1}),a(E,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(m(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(m(),C(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(m(),h("span",ae,r(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(m(),h("span",oe,r(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ie=G(J,[["render",se]]);export{Ie as default};
