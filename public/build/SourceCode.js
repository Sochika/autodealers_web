import{U as L}from"./UpdaterLayout.js";import{P as S}from"./PsButton.js";import{P as x}from"./PsLoadingCircleDialog.js";import{P as N,a as h}from"./PsSuccessDialog.js";import{P as B}from"./PsReloadDialog.js";import{d as U,O as m,i as a,r as s,o as p,c as D,b as r,w as _,a as f,t as u,f as v,p as y,J as t}from"./app.js";import{_ as M}from"./plugin-vue_export-helper.js";import"./PsIcon.js";import"./Icons.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./PsLabel.js";import"./PsLoading.js";const E=U({components:{UpdaterLayout:L,Link:m.Link,PsButton:S,PsLoadingCircleDialog:x,PsErrorDialog:N,PsSuccessDialog:h,PsReloadDialog:B},props:["status"],setup(o){const e=a(),g=a(),d=a(),c=a(),i=a(0);function n(){m.Inertia.post(route("NextLaravelUpdater::sourceCodeSync"),{},{onBefore:()=>{e.value.openModal(t("core__be_source_code_title"),t("core__be_source_code_syncing_note"))},onSuccess:l=>{console.log(o.status),o.status.flag=="success"&&(i.value=1,e.value.closeModal(),d.value.openModal(t("ps_success_dialog__success"),t(o.status.msg),"OK"))},onError:l=>{e.value.closeModal(),c.value.openModal(t("ps_error_dialog__error"),t(l.message),"Reload","NextLaravelUpdater::sourceCode",!1,"alert-triangle")}})}return{handleCodeSync:n,ps_loading_circle_dialog:e,ps_error_dialog:g,isGoNext:i,ps_success_dialog:d,ps_reload_dialog:c}}}),V={class:"paragraph text-center"},w={class:"buttons"};function G(o,e,g,d,c,i){const n=s("ps-button"),l=s("UpdaterLayout"),C=s("ps-loading-circle-dialog"),k=s("ps-error-dialog"),P=s("ps-success-dialog"),$=s("ps-reload-dialog");return p(),D("div",null,[r(l,{title:"code_update"},{container:_(()=>[f("p",V,u(o.$t("code_update_desc")),1),f("div",w,[o.isGoNext?(p(),v(n,{key:0,onClick:e[0]||(e[0]=b=>o.handleCodeSync()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:_(()=>[y(u(o.$t("go_next")),1)]),_:1})):(p(),v(n,{key:1,onClick:e[1]||(e[1]=b=>o.handleCodeSync()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:_(()=>[y(u(o.$t("code_sync")),1)]),_:1}))])]),_:1}),r(C,{ref:"ps_loading_circle_dialog"},null,512),r(k,{ref:"ps_error_dialog"},null,512),r(P,{ref:"ps_success_dialog"},null,512),r($,{ref:"ps_reload_dialog"},null,512)])}var W=M(E,[["render",G]]);export{W as default};
