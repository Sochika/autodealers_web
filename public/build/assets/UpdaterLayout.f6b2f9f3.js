import{P as p}from"./PsButton.27aa76f7.js";import{P as m}from"./PsLoadingCircleDialog.72c88d72.js";import{P as u}from"./PsIcon.aabd8ae0.js";import{d as v,j as h,r as g,o as r,c,a as e,t as d,n as a,b as o,g as N,l as f}from"./app.df1b8390.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const b=v({components:{PsIcon:u,PsButton:p,PsLoadingCircleDialog:m},props:["title","message"],setup(s){function n(i,l){if(i==l)return"active"}return h(()=>{var i=document.getElementById("home_loading__container");i.style.display="none"}),{isActive:n}}}),L={class:"master"},w={class:"box"},y={class:"header"},U={class:"header__title"},A={class:"step"},C=e("li",{class:"step__divider"},null,-1),P={class:"step__icon"},R=e("li",{class:"step__divider"},null,-1),B={class:"step__icon"},S=e("li",{class:"step__divider"},null,-1),k={class:"step__icon"},V=e("li",{class:"step__divider"},null,-1),D={class:"step__icon"},E=e("li",{class:"step__divider"},null,-1),F={class:"step__icon"},I=e("li",{class:"step__divider"},null,-1),M={class:"step__icon"},j=e("li",{class:"step__divider"},null,-1),z={class:"main"},T={key:0,class:"alert alert-success text-center"};function q(s,n,i,l,_,G){const t=g("ps-icon");return r(),c("div",L,[e("div",w,[e("div",y,[e("h1",U,d(s.$t(s.title)),1)]),e("ul",A,[C,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::builderTableField")])},[e("div",P,[o(t,{h:"15",w:"15",name:"data_table",class:"font-semibold"})])],2),R,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::addNewMobileLangString")])},[e("div",B,[o(t,{h:"15",w:"15",name:"translate",class:"font-semibold"})])],2),S,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::addNewFeLangString")])},[e("div",k,[o(t,{h:"15",w:"15",name:"translate",class:"font-semibold"})])],2),V,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::addNewLangString")])},[e("div",D,[o(t,{h:"15",w:"15",name:"translate",class:"font-semibold"})])],2),E,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::sourceCode")])},[e("div",F,[o(t,{h:"15",w:"15",name:"code-blocks",class:"font-semibold"})])],2),I,e("li",{class:a(["step__item",s.isActive(s.$page.props.currentRouteName,"NextLaravelUpdater::welcome")])},[e("div",M,[o(t,{h:"15",w:"15",name:"satified",class:"font-semibold"})])],2),j]),e("div",z,[s.$page.props.message?(r(),c("p",T,[e("strong",null,d(s.$t(s.$page.props.message.message)),1)])):N("",!0),f(s.$slots,"container")])])])}var W=$(b,[["render",q]]);export{W as U};
