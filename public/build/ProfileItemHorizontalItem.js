import V from"./PsLabel2.js";import T from"./PsLabelTitle4.js";import O from"./PsCard2.js";import B from"./PsIcon2.js";import{P as L}from"./ps_constants.js";import E from"./PsAdSense.js";import q from"./PsLoadingDialog3.js";import{f as G}from"./format.min.js";import M from"./PsRouteLink.js";import{h as R}from"./moment.js";import{i as N,r as b,Q as J,o as i,c as m,a as n,f as P,w as r,n as D,b as t,m as H,p as d,t as a,g as c,F as Q,J as z,O as W}from"./app.js";import{P as U}from"./PsValueStore.js";import{P as K}from"./Product.js";import{u as X}from"./PsValueHolder.js";import{u as Y}from"./AppInfoStore.js";import{u as Z}from"./ProductStore.js";import{u as $}from"./FavouriteItemStore.js";import{u as ee,F as te}from"./FollowItemParameterHolder.js";import{A as oe}from"./AppInfoParameterHolder.js";import{_ as ie}from"./plugin-vue_export-helper.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsLabelTitle2.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./ItemLocationTownship.js";import"./User.js";import"./RatingDetail.js";import"./ProductParameterHolder.js";import"./ApiStatus.js";import"./PsSepetetedStore.js";import"./PsUtils.js";const re={name:"ItemHorizontalItem",components:{PsLabel:V,PsLabelTitle4:T,PsCard:O,PsIcon:B,PsAdSense:E,PsRouteLink:M,PsLoadingDialog:q},props:{item:{type:K},notShowTitle:{type:Boolean,default:!1},onClick:Function,storeName:{type:String,default:""}},setup(o){var v,w,p;const u=N();U.psValueStore=X();const e=Z(o.storeName),s=$(),F=ee(),I=U(),f=I.getLoginUserId(),y=new oe,l=new te;y.userId=f;const _=Y(),S=N(!1);((p=(w=(v=_==null?void 0:_.appInfo)==null?void 0:v.data)==null?void 0:w.mobileSetting)==null?void 0:p.is_show_owner_info)=="1"&&(S.value=!0);function A(g){var x,h,j;return g.toString()=="0"?z("item_price__free"):G((j=(h=(x=_==null?void 0:_.appInfo)==null?void 0:x.data)==null?void 0:h.mobileSetting)==null?void 0:j.price_format,g)}async function k(g){f&&f!=L.NO_LOGIN_USER?(u.value.openModal(),o.item.isFavourited=="1"?u.value.message=z("item_detail__removing_item_from_favourite"):u.value.message=z("item_detail__adding_item_to_favourite"),await s.postFavourite(g,f),await C(),u.value.closeModal()):W.Inertia.get(route("login"))}async function C(){o.storeName==""?await F.refleshFollowerItemList(f,l):o.storeName=="favourite"?await s.resetFavouriteItemList(f):(await e.refleshProductList(f,e.paramHolder),await s.resetFavouriteItemList(f))}return{appInfoStore:_,formatPrice:A,PsConst:L,psValueStore:I,favouriteClicked:k,ps_loading_dialog:u,showProfile:S,moment:R}}},ae={class:"h-44 relative z-0"},se={class:"absolute z-10"},le={class:"overflow-hidden h-44 w-full"},ne={alt:"Placeholder",class:"transform transition duration-500 hover:scale-110 rounded-t-lg object-cover w-screen h-44",width:"640px",height:"360px"},me={key:0,class:"absolute bg-feWarning-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},de={key:1},ce={key:0,class:"absolute bg-fePrimary-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},fe={key:0,class:"absolute bg-feSuccess-500 rounded px-2 py-1 left-0 top-8"},ue={key:1,class:"absolute bg-feSuccess-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},_e={key:2,class:"absolute bg-feSecondary-300 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},xe={key:3,class:"absolute bg-feError-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},he={class:"absolute left-2 bottom-2 z-20"},ge={key:0,class:"ps-1 pt-1"},ye={key:1,class:"ps-1 flex flex-row items-center justify-start"},pe={key:2,class:"ps-1"},be={class:"flex items-center rtl:space-x-reverse space-x-2.5"},ve={key:0,class:"pt-1 pb-2 flex items-center justify-between leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},we={class:"flex flex-row items-center no-underline text-feAchromatic-900"},Pe={class:"relative"},Se={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},ke={key:0,class:"w-3 h-3 bg-feInfo-500 rounded-full flex justify-center items-center absolute bottom-0 right-0"},Ce={class:"ms-2 mt-1 text-sm flex-grow"},Ie={class:"flex"},Ae={class:"w-full lg:h-72 h-52 mx-auto lg:mt-12 lg:mb-12 mt-8 mb-6"};function ze(o,u,e,s,F,I){var C,v,w;const f=b("ps-route-link"),y=b("ps-icon"),l=b("ps-label"),_=b("ps-card"),S=b("ps-ad-sense"),A=b("ps-loading-dialog"),k=J("lazy");return i(),m(Q,null,[n("div",{class:"cursor-pointer w-full h-auto",onClick:u[1]||(u[1]=p=>e.onClick!=null?e.onClick(e.item):null)},[((C=e.item)==null?void 0:C.adType)==s.PsConst.NORMAL_AD||((v=e.item)==null?void 0:v.adType)==s.PsConst.PAID_AD?(i(),P(_,{key:0,class:"flex w-full bg-feAchromatic-50 flex-col lg:rounded-lg shadow-sm",enabledHover:!0},{default:r(()=>{var p,g;return[n("div",{class:D(["lg:px-0 lg:py-0 px-1 py-1",s.showProfile?"rounded-b-xl lg:rounded-b-2xl ":"rounded-xl lg:rounded-2xl"])},[n("div",ae,[n("div",se,[t(f,{to:{name:"fe_item_detail",query:{item_id:e.item.id}}},{default:r(()=>[n("div",le,[H(n("img",ne,null,512),[[k,{src:o.$page.props.thumb2xUrl+"/"+e.item.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])])]),_:1},8,["to"])]),n("div",{class:"absolute z-20 bg-feAchromatic-50 dark_bg-feSecondary-800 rounded w-10 h-10 flex justify-center items-center right-2 top-2",onClick:u[0]||(u[0]=x=>s.favouriteClicked(e.item.id))},[e.item.isFavourited=="1"?(i(),P(y,{key:0,textColor:"text-fePrimary-500 dark_text-feAchromatic-50",class:"",name:"heart",h:"24",w:"24"})):(i(),P(y,{key:1,textColor:"text-fePrimary-500 dark_text-feAchromatic-50",class:"",name:"heart-outline",h:"24",w:"24"}))]),e.item.status=="0"?(i(),m("div",me,[t(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(o.$t("core_fe__pending")),1)]),_:1})])):c("",!0),e.item.status=="1"?(i(),m("div",de,[e.item.isDiscount=="1"?(i(),m("div",ce,[t(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(e.item.percent)+a(o.$t("item_horizontal_item__discount")),1)]),_:1}),e.item.isPaid=="1"?(i(),m("div",fe,[t(l,{class:"text-xs lg:text-sm font-medium text-center",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(o.$t("item_horizontal_item__featured")),1)]),_:1})])):c("",!0)])):e.item.isPaid=="1"?(i(),m("div",ue,[t(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(o.$t("item_horizontal_item__featured")),1)]),_:1})])):c("",!0)])):c("",!0),e.item.status=="2"?(i(),m("div",_e,[t(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feSecondary-500 "},{default:r(()=>[d(a(o.$t("core_fe__disabled")),1)]),_:1})])):c("",!0),e.item.status=="3"?(i(),m("div",xe,[t(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(o.$t("core_fe__rejected")),1)]),_:1})])):c("",!0),n("div",he,[e.item&&e.item.isSoldOut=="1"?(i(),P(l,{key:0,class:"py-1 px-2 text-sm rounded bg-fePrimary-500 font-medium",textColor:"text-feAchromatic-50 "},{default:r(()=>[d(a(o.$t("item_horizontal_item__sold_out")),1)]),_:1})):c("",!0)])]),t(f,{to:{name:"fe_item_detail",query:{item_id:e.item.id}}},{default:r(()=>{var x,h;return[e.notShowTitle?c("",!0):(i(),m("div",ge,[t(l,{class:"font-normal text-sm",textColor:"text-feSecondary-600 dark_text-feSecondary-200"},{default:r(()=>[d(a(e.item?e.item.title:""),1)]),_:1})])),e.item.isDiscount=="1"&&((h=(x=s.appInfoStore.appInfo.data)==null?void 0:x.mobileSetting)==null?void 0:h.is_show_discount)=="1"?(i(),m("div",ye,[t(l,{class:"line-through me-2 font-semibold text-xs",textColor:"text-feSecondary-500 "},{default:r(()=>[d(a(e.item?e.item.itemCurrency.currencySymbol:"")+" "+a(s.formatPrice(e.item?e.item.originalPrice:"")),1)]),_:1}),t(l,{class:"font-semibold text-xs lg:text-base",textColor:"text-fePrimary-500 "},{default:r(()=>[d(a(e.item?e.item.itemCurrency.currencySymbol:"")+" "+a(s.formatPrice(e.item?e.item.price:"")),1)]),_:1})])):(i(),m("div",pe,[t(l,{class:"font-semibold text-base",textColor:"text-fePrimary-500 "},{default:r(()=>[d(a(e.item?e.item.itemCurrency.currencySymbol:"")+" "+a(s.formatPrice(e.item?e.item.originalPrice:"")),1)]),_:1})])),e.notShowTitle?c("",!0):(i(),m("div",{key:3,class:D([s.showProfile?"pb-0":"pb-2","ps-1 flex justify-between"])},[n("div",be,[t(y,{textColor:"text-feSecondary-400 dark_text-feAchromatic-500",name:"location-marker",h:"14",w:"14",class:"text-feSecondary-400 me-1",viewBox:"0 0 14 14"}),t(l,{class:"truncate font-normal text-sm",textColor:"text-feSecondary-400 dark_text-feSecondary-200"},{default:r(()=>[d(a(e.item?e.item.itemLocation.name:""),1)]),_:1})])],2))]}),_:1},8,["to"])],2),t(f,{to:{name:"fe_other_profile",params:{userId:(g=(p=e.item)==null?void 0:p.user)==null?void 0:g.userId}}},{default:r(()=>{var x,h;return[s.showProfile?(i(),m("div",ve,[n("div",we,[n("div",Pe,[H(n("img",Se,null,512),[[k,{src:o.$page.props.thumb1xUrl+"/"+((h=(x=e.item)==null?void 0:x.user)==null?void 0:h.userCoverPhoto),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),e.item.user.isVerifybluemark=="1"?(i(),m("div",ke,[t(y,{name:"bluemark",textColor:"text-feSecondary-50",w:"8",h:"8"})])):c("",!0)]),n("p",Ce,[n("span",Ie,[t(l,{class:"truncate text-xs",textColor:"text-feSecondary-800 dark_text-feSecondary-300"},{default:r(()=>[d(a(e.item.user.userName.length>12?e.item.user.userName.slice(0,12)+" ...":e.item.user.userName),1)]),_:1})]),t(l,{class:"font-light text-xs",textColor:"text-feSecondary-500 dark_text-feSecondary-500"},{default:r(()=>[d(a(e.item?s.moment(e.item.addedDate).format(o.$page.props.dateFormat):""),1)]),_:1})])])])):c("",!0)]}),_:1},8,["to"])]}),_:1})):c("",!0),((w=e.item)==null?void 0:w.adType)==s.PsConst.GOOGLE_AD?(i(),P(_,{key:1,class:"flex w-full flex-col"},{default:r(()=>[n("div",Ae,[t(S,{adFormat:"square",adStyle:"display:inline-block; width: 160px; height: 160px;",adStyleSm:"display:inline-block; width: 160px; height: 160px;",adStyleLg:"display:inline-block; width: 160px; height: 160px;"})])]),_:1})):c("",!0)]),t(A,{ref:"ps_loading_dialog"},null,512)],64)}var ut=ie(re,[["render",ze]]);export{ut as default};