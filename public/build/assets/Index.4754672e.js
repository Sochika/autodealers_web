import{d as T,p as D,Z as H,i as n,z as s,O,o as d,c as P,b as a,w as l,f,q as $,t as F,g as h,F as A,r as i}from"./app.df1b8390.js";import{g as j,d as z}from"./PsLayout.f3d182a2.js";import{P as B}from"./PsLabel.220aebc7.js";import{P as V}from"./PsButton.27aa76f7.js";import{P as E}from"./PsTable2.e695075c.js";import{P as R}from"./PsAlert.6ad375d4.js";import{P as I}from"./PsBreadcrumb2.51f0c9ee.js";import{P as N}from"./PsToggle.853ca190.js";import{P as L}from"./PsIcon.aabd8ae0.js";import{P as q}from"./PsBannerIcon.93b568f8.js";import{D as M}from"./PsTableSearch.38c44761.js";import{P as U}from"./PsIconButton.38b0339c.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsInput.a956c4eb.js";import"./PsLabelCaption.ee5fb266.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./moment.9709ab41.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./toggle.d860cb28.js";const G=T({name:"Index",components:{Link:D,Head:H,PsLabel:B,PsButton:V,PsTable2:E,PsAlert:R,PsBreadcrumb2:I,PsDangerDialog:j,PsToggle:N,PsIcon:L,PsBannerIcon:q,Dropdown:M,PsIconButton:U},layout:z,props:{can:Object,status:Object,currencies:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let t=n(!1),b=e.search?n(e.search):n(""),g=e.sort_field?n(e.sort_field):n(""),_=e.sort_order?n(e.sort_order):n("desc");const v=n(),y=n(),w=n();function k(r){v.value.openModal(s("core__delete"),s("core__comfirm_to_delete_row_currency"),s("core__be_btn_confirm"),s("core__be_btn_cancel"),()=>{this.$inertia.delete(route("currency.destroy",r),{onSuccess:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)},onError:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)}})},()=>{})}function u(r,o){o&&this.$inertia.put(route("currency.statusChange",r),{onSuccess:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)},onError:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)}})}function c(r,o){o&&this.$inertia.put(route("currency.defaultChange",r),{onSuccess:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)},onError:()=>{t.value=!0,setTimeout(()=>{t.value=!1},3e3)}})}function C(r){g.value=r.field,_.value=r.sort_order,m()}function p(r){b.value=r,m(1)}function S(r){m(1,r)}function m(r=null,o=null){O.get(route("currency.index"),{sort_field:g.value,sort_order:_.value,page:r!=null?r:e.currencies.meta.current_page,row:o!=null?o:e.currencies.meta.per_page,search:b.value},{preserveScroll:!0,preserveState:!0})}return{handleRow:S,handleSearchingSorting:m,handleSearching:p,handleSorting:C,handlePublish:u,handleDefault:c,visible:t,columns:w,ps_danger_dialog:v,confirmDeleteClicked:k,colFilterOptions:y}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("currency_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("currency.create"))},handleEdit(e){this.$inertia.get(route("currency.edit",e))},FilterOptionshandle(e){O.put(route("currency.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.currencies.per_page,search:this.search.value,current_page:this.currencies.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:s(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:s(e.key),key_id:e.key_id,label:s(e.label),module_name:e.module_name}))}}),J={key:0,class:"flex flex-row"};function K(e,t,b,g,_,v){const y=i("Head"),w=i("ps-breadcrumb-2"),k=i("ps-banner-icon"),u=i("ps-icon"),c=i("ps-button"),C=i("ps-danger-dialog"),p=i("ps-toggle"),S=i("ps-table2"),m=i("ps-layout");return d(),P(A,null,[a(y,{title:e.$t("currency_module")},null,8,["title"]),a(m,null,{default:l(()=>[a(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),f(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[$(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),a(S,{row:e.row,search:e.search,object:this.currencies,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,globalSearchPlaceholder:e.$t("core__be_searches"),searchable:e.showFilter},{button:l(()=>[e.can.createCurrency?(d(),f(c,{key:0,onClick:t[0]||(t[0]=r=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[a(u,{name:"plus",class:"me-2 font-semibold"}),$(F(e.$t("core__add_currency")),1)]),_:1})):h("",!0)]),responsive_button:l(()=>[e.can.createCurrency?(d(),f(c,{key:0,onClick:t[1]||(t[1]=r=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[a(u,{name:"plus",class:"me-2 font-semibold"}),$(F(e.$t("core__add_currency")),1)]),_:1})):h("",!0)]),tableActionRow:l(r=>[r.field=="action"?(d(),P("div",J,[a(c,{disabled:!r.row.authorization.update,onClick:o=>e.handleEdit(r.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(c,{disabled:!r.row.authorization.delete,onClick:o=>e.confirmDeleteClicked(r.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(C,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:l(r=>[r.field=="status"?(d(),f(p,{key:0,disabled:!r.row.authorization.update,selectedValue:r.row.status==1,onClick:o=>e.handlePublish(r.row.id,r.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0),r.field=="is_default"?(d(),f(p,{key:1,disabled:!r.row.authorization.update,selectedValue:r.row.is_default==1,onClick:o=>e.handleDefault(r.row.id,r.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","globalSearchPlaceholder","searchable"])]),_:1})],64)}var ke=Z(G,[["render",K]]);export{ke as default};