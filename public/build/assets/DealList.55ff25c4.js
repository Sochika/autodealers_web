import{Z as k,o as a,c,b as l,w as s,a as n,q as i,t as r,F as p,s as w,f,n as C,r as e}from"./app.df1b8390.js";import{c as P}from"./DealOptionProvider.a650b3ba.js";import L from"./PsContentContainer.2eb168de.js";import g from"./PsButton.935d57c3.js";import D from"./PsLabel.3935ab2c.js";import y from"./PsLabelHeader4.6663f7f2.js";import B from"./DealHorizontalItem.d1869e30.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./PsCard.27eb6835.js";import"./PsIcon.0697a0d8.js";const z={name:"DealListView",components:{PsContentContainer:L,PsButton:g,PsLabel:D,PsLabelHeader4:y,DealHorizontalItem:B,Head:k},setup(){const t=P();t.loadDealOptionList();function d(){t.loadDealOptionList()}return{dealoptionProvider:t,loadMore:d}}},M={class:"flex flex-col mb-4"},N={class:"flex flex-col items-start mt-2"},O={class:"flex flex-row mb-8 mt-4"},V={class:"w-full flex flex-col"},$={class:"flex flex-wrap"};function F(t,d,S,o,q,E){const u=e("Head"),v=e("ps-label-header-4"),x=e("ps-label"),b=e("deal-horizontal-item"),_=e("ps-button"),h=e("ps-content-container");return a(),c(p,null,[l(u,{title:t.$t("deal_list__title")},null,8,["title"]),l(h,{class:"sm:mt-32 lg:mt-36 mt-28"},{content:s(()=>[n("div",M,[n("div",N,[l(v,{class:"font-medium"},{default:s(()=>[i(r(t.$t("deal_list__title")),1)]),_:1}),l(x,{class:"mt-2 text-center"},{default:s(()=>[i(r(t.$t("deal_list__text")),1)]),_:1})]),n("div",O,[n("div",V,[n("div",$,[(a(!0),c(p,null,w(o.dealoptionProvider.dealOptionList.data,m=>(a(),c("div",{class:"w-full",key:m.id},[l(b,{deal:m},null,8,["deal"])]))),128))]),o.dealoptionProvider.loading.value==!1?(a(),f(_,{key:0,class:C(["w-60 mx-auto mt-8",o.dealoptionProvider.isNoMoreRecord?"hidden":""]),onClick:o.loadMore},{default:s(()=>[i(r(t.$t("category_list__load_more")),1)]),_:1},8,["onClick","class"])):(a(),f(_,{key:1,class:"w-60 mx-auto mt-8",onClick:o.loadMore,disabled:!0},{default:s(()=>[i(r(t.$t("category_list__loading")),1)]),_:1},8,["onClick"]))])])])]),_:1})],64)}var X=H(z,[["render",F]]);export{X as default};
