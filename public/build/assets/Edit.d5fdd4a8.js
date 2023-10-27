import{d as X,Z as Y,i as f,H as Q,z as h,o as s,c as l,b as r,w as a,a as u,q as i,t as n,h as x,F as g,s as C,g as y,f as U,n as W,m as c,v as E,u as F,ad as ee,r as b,E as oe}from"./app.df1b8390.js";import{b as re,P as te,a as se,g as ae,d as le}from"./PsLayout.f3d182a2.js";import ne from"./CheckBox.9aa9bb09.js";import{P as ie}from"./PsRadioValue.b2d15218.js";import{D as de}from"./DatePicker.4d87b72c.js";import{u as ue}from"./Validators.52e283a4.js";import{P as me}from"./PsInput.a956c4eb.js";import{P as pe}from"./PsLabel.220aebc7.js";import{P as _e}from"./PsButton.27aa76f7.js";import{P as ye}from"./PsTextarea.33cd0e73.js";import{P as be}from"./PsBreadcrumb2.51f0c9ee.js";import{P as ve}from"./PsCard.6c5ffdd2.js";import{P as ke}from"./PsLabelCaption.ee5fb266.js";import{P as fe}from"./PsVideoUpload.87f10132.js";import{P as ce}from"./PsLabelTitle3.de17b39e.js";import{P as ge}from"./PsIcon.aabd8ae0.js";import{P as Ce}from"./PsLoading.d7e2b7a9.js";import{P as $e}from"./PsCheckboxValue.70fe3300.js";import{a as he,P as we}from"./PsActionModal.5e51fd2d.js";import{P as Pe}from"./PsImageUpload.52c770ee.js";import{_ as Ee}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./Icons.70fae9c4.js";import"./PsLoadingCircleDialog.72c88d72.js";import"./main.14982862.js";import"./index.edd1d404.js";import"./PsDraggable.788ff570.js";import"./PsLabelHeader4.08737a41.js";const Ue=X({name:"Edit",components:{Head:Y,CheckBox:ne,DatePicker:de,PsInput:me,PsRadioValue:ie,PsLabel:pe,PsButton:_e,PsTextarea:ye,PsLabelHeader6:re,PsDropdown:te,PsDropdownSelect:se,PsCard:ve,PsBreadcrumb2:be,PsLabelCaption:ke,PsImageUpload:Pe,PsIcon:ge,PsLoading:Ce,PsCheckboxValue:$e,PsActionModal:he,PsImageIconModal:we,PsDangerDialog:ae,PsVideoUpload:fe,PsLabelTitle3:ce},layout:le,props:["errors","coreFieldFilterSettings","roles","user","customizeHeaders","customizeDetails"],setup(e){const m=f(),z=f(),D=f(),J=f(),O=f(),N=f(),j=f(),q=f(),_=f();let w=Q({id:e.user.id,name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,role_id:e.roles.find(p=>p.id==e.user.role_id)?e.user.role_id:"",password:e.user.password,conf_password:e.user.conf_password,user_address:e.user.user_address,user_about_me:e.user.user_about_me,user_cover_photo:"",is_show_email:e.user.is_show_email==1,is_show_phone:e.user.is_show_phone==1,user_relation:{},_method:"put"});const v=f(),K=f(),S=f(),{isEmpty:I,isNum:R,isEmail:V}=ue(),$=f(!1),B=f(!1),T=(p,k,P="")=>{e.errors[p]=k?"":I(p,k,P)},H=(p,k,P="",o="")=>{e.errors[p]=k?V(p,k,o):I(p,k,P)},M=(p,k,P="",o="")=>{e.errors[p]=k?R(p,k,o):I(p,k,P)},L=p=>{let k=p.keyCode?p.keyCode:p.which;(k<48||k>57)&&p.preventDefault()};function Z(p){this.$inertia.post(route("user.update",p),w,{forceFormData:!0,onBefore:()=>{$.value=!0},onSuccess:()=>{$.value=!1,B.value=!0,setTimeout(()=>{B.value=!1},2e3)},onError:()=>{$.value=!1}})}function A(p){v.value.openModal(h("conf_modal_label"),h("core__be_replace_img_label"),h("core__be_remove_img_label"),"image","trash","24","24",()=>{K.value.openModal(h("core__be_upload_photo"),"cloudUpload",k=>{let P=Q({image:k,_method:"put"});this.$inertia.post(route("image.replace",p),P)})},()=>{S.value.openModal(h("core__be_remove_label"),h("core__be_are_u_sure_remove_photo"),h("core__be_btn_confirm"),h("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",p),{onBefore:()=>{$.value=!0},onSuccess:()=>{$.value=!1,B.value=!0,setTimeout(()=>{B.value=!1},2e3)},onError:()=>{$.value=!1}})},()=>{})})}function G(p){p.mandatory===1&&T(p.name,w.user_relation[p.core_keys_id])}return{validateEmptyInput:T,validateEmailInput:H,validateNumberInput:M,handleCustomFieldError:G,onlyNumber:L,form:w,handleSubmit:Z,loading:$,success:B,replaceImageClicked:A,ps_danger_dialog:S,ps_image_icon_modal:K,ps_action_modal:v,name:m,email:z,role_id:O,user_address:D,user_about_me:J,password:q,conf_password:_,is_show_phone:N,is_show_email:j}},created(){this.customizeHeaders.map((e,m)=>{this.user.user_relation.map(z=>{if(e.core_keys_id===z.core_keys_id){let D=z.value;this.form.user_relation[e.core_keys_id]=D==="1"?!0:D==="0"?!1:D}})})},computed:{breadcrumb(){return[{label:h("core__be_dashboard_label"),url:route("admin.index")},{label:h("banned_user_module"),url:route("banned_user.index")},{label:h("core__be_banned_user_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("banned_user.index"))}}}),Be={class:"rounded-xl"},De={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Ie={class:"px-4 pt-6 dark:bg-backgroundDark"},ze={class:"grid w-full sm:w-1/2 gap-6"},Ke={key:0,class:"text-red-800 font-medium ms-1"},Se={key:0,class:"text-red-800 font-medium ms-1"},Te={key:0,class:"text-red-800 font-medium ms-1"},Ve={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},He={class:"pt-2 z-30"},Me={key:0},Le={key:1},Ae=["onClick"],Ne={key:0,class:"text-red-800 font-medium ms-1"},je={key:0,class:"text-red-800 font-medium ms-1"},qe={key:0,class:"text-red-800 font-medium ms-1"},Re=u("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Ze={key:1,class:"flex items-end pt-4"},Ge=["alt"],Je={key:0,class:"mb-4"},Oe={class:"text-red-800 font-medium ms-1"},Qe={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},We={class:"pt-2 z-30"},Xe={key:0},Ye={key:1},xe=["onClick"],Fe={key:1,class:"mb-4"},eo={class:"text-red-800 font-medium ms-1"},oo={key:2,class:"mb-4"},ro={class:"text-red-800 font-medium ms-1"},to={class:"flex flex-row"},so={key:3,class:"mb-4"},ao={class:"flex flex-row"},lo={class:"me-2 flex"},no=["onUpdate:modelValue","onChange"],io={key:4,class:"mb-4"},uo={class:"text-red-800 font-medium ms-1"},mo={key:5,class:"mb-4"},po={class:"text-red-800 font-medium ms-1"},_o={key:6,class:"mb-4"},yo={class:"text-red-800 font-medium ms-1"},bo={key:7,class:"mb-4"},vo={class:"text-red-800 font-medium ms-1"},ko={class:"flex flex-row"},fo={key:8,class:"mb-4"},co={class:"text-red-800 font-medium ms-1"},go={key:0,class:"flex items-end pt-4"},Co=["alt"],$o={key:9,class:"mb-4"},ho={class:"text-red-800 font-medium ms-1"},wo=["onUpdate:modelValue"],Po={key:10,class:"mb-4"},Eo={class:"text-red-800 font-medium ms-1"},Uo={class:"mb-2.5 flex flex-row justify-end"};function Bo(e,m,z,D,J,O){const N=b("Head"),j=b("ps-breadcrumb-2"),q=b("ps-label-header-6"),_=b("ps-label"),w=b("ps-input"),v=b("ps-label-caption"),K=b("ps-dropdown-select"),S=b("ps-dropdown"),I=b("ps-textarea"),R=b("ps-label-title-3"),V=b("ps-icon"),$=b("ps-button"),B=b("ps-image-icon-modal"),T=b("ps-action-modal"),H=b("ps-danger-dialog"),M=b("ps-image-upload"),L=b("ps-checkbox-value"),Z=b("ps-radio-value"),A=b("date-picker"),G=b("CheckBox"),p=b("ps-card"),k=b("ps-layout"),P=oe("lazy");return s(),l(g,null,[r(N,{title:e.$t("core__be_banned_user_detail")},null,8,["title"]),r(k,null,{default:a(()=>[r(j,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(p,{class:"w-full h-auto"},{default:a(()=>[u("div",Be,[u("div",De,[r(q,{"ps-label-header-6":"",textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[i(n(e.$t("core__be_user_info")),1)]),_:1})]),u("div",Ie,[u("form",{onSubmit:m[13]||(m[13]=x(o=>e.handleSubmit(e.user.id),["prevent"]))},[u("div",ze,[(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),l("span",Ke,"*")):y("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":m[0]||(m[0]=d=>e.form.name=d),placeholder:e.$t(o.placeholder),onKeyup:d=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:d=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.name),1)]),_:1})):y("",!0)]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="email"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),l("span",Se,"*")):y("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"email",type:"text",value:e.form.email,"onUpdate:value":m[1]||(m[1]=d=>e.form.email=d),placeholder:e.$t(o.placeholder),onKeyup:d=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):"",onBlur:d=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.email),1)]),_:1})):y("",!0)]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="role_id"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name)),1),(o.mandatory=1)?(s(),l("span",Te,"*")):y("",!0)]),_:2},1024),r(S,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[r(K,{disabled:!0,ref_for:!0,ref:"role",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:e.form.role_id==""?"":e.roles.filter(d=>d.id==e.form.role_id)[0].name,onChange:d=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id),onBlur:d=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:a(()=>[u("div",Ve,[u("div",He,[e.roles.length==null?(s(),l("div",Me,[r(_,{class:"p-2 flex",onClick:m[2]||(m[2]=d=>e.route("role.index"))},{default:a(()=>[i(n(e.$t("core__be_add_new_role")),1)]),_:1})])):(s(),l("div",Le,[(s(!0),l(g,null,C(e.roles,d=>(s(),l("div",{key:d.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:Do=>[e.form.role_id=d.id,o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)]},[r(_,{class:W(["ms-2",d.id==e.form.role_id?" font-bold":""])},{default:a(()=>[i(n(d.name),1)]),_:2},1032,["class"])],8,Ae))),128))]))])])]),_:2},1024),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.role_id),1)]),_:1})):y("",!0)]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_phone"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),l("span",Ne,"*")):y("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"user_phone",type:"text",value:e.form.user_phone,"onUpdate:value":m[3]||(m[3]=d=>e.form.user_phone=d),placeholder:e.$t(o.placeholder),onKeyup:d=>o.mandatory==1?e.validateEmptyInput("user_phone",e.form.user_phone):"",onBlur:d=>o.mandatory==1?e.validateEmptyInput("user_phone",e.form.user_phone):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_phone),1)]),_:1})):y("",!0)]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_about_me"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(s(),l("span",je,"*")):y("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"user_about_me",type:"text",value:e.form.user_about_me,"onUpdate:value":m[4]||(m[4]=d=>e.form.user_about_me=d),placeholder:e.$t(o.placeholder),onKeyup:d=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):"",onBlur:d=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_about_me),1)]),_:1})):y("",!0)]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_address"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),o.mandatory==1?(s(),l("span",qe,"*")):y("",!0)]),_:2},1024),r(I,{disabled:!0,rows:"4",value:e.form.user_address,"onUpdate:value":m[5]||(m[5]=d=>e.form.user_address=d),placeholder:e.$t(o.user_address)},null,8,["value","placeholder"]),o.mandatory==1?(s(),U(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_address),1)]),_:1})):y("",!0)]))),128)),u("div",null,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t("core__be_user_cover_photo")),1),Re]),_:1}),e.user.user_cover_photo?y("",!0):(s(),U(R,{key:0},{default:a(()=>[i(n(e.$t("core__be_recommended_size_200_200")),1)]),_:1})),e.user.user_cover_photo?(s(),l("div",Ze,[c(u("img",{class:"w-48 h-48",alt:e.$t(e.core__be_user_cover_photo)},null,8,Ge),[[P,{src:e.$page.props.uploadUrl+"/"+e.user.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),r($,{disabled:!0,type:"button",onClick:m[6]||(m[6]=o=>e.replaceImageClicked(e.user.user_cover_photo.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:a(()=>[r(V,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),r(B,{ref:"ps_image_icon_modal"},null,512),r(T,{ref:"ps_action_modal"},null,512),r(H,{ref:"ps_danger_dialog"},null,512)])):(s(),U(M,{key:2,disabled:!0,class:"w-48",uploadType:"image",imageFile:e.form.user_cover_photo,"onUpdate:imageFile":m[7]||(m[7]=o=>e.form.user_cover_photo=o)},null,8,["imageFile"])),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_cover_photo),1)]),_:1})]),r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t("core__be_show_phone_email")),1)]),_:1}),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_phone"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(L,{disabled:!0,value:e.form.is_show_phone,"onUpdate:value":m[8]||(m[8]=d=>e.form.is_show_phone=d),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(s(!0),l(g,null,C(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_email"&&o.enable===1&&o.is_delete===0),(o,t)=>(s(),l("div",{key:t},[r(L,{disabled:!0,value:e.form.is_show_email,"onUpdate:value":m[9]||(m[9]=d=>e.form.is_show_email=d),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(s(!0),l(g,null,C(e.customizeHeaders,o=>(s(),l("div",{key:o.id},[o.ui_type_id==="uit00001"&&o.enable===1&&o.is_delete===0?(s(),l("div",Je,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",Oe,"*",512),[[E,o.mandatory==1]])]),_:2},1024),r(S,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[r(K,{disabled:!0,ref_for:!0,ref:"detail",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:this.customizeDetails.filter(t=>t.id==this.form.user_relation[o.core_keys_id]).length>0?this.customizeDetails.filter(t=>t.id==this.form.user_relation[o.core_keys_id])[0].name:"",onChange:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:a(()=>[u("div",Qe,[u("div",We,[e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id).length===0?(s(),l("div",Xe,[r(_,{class:"p-2 flex",onClick:m[10]||(m[10]=t=>e.route("currency.index"))},{default:a(()=>[i(n(e.$t("core__be_create_new"))+" "+n(e.$t(o.name)),1)]),_:2},1024)])):(s(),l("div",Ye,[(s(!0),l(g,null,C(e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id),t=>(s(),l("div",{key:t.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:d=>[e.form.user_relation[o.core_keys_id]=t.id,e.validateEmptyInput("currency_id",e.form.user_relation[o.core_keys_id])]},[r(_,{class:W(["ms-2",t.id==e.form.user_relation[o.core_keys_id]?" font-bold":""])},{default:a(()=>[i(n(t.name),1)]),_:2},1032,["class"])],8,xe))),128))]))])])]),_:2},1024),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00002"&&o.enable===1&&o.is_delete===0?(s(),l("div",Fe,[r(_,{textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",eo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(w,{disabled:!0,type:"text",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00003"&&o.enable===1&&o.is_delete===0?(s(),l("div",oo,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",ro,"*",512),[[E,o.mandatory===1]])]),_:2},1024),u("div",to,[(s(!0),l(g,null,C(e.customizeDetails.filter(t=>t.core_keys_id===o.core_keys_id),t=>(s(),l("div",{class:"me-2",key:t.id},[r(Z,{disabled:!0,color:"text-purple-600 border-purple-300",value:e.form.user_relation[o.core_keys_id],"onUpdate:value":d=>e.form.user_relation[o.core_keys_id]=d,title:t.name},null,8,["value","onUpdate:value","title"]),r(_,{for:t.id},{default:a(()=>[i(n(t.attribute),1)]),_:2},1032,["for"])]))),128))]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00004"&&o.enable===1&&o.is_delete===0?(s(),l("div",so,[u("div",ao,[u("div",lo,[c(u("input",{disabled:!0,type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":t=>e.form.user_relation[o.core_keys_id]=t,onChange:t=>e.handleCustomFieldError(o)},null,40,no),[[F,e.form.user_relation[o.core_keys_id]]]),r(_,{class:"ms-2",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1)]),_:2},1024)])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00005"&&o.enable===1&&o.is_delete===0?(s(),l("div",io,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",uo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),u("div",null,[r(A,{disabled:!0,value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00006"&&o.enable===1&&o.is_delete===0?(s(),l("div",mo,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",po,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(I,{disabled:!0,rows:"4",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00007"&&o.enable===1&&o.is_delete===0?(s(),l("div",_o,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",yo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(w,{disabled:!0,type:"number",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00008"&&o.enable===1&&o.is_delete===0?(s(),l("div",bo,[r(_,{textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",vo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),u("div",ko,[r(G,{disabled:!0,oldData:e.form.user_relation[o.core_keys_id],onToParent:e.handleMultiSelect,customizeDetails:e.customizeDetails,customizeHeader:o},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00009"&&o.enable===1&&o.is_delete===0?(s(),l("div",fo,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",co,"*",512),[[E,o.mandatory===1]])]),_:2},1024),e.user.image?(s(),l("div",go,[c(u("img",{class:"w-96 h-48",alt:e.$t(e.core__be_user_photo)},null,8,Co),[[P,{src:e.$page.props.uploadUrl+"/"+e.user.image.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),r($,{type:"button",onClick:m[11]||(m[11]=t=>e.replaceImageClicked(e.user.image.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:a(()=>[r(V,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),r(B,{ref_for:!0,ref:"ps_image_icon_modal"},null,512),r(T,{ref_for:!0,ref:"ps_action_modal"},null,512),r(H,{ref_for:!0,ref:"ps_danger_dialog"},null,512)])):(s(),U(M,{key:1,uploadType:"image",imageFile:e.form.user_relation[o.core_keys_id],"onUpdate:imageFile":t=>e.form.user_relation[o.core_keys_id]=t},null,8,["imageFile","onUpdate:imageFile"])),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00010"&&o.enable===1&&o.is_delete===0?(s(),l("div",$o,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",ho,"*",512),[[E,o.mandatory===1]])]),_:2},1024),c(u("input",{type:"time",class:"w-full rounded","onUpdate:modelValue":t=>e.form.user_relation[o.core_keys_id]=t},null,8,wo),[[ee,e.form.user_relation[o.core_keys_id]]]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0),o.ui_type_id==="uit00011"&&o.enable===1&&o.is_delete===0?(s(),l("div",Po,[r(_,{class:"text-base",textColor:"text-secondary-800 dark:text-secondary-700"},{default:a(()=>[i(n(e.$t(o.name)),1),c(u("span",Eo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),u("div",null,[r(A,{disabled:!0,value:e.form.user_relation[o.core_keys_id],"onUpdate:value":t=>e.form.user_relation[o.core_keys_id]=t,onKeyup:t=>e.handleCustomFieldError(o),onBlur:t=>e.handleCustomFieldError(o),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):y("",!0)]))),128)),u("div",Uo,[r($,{type:"button",onClick:m[12]||(m[12]=o=>e.handleCancel())},{default:a(()=>[i(n(e.$t("core__be_btn_back")),1)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var _r=Ee(Ue,[["render",Bo]]);export{_r as default};
