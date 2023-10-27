import q from"./PsLabel.3935ab2c.js";import G from"./PsCard.27eb6835.js";import W from"./PsIcon.0697a0d8.js";import{P as O}from"./ps_constants.deaae373.js";import J from"./PsAdSense.77c17409.js";import K from"./PsLoadingDialog.16642bee.js";import{f as Q}from"./format.min.427d9f09.js";import X from"./PsRouteLink.14f8a093.js";import{h as Y}from"./moment.9709ab41.js";import{i as E,o as i,c as n,a as p,f as P,w as a,n as H,b as s,m as U,g as d,q as u,t as r,F as Z,z as D,O as $,r as S,E as ee}from"./app.df1b8390.js";import{P as M}from"./PsValueStore.08b5513c.js";import{P as te}from"./Product.dc190b28.js";import{u as oe}from"./PsValueHolder.2dad780d.js";import{u as ie}from"./AppInfoStore.4b2c5718.js";import{u as ae}from"./ProductStore.186e332b.js";import{u as re}from"./FavouriteItemStore.6d0ab0b1.js";import{u as se,F as le}from"./FollowItemParameterHolder.4ad7da37.js";import{A as ne}from"./AppInfoParameterHolder.e24d894d.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsLabelTitle.7685c780.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./ProductParameterHolder.b3159892.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsUtils.2215fd6f.js";const de={name:"ItemHorizontalItem",components:{PsLabel:q,PsCard:G,PsIcon:W,PsAdSense:J,PsRouteLink:X,PsLoadingDialog:K},props:{item:{type:te},notShowTitle:{type:Boolean,default:!1},onClick:Function,storeName:{type:String,default:""}},setup(o){var v,h,w;const g=E();M.psValueStore=oe();const e=ae(o.storeName),t=re(),V=se(),R=M(),m=R.getLoginUserId(),b=new ne,l=new le;b.userId=m;const c=ie(),N=E(!1),T=E(o.item.user.userId==m);((w=(h=(v=c==null?void 0:c.appInfo)==null?void 0:v.data)==null?void 0:h.mobileSetting)==null?void 0:w.is_show_owner_info)=="1"&&(N.value=!0);function z(f){var y,I,C,k,A,_,x;if(f.toString()=="0"&&((I=(y=c.appInfo.data)==null?void 0:y.psAppSetting)==null?void 0:I.SelectedPriceType)==O.NORMAL_PRICE)return D("item_price__free");if(((k=(C=c.appInfo.data)==null?void 0:C.psAppSetting)==null?void 0:k.SelectedPriceType)==O.PRICE_RANGE){const B=parseFloat(f),j=parseInt(B);return j>5?"$".repeat(5):j<1?"$".repeat(1):"$".repeat(j)}else return Q((x=(_=(A=c==null?void 0:c.appInfo)==null?void 0:A.data)==null?void 0:_.mobileSetting)==null?void 0:x.price_format,f)}async function L(f){m&&m!=O.NO_LOGIN_USER?(g.value.openModal(),o.item.isFavourited=="1"?g.value.message=D("item_detail__removing_item_from_favourite"):g.value.message=D("item_detail__adding_item_to_favourite"),await t.postFavourite(f,m),await F(),g.value.closeModal()):$.get(route("login"))}async function F(){o.storeName==""?await V.refleshFollowerItemList(m,l):o.storeName=="favourite"?await t.resetFavouriteItemList(m):(await e.refleshProductList(m,e.paramHolder),await t.resetFavouriteItemList(m))}return{appInfoStore:c,formatPrice:z,PsConst:O,psValueStore:R,favouriteClicked:L,ps_loading_dialog:g,showProfile:N,moment:Y,isOwner:T}}},ce={class:"h-44 relative z-0"},fe={class:"overflow-hidden h-44 w-full"},ue={alt:"Placeholder",class:"overflow-hidden transform transition duration-500 hover:scale-110 rounded-t-lg object-cover w-screen h-44",width:"640px",height:"360px"},_e={key:1,class:"absolute bg-feWarning-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},xe={key:2},ge={key:0,class:"absolute bg-fePrimary-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},pe={key:0,class:"absolute bg-feSuccess-500 rounded px-2 py-1 left-0 top-8"},ye={key:1,class:"absolute bg-feSuccess-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},he={key:3,class:"absolute bg-feSecondary-300 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Pe={key:4,class:"absolute bg-feError-500 rounded px-2 py-1 flex justify-center items-center left-2 top-2 z-20"},Se={class:"absolute left-2 bottom-2 z-20"},be={key:1},ve={key:0,class:"ps-1 flex flex-row items-center justify-start"},we={key:0,class:"pt-1 pb-2 flex flex-row items-center no-underline justify-between text-feAchromatic-900 leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},Ie={class:"relative"},Ce={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},ke={key:0,class:"w-3 h-3 bg-feInfo-500 rounded-full flex justify-center items-center absolute bottom-0 right-0"},Ae={class:"flex truncate text-xs text-feSecondary-800 dark_text-feSecondary-300"},Ne={class:"font-light text-xs text-feSecondary-500 dark_text-feSecondary-500"};function ze(o,g,e,t,V,R){var L,F,v;const m=S("ps-route-link"),b=S("ps-icon"),l=S("ps-label"),c=S("ps-card"),N=S("ps-ad-sense"),T=S("ps-loading-dialog"),z=ee("lazy");return i(),n(Z,null,[p("div",{class:"cursor-pointer w-full h-auto",onClick:g[1]||(g[1]=h=>e.onClick!=null?e.onClick(e.item):null)},[((L=e.item)==null?void 0:L.adType)==t.PsConst.NORMAL_AD||((F=e.item)==null?void 0:F.adType)==t.PsConst.PAID_AD?(i(),P(c,{key:0,class:"flex w-full bg-feAchromatic-50 flex-col lg:rounded-lg shadow-sm",enabledHover:!0},{default:a(()=>{var h,w;return[p("div",{class:H(["lg:px-0 lg:py-0 px-1 py-1",t.showProfile?"rounded-b-xl lg:rounded-b-2xl ":"rounded-xl lg:rounded-2xl"])},[p("div",ce,[s(m,{class:"absolute z-10",to:{name:"fe_item_detail",query:{item_id:e.item.id}}},{default:a(()=>[p("div",fe,[U(p("img",ue,null,512),[[z,{src:o.$page.props.thumb2xUrl+"/"+e.item.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])])]),_:1},8,["to"]),t.isOwner?d("",!0):(i(),n("div",{key:0,class:"absolute z-20 bg-feAchromatic-50 dark:bg-feSecondary-800 rounded w-10 h-10 flex justify-center items-center right-2 top-2",onClick:g[0]||(g[0]=f=>t.favouriteClicked(e.item.id))},[s(b,{textColor:"text-fePrimary-500 dark:text-feAchromatic-50",name:e.item.isFavourited=="1"?"heart":"heart-outline",h:"24",w:"24"},null,8,["name"])])),e.item.status=="0"?(i(),n("div",_e,[s(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(o.$t("core_fe__pending")),1)]),_:1})])):e.item.status=="1"?(i(),n("div",xe,[e.item.isDiscount=="1"?(i(),n("div",ge,[s(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(e.item.percent)+r(o.$t("item_horizontal_item__discount")),1)]),_:1}),e.item.isPaid=="1"?(i(),n("div",pe,[s(l,{class:"text-xs lg:text-sm font-medium text-center",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(o.$t("item_horizontal_item__featured")),1)]),_:1})])):d("",!0)])):e.item.isPaid=="1"?(i(),n("div",ye,[s(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(o.$t("item_horizontal_item__featured")),1)]),_:1})])):d("",!0)])):e.item.status=="2"?(i(),n("div",he,[s(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feSecondary-500 "},{default:a(()=>[u(r(o.$t("core_fe__disabled")),1)]),_:1})])):e.item.status=="3"?(i(),n("div",Pe,[s(l,{class:"text-xs lg:text-sm text-center font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(o.$t("core_fe__rejected")),1)]),_:1})])):d("",!0),p("div",Se,[e.item&&e.item.isSoldOut=="1"?(i(),P(l,{key:0,class:"py-1 px-2 text-sm rounded bg-fePrimary-500 font-medium",textColor:"text-feAchromatic-50 "},{default:a(()=>[u(r(o.$t("item_horizontal_item__sold_out")),1)]),_:1})):d("",!0)])]),s(m,{to:{name:"fe_item_detail",query:{item_id:e.item.id}}},{default:a(()=>{var f,y,I,C,k,A;return[e.notShowTitle?d("",!0):(i(),P(l,{key:0,class:"ps-1 pt-1 font-normal text-sm",textColor:"text-feSecondary-600 dark:text-feSecondary-200"},{default:a(()=>[u(r(e.item?e.item.title:""),1)]),_:1})),((y=(f=t.appInfoStore.appInfo.data)==null?void 0:f.psAppSetting)==null?void 0:y.SelectedPriceType)!=t.PsConst.NO_PRICE?(i(),n("div",be,[e.item.isDiscount=="1"&&((C=(I=t.appInfoStore.appInfo.data)==null?void 0:I.mobileSetting)==null?void 0:C.is_show_discount)=="1"?(i(),n("div",ve,[((A=(k=t.appInfoStore.appInfo.data)==null?void 0:k.psAppSetting)==null?void 0:A.SelectedPriceType)==t.PsConst.NORMAL_PRICE?(i(),P(l,{key:0,class:"line-through me-2 font-semibold text-xs",textColor:"text-feSecondary-500 "},{default:a(()=>{var _,x;return[u(r(e.item&&((x=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:x.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" "+r(t.formatPrice(e.item?e.item.originalPrice:"")),1)]}),_:1})):d("",!0),s(l,{class:"font-semibold text-xs lg:text-base",textColor:"text-fePrimary-500 "},{default:a(()=>{var _,x;return[u(r(e.item&&((x=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:x.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" "+r(t.formatPrice(e.item?e.item.price:"")),1)]}),_:1})])):(i(),P(l,{key:1,class:"ps-1 font-semibold text-base",textColor:"text-fePrimary-500 "},{default:a(()=>{var _,x;return[u(r(e.item&&((x=(_=t.appInfoStore.appInfo.data)==null?void 0:_.psAppSetting)==null?void 0:x.SelectedPriceType)==t.PsConst.NORMAL_PRICE?e.item.itemCurrency.currencySymbol:"")+" "+r(t.formatPrice(e.item?e.item.originalPrice:"")),1)]}),_:1}))])):d("",!0),e.notShowTitle?d("",!0):(i(),n("div",{key:2,class:H([t.showProfile?"pb-0":"pb-2","ps-1 flex items-center rtl:space-x-reverse space-x-2.5"])},[s(b,{textColor:"text-feSecondary-400 dark:text-feAchromatic-500",name:"location-marker",h:"14",w:"14",class:"text-feSecondary-400 me-1",viewBox:"0 0 14 14"}),s(l,{class:"truncate font-normal text-sm",textColor:"text-feSecondary-400 dark:text-feSecondary-200"},{default:a(()=>[u(r(e.item?e.item.itemLocation.name:""),1)]),_:1})],2))]}),_:1},8,["to"])],2),s(m,{to:{name:"fe_other_profile",params:{userId:(w=(h=e.item)==null?void 0:h.user)==null?void 0:w.userId}}},{default:a(()=>{var f,y;return[t.showProfile?(i(),n("div",we,[p("div",Ie,[U(p("img",Ce,null,512),[[z,{src:o.$page.props.thumb1xUrl+"/"+((y=(f=e.item)==null?void 0:f.user)==null?void 0:y.userCoverPhoto),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),e.item.user.isVerifybluemark=="1"?(i(),n("div",ke,[s(b,{name:"bluemark",textColor:"text-feSecondary-50",w:"8",h:"8"})])):d("",!0)]),s(l,{class:"ms-2 mt-1 text-sm flex-grow"},{default:a(()=>[p("span",Ae,r(e.item.user.userName.length>12?e.item.user.userName.slice(0,12)+" ...":e.item.user.userName),1),p("span",Ne,r(e.item?t.moment(e.item.addedDate).format(o.$page.props.dateFormat):""),1)]),_:1})])):d("",!0)]}),_:1},8,["to"])]}),_:1})):d("",!0),((v=e.item)==null?void 0:v.adType)==t.PsConst.GOOGLE_AD?(i(),P(c,{key:1,class:"flex flex-col w-full lg:h-72 h-52 mx-auto lg:mt-12 lg:mb-12 mt-8 mb-6"},{default:a(()=>[s(N,{adFormat:"square",adStyle:"display:inline-block; width: 160px; height: 160px;",adStyleSm:"display:inline-block; width: 160px; height: 160px;",adStyleLg:"display:inline-block; width: 160px; height: 160px;"})]),_:1})):d("",!0)]),s(T,{ref:"ps_loading_dialog"},null,512)],64)}var _t=me(de,[["render",ze]]);export{_t as default};
