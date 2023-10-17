import{d as P,i as y,B as C,R as B,r as i,o as l,f as k,w as r,a as s,b as n,p as h,t as u,h as L,c as m,q as M,g as f,F as S}from"./app.js";import{P as E}from"./PsModal.js";import{P as F}from"./PsLabel.js";import{P as N}from"./PsButton.js";import{P as V}from"./PsToggle.js";import{P as j}from"./PsIcon.js";import{P as z}from"./PsInput.js";import{P as T}from"./PsLoading.js";import{_ as U}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./toggle.js";import"./Icons.js";const D=P({name:"LanguageEditModal",components:{PsModal:E,PsLabel:F,PsButton:N,PsToggle:V,PsIcon:j,PsInput:z,PsLoading:T},setup(){const e=y(),t=C({data:{}}),c=y(!1),_=y(!1);let d=B({key:"",values:[]});function w(){e.value.toggle(!1)}function p(a){d.key=a,axios.post(route("language_string.getLanguageString",d)).then(b=>{t.data=b.data,e.value.toggle(!0)}).catch(b=>{})}function g(){for(let a=0;a<t.data.length;a++)d.values.push({value:t.data[a].value,id:t.data[a].id,language_id:t.data[a].language.id});this.$inertia.post(route("language_string.updateLanguageStrings"),d,{forceFormData:!0,onBefore:()=>{c.value=!0},onSuccess:()=>{c.value=!1,_.value=!0,setTimeout(()=>{_.value=!1,e.value.toggle(!1),window.location.reload()},1e3)},onError:()=>{c.value=!1}})}function v(){e.value.toggle(!1)}return{loading:c,success:_,psmodal:e,openModal:p,form:d,languageStrings:t,handleCancel:w,handleSubmit:g,closeModal:v}}}),I={class:"px-2 w-full flex flex-row justify-between"},q={class:"w-full flex flex-col mt-4 mb-4"},H={class:"px-2 mt-6"},O={class:"w=full after:flex flex-col items-start justify-start space-y-6"},R=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),W={key:0},A=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),G={class:"flex flex-row justify-end mb-2.5"},J={key:2,class:"transition-all duration-300"},K={key:3,class:""};function Q(e,t,c,_,d,w){const p=i("ps-label"),g=i("ps-icon"),v=i("ps-input"),a=i("ps-button"),b=i("ps-loading"),x=i("ps-modal");return l(),k(x,{ref:"psmodal",maxWidth:"560px",bodyHeight:"max-h-full",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-50 h-56 bg-white"},{title:r(()=>[s("div",I,[n(p,{class:"text-lg font-semibold"},{default:r(()=>[h(u(e.$t("core__be_language_string_label")),1)]),_:1}),n(g,{onClick:t[0]||(t[0]=o=>e.closeModal()),name:"cross",class:"me-1 font-semibold",theme:"text-secondary-400"})])]),body:r(()=>[s("div",q,[s("div",H,[s("form",{onSubmit:t[3]||(t[3]=L(o=>e.handleSubmit(),["prevent"]))},[s("div",O,[s("div",null,[n(p,null,{default:r(()=>[h(u(e.$t("core__be_key_label")),1),R]),_:1}),n(v,{type:"text",disabled:!0,value:e.form.key,"onUpdate:value":t[1]||(t[1]=o=>e.form.key=o),placeholder:e.$t("core__be_key_placeholder")},null,8,["value","placeholder"])]),(l(!0),m(S,null,M(e.languageStrings.data,o=>(l(),m("div",{key:o.id},[o.language!=null?(l(),m("div",W,[n(p,{class:"text-base mb-2"},{default:r(()=>[h(u(o.language.name),1),A]),_:2},1024)])):f("",!0),n(v,{type:"text",value:o.value,"onUpdate:value":$=>o.value=$,placeholder:e.$t("core__be_value_placeholder")},null,8,["value","onUpdate:value","placeholder"])]))),128)),s("div",G,[n(a,{onClick:t[2]||(t[2]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[h(u(e.$t("core__be_btn_cancel")),1)]),_:1}),n(a,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(l(),k(b,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(l(),k(g,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(l(),m("span",J,u(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(l(),m("span",K,u(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1},512)}var ie=U(D,[["render",Q]]);export{ie as default};
