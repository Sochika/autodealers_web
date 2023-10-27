import{d as B,Z as D,H as E,i as $,z as w,o as c,c as L,b as o,w as a,a as l,q as s,t as n,h as V,f,g as v,F as H,r as t}from"./app.df1b8390.js";import{b as z,d as F}from"./PsLayout.f3d182a2.js";import{u as T}from"./Validators.52e283a4.js";import{P as I}from"./PsInput.a956c4eb.js";import{P as N}from"./PsLabel.220aebc7.js";import{P as U}from"./PsButton.27aa76f7.js";import{P as j}from"./PsTextarea.33cd0e73.js";import{P as q}from"./PsLabelHeader4.08737a41.js";import{P as M}from"./PsLabelCaption.ee5fb266.js";import{E as Z}from"./Editor.40616445.js";import{P as A}from"./PsBreadcrumb2.51f0c9ee.js";import{P as G}from"./PsIcon.aabd8ae0.js";import{P as J}from"./PsLoading.d7e2b7a9.js";import{P as K}from"./PsLink1.5181e506.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./ckeditor.a83a7804.js";const Q=B({name:"Create",components:{Head:D,Editor:Z,PsIcon:G,PsLoading:J,PsInput:I,PsLabel:N,PsButton:U,PsTextarea:j,PsLabelHeader4:q,PsLabelCaption:M,PsBreadcrumb2:A,PsLabelHeader6:z,PsLink1:K},layout:F,props:["errors","privacy_policy","domain","dir"],setup(e){let r=E({content:e.privacy_policy.content,_method:"put"});const p=$(!1),u=$(!1),{isEmpty:g}=T();let k=e.domain,_=e.dir,d="";_?d=k+_+"/":d=k;const h=d+"app_content/privacy",i=(b,m)=>{e.errors[b]=m?"":g(b,m)};function P(){this.$inertia.post(route("privacy_policy.update"),r,{forceFormData:!0,onBefore:()=>{p.value=!0},onSuccess:()=>{p.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{p.value=!1}})}return{validateEmptyInput:i,form:r,handleSubmit:P,loading:p,success:u,privacyurl:h}},computed:{breadcrumb(){return[{label:w("core__be_dashboard_label"),url:route("admin.index")},{label:w("privacy_policy_module"),color:"text-primary-500"}]}}}),R={class:"w-full mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},W={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},X={class:"px-4 py-3"},Y={class:"px-4 py-3"},ee=l("br",null,null,-1),oe={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function te(e,r,p,u,g,k){const _=t("Head"),d=t("ps-breadcrumb-2"),h=t("ps-label-header-6"),i=t("ps-label"),P=t("editor"),b=t("ps-link-1"),m=t("ps-button"),x=t("ps-loading"),C=t("ps-icon"),S=t("ps-layout");return c(),L(H,null,[o(_,{title:e.$t("privacy_policy_module")},null,8,["title"]),o(S,null,{default:a(()=>[o(d,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l("div",R,[l("div",W,[o(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy")),1)]),_:1})]),l("form",{onSubmit:r[2]||(r[2]=V((...y)=>e.handleSubmit&&e.handleSubmit(...y),["prevent"]))},[l("div",X,[o(i,{class:"text-base"},{default:a(()=>[s(n(e.$t("core__be_content")),1)]),_:1}),o(P,{class:"dark:bg-secondaryDark:black",modelValue:e.form.content,"onUpdate:modelValue":r[0]||(r[0]=y=>e.form.content=y),url:"privacy_policy/ckupload"},null,8,["modelValue"])]),l("div",Y,[o(i,{class:"text-base mb-1"},{default:a(()=>[s(n(e.$t("core__be_privacy_policy_url")),1)]),_:1}),o(b,{target:"_blank",url:e.privacyurl,textColor:"text-blue-500"},{default:a(()=>[s(n(e.privacyurl),1)]),_:1},8,["url"]),ee]),l("div",oe,[o(m,{onClick:r[1]||(r[1]=y=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[s(n(e.$t("core__be_btn_cancel")),1)]),_:1}),o(m,{disabled:!e.privacy_policy.authorizations.update,class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(c(),f(x,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(c(),f(C,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(c(),f(i,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_saved")),1)]),_:1})):v("",!0),!e.loading&&!e.success?(c(),f(i,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(n(e.$t("core__be_btn_save")),1)]),_:1})):v("",!0)]),_:1},8,["disabled"])])],32)])]),_:1})],64)}var Le=O(Q,[["render",te]]);export{Le as default};