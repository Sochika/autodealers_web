import{d as q,p as E,Z as M,i as o,y as Z,z as u,o as i,c as g,b as r,w as l,f as A,q as d,t as c,g as v,a as b,F as B,s as N,n as H,O as G,r as n}from"./app.df1b8390.js";import{g as J,e as K,P as Q,a as W,d as X}from"./PsLayout.f3d182a2.js";import{P as Y}from"./PsLabel.220aebc7.js";import{P as x}from"./PsButton.27aa76f7.js";import{P as ee}from"./PsDataTable.5103b98e.js";import{P as te}from"./PsAlert.6ad375d4.js";import{P as ae}from"./PsBreadcrumb2.51f0c9ee.js";import{P as le}from"./PsToggle.853ca190.js";import{P as re}from"./PsIcon.aabd8ae0.js";import{P as oe}from"./PsBannerIcon.93b568f8.js";import{D as se}from"./PsTableSearch.38c44761.js";import{P as ne}from"./PsIconButton.38b0339c.js";import{P as ie}from"./PsTable2.e695075c.js";import{D as de}from"./DatePicker.4d87b72c.js";import{_ as ce}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsInput.a956c4eb.js";import"./PsLabelCaption.ee5fb266.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./moment.9709ab41.js";import"./ps_constants.deaae373.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./toggle.d860cb28.js";import"./main.14982862.js";import"./index.edd1d404.js";const pe=q({name:"Index",components:{Link:E,Head:M,PsLabel:Y,PsButton:x,PsDataTable:ee,PsAlert:te,PsBreadcrumb2:ae,PsDangerDialog:J,PsToggle:le,PsIcon:re,PsBannerIcon:oe,Dropdown:se,PsIconButton:ne,PsTextButton:K,PsTable2:ie,PsDropdown:Q,PsDropdownSelect:W,DatePicker:de},layout:X,props:{status:Object,transactions:Object,packages:Object,checkPermission:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object,selected_package:Object,selectedDate:Object,selected_payment_method:Object,payment_methods:Object},setup(e){const s=o(!1),R=o(!1),w=o(!0),V=["package.title","user.name"],I="Search";let P=e.search?o(e.search):o(""),S=e.sort_field?o(e.sort_field):o(""),F=e.sort_order?o(e.sort_order):o("desc"),D=o(!1),_=e.selected_package?o(e.selected_package):o(""),f=e.selectedDate?o(e.selectedDate):o(""),y=e.selected_payment_method?o(e.selected_payment_method):o("");const h=Z([{label:"User",key:"user_id",hidden:!1},{label:"Package",key:"package_id",hidden:!1},{label:"Amount",key:"price",hidden:!1},{label:"Payment Method",key:"payment_method",hidden:!1},{label:"Date",key:"added_date",hidden:!1}]),$=[{label:u("package_report_user"),field:"user_id",relation:"user",type:"String",relationField:"name",action:"Action"},{label:u("package_report_package_name"),field:"package_id",relation:"package",type:"String",relationField:["payment_info","id"],action:"Action"},{label:u("package_amount"),field:"price",type:"Integer",action:"Action"},{label:u("package_payment"),field:"payment_method",type:"String",action:"Action"},{label:u("package_date"),field:"added_date",type:"Timestamp",action:"Action"},{label:u("detail_label"),field:"detail",type:"Action",sort:!1}];function O(a){this.$inertia.get(route("package_report.show",a))}function C(a){S.value=a.field,F.value=a.sort_order,m()}function j(a){P.value=a,m(1)}function t(a){m(1,a)}function k(){_.value="",f.value="",m(),w.value=!1,setTimeout(()=>{w.value=!0},100)}function T(a){f.value=a,m(1)}function L(a){_.value=a,m(1)}function z(a){y.value=a,m(1)}function U(a){f.value=a;let p=e.transactions.meta.current_page;m(p)}function m(a=null,p=null){G.get(route("package_report.index"),{sort_field:S.value,sort_order:F.value,page:a!=null?a:e.transactions.meta.current_page,row:p!=null?p:e.transactions.meta.per_page,search:P.value,package_filter:_.value,date_filter:f.value,selected_payment_method:y.value},{preserveScroll:!0,preserveState:!0})}return{showFilter:s,clearFilter:R,globalSearchFields:V,globalSearchPlaceholder:I,columns:$,colFilterOptions:h,handleDetail:O,handleSorting:C,handleSearching:j,handleRow:t,visible:D,handleClearFilter:k,handlePackagefilter:L,selected_package:_,selected_date:f,dateFilter:T,selected_payment_method:y,handlePaymentfilter:z,reRenderDate:w,handleDatefilter:U}},computed:{breadcrumb(){return[{label:u("core__be_dashboard_label"),url:route("admin.index")},{label:u("package_report_module"),color:"text-primary-500"}]}}}),me=["href"],ue={class:"rounded-md shadow-xs w-56"},_e={class:"pt-2 z-30"},fe=["onClick"],he={class:"rounded-md shadow-xs w-56"},ge={class:"pt-2 z-30"},be=["onClick"],ye={key:0,class:"flex flex-row mb-2"},ke={key:1,class:"flex flex-row mb-2"};function ve(e,s,R,w,V,I){const P=n("Head"),S=n("ps-breadcrumb-2"),F=n("ps-banner-icon"),D=n("ps-icon"),_=n("ps-text-button"),f=n("ps-icon-button"),y=n("ps-dropdown-select"),h=n("ps-label"),$=n("ps-dropdown"),O=n("date-picker"),C=n("ps-table2"),j=n("ps-layout");return i(),g(B,null,[r(P,{title:e.$t("package_report_module")},null,8,["title"]),r(j,null,{default:l(()=>[r(S,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(i(),A(F,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[d(c(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):v("",!0),r(C,{row:e.row,search:e.search,object:e.transactions,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_user"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:l(()=>[b("a",{href:e.route("package_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[r(D,{name:"fileUpload",class:"mx-0.5 font-semibold"}),d(c(e.$t("core__be_export_btn")),1)],8,me)]),searchRight:l(()=>[e.showFilter?(i(),A(_,{key:0,onClick:s[0]||(s[0]=t=>e.clearFilter=!0),class:"flex text-sm items-center text-red-400",padding:"py-1 px-4"},{default:l(()=>[r(D,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),d(" "+c(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),r(f,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:s[1]||(s[1]=t=>e.showFilter=!e.showFilter)},{default:l(()=>[d(c(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:l(()=>[r($,{align:"",class:"h-10"},{select:l(()=>[r(y,{placeholder:e.$t("package_report_package_name"),selectedValue:e.selected_package==""||e.selected_package=="all"?"":e.packages.filter(t=>t.id==e.selected_package)[0].value},null,8,["placeholder","selectedValue"])]),list:l(()=>[b("div",ue,[b("div",_e,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[2]||(s[2]=t=>e.handlePackagefilter("all"))},[r(h,{class:"text-gray-200 ms-2"},{default:l(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(i(!0),g(B,null,N(e.packages,t=>(i(),g("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:k=>e.handlePackagefilter(t.id)},[r(h,{class:H(["ms-2",t.id==e.selected_package?" font-bold":""])},{default:l(()=>[d(c(t.value),1)]),_:2},1032,["class"])],8,fe))),128))])])]),_:1}),r($,{align:"",class:"h-10"},{select:l(()=>[r(y,{placeholder:e.$t("package_report_payment_method"),selectedValue:e.selected_payment_method==""||e.selected_payment_method=="all"?"":e.payment_methods.filter(t=>t==e.selected_payment_method)[0]},null,8,["placeholder","selectedValue"])]),list:l(()=>[b("div",he,[b("div",ge,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[3]||(s[3]=t=>e.handlePaymentfilter("all"))},[r(h,{class:"text-gray-200 ms-2"},{default:l(()=>[d(c(e.$t("core__be_select_all")),1)]),_:1})]),(i(!0),g(B,null,N(e.payment_methods,(t,k)=>(i(),g("div",{key:k,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handlePaymentfilter(t)},[r(h,{class:H(["ms-2",t==e.selected_payment_method?" font-bold":""])},{default:l(()=>[d(c(t),1)]),_:2},1032,["class"])],8,be))),128))])])]),_:1}),e.reRenderDate?(i(),A(O,{key:0,onDatepick:e.handleDatefilter,class:H(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":s[4]||(s[4]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0)]),tableRow:l(t=>[t.field=="detail"?(i(),g("div",ye,[r(_,{onClick:k=>e.handleDetail(t.row.id)},{default:l(()=>[d(c(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):v("",!0),t.field=="package_id"?(i(),g("div",ke,[r(h,null,{default:l(()=>[d(c(t.row.package.payment_info.value),1)]),_:2},1024)])):v("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var et=ce(pe,[["render",ve]]);export{et as default};
