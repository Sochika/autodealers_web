import r from"./PsLabelCaption.a3843f8e.js";import{P as l}from"./ps_constants.deaae373.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,b as i,w as n,a as _,t as c,g as p,r as f}from"./app.df1b8390.js";import"./PsLabel.3935ab2c.js";const u={name:"PaidAdItemPaidStatus",components:{PsLabelCaption:r},props:{status:{type:String},onClick:Function},setup(){return{PsConst:l}}},h={class:""},g={key:0},v={class:"absolute py-2 px-4 left-2 top-2 bg-feInfo-500 text-feAchromatic-50 text-center leading-4 rounded-sm"},b={key:1},x={class:"absolute py-2 px-4 left-2 top-2 bg-feSuccess-500 text-feAchromatic-50 text-center leading-4 rounded-sm"},y={key:2},P={class:"absolute py-2 px-4 left-2 top-2 bg-feAchromatic-500 text-feAchromatic-50 text-center leading-4 rounded-sm"},C={key:3},A={class:"absolute py-2 px-4 left-2 top-2 bg-feAchromatic-500 text-feAchromatic-50 text-center leading-4 rounded-sm"},k={key:4},I={class:"absolute py-2 px-4 left-2 top-2 bg-feWarning-500 text-feAchromatic-50 text-center rounded-sm"},S={key:5},N={class:"absolute py-2 px-4 left-2 top-2 bg-feError-600 text-feAchromatic-50 text-center leading-4 rounded-sm"};function w(o,B,a,s,V,j){const d=f("ps-label-caption");return t(),e("div",h,[a.status==s.PsConst.paidItemProgressStatus?(t(),e("div",g,[i(d,null,{default:n(()=>[_("div",v,c(o.$t("core__fe_paidad_item__progress")),1)]),_:1})])):a.status==s.PsConst.paidItemCompletedStatus?(t(),e("div",b,[i(d,null,{default:n(()=>[_("div",x,c(o.$t("core__fe_paidad_item__completed")),1)]),_:1})])):a.status==s.PsConst.paidItemNotYetStartStatus?(t(),e("div",y,[i(d,null,{default:n(()=>[_("div",P,c(o.$t("core__fe_paidad_item__not_reached")),1)]),_:1})])):a.status==s.PsConst.paidItemNotAvailable?(t(),e("div",C,[i(d,null,{default:n(()=>[_("div",A,c(o.$t("paidad_item__no_action")),1)]),_:1})])):a.status==s.PsConst.paidItemWaitingForApproval?(t(),e("div",k,[i(d,null,{default:n(()=>[_("div",I,c(o.$t("core__fe_paidad_item__wait_approval")),1)]),_:1})])):a.status==s.PsConst.paidItemRejected?(t(),e("div",S,[i(d,null,{default:n(()=>[_("div",N,c(o.$t("core__fe_paidad_item__wait_rejected")),1)]),_:1})])):p("",!0)])}var R=m(u,[["render",w]]);export{R as default};
