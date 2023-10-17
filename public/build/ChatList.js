import{H as $,O as F,i as B,r as p,Q as q,o as r,c as i,b as l,a as s,w as n,p as m,t as a,F as w,q as I,g as E,m as M,f as S,n as R}from"./app.js";import D from"./PsIcon2.js";import O from"./PsLabelCaption32.js";import G from"./PsButton2.js";import Q from"./PsRouteLink.js";import{u as z}from"./ChatHistoryListStore.js";import{u as J,U as K}from"./UserUnReadMessageParameterHolder.js";import{P as W}from"./PsValueStore.js";import X from"./PsLabel2.js";import Z from"./PsAdSense.js";import{u as ee}from"./AppInfoStore.js";import{A as te}from"./AppInfoParameterHolder.js";import{P as y}from"./ps_constants.js";import se from"./ChatHorizontalItem.js";import oe from"./ChatBuyerHorizontalItem.js";import re from"./ChatSkeletorItem.js";import ae from"./PsFrontendLayout.js";import{_ as le}from"./plugin-vue_export-helper.js";import"./PsApiService2.js";import"./ChatHistory.js";import"./PsObject.js";import"./Product.js";import"./DefaultPhoto.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./ItemLocationTownship.js";import"./User.js";import"./RatingDetail.js";import"./SyncChatHistoryParameterHolder.js";import"./PsSepetetedStore.js";import"./PsCard2.js";import"./PsValueHolder.js";import"./moment.js";import"./format.min.js";import"./vue-skeletor.esm.js";/* empty css            */import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsLabelCaption3.js";import"./ProductParameterHolder.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownshipStore.js";import"./PsNavBar.js";import"./UserStore.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./index.esm.js";import"./auth.esm.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./PsNotificationBox.js";import"./ProductStore.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";class N{constructor(){this.userId="",this.returnType=""}ChatHistoryPrameterHolder(){this.userId="",this.returnType=""}getSellerHistoryList(){return this.userId="",this.returnType=y.CHAT_TYPE_SELLER,this}getBuyerHistoryList(){return this.userId="",this.returnType=y.CHAT_TYPE_BUYER,this}resetParameterHolder(){return this.userId="",this.returnType="",this}toMap(){const f={};return f.user_id=this.userId,f.return_type=this.returnType,f}}const ie={name:"ChatListView",components:{PsButton:G,PsLabel:X,PsLabelCaption3:O,PsIcon:D,ChatHorizontalItem:se,ChatBuyerHorizontalItem:oe,ChatSkeletorItem:re,PsRouteLink:Q,PsAdSense:Z,Head:$},props:["mobileSetting"],layout:ae,setup(t){var U,L,A,T;const f=W(),h=z("buyer"),e=z("seller");h.limit=(L=(U=t.mobileSetting)==null?void 0:U.default_loading_limit)!=null?L:12,e.limit=(T=(A=t.mobileSetting)==null?void 0:A.default_loading_limit)!=null?T:12;const b=J(),d=f.getLoginUserId();(d==null||d==""||d==y.NO_LOGIN_USER)&&F.Inertia.get(route("login"));const g=new N().resetParameterHolder(),_=new N().resetParameterHolder(),c=new K,u=B(!0),x=B(!1),C=ee(),H=new te;H.userId=d,g.userId=d,g.returnType=y.CHAT_TYPE_SELLER,_.userId=d,_.returnType=y.CHAT_TYPE_BUYER,c.userId=d,b.postUserUnreadMessageCount(c),P();async function P(){await h.resetChatHistoryList(d,_),u.value=!1}async function k(){x.value=!0,u.value=!0,await e.resetChatHistoryList(d,g),await b.postUserUnreadMessageCount(c),u.value=!1}async function v(){x.value=!1,u.value=!0,await h.resetChatHistoryList(d,_),await b.postUserUnreadMessageCount(c),u.value=!1}async function o(){await e.loadChatHistoryList(d,g)}async function V(){await h.loadChatHistoryList(d,_)}function Y($e){return"10"}function j(){F.Inertia.get(route("fe_item_entry"))}return{getPrice:Y,chatsellerhistorylistStore:e,chatbuyerhistorylistStore:h,userunreadmsgStore:b,sellerClicked:k,buyerClicked:v,ps_loading:u,isSellerFocus:x,PsConst:y,loadMore:o,loadMoreBuyer:V,appInfoStore:C,startSellingClicked:j}}},ne={class:"sm:mt-32 lg:mt-36 mt-28 mb-16 px-5 xl:px-52 mx-auto"},ce={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-10"},de={class:"col-start-0 col-span-4 sm:col-span-2 lg:col-span-3"},me={class:""},_e={key:0,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"sellerbtn",disabled:!0},ue={class:"me-2 md:me-4"},pe={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},fe={class:"me-2 md:me-4"},he={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},ge={key:1,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"buyerbtn",disabled:!0},ye={class:"me-2 md:me-4"},be={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},xe={class:"me-2 md:me-4"},Ce={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},ke={class:"col-span-4 sm:col-span-6 lg:col-span-9"},ve={key:0,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},we={key:1,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},Se={key:2},He={id:"seller",class:"w-full flex flex-col lg:p-4 p-2 sm:p-3"},Pe={class:"w-full"},Ie={class:"flex flex-col"},Ue={key:3,id:"seller",class:"flex flex-col mb-16"},Le={class:"flex flex-row"},Ae={key:0,class:"w-full flex flex-col lg:p-4 p-2 sm:p-3 rounded"},Te={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"},Fe={key:1,class:"flex flex-wrap w-full"},Be={class:"flex items-end justify-end"},Ee={key:4,id:"buyer",class:"flex flex-col mb-16"},Me={class:"flex flex-row"},Re={key:0,class:"w-full flex flex-col lg:p-4 p-2 sm:p-3 rounded"},ze={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"},Ne={key:1,class:"w-full"},Ve={class:"flex flex-wrap w-full"},Ye={class:"flex items-end justify-end"};function je(t,f,h,e,b,d){var v;const g=p("Head"),_=p("ps-label"),c=p("ps-button"),u=p("ps-ad-sense"),x=p("chat-skeletor-item"),C=p("ps-label-caption-3"),H=p("chat-horizontal-item"),P=p("chat-buyer-horizontal-item"),k=q("lazy");return r(),i(w,null,[l(g,{title:t.$t("chat_list__messages")},null,8,["title"]),s("div",ne,[s("div",ce,[s("div",de,[l(_,{class:"text-xl sm:text-3xl font-medium mb-5"},{default:n(()=>[m(a(t.$t("chat_list__messages")),1)]),_:1}),s("div",me,[e.isSellerFocus?(r(),i("div",ge,[l(c,{class:"w-full",colors:"bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50",border:"border border-feAchromatic-300 dark_border-feAchromatic-500",rounded:"rounded",onClick:e.buyerClicked},{default:n(()=>{var o;return[s("span",ye,a(t.$t("chat_list__from_buyer")),1),s("span",be,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.sellerUnreadCount),1)]}),_:1},8,["onClick"]),l(c,{class:"w-full",onClick:e.sellerClicked},{default:n(()=>{var o;return[s("span",xe,a(t.$t("chat_list__from_seller")),1),s("span",Ce,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.buyerUnreadCount),1)]}),_:1},8,["onClick"])])):(r(),i("div",_e,[l(c,{class:"w-full",onClick:e.buyerClicked},{default:n(()=>{var o;return[s("span",ue,a(t.$t("chat_list__from_buyer")),1),s("span",pe,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.sellerUnreadCount),1)]}),_:1},8,["onClick"]),l(c,{class:"w-full",colors:"bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50",border:"border border-feAchromatic-300 dark_border-feAchromatic-500",rounded:"rounded",onClick:e.sellerClicked},{default:n(()=>{var o;return[s("span",fe,a(t.$t("chat_list__from_seller")),1),s("span",he,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.buyerUnreadCount),1)]}),_:1},8,["onClick"])]))]),l(u)]),s("div",ke,[e.isSellerFocus?(r(),i("div",ve,[l(_,{class:"text-sm sm:text-xl font-medium"},{default:n(()=>[m(a(t.$t("chat_list__messages_from_seller")),1)]),_:1})])):(r(),i("div",we,[l(_,{class:"text-sm sm:text-xl font-medium"},{default:n(()=>[m(a(t.$t("chat_list__messages_from_buyer")),1)]),_:1})])),e.ps_loading==!0?(r(),i("div",Se,[s("div",He,[s("div",Pe,[s("div",Ie,[(r(),i(w,null,I(3,o=>s("div",{class:"w-full mt-2",key:o},[l(x)])),64))])])])])):E("",!0),e.isSellerFocus&&e.ps_loading==!1?(r(),i("div",Ue,[s("div",Le,[e.chatsellerhistorylistStore.chatHistoryList.data==null?(r(),i("div",Ae,[M(s("img",Te,null,512),[[k,{src:t.$page.props.sysImageUrl+"/undraw_quick_chat_rebit.png",loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(_,{class:"text-base text-center sm:text-2xl mb-3 mt-3"},{default:n(()=>[m(a(t.$t("chat_list_no_messages")),1)]),_:1}),l(C,{class:"text-center mb-2"},{default:n(()=>[m(a(t.$t("chat_list_no_messages__paragraph")),1)]),_:1}),l(c,{onClick:e.startSellingClicked,class:"w-full sm:mx-auto sm:w-[456px]"},{default:n(()=>[m(a(t.$t("chat_list__start_selling")),1)]),_:1},8,["onClick"])])):(r(),i("div",Fe,[(r(!0),i(w,null,I((v=e.chatsellerhistorylistStore.chatHistoryList)==null?void 0:v.data,o=>(r(),i("div",{class:"mt-2 w-full",key:o.id},[l(H,{dateFormat:t.$page.props.dateFormat,chathistory:o},null,8,["dateFormat","chathistory"])]))),128))]))]),s("div",Be,[e.chatsellerhistorylistStore.loading.value==!1?(r(),S(c,{key:0,class:R(["w-[108px] mx-auto mt-4",e.chatsellerhistorylistStore.isNoMoreRecord?"hidden":""]),onClick:e.loadMore},{default:n(()=>[m(a(t.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(r(),S(c,{key:1,class:"w-[108px] mx-auto mt-4",disabled:!0},{default:n(()=>[m(a(t.$t("list__loading")),1)]),_:1}))])])):e.ps_loading==!1?(r(),i("div",Ee,[s("div",Me,[e.chatbuyerhistorylistStore.chatHistoryList.data==null?(r(),i("div",Re,[M(s("img",ze,null,512),[[k,{src:t.$page.props.sysImageUrl+"/undraw_quick_chat_rebit.png",loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(_,{class:"text-base text-center sm:text-2xl mb-3 mt-3"},{default:n(()=>[m(a(t.$t("chat_list_no_messages")),1)]),_:1}),l(C,{class:"text-center mb-2"},{default:n(()=>[m(a(t.$t("chat_list_no_messages__paragraph")),1)]),_:1}),l(c,{onClick:e.startSellingClicked,class:"w-full sm:mx-auto sm:w-[456px]"},{default:n(()=>[m(a(t.$t("chat_list__start_selling")),1)]),_:1},8,["onClick"])])):(r(),i("div",Ne,[s("div",Ve,[(r(!0),i(w,null,I(e.chatbuyerhistorylistStore.chatHistoryList.data,o=>(r(),i("div",{class:"w-full mt-2",key:o.id},[l(P,{dateFormat:t.$page.props.dateFormat,chathistory:o},null,8,["dateFormat","chathistory"])]))),128))])]))]),s("div",Ye,[e.chatbuyerhistorylistStore.loading.value==!1?(r(),S(c,{key:0,class:R(["w-[108px] mt-4 mx-auto",e.chatbuyerhistorylistStore.isNoMoreRecord.value?"hidden":""]),onClick:e.loadMoreBuyer},{default:n(()=>[m(a(t.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(r(),S(c,{key:1,class:"w-[108px] mx-auto mt-4",disabled:!0},{default:n(()=>[m(a(t.$t("list__loading")),1)]),_:1}))])])):E("",!0)])])])],64)}var ts=le(ie,[["render",je]]);export{ts as default};