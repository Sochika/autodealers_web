import{d as te,L as re,H as ae,i as s,J as u,D as G,O as U,r as p,o as i,c as g,b as a,w as r,f as v,p as c,t as m,g as f,a as h,F as V,q as L,n as q}from"./app.js";import{g as le,e as oe,P as se,a as ie,d as ne}from"./PsLayout.js";import{P as de}from"./PsLabel.js";import{P as ue}from"./PsButton.js";import{P as ce}from"./PsTable2.js";import{P as me}from"./PsAlert.js";import{P as _e}from"./PsBreadcrumb2.js";import{P as pe}from"./PsToggle.js";import{P as fe}from"./PsIcon.js";import{P as be}from"./PsBannerIcon.js";import{P as ge}from"./PsIconButton.js";import{P as he}from"./PsBadge.js";import{a as ye,b as ve}from"./psApiService.js";import{P as we}from"./PsInput.js";import{P as Ce}from"./PsInputWithRightIcon.js";import{_ as ke}from"./plugin-vue_export-helper.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsLoading.js";import"./PsLabelCaption.js";import"./PsLoadingCircleDialog.js";import"./PsTableSearch.js";import"./moment.js";import"./PsIcon1.js";import"./Icons.js";import"./toggle.js";const Se=te({name:"Index",components:{Link:re,Head:ae,PsLabel:de,PsButton:ue,PsTable2:ce,PsAlert:me,PsBreadcrumb2:_e,PsDangerDialog:le,PsToggle:pe,PsIcon:fe,PsBannerIcon:be,PsIconButton:ge,PsTextButton:oe,PsBadge:he,PsDropdown:se,PsDropdownSelect:ie,PsInput:we,PsInputWithRightIcon:Ce},layout:ne,props:{can:Object,status:Object,paidItems:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedSubcategory:{type:String,default:""},selectedPaymentStatus:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},isSubCategoryOn:String,search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String},setup(e){const d=s(!1),J=s(!1);let A=e.search?s(e.search):s(""),R=e.sort_field?s(e.sort_field):s(""),z=e.sort_order?s(e.sort_order):s("desc"),C=e.selectedCategory?s(e.selectedCategory.id):s(""),k=e.selectedSubcategory?s(e.selectedSubcategory.id):s(""),O=e.selectedPaymentStatus?s(e.selectedPaymentStatus):s(""),b=s([]),F=s(!1),D=s(),y=s(!1),o=s([]),P=s(!1),S=s();const j=s();let E=[{id:"0",name:u("core__be_waiting_for_approval")},{id:"1",name:u("core__be_approved")},{id:"2",name:u("core__be_rejected")}];const B=s();let H=[];e.isSubCategoryOn=="1"?H=[{label:u("  "),field:"action",type:"Action"},{label:u("core__be_item"),field:"title",type:"String"},{label:u("core__be_category"),field:"category",type:"String"},{label:u("core__be_subcategory"),field:"subcategory",type:"String"},{label:u("core__be_payment_status"),field:"status",type:"String",action:"Action"}]:H=[{label:u("  "),field:"action",type:"Action"},{label:u("core__be_item"),field:"title",type:"String"},{label:u("core__be_category"),field:"category",type:"String"},{label:u("core__be_payment_status"),field:"status",type:"String",action:"Action"}];function N(l){j.value.openModal(u("itemPromotion__delete_offline_paid_itm"),u("itemPromotion__del_offline_paid_itm_info"),u("core__be_btn_confirm"),u("core__be_btn_cancel"),()=>{U.Inertia.delete(route("offline_paid_item.destroy",l),{onSuccess:()=>{T.value=!0,setTimeout(()=>{T.value=!1},3e3)},onError:()=>{T.value=!0,setTimeout(()=>{T.value=!1},3e3)}})},()=>{})}function t(l){R.value=l.field,z.value=l.sort_order,w()}function I(){C.value="all",k.value="all",O.value="all",w()}function K(l){k.value="all",C.value=l,o.value=[],w(1)}function Q(l){k.value=l,w(1)}function X(l){O.value=l,w(1)}function Y(l){A.value=l,w(1)}function Z(l){w(1,l)}function w(l=null,n=null){U.Inertia.get(route("offline_paid_item.index"),{sort_field:R.value,sort_order:z.value,page:l!=null?l:e.paidItems.meta.current_page,row:n!=null?n:e.paidItems.meta.per_page,search:A.value,category_filter:C.value,sub_category_filter:k.value,payment_status_filter:O.value},{preserveScroll:!0,preserveState:!0})}function M(l){F.value=!0,y.value=!0,ye(l,D.value,e.authUser.id).then(n=>{n.data.length?n.data.forEach($=>{b.value.push($)}):F.value=!1,y.value=!1})}function x(l=null){let n=b.value?b.value.length:0;(n==0||l==!0)&&M(n)}G(D,_.debounce((l,n)=>{let $=0;b.value=[],M($)},500));function W(l){P.value=!0,y.value=!0,ve(l,S.value,e.authUser.id,C.value).then(n=>{n.data.length?n.data.forEach($=>{o.value.push($)}):P.value=!1,y.value=!1})}function ee(l=null){let n=o.value?o.value.length:0;(n==0||l==!0)&&W(n)}G(S,_.debounce((l,n)=>{let $=0;o.value=[],W($)},500));let T=s(!1);return{showFilter:d,clearFilter:J,columns:H,confirmDeleteClicked:N,ps_danger_dialog:j,colFilterOptions:B,visible:T,handleSorting:t,handleSearchingSorting:w,handleCategoryfilter:K,handleSubcategoryfilter:Q,handlePaymentStatusfilter:X,handleClearFilter:I,handleRow:Z,handleSearching:Y,selected_cat:C,selected_sub_cat:k,selected_payment_status:O,types:E,dropdownClick:x,categories:b,category_loadmore_visible:F,catSearch:D,subCategoryDropdownClick:ee,subCategories:o,subCategory_loadmore_visible:P,subCatSearch:S,is_loading:y}},computed:{breadcrumb(){return[{label:u("core__be_dashboard_label"),url:route("admin.index")},{label:u("offline_paid_item_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("offline_paid_item.create"))},handleEdit(e){this.$inertia.get(route("offline_paid_item.edit",e))},FilterOptionshandle(e){U.Inertia.put(route("offline_paid_item.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.paidItems.per_page,search:this.search.value,current_page:this.paidItems.current_page},{preserveScroll:!0,preserveState:!0})}}}),$e={class:"rounded-md shadow-xs w-56"},Oe={class:"pt-2 z-30"},Pe=["onClick"],Ie={class:"flex flex-row items-center justify-between"},Fe={class:"mt-1 mx-1"},De={class:"rounded-md shadow-xs w-56"},je={class:"pt-2 z-30"},Be=["onClick"],He={class:"flex flex-row items-center justify-between"},Te={class:"mt-1 mx-1"},Ve={class:"rounded-md shadow-xs w-56"},Ae={class:"pt-2 z-30"},Re=["onClick"],ze={key:0,class:"flex flex-row"},Ee={key:0},Ne={key:1},Ue={key:2};function Le(e,d,J,A,R,z){const C=p("Head"),k=p("ps-breadcrumb-2"),O=p("ps-banner-icon"),b=p("ps-icon"),F=p("ps-text-button"),D=p("ps-icon-button"),y=p("ps-dropdown-select"),o=p("ps-label"),P=p("ps-input-with-right-icon"),S=p("ps-dropdown"),j=p("ps-button"),E=p("ps-danger-dialog"),B=p("ps-badge"),H=p("ps-table2"),N=p("ps-layout");return i(),g(V,null,[a(C,{title:e.$t("offline_paid_item_module")},null,8,["title"]),a(N,null,{default:r(()=>[a(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(i(),v(O,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:r(()=>[c(m(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):f("",!0),a(H,{row:e.row,search:e.search,object:this.paidItems,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,globalSearchPlaceholder:e.$t("core__be_search_item"),eye_filter:!1},{searchRight:r(()=>[e.showFilter?(i(),v(F,{key:0,onClick:d[0]||(d[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-1 px-4"},{default:r(()=>[a(b,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),c(" "+m(e.$t("core__be_clear_filter")),1)]),_:1})):f("",!0),a(D,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:d[1]||(d[1]=t=>e.showFilter=!e.showFilter)},{default:r(()=>[c(m(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:r(()=>[a(S,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:r(()=>[a(y,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[h("div",$e,[h("div",Oe,[h("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d[2]||(d[2]=t=>e.handleCategoryfilter("all"))},[a(o,{class:"text-gray-200 ms-2"},{default:r(()=>[c(m(e.$t("core__be_select_all")),1)]),_:1})]),(i(!0),g(V,null,L(e.categories,t=>(i(),g("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:I=>e.handleCategoryfilter(t.id)},[a(o,{class:q(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:r(()=>[c(m(t.name),1)]),_:2},1032,["class"])],8,Pe))),128))])])]),loadmore:r(()=>[e.category_loadmore_visible?(i(),g("div",{key:0,onClick:d[3]||(d[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h("div",Ie,[a(o,{class:"ms-2"},{default:r(()=>[c(m(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),a(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):f("",!0)]),filter:r(()=>[h("div",Fe,[a(P,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":d[4]||(d[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:r(()=>[a(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),e.$page.props.isSubCategoryOn=="1"?(i(),v(S,{key:0,onOnClick:e.subCategoryDropdownClick,class:"h-10"},{select:r(()=>[a(y,{placeholder:e.$t("core__be_subcategory"),border:e.selected_sub_cat!==""&&e.selected_sub_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_sub_cat==""||e.selected_sub_cat=="all"?"":e.selectedSubcategory.name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[h("div",De,[h("div",je,[h("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d[5]||(d[5]=t=>e.handleSubcategoryfilter("all"))},[a(o,{class:"text-gray-200 ms-2"},{default:r(()=>[c(m(e.$t("core__be_select_all")),1)]),_:1})]),(i(!0),g(V,null,L(e.subCategories,t=>(i(),g("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:I=>e.handleSubcategoryfilter(t.id)},[a(o,{class:q(["ms-2",t.id==e.selected_sub_cat?" font-bold":""])},{default:r(()=>[c(m(t.name),1)]),_:2},1032,["class"])],8,Be))),128))])])]),loadmore:r(()=>[e.subCategory_loadmore_visible?(i(),g("div",{key:0,onClick:d[6]||(d[6]=t=>e.subCategoryDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h("div",He,[a(o,{class:"ms-2"},{default:r(()=>[c(m(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),a(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):f("",!0)]),filter:r(()=>[h("div",Te,[a(P,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.subCatSearch,"onUpdate:value":d[7]||(d[7]=t=>e.subCatSearch=t),placeholder:e.$t("core__be_search")},{icon:r(()=>[a(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"])):f("",!0),a(S,{align:"",class:"h-10"},{select:r(()=>[a(y,{placeholder:e.$t("core__be_payment_status"),border:e.selected_payment_status!==""&&e.selected_payment_status!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_payment_status==""||e.selected_payment_status=="all"?"":e.types.filter(t=>t.id==e.selected_payment_status)[0].name},null,8,["placeholder","border","selectedValue"])]),list:r(()=>[h("div",Ve,[h("div",Ae,[h("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d[8]||(d[8]=t=>e.handlePaymentStatusfilter("all"))},[a(o,{class:"text-gray-200 ms-2"},{default:r(()=>[c(m(e.$t("core__be_select_all")),1)]),_:1})]),(i(!0),g(V,null,L(e.types,t=>(i(),g("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:I=>e.handlePaymentStatusfilter(t.id)},[a(o,{class:q(["ms-2",t.id==e.selected_payment_status?" font-bold":""])},{default:r(()=>[c(m(t.name),1)]),_:2},1032,["class"])],8,Re))),128))])])]),_:1})]),tableActionRow:r(t=>[t.field=="action"?(i(),g("div",ze,[a(j,{disabled:!t.row.authorizations.update,onClick:I=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:r(()=>[a(b,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(j,{disabled:!t.row.authorizations.delete,onClick:I=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[a(b,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(E,{ref:"ps_danger_dialog"},null,512)])):f("",!0)]),tableRow:r(t=>[t.field==e.itmPurchasedOption+"@@name"?(i(),g("span",Ee,[t.row[e.itmPurchasedOption+"@@name"]?(i(),v(B,{key:0,class:""},{default:r(()=>[c(m(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):f("",!0)])):f("",!0),t.field==e.itmItemType+"@@name"?(i(),g("span",Ne,[t.row[e.itmItemType+"@@name"]?(i(),v(B,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:r(()=>[c(m(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):f("",!0)])):f("",!0),t.field==e.itmConditionOfItem+"@@name"?(i(),g("span",Ue,[t.row[e.itmConditionOfItem+"@@name"]?(i(),v(B,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:r(()=>[c(m(t.row[e.itmConditionOfItem+"@@name"]),1)]),_:2},1024)):f("",!0)])):f("",!0),t.field=="status"&&t.row.status==0?(i(),v(o,{key:3},{default:r(()=>[a(o,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[a(o,{class:"flex flex-row",textColor:"text-yellow-500"},{default:r(()=>[a(o,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-yellow-500"}),c(" "+m(e.$t("core__be_waiting_for_approval")),1)]),_:1})]),_:1})]),_:1})):f("",!0),t.field=="status"&&t.row.status==1?(i(),v(o,{key:4},{default:r(()=>[a(o,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[a(o,{class:"flex flex-row",textColor:"text-green-600"},{default:r(()=>[a(o,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-green-600"}),c(" "+m(e.$t("core__be_approved")),1)]),_:1})]),_:1})]),_:1})):f("",!0),t.field=="status"&&t.row.status==2?(i(),v(o,{key:5},{default:r(()=>[a(o,{class:"whitespace-nowrap dark:text-white"},{default:r(()=>[a(o,{class:"flex flex-row",textColor:"text-red-500"},{default:r(()=>[a(o,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-red-500"}),c(" "+m(e.$t("core__be_rejected")),1)]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable","globalSearchPlaceholder"])]),_:1})],64)}var ht=ke(Se,[["render",Le]]);export{ht as default};
