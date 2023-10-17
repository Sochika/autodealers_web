import{d as Z,H as F,i as f,R as X,J as C,r as y,Q as x,o as t,c as l,b as r,w as a,a as d,p as i,t as n,h as ee,F as c,q as $,g as b,f as B,n as Y,m as g,v as E,s as oe,ak as re}from"./app.js";import{b as se,P as te,a as ae,g as le,d as ne}from"./PsLayout.js";import ie from"./CheckBox3.js";import{P as ue}from"./PsRadioValue.js";import{D as de}from"./DatePicker.js";import{u as pe}from"./Validators.js";import{P as me}from"./PsInput.js";import{P as _e}from"./PsLabel.js";import{P as be}from"./PsButton.js";import{P as ye}from"./PsTextarea.js";import{P as ve}from"./PsBreadcrumb2.js";import{P as ke}from"./PsCard.js";import{P as fe}from"./PsLabelCaption.js";import{P as ge}from"./PsVideoUpload.js";import{P as ce}from"./PsLabelTitle3.js";import{P as $e}from"./PsIcon.js";import{P as he}from"./PsLoading.js";import{P as Ce}from"./PsCheckboxValue.js";import{a as we,P as Pe}from"./PsActionModal.js";import{P as Ee}from"./PsImageUpload.js";import{P as Ue}from"./PsLabelHeader5.js";import{_ as Be}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";import"./PsDraggable.js";import"./PsLabelHeader4.js";const De=Z({name:"Edit",components:{Head:F,CheckBox:ie,DatePicker:de,PsInput:me,PsRadioValue:ue,PsLabel:_e,PsButton:be,PsTextarea:ye,PsLabelHeader6:se,PsDropdown:te,PsDropdownSelect:ae,PsCard:ke,PsBreadcrumb2:ve,PsLabelCaption:fe,PsImageUpload:Ee,PsIcon:$e,PsLoading:he,PsCheckboxValue:Ce,PsActionModal:we,PsImageIconModal:Pe,PsDangerDialog:le,PsVideoUpload:ge,PsLabelTitle3:ce,PsLabelHeader5:Ue},layout:ne,props:["errors","coreFieldFilterSettings","roles","user","customizeHeaders","customizeDetails"],setup(e){const u=f(),q=f(),K=f(),S=f(),T=f(),I=f(),J=f(),Q=f(),m=f();let w=X({id:e.user.id,name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,role_id:e.user.role_id,password:e.user.password,conf_password:e.user.conf_password,user_address:e.user.user_address,user_about_me:e.user.user_about_me,user_cover_photo:"",is_show_email:e.user.is_show_email==1,is_show_phone:e.user.is_show_phone==1,user_relation:{},_method:"put"});const v=f(),V=f(),H=f(),{isEmpty:z,isNum:G,isEmail:L}=pe(),h=f(!1),D=f(!1),M=(_,k,P="")=>{e.errors[_]=k?"":z(_,k,P)},A=(_,k,P="",o="")=>{e.errors[_]=k?L(_,k,o):z(_,k,P)},N=(_,k,P="",o="")=>{e.errors[_]=k?G(_,k,o):z(_,k,P)},R=_=>{let k=_.keyCode?_.keyCode:_.which;(k<48||k>57)&&_.preventDefault()};function O(_){this.$inertia.post(route("user.update",_),w,{forceFormData:!0,onBefore:()=>{h.value=!0},onSuccess:()=>{h.value=!1,D.value=!0,setTimeout(()=>{D.value=!1},2e3)},onError:()=>{h.value=!1}})}function j(_){v.value.openModal(C("conf_modal_label"),C("core__be_replace_img_label"),C("core__be_remove_img_label"),"image","trash","24","24",()=>{V.value.openModal(C("core__be_upload_photo"),"cloudUpload",k=>{let P=X({image:k,_method:"put"});this.$inertia.post(route("image.replace",_),P)})},()=>{H.value.openModal(C("core__be_remove_label"),C("core__be_are_u_sure_remove_photo"),C("core__be_btn_confirm"),C("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",_),{onBefore:()=>{h.value=!0},onSuccess:()=>{h.value=!1,D.value=!0,setTimeout(()=>{D.value=!1},2e3)},onError:()=>{h.value=!1}})},()=>{})})}function W(_){_.mandatory===1&&M(_.name,w.user_relation[_.core_keys_id])}return{validateEmptyInput:M,validateEmailInput:A,validateNumberInput:N,handleCustomFieldError:W,onlyNumber:R,form:w,handleSubmit:O,loading:h,success:D,replaceImageClicked:j,ps_danger_dialog:H,ps_image_icon_modal:V,ps_action_modal:v,name:u,email:q,role_id:T,user_address:K,user_about_me:S,password:Q,conf_password:m,is_show_phone:I,is_show_email:J}},created(){var e;(e=this.customizeHeaders)==null||e.map((u,q)=>{var K,S;(S=(K=this.user)==null?void 0:K.user_relation)==null||S.map(T=>{if(u.core_keys_id===T.core_keys_id){let I=T.value;this.form.user_relation[u.core_keys_id]=I==="1"?!0:I==="0"?!1:I}})})},computed:{breadcrumb(){return[{label:C("core__be_dashboard_label"),url:route("admin.index")},{label:C("user_report_module"),url:route("user_report.index")},{label:C("core__be_user_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("user_report.index"))}}}),Ie={class:"rounded-xl"},ze={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Ke={class:"px-4 pt-6 dark:bg-backgroundDark"},Se={class:"grid w-full sm:w-1/2 gap-6"},Te={key:0,class:"text-red-800 font-medium ms-1"},Ve={key:0,class:"text-red-800 font-medium ms-1"},He={key:0,class:"text-red-800 font-medium ms-1"},Me={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},Le={class:"pt-2 z-30"},Ae={key:0},Ne={key:1},Re=["onClick"],je={key:0,class:"text-red-800 font-medium ms-1"},qe={key:0,class:"text-red-800 font-medium ms-1"},Je={key:0,class:"text-red-800 font-medium ms-1"},Qe=d("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Ge={key:1,class:"flex items-end pt-4"},Oe=["alt"],We={key:0,class:"mb-4"},Xe={class:"text-red-800 font-medium ms-1"},Ye={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},Ze={class:"pt-2 z-30"},Fe={key:0},xe={key:1},eo=["onClick"],oo={key:1,class:"mb-4"},ro={class:"text-red-800 font-medium ms-1"},so={key:2,class:"mb-4"},to={class:"text-red-800 font-medium ms-1"},ao={class:"flex flex-row"},lo={key:3,class:"mb-4"},no={class:"flex flex-row"},io={class:"me-2 flex"},uo=["onUpdate:modelValue","onChange"],po={key:4,class:"mb-4"},mo={class:"text-red-800 font-medium ms-1"},_o={key:5,class:"mb-4"},bo={class:"text-red-800 font-medium ms-1"},yo={key:6,class:"mb-4"},vo={class:"text-red-800 font-medium ms-1"},ko={key:7,class:"mb-4"},fo={class:"text-red-800 font-medium ms-1"},go={class:"flex flex-row"},co={key:8,class:"mb-4"},$o={class:"text-red-800 font-medium ms-1"},ho={key:0,class:"flex items-end pt-4"},Co=["alt"],wo={key:9,class:"mb-4"},Po={class:"text-red-800 font-medium ms-1"},Eo=["onUpdate:modelValue"],Uo={key:10,class:"mb-4"},Bo={class:"text-red-800 font-medium ms-1"},Do={class:"mb-2.5 flex flex-row justify-end"};function Io(e,u,q,K,S,T){const I=y("Head"),J=y("ps-breadcrumb-2"),Q=y("ps-label-header5"),m=y("ps-label"),w=y("ps-input"),v=y("ps-label-caption"),V=y("ps-dropdown-select"),H=y("ps-dropdown"),z=y("ps-textarea"),G=y("ps-label-title-3"),L=y("ps-icon"),h=y("ps-button"),D=y("ps-image-icon-modal"),M=y("ps-action-modal"),A=y("ps-danger-dialog"),N=y("ps-image-upload"),R=y("ps-checkbox-value"),O=y("ps-radio-value"),j=y("date-picker"),W=y("CheckBox"),_=y("ps-card"),k=y("ps-layout"),P=x("lazy");return t(),l(c,null,[r(I,{title:e.$t("core__be_edit_user")},null,8,["title"]),r(k,null,{default:a(()=>[r(J,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(_,{class:"w-full h-auto"},{default:a(()=>[d("div",Ie,[d("div",ze,[r(Q,null,{default:a(()=>[i(n(e.$t("core__be_user_info")),1)]),_:1})]),d("div",Ke,[d("form",{onSubmit:u[13]||(u[13]=ee(o=>e.handleSubmit(e.user.id),["prevent"]))},[d("div",Se,[(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),l("span",Te,"*")):b("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":u[0]||(u[0]=p=>e.form.name=p),placeholder:e.$t(o.placeholder),onKeyup:p=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:p=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.name),1)]),_:1})):b("",!0)]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="email"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),l("span",Ve,"*")):b("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"email",type:"text",value:e.form.email,"onUpdate:value":u[1]||(u[1]=p=>e.form.email=p),placeholder:e.$t(o.placeholder),onKeyup:p=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):"",onBlur:p=>o.mandatory==1?e.validateEmptyInput("email",e.form.email):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.email),1)]),_:1})):b("",!0)]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="role_id"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name)),1),(o.mandatory=1)?(t(),l("span",He,"*")):b("",!0)]),_:2},1024),r(H,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>{var p;return[r(V,{disabled:!0,ref_for:!0,ref:"role",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:e.form.role_id==""?"":(p=e.roles)==null?void 0:p.filter(U=>U.id==e.form.role_id)[0].name,onChange:U=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id),onBlur:U=>o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)},null,8,["placeholder","selectedValue","onChange","onBlur"])]}),list:a(()=>{var p;return[d("div",Me,[d("div",Le,[((p=e.roles)==null?void 0:p.length)==null?(t(),l("div",Ae,[r(m,{class:"p-2 flex",onClick:u[2]||(u[2]=U=>e.route("role.index"))},{default:a(()=>[i(n(e.$t("core__be_add_new_role")),1)]),_:1})])):(t(),l("div",Ne,[(t(!0),l(c,null,$(e.roles,U=>(t(),l("div",{key:U.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:zo=>[e.form.role_id=U.id,o.mandatory=e.validateEmptyInput("role_id",e.form.role_id)]},[r(m,{class:Y(["ms-2",U.id==e.form.role_id?" font-bold":""])},{default:a(()=>[i(n(U.name),1)]),_:2},1032,["class"])],8,Re))),128))]))])])]}),_:2},1024),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.role_id),1)]),_:1})):b("",!0)]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_phone"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),l("span",je,"*")):b("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"user_phone",type:"text",value:e.form.user_phone,"onUpdate:value":u[3]||(u[3]=p=>e.form.user_phone=p),placeholder:e.$t(o.placeholder),onKeyup:p=>o.mandatory==1?e.validateEmptyInput("user_phone",e.form.user_phone):"",onBlur:p=>o.mandatory==1?e.validateEmptyInput("user_phone",e.form.user_phone):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_phone),1)]),_:1})):b("",!0)]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_about_me"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(t(),l("span",qe,"*")):b("",!0)]),_:2},1024),r(w,{disabled:!0,ref_for:!0,ref:"user_about_me",type:"text",value:e.form.user_about_me,"onUpdate:value":u[4]||(u[4]=p=>e.form.user_about_me=p),placeholder:e.$t(o.placeholder),onKeyup:p=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):"",onBlur:p=>o.mandatory==1?e.validateEmptyInput("user_about_me",e.form.user_about_me):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_about_me),1)]),_:1})):b("",!0)]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="user_address"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.label_name))+" ",1),o.mandatory==1?(t(),l("span",Je,"*")):b("",!0)]),_:2},1024),r(z,{disabled:!0,rows:"4",value:e.form.user_address,"onUpdate:value":u[5]||(u[5]=p=>e.form.user_address=p),placeholder:e.$t(o.user_address)},null,8,["value","placeholder"]),o.mandatory==1?(t(),B(v,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_address),1)]),_:1})):b("",!0)]))),128)),d("div",null,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t("core__be_user_cover_photo")),1),Qe]),_:1}),e.user.user_cover_photo?b("",!0):(t(),B(G,{key:0},{default:a(()=>[i(n(e.$t("core__be_recommended_size_400_200")),1)]),_:1})),e.user.user_cover_photo?(t(),l("div",Ge,[g(d("img",{class:"w-96 h-48",alt:e.$t(e.core__be_user_cover_photo)},null,8,Oe),[[P,{src:e.$page.props.uploadUrl+"/"+e.user.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),r(h,{type:"button",disabled:!0,onClick:u[6]||(u[6]=o=>e.replaceImageClicked(e.user.user_cover_photo.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:a(()=>[r(L,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),r(D,{ref:"ps_image_icon_modal"},null,512),r(M,{ref:"ps_action_modal"},null,512),r(A,{ref:"ps_danger_dialog"},null,512)])):(t(),B(N,{key:2,disabled:!0,uploadType:"image",imageFile:e.form.user_cover_photo,"onUpdate:imageFile":u[7]||(u[7]=o=>e.form.user_cover_photo=o)},null,8,["imageFile"])),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.errors.user_cover_photo),1)]),_:1})]),r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t("core__be_show_phone_email")),1)]),_:1}),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_phone"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(R,{disabled:!0,value:e.form.is_show_phone,"onUpdate:value":u[8]||(u[8]=p=>e.form.is_show_phone=p),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(t(!0),l(c,null,$(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="is_show_email"&&o.enable===1&&o.is_delete===0),(o,s)=>(t(),l("div",{key:s},[r(R,{disabled:!0,value:e.form.is_show_email,"onUpdate:value":u[9]||(u[9]=p=>e.form.is_show_email=p),class:"font-normal",title:e.$t(o.placeholder)},null,8,["value","title"])]))),128)),(t(!0),l(c,null,$(e.customizeHeaders,o=>(t(),l("div",{key:o.id},[o.ui_type_id==="uit00001"&&o.enable===1&&o.is_delete===0?(t(),l("div",We,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",Xe,"*",512),[[E,o.mandatory==1]])]),_:2},1024),r(H,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[r(V,{disabled:!0,ref_for:!0,ref:"detail",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:this.customizeDetails.filter(s=>s.id==this.form.user_relation[o.core_keys_id]).length>0?this.customizeDetails.filter(s=>s.id==this.form.user_relation[o.core_keys_id])[0].name:"",onChange:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:a(()=>[d("div",Ye,[d("div",Ze,[e.customizeDetails.filter(s=>s.core_keys_id===o.core_keys_id).length===0?(t(),l("div",Fe,[r(m,{class:"p-2 flex",onClick:u[10]||(u[10]=s=>e.route("currency.index"))},{default:a(()=>[i(n(e.$t("core__be_create_new"))+" "+n(e.$t(o.name)),1)]),_:2},1024)])):(t(),l("div",xe,[(t(!0),l(c,null,$(e.customizeDetails.filter(s=>s.core_keys_id===o.core_keys_id),s=>(t(),l("div",{key:s.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:p=>[e.form.user_relation[o.core_keys_id]=s.id,e.validateEmptyInput("currency_id",e.form.user_relation[o.core_keys_id])]},[r(m,{class:Y(["ms-2",s.id==e.form.user_relation[o.core_keys_id]?" font-bold":""])},{default:a(()=>[i(n(s.name),1)]),_:2},1032,["class"])],8,eo))),128))]))])])]),_:2},1024),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00002"&&o.enable===1&&o.is_delete===0?(t(),l("div",oo,[r(m,null,{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",ro,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(w,{disabled:!0,type:"text",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":s=>e.form.user_relation[o.core_keys_id]=s,onKeyup:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00003"&&o.enable===1&&o.is_delete===0?(t(),l("div",so,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",to,"*",512),[[E,o.mandatory===1]])]),_:2},1024),d("div",ao,[(t(!0),l(c,null,$(e.customizeDetails.filter(s=>s.core_keys_id===o.core_keys_id),s=>(t(),l("div",{class:"me-2",key:s.id},[r(O,{disabled:!0,color:"text-purple-600 border-purple-300",value:e.form.user_relation[o.core_keys_id],"onUpdate:value":p=>e.form.user_relation[o.core_keys_id]=p,title:s.name},null,8,["value","onUpdate:value","title"]),r(m,{for:s.id},{default:a(()=>[i(n(s.attribute),1)]),_:2},1032,["for"])]))),128))]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00004"&&o.enable===1&&o.is_delete===0?(t(),l("div",lo,[d("div",no,[d("div",io,[g(d("input",{disabled:!0,type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":s=>e.form.user_relation[o.core_keys_id]=s,onChange:s=>e.handleCustomFieldError(o)},null,40,uo),[[oe,e.form.user_relation[o.core_keys_id]]]),r(m,{class:"ms-2"},{default:a(()=>[i(n(e.$t(o.name)),1)]),_:2},1024)])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00005"&&o.enable===1&&o.is_delete===0?(t(),l("div",po,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",mo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),d("div",null,[r(j,{disabled:!0,value:e.form.user_relation[o.core_keys_id],"onUpdate:value":s=>e.form.user_relation[o.core_keys_id]=s,onKeyup:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00006"&&o.enable===1&&o.is_delete===0?(t(),l("div",_o,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",bo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(z,{disabled:!0,rows:"4",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":s=>e.form.user_relation[o.core_keys_id]=s,onKeyup:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00007"&&o.enable===1&&o.is_delete===0?(t(),l("div",yo,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",vo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),r(w,{disabled:!0,type:"number",class:"w-full rounded",placeholder:e.$t(o.placeholder),value:e.form.user_relation[o.core_keys_id],"onUpdate:value":s=>e.form.user_relation[o.core_keys_id]=s,onKeyup:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00008"&&o.enable===1&&o.is_delete===0?(t(),l("div",ko,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",fo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),d("div",go,[r(W,{disabled:!0,oldData:e.form.product_relation[o.id],onToParent:e.handleMultiSelect,customizeDetails:e.customizeDetails,customizeHeader:o},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00009"&&o.enable===1&&o.is_delete===0?(t(),l("div",co,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",$o,"*",512),[[E,o.mandatory===1]])]),_:2},1024),e.user.image?(t(),l("div",ho,[g(d("img",{class:"w-96 h-48",alt:e.$t(e.core__be_user_photo)},null,8,Co),[[P,{src:e.$page.props.uploadUrl+"/"+e.user.image.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),r(h,{type:"button",onClick:u[11]||(u[11]=s=>e.replaceImageClicked(e.user.image.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:a(()=>[r(L,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),r(D,{ref_for:!0,ref:"ps_image_icon_modal"},null,512),r(M,{ref_for:!0,ref:"ps_action_modal"},null,512),r(A,{ref_for:!0,ref:"ps_danger_dialog"},null,512)])):(t(),B(N,{key:1,uploadType:"image",imageFile:e.form.user_relation[o.core_keys_id],"onUpdate:imageFile":s=>e.form.user_relation[o.core_keys_id]=s},null,8,["imageFile","onUpdate:imageFile"])),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00010"&&o.enable===1&&o.is_delete===0?(t(),l("div",wo,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",Po,"*",512),[[E,o.mandatory===1]])]),_:2},1024),g(d("input",{type:"time",class:"w-full rounded","onUpdate:modelValue":s=>e.form.user_relation[o.core_keys_id]=s},null,8,Eo),[[re,e.form.user_relation[o.core_keys_id]]]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0),o.ui_type_id==="uit00011"&&o.enable===1&&o.is_delete===0?(t(),l("div",Uo,[r(m,{class:"text-base"},{default:a(()=>[i(n(e.$t(o.name)),1),g(d("span",Bo,"*",512),[[E,o.mandatory===1]])]),_:2},1024),d("div",null,[r(j,{disabled:!0,value:e.form.user_relation[o.core_keys_id],"onUpdate:value":s=>e.form.user_relation[o.core_keys_id]=s,onKeyup:s=>e.handleCustomFieldError(o),onBlur:s=>e.handleCustomFieldError(o),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])]),r(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[i(n(e.user_relation_errors&&e.user_relation_errors[o.core_keys_id]),1)]),_:2},1024)])):b("",!0)]))),128)),d("div",Do,[r(h,{type:"button",onClick:u[12]||(u[12]=o=>e.handleCancel())},{default:a(()=>[i(n(e.$t("core__be_btn_back")),1)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var br=Be(De,[["render",Io]]);export{br as default};
