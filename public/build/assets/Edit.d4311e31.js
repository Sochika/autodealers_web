import{d as V,Z as H,i as p,H as T,z as P,o as u,c as w,b as s,w as a,a as o,q as l,t as i,h as z,F as I,s as F,n as M,f as v,g as k,r as n}from"./app.df1b8390.js";import{b as j,g as A,P as N,a as U,d as q}from"./PsLayout.f3d182a2.js";import{P as R}from"./PsBreadcrumb2.51f0c9ee.js";import{u as Z}from"./Validators.52e283a4.js";import{P as G}from"./PsInput.a956c4eb.js";import{P as J}from"./PsLabel.220aebc7.js";import{P as K}from"./PsButton.27aa76f7.js";import{P as O}from"./PsCard.6c5ffdd2.js";import{P as Q}from"./PsIcon.aabd8ae0.js";import{P as W}from"./PsLoading.d7e2b7a9.js";import{P as X}from"./PsCheckboxValue.70fe3300.js";import{a as Y,P as ee}from"./PsActionModal.5e51fd2d.js";import{P as te}from"./PsImageUpload.52c770ee.js";import{P as se}from"./PsLabelCaption.ee5fb266.js";import{P as ae}from"./PsLabelTitle3.de17b39e.js";import{P as oe}from"./PsTextarea.33cd0e73.js";import{D as re}from"./DatePicker.4d87b72c.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsLabelHeader4.08737a41.js";import"./PsDraggable.788ff570.js";import"./main.14982862.js";import"./index.edd1d404.js";const le=V({name:"Edit",components:{Head:H,PsBreadcrumb2:R,PsImageUpload:te,PsInput:G,PsLabel:J,PsButton:K,PsLabelHeader6:j,PsCard:O,PsIcon:Q,PsLoading:W,PsCheckboxValue:X,PsActionModal:Y,PsImageIconModal:ee,PsDangerDialog:A,PsLabelCaption:se,PsLabelTitle3:ae,PsTextarea:oe,PsDropdown:N,PsDropdownSelect:U,DatePicker:re},layout:q,props:["errors","transaction","packages"],setup(e){const t=p(!1),f=p(!1),$=p(),C=p(),E=p(),b=p(),c=p(),{isEmpty:h}=Z(),d=(m,_)=>{e.errors[m]=_?"":h(m,_),m=="payment_status"&&(c.value.isError=e.errors.payment_status!="")};let g=T({package_id:e.transaction.package_id,user_id:e.transaction.user_id,status:e.transaction.status=="0"?"":String(e.transaction.status),payment_method:"offline",_method:"put"});function y(m){this.$inertia.post(route("offline_package.update",m),g,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,f.value=!0,setTimeout(()=>{f.value=!1},2e3)},onError:()=>{b.value.isError=e.errors.date_range!="",c.value.isError=e.errors.payment_status!="",t.value=!1}})}return{types:[{id:"1",name:"Approved"},{id:"2",name:"Rejected"}],date_range:b,payment_status:c,validateEmptyInput:d,handleSubmit:y,ps_action_modal:$,form:g,loading:t,success:f,ps_danger_dialog:E,ps_image_icon_modal:C}},computed:{breadcrumb(){return[{label:P("core__be_dashboard_label"),url:route("admin.index")},{label:P("offline_package_module"),url:route("offline_package.index")},{label:P("core__be_edit_offline_package"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("offline_package.index"))}}}),ie={class:"rounded-xl"},de={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},me={class:"px-4 pt-6 dark:bg-backgroundDark"},pe={class:"grid w-full sm:w-1/2 gap-6"},ue=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ce=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),_e=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),fe={class:"rounded-md shadow-xs w-56"},be={class:"pt-2 z-30"},ge=["onClick"],ye={class:"flex flex-row justify-end mb-2.5"};function ve(e,t,f,$,C,E){const b=n("Head"),c=n("ps-breadcrumb-2"),h=n("ps-label-header-6"),d=n("ps-label"),g=n("ps-input"),y=n("ps-label-caption"),D=n("ps-dropdown-select"),m=n("ps-dropdown"),_=n("ps-button"),B=n("ps-loading"),S=n("ps-icon"),x=n("ps-card"),L=n("ps-layout");return u(),w(I,null,[s(b,{title:e.$t("core__be_edit_offline_package")},null,8,["title"]),s(L,null,{default:a(()=>[s(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(x,{class:"w-full h-auto mb-20"},{default:a(()=>[o("div",ie,[o("div",de,[s(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[l(i(e.$t("core__be_package_bought_information")),1)]),_:1})]),o("div",me,[o("form",{onSubmit:t[5]||(t[5]=z(r=>e.handleSubmit(e.transaction.id),["prevent"]))},[o("div",pe,[o("div",null,[s(d,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_bought_user_label")),1),ue]),_:1}),s(g,{type:"text",value:this.transaction.user.name,"onUpdate:value":t[0]||(t[0]=r=>this.transaction.user.name=r),placeholder:e.$t("core__be_bought_user_placeholder")},null,8,["value","placeholder"])]),o("div",null,[s(d,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_select_package")),1),ce]),_:1}),l(i(e.transaction.package.value),1),s(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[l(i(e.errors.package_id),1)]),_:1})]),o("div",null,[s(d,{class:"text-base"},{default:a(()=>[l(i(e.$t("core__be_payment_status")),1),_e]),_:1}),s(m,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[s(D,{placeholder:e.$t("core__be_select_payment_status"),selectedValue:e.form.status==""?"":e.types.filter(r=>r.id==e.form.status)[0].name,onChange:t[1]||(t[1]=r=>e.validateEmptyInput("payment_status",e.form.status)),onBlur:t[2]||(t[2]=r=>e.validateEmptyInput("payment_status",e.form.status))},null,8,["placeholder","selectedValue"])]),list:a(()=>[o("div",fe,[o("div",be,[o("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:t[3]||(t[3]=r=>[e.form.status="",e.validateEmptyInput("payment_status",e.form.status)])},[s(d,{class:"text-secondary-200"},{default:a(()=>[l(i(e.$t("core__be_select_payment_status")),1)]),_:1})]),(u(!0),w(I,null,F(e.types,r=>(u(),w("div",{key:r.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:ke=>[e.form.status=r.id,e.validateEmptyInput("payment_status",e.form.status)]},[s(d,{class:M(["ms-2",r.id==e.form.status?" font-bold":""])},{default:a(()=>[l(i(r.name),1)]),_:2},1032,["class"])],8,ge))),128))])])]),_:1}),s(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[l(i(e.errors.payment_status),1)]),_:1})]),o("div",ye,[s(_,{onClick:t[4]||(t[4]=r=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:a(()=>[l(i(e.$t("core__be_btn_cancel")),1)]),_:1}),s(_,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(u(),v(B,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):k("",!0),e.success?(u(),v(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):k("",!0),e.success?(u(),v(d,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[l(i(e.$t("core__be_btn_saved")),1)]),_:1})):k("",!0),!e.loading&&!e.success?(u(),v(d,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[l(i(e.$t("core__be_btn_save")),1)]),_:1})):k("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var tt=ne(le,[["render",ve]]);export{tt as default};
