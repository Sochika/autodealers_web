import{d as v,i as h,o as k,f as y,w as t,a as n,b as a,q as d,t as c,h as x,r as l}from"./app.df1b8390.js";import C from"./PsModal.11d3d0c2.js";import S from"./PsLabel.3935ab2c.js";import $ from"./PsButton.935d57c3.js";import A from"./PsIcon.0697a0d8.js";import{u as P}from"./AboutUsStore.61de9f88.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";const q=v({name:"PsFaqDialog",components:{PsModal:C,PsLabel:S,PsButton:$,PsIcon:A},setup(){const o=P();o.loadAboutUs("1");const e=h();let f,m;function p(i){i=="yes"?f():m(),e.value.toggle(!1)}function u(){e.value.toggle(!0)}function r(){e.value.toggle(!1)}return{aboutUsProvider:o,psmodal:e,openModal:u,actionClicked:p,close:r}}}),M={class:"flex justify-between shadow p-6 dark:bg-feSecondary-800"},B={class:"h-52 overflow-y-auto my-6 ps-6 pe-10"},U=["innerHTML"],D={class:"flex justify-end p-4 bg-feSecondary-100 dark:bg-feSecondary-800"};function L(o,e,f,m,p,u){const r=l("ps-label"),i=l("ps-icon"),b=l("ps-button"),g=l("ps-modal");return k(),y(g,{ref:"psmodal",maxWidth:"868px",line:"hidden",isClickOut:!1,theme:"rounded-lg shadow-xl overflow-hidden dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[n("div",M,[a(r,{textColor:"text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:t(()=>[d(c(o.$t("item_detail__faq")),1)]),_:1}),a(i,{name:"close",class:"text-feAchromatic-400 hover:cursor-pointer",onClick:e[0]||(e[0]=x(s=>o.psmodal.toggle(!1),["prevent"]))})])]),body:t(()=>[n("div",B,[a(r,{class:"text-base font-normal text-feSecondary-700 dark:text-feSecondary-400"},{default:t(()=>{var s,_;return[n("div",{innerHTML:(_=(s=o.aboutUsProvider.aboutus)==null?void 0:s.data)==null?void 0:_.faqPage},null,8,U)]}),_:1})])]),footer:t(()=>[n("div",D,[a(b,{onClick:e[1]||(e[1]=s=>o.close())},{default:t(()=>[d(c(o.$t("Close")),1)]),_:1}),a(b,{onClick:e[2]||(e[2]=s=>o.close()),class:"ms-4",colors:"bg-feAchromatic-50 dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",border:"border border-feAchromatic-300 dark:border-feAchromatic-500"},{default:t(()=>[d(c(o.$t("Cancel")),1)]),_:1})])]),_:1},512)}var K=w(q,[["render",L]]);export{K as default};