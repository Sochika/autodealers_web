import{d as y,p as P,H as C,o as x,f as E,w as s,a as i,b as o,q as a,t as m,h as $,r as n}from"./app.df1b8390.js";import{d as w}from"./PsLayout.f3d182a2.js";import{u as g}from"./Validators.52e283a4.js";import{P as k}from"./PsInput.a956c4eb.js";import{P as z}from"./PsLabel.220aebc7.js";import{P as L}from"./PsButton.27aa76f7.js";import{P as D}from"./PsTextarea.33cd0e73.js";import{P as B}from"./PsLabelHeader4.08737a41.js";import{P as I}from"./PsLabelCaption.ee5fb266.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.aabd8ae0.js";import"./Icons.70fae9c4.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./PsLoadingCircleDialog.72c88d72.js";const N=y({name:"CustomizationDetailCreate",components:{Link:P,PsInput:k,PsLabel:z,PsButton:L,PsTextarea:D,PsLabelHeader4:B,PsLabelCaption:I},layout:w,props:["errors","custom_field_header","custom_field_detail"],data(){return{form:C({attribute:this.custom_field_detail.attribute,custom_field_header_id:this.custom_field_header.id,_method:"put"})}},setup(t){const{isEmpty:e}=g();return{validateEmptyInput:(d,l,u="")=>{t.errors[d]=l?"":e(d,l,u)}}},methods:{handleSubmit(t){this.$inertia.put(route("shop.customizationDetail.update",[this.custom_field_header,t]),this.form)}}}),H={class:"py-6 px-4"},T={class:"border rounded px-4 py-3 shadow"},U=i("h4",{class:"text-xl font-semibold"},"Edit Customization Detail",-1),V=i("hr",{class:"mt-3 pb-3"},null,-1),q={class:"mb-4"},K=a("*"),M=a("*"),j=a(" Customize Detail Name "),A={class:"mt-6"},F=a("Update");function G(t,e,f,d,l,u){const p=n("ps-label"),_=n("ps-input"),c=n("ps-label-caption"),b=n("ps-button"),h=n("Link"),v=n("ps-layout");return x(),E(v,null,{default:s(()=>[i("div",H,[i("div",T,[U,V,i("p",q,[o(p,{class:"text-red-500 font-semibold text-xl"},{default:s(()=>[K]),_:1}),a(" Selected Customize Header Name : "+m(t.custom_field_header.name),1)]),i("form",{onSubmit:e[4]||(e[4]=$(r=>t.handleSubmit(this.custom_field_detail.id),["prevent"]))},[o(p,{class:"block"},{default:s(()=>[o(p,{class:"text-red-500 font-semibold text-xl"},{default:s(()=>[M]),_:1}),j]),_:1}),o(_,{type:"hidden",class:"w-60 rounded",value:t.form.custom_field_header_id,"onUpdate:value":e[0]||(e[0]=r=>t.form.custom_field_header_id=r),placeholder:"Please Enter title"},null,8,["value"]),o(_,{type:"text",class:"w-60 rounded",value:t.form.attribute,"onUpdate:value":e[1]||(e[1]=r=>t.form.attribute=r),placeholder:"Please Enter title",onKeyup:e[2]||(e[2]=r=>t.validateEmptyInput("attribute",t.form.attribute)),onBlur:e[3]||(e[3]=r=>t.validateEmptyInput("attribute",t.form.attribute))},null,8,["value"]),o(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[a(m(t.errors.attribute),1)]),_:1}),i("div",A,[o(b,{class:"me-2 bg-indigo-500 text-white px-4 py-2 rounded"},{default:s(()=>[F]),_:1}),o(h,{href:t.route("shop.customization"),class:"bg-white border border-indigo-400 px-4 py-2 rounded hover:bg-indigo-600"},{default:s(()=>[a(m(t.$t("core__be_btn_cancel")),1)]),_:1},8,["href"])])],32)])])]),_:1})}var bt=S(N,[["render",G]]);export{bt as default};
