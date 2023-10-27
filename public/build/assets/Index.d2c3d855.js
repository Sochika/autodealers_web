import{g as B,d as T}from"./PsLayout.f3d182a2.js";import{d as R,Z as V,i as a,z as l,O as A,o as c,c as S,b as r,w as s,a as N,f as P,q as F,t as $,g as p,F as z,r as i}from"./app.df1b8390.js";import{P as D}from"./PsInput.a956c4eb.js";import{P as I}from"./PsLabel.220aebc7.js";import{P as E}from"./PsButton.27aa76f7.js";import{P as M}from"./PsTextarea.33cd0e73.js";import{P as L}from"./PsLabelHeader4.08737a41.js";import{P as q}from"./PsIcon.aabd8ae0.js";import{P as G}from"./PsAlert.6ad375d4.js";import{N as U}from"./NewPsDataTable.7439fcdd.js";import{P as Z}from"./PsToggle.853ca190.js";import{P as J}from"./PsBreadcrumb2.51f0c9ee.js";import{P as K}from"./PsTable2.e695075c.js";import{P as Q}from"./PsBannerIcon.93b568f8.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsLabelCaption.ee5fb266.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./Icons.70fae9c4.js";import"./PsTableSearch.38c44761.js";import"./moment.9709ab41.js";import"./toggle.d860cb28.js";import"./PsIcon1.a2a2a6d2.js";const X=R({name:"Index",components:{Head:V,PsInput:D,PsLabel:I,PsButton:E,PsTextarea:M,PsLabelHeader4:L,PsIcon:q,PsAlert:G,NewPsDataTable:U,PsDangerDialog:B,PsToggle:Z,PsBreadcrumb2:J,PsTable2:K,PsBannerIcon:Q},layout:T,props:{status:Object,language:Object,menu_groups:Object,checkPermission:Object,showMenuGroupCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const d=["group_name"],O="Search",v=a(),j=a(),H=a();let _=e.search?a(e.search):a(""),h=e.sort_field?a(e.sort_field):a(""),g=e.sort_order?a(e.sort_order):a("desc"),n=a(!1);function u(o){v.value.openModal(l("core__be_delete_menugroup"),l("core__be_delete_menugroup_info"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{this.$inertia.delete(route("menu_group.destroy",o),{onSuccess:()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)},onError:()=>{n.value=!0,setTimeout(()=>{n.value=!1},3e3)}})},()=>{})}function f(o){this.$inertia.get(route("menu_group.edit",o))}function w(o,m){m&&this.$inertia.put(route("menu_group.statusChange",o))}function y(){this.$inertia.get(route("menu_group.create"))}function C(o){h.value=o.field,g.value=o.sort_order,k()}function t(o){_.value=o,k(1)}function b(o){k(1,o)}function k(o=null,m=null){A.get(route("menu_group.index"),{sort_field:h.value,sort_order:g.value,page:o!=null?o:e.menu_groups.meta.current_page,row:m!=null?m:e.menu_groups.meta.per_page,search:_.value},{preserveScroll:!0,preserveState:!0})}return{handleEdit:f,ps_danger_dialog:v,confirmClicked:u,handleEdit:f,globalSearchFields:d,globalSearchPlaceholder:O,columns:H,handlePublish:w,handleCreate:y,colFilterOptions:j,handleSorting:C,handleSearching:t,handleRow:b,visible:n}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("menu_group_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){A.post(route("menu_group.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.menu_groups.per_page,search:this.search.value,current_page:this.menu_groups.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),Y={class:""},x={key:0},ee={class:"flex"},oe={key:0};function te(e,d,O,v,j,H){const _=i("Head"),h=i("ps-breadcrumb-2"),g=i("ps-banner-icon"),n=i("ps-icon"),u=i("ps-button"),f=i("ps-toggle"),w=i("ps-table2"),y=i("ps-danger-dialog"),C=i("ps-layout");return c(),S(z,null,[r(_,{title:e.$t("menu_group_module")},null,8,["title"]),r(C,null,{default:s(()=>[N("div",Y,[r(h,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(c(),P(g,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:s(()=>[F($(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),r(w,{row:e.row,search:e.search,object:e.menu_groups,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:s(()=>[e.can.createCoreMenu?(c(),P(u,{key:0,onClick:d[0]||(d[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[r(n,{name:"plus",class:"me-1 font-semibold"}),F($(e.$t("core_add_menu_group_module")),1)]),_:1})):p("",!0)]),responsive_button:s(()=>[e.can.createCoreMenu?(c(),P(u,{key:0,onClick:d[1]||(d[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:s(()=>[r(n,{name:"plus",class:"me-1 font-semibold"}),F($(e.$t("core_add_menu_group_module")),1)]),_:1})):p("",!0)]),tableActionRow:s(t=>[t.field=="action"?(c(),S("span",x,[N("div",ee,[r(u,{disabled:!t.row.authorizations.update,onClick:b=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[r(n,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(u,{disabled:!t.row.authorizations.delete,onClick:b=>e.confirmClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:s(()=>[r(n,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])])):p("",!0)]),tableRow:s(t=>[t.field=="is_show_on_menu"?(c(),S("span",oe,[r(f,{disabled:!t.row.authorizations.update,selectedValue:t.row.is_show_on_menu==1,onClick:b=>e.handlePublish(t.row.id,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])])):p("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),r(y,{ref:"ps_danger_dialog"},null,512)])]),_:1})],64)}var Ne=W(X,[["render",te]]);export{Ne as default};
