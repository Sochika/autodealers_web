import{d as T,Z as O,i as L,H as j,z as E,o as r,c as i,b as l,w as s,a as u,q as a,t as d,h as q,F as v,s as g,g as b,f as c,n as M,r as _}from"./app.df1b8390.js";import{P as Z,a as A,d as G}from"./PsLayout.f3d182a2.js";import{u as J}from"./Validators.52e283a4.js";import{P as Q}from"./PsInput.a956c4eb.js";import{P as R}from"./PsLabel.220aebc7.js";import{P as W}from"./PsButton.27aa76f7.js";import{P as X}from"./PsTextarea.33cd0e73.js";import{P as Y}from"./PsLabelHeader4.08737a41.js";import{P as F}from"./PsLabelCaption.ee5fb266.js";import{P as x}from"./PsIcon.aabd8ae0.js";import{P as ee}from"./PsLoading.d7e2b7a9.js";import{P as oe}from"./PsBreadcrumb2.51f0c9ee.js";import{P as te}from"./PsCheckboxValue.70fe3300.js";import{_ as le}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";const se=T({name:"Edit",components:{Head:O,PsInput:Q,PsLabel:R,PsButton:W,PsTextarea:X,PsLabelHeader4:Y,PsLabelCaption:F,PsIcon:x,PsLoading:ee,PsBreadcrumb2:oe,PsDropdown:Z,PsDropdownSelect:A,PsCheckboxValue:te},layout:G,props:["errors","menu","sub_menu_groups","coreFieldFilterSettings","icons","modules","forSelectedModules"],setup(e){const t=L(!1),k=L(!1);let h=j({module_name:e.menu.module_name,module_desc:e.menu.module_desc,module_lang_key:e.menu.module_lang_key,ordering:e.menu.ordering,module_id:e.menu.module_id,old_module_id:e.menu.module_id,core_sub_menu_group_id:e.sub_menu_groups.find(n=>n.id==e.menu.core_sub_menu_group_id)?e.menu.core_sub_menu_group_id:"",is_show_on_menu:e.menu.is_show_on_menu==1,_method:"put"});const{isEmpty:$,minLength:S}=J(),w=(n,m)=>{e.errors[n]=m?S(n,m,3):$(n,m)},C=(n,m)=>{e.errors[n]=m?"":$(n,m)},P=n=>{let m=n.keyCode?n.keyCode:n.which;(m<48||m>57)&&n.preventDefault()};function p(n){this.$inertia.post(route("menu.update",n),h,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,k.value=!0,setTimeout(()=>{k.value=!1},2e3)},onError:()=>{t.value=!1}})}return{validateModuleNameInput:w,validateEmptyInput:C,onlyNumber:P,form:h,handleSubmit:p,loading:t,success:k}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("module_module"),url:route("menu.index")},{label:E("core_edit_menu"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu.index"))}}}),re={class:"rounded-lg"},ne={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},de={class:"px-4 pt-6 dark:bg-backgroundDark"},ae={class:"grid w-1/2 gap-6"},ue={key:0,class:"text-red-800 font-medium ms-1"},me=u("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ie={class:"rounded-md shadow-xs w-56"},_e={class:"pt-2 z-30"},pe=["onClick"],fe=u("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be={class:"rounded-md shadow-xs w-56"},ye={class:"pt-2 z-30"},ce=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ke=a("Ordering"),he=a("Status"),$e={class:"mb-2.5 flex flex-row justify-end"},we={key:2,class:"transition-all duration-300"},Ce={key:3,class:""};function Pe(e,t,k,h,$,S){const w=_("Head"),C=_("ps-breadcrumb-2"),P=_("ps-label-header-6"),p=_("ps-label"),n=_("ps-input"),m=_("ps-label-caption"),I=_("ps-dropdown-select"),B=_("ps-dropdown"),V=_("ps-textarea"),z=_("ps-checkbox-value"),K=_("ps-button"),D=_("ps-loading"),H=_("ps-icon"),U=_("ps-card"),N=_("ps-layout");return r(),i(v,null,[l(w,{title:e.$t("core_edit_menu")},null,8,["title"]),l(N,null,{default:s(()=>[l(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l(U,{class:"w-full h-auto"},{default:s(()=>[u("div",re,[u("div",ne,[l(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[a(d(e.$t("core_menu_onfo")),1)]),_:1})]),u("div",de,[u("form",{onSubmit:t[11]||(t[11]=q(o=>e.handleSubmit(e.menu.id),["prevent"]))},[u("div",ae,[(r(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_name"&&o.enable===1&&o.is_delete===0),(o,y)=>(r(),i("div",{key:y},[l(p,{class:"text-base"},{default:s(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(r(),i("span",ue,"*")):b("",!0)]),_:2},1024),l(n,{ref_for:!0,ref:"module_name",type:"text",value:e.form.module_name,"onUpdate:value":t[0]||(t[0]=f=>e.form.module_name=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.module_name),1)]),_:1})):b("",!0)]))),128)),u("div",null,[l(p,{class:"text-base"},{default:s(()=>[a(d(e.$t("core__be_select_module")),1),me]),_:1}),l(B,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[l(I,{placeholder:e.$t("core__be_select_module"),selectedValue:e.form.module_id==""||e.form.module_id===null?e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title:e.forSelectedModules.filter(o=>o.id==e.form.module_id)[0].title,onChange:t[1]||(t[1]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:s(()=>[u("div",ie,[u("div",_e,[u("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:t[3]||(t[3]=o=>[e.form.module_id=e.menu.module_id,e.validateEmptyInput("module_id",e.form.module_id)])},[e.form.module_id==""||e.form.module_id==e.menu.module_id?(r(),c(p,{key:0,class:"ms-2 font-bold"},{default:s(()=>[a(d(e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title),1)]),_:1})):(r(),c(p,{key:1,class:"ms-2"},{default:s(()=>[a(d(e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title),1)]),_:1}))]),(r(!0),i(v,null,g(e.modules,o=>(r(),i("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[l(p,{class:M(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:s(()=>[a(d(o.title),1)]),_:2},1032,["class"])],8,pe))),128))])])]),_:1}),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.module_id),1)]),_:1})]),u("div",null,[l(p,{class:"text-base"},{default:s(()=>[a(d(e.$t("core__be_select_sub_menu")),1),fe]),_:1}),l(B,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[l(I,{placeholder:e.$t("core__be_select_sub_menu"),selectedValue:e.form.core_sub_menu_group_id==""?"":e.sub_menu_groups.filter(o=>o.id==e.form.core_sub_menu_group_id)[0].sub_menu_desc,onChange:t[4]||(t[4]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)),onBlur:t[5]||(t[5]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id))},null,8,["placeholder","selectedValue"])]),list:s(()=>[u("div",be,[u("div",ye,[(r(!0),i(v,null,g(e.sub_menu_groups,o=>(r(),i("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>[e.form.core_sub_menu_group_id=o.id,e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)]},[l(p,{class:M(["ms-2",o.id==e.form.core_sub_menu_group_id?" font-bold":""])},{default:s(()=>[a(d(o.sub_menu_desc),1)]),_:2},1032,["class"])],8,ce))),128))])])]),_:1}),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.core_sub_menu_group_id),1)]),_:1})]),(r(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_desc"&&o.enable===1&&o.is_delete===0),(o,y)=>(r(),i("div",{key:y},[l(p,{class:"text-base"},{default:s(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(r(),i("span",ve,"*")):b("",!0)]),_:2},1024),l(V,{rows:"4",value:e.form.module_desc,"onUpdate:value":t[6]||(t[6]=f=>e.form.module_desc=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.module_desc),1)]),_:1})):b("",!0)]))),128)),(r(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_lang_key"&&o.enable===1&&o.is_delete===0),(o,y)=>(r(),i("div",{key:y},[l(p,{class:"text-base"},{default:s(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(r(),i("span",ge,"*")):b("",!0)]),_:2},1024),l(n,{ref_for:!0,ref:"module_lang_key",type:"text",value:e.form.module_lang_key,"onUpdate:value":t[7]||(t[7]=f=>e.form.module_lang_key=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.module_lang_key),1)]),_:1})):b("",!0)]))),128)),u("div",null,[l(p,{class:"text-base mb-1"},{default:s(()=>[ke]),_:1}),l(n,{type:"text",value:e.form.ordering,"onUpdate:value":t[8]||(t[8]=o=>e.form.ordering=o),placeholder:"Ordering",onKeypress:e.onlyNumber},null,8,["value","onKeypress"]),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(d(e.errors.ordering),1)]),_:1})]),u("div",null,[l(p,{class:"text-base"},{default:s(()=>[he]),_:1}),l(z,{value:e.form.is_show_on_menu,"onUpdate:value":t[9]||(t[9]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:"Publish"},null,8,["value"])]),u("div",$e,[l(K,{onClick:t[10]||(t[10]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[a(d(e.$t("core__be_btn_cancel")),1)]),_:1}),l(K,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(r(),c(D,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(r(),c(H,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(r(),i("span",we,d(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(r(),i("span",Ce,d(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Fe=le(se,[["render",Pe]]);export{Fe as default};
