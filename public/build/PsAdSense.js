import{P as f}from"./PsValueStore.js";import{u as p}from"./AppInfoStore.js";import{A as g}from"./AppInfoParameterHolder.js";import{_ as y}from"./plugin-vue_export-helper.js";import{i as n,j as S,o as u,c as h,a as e,u as l,g as _}from"./app.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./ps_constants.js";const x={name:"PsAdSense",props:{adStyle:{type:String,required:!1,default:"display:inline-block; width: 300px; height: 190px;"},adStyleSm:{type:String,required:!1,default:"display:inline-block; width: 468px; height: 60px;"},adStyleLg:{type:String,required:!1,default:"display:inline-block; width: 728px; height: 90px;"},adFormat:{type:String,required:!1,default:"horizontal"}},setup(){const i=f().getLoginUserId(),a=p(),t=new g;t.userId=i;const d=n(""),o=n(""),r=n(!1);async function m(){d.value=a.appInfo.data.frontendConfigSetting.adClient,o.value=a.appInfo.data.frontendConfigSetting.adSlot,r.value=!0}return S(async()=>{await m();let s=document.createElement("script");s.type="text/javascript",s.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(s)}),{adsClient:d,adsSlot:o,dataReady:r}}},b={key:0},v={class:"flex sm:hidden"},C=["data-ad-client","data-ad-format","data-ad-slot"],I={class:"hidden sm:flex lg:hidden"},w=["data-ad-client","data-ad-format","data-ad-slot"],P={class:"hidden lg:flex"},k=["data-ad-client","data-ad-format","data-ad-slot"];function A(c,i,a,t,d,o){return t.dataReady?(u(),h("div",b,[e("div",v,[e("ins",{class:"adsbygoogle mt-2",style:l(a.adStyle),"data-adtest":"on","data-ad-client":t.adsClient,"data-ad-format":a.adFormat,"data-ad-slot":t.adsSlot},null,12,C)]),e("div",I,[e("ins",{class:"adsbygoogle mt-2",style:l(a.adStyleSm),"data-adtest":"on","data-ad-client":t.adsClient,"data-ad-format":a.adFormat,"data-ad-slot":t.adsSlot},null,12,w)]),e("div",P,[e("ins",{class:"adsbygoogle mt-2",style:l(a.adStyleLg),"data-adtest":"on","data-ad-client":t.adsClient,"data-ad-format":a.adFormat,"data-ad-slot":t.adsSlot},null,12,k)])])):_("",!0)}var H=y(x,[["render",A]]);export{H as default};