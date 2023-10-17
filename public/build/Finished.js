import{U as u}from"./UpdaterLayout.js";import{P as f}from"./PsButton.js";import{P as L}from"./PsLoadingCircleDialog.js";import{d as v,O as r,i as N,r as t,o as n,c as i,b as s,w as p,t as l,g as b,a as y,p as $,F as k,J as d}from"./app.js";import{_ as C}from"./plugin-vue_export-helper.js";import"./PsIcon.js";import"./Icons.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./PsLabel.js";import"./PsLoading.js";const h=v({components:{UpdaterLayout:u,Link:r.Link,PsButton:f,PsLoadingCircleDialog:L},props:["message"],setup(o){const e=N();function a(){r.Inertia.get(route("NextLaravelUpdater::addNewLangString"),{},{onBefore:()=>{e.value.openModal(d("core__be_importing_title"),d("core__be_importing_note"))},onSuccess:c=>{e.value.closeModal()},onError:()=>{e.value.closeModal()}})}return{toAddNewLangString:a,ps_loading_circle_dialog:e}}}),w={key:0,class:"paragraph text-center"},B={class:"buttons"};function S(o,e,a,c,U,x){const m=t("ps-button"),_=t("UpdaterLayout"),g=t("ps-loading-circle-dialog");return n(),i(k,null,[s(_,{message:"message",title:"installer_messages.updater.final.title"},{container:p(()=>[o.message?(n(),i("p",w,l(o.$t(o.message.message)),1)):b("",!0),y("div",B,[s(m,{onClick:e[0]||(e[0]=P=>o.toAddNewLangString()),class:"button",type:"reset",padding:"px-7 py-2",rounded:"rounded",hover:""},{default:p(()=>[$(l(o.$t("installer_messages.next")),1)]),_:1})])]),_:1}),s(g,{ref:"ps_loading_circle_dialog"},null,512)],64)}var q=C(h,[["render",S]]);export{q as default};