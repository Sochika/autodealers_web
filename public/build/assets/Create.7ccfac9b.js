import{g as M,d as V}from"./PsLayout.f3d182a2.js";import{d as j,Z as q,p as A,i as h,H as Z,z,o as a,c as n,b as o,w as r,a as $,f as b,q as i,t as m,g as p,F as g,s as v,r as d}from"./app.df1b8390.js";import G from"./FlashMessage.175118f7.js";import{u as J}from"./Validators.52e283a4.js";import{P as O}from"./PsInput.a956c4eb.js";import{P as Q}from"./PsLabel.220aebc7.js";import{P as R}from"./PsButton.27aa76f7.js";import{P as W}from"./PsTextarea.33cd0e73.js";import{P as X}from"./PsCheckboxValue.70fe3300.js";import{P as Y}from"./PsLabelHeader4.08737a41.js";import{P as x}from"./PsLabelCaption.ee5fb266.js";import{P as F}from"./PsIcon.aabd8ae0.js";import{P as ee}from"./PsLoading.d7e2b7a9.js";import{P as te}from"./PsBreadcrumb2.51f0c9ee.js";import{a as ae,P as le}from"./PsActionModal.5e51fd2d.js";import{P as ne}from"./PsImageUpload.52c770ee.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./PsDraggable.788ff570.js";import"./PsLabelTitle3.de17b39e.js";const re=j({name:"Edit",components:{FlashMessage:G,Head:q,PsInput:O,PsLabel:Q,PsButton:R,PsTextarea:W,PsCheckboxValue:X,PsLabelHeader4:Y,PsLabelCaption:x,PsIcon:F,PsLoading:ee,PsBreadcrumb2:te,Link:A,PsActionModal:ae,PsImageIconModal:le,PsDangerDialog:M,PsImageUpload:ne},layout:V,props:["errors","status","coreFieldFilterSettings"],setup(e){const s=h(!1),C=h(!1),D=h(),L=h(),T=h();h();let I=h(!1),P=Z({title:"",gps_link:"",ios_link:"",description:"",yt_link:"",fb_link:"",tw_link:"",logo:"",cover:""});const{isEmail:S,isEmpty:B}=J(),y=(f,_,w="")=>{e.errors[f]=_?"":B(f,_,w)},c=(f,_,w="",U="")=>{e.errors[f]=_?S(f,_,U):B(f,_,w)},k=f=>{let _=f.keyCode?f.keyCode:f.which;(_<48||_>57)&&f.preventDefault()};function K(){this.$inertia.get(route("admin.index"))}function E(){this.$inertia.post(route("landing_page.store"),P,{forceFormData:!0,onBefore:()=>{s.value=!0},onSuccess:()=>{s.value=!1,C.value=!0,setTimeout(()=>{C.value=!1},2e3)},onError:()=>{s.value=!1}})}return{validateEmailInput:c,handleCancel:K,onlyNumber:k,form:P,handleSubmit:E,loading:s,success:C,ps_image_icon_modal:T,ps_action_modal:L,visible:I,validateEmptyInput:y,email:D}},computed:{breadcrumb(){return[{label:z("core__be_dashboard_label"),url:route("admin.index")},{label:z("landing_page_module_entry"),color:"text-primary-500"}]}}}),se={class:""},ie={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},me={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},pe={class:"w-full sm:w-1/2"},ue={key:0},de={key:0,class:"text-red-800 font-medium ms-1"},fe={key:0,class:"text-red-800 font-medium ms-1"},ye={key:0,class:"text-red-800 font-medium ms-1"},_e={key:0,class:"text-red-800 font-medium ms-1"},be={key:0,class:"text-red-800 font-medium ms-1"},ke={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ce={key:0,class:"text-red-800 font-medium ms-1"},he={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function $e(e,s,C,D,L,T){const I=d("Head"),P=d("ps-breadcrumb-2"),S=d("ps-banner-icon"),B=d("ps-label-header-6"),y=d("ps-label"),c=d("ps-input"),k=d("ps-label-caption"),K=d("ps-textarea"),E=d("ps-label-title-3"),f=d("ps-image-upload"),_=d("ps-button"),w=d("ps-loading"),U=d("ps-icon"),H=d("ps-card"),N=d("ps-layout");return a(),n(g,null,[o(I,{title:e.$t("landing_page_module_entry")},null,8,["title"]),o(N,null,{default:r(()=>[$("div",se,[o(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(a(),b(S,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[i(m(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),o(H,{class:"w-full h-auto"},{default:r(()=>[$("div",ie,[$("div",me,[o(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[i(m(e.$t("core__be_landing_page_info")),1)]),_:1})]),$("div",null,[$("div",pe,[e.coreFieldFilterSettings?(a(),n("div",ue,[(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="title"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",de,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":s[0]||(s[0]=l=>e.form.title=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.title),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",fe,"*")):p("",!0)]),_:2},1024),o(K,{rows:"4",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":s[1]||(s[1]=l=>e.form.description=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.description),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="gps_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",ye,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"gps_link",type:"text",value:e.form.gps_link,"onUpdate:value":s[2]||(s[2]=l=>e.form.gps_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.gps_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="ios_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",_e,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"ios_link",type:"text",value:e.form.ios_link,"onUpdate:value":s[3]||(s[3]=l=>e.form.ios_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.ios_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="yt_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",be,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"yt_link",type:"text",value:e.form.yt_link,"onUpdate:value":s[4]||(s[4]=l=>e.form.yt_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.yt_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="fb_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),n("span",ke,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"fb_link",type:"text",value:e.form.fb_link,"onUpdate:value":s[5]||(s[5]=l=>e.form.fb_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.fb_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="tw_link"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),n("span",ge,"*")):p("",!0)]),_:2},1024),o(c,{ref_for:!0,ref:"tw_link",type:"text",value:e.form.tw_link,"onUpdate:value":s[6]||(s[6]=l=>e.form.tw_link=l),placeholder:e.$t(t.placeholder),onKeyup:l=>t.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):"",onBlur:l=>t.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.tw_link),1)]),_:1})):p("",!0)]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="landing-icon"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),n("span",ve,"*")):p("",!0)]),_:2},1024),o(E,null,{default:r(()=>[i(m(e.$t("core__be_recommended_size_200_200")),1)]),_:1}),o(f,{class:"w-72",uploadType:"icon",imageFile:e.form.logo,"onUpdate:imageFile":s[7]||(s[7]=l=>e.form.logo=l)},null,8,["imageFile"]),o(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.logo),1)]),_:1})]))),128)),(a(!0),n(g,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="landing-cover"&&t.enable===1&&t.is_delete===0),(t,u)=>(a(),n("div",{class:"px-4 py-3",key:u},[o(y,{class:"text-base flex flex-row"},{default:r(()=>[i(m(e.$t(t.label_name))+" ",1),t.mandatory==1?(a(),n("span",ce,"*")):p("",!0)]),_:2},1024),o(E,null,{default:r(()=>[i(m(e.$t("core__be_recommended_size_400_200")),1)]),_:1}),o(f,{uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":s[8]||(s[8]=l=>e.form.cover=l)},null,8,["imageFile"]),o(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(m(e.errors.cover),1)]),_:1})]))),128)),$("div",he,[o(_,{onClick:s[9]||(s[9]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[i(m(e.$t("core__be_btn_cancel")),1)]),_:1}),o(_,{onClick:s[10]||(s[10]=t=>e.handleSubmit()),class:"transition-all duration-300 min-w-3xs me-4",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(a(),b(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):p("",!0),e.success?(a(),b(U,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):p("",!0),e.success?(a(),b(y,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(m(e.$t("core__be_btn_saved")),1)]),_:1})):p("",!0),!e.loading&&!e.success?(a(),b(y,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[i(m(e.$t("core__be_btn_save")),1)]),_:1})):p("",!0)]),_:1})])])):p("",!0)])])])]),_:1})])]),_:1})],64)}var et=oe(re,[["render",$e]]);export{et as default};
