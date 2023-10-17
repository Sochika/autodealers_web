import{H as R,J as v,r,o as e,c as i,b as s,w as d,a as o,p as f,t as g,F as h,q as j,f as k,n as C}from"./app.js";import S from"./PsContentContainer.js";import z from"./PsLabelHeader42.js";import V from"./PsLabel2.js";import B from"./PsButton2.js";import N from"./PsIcon2.js";import M from"./PsRouteLink.js";import F from"./ItemHorizontalItem.js";import U from"./ItemHorizontalSkeletorItem.js";import{P as D}from"./PsValueStore.js";import{u as q}from"./ProductStore.js";import{P as w}from"./ProductParameterHolder.js";import E from"./PsFrontendLayout.js";import J from"./PsBreadcrumb22.js";import T from"./PsNoDataList.js";/* empty css            */import{_ as A}from"./plugin-vue_export-helper.js";import"./vue-router.esm-bundler.js";import"./PsLabelTitle4.js";import"./PsCard2.js";import"./ps_constants.js";import"./PsAdSense.js";import"./AppInfoStore.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./AppInfoParameterHolder.js";import"./PsLoadingDialog3.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsLabelTitle2.js";import"./format.min.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./ItemLocationTownship.js";import"./User.js";import"./RatingDetail.js";import"./PsValueHolder.js";import"./FavouriteItemStore.js";import"./PsSepetetedStore.js";import"./FollowItemParameterHolder.js";import"./PsUtils.js";import"./moment.js";import"./ApiStatus.js";import"./vue-skeletor.esm.js";import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsLabelCaption3.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownshipStore.js";import"./PsNavBar.js";import"./UserStore.js";import"./UserListParameterHolder.js";import"./index.esm.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsNotificationBox.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";const G={name:"RejectItemListView",components:{PsContentContainer:S,PsLabelHeader4:z,PsLabel:V,ItemHorizontalItem:F,PsButton:B,PsIcon:N,ItemHorizontalSkeletorItem:U,PsRouteLink:M,PsBreadcrumb2:J,PsNoData:T,Head:R},props:["mobileSetting"],layout:E,setup(m){var n,c;const l=D().getLoginUserId(),t=q("reject");t.limit=(c=(n=m.mobileSetting)==null?void 0:n.default_loading_limit)!=null?c:12;const a=new w().getRejectedItemParameterHolder();t.paramHolder=new w().getRejectedItemParameterHolder(),a.addedUserId=l,t.resetProductList(l,a);function _(){t.loadItemList(l,a)}function u(){t.resetProductList(l,a)}return{itemrejectProvider:t,loadMore:_,handleRefresh:u}},computed:{breadcrumb(){return[{label:v("ps_nav_bar__profile"),url:route("fe_profile")},{label:v("reject_item_list__reject_item_list"),color:"text-fePrimary-500"}]}}},K={class:"mt-32"},O={class:""},Q={class:"lg:flex md:flex lg:justify-between md:justify-between mt-6"},W={class:"flex flex-col mt-6"},X={class:"flex flex-row mb-8"},Y={class:"w-full flex flex-col"},Z={key:0},$={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},tt={key:1},et={class:"w-full grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},ot={key:2,class:"w-full flex justify-center flex-col"};function rt(m,x,l,t,a,_){const u=r("Head"),n=r("ps-breadcrumb-2"),c=r("ps-label-header-4"),y=r("item-horizontal-item"),H=r("item-horizontal-skeletor-item"),I=r("ps-no-data"),P=r("ps-button"),L=r("ps-content-container");return e(),i(h,null,[s(u,{title:m.$t("reject_item_list__reject_item_list")},null,8,["title"]),s(L,null,{content:d(()=>{var b;return[o("div",K,[o("div",O,[s(n,{items:_.breadcrumb,class:""},null,8,["items"])]),o("div",Q,[s(c,{class:"font-medium"},{default:d(()=>[f(g(m.$t("reject_item_list__reject_item_list")),1)]),_:1})]),o("div",W,[o("div",X,[o("div",Y,[((b=t.itemrejectProvider.itemList)==null?void 0:b.data)!=null?(e(),i("div",Z,[o("div",$,[(e(!0),i(h,null,j(t.itemrejectProvider.itemList.data,p=>(e(),i("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:p.id},[s(y,{item:p,storeName:"reject"},null,8,["item"])]))),128))])])):t.itemrejectProvider.loading.value==!0?(e(),i("div",tt,[o("div",et,[(e(),i(h,null,j(3,p=>o("div",{class:"w-full col-span-2 lg:col-span-3",key:p},[s(H)])),64))])])):(e(),i("div",ot,[s(I,{onHandleRefresh:t.handleRefresh,name:"list__reject_items_no_result"},null,8,["onHandleRefresh"])]))])]),t.itemrejectProvider.loading.value==!1?(e(),k(P,{key:0,class:C(["w-60 mx-auto mt-8",t.itemrejectProvider.isNoMoreRecord.value?"hidden":""]),onClick:t.loadMore},{default:d(()=>[f(g(m.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(e(),k(P,{key:1,class:"w-60 mx-auto mt-8",onClick:t.loadMore,disabled:!0},{default:d(()=>[f(g(m.$t("list__loading")),1)]),_:1},8,["onClick"]))])])]}),_:1})],64)}var ve=A(G,[["render",rt]]);export{ve as default};