import{d as K,H as L,R as E,i as v,J as k,r as a,o as u,c as S,b as r,w as n,a as i,p as m,t as d,h as H,f as P,g as h,F}from"./app.js";import{b as T,d as V}from"./PsLayout.js";import{P as N}from"./PsBreadcrumb2.js";import{u as U}from"./Validators.js";import{P as j}from"./PsInput.js";import{P as z}from"./PsLabel.js";import{P as J}from"./PsButton.js";import{P as M}from"./PsCard.js";import{P as R}from"./PsLoading.js";import{P as q}from"./PsIcon.js";import{P as A}from"./PsLabelCaption.js";import{P as G}from"./PsTextarea.js";import{P as O}from"./PsCheckboxValue.js";import{P as Q}from"./PsDataTable.js";import{_ as W}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";import"./PsTableSearch.js";import"./moment.js";const X=K({name:"Create",components:{Head:L,PsInput:j,PsLabel:z,PsButton:J,PsLabelHeader6:T,PsCard:M,PsLoading:R,PsIcon:q,PsBreadcrumb2:N,PsLabelCaption:A,PsTextarea:G,PsCheckboxValue:O,PsDataTable:Q},layout:V,props:["errors","coreKey","payment_id"],data(){return{form:E({name:"",code:"",description:""})}},setup(e){const t=v(!1),c=v(!1),_=v(),b=v(),{isEmpty:$,minLength:g}=U(),C=(o,l)=>{e.errors[o]=l?g(o,l,3):$(o,l),o=="name"&&(_.value.isError=e.errors.name!="")},w=(o,l)=>{e.errors[o]=l?"":$(o,l),o=="description"&&(b.value.isError=e.errors.description!="")};let p=E({name:e.coreKey.name,description:e.coreKey.description,_method:"put"});function B(o){this.$inertia.post(route("payment_core_key.update",[e.payment_id,o]),p,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{_.value.isError=e.errors.name!="",b.value.isError=e.errors.description!="",t.value=!1}})}function f(){this.$inertia.get(route("payment.edit",e.payment_id))}function D(o){this.$inertia.get(route("payment_core_key.edit",e.payment_id,o))}const y=[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("payment_module"),url:route("payment.index")},{label:k("payment__be_edit_payment"),url:route("payment.edit",e.payment_id)},{label:k("payment__be_edit_key"),color:"text-primary-500"}];return{handleEdit:D,handleCancel:f,breadcrumb:y,description:b,name:_,validateDescriptionInput:w,validateNameInput:C,handleSubmit:B,form:p,loading:t,success:c}}}),Y={class:"rounded-xl"},Z={class:"bg-primary-50 py-2.5 ps-4"},ee={class:"px-4 pt-6 dark:bg-backgroundDark"},te={class:"grid w-full sm:w-1/2 gap-6"},oe=i("span",{class:"text-red-500 ms-1"},"*",-1),re={class:"flex flex-row justify-end mb-2.5"};function ae(e,t,c,_,b,$){const g=a("Head"),C=a("ps-breadcrumb-2"),w=a("ps-label-header-6"),p=a("ps-label"),B=a("ps-input"),f=a("ps-label-caption"),D=a("ps-textarea"),y=a("ps-button"),o=a("ps-loading"),l=a("ps-icon"),I=a("ps-card"),x=a("ps-layout");return u(),S(F,null,[r(g,{title:e.$t("payment__be_edit_key")},null,8,["title"]),r(x,null,{default:n(()=>[r(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(I,{class:"w-full h-auto"},{default:n(()=>[i("div",Y,[i("div",Z,[r(w,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[m(d(e.$t("payment__be_key_info")),1)]),_:1})]),i("div",ee,[i("form",{onSubmit:t[7]||(t[7]=H(s=>e.handleSubmit(this.coreKey.id),["prevent"]))},[i("div",te,[i("div",null,[r(p,{class:"text-base"},{default:n(()=>[m(d(e.$t("payment__be_key_name")),1),oe]),_:1}),r(B,{ref:"name",type:"text",value:e.form.name,"onUpdate:value":t[0]||(t[0]=s=>e.form.name=s),placeholder:e.$t("payment__be_key_name"),onKeyup:t[1]||(t[1]=s=>e.validateNameInput("name",e.form.name)),onBlur:t[2]||(t[2]=s=>e.validateNameInput("name",e.form.name))},null,8,["value","placeholder"]),r(f,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[m(d(e.errors.name),1)]),_:1})]),i("div",null,[r(p,{class:"text-base"},{default:n(()=>[m(d(e.$t("payment__be_key_desc")),1)]),_:1}),r(D,{ref:"description",rows:"4",value:e.form.description,"onUpdate:value":t[3]||(t[3]=s=>e.form.description=s),placeholder:e.$t("payment__be_key_desc"),onKeyup:t[4]||(t[4]=s=>e.validateDescriptionInput("description",e.form.description)),onBlur:t[5]||(t[5]=s=>e.validateDescriptionInput("description",e.form.description))},null,8,["value","placeholder"]),r(f,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[m(d(e.errors.description),1)]),_:1})]),i("div",re,[r(y,{onClick:t[6]||(t[6]=s=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:n(()=>[m(d(e.$t("core__be_btn_cancel")),1)]),_:1}),r(y,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(u(),P(o,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.success?(u(),P(l,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):h("",!0),e.success?(u(),P(p,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[m(d(e.$t("core__be_btn_saved")),1)]),_:1})):h("",!0),!e.loading&&!e.success?(u(),P(p,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[m(d(e.$t("core__be_btn_save")),1)]),_:1})):h("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var He=W(X,[["render",ae]]);export{He as default};