import v from"./PsModal2.js";import b from"./PsLabel2.js";import y from"./PsButton2.js";import{d as S,i as a,J as _,r as p,o as C,f as h,w as t,a as n,b as f,p as m,t as u}from"./app.js";import{_ as B}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./PsLine.js";const w=S({components:{PsModal:v,PsLabel:b,PsButton:y},setup(){const e=a(),s=a(_("ps_success_dialog__success")),l=a(_("ps_success_dialog__success_message")),c=a(_("ps_confirm_dialog__yes"));let r;function g(){r(),e.value.toggle(!1)}function o(d,i,x,k){s.value=d,l.value=i.toString(),c.value=x,e.value.toggle(!0),r=k}return{psmodal:e,title:s,message:l,openModal:o,actionClicked:g,okButton:c}}}),$={class:"w-full"},P={class:"w-full mt-4"},N={class:"flex justify-end mt-8"},V={class:"flex-grow-0"};function z(e,s,l,c,r,g){const o=p("ps-label"),d=p("ps-button"),i=p("ps-modal");return C(),h(i,{ref:"psmodal",line:"hidden",maxWidth:"472px",isClickOut:!1,theme:"p-6 rounded-lg dark_bg-feSecondary-800",class:"z-20"},{title:t(()=>[n("div",$,[f(o,{class:"font-semibold text-xl text-feSecondary-800 dark_text-feSecondary-200"},{default:t(()=>[m(u(e.title),1)]),_:1})])]),body:t(()=>[n("div",P,[f(o,{class:"text-base font-normal text-feSecondary-700 dark_text-feSecondary-300"},{default:t(()=>[m(u(e.message),1)]),_:1})])]),footer:t(()=>[n("div",N,[n("div",V,[f(d,{onClick:s[0]||(s[0]=x=>e.actionClicked()),textSize:"text-xxs lg:text-sm",class:"py-3"},{default:t(()=>[m(u(e.okButton),1)]),_:1})])])]),_:1},512)}var W=B(w,[["render",z]]);export{W as default};