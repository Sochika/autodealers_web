import v from"./PsModal.11d3d0c2.js";import C from"./PsLabel.3935ab2c.js";import x from"./PsButton.935d57c3.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import{d as y,i as a,o as h,f as B,w as t,b as c,q as m,t as p,a as g,r as _}from"./app.df1b8390.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";const P=y({name:"PsConfirmDialog3",components:{PsModal:v,PsLabel:C,PsButton:x},setup(){const e=a(),o=a(trans("ps_warning_dialog__warning")),l=a(trans("ps_warning_dialog__warning_message")),i=a(trans("ps_confirm_dialog__yes"));let r,f;function n(s){s=="yes"?r():f(),e.value.toggle(!1)}function d(s,u,k,b){o.value=s,l.value=u.toString(),i.value=k,e.value.toggle(!0),r=b}return{psmodal:e,title:o,message:l,openModal:d,actionClicked:n,okButton:i}}}),$={class:"w-full mt-4"},S={class:"flex justify-end mt-8"};function D(e,o,l,i,r,f){const n=_("ps-label"),d=_("ps-button"),s=_("ps-modal");return h(),B(s,{ref:"psmodal",maxWidth:"472px",line:"hidden",isClickOut:!1,theme:"p-6 rounded-lg bg:white",class:"z-20"},{title:t(()=>[c(n,{class:"font-semibold text-xl text-feSecondary-800"},{default:t(()=>[m(p(e.title),1)]),_:1})]),body:t(()=>[g("div",$,[c(n,{class:"font-medium text-base text-feSecondary-700"},{default:t(()=>[m(p(e.message),1)]),_:1})])]),footer:t(()=>[g("div",S,[c(d,{onClick:o[0]||(o[0]=u=>e.actionClicked("yes"))},{default:t(()=>[m(p(e.okButton),1)]),_:1})])]),_:1},512)}var L=w(P,[["render",D]]);export{L as default};