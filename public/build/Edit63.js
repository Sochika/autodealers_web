import{d as z,H as K,i as u,R as D,J as d,r as a,Q as j,o as f,c as B,b as t,w as r,a as i,p as s,t as l,h as A,m as J,f as g,g as h,F as N}from"./app.js";import{b as Q,g as R,P as q,a as G,d as O}from"./PsLayout.js";import{P as W}from"./PsBreadcrumb2.js";import{u as X}from"./Validators.js";import{P as Y}from"./PsInput.js";import{P as Z}from"./PsLabel.js";import{P as ee}from"./PsButton.js";import{P as oe}from"./PsCard.js";import{P as te}from"./PsIcon.js";import{P as ae}from"./PsLoading.js";import{P as re}from"./PsCheckboxValue.js";import{a as ne,P as se}from"./PsActionModal.js";import{P as le}from"./PsImageUpload.js";import{P as ie}from"./PsLabelCaption.js";import{P as pe}from"./PsLabelTitle3.js";import{P as de}from"./PsTextarea.js";import{_ as me}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";import"./PsLabelHeader4.js";import"./PsDraggable.js";const _e=z({name:"Edit",components:{Head:K,PsBreadcrumb2:W,PsImageUpload:le,PsInput:Y,PsLabel:Z,PsButton:ee,PsLabelHeader6:Q,PsCard:oe,PsIcon:te,PsLoading:ae,PsCheckboxValue:re,PsActionModal:ne,PsImageIconModal:se,PsDangerDialog:R,PsLabelCaption:ie,PsLabelTitle3:pe,PsTextarea:de,PsDropdown:q,PsDropdownSelect:G},layout:O,props:["errors","offlinePayment"],setup(e){const o=u(!1),c=u(!1),$=u(),w=u(),C=u(),v=u(),P=u(),{isEmpty:E}=X(),m=(p,_)=>{e.errors[p]=_?"":E(p,_),p=="title"&&(v.value.isError=e.errors.title!=""),p=="description"&&(P.value.isError=e.errors.description!="")};let k=D({title:e.offlinePayment.core_key.name,description:e.offlinePayment.value,core_keys_id:e.offlinePayment.core_keys_id,icon:"",status:e.offlinePayment.status_attribute.attribute_value==1,_method:"put"});function b(p){this.$inertia.post(route("offline_payment_setting.update",p),k,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{v.value.isError=e.errors.title!="",P.value.isError=e.errors.description!="",o.value=!1}})}function I(p){$.value.openModal(d("conf_modal_label"),d("core__be_replace_icon_label"),d("core__be_remove_icon_label"),"image","trash","24","24",()=>{w.value.openModal(d("core__be_upload_photo"),"cloudUpload",_=>{let y=D({image:_,_method:"put"});this.$inertia.post(route("image.replace",p),y)})},()=>{C.value.openModal(d("core__be_remove_icon_label"),d("core__be_are_u_sure_remove_icon"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",p),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,c.value=!0,setTimeout(()=>{c.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateEmptyInput:m,handleSubmit:b,ps_action_modal:$,form:k,loading:o,success:c,ps_danger_dialog:C,ps_image_icon_modal:w,replaceImageClicked:I}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("offline_payment_setting_module"),url:route("offline_payment_setting.index")},{label:d("payment__be_edit_offline_payment_setting"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("offline_payment_setting.index"))}}}),ue={class:"rounded-xl"},fe={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},ce={class:"px-4 pt-6 dark:bg-backgroundDark"},be={class:"grid w-full sm:w-1/2 gap-6"},ye=i("span",{class:"text-red-500 ms-1"},"*",-1),ge={key:0,class:"flex items-end pt-4"},ve={class:"w-48 h-48",alt:"offline payment icon"},Pe={class:"flex flex-row justify-end mb-2.5"};function ke(e,o,c,$,w,C){const v=a("Head"),P=a("ps-breadcrumb-2"),E=a("ps-label-header-6"),m=a("ps-label"),k=a("ps-input"),b=a("ps-label-caption"),I=a("ps-textarea"),p=a("ps-label-title-3"),_=a("ps-icon"),y=a("ps-button"),U=a("ps-image-icon-modal"),F=a("ps-action-modal"),S=a("ps-danger-dialog"),L=a("ps-image-upload"),M=a("ps-checkbox-value"),T=a("ps-loading"),H=a("ps-card"),V=a("ps-layout"),x=j("lazy");return f(),B(N,null,[t(v,{title:e.$t("payment__be_edit_offline_payment_setting")},null,8,["title"]),t(V,null,{default:r(()=>[t(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(H,{class:"w-full h-auto"},{default:r(()=>[i("div",ue,[i("div",fe,[t(E,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[s(l(e.$t("payment__be_offline_payment_info")),1)]),_:1})]),i("div",ce,[i("form",{onSubmit:o[10]||(o[10]=A(n=>e.handleSubmit(e.offlinePayment.id),["prevent"]))},[i("div",be,[i("div",null,[t(m,{class:"text-base"},{default:r(()=>[s(l(e.$t("payment__be_offline_pmt_title")),1),ye]),_:1}),t(k,{ref:"title",type:"text",value:e.form.title,"onUpdate:value":o[0]||(o[0]=n=>e.form.title=n),placeholder:"$t('payment__be_offline_pmt_title')",onKeyup:o[1]||(o[1]=n=>e.validateEmptyInput("title",e.form.title)),onBlur:o[2]||(o[2]=n=>e.validateEmptyInput("title",e.form.title))},null,8,["value"]),t(b,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:r(()=>[s(l(e.errors.title),1)]),_:1})]),i("div",null,[t(m,{class:"text-base"},{default:r(()=>[s(l(e.$t("payment__be_offline_pmt_desc")),1)]),_:1}),t(I,{ref:"description",rows:"4",value:e.form.description,"onUpdate:value":o[3]||(o[3]=n=>e.form.description=n),placeholder:e.$t("payment__be_offline_pmt_desc"),onKeyup:o[4]||(o[4]=n=>e.validateEmptyInput("description",e.form.description)),onBlur:o[5]||(o[5]=n=>e.validateEmptyInput("description",e.form.description))},null,8,["value","placeholder"]),t(b,{textColor:"text-red-500 text-xs",class:"mt-2 block"},{default:r(()=>[s(l(e.errors.description),1)]),_:1})]),i("div",null,[t(m,null,{default:r(()=>[s(l(e.$t("payment__be_offline_pmt_icon")),1)]),_:1}),t(p,null,{default:r(()=>[s(l(e.$t("core__be_recommended_size_200_200")),1)]),_:1}),e.offlinePayment.offline_icon?(f(),B("div",ge,[J(i("img",ve,null,512),[[x,{src:e.$page.props.uploadUrl+"/"+e.offlinePayment.offline_icon.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t(y,{type:"button",onClick:o[6]||(o[6]=n=>e.replaceImageClicked(e.offlinePayment.offline_icon.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[t(_,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),t(U,{ref:"ps_image_icon_modal"},null,512),t(F,{ref:"ps_action_modal"},null,512),t(S,{ref:"ps_danger_dialog"},null,512)])):(f(),g(L,{key:1,uploadType:"icon",imageFile:e.form.icon,"onUpdate:imageFile":o[7]||(o[7]=n=>e.form.icon=n)},null,8,["imageFile"])),t(b,{textColor:"text-red-500 block"},{default:r(()=>[s(l(e.errors.icon),1)]),_:1})]),i("div",null,[t(m,{class:"text-base mb-2"},{default:r(()=>[s(l(e.$t("payment__be_status")),1)]),_:1}),t(M,{value:e.form.status,"onUpdate:value":o[8]||(o[8]=n=>e.form.status=n),title:"Publish"},null,8,["value"])]),i("div",Pe,[t(y,{onClick:o[9]||(o[9]=n=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:r(()=>[s(l(e.$t("core__be_btn_cancel")),1)]),_:1}),t(y,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(f(),g(T,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):h("",!0),e.success?(f(),g(_,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):h("",!0),e.success?(f(),g(m,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[s(l(e.$t("core__be_btn_saved")),1)]),_:1})):h("",!0),!e.loading&&!e.success?(f(),g(m,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[s(l(e.$t("core__be_btn_save")),1)]),_:1})):h("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ze=me(_e,[["render",ke]]);export{Ze as default};
