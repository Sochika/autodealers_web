import{U as v}from"./UpdaterLayout.f6b2f9f3.js";import{P as S}from"./PsButton.27aa76f7.js";import{P as w,a as x}from"./PsSuccessDialog.9c3bba6c.js";import{P as y}from"./PsLoadingCircleDialog.72c88d72.js";import{d as P,p as U,i as a,Q as u,O as d,o as $,c as h,b as o,w as m,a as _,t as f,q as B,z as n,r as s}from"./app.df1b8390.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.aabd8ae0.js";import"./Icons.70fae9c4.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLabel.220aebc7.js";import"./PsLoading.d7e2b7a9.js";const M=P({components:{UpdaterLayout:v,Link:U,PsButton:S,PsLoadingCircleDialog:y,PsErrorDialog:w,PsSuccessDialog:x},props:["status"],setup(t){const e=a(),i=a(),c=a(),g=a(0);let p=u().props.logMessages;p=="be_lang_sync_success"&&d.get(route("NextLaravelUpdater::addNewFeLangString"));function l(){d.post(route("NextLaravelUpdater::addNewLangString"),{},{onBefore:()=>{e.value.openModal(n("core__be_importing_title2_be"),n("core__be_importing_note2_be"))},onSuccess:r=>{u().props.logMessages=="be_lang_sync_success"&&d.get(route("NextLaravelUpdater::addNewFeLangString"))},onError:r=>{e.value.closeModal(),i.value.openModal(n("ps_error_dialog__error"),n(r.message),"OK")}})}return{toAddNewFeLangString:l,ps_loading_circle_dialog:e,ps_error_dialog:i,isGoNext:g,ps_success_dialog:c,go_next:p}}}),k={class:"paragraph text-center"},D=_("div",{class:"",style:{"margin-bottom":"5px"}},null,-1),F={class:"buttons"};function A(t,e,i,c,g,p){const l=s("ps-button"),r=s("UpdaterLayout"),L=s("ps-error-dialog"),N=s("ps-success-dialog"),b=s("ps-loading-circle-dialog");return $(),h("div",null,[o(r,{title:"installer_messages.updater.addNewLangString.title"},{container:m(()=>[_("p",k,f(t.$t("installer_messages.updater.addNewLangString.message2")),1),D,_("div",F,[o(l,{onClick:e[0]||(e[0]=E=>t.toAddNewFeLangString()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:m(()=>[B(f(t.$t("btn_update")),1)]),_:1})])]),_:1}),o(L,{ref:"ps_error_dialog"},null,512),o(N,{ref:"ps_success_dialog"},null,512),o(b,{ref:"ps_loading_circle_dialog"},null,512)])}var R=C(M,[["render",A]]);export{R as default};
