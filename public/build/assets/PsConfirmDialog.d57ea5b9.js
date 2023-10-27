import h from"./PsModal.11d3d0c2.js";import x from"./PsLabel.3935ab2c.js";import $ from"./PsButton.935d57c3.js";import{d as P,i as a,z as i,o as w,f as S,w as t,a as r,b as c,q as d,t as f,r as v}from"./app.df1b8390.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";const N=P({name:"PsConfirmDialog",components:{PsModal:h,PsLabel:x,PsButton:$},setup(){const o=a(),e=a(i("ps_confirm_dialog__confirm")),m=a(i("ps_confirm_dialog__are_you_confirm")),_=a(i("ps_confirm_dialog__yes")),p=a(i("ps_confirm_dialog__no"));let u,s;function l(n){n=="yes"?u():s(),o.value.toggle(!1)}function g(n,k,C,b,y,B){e.value=n,m.value=k.toString(),_.value=C,p.value=b,o.value.toggle(!0),u=y,s=B}return{psmodal:o,title:e,message:m,openModal:g,actionClicked:l,okButton:_,cancelButton:p}}}),V={class:"w-full"},z={class:"w-full mt-3"},M={class:"flex justify-end mt-5"},j={class:"flex gap-4"};function q(o,e,m,_,p,u){const s=v("ps-label"),l=v("ps-button"),g=v("ps-modal");return w(),S(g,{ref:"psmodal",maxWidth:"370px",isClickOut:!1,line:"hidden",theme:"p-5 rounded-lg",class:"z-20"},{title:t(()=>[r("div",V,[c(s,{class:"font-semibold text-lg text-feSecondary-800"},{default:t(()=>[d(f(o.title),1)]),_:1})])]),body:t(()=>[r("div",z,[c(s,{class:"text-sm text-feSecondary-700"},{default:t(()=>[d(f(o.message),1)]),_:1})])]),footer:t(()=>[r("div",M,[r("div",j,[c(l,{onClick:e[0]||(e[0]=n=>o.actionClicked("yes"))},{default:t(()=>[d(f(o.okButton),1)]),_:1}),c(l,{onClick:e[1]||(e[1]=n=>o.actionClicked("no")),colors:"bg-feAchromatic-50",border:"border",hover:"",focus:""},{default:t(()=>[d(f(o.cancelButton),1)]),_:1})])])]),_:1},512)}var G=D(N,[["render",q]]);export{G as default};