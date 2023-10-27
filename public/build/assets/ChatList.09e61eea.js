import{Z as O,O as E,i as F,o as r,c as i,b as l,a as s,w as n,q as m,t as a,F as w,s as I,g as B,m as M,f as S,n as R,r as p,E as $}from"./app.df1b8390.js";import q from"./PsIcon.0697a0d8.js";import D from"./PsLabelCaption3.aa24a01b.js";import G from"./PsButton.935d57c3.js";import Z from"./PsRouteLink.14f8a093.js";import{u as z}from"./ChatHistoryListStore.55417f44.js";import{u as J,U as K}from"./UserUnReadMessageParameterHolder.1742bc34.js";import{P as Q}from"./PsValueStore.08b5513c.js";import W from"./PsLabel.3935ab2c.js";import X from"./PsAdSense.77c17409.js";import{u as ee}from"./AppInfoStore.4b2c5718.js";import{A as te}from"./AppInfoParameterHolder.e24d894d.js";import{P as y}from"./ps_constants.deaae373.js";import se from"./ChatHorizontalItem.a237256f.js";import oe from"./ChatBuyerHorizontalItem.b23d4b03.js";import re from"./ChatSkeletorItem.499dff9e.js";import ae from"./PsFrontendLayout.9c0ecc46.js";import{_ as le}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.317e88ef.js";import"./ChatHistory.9258b4a4.js";import"./PsObject.a17ef38f.js";import"./Product.dc190b28.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./SyncChatHistoryParameterHolder.24ffbfbb.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsCard.27eb6835.js";import"./PsValueHolder.2dad780d.js";import"./moment.9709ab41.js";import"./format.min.427d9f09.js";import"./vue-skeletor.esm.6f33d49c.js";/* empty css                     */import"./FooterView.97dc7826.js";import"./FooterLinkSection.746092c6.js";import"./PsLink.0ee2fc53.js";import"./PsLabelCaption.a3843f8e.js";import"./ProductParameterHolder.b3159892.js";import"./PsNavTabBar.6c5f8913.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./ItemLocationTownshipStore.9af11738.js";import"./PsNavBar.9d521488.js";import"./UserStore.5c2fdd50.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./PsNotificationBox.cc3868e0.js";import"./ProductStore.186e332b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.987a5d48.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";class N{constructor(){this.userId="",this.returnType=""}ChatHistoryPrameterHolder(){this.userId="",this.returnType=""}getSellerHistoryList(){return this.userId="",this.returnType=y.CHAT_TYPE_SELLER,this}getBuyerHistoryList(){return this.userId="",this.returnType=y.CHAT_TYPE_BUYER,this}resetParameterHolder(){return this.userId="",this.returnType="",this}toMap(){const f={};return f.user_id=this.userId,f.return_type=this.returnType,f}}const ie={name:"ChatListView",components:{PsButton:G,PsLabel:W,PsLabelCaption3:D,PsIcon:q,ChatHorizontalItem:se,ChatBuyerHorizontalItem:oe,ChatSkeletorItem:re,PsRouteLink:Z,PsAdSense:X,Head:O},props:["mobileSetting"],layout:ae,setup(t){var U,L,A,T;const f=Q(),h=z("buyer"),e=z("seller");h.limit=(L=(U=t.mobileSetting)==null?void 0:U.default_loading_limit)!=null?L:12,e.limit=(T=(A=t.mobileSetting)==null?void 0:A.default_loading_limit)!=null?T:12;const b=J(),d=f.getLoginUserId();(d==null||d==""||d==y.NO_LOGIN_USER)&&E.get(route("login"));const g=new N().resetParameterHolder(),_=new N().resetParameterHolder(),c=new K,u=F(!0),x=F(!1),C=ee(),H=new te;H.userId=d,g.userId=d,g.returnType=y.CHAT_TYPE_SELLER,_.userId=d,_.returnType=y.CHAT_TYPE_BUYER,c.userId=d,b.postUserUnreadMessageCount(c),P();async function P(){await h.resetChatHistoryList(d,_),u.value=!1}async function k(){x.value=!0,u.value=!0,await e.resetChatHistoryList(d,g),await b.postUserUnreadMessageCount(c),u.value=!1}async function v(){x.value=!1,u.value=!0,await h.resetChatHistoryList(d,_),await b.postUserUnreadMessageCount(c),u.value=!1}async function o(){await e.loadChatHistoryList(d,g)}async function V(){await h.loadChatHistoryList(d,_)}function Y(Oe){return"10"}function j(){E.get(route("fe_item_entry"))}return{getPrice:Y,chatsellerhistorylistStore:e,chatbuyerhistorylistStore:h,userunreadmsgStore:b,sellerClicked:k,buyerClicked:v,ps_loading:u,isSellerFocus:x,PsConst:y,loadMore:o,loadMoreBuyer:V,appInfoStore:C,startSellingClicked:j}}},ne={class:"sm:mt-32 lg:mt-36 mt-28 mb-16 px-5 xl:px-52 mx-auto"},ce={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-10"},de={class:"col-start-0 col-span-4 sm:col-span-2 lg:col-span-3"},me={class:""},_e={key:0,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"sellerbtn",disabled:!0},ue={class:"me-2 md:me-4"},pe={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},fe={class:"me-2 md:me-4"},he={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},ge={key:1,class:"flex flex-row rtl:space-x-reverse space-x-2 sm:space-x-0 space-y-0 sm:space-y-2 sm:flex-col",id:"buyerbtn",disabled:!0},ye={class:"me-2 md:me-4"},be={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},xe={class:"me-2 md:me-4"},Ce={class:"rounded-full w-8 float-right bg-fePrimary-500 text-feAchromatic-50"},ke={class:"col-span-4 sm:col-span-6 lg:col-span-9"},ve={key:0,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},we={key:1,class:"col-span-4 sm:col-span-6 lg:col-span-9 mb-2"},Se={key:2},He={id:"seller",class:"w-full flex flex-col lg:p-4 p-2 sm:p-3"},Pe={class:"w-full"},Ie={class:"flex flex-col"},Ue={key:3,id:"seller",class:"flex flex-col mb-16"},Le={class:"flex flex-row"},Ae={key:0,class:"w-full flex flex-col lg:p-4 p-2 sm:p-3 rounded"},Te={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"},Ee={key:1,class:"flex flex-wrap w-full"},Fe={class:"flex items-end justify-end"},Be={key:4,id:"buyer",class:"flex flex-col mb-16"},Me={class:"flex flex-row"},Re={key:0,class:"w-full flex flex-col lg:p-4 p-2 sm:p-3 rounded"},ze={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"},Ne={key:1,class:"w-full"},Ve={class:"flex flex-wrap w-full"},Ye={class:"flex items-end justify-end"};function je(t,f,h,e,b,d){var v;const g=p("Head"),_=p("ps-label"),c=p("ps-button"),u=p("ps-ad-sense"),x=p("chat-skeletor-item"),C=p("ps-label-caption-3"),H=p("chat-horizontal-item"),P=p("chat-buyer-horizontal-item"),k=$("lazy");return r(),i(w,null,[l(g,{title:t.$t("chat_list__messages")},null,8,["title"]),s("div",ne,[s("div",ce,[s("div",de,[l(_,{class:"text-xl sm:text-3xl font-medium mb-5"},{default:n(()=>[m(a(t.$t("chat_list__messages")),1)]),_:1}),s("div",me,[e.isSellerFocus?(r(),i("div",ge,[l(c,{class:"w-full",colors:"bg-feAchromatic-50 dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",border:"border border-feAchromatic-300 dark:border-feAchromatic-500",rounded:"rounded",onClick:e.buyerClicked},{default:n(()=>{var o;return[s("span",ye,a(t.$t("chat_list__from_buyer")),1),s("span",be,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.sellerUnreadCount),1)]}),_:1},8,["onClick"]),l(c,{class:"w-full",onClick:e.sellerClicked},{default:n(()=>{var o;return[s("span",xe,a(t.$t("chat_list__from_seller")),1),s("span",Ce,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.buyerUnreadCount),1)]}),_:1},8,["onClick"])])):(r(),i("div",_e,[l(c,{class:"w-full",onClick:e.buyerClicked},{default:n(()=>{var o;return[s("span",ue,a(t.$t("chat_list__from_buyer")),1),s("span",pe,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.sellerUnreadCount),1)]}),_:1},8,["onClick"]),l(c,{class:"w-full",colors:"bg-feAchromatic-50 dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",border:"border border-feAchromatic-300 dark:border-feAchromatic-500",rounded:"rounded",onClick:e.sellerClicked},{default:n(()=>{var o;return[s("span",fe,a(t.$t("chat_list__from_seller")),1),s("span",he,a((o=e.userunreadmsgStore.unreadCount.data)==null?void 0:o.buyerUnreadCount),1)]}),_:1},8,["onClick"])]))]),l(u)]),s("div",ke,[e.isSellerFocus?(r(),i("div",ve,[l(_,{class:"text-sm sm:text-xl font-medium"},{default:n(()=>[m(a(t.$t("chat_list__messages_from_seller")),1)]),_:1})])):(r(),i("div",we,[l(_,{class:"text-sm sm:text-xl font-medium"},{default:n(()=>[m(a(t.$t("chat_list__messages_from_buyer")),1)]),_:1})])),e.ps_loading==!0?(r(),i("div",Se,[s("div",He,[s("div",Pe,[s("div",Ie,[(r(),i(w,null,I(3,o=>s("div",{class:"w-full mt-2",key:o},[l(x)])),64))])])])])):B("",!0),e.isSellerFocus&&e.ps_loading==!1?(r(),i("div",Ue,[s("div",Le,[e.chatsellerhistorylistStore.chatHistoryList.data==null?(r(),i("div",Ae,[M(s("img",Te,null,512),[[k,{src:t.$page.props.sysImageUrl+"/undraw_quick_chat_rebit.png",loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(_,{class:"text-base text-center sm:text-2xl mb-3 mt-3"},{default:n(()=>[m(a(t.$t("chat_list_no_messages")),1)]),_:1}),l(C,{class:"text-center mb-2"},{default:n(()=>[m(a(t.$t("chat_list_no_messages__paragraph")),1)]),_:1}),l(c,{onClick:e.startSellingClicked,class:"w-full sm:mx-auto sm:w-[456px]"},{default:n(()=>[m(a(t.$t("chat_list__start_selling")),1)]),_:1},8,["onClick"])])):(r(),i("div",Ee,[(r(!0),i(w,null,I((v=e.chatsellerhistorylistStore.chatHistoryList)==null?void 0:v.data,o=>(r(),i("div",{class:"mt-2 w-full",key:o.id},[l(H,{dateFormat:t.$page.props.dateFormat,chathistory:o},null,8,["dateFormat","chathistory"])]))),128))]))]),s("div",Fe,[e.chatsellerhistorylistStore.loading.value==!1?(r(),S(c,{key:0,class:R(["w-[108px] mx-auto mt-4",e.chatsellerhistorylistStore.isNoMoreRecord?"hidden":""]),onClick:e.loadMore},{default:n(()=>[m(a(t.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(r(),S(c,{key:1,class:"w-[108px] mx-auto mt-4",disabled:!0},{default:n(()=>[m(a(t.$t("list__loading")),1)]),_:1}))])])):e.ps_loading==!1?(r(),i("div",Be,[s("div",Me,[e.chatbuyerhistorylistStore.chatHistoryList.data==null?(r(),i("div",Re,[M(s("img",ze,null,512),[[k,{src:t.$page.props.sysImageUrl+"/undraw_quick_chat_rebit.png",loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(_,{class:"text-base text-center sm:text-2xl mb-3 mt-3"},{default:n(()=>[m(a(t.$t("chat_list_no_messages")),1)]),_:1}),l(C,{class:"text-center mb-2"},{default:n(()=>[m(a(t.$t("chat_list_no_messages__paragraph")),1)]),_:1}),l(c,{onClick:e.startSellingClicked,class:"w-full sm:mx-auto sm:w-[456px]"},{default:n(()=>[m(a(t.$t("chat_list__start_selling")),1)]),_:1},8,["onClick"])])):(r(),i("div",Ne,[s("div",Ve,[(r(!0),i(w,null,I(e.chatbuyerhistorylistStore.chatHistoryList.data,o=>(r(),i("div",{class:"w-full mt-2",key:o.id},[l(P,{dateFormat:t.$page.props.dateFormat,chathistory:o},null,8,["dateFormat","chathistory"])]))),128))])]))]),s("div",Ye,[e.chatbuyerhistorylistStore.loading.value==!1?(r(),S(c,{key:0,class:R(["w-[108px] mt-4 mx-auto",e.chatbuyerhistorylistStore.isNoMoreRecord.value?"hidden":""]),onClick:e.loadMoreBuyer},{default:n(()=>[m(a(t.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(r(),S(c,{key:1,class:"w-[108px] mx-auto mt-4",disabled:!0},{default:n(()=>[m(a(t.$t("list__loading")),1)]),_:1}))])])):B("",!0)])])])],64)}var os=le(ie,[["render",je]]);export{os as default};
