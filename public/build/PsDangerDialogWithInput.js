import I from"./PsModal2.js";import w from"./PsLabel2.js";import D from"./PsButton2.js";import{d as P,i as n,J as g,R as E,r as f,o as A,f as j,w as t,a as y,b as s,p as d,t as l}from"./app.js";import z from"./PsIcon2.js";import M from"./PsInput2.js";import{_ as O}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./PsLine.js";const V=P({name:"PsDangerDialogWithInput",components:{PsModal:I,PsLabel:w,PsButton:D,PsIcon:z,PsInput:M},setup(){const e=n(),o=n(g("ps_danger_dialog__danger")),v=n(g("ps_danger_dialog__danger_message")),a=n(!0),m=n(),h=n(g("ps_confirm_dialog__yes")),c=n(g("ps_confirm_dialog__no"));let r,p=E({name:""});function _(){m.value==p.name?a.value=!1:a.value=!0}function b(u){u=="yes"?a.value||r():N(),a.value||e.value.toggle(!1)}function i(u,x,k,C,B,$,L){u!=null&&u.trim()!=""&&(o.value=u),x!=null&&x.trim()!=""&&(v.value=x),B!=null&&B.trim()!=""&&(m.value=B),C!=null&&C.trim()!=""&&(c.value=C),k!=null&&k.trim()!=""&&(h.value=k),e.value.toggle(!0),r=$}function N(){e.value.toggle(!1)}return{psmodal:e,openModal:i,closeModal:N,title:o,actionClicked:b,okButton:h,cancelButton:c,message:v,okBtnIsDisable:a,checkNameEqualOrNot:_,form:p,projectName:m}}}),W={class:"flex flex-row items-center"},q={class:"w-full text-start mt-2"},F={class:"flex flex-row justify-end"};function J(e,o,v,a,m,h){const c=f("ps-icon"),r=f("ps-label"),p=f("ps-input"),_=f("ps-button"),b=f("ps-modal");return A(),j(b,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{title:t(()=>[y("div",W,[s(c,{name:"info",class:"text-feError-500 me-2.5"}),s(r,{class:"text-lg font-semibold"},{default:t(()=>[d(l(e.title),1)]),_:1})])]),body:t(()=>[y("div",q,[s(r,{class:"font-light text-sm lg:text-base mb-2"},{default:t(()=>[d(l(e.message),1)]),_:1}),s(r,{class:"font-weight-bold text-sm lg:text-base"},{default:t(()=>[d(l(e.$t("confirm_info1"))+' "'+l(e.projectName)+'" '+l(e.$t("confirm_info2")),1)]),_:1}),s(p,{type:"text",value:e.form.name,"onUpdate:value":o[0]||(o[0]=i=>e.form.name=i),onInput:e.checkNameEqualOrNot,placeholder:e.$t("type_here")},null,8,["value","onInput","placeholder"])])]),footer:t(()=>[y("div",F,[s(_,{rounded:"rounded",onClick:o[1]||(o[1]=i=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-feAchromatic-200",colors:"bg-none",hover:"hover:outline-none hover_ring hover_ring-feAchromatic-100"},{default:t(()=>[d(l(e.cancelButton),1)]),_:1}),s(_,{disabled:e.okBtnIsDisable,rounded:"rounded",onClick:o[2]||(o[2]=i=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-feError-500 text-feAchromatic-50",hover:"hover:outline-none hover_ring hover_ring-feError-100",focus:"focus:outline-none focus_ring focus_ring-feError-300"},{default:t(()=>[d(l(e.okButton),1)]),_:1},8,["disabled"])])]),_:1},512)}var Z=O(V,[["render",J]]);export{Z as default};