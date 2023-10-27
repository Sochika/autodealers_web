import{d as y,p as P,Z as v,z as t,o as m,c as p,b as o,w as r,a as S,q as d,t as c,g as x,F as $,r as a}from"./app.df1b8390.js";import{e as w,d as k}from"./PsLayout.f3d182a2.js";import{P as B}from"./PsLabel.220aebc7.js";import{P as C}from"./PsButton.27aa76f7.js";import{P as F}from"./PsDataTable.5103b98e.js";import{P as D}from"./PsAlert.6ad375d4.js";import{P as L}from"./PsBreadcrumb2.51f0c9ee.js";import{P as N}from"./PsIcon.aabd8ae0.js";import{P as O}from"./PsRating.3ae91855.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsInput.a956c4eb.js";import"./PsLabelCaption.ee5fb266.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsTableSearch.38c44761.js";import"./moment.9709ab41.js";import"./ps_constants.deaae373.js";const V=y({name:"Index",components:{Link:P,Head:v,PsLabel:B,PsButton:C,PsDataTable:F,PsAlert:D,PsBreadcrumb2:L,PsIcon:N,PsRating:O,PsTextButton:w},layout:k,props:["users"],setup(){const e=["name"],l=t("search_user_name"),s=[{placeholder:t("select_date"),field:"added_date",filterType:"date_range"}],i=[{label:t("user_name_label"),field:"name",type:"String"},{label:t("email_label"),field:"email",type:"String"},{label:t("phone_label"),field:"user_phone",type:"String"},{label:t("registered_date_label"),field:"added_date",type:"Date"},{label:t("detail_label"),field:"detail",type:"Action",sort:!1}];return{globalSearchFields:e,globalSearchPlaceholder:l,columns:i,searchOptions:s}},methods:{handleDetail(e){this.$inertia.get(route("daily_active_user_report.show",e))}},computed:{breadcrumb(){return[{label:t("core__be_dashboard_label"),url:route("admin.index")},{label:t("daily_active_user_report_module"),color:"text-primary-500"}]}}}),H=["href"],I={key:0,class:"flex flex-row mb-2"};function A(e,l,s,i,R,q){const _=a("Head"),u=a("ps-breadcrumb-2"),b=a("ps-icon"),f=a("ps-text-button"),h=a("ps-data-table"),g=a("ps-layout");return m(),p($,null,[o(_,{title:e.$t("daily_active_user_report_module")},null,8,["title"]),o(g,null,{default:r(()=>[o(u,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(h,{rows:this.users,columns:e.columns,globalSearchFields:e.globalSearchFields,searchOptions:e.searchOptions,globalSearchPlaceholder:e.globalSearchPlaceholder},{searchLeft:r(()=>[S("a",{href:e.route("daily_active_user_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[o(b,{name:"fileUpload",class:"mx-0.5 font-semibold"}),d(c(e.$t("core__be_export_btn")),1)],8,H)]),tableRow:r(n=>[n.field=="detail"?(m(),p("div",I,[o(f,{onClick:z=>e.handleDetail(n.row.id)},{default:r(()=>[d(c(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):x("",!0)]),_:1},8,["rows","columns","globalSearchFields","searchOptions","globalSearchPlaceholder"])]),_:1})],64)}var fe=T(V,[["render",A]]);export{fe as default};
