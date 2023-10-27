import y from"./PsContentContainer.2eb168de.js";import C from"./PsLabelHeader4.6663f7f2.js";import U from"./PsLabel.3935ab2c.js";import h from"./PsButton.935d57c3.js";import x from"./PsIcon.0697a0d8.js";import I from"./PsRouteLink.14f8a093.js";import N from"./PsBreadcrumb2.43f3d05c.js";import V from"./PsNoResult.8f88a170.js";import{z as b,o as t,f as a,w as d,a as l,b as S,c as u,F as B,s as F,n as z,q as k,t as w,g as L,r as m}from"./app.df1b8390.js";import{u as M}from"./UserListStore.8cc2e749.js";import q from"./UserListHorizontal.0fc548fd.js";import{P as H}from"./PsValueStore.08b5513c.js";import{u as R,U as O}from"./UserStore.5c2fdd50.js";import D from"./PsFrontendLayout.9c0ecc46.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.317e88ef.js";import"./User.ca420d1f.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsCard.27eb6835.js";import"./RatingShow.465fe62d.js";import"./PsLabelCaption.a3843f8e.js";import"./PsLoadingDialog.16642bee.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsLabelTitle.7685c780.js";import"./UserFollowHolder.8b598f9e.js";import"./ps_constants.deaae373.js";import"./ProductStore.186e332b.js";import"./ProductParameterHolder.b3159892.js";import"./Product.dc190b28.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./FooterView.97dc7826.js";import"./FooterLinkSection.746092c6.js";import"./PsLink.0ee2fc53.js";import"./AppInfoStore.4b2c5718.js";import"./PsNavTabBar.6c5f8913.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./ItemLocationTownshipStore.9af11738.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.9d521488.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.1742bc34.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./PsNotificationBox.cc3868e0.js";import"./NotificationStore.987a5d48.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const T={name:"FollowingListView",components:{PsContentContainer:y,PsLabelHeader4:C,UserListHorizontal:q,PsLabel:U,PsButton:h,PsIcon:x,PsRouteLink:I,PsBreadcrumb2:N,PsNoResult:V},layout:D,props:["query","mobileSetting"],setup(r){var n,s;const _=H(),e=M("profile-following"),o=R(),p=_.getLoginUserId(),i=new O().getFollowingUsers();e.limit=(s=(n=r.mobileSetting)==null?void 0:n.default_loading_limit)!=null?s:12,i.loginUserId=r.query.userId,e.loadUserList(p,i),o.loadUser(r.query.userId);function c(){e.loadUserList(p,i)}return{userStore:e,loadMore:c,breadcrumbuserStore:o}},computed:{breadcrumb(){return[{label:b("ps_nav_bar__profile"),url:route("fe_profile")},{label:b("following_list__following_list"),color:"text-fePrimary-500"}]}}},j={class:"mt-32 mb-10"},A={class:"mb-6"},G={class:"mt-4"},J={key:0,class:"w-full"},K={class:"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"},Q={class:"flex flex-col items-center"};function W(r,_,e,o,p,i){const c=m("ps-breadcrumb-2"),n=m("user-list-horizontal"),s=m("ps-button"),v=m("ps-no-result"),P=m("ps-content-container");return t(),a(P,null,{content:d(()=>{var f;return[l("div",j,[l("div",A,[S(c,{items:i.breadcrumb,class:""},null,8,["items"])]),l("div",G,[o.userStore.userList.data!=null?(t(),u("div",J,[l("div",K,[(t(!0),u(B,null,F(o.userStore.userList.data,g=>(t(),u("div",{class:"w-full",key:g.userId},[S(n,{user:g,storeName:"profile-following"},null,8,["user"])]))),128))]),l("div",Q,[o.userStore.loading.value==!1?(t(),a(s,{key:0,class:z(["font-medium mx-auto mt-6",o.userStore.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:d(()=>[k(w(r.$t("follower_list__load_more")),1)]),_:1},8,["onClick","class"])):(t(),a(s,{key:1,class:"font-medium mx-auto mt-6",onClick:o.loadMore,disabled:!0},{default:d(()=>[k(w(r.$t("follower_list__loading")),1)]),_:1},8,["onClick"]))])])):L("",!0),o.userStore.loading.value==!1&&((f=o.userStore.userList)==null?void 0:f.data)==null?(t(),a(v,{key:1,onOnClick:o.loadMore},null,8,["onOnClick"])):L("",!0)])])]}),_:1})}var mt=E(T,[["render",W]]);export{mt as default};