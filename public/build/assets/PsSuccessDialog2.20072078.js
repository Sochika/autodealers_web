import v from"./PsModal.11d3d0c2.js";import b from"./PsLabel.3935ab2c.js";import y from"./PsButton.935d57c3.js";import{d as S,i as a,z as p,o as C,f as h,w as t,a as n,b as _,q as f,t as m,r as u}from"./app.df1b8390.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";const w=S({components:{PsModal:v,PsLabel:b,PsButton:y},setup(){const e=a(),s=a(p("ps_success_dialog__success")),l=a(p("ps_success_dialog__success_message")),c=a(p("ps_confirm_dialog__yes"));let r;function g(){r(),e.value.toggle(!1)}function o(d,i,x,k){s.value=d,l.value=i.toString(),c.value=x,e.value.toggle(!0),r=k}return{psmodal:e,title:s,message:l,openModal:o,actionClicked:g,okButton:c}}}),$={class:"w-full"},P={class:"w-full mt-4"},z={class:"flex justify-end mt-8"},N={class:"flex-grow-0"};function V(e,s,l,c,r,g){const o=u("ps-label"),d=u("ps-button"),i=u("ps-modal");return C(),h(i,{ref:"psmodal",line:"hidden",maxWidth:"472px",isClickOut:!1,theme:"p-6 rounded-lg dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[n("div",$,[_(o,{class:"font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-200"},{default:t(()=>[f(m(e.title),1)]),_:1})])]),body:t(()=>[n("div",P,[_(o,{class:"text-base font-normal text-feSecondary-700 dark:text-feSecondary-300"},{default:t(()=>[f(m(e.message),1)]),_:1})])]),footer:t(()=>[n("div",z,[n("div",N,[_(d,{onClick:s[0]||(s[0]=x=>e.actionClicked()),textSize:"text-xxs lg:text-sm",class:"py-3"},{default:t(()=>[f(m(e.okButton),1)]),_:1})])])]),_:1},512)}var W=B(w,[["render",V]]);export{W as default};
