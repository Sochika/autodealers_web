import{H as N,i as y,C as V,j as F,J as R,r as e,o as r,c as n,b as l,w as f,a as s,F as P,q as I,g as M,f as w,p as x,t as z,n as D}from"./app.js";import T from"./PsContentContainer.js";import U from"./PsButton2.js";import j from"./PsLabel2.js";import q from"./PsLabelHeader42.js";import A from"./PsRouteLink.js";import E from"./PsAdSense.js";import J from"./PsBreadcrumb22.js";import O from"./PsNoDataList.js";import G from"./PsLoadingDialog3.js";import{u as K}from"./BlogStore.js";import Q from"./BlogHorizontalItem.js";import W from"./BlogCard2.js";import{P as X}from"./PsValueStore.js";import Y from"./PsFrontendLayout.js";import{_ as Z}from"./plugin-vue_export-helper.js";import"./vue-router.esm-bundler.js";import"./AppInfoStore.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./ps_constants.js";import"./AppInfoParameterHolder.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsLabelTitle2.js";import"./PsSepetetedStore.js";import"./moment.js";import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsLabelCaption3.js";import"./PsIcon2.js";import"./ProductParameterHolder.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownship.js";import"./ItemLocationTownshipStore.js";import"./PsNavBar.js";import"./UserStore.js";import"./User.js";import"./RatingDetail.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./index.esm.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./PsNotificationBox.js";import"./ProductStore.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";const $={name:"BlogListView",components:{PsAdSense:E,PsContentContainer:T,BlogHorizontalItem:Q,PsButton:U,PsLabel:j,PsLabelHeader4:q,PsRouteLink:A,PsBreadcrumb2:J,BlogCard:W,PsNoData:O,Head:N,PsLoadingDialog:G},layout:Y,props:["mobileSetting"],setup(m){var u,p;const t=K(),b=X(),o=y(b.locationId),g=b.getLoginUserId(),d=y(!0),c=y();t.limit=(p=(u=m.mobileSetting)==null?void 0:u.default_loading_limit)!=null?p:9,t.paramHolder.locationId=o.value,setTimeout(async()=>{await h()});async function h(){await t.resetBlogList(g,t.paramHolder),c.value.closeModal(),d.value=!1}const v=V(()=>k());function B(){t.loadBlogList(g,t.paramHolder)}function L(){t.resetBlogList(g,t.paramHolder)}function k(){var _;const i=t.blogList.data.length,S=Math.floor(Math.random()*i);return(_=t.blogList.data[S])!=null?_:null}return F(()=>{var i;d.value==!0&&((i=t.blogList)==null?void 0:i.data)==null&&c.value.openModal()}),{blogStore:t,getRandomBlog:v,loadMore:B,handleRefresh:L,initial:d,ps_loading_dialog:c}},computed:{breadcrumb(){return[{label:R("ps_nav_bar__home"),url:route("dashboard")},{label:R("blog_list__blog")+"s",color:"text-fePrimary-500"}]}}},oo={class:"mt-32 mb-10"},to={class:"w-full mt-6"},eo={key:0},lo={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 gap-6 mt-6"},ao={key:1},ro={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},io={key:2,class:"flex text-center content-center flex-col"},no={class:""},so={class:""};function mo(m,t,b,o,g,d){const c=e("Head"),h=e("ps-breadcrumb-2"),v=e("blog-card"),B=e("blog-horizontal-item"),L=e("ps-route-link"),k=e("item-horizontal-skeletor-item"),u=e("ps-no-data"),p=e("ps-button"),i=e("ps-ad-sense"),S=e("ps-content-container"),C=e("ps-loading-dialog");return r(),n(P,null,[l(c,{title:m.$t("blog_list__blog")},null,8,["title"]),l(S,null,{content:f(()=>{var _,H;return[s("div",oo,[l(h,{items:d.breadcrumb},null,8,["items"]),s("div",to,[((_=o.blogStore.blogList)==null?void 0:_.data)!=null&&o.initial==!1?(r(),n("div",eo,[l(v,{blog:o.getRandomBlog},null,8,["blog"]),s("div",lo,[(r(!0),n(P,null,I(o.blogStore.blogList.data,a=>(r(),n("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3",key:a.id},[l(L,{to:{name:"fe_blog_detail",params:{blogId:a.id,blogName:a.name}}},{default:f(()=>[l(B,{blog:a},null,8,["blog"])]),_:2},1032,["to"])]))),128))])])):o.blogStore.loading.value==!0&&o.initial==!1?(r(),n("div",ao,[s("div",ro,[(r(),n(P,null,I(3,a=>s("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:a},[l(k)])),64))])])):o.initial==!1?(r(),n("div",io,[l(u,{onHandleRefresh:o.handleRefresh,name:"list__blogs_no_result"},null,8,["onHandleRefresh"])])):M("",!0),o.blogStore.loading.value==!1&&o.initial==!1?(r(),w(p,{key:3,class:D(["mx-auto mt-6",o.blogStore.isNoMoreRecord.value||((H=o.blogStore.favouriteItemList)==null?void 0:H.data)==null?"hidden":""]),onClick:o.loadMore},{default:f(()=>{var a;return[x(z(((a=o.blogStore.favouriteItemList)==null?void 0:a.data)!=null?m.$t("list__load_more"):m.$t("refresh")),1)]}),_:1},8,["onClick","class"])):o.initial==!1?(r(),w(p,{key:4,class:"mx-auto mt-6",onClick:o.loadMore,disabled:!0},{default:f(()=>[x(z(m.$t("list__loading")),1)]),_:1},8,["onClick"])):M("",!0)]),s("div",no,[l(i,{adFormat:"horizontal"})])])]}),_:1}),s("div",so,[l(i,{adFormat:"horizontal"})]),l(C,{ref:"ps_loading_dialog"},null,512)],64)}var Bt=Z($,[["render",mo]]);export{Bt as default};
