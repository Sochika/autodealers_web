import U from"./PsLabel2.js";import D from"./PsLabelTitle2.js";import I from"./PsLabelCaption22.js";import T from"./PsButton2.js";import A from"./PsSecondaryButton.js";import H from"./PsInput2.js";import V from"./PsLoadingDialog2.js";import B from"./PsSuccessDialog2.js";import F from"./PsErrorDialog.js";import{Y as $,aE as j,aF as K,aG as N,aH as W,aI as z,aJ as J,H as O,L as R,i as v,O as P,K as G,C as M,r as s,o as E,c as Y,b as t,a,w as m,ay as q,t as n,n as Q,F as X,J as i,R as Z,p as _,f as ee,g as oe}from"./app.js";import te from"./PsLabelHeader3.js";import{P as re}from"./PsCard.js";import{P as ae}from"./PsIcon.js";import se from"./PsLabelCaption3.js";import{P as ie}from"./PsLoading.js";import{W as le}from"./WelcomeImage.js";import ne from"./PsFrontendLayout.js";import{b as L}from"./PsApiService2.js";import{u as ce}from"./AuthStore.js";import{U as de}from"./UserEmailVerifyParameterHolder.js";import{_ as me}from"./plugin-vue_export-helper.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsIcon2.js";import"./Icons.js";import"./FooterView.js";import"./FooterLinkSection.js";import"./PsLink.js";import"./PsRouteLink.js";import"./ProductParameterHolder.js";import"./ps_constants.js";import"./PsValueStore.js";import"./AppInfoStore.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./PsNavTabBar.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./ItemLocationTownship.js";import"./PsSepetetedStore.js";import"./ItemLocationTownshipStore.js";import"./AppInfoParameterHolder.js";import"./PsNavBar.js";import"./UserStore.js";import"./User.js";import"./RatingDetail.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./index.esm.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./PsNotificationBox.js";import"./ProductStore.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./NotificationStore.js";import"./NotiUnRegisterHolder.js";$.add(j,K,N,W,z,J);const _e={class:"UserVerifyEmail",components:{PsLabel:U,PsLabelTitle:D,PsButton:T,PsInput:H,PsLoadingDialog:V,PsSuccessDialog:B,PsErrorDialog:F,PsLabelCaption:se,PsIcon:ae,PsLabelHeader3:te,PsCard:re,Head:O,Link:R,PsLabelCaption2:I,PsLoading:ie,WelcomeImage:le,PsSecondaryButton:A},layout:ne,props:["email","password","user_id","flag","error_validation","authUser"],setup(e){const l=ce(),p=new de,r=v(),g=v(),u=v(),b=v();e.authUser!=null&&P.Inertia.get(route("dashboard"));const y=G(),c=M(()=>y.getters.isDarkMode),d=M(()=>y.getters.dir);async function h(){if(e.flag=="error")u.value.openModal(i("ps_error_dialog__error"),e.error_validation,i("core__fe_btn_ok"),()=>{});else{p.userId=e.user_id,p.code=b.value,p.email="",r.value.openModal();const o=await l.postUserEmailVerify(p);r.value.closeModal(),o.status==L.SUCCESS?g.value.openModal(i("core__fe_user_email_verify_success"),i("core__fe_user_email_verify_success_message"),i("core__fe_user_email_veriy_continue"),()=>{k()}):u.value.openModal(i("ps_error_dialog__error"),o.message,i("core__fe_btn_ok"),()=>{})}}async function k(){let o=Z({email:"",password:"",deviceToken:"",headerToken:"",loginMethod:""});o.loginMethod="normal",o.email=e.email,o.password=e.password,o.deviceToken=localStorage.deviceToken,o.headerToken=localStorage.headerToken,o.loginMethod="normal",await l.signInWithEmailAndPassword(o.email,o.email)&&o.transform(w=>({...w})).post(route("login"),{onFinish:()=>o.reset("password")})}async function S(){const o={};o.user_email=e.email,r.value.openModal();const f=await l.postResendCode(o);r.value.closeModal(),f.status==L.SUCCESS?g.value.openModal(i("ps_success_dialog__success"),f.data.message,i("core__fe_btn_ok"),()=>{}):u.value.openModal(i("ps_error_dialog__error"),f.message,i("core__fe_btn_ok"),()=>{})}function x(){P.Inertia.get(route("login"))}return{authStore:l,code:b,clicked:h,ps_error_dialog:u,ps_success_dialog:g,ps_loading_dialog:r,resentClicked:S,loginClicked:x,isDarkMode:c,dir:d}}},fe={class:"mb-6 bg-feAchromatic-50 dark_bg-feAchromatic-900 flex flex-row min-h-screen items-center justify-center"},pe={class:"h-auto sm:mt-32 lg:mt-36 mt-28 flex flex-row w-98 lg:w-202 rounded-md overflow-hidden shadow-md"},ue={class:"hidden w-100 h-auto bg-feSecondary-900 lg:flex flex-col items-center justify-center"},ge={class:"w-65 h-50"},be={class:"flex flex-row text-feSecondary-50 dark_text-feSecondary-900 rtl:space-x-reverse space-x-4"},ye={class:"w-full lg:w-100 bg-feAchromatic-50 dark_bg-feSecondary-800 px-4 sm:px-10 pb-10"},ve={class:"flex justify-center"},he={class:"mb-4"},ke={class:"block mt-4"},Se={class:"block mt-6 lg:mt-56"},xe={class:"block mt-6 mb-2 lg:mb-6"};function we(e,l,p,r,g,u){const b=s("Head"),y=s("welcome-image"),c=s("ps-label"),d=s("ps-icon"),h=s("ps-input"),k=s("ps-loading"),S=s("ps-button"),x=s("ps-feSecondary-button"),o=s("ps-loading-dialog"),f=s("ps-success-dialog"),w=s("ps-error-dialog");return E(),Y(X,null,[t(b,{title:e.$t("core__fe_email_verification_title")},null,8,["title"]),a("div",{class:Q(r.isDarkMode?"dark":"")},[a("div",fe,[a("div",pe,[a("div",ue,[a("div",ge,[t(y)]),t(c,{class:"text-lg font-semibold mt-6 mb-2",textColor:"text-feSecondary-50"},{default:m(()=>[_(n(e.$t("login__fe_title_best_deal")),1)]),_:1}),t(c,{class:"text-base font-normal text-center mb-2 mx-10",textColor:"text-feSecondary-200"},{default:m(()=>[_(n(e.$t("login__fe_description_best_deal")),1)]),_:1}),a("div",be,[t(d,{name:"facebookCircle"}),t(d,{name:"instagramCircle"}),t(d,{name:"twitter"}),t(d,{name:"pinterest"}),t(d,{name:"linkedIn"})])]),a("div",ye,[a("div",ve,[t(c,{class:"mt-6 mb-6 text-2xl font-senibold justify-center"},{default:m(()=>[_(n(e.$t("core__fe_email_verification_title")),1)]),_:1})]),t(c,{class:"mb-6 text-sm",textColor:"text-feSecondary-500 "},{default:m(()=>[_(n(e.$t("core__fe_user_email_verification_title_description")),1)]),_:1}),a("div",null,[a("div",he,[t(c,{class:"mb-2 text-sm",textColor:"text-feSecondary-800 dark_text-feSecondary-200"},{default:m(()=>[_(n(e.$t("core__fe_verify_code")),1)]),_:1}),t(h,{type:"text",onKeyup:q(r.clicked,["enter"]),value:r.code,"onUpdate:value":l[0]||(l[0]=C=>r.code=C),class:"placeholder-feSecondary-800 dark_placeholder-feSecondary-500",theme:"text-feSecondary-500 bg-feAchromatic-50 dark_bg-feSecondary-800",defaultBorder:"border border-feSecondary-200 dark:border-feSecondary-400 focus:outline-none focus_ring-1 focus_ring-fePrimary-500",placeholder:e.$t("core__fe_verify_code_placeholder"),autofocus:""},null,8,["onKeyup","value","placeholder"])]),a("div",ke,[a("span",{class:"text-sm cursor-pointer text-fePrimary-500 border-b border-fePrimary-500",onClick:l[1]||(l[1]=(...C)=>r.resentClicked&&r.resentClicked(...C))},n(e.$t("core__fe_verify_resent")),1)]),a("div",Se,[t(S,{class:"w-full mb-2",onClick:r.clicked},{default:m(()=>[r.authStore.loading.value?(E(),ee(k,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-fePrimary-500 me-1",loadingSize:"h-5 w-5"})):oe("",!0),_(" "+n(e.$t("core__fe_verify_code_verify")),1)]),_:1},8,["onClick"])]),a("div",xe,[t(x,{colors:"bg-feAchromatic-50 dark_bg-feSecondary-800 text-feSecondary-800 dark_text-feSecondary-50",onClick:r.loginClicked,class:"w-full"},{default:m(()=>[_(n(e.$t("core__fe_verify_cancel")),1)]),_:1},8,["onClick"])])])])])])],2),t(o,{ref:"ps_loading_dialog",isClickOut:!1},null,512),t(f,{ref:"ps_success_dialog"},null,512),t(w,{ref:"ps_error_dialog"},null,512)],64)}var Fo=me(_e,[["render",we]]);export{Fo as default};
