import{d as B,Z as D,p as L,i as g,H as E,z as x,o as l,c as H,b as r,w as s,a as i,q as d,t as m,h as T,f as c,g as u,F as I,r as o}from"./app.df1b8390.js";import{d as N}from"./PsLayout.f3d182a2.js";import{u as V}from"./Validators.52e283a4.js";import{P as z}from"./PsInput.a956c4eb.js";import{P as F}from"./PsLabel.220aebc7.js";import{P as j}from"./PsButton.27aa76f7.js";import{P as q}from"./PsTextarea.33cd0e73.js";import{P as M}from"./PsLabelHeader4.08737a41.js";import{P as U}from"./PsIcon.aabd8ae0.js";import{P as Z}from"./PsLoading.d7e2b7a9.js";import{P as A}from"./PsBreadcrumb2.51f0c9ee.js";import{P as G}from"./PsLabelCaption.ee5fb266.js";import{P as J}from"./PsLabelTitle3.de17b39e.js";import{P as K}from"./PsImageUpload.52c770ee.js";import{E as O}from"./Editor.40616445.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsDraggable.788ff570.js";import"./ckeditor.a83a7804.js";const R=B({name:"Edit",components:{Head:D,PsInput:z,PsLabel:F,PsButton:j,PsTextarea:q,PsLabelHeader4:M,PsIcon:U,PsLoading:Z,PsBreadcrumb2:A,Link:L,PsLabelCaption:G,PsLabelTitle3:J,PsImageUpload:K,Editor:O},layout:N,props:["errors"],setup(e){const a=g(!1),p=g(!1);let _=E({content:""});const{isEmail:k}=V(),h=(t,n)=>{e.errors[t]=n?k(t,n):""},b=t=>{let n=t.keyCode?t.keyCode:t.which;(n<48||n>57)&&t.preventDefault()};function f(){this.$inertia.get(route("data_deletion_policy.index"))}function y(){this.$inertia.post(route("data_deletion_policy.store"),_,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{a.value=!1}})}return{validateContentInput:h,handleCancel:f,onlyNumber:b,form:_,handleSubmit:y,loading:a,success:p}},computed:{breadcrumb(){return[{label:x("core__be_dashboard_label"),url:route("admin.index")},{label:x("data_deletion_policy_module"),color:"text-primary-500"}]}}}),W={class:"rounded-xl"},X={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Y={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"px-4 py-3"},te={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function oe(e,a,p,_,k,h){const b=o("Head"),f=o("ps-breadcrumb-2"),y=o("ps-label-header-6"),t=o("ps-label"),n=o("editor"),P=o("ps-button"),C=o("ps-loading"),w=o("ps-icon"),$=o("ps-card"),S=o("ps-layout");return l(),H(I,null,[r(b,{title:e.$t("create_data_deletion_policy")},null,8,["title"]),r(S,null,{default:s(()=>[r(f,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r($,{class:"w-full h-auto"},{default:s(()=>[i("div",W,[i("div",X,[r(y,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[d(m(e.$t("core__be_data_deletion_policy")),1)]),_:1})]),i("div",Y,[i("form",{onSubmit:a[1]||(a[1]=T((...v)=>e.handleSubmit&&e.handleSubmit(...v),["prevent"]))},[i("div",ee,[r(t,{class:"text-base mb-1"},{default:s(()=>[d(m(e.$t("core__be_content")),1)]),_:1}),r(n,{class:"dark:bg-secondaryDark-black"})]),i("div",te,[r(P,{onClick:a[0]||(a[0]=v=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[d(m(e.$t("core__be_btn_cancel")),1)]),_:1}),r(P,{class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(l(),c(C,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):u("",!0),e.success?(l(),c(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):u("",!0),e.success?(l(),c(t,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[d(m(e.$t("core__be_btn_saved")),1)]),_:1})):u("",!0),!e.loading&&!e.success?(l(),c(t,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[d(m(e.$t("core__be_btn_save")),1)]),_:1})):u("",!0)]),_:1})])],32)])])]),_:1})]),_:1})],64)}var Te=Q(R,[["render",oe]]);export{Te as default};