import u from"./PsModal2.js";import g from"./PsLabelTitle2.js";import b from"./PsLabel2.js";import{d as v,i as r,J as x,r as a,o as $,f as C,w as e,b as i,p as _,t as c}from"./app.js";import{_ as M}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./PsLine.js";const P=v({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),t=r(x("ps_loading_dialog__loading"));function s(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(p){t.value=p}return{psmodal:o,openModal:s,closeModal:l,message:t,setMessage:n}}});function h(o,t,s,l,n,p){const m=a("ps-label-title"),d=a("ps-label"),f=a("ps-modal");return $(),C(f,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(m,null,{default:e(()=>[_(c(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(d,null,{default:e(()=>[_(c(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var T=M(P,[["render",h]]);export{T as default};
