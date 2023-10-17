import{d as j,H as E,R as z,i as V,B as N,J as A,r as i,o,c as r,b as a,w as l,a as d,p,t as u,h as K,F as y,q as v,g as _,f as k,m as D,s as U}from"./app.js";import{b as R,P as q,a as J,g as O,d as G}from"./PsLayout.js";import Q from"./CheckBox3.js";import{P as W}from"./PsRadioValue.js";import{D as X}from"./DatePicker.js";import{P as Y}from"./PsInput.js";import{P as Z}from"./PsLabel.js";import{P as F}from"./PsButton.js";import{P as ee}from"./PsTextarea.js";import{P as te}from"./PsBreadcrumb2.js";import{P as se}from"./PsCard.js";import{P as oe}from"./PsLabelCaption.js";import{P as ae}from"./PsVideoUpload.js";import{P as ne}from"./PsLabelTitle3.js";import{P as re}from"./PsIcon.js";import{P as le}from"./PsLoading.js";import{P as ie}from"./PsCheckboxValue.js";import{a as de,P as me}from"./PsActionModal.js";import{P as ue}from"./PsImageUpload.js";import{P as pe}from"./PsToggle.js";import{_ as ce}from"./plugin-vue_export-helper.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";import"./PsDraggable.js";import"./PsLabelHeader4.js";import"./toggle.js";const fe=j({name:"Edit",components:{Head:E,PsToggle:pe,CheckBox:Q,DatePicker:X,PsInput:Y,PsRadioValue:W,PsLabel:Z,PsButton:F,PsTextarea:ee,PsLabelHeader6:R,PsDropdown:q,PsDropdownSelect:J,PsCard:se,PsBreadcrumb2:te,PsLabelCaption:oe,PsImageUpload:ue,PsIcon:re,PsLoading:le,PsCheckboxValue:ie,PsActionModal:de,PsImageIconModal:me,PsDangerDialog:O,PsVideoUpload:ae,PsLabelTitle3:ne},layout:G,props:["errors","coreFieldFilterSettings","modules","customizeHeaders","customizeDetails","permissions"],setup(e){let s=z({name:"",description:"",can_access_admin_panel:0,permissions:[]});const h=V(!1),P=V(!1);let b=N([]);for(let n=0;n<e.modules.length;n++)b[e.modules[n].id]=[];let w=V(!1);function $(n){s.permissions[n]=b[n].toString()}function C(){this.$inertia.get(route("user_role.index"))}function S(){this.$inertia.post(route("user_role.store"),s,{forceFormData:!0,onBefore:()=>{h.value=!0},onSuccess:()=>{h.value=!1,P.value=!0,setTimeout(()=>{P.value=!1},2e3)},onError:()=>{h.value=!1}})}function c(){for(let n=0;n<e.modules.length;n++){for(let g=0;g<e.permissions.length;g++)w.value?b[e.modules[n].id][g]=e.permissions[g].id:b[e.modules[n].id]=[];s.permissions[e.modules[n].id]=b[e.modules[n].id].toString()}}function x(){s.can_access_admin_panel=!s.can_access_admin_panel}return{handleUserMultiSelect:$,handleAdminPanelAccess:x,handleSubmit:S,toogleSelectAll:c,form:s,booleanPermission:b,selectAll:w,handleCancel:C,loading:h,success:P}},computed:{breadcrumb(){return[{label:A("core__be_dashboard_label"),url:route("admin.index")},{label:A("user_role_module"),url:route("user_role.index")},{label:A("core__be_add_user_role"),color:"text-primary-500"}]}}}),_e={class:"rounded-xl"},be={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ge={class:"px-4 pt-6 dark:bg-backgroundDark"},ye={class:"grid w-full sm:w-1/2 gap-6"},he={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},Pe={key:0,class:"text-red-800 font-medium ms-1"},ke={class:"px-4 pb-6 flex flex-row justify-between items-center"},we=p("Allow Modules"),$e={class:"flex flex-row items-center"},Ce=p("Select all "),Se={class:"flex flex-row items-center"},xe=["onUpdate:modelValue","onChange","id","value"],Ve={class:"flex flex-row justify-end mb-2.5"},Ae={key:2,class:"transition-all duration-300"},Be={key:3,class:""};function De(e,s,h,P,b,w){const $=i("Head"),C=i("ps-breadcrumb-2"),S=i("ps-label-header-6"),c=i("ps-label"),x=i("ps-input"),n=i("ps-label-caption"),g=i("ps-textarea"),I=i("ps-toggle"),B=i("ps-button"),L=i("ps-loading"),M=i("ps-icon"),H=i("ps-card"),T=i("ps-layout");return o(),r(y,null,[a($,{title:e.$t("core__be_add_user_role")},null,8,["title"]),a(T,null,{default:l(()=>[a(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(H,{class:"w-full h-auto"},{default:l(()=>[d("div",_e,[d("div",be,[a(S,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[p(u(e.$t("core__be_user_role_info")),1)]),_:1})]),d("div",ge,[d("form",{onSubmit:s[6]||(s[6]=K((...t)=>e.handleSubmit&&e.handleSubmit(...t),["prevent"]))},[d("div",ye,[(o(!0),r(y,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="name"&&t.enable===1&&t.is_delete===0),(t,m)=>(o(),r("div",{key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),r("span",he,"*")):_("",!0)]),_:2},1024),a(x,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":s[0]||(s[0]=f=>e.form.name=f),placeholder:e.$t(t.placeholder),onKeyup:f=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:f=>t.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(n,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(u(e.errors.name),1)]),_:1})):_("",!0)]))),128)),(o(!0),r(y,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="description"&&t.enable===1&&t.is_delete===0),(t,m)=>(o(),r("div",{key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(o(),r("span",ve,"*")):_("",!0)]),_:2},1024),a(g,{rows:"4",value:e.form.description,"onUpdate:value":s[1]||(s[1]=f=>e.form.description=f),placeholder:e.$t(t.description)},null,8,["value","placeholder"]),t.mandatory==1?(o(),k(n,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(u(e.errors.description),1)]),_:1})):_("",!0)]))),128)),(o(!0),r(y,null,v(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="can_access_admin_panel"&&t.enable===1&&t.is_delete===0),(t,m)=>(o(),r("div",{class:"flex justify-between items-center",key:m},[a(c,{class:"text-base"},{default:l(()=>[p(u(e.$t(t.label_name))+" ",1),t.mandatory==1?(o(),r("span",Pe,"*")):_("",!0)]),_:2},1024),a(I,{onClick:s[2]||(s[2]=f=>e.handleAdminPanelAccess()),selectedValue:e.form.can_access_admin_panel==1,toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["selectedValue"])]))),128)),d("div",ke,[a(c,{class:"text-base font-medium"},{default:l(()=>[we]),_:1}),d("div",$e,[D(d("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>e.selectAll=t),onChange:s[4]||(s[4]=t=>e.toogleSelectAll()),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,544),[[U,e.selectAll]]),a(c,{class:"text-base font-light"},{default:l(()=>[Ce]),_:1})])]),d("div",null,[(o(!0),r(y,null,v(e.modules,t=>(o(),r("div",{class:"px-4 pb-5 flex flex-row justify-between items-center",key:t.id},[a(c,{class:"text-sm"},{default:l(()=>[p(u(e.$t(t.lang_key)),1)]),_:2},1024),d("div",Se,[(o(!0),r(y,null,v(e.permissions,m=>(o(),r("div",{class:"flex flex-row me-2 items-center",key:m.id},[D(d("input",{"onUpdate:modelValue":f=>e.booleanPermission[t.id]=f,onChange:f=>e.handleUserMultiSelect(t.id),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:m.id,value:m.id},null,40,xe),[[U,e.booleanPermission[t.id]]]),a(c,{class:"text-base font-light",for:m.id},{default:l(()=>[p(u(m.title),1)]),_:2},1032,["for"])]))),128))])]))),128))]),d("div",Ve,[a(B,{onClick:s[5]||(s[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[p(u(e.$t("core__be_btn_cancel")),1)]),_:1}),a(B,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(o(),k(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(o(),k(M,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(o(),r("span",Ae,u(e.$t("core__be_btn_saved")),1)):_("",!0),!e.loading&&!e.success?(o(),r("span",Be,u(e.$t("core__be_btn_save")),1)):_("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var pt=ce(fe,[["render",De]]);export{pt as default};
