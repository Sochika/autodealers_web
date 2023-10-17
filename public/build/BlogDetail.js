import w from"./PsContentContainer.js";import k from"./PsRouteLink.js";import B from"./PsLabelHeader3.js";import D from"./PsAdSense.js";import{u as V}from"./BlogStore.js";import H from"./PsFrontendLayout.js";import{P as C}from"./PsValueStore.js";import{H as I,J as m,r as e,Q as L,o as f,c as h,b as r,w as S,a as t,p as i,t as y,m as F,g as U,F as $}from"./app.js";import N from"./PsBreadcrumb22.js";import{h as z}from"./moment.js";import{_ as T}from"./plugin-vue_export-helper.js";import"./vue-router.esm-bundler.js";import"./PsLabel2.js";import"./AppInfoStore.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./ps_constants.js";import"./AppInfoParameterHolder.js";import"./PsSepetetedStore.js";import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsLabelCaption3.js";import"./PsIcon2.js";import"./ProductParameterHolder.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsButton2.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownship.js";import"./ItemLocationTownshipStore.js";import"./PsNavBar.js";import"./UserStore.js";import"./User.js";import"./RatingDetail.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./index.esm.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./PsNotificationBox.js";import"./ProductStore.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";const q={name:"BlogDetailView",components:{PsBreadcrumb2:N,PsContentContainer:w,PsRouteLink:k,PsLabelHeader3:B,PsAdSense:D,Head:I},props:["query"],layout:H,setup(o){const l=o.query.blogId,a=C().getLoginUserId(),s=V();return s.loadBlog(l,a),{blogStore:s,moment:z}},computed:{breadcrumb(){return[{label:m("item_list__home"),url:route("dashboard")},{label:m("blogblog_list__blog"),url:route("fe_blog")},{label:m("blogblog_list__blogDetail"),color:"text-fePrimary-500"}]}}},A={class:"lg:mt-36 sm:mt-36 mt-28"},M={class:"flex flex-col"},j={class:"lg:my-12 mt-7 mb-12"},E={class:"text-center sm:mb-10 mb-6"},J={class:"text-sm font-medium text-feSecondary-500 dark_text-feSecondary-400"},Q=i("Admin "),R=t("span",{class:"mx-6"},"|",-1),G={class:"w-auto cursor-pointer"},K={alt:"Placeholder",width:"300px",height:"200px",class:"block w-full rounded-lg lg:h-96 h-56 sm:h-72 object-cover"},O={class:"lg:mt-8 mt-6"},W={key:0},X=["innerHTML"],Y={class:"w-mobile sm:w-median lg:w-large h-auto mx-auto"};function Z(o,l){const n=e("Head"),a=e("ps-breadcrumb-2"),s=e("ps-label-header-3"),v=e("ps-content-container"),P=e("ps-ad-sense"),x=L("lazy");return f(),h($,null,[r(n,{title:o.$t("blogblog_list__blogDetail")},null,8,["title"]),r(v,null,{content:S(()=>{var p,d,c,_,g;return[t("div",A,[r(a,{items:o.breadcrumb,class:""},null,8,["items"]),t("div",M,[t("div",j,[t("div",E,[r(s,{textColor:"dark_text-feSecondary-200 text-feSecondary-800",class:"font-semibold sm:mb-8 mb-4"},{default:S(()=>{var b,u;return[i(y((u=(b=o.blogStore.blog)==null?void 0:b.data)==null?void 0:u.name),1)]}),_:1}),t("p",J,[Q,R,i(" "+y(o.moment((d=(p=o.blogStore.blog)==null?void 0:p.data)==null?void 0:d.addedDate).format(o.$page.props.dateFormat)),1)])]),t("div",G,[F(t("img",K,null,512),[[x,{src:o.$page.props.thumb3xUrl+"/"+((g=(_=(c=o.blogStore.blog)==null?void 0:c.data)==null?void 0:_.defaultPhoto)==null?void 0:g.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),t("div",O,[o.blogStore.blog.data!=null?(f(),h("p",W,[t("span",{class:"font-normal text-base text-feSecondary-600 dark_text-feSecondary-200",innerHTML:o.blogStore.blog.data.description},null,8,X)])):U("",!0)])])])])])]}),_:1}),t("div",Y,[r(P,{adFormat:"horizontal"})])],64)}var at=T(q,[["render",Z]]);export{at as default};
