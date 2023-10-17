import{d as H,H as V,R as B,i as b,J as k,r as s,o as m,c as h,b as a,w as u,a as o,p as i,t as r,h as x,f as C,g as f,F}from"./app.js";import{b as D,d as K}from"./PsLayout.js";import{P as z}from"./PsBreadcrumb2.js";import{u as T}from"./Validators.js";import{P as U}from"./PsInput.js";import{P as j}from"./PsLabel.js";import{P as J}from"./PsButton.js";import{P as M}from"./PsCard.js";import{P as N}from"./PsLoading.js";import{P as R}from"./PsIcon.js";import{P as q}from"./PsLabelCaption.js";import{_ as A}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsBannerIcon.js";import"./PsIcon1.js";import"./Icons.js";import"./PsLoadingCircleDialog.js";const G=H({name:"Edit",components:{Head:V,PsInput:U,PsLabel:j,PsButton:J,PsLabelHeader6:D,PsCard:M,PsLoading:N,PsIcon:R,PsBreadcrumb2:z,PsLabelCaption:q},layout:K,props:["errors","language_string","language"],data(){return{form:B({key:this.language_string.key,value:this.language_string.value,language_id:this.language.id,_method:"put"})}},setup(e){const t=b(!1),p=b(!1),g=b(),_=b(),{isEmpty:$}=T(),v=(n,d)=>{e.errors[n]=d?"":$(n,d),n=="key"&&(g.value.isError=!!Boolean(e.errors.key)),n=="value"&&(_.value.isError=!!Boolean(e.errors.value))};let c=B({key:e.language_string.key,value:e.language_string.value,language_id:e.language.id,id:e.language_string.id,_method:"put"});function y(n){this.$inertia.post(route("language_string.update",[e.language,n]),c,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,p.value=!0,setTimeout(()=>{p.value=!1,window.location.reload()},2e3)},onError:()=>{t.value=!1,g.value.isError=!!Boolean(e.errors.key),_.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:v,handleSubmit:y,loading:t,success:p,value:_,key:g,form:c}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("language_module"),url:route("language.index")},{label:k("language_string_module"),url:route("language_string.index",this.language.id)},{label:"Edit Language String",color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("language_string.index",this.language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},W={class:"px-4 pt-6 dark:bg-backgroundDark"},X={class:"grid w-1/2 gap-6"},Y={class:"text-primary-500"},Z=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=o("span",{class:"text-red-800 font-medium ms-1"},"*",-1),te={class:"flex flex-row justify-end mb-2.5"},ae={key:2,class:"transition-all duration-300"},oe={key:3,class:""};function se(e,t,p,g,_,$){const v=s("Head"),c=s("ps-breadcrumb-2"),y=s("ps-label-header-6"),n=s("ps-label"),d=s("ps-input"),P=s("ps-label-caption"),E=s("ps-button"),w=s("ps-loading"),S=s("ps-icon"),I=s("ps-card"),L=s("ps-layout");return m(),h(F,null,[a(v,{title:e.$t("edit_language_string")},null,8,["title"]),a(L,null,{default:u(()=>[a(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(I,{class:"w-full h-auto"},{default:u(()=>[o("div",O,[o("div",Q,[a(y,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[i(r(e.$t("edit_language_string")),1)]),_:1})]),o("div",W,[o("form",{onSubmit:t[7]||(t[7]=x(l=>e.handleSubmit(this.language_string.id),["prevent"]))},[o("div",X,[o("div",null,[i(r(e.$t("core__be_selected_language"))+" : ",1),o("span",Y,r(e.language.name),1)]),o("div",null,[a(n,{class:"text-base mb-1"},{default:u(()=>[i(r(e.$t("core__be_key_label")),1),Z]),_:1}),a(d,{disabled:!0,type:"text",value:e.form.key,"onUpdate:value":t[0]||(t[0]=l=>e.form.key=l),placeholder:"Key",onKeyup:t[1]||(t[1]=l=>e.validateEmptyInput("key",e.form.key)),onBlur:t[2]||(t[2]=l=>e.validateEmptyInput("key",e.form.key))},null,8,["value"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[i(r(e.errors.key),1)]),_:1})]),o("div",null,[a(n,{class:"text-base mb-1"},{default:u(()=>[i(r(e.$t("core__be_value_label")),1),ee]),_:1}),a(d,{type:"text",value:e.form.value,"onUpdate:value":t[3]||(t[3]=l=>e.form.value=l),placeholder:"Value",onKeyup:t[4]||(t[4]=l=>e.validateEmptyInput("value",e.form.value)),onBlur:t[5]||(t[5]=l=>e.validateEmptyInput("value",e.form.value))},null,8,["value"]),a(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[i(r(e.errors.value),1)]),_:1})]),o("div",te,[a(E,{onClick:t[6]||(t[6]=l=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[i(r(e.$t("core__be_btn_cancel")),1)]),_:1}),a(E,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(m(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(m(),C(S,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(m(),h("span",ae,r(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(m(),h("span",oe,r(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ie=A(G,[["render",se]]);export{Ie as default};
