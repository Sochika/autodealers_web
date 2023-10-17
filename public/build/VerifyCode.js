import E from"./PsLabel2.js";import H from"./PsLabelTitle2.js";import I from"./PsLabelCaption22.js";import V from"./PsButton2.js";import U from"./PsSecondaryButton.js";import A from"./PsInput2.js";import B from"./PsLoadingDialog2.js";import F from"./PsSuccessDialog2.js";import $ from"./PsErrorDialog.js";import{Y as j,aE as K,aF as N,aG as T,aH as z,aI as J,aJ as O,H as W,L as G,K as Y,C as w,i as y,O as x,r as a,o as P,c as q,b as e,a as t,w as _,ay as Q,t as c,n as R,F as X,J as l,p,f as Z,g as ee}from"./app.js";import oe from"./PsLabelHeader3.js";import{P as te}from"./PsCard.js";import{P as re}from"./PsIcon.js";import ae from"./PsLabelCaption3.js";import{P as se}from"./PsLoading.js";import{W as ie}from"./WelcomeImage.js";import le from"./PsFrontendLayout.js";import{b as M}from"./PsApiService2.js";import{u as ne}from"./AuthStore.js";import{F as ce}from"./ForgotpasswordParameterHolder.js";import{U as de}from"./UserEmailVerifyParameterHolder.js";import{_ as me}from"./plugin-vue_export-helper.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsIcon2.js";import"./Icons.js";import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsRouteLink.js";import"./ProductParameterHolder.js";import"./ps_constants.js";import"./PsValueStore.js";import"./AppInfoStore.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownship.js";import"./PsSepetetedStore.js";import"./ItemLocationTownshipStore.js";import"./AppInfoParameterHolder.js";import"./PsNavBar.js";import"./UserStore.js";import"./User.js";import"./RatingDetail.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./index.esm.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./PsNotificationBox.js";import"./ProductStore.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";j.add(K,N,T,z,J,O);const _e={class:"VerifyCodeView",components:{PsLabel:E,PsLabelTitle:H,PsButton:V,PsInput:A,PsLoadingDialog:B,PsSuccessDialog:F,PsErrorDialog:$,PsLabelCaption:ae,PsIcon:re,PsLabelHeader3:oe,PsCard:te,Head:W,Link:G,PsLabelCaption2:I,PsLoading:se,WelcomeImage:ie,PsSecondaryButton:U},layout:le,props:["email","authUser"],setup(o){const d=Y(),C=w(()=>d.getters.isDarkMode),r=w(()=>d.getters.dir),g=ne(),b=new de,m=y(),f=y(),s=y(),i=y();o.authUser!=null&&x.Inertia.get(route("dashboard"));async function v(){b.email=o.email,b.code=i.value,m.value.openModal();const n=await g.postUserCodeVerify(b);m.value.closeModal(),n.status==M.SUCCESS?f.value.openModal(l("core__fe_verify_complete"),l("core__fe_verify_complete_message"),l("core__fe_verify_continue"),()=>{x.Inertia.get(route("resetPassword",{id:n.data.userId,code:i.value}))}):s.value.openModal(l("ps_error_dialog__error"),n.message,l("core__fe_btn_ok"),()=>{})}async function h(){m.value.openModal();const n=new ce;n.userEmail=o.email;const u=await g.postForgotPassword(n);m.value.closeModal(),u.status==M.SUCCESS?f.value.openModal(l("ps_success_dialog__success"),u.data.message,l("core__fe_btn_ok"),()=>{}):s.value.openModal(l("ps_error_dialog__error"),u.message,l("core__fe_btn_ok"),()=>{})}function k(){x.Inertia.get(route("login"))}return{authStore:g,loginClicked:k,code:i,clicked:v,ps_error_dialog:s,ps_success_dialog:f,ps_loading_dialog:m,isDarkMode:C,dir:r,resentclicked:h}}},pe={class:"mb-6 bg-feAchromatic-50 dark_bg-feAchromatic-900 flex flex-row min-h-screen items-center justify-center"},fe={class:"h-auto sm:mt-32 lg:mt-36 mt-28 flex flex-row w-98 lg:w-202 rounded-md overflow-hidden shadow-md"},ue={class:"hidden w-100 h-auto bg-feSecondary-900 lg:flex flex-col items-center justify-center"},ge={class:"w-65 h-50"},be={class:"flex flex-row text-feSecondary-50 dark_text-feSecondary-900 rtl:space-x-reverse space-x-4"},ye={class:"w-full lg:w-100 bg-feAchromatic-50 dark_bg-feSecondary-800 px-4 sm:px-10 pb-10"},ve={class:"flex justify-center"},he={class:"mb-4"},ke={class:"block mt-4"},Se={class:"block mt-12"},xe={class:"block mt-6 mb-2 lg:mb-44"};function Ce(o,d,C,r,g,b){const m=a("Head"),f=a("welcome-image"),s=a("ps-label"),i=a("ps-icon"),v=a("ps-input"),h=a("ps-loading"),k=a("ps-button"),n=a("ps-feSecondary-button"),u=a("ps-loading-dialog"),L=a("ps-success-dialog"),D=a("ps-error-dialog");return P(),q(X,null,[e(m,{title:o.$t("core__fe_email_verification_title")},null,8,["title"]),t("div",{class:R(r.isDarkMode?"dark":"")},[t("div",pe,[t("div",fe,[t("div",ue,[t("div",ge,[e(f)]),e(s,{class:"text-lg font-semibold mt-6 mb-2",textColor:"text-feSecondary-50"},{default:_(()=>[p(c(o.$t("login__fe_title_best_deal")),1)]),_:1}),e(s,{class:"text-base font-normal text-center mb-2 mx-10",textColor:"text-feSecondary-200"},{default:_(()=>[p(c(o.$t("login__fe_description_best_deal")),1)]),_:1}),t("div",be,[e(i,{name:"facebookCircle"}),e(i,{name:"instagramCircle"}),e(i,{name:"twitter"}),e(i,{name:"pinterest"}),e(i,{name:"linkedIn"})])]),t("div",ye,[t("div",ve,[e(s,{class:"mt-6 mb-8 text-2xl font-senibold justify-center"},{default:_(()=>[p(c(o.$t("core__fe_email_verification_title")),1)]),_:1})]),e(s,{class:"mb-12 text-sm",textColor:"text-feSecondary-500 "},{default:_(()=>[p(c(o.$t("core__fe_email_verification_title_description")),1)]),_:1}),t("div",null,[t("div",he,[e(s,{class:"mb-2 text-sm",textColor:"text-feSecondary-800 dark_text-feSecondary-200"},{default:_(()=>[p(c(o.$t("core__fe_verify_code")),1)]),_:1}),e(v,{type:"text",onKeyup:Q(r.clicked,["enter"]),value:r.code,"onUpdate:value":d[0]||(d[0]=S=>r.code=S),class:"placeholder-feSecondary-800 dark_placeholder-feSecondary-500",theme:"text-feSecondary-500 bg-feAchromatic-50 dark_bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus_ring-1 focus_ring-fePrimary-500",placeholder:o.$t("core__fe_verify_code_placeholder"),autofocus:""},null,8,["onKeyup","value","placeholder"])]),t("div",ke,[t("span",{class:"text-sm cursor-pointer text-fePrimary-500 border-b border-fePrimary-500",onClick:d[1]||(d[1]=(...S)=>r.resentclicked&&r.resentclicked(...S))},c(o.$t("core__fe_verify_resent")),1)]),t("div",Se,[e(k,{class:"w-full mb-2",onClick:r.clicked},{default:_(()=>[r.authStore.loading.value?(P(),Z(h,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-fePrimary-500 me-1",loadingSize:"h-5 w-5"})):ee("",!0),p(" "+c(o.$t("core__fe_verify_code_verify")),1)]),_:1},8,["onClick"])]),t("div",xe,[e(n,{colors:"bg-feAchromatic-50 dark_bg-feSecondary-800 text-feSecondary-800 dark_text-feSecondary-50",onClick:r.loginClicked,class:"w-full"},{default:_(()=>[p(c(o.$t("core__fe_verify_cancel")),1)]),_:1},8,["onClick"])])])])])])],2),e(u,{ref:"ps_loading_dialog",isClickOut:!1},null,512),e(L,{ref:"ps_success_dialog"},null,512),e(D,{ref:"ps_error_dialog"},null,512)],64)}var jo=me(_e,[["render",Ce]]);export{jo as default};