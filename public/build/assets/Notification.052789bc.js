import{Z as V,z as u,o as h,c as b,b as r,w as g,a as t,q as n,t as S,m as I,g as C,F as H,r as i,E as F}from"./app.df1b8390.js";import U from"./PsLabelTitle.7685c780.js";import z from"./PsLabel.3935ab2c.js";import B from"./PsIcon.0697a0d8.js";import D from"./PsRouteLink.14f8a093.js";import T from"./PsAdSense.77c17409.js";import q from"./PsBreadcrumb2.43f3d05c.js";import A from"./PsContentContainer.2eb168de.js";import E from"./PsLabelHeader3.2fef9d9a.js";import{u as M}from"./NotificationStore.987a5d48.js";import{P as $}from"./PsValueStore.08b5513c.js";import j from"./PsFrontendLayout.9c0ecc46.js";import{h as R}from"./moment.9709ab41.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./AppInfoStore.4b2c5718.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.deaae373.js";import"./AppInfoParameterHolder.e24d894d.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.97dc7826.js";import"./FooterLinkSection.746092c6.js";import"./PsLink.0ee2fc53.js";import"./PsLabelCaption.a3843f8e.js";import"./ProductParameterHolder.b3159892.js";import"./PsNavTabBar.6c5f8913.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsButton.935d57c3.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.9af11738.js";import"./PsNavBar.9d521488.js";import"./UserStore.5c2fdd50.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.1742bc34.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./PsNotificationBox.cc3868e0.js";import"./ProductStore.186e332b.js";import"./Product.dc190b28.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const G={name:"NotificationView",components:{PsLabelTitle:U,PsLabel:z,PsIcon:B,PsRouteLink:D,PsAdSense:T,PsBreadcrumb2:q,PsContentContainer:A,PsLabelHeader3:E,Head:V},props:["query"],layout:j,setup(e){const s=e.query.notiId.toString(),o=$().getLoginUserId(),a=M();return a.loadNoti(s,o),{notiStore:a,notificationId:s,moment:R}},computed:{breadcrumb(){return[{label:u("notification__notification_list"),url:route("fe_notification_list")},{label:u("notification__notification_detail"),color:"text-fePrimary-500"}]}}},J={class:"sm:mt-32 lg:mt-36 mt-28"},K={class:"flex flex-col"},O={class:"lg:my-12 mt-7 mb-12"},Q={class:"text-center sm:mb-10 mb-6"},W={class:"text-sm font-medium text-feSecondary-500 dark:text-feSecondary-400"},X=n("Admin "),Y=t("span",{class:"mx-6"},"|",-1),tt={class:"w-auto cursor-pointer"},ot={alt:"Placeholder",width:"300px",height:"200px",class:"block w-full rounded-lg lg:h-96 h-56 sm:h-72 object-cover"},et={class:"lg:mt-8 mt-6 md:w-3/4 md:mx-auto"},rt={key:0},it=["innerHTML"],st={class:"mx-auto"};function at(e,s,x,o,a,y){const P=i("Head"),v=i("ps-breadcrumb-2"),k=i("ps-label-header-3"),w=i("ps-content-container"),L=i("ps-ad-sense"),N=F("lazy");return h(),b(H,null,[r(P,{title:e.$t("notification__notification_detail")},null,8,["title"]),r(w,null,{content:g(()=>{var m,p,c,l,d;return[t("div",J,[r(v,{items:y.breadcrumb,class:""},null,8,["items"]),t("div",K,[t("div",O,[t("div",Q,[r(k,{textColor:"dark:text-feSecondary-200 text-feSecondary-800",class:"font-semibold sm:mb-8 mb-4"},{default:g(()=>{var _,f;return[n(S((f=(_=o.notiStore.noti)==null?void 0:_.data)==null?void 0:f.message),1)]}),_:1}),t("p",W,[X,Y,n(" "+S(o.moment((p=(m=o.notiStore.noti)==null?void 0:m.data)==null?void 0:p.addedDate).format(e.$page.props.dateFormat)),1)])]),t("div",tt,[I(t("img",ot,null,512),[[N,{src:e.$page.props.thumb3xUrl+"/"+((l=(c=o.notiStore.noti.data)==null?void 0:c.defaultPhoto)==null?void 0:l.imgPath),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t("div",et,[o.notiStore.noti.data!=null?(h(),b("p",rt,[t("span",{class:"font-normal text-base text-feSecondary-600 dark:text-feSecondary-200",innerHTML:(d=o.notiStore.noti.data)==null?void 0:d.description},null,8,it)])):C("",!0)])])])])])]}),_:1}),t("div",st,[r(L,{adFormat:"horizontal"})])],64)}var _o=Z(G,[["render",at]]);export{_o as default};
