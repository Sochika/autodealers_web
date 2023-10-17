import{e as ne,g as se,P as de,a as ce,d as ue}from"./PsLayout.js";import{d as me,H as pe,i as a,J as n,D as _e,O as q,r as c,o as d,c as h,b as i,w as o,f as j,p as u,t as m,g as v,n as V,a as f,F as z,q as J}from"./app.js";import{P as he}from"./PsButton.js";import{P as fe}from"./PsBannerIcon.js";import{P as be}from"./PsBreadcrumb2.js";import{P as ge}from"./PsIcon.js";import{D as ve}from"./PsTableSearch.js";import{P as ye}from"./PsIconButton.js";import{P as we}from"./PsLabel.js";import{P as ke}from"./PsLink1.js";import{P as Oe}from"./PsToggle.js";import{P as Ce}from"./PsTable2.js";import{D as Se}from"./DatePicker.js";import{P as De}from"./PsBadge.js";import{a as Pe,h as $e,i as Fe}from"./psApiService.js";import{P as Ie}from"./PsInput.js";import{P as Ae}from"./PsInputWithRightIcon.js";import{_ as Te}from"./plugin-vue_export-helper.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsLoading.js";import"./PsLabelCaption.js";import"./PsLoadingCircleDialog.js";import"./PsIcon1.js";import"./Icons.js";import"./toggle.js";import"./moment.js";const je=me({name:"Index",components:{Head:pe,PsButton:he,PsTextButton:ne,PsBannerIcon:fe,PsBreadcrumb2:be,PsDangerDialog:se,PsIcon:ge,PsDropdown:de,PsDropdownSelect:ce,Dropdown:ve,PsIconButton:ye,PsLabel:we,PsLink1:ke,PsToggle:Oe,PsTable2:Ce,DatePicker:Se,PsBadge:De,PsInput:Ie,PsInputWithRightIcon:Ae},layout:ue,props:{status:Object,items:Object,categories:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedDealOption:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String,isSubCategoryOn:String},data(){return{location_city:"",category:""}},setup(e){const s=e.selectedCategory||e.selectedDate||e.selectedDealOption||e.selectedPurchasedOption?a(!0):a(!1),M=a(!1);let P=a(!1);const H=a(!0);let E=e.search?a(e.search):a(""),B=e.sort_field?a(e.sort_field):a(""),R=e.sort_order?a(e.sort_order):a("desc"),$=e.selectedCategory?a(e.selectedCategory.id):a(""),F=e.selectedDealOption?a(e.selectedDealOption.id):a(""),b=e.selectedPurchaseOption?a(e.selectedPurchaseOption.id):a(""),I=e.selectedDate?a(e.selectedDate):a(""),k=a([]),O=a(!1),p=a(),g=a(!1),w=a([]),C=a(!1),U=a(),S=a([]),A=a(!1),N=a();const t=a();function T(l){t.value.openModal(n("core__be_delete_item"),n("core__be_delete_item_info"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{q.Inertia.delete(route("slow_moving_item.destroy",l),{onSuccess:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)},onError:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)}})},()=>{})}function G(l){B.value=l.field,R.value=l.sort_order,y()}function K(){$.value="all",b.value="all",F.value="all",I.value="",y(),H.value=!1,setTimeout(()=>{H.value=!0},100)}function Q(l){$.value=l,y(1)}function X(l){I.value=l,y(1)}function Y(l){F.value=l,y(1)}function Z(l){b.value=l,y(1)}function x(l){E.value=l,y(1)}function ee(l){y(1,l)}function y(l=null,r=null){q.Inertia.get(route("slow_moving_item.index"),{sort_field:B.value,sort_order:R.value,page:l!=null?l:e.items.meta.current_page,row:r!=null?r:e.items.meta.per_page,search:E.value,category_filter:$.value,deal_option_filter:F.value,purchase_option_filter:b.value,date_filter:I.value},{preserveScroll:!0,preserveState:!0})}let L=[];e.isSubCategoryOn=="1"?L=[{label:n("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:n("core__be_items"),field:"title",type:"String",action:"Action"},{label:n("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:n("core__be_item_subcategories"),field:"subcategory_id@@name",type:"Integer",action:"Action"},{label:n("core__be_item_price"),field:"price",type:"Integer",action:"Action"},{label:n("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:n("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:n("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:n("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:"core__be_post_date",field:"added_date",type:"Timestamp",action:"Action"},{label:n("core__be_action_label"),field:"action",type:"Action"}]:L=[{label:n("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:n("core__be_items"),field:"title",type:"String",action:"Action"},{label:n("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:n("core__be_item_price"),field:"price",type:"Integer",action:"Action"},{label:n("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:n("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:n("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:n("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:"core__be_post_date",field:"added_date",type:"Timestamp",action:"Action"},{label:n("core__be_action_label"),field:"action",type:"Action"}];const te=a();function W(l){O.value=!0,g.value=!0,Pe(l,p.value,e.authUser.id).then(r=>{r.data.length?r.data.forEach(D=>{k.value.push(D)}):O.value=!1,g.value=!1})}function le(l=null){let r=k.value?k.value.length:0;(r==0||l==!0)&&W(r)}_e(p,_.debounce((l,r)=>{let D=0;k.value=[],W(D)},500));function oe(l){C.value=!0,g.value=!0,$e(l,e.authUser.id).then(r=>{r.data.length?r.data.forEach(D=>{w.value.push(D)}):C.value=!1,g.value=!1}).catch(function(r){r&&(g.value=!1,C.value=!1)})}function re(l=null){let r=w.value?w.value.length:0;(r==0||l==!0)&&oe(r)}function ae(l){A.value=!0,g.value=!0,Fe(l,e.authUser.id).then(r=>{r.data.length?r.data.forEach(D=>{S.value.push(D)}):A.value=!1,g.value=!1}).catch(function(r){r&&(g.value=!1,A.value=!1)})}function ie(l=null){let r=S.value?S.value.length:0;(r==0||l==!0)&&ae(r)}return{reRenderDate:H,showFilter:s,clearFilter:M,columns:L,confirmDeleteClicked:T,ps_danger_dialog:t,colFilterOptions:te,visible:P,handleSorting:G,handleSearchingSorting:y,handleCategoryfilter:Q,handleDealOptionFilter:Y,handlePurchaseOptionFilter:Z,handleDateFilter:X,handleClearFilter:K,handleRow:ee,handleSearching:x,selected_cat:$,selected_deal_option:F,selected_purchase_option:b,selected_date:I,is_loading:g,dropdownClick:le,categories:k,category_loadmore_visible:O,catSearch:p,purchaseOptions:w,purchaseOptions_loadmore_visible:C,purchaseOptionsSearch:U,purchaseOptionDropdownClick:re,dealOptions:S,dealOptions_loadmore_visible:A,dealOptionsSearch:N,dealOptionDropdownClick:ie}},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("slow_moving_item_module"),color:"text-primary-500"}]}},created(){},methods:{handleDelete(e){this.$inertia.delete(route("slow_moving_item.destroy",e))},handleEdit(e){this.$inertia.get(route("slow_moving_item.edit",e))},FilterOptionshandle(e){q.Inertia.put(route("slow_moving_item.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}}}),He={class:"rounded-md shadow-xs w-56"},Be={class:"pt-2 z-30"},Re=["onClick"],Ve={class:"flex flex-row items-center justify-between"},ze={class:"mt-1 mx-1"},Ee={class:"rounded-md shadow-xs w-56"},Ue={class:"pt-2 z-30"},Ne=["onClick"],Le={class:"flex flex-row items-center justify-between"},qe={class:"rounded-md shadow-xs w-56"},Je={class:"pt-2 z-30"},Me=["onClick"],We={class:"flex flex-row items-center justify-between"},Ge={key:0,class:"flex flex-row"},Ke={key:0},Qe={key:1};function Xe(e,s,M,P,H,E){const B=c("Head"),R=c("ps-breadcrumb-2"),$=c("ps-banner-icon"),F=c("date-picker"),b=c("ps-icon"),I=c("ps-text-button"),k=c("ps-icon-button"),O=c("ps-dropdown-select"),p=c("ps-label"),g=c("ps-input-with-right-icon"),w=c("ps-dropdown"),C=c("ps-button"),U=c("ps-danger-dialog"),S=c("ps-badge"),A=c("ps-table2"),N=c("ps-layout");return d(),h(z,null,[i(B,{title:e.$t("slow_moving_item_module")},null,8,["title"]),i(N,null,{default:o(()=>[i(R,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),j($,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[u(m(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):v("",!0),i(A,{row:e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,globalSearchPlaceholder:e.$t("core__be_search"),onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchRight:o(()=>[e.reRenderDate?(d(),j(F,{key:0,onDatepick:e.handleDateFilter,class:V(["rounded text-primary-400 shadow-sm pt-0.5 me-2 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":s[0]||(s[0]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0),e.showFilter?(d(),j(I,{key:1,onClick:s[1]||(s[1]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-1 px-4"},{default:o(()=>[i(b,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),u(" "+m(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),i(k,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:s[2]||(s[2]=t=>e.showFilter=!e.showFilter)},{default:o(()=>[u(m(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:o(()=>[i(w,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:o(()=>[i(O,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",He,[f("div",Be,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[3]||(s[3]=t=>e.handleCategoryfilter("all"))},[i(p,{class:"text-gray-200 ms-2"},{default:o(()=>[u(m(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),h(z,null,J(e.categories,t=>(d(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handleCategoryfilter(t.id)},[i(p,{class:V(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:o(()=>[u(m(t.name),1)]),_:2},1032,["class"])],8,Re))),128))])])]),loadmore:o(()=>[e.category_loadmore_visible?(d(),h("div",{key:0,onClick:s[4]||(s[4]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",Ve,[i(p,{class:"ms-2"},{default:o(()=>[u(m(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),filter:o(()=>[f("div",ze,[i(g,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":s[5]||(s[5]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:o(()=>[i(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),i(w,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[i(O,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",Ee,[f("div",Ue,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[6]||(s[6]=t=>e.handlePurchaseOptionFilter("all"))},[i(p,{class:"text-gray-200 ms-2"},{default:o(()=>[u(m(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),h(z,null,J(e.purchaseOptions,t=>(d(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handlePurchaseOptionFilter(t.id)},[i(p,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[u(m(t.name),1)]),_:2},1032,["class"])],8,Ne))),128))])])]),loadmore:o(()=>[e.purchaseOptions_loadmore_visible?(d(),h("div",{key:0,onClick:s[7]||(s[7]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",Le,[i(p,{class:"ms-2"},{default:o(()=>[u(m(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"]),i(w,{onOnClick:e.dealOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[i(O,{placeholder:e.$t("core__be_deal_option"),border:e.selected_deal_option!==""&&e.selected_deal_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_deal_option==""||e.selected_deal_option=="all"?"":e.selectedDealOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",qe,[f("div",Je,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[8]||(s[8]=t=>e.handleDealOptionFilter("all"))},[i(p,{class:"text-gray-200 ms-2"},{default:o(()=>[u(m(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),h(z,null,J(e.dealOptions,t=>(d(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handleDealOptionFilter(t.id)},[i(p,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[u(m(t.name),1)]),_:2},1032,["class"])],8,Me))),128))])])]),loadmore:o(()=>[e.dealOptions_loadmore_visible?(d(),h("div",{key:0,onClick:s[9]||(s[9]=t=>e.dealOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",We,[i(p,{class:"ms-2"},{default:o(()=>[u(m(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"])]),tableActionRow:o(t=>[t.field=="action"?(d(),h("div",Ge,[i(C,{disabled:!t.row.authorizations.update,onClick:T=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[i(b,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(C,{disabled:!t.row.authorizations.delete,onClick:T=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[i(b,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(U,{ref:"ps_danger_dialog"},null,512)])):v("",!0)]),tableRow:o(t=>[t.field==e.itmPurchasedOption+"@@name"?(d(),h("span",Ke,[t.row[e.itmPurchasedOption+"@@name"]?(d(),j(S,{key:0,class:""},{default:o(()=>[u(m(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field==e.itmItemType+"@@name"?(d(),h("span",Qe,[t.row[e.itmItemType+"@@name"]?(d(),j(S,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:o(()=>[u(m(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","globalSearchPlaceholder","onHandleRow","searchable"])]),_:1})],64)}var Pt=Te(je,[["render",Xe]]);export{Pt as default};
