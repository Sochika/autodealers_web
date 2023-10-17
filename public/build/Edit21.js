import{d as x,H as B,i as _,R as S,J as d,r as o,o as m,c as k,b as a,w as r,a as s,p as b,t as n,h as D,f as I,g as f,F as L}from"./app.js";import{b as F,d as V}from"./PsLayout.js";import{P as N}from"./PsBreadcrumb2.js";import{u as T}from"./Validators.js";import{P as j}from"./PsInput.js";import{P as J}from"./PsLabel.js";import{P as K}from"./PsButton.js";import{P as M}from"./PsCard.js";import{P as R}from"./PsLoading.js";import{P as U}from"./PsIcon.js";import{P as q}from"./PsLabelCaption.js";import{_ as A}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";const G=x({name:"Edit",components:{Head:B,PsInput:j,PsLabel:J,PsButton:K,PsLabelHeader6:F,PsCard:M,PsLoading:R,PsIcon:U,PsBreadcrumb2:N,PsLabelCaption:q},layout:V,props:["errors","customizeHeader","customizeDetail","tableId"],setup(e){const t=_(!1),u=_(!1),g=_(),v=_(),{isEmpty:P}=T(),y=(l,c)=>{e.errors[l]=c?"":P(l,c),l=="name"&&(v.value.isError=e.errors.name!="")};let p=S({tableId:e.tableId,core_keys_id:e.customizeHeader.core_keys_id,name:e.customizeDetail.name,_method:"put"});function h(){this.$inertia.post(route("attribute.update",[e.tableId,e.customizeHeader.core_keys_id,e.customizeDetail.id]),p,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{g.value.isError=e.errors.key!="",value.value.isError=e.errors.value!="",t.value=!1}})}return{validateEmptyInput:y,handleSubmit:h,loading:t,success:u,name:v,form:p}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("table_setting_group"),url:route("table.index")},{label:d("core__be_fields_label"),url:route("tables.fields.index",this.tableId)},{label:d("core__be_attribute_label"),url:route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id])},{label:d("core__edit_attribute"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id]))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},W={class:"px-4 pt-6 dark:bg-backgroundDark"},X={class:"grid w-full sm:w-1/2 gap-6"},Y=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Z={class:"flex flex-row justify-end mb-2.5"},ee={key:2,class:"transition-all duration-300"},te={key:3,class:""};function oe(e,t,u,g,v,P){const y=o("Head"),p=o("ps-breadcrumb-2"),h=o("ps-label-header-6"),l=o("ps-label"),c=o("ps-input"),C=o("ps-label-caption"),$=o("ps-button"),E=o("ps-loading"),w=o("ps-icon"),z=o("ps-card"),H=o("ps-layout");return m(),k(L,null,[a(y,{title:e.$t("core__edit_attribute")},null,8,["title"]),a(H,null,{default:r(()=>[a(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(z,{class:"w-full h-auto"},{default:r(()=>[s("div",O,[s("div",Q,[a(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[b(n(e.$t("core__edit_attribute")),1)]),_:1})]),s("div",W,[s("form",{onSubmit:t[4]||(t[4]=D(i=>e.handleSubmit(),["prevent"]))},[s("div",X,[s("div",null,[a(l,{class:"text-base mb-2"},{default:r(()=>[b(n(e.$t("core__api_token_label")),1),Y]),_:1}),a(c,{type:"text",value:e.form.name,"onUpdate:value":t[0]||(t[0]=i=>e.form.name=i),placeholder:e.$t("core__api_token_placeholder"),onKeyup:t[1]||(t[1]=i=>e.validateEmptyInput("name",e.form.name)),onBlur:t[2]||(t[2]=i=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),a(C,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[b(n(e.errors.name),1)]),_:1})]),s("div",Z,[a($,{onClick:t[3]||(t[3]=i=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[b(n(e.$t("core__be_btn_cancel")),1)]),_:1}),a($,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(m(),I(E,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(m(),I(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(m(),k("span",ee,n(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(m(),k("span",te,n(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var we=A(G,[["render",oe]]);export{we as default};