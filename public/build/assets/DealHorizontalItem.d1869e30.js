import{D as i,c as p}from"./DealOptionProvider.a650b3ba.js";import m from"./PsLabel.3935ab2c.js";import d from"./PsCard.27eb6835.js";import f from"./PsIcon.0697a0d8.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{d as _,o as v,c as x,b as o,w as n,a as r,q as C,t as k,r as t}from"./app.df1b8390.js";import"./PsApiService.317e88ef.js";import"./PsObject.a17ef38f.js";const b=_({name:"DealHorizontalItem",props:{deal:{type:i},onClick:Function},components:{PsLabel:m,PsCard:d,PsIcon:f},setup(){return{dealoptionProvider:p()}}}),h={class:"flex flex-col"},D={class:"flex content-center items-center p-5"};function P(e,a,$,w,y,g){const l=t("ps-icon"),s=t("ps-label"),c=t("ps-card");return v(),x("div",{class:"flex flex-col mt-2 w-full h-auto cursor-pointer",onClick:a[0]||(a[0]=A=>e.onClick!=null?e.onClick(e.deal):null)},[o(c,{class:"flex w-full flex-col my-2 bg-feAchromatic-50 dark:bg-feAchromatic-800",enabledHover:!0},{default:n(()=>[r("div",h,[r("div",D,[o(l,{name:"dot",h:"8",class:"mt-1",textColor:"text-feSecondary-400 dark:text-feAchromatic-500"}),o(s,null,{default:n(()=>[C(k(e.deal?e.deal.name:""),1)]),_:1})])])]),_:1})])}var q=u(b,[["render",P]]);export{q as default};
