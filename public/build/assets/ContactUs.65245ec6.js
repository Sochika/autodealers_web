import{bD as U,y as w,i as f,Z as k,o as S,c as z,b as n,w as i,a as r,q as m,t as c,f as y,g as b,F as A,z as H,r as u}from"./app.df1b8390.js";import V from"./PsContentContainer.2eb168de.js";import N from"./PsLabelHeader4.6663f7f2.js";import $ from"./PsLabel.3935ab2c.js";import q from"./PsInput.699f2c15.js";import B from"./PsButton.935d57c3.js";import L from"./PsTextarea.45f4fd8c.js";import D from"./PsSuccessDialog.c1cdc55a.js";import{a as Z,P as E}from"./PsApiService.317e88ef.js";import{A as F}from"./ApiStatus.5720ba0b.js";import{m as I}from"./PsSepetetedStore.9a31ac47.js";import K from"./PsFrontendLayout.9c0ecc46.js";import{P as M}from"./PsValueStore.08b5513c.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsLabelTitle.7685c780.js";import"./PsObject.a17ef38f.js";import"./FooterView.97dc7826.js";import"./FooterLinkSection.746092c6.js";import"./PsLink.0ee2fc53.js";import"./PsRouteLink.14f8a093.js";import"./PsLabelCaption.a3843f8e.js";import"./PsIcon.0697a0d8.js";import"./ProductParameterHolder.b3159892.js";import"./ps_constants.deaae373.js";import"./AppInfoStore.4b2c5718.js";import"./DefaultPhoto.cc755f93.js";import"./PsNavTabBar.6c5f8913.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.9af11738.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.9d521488.js";import"./UserStore.5c2fdd50.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.1742bc34.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./PsNotificationBox.cc3868e0.js";import"./ProductStore.186e332b.js";import"./Product.dc190b28.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.987a5d48.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const j=I(e=>U(`contactUsStore/${e}`,()=>{const t=w(new Z),_=w({value:!1});let a=f(30),h=0;async function v(d,o){_.value=!0,await E.postContactUs(new F,o,d.toMap()),_.value=!1}return{buyingitemList:t,loading:_,limit:a,offset:h,postContactUs:v}}));class R{constructor(){this.name="",this.email="",this.message="",this.phone=""}ContactUsPrameterHolder(){this.name="",this.email="",this.message="",this.phone=""}resetParameterHolder(){return this.name="",this.email="",this.message="",this.phone="",this}toMap(){const t={};return t.contact_name=this.name,t.contact_email=this.email,t.contact_message=this.message,t.contact_phone=this.phone,t}}const G={name:"ContactView",components:{PsContentContainer:V,PsLabelHeader4:N,PsLabel:$,PsInput:q,PsButton:B,PsTextarea:L,PsSuccessDialog:D,Head:k},layout:K,setup(){const e=j(),t=new R,_=f(),a=f(""),h=f(""),v=f(""),d=f(""),o=f({nameStatus:!1,phoneStatus:!1,emailStatus:!1,messageStatus:!1}),g=M().getLoginUserId();function C(l){/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(l.target.value)?o.value.emailStatus=!1:o.value.emailStatus=!0}function P(l){l=l||window.event;const s=l.which?l.which:l.keyCode;if(s<42||s>57)l.preventDefault();else return!0}async function x(){if(t.name=a.value,t.phone=h.value,t.email=v.value,t.message=d.value,t.name==""||t.name==null){o.value.nameStatus=!0;return}if(t.phone==""||t.phone==null){o.value.phoneStatus=!0;return}if(t.email==""||t.email==null){o.value.emailStatus=!0;return}if(t.message==""||t.message==null){o.value.messageStatus=!0;return}await e.postContactUs(t,g),_.value.openModal("Success!",H("contact_us__add_successed")),a.value="",h.value="",v.value="",d.value="",o.value.nameStatus=!1,o.value.phoneStatus=!1,o.value.emailStatus=!1,o.value.messageStatus=!1}return{contactUsStore:e,submitclicked:x,name:a,phone:h,email:v,message:d,validation:o,validateEmail:C,phoneNumber:P,ps_success_dialog:_}}},J={class:"bg-feAchromatic-50 dark:bg-feAchromatic-900 rounded-lg w-auto sm:w-[556px] sm:mt-32 lg:mt-36 mt-28 mb-16 mx-auto py-4"},O={class:"flex justify-center items-center"},Q={class:"w-full flex flex-col"},W={class:"px-10"},X=r("span",{style:{"font-size":"17px",color:"red"}},"*",-1),Y={class:"px-10"},tt=r("span",{style:{"font-size":"17px",color:"red"}},"*",-1),et={class:"px-10"},at=r("span",{style:{"font-size":"17px",color:"red"}},"*",-1),ot={class:"px-10"},st=r("span",{style:{"font-size":"17px",color:"red"}},"*",-1),nt={class:"flex flex-col items-center mx-8 mb-4"};function rt(e,t,_,a,h,v){const d=u("Head"),o=u("ps-label-header-4"),p=u("ps-label"),g=u("ps-input"),C=u("ps-textarea"),P=u("ps-button"),x=u("ps-content-container"),l=u("ps-success-dialog");return S(),z(A,null,[n(d,{title:e.$t("contact_us__contact_us")},null,8,["title"]),n(x,null,{content:i(()=>[r("div",J,[r("div",O,[n(o,{class:"mb-4 font-medium"},{default:i(()=>[m(c(e.$t("contact_us__contact_us")),1)]),_:1})]),r("div",Q,[r("div",W,[n(p,{class:"mt-4"},{default:i(()=>[m(c(e.$t("contact_us__contact_name"))+" ",1),X]),_:1}),n(g,{class:"mt-2",type:"text",placeholder:e.$t("contact_us__contact_name"),value:a.name,"onUpdate:value":t[0]||(t[0]=s=>a.name=s)},null,8,["placeholder","value"]),a.validation.nameStatus?(S(),y(p,{key:0,class:"mt-4",textColor:"text-fePrimary-500"},{default:i(()=>[m(c(e.$t("contact_us__name_required_error")),1)]),_:1})):b("",!0)]),r("div",Y,[n(p,{class:"mt-4"},{default:i(()=>[m(c(e.$t("contact_us__contact_phone"))+" ",1),tt]),_:1}),n(g,{class:"mt-2",type:"text",placeholder:e.$t("contact_us__contact_phone"),value:a.phone,"onUpdate:value":t[1]||(t[1]=s=>a.phone=s),onKeypress:t[2]||(t[2]=s=>a.phoneNumber(s))},null,8,["placeholder","value"]),a.validation.phoneStatus?(S(),y(p,{key:0,class:"mt-4",textColor:"text-fePrimary-500"},{default:i(()=>[m(c(e.$t("contact_us__phone_required_error")),1)]),_:1})):b("",!0)]),r("div",et,[n(p,{class:"mt-4"},{default:i(()=>[m(c(e.$t("contact_us__contact_email"))+" ",1),at]),_:1}),n(g,{class:"mt-2",type:"email",placeholder:e.$t("contact_us__contact_email"),value:a.email,"onUpdate:value":t[3]||(t[3]=s=>a.email=s),onKeypress:a.validateEmail},null,8,["placeholder","value","onKeypress"]),a.validation.emailStatus?(S(),y(p,{key:0,class:"mt-4",textColor:"text-fePrimary-500"},{default:i(()=>[m(c(e.$t("contact_us__email_required_error")),1)]),_:1})):b("",!0)]),r("div",ot,[n(p,{class:"mt-4"},{default:i(()=>[m(c(e.$t("contact_us__contact_message"))+" ",1),st]),_:1}),n(C,{class:"mt-2",placeholder:e.$t("contact_us__contact_message"),value:a.message,"onUpdate:value":t[4]||(t[4]=s=>a.message=s)},null,8,["placeholder","value"]),a.validation.messageStatus?(S(),y(p,{key:0,class:"mt-4",textColor:"text-fePrimary-500"},{default:i(()=>[m(c(e.$t("contact_us__message_required_error")),1)]),_:1})):b("",!0)]),r("div",nt,[n(P,{class:"mt-6 sm:w-auto",onClick:a.submitclicked,disabled:!1},{default:i(()=>[m(c(e.$t("contact_us__submit")),1)]),_:1},8,["onClick"])])])])]),_:1}),n(l,{ref:"ps_success_dialog"},null,512)],64)}var _e=T(G,[["render",rt]]);export{_e as default};
