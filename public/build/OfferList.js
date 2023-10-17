import{H as O,O as E,i as w,r as c,o as s,c as r,b as o,a as i,w as a,p as m,t as f,F as v,q as k,g as L}from"./app.js";import H from"./PsIcon2.js";import A from"./PsLabelCaption32.js";import R from"./PsButton2.js";import U from"./PsRouteLink.js";import B from"./PsLabel2.js";import{u as S}from"./OfferStore.js";import{P as F}from"./PsValueStore.js";import{P as u}from"./ps_constants.js";import Y from"./ChatHorizontalItem.js";import V from"./ChatBuyerHorizontalItem.js";import z from"./ChatSkeletorItem.js";import{_ as N}from"./plugin-vue_export-helper.js";import"./PsApiService2.js";import"./PsObject.js";import"./Product.js";import"./DefaultPhoto.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./ItemLocationTownship.js";import"./User.js";import"./RatingDetail.js";import"./ApiStatus.js";import"./PsSepetetedStore.js";import"./PsCard2.js";import"./AppInfoStore.js";import"./AppInfoParameterHolder.js";import"./PsValueHolder.js";import"./ChatHistory.js";import"./moment.js";import"./format.min.js";import"./vue-skeletor.esm.js";/* empty css            */class q{constructor(){this.userId="",this.returnType=""}OfferParameterHolder(){this.userId="",this.returnType=""}getOfferSentList(){return this.userId="",this.returnType=u.CHAT_TYPE_SELLER,this}getOfferReceivedList(){return this.userId="",this.returnType=u.CHAT_TYPE_BUYER,this}resetParameterHolder(){return this.userId="",this.returnType="",this}toMap(){const _={};return _.user_id=this.userId,_.return_type=this.returnType,_}}const M={name:"OfferListView",components:{PsButton:R,PsLabel:B,PsLabelCaption3:A,PsIcon:H,ChatHorizontalItem:Y,ChatBuyerHorizontalItem:V,ChatSkeletorItem:z,PsRouteLink:U,Head:O},setup(){const l=F(),_=S(),y=S(),t=l.getLoginUserId();(t==null||t==""||t==u.NO_LOGIN_USER)&&E.Inertia.get(route("login"));const n=new q().resetParameterHolder(),d=w(!0),g=w(!0);n.userId=t,n.returnType=u.CHAT_TYPE_SELLER,x();async function x(){await _.resetOfferList(n),d.value=!1}async function p(){g.value=!0,d.value=!0,n.userId=t,n.returnType=u.CHAT_TYPE_SELLER,await _.resetOfferList(n),d.value=!1}async function b(){g.value=!1,d.value=!0,n.userId=t,n.returnType=u.CHAT_TYPE_BUYER,await y.resetOfferList(n),d.value=!1}return{offerListProvider:_,offerReceivedListProvider:y,sellerClicked:p,buyerClicked:b,ps_loading:d,PsConst:u,isSellerFocus:g}}},D={class:"sm:mt-32 lg:mt-36 mt-28 mb-16 w-mobile sm:w-median lg:w-large mx-auto"},G={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},j={class:"col-span-4 sm:col-span-8 lg:col-span-12"},J={class:"col-start-0 col-span-4 sm:col-span-2 lg:col-span-3"},K={class:""},Q={key:0,class:"flex flex-row rtl:space-x-reverse space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col",id:"sellerbtn",disabled:!0},W={key:1,class:"flex flex-row rtl:space-x-reverse space-x-3.5 sm:space-x-0 space-y-0 sm:space-y-3.5 sm:flex-col",id:"buyerbtn",disabled:!0},X={class:"col-span-4 sm:col-span-6 lg:col-span-9"},Z={key:0,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},$={key:1,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},ee={key:2},te={id:"seller",class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},se={class:"w-full"},re={class:"flex flex-col"},oe={key:3,id:"seller",class:"flex flex-row mb-16"},le={key:0,class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},ie={key:1,class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},ae={class:"flex flex-wrap"},ne={key:4,id:"buyer",class:"flex flex-row mb-16"},ce={key:0,class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"},me={key:1,class:"w-full"},fe={class:"w-full flex flex-col bg-fePrimary-50 dark_bg-feAchromatic-800 lg:p-4 p-2 sm:p-3 rounded-2xl"};function _e(l,_,y,t,n,d){const g=c("Head"),x=c("ps-label"),p=c("ps-button"),b=c("chat-skeletor-item"),h=c("ps-icon"),P=c("ps-label-caption-3"),I=c("chat-horizontal-item"),C=c("ps-route-link"),T=c("chat-buyer-horizontal-item");return s(),r(v,null,[o(g,{title:l.$("offer_list__offer")},null,8,["title"]),i("div",D,[i("div",G,[i("div",j,[o(x,{class:"text-xl sm:text-3xl font-medium"},{default:a(()=>[m(f(l.$t("offer_list__offer")),1)]),_:1})]),i("div",J,[i("div",K,[t.isSellerFocus?(s(),r("div",Q,[o(p,{class:"w-full",onClick:t.sellerClicked},{default:a(()=>[m(f(l.$t("offer_list__offer_sent")),1)]),_:1},8,["onClick"]),o(p,{class:"w-full",theme:"dark_bg-feSecondary-100 dark_text-feAchromatic-50 bg-fePrimary-50 text-fePrimary-400",onClick:t.buyerClicked},{default:a(()=>[m(f(l.$t("offer_list__offer_received")),1)]),_:1},8,["onClick"])])):(s(),r("div",W,[o(p,{class:"w-full",theme:"dark_bg-feSecondary-100 dark_text-feAchromatic-50 bg-fePrimary-50 text-fePrimary-400",onClick:t.sellerClicked},{default:a(()=>[m(f(l.$t("offer_list__offer_sent")),1)]),_:1},8,["onClick"]),o(p,{class:"w-full",onClick:t.buyerClicked},{default:a(()=>[m(f(l.$t("offer_list__offer_received")),1)]),_:1},8,["onClick"])]))])]),i("div",X,[t.isSellerFocus?(s(),r("div",Z,[o(x,{class:"text-sm sm:text-xl font-medium"},{default:a(()=>[m(f(l.$t("offer_list__offer_sent")),1)]),_:1})])):(s(),r("div",$,[o(x,{class:"text-sm sm:text-xl font-medium"},{default:a(()=>[m(f(l.$t("offer_list__offer_received")),1)]),_:1})])),t.ps_loading?(s(),r("div",ee,[i("div",te,[i("div",se,[i("div",re,[(s(),r(v,null,k(3,e=>i("div",{class:"w-full mt-2",key:e},[o(b)])),64))])])])])):L("",!0),t.isSellerFocus&&t.ps_loading==!1?(s(),r("div",oe,[t.offerListProvider.offerList.data==null?(s(),r("div",le,[o(h,{name:"mailOpen",textColor:"text-feSecondary-400 dark_text-feAchromatic-500",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),o(P,{class:"text-center mb-2"},{default:a(()=>[m(f(l.$t("offer_list__nothing_in_offer_sent")),1)]),_:1})])):(s(),r("div",ie,[i("div",ae,[(s(!0),r(v,null,k(t.offerListProvider.offerList.data,e=>(s(),r("div",{class:"mt-2 w-full",key:e.id},[o(C,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,condition:e.item.conditionOfItem.name,chat_flag:t.PsConst.CHAT_FROM_SELLER.toString(),is_sold_out:e.item.isSoldOut}}},{default:a(()=>[o(I,{chathistory:e},null,8,["chathistory"])]),_:2},1032,["to"])]))),128))])]))])):t.ps_loading==!1?(s(),r("div",ne,[t.offerReceivedListProvider.offerList.data==null?(s(),r("div",ce,[o(h,{name:"mailOpen",textColor:"text-feSecondary-400 dark_text-feAchromatic-500",class:"mt-2 w-full mx-auto",w:"80",h:"80"}),o(P,{class:"text-center mb-2"},{default:a(()=>[m(f(l.$t("offer_list__nothing_in_offer_received")),1)]),_:1})])):(s(),r("div",me,[i("div",fe,[(s(!0),r(v,null,k(t.offerReceivedListProvider.offerList.data,e=>(s(),r("div",{class:"w-full mt-2",key:e.id},[o(C,{to:{name:"chat",query:{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_name:e.item.title,item_id:e.itemId,item_image_name:e.item.defaultPhoto.imgPath,item_price:e.item.price,currency:e.item.itemCurrency.currencySymbol,condition:e.item.conditionOfItem.name,chat_flag:t.PsConst.CHAT_FROM_BUYER.toString(),is_sold_out:e.item.isSoldOut}}},{default:a(()=>[o(T,{chathistory:e},null,8,["chathistory"])]),_:2},1032,["to"])]))),128))])]))])):L("",!0)])])])],64)}var Je=N(M,[["render",_e]]);export{Je as default};
