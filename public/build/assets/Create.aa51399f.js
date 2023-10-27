import{d as E,Z as H,i as k,H as J,z as P,o as m,c as v,b as t,w as s,a,q as i,t as r,h as N,F as T,s as F,f as g,g as _,r as n}from"./app.df1b8390.js";import{b as U,d as V}from"./PsLayout.f3d182a2.js";import{P as z}from"./PsBreadcrumb2.51f0c9ee.js";import{u as M}from"./Validators.52e283a4.js";import{P as q}from"./PsInput.a956c4eb.js";import{P as K}from"./PsLabel.220aebc7.js";import{P as Z}from"./PsButton.27aa76f7.js";import{P as A}from"./PsCard.6c5ffdd2.js";import{P as G}from"./PsLoading.d7e2b7a9.js";import{P as O}from"./PsIcon.aabd8ae0.js";import{J as Q}from"./Checkbox.ed3f24fb.js";import{P as R}from"./PsLabelCaption.ee5fb266.js";import{P as W}from"./PsLabelTitle3.de17b39e.js";import{P as X}from"./PsImageUpload.52c770ee.js";import{J as Y}from"./DialogModal.889a171c.js";import{_ as ee}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsDraggable.788ff570.js";import"./Modal.f80a173b.js";const oe=E({name:"Create",components:{Head:H,PsBreadcrumb2:z,PsInput:q,PsLabel:K,PsButton:Z,PsLabelHeader6:U,PsCard:A,PsLoading:G,PsIcon:O,JetCheckbox:Q,PsLabelCaption:R,PsLabelTitle3:W,PsImageUpload:X,JetDialogModal:Y},layout:V,props:["errors","availablePermissions"],setup(e){const o=k(!1),c=k(!1),C=k(!1),b=k(),{isEmpty:w,minLength:y}=M(),h=(d,u)=>{e.errors[d]=u?y(d,u,3):w(d,u),d=="name"&&(b.value.isError=e.errors.name!="")};let f=J({name:"",permissions:[]});function p(){this.$inertia.post(route("api_token.store"),f,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{this.displayingToken=!0,o.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{b.value.isError=e.errors.name!="",o.value=!1}})}return{validateNameInput:h,handleSubmit:p,form:f,loading:o,success:c,name:b,displayingToken:C}},computed:{breadcrumb(){return[{label:P("core__be_dashboard_label"),url:route("admin.index")},{label:P("api_tokens_module"),url:route("api_token.index")},{label:P("core__create_api_token"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("api_token.index"))}}}),te={class:"rounded-xl"},se={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},re={class:"grid w-full sm:w-1/2 gap-6"},ne=a("span",{class:"text-red-500 ms-1"},"*",-1),le={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},ie={class:"flex items-center"},me={class:"ms-2 text-sm text-gray-600"},pe={class:"flex flex-row justify-end mb-2.5"},de={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 mb-4"};function ue(e,o,c,C,b,w){const y=n("Head"),h=n("ps-breadcrumb-2"),f=n("ps-label-header-6"),p=n("ps-label"),d=n("ps-input"),u=n("ps-label-caption"),B=n("jet-checkbox"),$=n("ps-button"),L=n("ps-loading"),j=n("ps-icon"),S=n("jet-dialog-modal"),x=n("ps-card"),D=n("ps-layout");return m(),v(T,null,[t(y,{title:e.$t("core__create_api_token")},null,8,["title"]),t(D,null,{default:s(()=>[t(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(x,{class:"w-full h-auto"},{default:s(()=>[a("div",te,[a("div",se,[t(f,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[i(r(e.$t("core__create_api_token")),1)]),_:1})]),a("div",ae,[a("form",{onSubmit:o[5]||(o[5]=N((...l)=>e.handleSubmit&&e.handleSubmit(...l),["prevent"]))},[a("div",re,[a("div",null,[t(p,{class:"mt-0.5 mb-1.5"},{default:s(()=>[i(r(e.$t("core__be_api_token_authenticate")),1)]),_:1})]),a("div",null,[t(p,{class:"text-base mb-2"},{default:s(()=>[i(r(e.$t("core__api_token_label")),1),ne]),_:1}),t(d,{ref:"name",type:"text",value:e.form.name,"onUpdate:value":o[0]||(o[0]=l=>e.form.name=l),placeholder:e.$t("core__api_token_placeholder"),onKeyup:o[1]||(o[1]=l=>e.validateNameInput("name",e.form.name)),onBlur:o[2]||(o[2]=l=>e.validateNameInput("name",e.form.name))},null,8,["value","placeholder"]),t(u,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(r(e.errors.name),1)]),_:1})]),a("div",null,[t(p,{class:"text-base mb-2"},{default:s(()=>[i(r(e.$t("core__be_permissions")),1)]),_:1}),a("div",le,[(m(!0),v(T,null,F(e.availablePermissions,l=>(m(),v("div",{key:l},[a("label",ie,[t(B,{value:l,checked:e.form.permissions,"onUpdate:checked":o[3]||(o[3]=I=>e.form.permissions=I)},null,8,["value","checked"]),a("span",me,r(l),1)])]))),128))])]),a("div",pe,[t($,{onClick:o[4]||(o[4]=l=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:s(()=>[i(r(e.$t("core__be_btn_cancel")),1)]),_:1}),t($,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(m(),g(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(m(),g(j,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(m(),g(p,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(r(e.$t("core__be_btn_saved")),1)]),_:1})):_("",!0),!e.loading&&!e.success?(m(),g(p,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(r(e.$t("core__be_btn_save")),1)]),_:1})):_("",!0)]),_:1})])])],32),t(S,{show:e.displayingToken,onClose:o[7]||(o[7]=l=>e.displayingToken=!1)},{title:s(()=>[i(r(e.$t("core__be_api_token")),1)]),content:s(()=>[a("div",null,r(e.$t("core__be_api_token_copy_one")),1),e.$page.props.jetstream.flash.token?(m(),v("div",de,r(e.$page.props.jetstream.flash.token),1)):_("",!0)]),footer:s(()=>[t($,{onClick:o[6]||(o[6]=l=>e.displayingToken=!1)},{default:s(()=>[i(r(e.$t("core__be_close_btn")),1)]),_:1})]),_:1},8,["show"])])])]),_:1})]),_:1})],64)}var qe=ee(oe,[["render",ue]]);export{qe as default};
