import{e as be,g as he,P as fe,a as _e,d as ge}from"./PsLayout.js";import{d as ve,H as ye,i,J as w,R as we,D as A,O as J,r as g,o as n,c as m,b as o,w as l,f as I,p as c,t as u,g as p,a as d,F as V,q as R,n as E}from"./app.js";import{P as Ce}from"./PsButton.js";import{P as ke}from"./PsBannerIcon.js";import{P as Se}from"./PsBreadcrumb2.js";import{P as $e}from"./PsIcon.js";import{D as Oe}from"./PsTableSearch.js";import{P as De}from"./PsIconButton.js";import{P as Fe}from"./PsLabel.js";import{P as Pe}from"./PsLink1.js";import{P as Te}from"./PsToggle.js";import{P as Ie}from"./PsTable2.js";import{P as je}from"./PsBadge.js";import{a as Ue,b as Ve,c as He,d as Be}from"./psApiService.js";import{P as ze}from"./PsInput.js";import{P as Ae}from"./PsInputWithRightIcon.js";import{_ as Re}from"./plugin-vue_export-helper.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsLoading.js";import"./PsLabelCaption.js";import"./PsLoadingCircleDialog.js";import"./PsIcon1.js";import"./Icons.js";import"./toggle.js";import"./moment.js";const Ee=ve({name:"Index",components:{Head:ye,PsButton:Ce,PsTextButton:be,PsBannerIcon:ke,PsBreadcrumb2:Se,PsDangerDialog:he,PsIcon:$e,PsDropdown:fe,PsDropdownSelect:_e,Dropdown:Oe,PsIconButton:De,PsLabel:Fe,PsLink1:Pe,PsToggle:Te,PsTable2:Ie,PsBadge:je,PsInput:ze,PsInputWithRightIcon:Ae},layout:ge,props:{status:Object,items:Object,categories:Object,subcategories:Object,customizeHeaders:Object,customizeDetails:Object,cities:Object,townships:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedSubcategory:{type:String,default:""},selectedCity:{type:String,default:""},selectedTownship:{type:String,default:""},selectedPrice:{type:String,default:""},selectedAvailable:{type:String,default:""},selectedOwner:{type:String,default:""},selectedAddedDate:{type:String,default:""},selectedUpdatedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String},setup(e){let s=i(!1);const N=i(),M=e.selectedCategory||e.selectedSubcategory||e.selectedCity||e.selectedTownship||e.selectedPrice||e.selectedAvailable||e.selectedOwner||e.selectedAddedDate||e.selectedUpdatedDate?i(!0):i(!1),W=i(!1);let H=e.search?i(e.search):i(""),B=e.sort_field?i(e.sort_field):i(""),z=e.sort_order?i(e.sort_order):i("desc"),D=e.selectedCategory?i(e.selectedCategory.id):i(""),b=e.selectedSubcategory?i(e.selectedSubcategory.id):i(""),$=e.selectedCity?i(e.selectedCity.id):i(""),F=e.selectedTownship?i(e.selectedTownship.id):i(""),C=i([]),h=i(!1),O=i(),v=i(!1),k=i([]),P=i(!1),j=i(),T=i([]),U=i(!1),t=i(),y=i([]),L=i(!1),q=i();const Z=i(),x=[{label:w("core__be_action_label"),field:"action",type:"String"},{label:w("core__be_item"),field:"title",type:"String"},{label:w("core__be_posted_by"),field:"added_user_id@@name",type:"String"},{label:w("core__be_description"),field:"description",type:"String",sort:!1},{label:w("core__be_enable_lbl"),field:"enable",type:"String",sort:!1},{label:w("core__be_date"),field:"added_date",type:"Timestamp",sort:!1},{label:w("detail_label"),field:"detail",type:"Action",sort:!1}];function ee(r){B.value=r.field,z.value=r.sort_order,S()}function te(){D.value="all",b.value="all",$.value="all",F.value="all",H="",S()}function le(r){D.value=r,b.value="all",k.value=[],S(1)}function re(r){b.value=r,S(1)}function oe(r){$.value=r,F.value="all",y.value=[],S(1)}function ae(r){F.value=r,S(1)}function se(r){H.value=r,S(1)}function ie(r){S(1,r)}function S(r=null,a=null){J.Inertia.get(route("disable_item.index"),{sort_field:B.value,sort_order:z.value,page:r!=null?r:e.items.meta.current_page,row:a!=null?a:e.items.meta.per_page,search:H.value,category_filter:D.value,sub_category_filter:b.value,city_filter:$.value,township_filter:F.value},{preserveScroll:!0,preserveState:!0})}function ne(r){N.value.openModal(w("core__be_delete_disable_item"),w("core__be_delete_disable_item_info"),w("core__be_btn_confirm"),w("core__be_btn_cancel"),()=>{J.Inertia.delete(route("disable_item.destroy",r),{onSuccess:()=>{s.value=!0,setTimeout(()=>{s.value=!1},3e3)},onError:()=>{s.value=!0,setTimeout(()=>{s.value=!1},3e3)}})},()=>{})}let G=we({status:"",_method:"put"});function de(r){this.$inertia.put(route("disable_item.statusChange",r),G)}function K(r){h.value=!0,v.value=!0,Ue(r,O.value,e.authUser.id).then(a=>{a.data.length?a.data.forEach(f=>{C.value.push(f)}):h.value=!1,v.value=!1})}function ce(r=null){let a=C.value?C.value.length:0;(a==0||r==!0)&&K(a)}A(O,_.debounce((r,a)=>{let f=0;C.value=[],K(f)},500));function Q(r){P.value=!0,v.value=!0,Ve(r,j.value,e.authUser.id,D.value).then(a=>{a.data.length?a.data.forEach(f=>{k.value.push(f)}):P.value=!1,v.value=!1})}function ue(r=null){let a=k.value?k.value.length:0;(a==0||r==!0)&&Q(a)}A(j,_.debounce((r,a)=>{let f=0;k.value=[],Q(f)},500));function X(r){U.value=!0,v.value=!0,He(r,t.value,e.authUser.id).then(a=>{a.data.length?a.data.forEach(f=>{T.value.push(f)}):U.value=!1,v.value=!1})}function me(r=null){let a=T.value?T.value.length:0;(a==0||r==!0)&&X(a)}A(t,_.debounce((r,a)=>{let f=0;T.value=[],X(f)},500));function Y(r){L.value=!0,v.value=!0,Be(r,q.value,e.authUser.id,$.value).then(a=>{a.data.length?a.data.forEach(f=>{y.value.push(f)}):L.value=!1,v.value=!1})}function pe(r=null){let a=y.value?y.value.length:0;(a==0||r==!0)&&Y(a)}return A(q,_.debounce((r,a)=>{let f=0;y.value=[],Y(f)},500)),{handleStatusChange:de,form:G,showFilter:M,clearFilter:W,columns:x,confirmDeleteClicked:ne,ps_danger_dialog:N,colFilterOptions:Z,visible:s,handleSorting:ee,handleSearchingSorting:S,handleCategoryfilter:le,handleSubcategoryfilter:re,handleCityfilter:oe,handleTownshipfilter:ae,handleClearFilter:te,handleRow:ie,handleSearching:se,selected_cat:D,selected_sub_cat:b,selected_city:$,selected_township:F,dropdownClick:ce,categories:C,category_loadmore_visible:h,catSearch:O,subCategoryDropdownClick:ue,subCategories:k,subCategory_loadmore_visible:P,subCatSearch:j,is_loading:v,cityDropdownClick:me,cities:T,city_loadmore_visible:U,citySearch:t,townshipDropdownClick:pe,townships:y,townships_loadmore_visible:L,townshipsSearch:q}},computed:{breadcrumb(){return[{label:w("core__be_dashboard_label"),url:route("admin.index")},{label:w("disable_item_module"),color:"text-primary-500"}]}},created(){},methods:{handleDetail(e){this.$inertia.get(route("disable_item.edit",e))},FilterOptionshandle(e){J.Inertia.put(route("disable_item.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}}}),Ne={class:"rounded-md shadow-xs w-56"},Le={class:"pt-2 z-30"},qe=["onClick"],Je={class:"flex flex-row items-center justify-between"},Me={class:"mt-1 mx-1"},We={class:"rounded-md shadow-xs w-56"},Ge={class:"pt-2 z-30"},Ke=["onClick"],Qe={class:"flex flex-row items-center justify-between"},Xe={class:"mt-1 mx-1"},Ye={class:"rounded-md shadow-xs w-56"},Ze={class:"pt-2 z-30"},xe=["onClick"],et={class:"flex flex-row items-center justify-between"},tt={class:"mt-1 mx-1"},lt={class:"rounded-md shadow-xs w-56"},rt={class:"pt-2 z-30"},ot=["onClick"],at={class:"flex flex-row items-center justify-between"},st={class:"mt-1 mx-1"},it={key:0,class:"flex flex-row"},nt={key:1,class:"flex flex-row"},dt={key:2},ct={key:3},ut={key:4},mt={key:0,class:"flex flex-row"};function pt(e,s,N,M,W,H){const B=g("Head"),z=g("ps-breadcrumb-2"),D=g("ps-banner-icon"),b=g("ps-icon"),$=g("ps-text-button"),F=g("ps-icon-button"),C=g("ps-dropdown-select"),h=g("ps-label"),O=g("ps-input-with-right-icon"),v=g("ps-dropdown"),k=g("ps-button"),P=g("ps-badge"),j=g("ps-danger-dialog"),T=g("ps-table2"),U=g("ps-layout");return n(),m(V,null,[o(B,{title:e.$t("disable_item_module")},null,8,["title"]),o(U,null,{default:l(()=>[o(z,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(n(),I(D,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[c(u(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),o(T,{":row":e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_disable_search_item"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchRight:l(()=>[e.showFilter?(n(),I($,{key:0,onClick:s[0]||(s[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-2 px-4"},{default:l(()=>[o(b,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),c(" "+u(e.$t("core__be_clear_filter")),1)]),_:1})):p("",!0),o(F,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:s[1]||(s[1]=t=>e.showFilter=!e.showFilter)},{default:l(()=>[c(u(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:l(()=>[o(v,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[d("div",Ne,[d("div",Le,[d("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[2]||(s[2]=t=>e.handleCategoryfilter("all"))},[o(h,{class:"text-gray-200 ms-2"},{default:l(()=>[c(u(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),m(V,null,R(e.categories,t=>(n(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>e.handleCategoryfilter(t.id)},[o(h,{class:E(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:l(()=>[c(u(t.name),1)]),_:2},1032,["class"])],8,qe))),128))])])]),loadmore:l(()=>[e.category_loadmore_visible?(n(),m("div",{key:0,onClick:s[3]||(s[3]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[d("div",Je,[o(h,{class:"ms-2"},{default:l(()=>[c(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),o(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):p("",!0)]),filter:l(()=>[d("div",Me,[o(O,{class:"w-full h-10",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":s[4]||(s[4]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:l(()=>[o(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),e.$page.props.isSubCategoryOn=="1"?(n(),I(v,{key:0,onOnClick:e.subCategoryDropdownClick,class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_subcategory"),border:e.selected_sub_cat!==""&&e.selected_sub_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_sub_cat==""||e.selected_sub_cat=="all"?"":e.selectedSubcategory.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[d("div",We,[d("div",Ge,[d("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[5]||(s[5]=t=>e.handleSubcategoryfilter("all"))},[o(h,{class:"text-gray-200 ms-2"},{default:l(()=>[c(u(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),m(V,null,R(e.subCategories,t=>(n(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>e.handleSubcategoryfilter(t.id)},[o(h,{class:E(["ms-2",t.id==e.selected_sub_cat?" font-bold":""])},{default:l(()=>[c(u(t.name),1)]),_:2},1032,["class"])],8,Ke))),128))])])]),loadmore:l(()=>[e.subCategory_loadmore_visible?(n(),m("div",{key:0,onClick:s[6]||(s[6]=t=>e.subCategoryDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[d("div",Qe,[o(h,{class:"ms-2"},{default:l(()=>[c(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),o(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):p("",!0)]),filter:l(()=>[d("div",Xe,[o(O,{class:"w-full h-10",rounded:"rounded-lg",value:e.subCatSearch,"onUpdate:value":s[7]||(s[7]=t=>e.subCatSearch=t),placeholder:e.$t("core__be_search")},{icon:l(()=>[o(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"])):p("",!0),o(v,{onOnClick:e.cityDropdownClick,align:"",class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_city"),border:e.selected_city!==""&&e.selected_city!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_city==""||e.selected_city=="all"?"":e.selectedCity.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[d("div",Ye,[d("div",Ze,[d("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[8]||(s[8]=t=>e.handleCityfilter("all"))},[o(h,{class:"text-gray-200 ms-2"},{default:l(()=>[c(u(e.$t("core__be_select_all")),1)]),_:1})]),(n(!0),m(V,null,R(e.cities,t=>(n(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>e.handleCityfilter(t.id)},[o(h,{class:E(["ms-2",t.id==e.selected_city?" font-bold":""])},{default:l(()=>[c(u(t.name),1)]),_:2},1032,["class"])],8,xe))),128))])])]),loadmore:l(()=>[e.city_loadmore_visible?(n(),m("div",{key:0,onClick:s[9]||(s[9]=t=>e.cityDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[d("div",et,[o(h,{class:"ms-2"},{default:l(()=>[c(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),o(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):p("",!0)]),filter:l(()=>[d("div",tt,[o(O,{class:"w-full h-10",rounded:"rounded-lg",value:e.citySearch,"onUpdate:value":s[10]||(s[10]=t=>e.citySearch=t),placeholder:e.$t("core__be_search")},{icon:l(()=>[o(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),o(v,{onOnClick:e.townshipDropdownClick,class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_township"),border:e.selected_township!==""&&e.selected_township!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_township==""||e.selected_township=="all"?"":e.selectedTownship.name},null,8,["placeholder","border","selectedValue"])]),list:l(()=>[d("div",lt,[d("div",rt,[d("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:s[11]||(s[11]=t=>e.handleTownshipfilter("all"))},[o(h,{class:"text-gray-200 ms-2"},{default:l(()=>[c(u(e.$t("core__be_select_all")),1)]),_:1})]),d("div",null,[(n(!0),m(V,null,R(e.townships,t=>(n(),m("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>e.handleTownshipfilter(t.id)},[o(h,{class:E(["ms-2",t.id==e.selected_township?" font-bold":""])},{default:l(()=>[c(u(t.name),1)]),_:2},1032,["class"])],8,ot))),128))])])])]),loadmore:l(()=>[e.townships_loadmore_visible?(n(),m("div",{key:0,onClick:s[12]||(s[12]=t=>e.townshipDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[d("div",at,[o(h,{class:"ms-2"},{default:l(()=>[c(u(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),o(b,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):p("",!0)]),filter:l(()=>[d("div",st,[o(O,{class:"w-full h-10",rounded:"rounded-lg",value:e.townshipsSearch,"onUpdate:value":s[13]||(s[13]=t=>e.townshipsSearch=t),placeholder:e.$t("core__be_search")},{icon:l(()=>[o(b,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"])]),tableRow:l(t=>[t.field=="enable"?(n(),m("div",it,[o(k,{disabled:!t.row.authorizations.update,onClick:y=>[e.form.status="apply",e.handleStatusChange(t.row.id)],colors:"bg-green-500 text-white",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[c(u(e.$t("core__be_enable_lbl")),1)]),_:2},1032,["disabled","onClick"])])):p("",!0),t.field=="detail"?(n(),m("div",nt,[o($,{onClick:y=>e.handleDetail(t.row.id)},{default:l(()=>[c(u(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):p("",!0),t.field==e.itmPurchasedOption+"@@name"?(n(),m("span",dt,[t.row[e.itmPurchasedOption+"@@name"]?(n(),I(P,{key:0,class:""},{default:l(()=>[c(u(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):p("",!0)])):p("",!0),t.field==e.itmItemType+"@@name"?(n(),m("span",ct,[t.row[e.itmItemType+"@@name"]?(n(),I(P,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:l(()=>[c(u(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):p("",!0)])):p("",!0),t.field==e.itmConditionOfItem+"@@name"?(n(),m("span",ut,[t.row[e.itmConditionOfItem+"@@name"]?(n(),I(P,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:l(()=>[c(u(t.row[e.itmConditionOfItem+"@@name"]),1)]),_:2},1024)):p("",!0)])):p("",!0)]),tableActionRow:l(t=>[t.field=="action"?(n(),m("div",mt,[t.row.authorizations.delete?(n(),I(k,{key:0,onClick:y=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[o(b,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["onClick"])):p("",!0),o(j,{ref:"ps_danger_dialog"},null,512)])):p("",!0)]),_:1},8,[":row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var qt=Re(Ee,[["render",pt]]);export{qt as default};