import{Z as u,o as m,c as i,b as o,w as s,a as d,q as f,t as b,g as y,F as S,r}from"./app.df1b8390.js";import V from"./PsContentContainer.2eb168de.js";import g from"./PsLabelTitle.7685c780.js";import U from"./PsLabel.3935ab2c.js";import{u as L}from"./AboutUsStore.61de9f88.js";import P from"./PsFrontendLayout.9c0ecc46.js";import{P as C}from"./PsValueStore.08b5513c.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.97dc7826.js";import"./FooterLinkSection.746092c6.js";import"./PsLink.0ee2fc53.js";import"./PsRouteLink.14f8a093.js";import"./PsLabelCaption.a3843f8e.js";import"./PsIcon.0697a0d8.js";import"./ProductParameterHolder.b3159892.js";import"./ps_constants.deaae373.js";import"./AppInfoStore.4b2c5718.js";import"./PsNavTabBar.6c5f8913.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsButton.935d57c3.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.9af11738.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.9d521488.js";import"./UserStore.5c2fdd50.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.1742bc34.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./PsNotificationBox.cc3868e0.js";import"./ProductStore.186e332b.js";import"./Product.dc190b28.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.987a5d48.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const T={name:"SafetyView",components:{PsContentContainer:V,PsLabelTitle:g,PsLabel:U,Head:u},layout:P,setup(e){const p=L(),t=C().getLoginUserId();return p.loadAboutUs(t),{aboutUsStore:p}}},h={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},N={key:0,class:"mt-4"};function $(e,p,a,t,k,v){const n=r("Head"),l=r("ps-label-title"),c=r("ps-label"),_=r("ps-content-container");return m(),i(S,null,[o(n,{title:e.$t("safety__safety_tips")},null,8,["title"]),o(_,null,{content:s(()=>[d("div",h,[o(l,null,{default:s(()=>[f(b(e.$t("safety__safety_tips")),1)]),_:1}),t.aboutUsStore.aboutus.data!=null?(m(),i("p",N,[o(c,{innerHTML:t.aboutUsStore.aboutus.data.safetyTips},null,8,["innerHTML"])])):y("",!0)])]),_:1})],64)}var Bt=H(T,[["render",$]]);export{Bt as default};
