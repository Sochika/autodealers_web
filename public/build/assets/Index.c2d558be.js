import{d as n,Z as l,z as r,o as p,c as u,b as e,w as c,F as d,r as o}from"./app.df1b8390.js";import{d as _}from"./PsLayout.f3d182a2.js";import{P as b}from"./PsBreadcrumb2.51f0c9ee.js";import{P as f}from"./PsDataTable.5103b98e.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.aabd8ae0.js";import"./Icons.70fae9c4.js";import"./PsLabel.220aebc7.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsButton.27aa76f7.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsInput.a956c4eb.js";import"./PsLabelCaption.ee5fb266.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsTableSearch.38c44761.js";import"./moment.9709ab41.js";import"./ps_constants.deaae373.js";const h=n({name:"Index",components:{Head:l,PsBreadcrumb2:b,PsDataTable:f},layout:_,props:["favourites"],setup(){return{columns:[{label:"Product Name",field:"item_id",relation:"item",type:"String",relationField:"title"},{label:r("user_name_label"),field:"user_id",relation:"user",type:"String",relationField:"name"}]}},computed:{breadcrumb(){return[{label:r("core__be_dashboard_label"),url:route("admin.index")},{label:r("favourite_module"),color:"text-primary-500"}]}}});function v(t,P,g,x,$,w){const a=o("Head"),m=o("ps-breadcrumb-2"),i=o("ps-data-table"),s=o("ps-layout");return p(),u(d,null,[e(a,{title:t.$t("fvourite_module")},null,8,["title"]),e(s,null,{default:c(()=>[e(m,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e(i,{rows:this.favourites,columns:t.columns,searchRightHide:!0},null,8,["rows","columns"])]),_:1})],64)}var W=y(h,[["render",v]]);export{W as default};
