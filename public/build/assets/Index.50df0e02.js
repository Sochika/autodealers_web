import{e as de,g as ce,P as ue,a as me,d as pe}from"./PsLayout.f3d182a2.js";import{d as _e,Z as fe,i as a,z as n,I as he,O as M,o as d,c as m,b as i,w as r,f as j,q as p,t as u,g as v,n as H,a as b,F as z,s as q,r as c}from"./app.df1b8390.js";import{P as be}from"./PsButton.27aa76f7.js";import{P as ge}from"./PsBannerIcon.93b568f8.js";import{P as ve}from"./PsBreadcrumb2.51f0c9ee.js";import{P as ye}from"./PsIcon.aabd8ae0.js";import{D as we}from"./PsTableSearch.38c44761.js";import{P as ke}from"./PsIconButton.38b0339c.js";import{P as Oe}from"./PsLabel.220aebc7.js";import{P as Ce}from"./PsLink1.5181e506.js";import{P as Se}from"./PsToggle.853ca190.js";import{P as De}from"./PsTable2.e695075c.js";import{D as Pe}from"./DatePicker.4d87b72c.js";import{P as $e}from"./PsBadge.8c6a988d.js";import{a as Fe,h as Ie,i as Ae}from"./psApiService.a84977c6.js";import{P as Te}from"./PsInput.a956c4eb.js";import{P as Re}from"./PsInputWithRightIcon.f0158e49.js";import{P as G}from"./ps_constants.deaae373.js";import{_ as je}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsLoading.d7e2b7a9.js";import"./PsLabelCaption.ee5fb266.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./toggle.d860cb28.js";import"./moment.9709ab41.js";import"./main.14982862.js";import"./index.edd1d404.js";const Ve=_e({name:"Index",components:{Head:fe,PsButton:be,PsTextButton:de,PsBannerIcon:ge,PsBreadcrumb2:ve,PsDangerDialog:ce,PsIcon:ye,PsDropdown:ue,PsDropdownSelect:me,Dropdown:we,PsIconButton:ke,PsLabel:Oe,PsLink1:Ce,PsToggle:Se,PsTable2:De,DatePicker:Pe,PsBadge:$e,PsInput:Te,PsInputWithRightIcon:Re},layout:pe,props:{status:Object,items:Object,categories:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedDealOption:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String,isSubCategoryOn:String,selected_price_type:String},data(){return{location_city:"",category:""}},setup(e){const s=e.selectedCategory||e.selectedDate||e.selectedDealOption||e.selectedPurchasedOption?a(!0):a(!1),W=a(!1);let P=a(!1);const V=a(!0);let N=e.search?a(e.search):a(""),E=e.sort_field?a(e.sort_field):a(""),B=e.sort_order?a(e.sort_order):a("desc"),$=e.selectedCategory?a(e.selectedCategory.id):a(""),F=e.selectedDealOption?a(e.selectedDealOption.id):a(""),g=e.selectedPurchaseOption?a(e.selectedPurchaseOption.id):a(""),I=e.selectedDate?a(e.selectedDate):a(""),O=a([]),C=a(!1),f=a(),y=a(!1),k=a([]),S=a(!1),U=a(),D=a([]),A=a(!1),L=a();const t=a();function T(l){t.value.openModal(n("core__be_delete_item"),n("core__be_delete_item_info"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{M.delete(route("slow_moving_item.destroy",l),{onSuccess:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)},onError:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)}})},()=>{})}function J(l){E.value=l.field,B.value=l.sort_order,w()}function K(){$.value="all",g.value="all",F.value="all",I.value="",w(),V.value=!1,setTimeout(()=>{V.value=!0},100)}function Q(l){$.value=l,w(1)}function X(l){I.value=l,w(1)}function Y(l){F.value=l,w(1)}function x(l){g.value=l,w(1)}function ee(l){N.value=l,w(1)}function te(l){w(1,l)}function w(l=null,o=null){M.get(route("slow_moving_item.index"),{sort_field:E.value,sort_order:B.value,page:l!=null?l:e.items.meta.current_page,row:o!=null?o:e.items.meta.per_page,search:N.value,category_filter:$.value,deal_option_filter:F.value,purchase_option_filter:g.value,date_filter:I.value},{preserveScroll:!0,preserveState:!0})}let R=[];e.isSubCategoryOn=="1"?R=[{label:n("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:n("core__be_items"),field:"title",type:"String",action:"Action"},{label:n("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:n("core__be_item_subcategories"),field:"subcategory_id@@name",type:"Integer",action:"Action"},{label:n("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:n("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:n("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:n("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:"core__be_post_date",field:"added_date",type:"Timestamp",action:"Action"},{label:n("core__be_action_label"),field:"action",type:"Action"}]:R=[{label:n("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:n("core__be_items"),field:"title",type:"String",action:"Action"},{label:n("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:n("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:n("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:n("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:n("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:"core__be_post_date",field:"added_date",type:"Timestamp",action:"Action"},{label:n("core__be_action_label"),field:"action",type:"Action"}];const le=a();function oe(l){if(e.selected_price_type==G.PRICE_RANGE){const o=parseFloat(l),h=parseInt(o);return h>5?"$".repeat(5):h<1?"$".repeat(1):"$".repeat(h)}if(e.selected_price_type==G.NORMAL_PRICE)return l}if(e.selected_price_type!=G.NO_PRICE){const l=R.findIndex(h=>h.field==="category_id@@name"),o={label:n("core__be_item_price"),field:"price",type:"Integer",action:"Action"};l!==-1&&R.splice(l+1,0,o)}function Z(l){C.value=!0,y.value=!0,Fe(l,f.value,e.authUser.id).then(o=>{o.data.length?o.data.forEach(h=>{O.value.push(h)}):C.value=!1,y.value=!1})}function re(l=null){let o=O.value?O.value.length:0;(o==0||l==!0)&&Z(o)}he(f,_.debounce((l,o)=>{let h=0;O.value=[],Z(h)},500));function ae(l){S.value=!0,y.value=!0,Ie(l,e.authUser.id).then(o=>{o.data.length?o.data.forEach(h=>{k.value.push(h)}):S.value=!1,y.value=!1}).catch(function(o){o&&(y.value=!1,S.value=!1)})}function ie(l=null){let o=k.value?k.value.length:0;(o==0||l==!0)&&ae(o)}function ne(l){A.value=!0,y.value=!0,Ae(l,e.authUser.id).then(o=>{o.data.length?o.data.forEach(h=>{D.value.push(h)}):A.value=!1,y.value=!1}).catch(function(o){o&&(y.value=!1,A.value=!1)})}function se(l=null){let o=D.value?D.value.length:0;(o==0||l==!0)&&ne(o)}return{reRenderDate:V,showFilter:s,clearFilter:W,columns:R,confirmDeleteClicked:T,ps_danger_dialog:t,colFilterOptions:le,visible:P,handleSorting:J,handleSearchingSorting:w,handleCategoryfilter:Q,handleDealOptionFilter:Y,handlePurchaseOptionFilter:x,handleDateFilter:X,handleClearFilter:K,handleRow:te,handleSearching:ee,selected_cat:$,selected_deal_option:F,selected_purchase_option:g,selected_date:I,is_loading:y,dropdownClick:re,categories:O,category_loadmore_visible:C,catSearch:f,purchaseOptions:k,purchaseOptions_loadmore_visible:S,purchaseOptionsSearch:U,purchaseOptionDropdownClick:ie,dealOptions:D,dealOptions_loadmore_visible:A,dealOptionsSearch:L,dealOptionDropdownClick:se,checkPriceFormat:oe}},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("slow_moving_item_module"),color:"text-primary-500"}]}},created(){},methods:{handleDelete(e){this.$inertia.delete(route("slow_moving_item.destroy",e))},handleEdit(e){this.$inertia.get(route("slow_moving_item.edit",e))},FilterOptionshandle(e){M.put(route("slow_moving_item.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}}}),Ee={class:"rounded-md shadow-xs w-56"},Be={class:"pt-2 z-30"},He=["onClick"],ze={class:"flex flex-row items-center justify-between"},Ne={class:"mt-1 mx-1"},Ue={class:"rounded-md shadow-xs w-56"},Le={class:"pt-2 z-30"},Me=["onClick"],qe={class:"flex flex-row items-center justify-between"},Ge={class:"rounded-md shadow-xs w-56"},We={class:"pt-2 z-30"},Ze=["onClick"],Je={class:"flex flex-row items-center justify-between"},Ke={key:0,class:"flex flex-row"},Qe={key:0},Xe={key:1},Ye={key:2};function xe(e,s,W,P,V,N){const E=c("Head"),B=c("ps-breadcrumb-2"),$=c("ps-banner-icon"),F=c("date-picker"),g=c("ps-icon"),I=c("ps-text-button"),O=c("ps-icon-button"),C=c("ps-dropdown-select"),f=c("ps-label"),y=c("ps-input-with-right-icon"),k=c("ps-dropdown"),S=c("ps-button"),U=c("ps-danger-dialog"),D=c("ps-badge"),A=c("ps-table2"),L=c("ps-layout");return d(),m(z,null,[i(E,{title:e.$t("slow_moving_item_module")},null,8,["title"]),i(L,null,{default:r(()=>[i(B,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),j($,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[p(u(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):v("",!0),i(A,{row:e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,globalSearchPlaceholder:e.$t("core__be_search"),onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchRight:r(()=>[e.reRenderDate?(d(),j(F,{key:0,onDatepick:e.handleDateFilter,class:H(["rounded text-primary-400 shadow-sm pt-0.5 me-2 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":s[0]||(s[0]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0),e.showFilter?(d(),j(I,{key:1,onClick:s[1]||(s[1]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-1 px-4"},{default:r(()=>[i(g,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),p(" "+u(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),i(O,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:s[2]||(s[2]=t=>e.showFilter=!e.showFilter)},{default:r(()=>[p(u(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:r(()=>[i(k,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:r(()=>[i(C,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[b("div",Ee,[b("div",Be,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[3]||(s[3]=t=>e.handleCategoryfilter("all"))},[i(f,{class:"text-gray-200 ms-2"},{default:r(()=>[p(u(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),m(z,null,q(e.categories,t=>(d(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handleCategoryfilter(t.id)},[i(f,{class:H(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:r(()=>[p(u(t.name),1)]),_:2},1032,["class"])],8,He))),128))])])]),loadmore:r(()=>[e.category_loadmore_visible?(d(),m("div",{key:0,onClick:s[4]||(s[4]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[b("div",ze,[i(f,{class:"ms-2"},{default:r(()=>[p(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),filter:r(()=>[b("div",Ne,[i(y,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":s[5]||(s[5]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:r(()=>[i(g,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),i(k,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:r(()=>[i(C,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[b("div",Ue,[b("div",Le,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[6]||(s[6]=t=>e.handlePurchaseOptionFilter("all"))},[i(f,{class:"text-gray-200 ms-2"},{default:r(()=>[p(u(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),m(z,null,q(e.purchaseOptions,t=>(d(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handlePurchaseOptionFilter(t.id)},[i(f,{class:H(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:r(()=>[p(u(t.name),1)]),_:2},1032,["class"])],8,Me))),128))])])]),loadmore:r(()=>[e.purchaseOptions_loadmore_visible?(d(),m("div",{key:0,onClick:s[7]||(s[7]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[b("div",qe,[i(f,{class:"ms-2"},{default:r(()=>[p(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"]),i(k,{onOnClick:e.dealOptionDropdownClick,align:"",class:"h-10"},{select:r(()=>[i(C,{placeholder:e.$t("core__be_deal_option"),border:e.selected_deal_option!==""&&e.selected_deal_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_deal_option==""||e.selected_deal_option=="all"?"":e.selectedDealOption.name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[b("div",Ge,[b("div",We,[b("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[8]||(s[8]=t=>e.handleDealOptionFilter("all"))},[i(f,{class:"text-gray-200 ms-2"},{default:r(()=>[p(u(e.$t("core__be_select_all")),1)]),_:1})]),(d(!0),m(z,null,q(e.dealOptions,t=>(d(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:T=>e.handleDealOptionFilter(t.id)},[i(f,{class:H(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:r(()=>[p(u(t.name),1)]),_:2},1032,["class"])],8,Ze))),128))])])]),loadmore:r(()=>[e.dealOptions_loadmore_visible?(d(),m("div",{key:0,onClick:s[9]||(s[9]=t=>e.dealOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[b("div",Je,[i(f,{class:"ms-2"},{default:r(()=>[p(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),i(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"])]),tableActionRow:r(t=>[t.field=="action"?(d(),m("div",Ke,[i(S,{disabled:!t.row.authorizations.update,onClick:T=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:r(()=>[i(g,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(S,{disabled:!t.row.authorizations.delete,onClick:T=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[i(g,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),i(U,{ref:"ps_danger_dialog"},null,512)])):v("",!0)]),tableRow:r(t=>[t.field==e.itmPurchasedOption+"@@name"?(d(),m("span",Qe,[t.row[e.itmPurchasedOption+"@@name"]?(d(),j(D,{key:0,class:""},{default:r(()=>[p(u(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field==e.itmItemType+"@@name"?(d(),m("span",Xe,[t.row[e.itmItemType+"@@name"]?(d(),j(D,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:r(()=>[p(u(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field=="price"?(d(),m("div",Ye,u(e.checkPriceFormat(t.row.price)),1)):v("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","globalSearchPlaceholder","onHandleRow","searchable"])]),_:1})],64)}var Rt=je(Ve,[["render",xe]]);export{Rt as default};
