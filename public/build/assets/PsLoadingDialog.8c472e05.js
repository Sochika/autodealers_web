import u from"./PsModal.11d3d0c2.js";import g from"./PsLabelTitle.7685c780.js";import b from"./PsLabel.3935ab2c.js";import{d as v,i as r,z as x,o as $,f as C,w as e,b as i,q as _,t as c,r as a}from"./app.df1b8390.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";const P=v({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),t=r(x("ps_loading_dialog__loading"));function s(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(p){t.value=p}return{psmodal:o,openModal:s,closeModal:l,message:t,setMessage:n}}});function h(o,t,s,l,n,p){const m=a("ps-label-title"),d=a("ps-label"),f=a("ps-modal");return $(),C(f,{ref:"psmodal",maxWidth:"450px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(m,null,{default:e(()=>[_(c(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(d,null,{default:e(()=>[_(c(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var N=M(P,[["render",h]]);export{N as default};
