import{b as $,g,d as k}from"./PsLayout.f3d182a2.js";import{d as C,Z as w,H as U,z as p,o as L,c as B,b as o,w as t,a,q as n,t as u,F as H,r as s}from"./app.df1b8390.js";import{P as D}from"./PsBreadcrumb2.51f0c9ee.js";import{P as I}from"./PsInput.a956c4eb.js";import{P as T}from"./PsLabel.220aebc7.js";import{P as V}from"./PsButton.27aa76f7.js";import{P as E}from"./PsCard.6c5ffdd2.js";import{P as M}from"./PsIcon.aabd8ae0.js";import{P as N}from"./PsLoading.d7e2b7a9.js";import{P as S}from"./PsCheckboxValue.70fe3300.js";import{a as F,P as j}from"./PsActionModal.5e51fd2d.js";import{P as q}from"./PsLabelCaption.ee5fb266.js";import{P as z}from"./PsLabelTitle3.de17b39e.js";import{P as A}from"./PsTextarea.33cd0e73.js";import R from"./RoleCheckbox.b14097c5.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsLabelHeader4.08737a41.js";import"./PsDraggable.788ff570.js";const G=C({name:"Edit",components:{Head:w,PsBreadcrumb2:D,PsInput:I,PsLabel:T,PsButton:V,PsLabelHeader6:$,PsCard:E,PsIcon:M,PsLoading:N,PsCheckboxValue:S,PsActionModal:F,PsImageIconModal:j,PsDangerDialog:g,PsLabelCaption:q,PsLabelTitle3:z,PsTextarea:A,RoleCheckbox:R},layout:k,props:["errors","user"],setup(e){let r=U({name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,user_address:e.user.user_address,user_about_me:e.user.user_about_me,role_id:e.user.role.name,permissions:""});function i({data:_}){r.permissions=_.toString()}return{handleUserMultiSelect:i,form:r}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("buyer_report_module"),url:route("buyer_report.index")},{label:p("core__be_buyer_details"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("buyer_report.index"))}}}),J={class:"rounded-xl"},K={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},O={class:"px-4 pt-6 dark:bg-backgroundDark"},Q={class:"grid w-full sm:w-1/2 gap-6"},W={class:"mb-2.5 flex flex-row justify-end"};function X(e,r,i,_,Y,x){const f=s("Head"),c=s("ps-breadcrumb-2"),v=s("ps-label-header-6"),d=s("ps-label"),m=s("ps-input"),b=s("ps-textarea"),P=s("ps-button"),y=s("ps-card"),h=s("ps-layout");return L(),B(H,null,[o(f,{title:e.$t("core__be_buyer_details")},null,8,["title"]),o(h,null,{default:t(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(y,{class:"w-full h-auto"},{default:t(()=>[a("div",J,[a("div",K,[o(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:t(()=>[n(u(e.$t("core__be_buyer_info_lbl")),1)]),_:1})]),a("div",O,[a("form",null,[a("div",Q,[a("div",null,[o(d,null,{default:t(()=>[n(u(e.$t("user_name_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":r[0]||(r[0]=l=>e.form.name=l),placeholder:e.$t("user_name_label")},null,8,["value","placeholder"])]),a("div",null,[o(d,null,{default:t(()=>[n(u(e.$t("email_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.email,"onUpdate:value":r[1]||(r[1]=l=>e.form.email=l),placeholder:e.$t("email_label")},null,8,["value","placeholder"])]),a("div",null,[o(d,null,{default:t(()=>[n(u(e.$t("phone_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.user_phone,"onUpdate:value":r[2]||(r[2]=l=>e.form.user_phone=l),placeholder:e.$t("phone_label")},null,8,["value","placeholder"])]),a("div",null,[o(d,null,{default:t(()=>[n(u(e.$t("core__be_address_label")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_address,"onUpdate:value":r[3]||(r[3]=l=>e.form.user_address=l),placeholder:e.$t("core__be_address_label")},null,8,["value","placeholder"])]),a("div",null,[o(d,{class:"mb-1"},{default:t(()=>[n(u(e.$t("core__be_role")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.role_id,"onUpdate:value":r[4]||(r[4]=l=>e.form.role_id=l),placeholder:e.$t("core__be_role")},null,8,["value","placeholder"])]),a("div",null,[o(d,null,{default:t(()=>[n(u(e.$t("core__be_about_me")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_about_me,"onUpdate:value":r[5]||(r[5]=l=>e.form.user_about_me=l),placeholder:e.$t("core__be_about_me")},null,8,["value","placeholder"])]),a("div",W,[o(P,{type:"button",onClick:r[6]||(r[6]=l=>e.handleCancel())},{default:t(()=>[n(u(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var De=Z(G,[["render",X]]);export{De as default};