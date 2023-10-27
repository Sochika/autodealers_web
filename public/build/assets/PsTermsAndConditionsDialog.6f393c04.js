import{d as g,i as h,o as k,f as C,w as t,a,b as n,q as l,t as c,h as y,r as i}from"./app.df1b8390.js";import x from"./PsModal.11d3d0c2.js";import A from"./PsLabel.3935ab2c.js";import S from"./PsButton.935d57c3.js";import $ from"./PsIcon.0697a0d8.js";import{u as w}from"./AboutUsStore.61de9f88.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";const M=g({name:"PsTermsAndConditionsDialog",components:{PsModal:x,PsLabel:A,PsButton:S,PsIcon:$},setup(){const e=w();e.loadAboutUs("1");const o=h();let f,m;function p(d){d=="yes"?f():m(),o.value.toggle(!1)}function u(){o.value.toggle(!0)}function r(){o.value.toggle(!1)}return{aboutUsProvider:e,psmodal:o,openModal:u,actionClicked:p,close:r}}}),T={class:"flex justify-between shadow p-6 dark:bg-feSecondary-800"},B={class:"h-52 overflow-y-auto my-6 ps-6 pe-10"},U=["innerHTML"],D={class:"flex justify-end p-4 bg-feSecondary-100 dark:bg-feSecondary-800"};function L(e,o,f,m,p,u){const r=i("ps-label"),d=i("ps-icon"),_=i("ps-button"),v=i("ps-modal");return k(),C(v,{ref:"psmodal",maxWidth:"868px",line:"hidden",isClickOut:!1,theme:"rounded-lg shadow-xl overflow-hidden dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[a("div",T,[n(r,{textColor:"text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:t(()=>[l(c(e.$t("term_and_condition__term_and_condition")),1)]),_:1}),n(d,{name:"close",class:"text-feAchromatic-400 hover:cursor-pointer",onClick:o[0]||(o[0]=y(s=>e.psmodal.toggle(!1),["prevent"]))})])]),body:t(()=>[a("div",B,[n(r,{class:"text-base font-normal text-feSecondary-700 dark:text-feSecondary-400"},{default:t(()=>{var s,b;return[a("div",{innerHTML:(b=(s=e.aboutUsProvider.aboutus)==null?void 0:s.data)==null?void 0:b.termsAndConditions},null,8,U)]}),_:1})])]),footer:t(()=>[a("div",D,[n(_,{onClick:o[1]||(o[1]=s=>e.close())},{default:t(()=>[l(c(e.$t("Close")),1)]),_:1}),n(_,{onClick:o[2]||(o[2]=s=>e.close()),class:"ms-4",colors:"bg-feAchromatic-50 dark:bg-feAchromatic-800 dark:text-feAchromatic-200 hover:text-feAchromatic-50",border:"border border-feAchromatic-300 dark:border-feAchromatic-500"},{default:t(()=>[l(c(e.$t("Cancel")),1)]),_:1})])]),_:1},512)}var K=P(M,[["render",L]]);export{K as default};
