import{d as S,H as z,i as w,B as E,J as m,r,Q as M,o as p,c as u,b as o,w as l,a,p as i,t as d,f as j,g as V,F as I,q as F,m as v,s as H,O as x,R}from"./app.js";import{g as q,b as J,h as O,c as Q,e as W,d as G}from"./PsLayout.js";import{P as K}from"./PsLabel.js";import{P as X}from"./PsButton.js";import{P as Y}from"./PsAlert.js";import{P as Z}from"./PsBreadcrumb2.js";import{P as ee}from"./PsIcon.js";import{P as te}from"./PsBannerIcon.js";import{P as oe}from"./PsActivity.js";import{h as se}from"./moment.js";import{_ as ae}from"./plugin-vue_export-helper.js";import"./PsToggle.js";import"./toggle.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsSuccessDialog.js";import"./PsInputWithRightIcon.js";import"./PsLoading.js";import"./PsInput.js";import"./PsLabelCaption.js";import"./PsLoadingCircleDialog.js";import"./PsIcon1.js";import"./Icons.js";const le=S({name:"Index",components:{Head:z,PsLabel:K,PsButton:X,PsAlert:Y,PsBreadcrumb2:Z,PsDangerDialog:q,PsIcon:ee,PsBannerIcon:te,PsLabelHeader6:J,PsActivity:oe,PsWarningDialog:O,PsLabelCaption3:Q,PsTextButton:W},layout:G,data(){return{moment:se}},props:["can","contacts","checkPermission","defaultProfileImg"],setup(e){const n=w(),b=w(!1);let f=E([]);for(let s=0;s<e.contacts.length;s++)f[e.contacts[s].id]=!1;const k=w();let P=w(!1);function C(){for(let s=0;s<e.contacts.length;s++)P.value==!1?f[e.contacts[s].id]=!1:f[e.contacts[s].id]=!0}function $(){k.value.openModal(m("core__warning"),m("core__comfirm_to_mark_as_read"),m("core__be_btn_confirm"),m("core__be_btn_cancel"),()=>{x.Inertia.put(route("contact.allasread"))},()=>{})}function D(s){x.Inertia.get(route("contact.edit",s))}function h(){let s=[];for(let c=0;c<e.contacts.length;c++)f[e.contacts[c].id]==!0&&s.push(e.contacts[c].id);let y=R({ids:s});n.value.openModal(m("core__delete"),m("core__comfirm_to_delete_contact_multiple"),m("core__be_btn_confirm"),m("core__be_btn_cancel"),()=>{x.Inertia.delete(route("contact.multiDelete",y)),b.value=!b.value},()=>{})}return{clickDelete:h,booleanContacts:f,toogleSelectAll:C,selectAll:P,showDelete:b,goToDetail:D,ps_danger_dialog:n,makeAllRead:$,ps_warning_dialog:k}},methods:{handleDetail(e){this.$inertia.get(route("contact.show",e))}},computed:{breadcrumb(){return[{label:m("core__be_dashboard_label"),url:route("admin.index")},{label:m("contact_us_message_module"),color:"text-primary-500"}]}}}),ne={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 mb-6 rounded-t-xl"},re={key:0},ie={class:"flex justify-end mb-4"},de={class:"flex"},me={class:"flex"},ce={class:"bg-red-400 text-white p-1 rounded-lg"},pe={class:"h-8 w-8 sm:w-12 sm:h-12"},_e={class:"w-full ms-4"},ue={class:"flex justify-between text-sm"},fe={key:1},ge={class:"flex justify-between mb-4"},be={class:"flex flex-row items-center"},he={class:"flex flex-row"},ye=["onUpdate:modelValue"],we={class:"h-8 w-8 sm:w-12 sm:h-12"},ve={class:"w-full ms-4"},ke={class:"flex justify-between text-sm"};function Pe(e,n,b,f,k,P){const C=r("Head"),$=r("ps-breadcrumb-2"),D=r("ps-label-header6"),h=r("ps-icon"),s=r("ps-label"),y=r("ps-text-button"),c=r("ps-label-caption-3"),A=r("ps-activity"),B=r("ps-button"),L=r("ps-danger-dialog"),T=r("ps-warning-dialog"),N=r("ps-layout"),U=M("lazy");return p(),u(I,null,[o(C,{title:e.$t("contact_us_message_module")},null,8,["title"]),o(N,null,{default:l(()=>[o($,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a("div",ne,[o(D,null,{default:l(()=>[i(d(e.$t("core__be_messages")),1)]),_:1})]),e.showDelete?(p(),u("div",fe,[a("div",ge,[a("div",be,[v(a("input",{"onUpdate:modelValue":n[2]||(n[2]=t=>e.selectAll=t),onChange:n[3]||(n[3]=t=>e.toogleSelectAll()),class:"me-2 border-1 border-primary-500 rounded-full",type:"checkbox"},null,544),[[H,e.selectAll]]),o(s,{class:"text-base font-light",textColor:"text-primary-500"},{default:l(()=>[i(d(e.$t("core__be_select_all")),1)]),_:1})]),a("div",he,[o(B,{onClick:n[4]||(n[4]=t=>e.showDelete=!e.showDelete),textSize:"text-sm",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),o(B,{onClick:e.clickDelete,class:"transition-all duration-300 min-w-3xs",colors:"bg-red-500 text-white",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[i(d(e.$t("btn_delete")),1)]),_:1},8,["onClick"])])]),(p(!0),u(I,null,F(e.contacts,t=>(p(),u("div",{key:t.id,class:"cursor-pointer flex flex-row items-center justify-center"},[o(A,{onClick:_=>e.booleanContacts[t.id]=!e.booleanContacts[t.id],theme:t.is_read==0?"bg-primary-50 dark:bg-primary-900":" bg-secondary-50 dark:bg-secondary-900",icon:!1,h:"h-26"},{content:l(()=>{var _;return[v(a("input",{"onUpdate:modelValue":g=>e.booleanContacts[t.id]=g,class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox"},null,8,ye),[[H,e.booleanContacts[t.id]]]),a("div",we,[v(a("img",{width:"20",height:"20",class:"mx-2 inline-block h-8 w-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-white object-cover",alt:"Profile photo",onError:n[5]||(n[5]=(...g)=>e.defaultProfileImg&&e.defaultProfileImg(...g))},null,544),[[U,{src:e.$page.props.uploadUrl+"/"+((_=t.owner)==null?void 0:_.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]])]),a("span",ve,[a("span",ke,[o(s,{class:"text-sm lg:text-base"},{default:l(()=>[i(d(t.contact_name),1)]),_:2},1024),o(c,null,{default:l(()=>[i(d(e.moment(t.added_date).format(e.$page.props.dateFormat)),1)]),_:2},1024)]),o(c,null,{default:l(()=>[i("by: "+d(t.contact_email),1)]),_:2},1024)])]}),_:2},1032,["onClick","theme"])]))),128))])):(p(),u("div",re,[a("div",ie,[e.can.updateContact?(p(),j(y,{key:0,onClick:e.makeAllRead,padding:"p-1.5"},{default:l(()=>[a("div",de,[o(h,{name:"right",class:"mt-1.5",fillone:"#6366F1"}),o(s,{class:"ms-1 my-auto cursor-pointer",textColor:"text-primary-500"},{default:l(()=>[i(d(e.$t("core__be_mark_all_as_read")),1)]),_:1})])]),_:1},8,["onClick"])):V("",!0),e.can.deleteContact?(p(),j(y,{key:1,onClick:n[0]||(n[0]=t=>e.showDelete=!e.showDelete),padding:"p-1.5"},{default:l(()=>[a("div",me,[a("span",ce,[o(h,{name:"trash",w:"16",h:"16"})]),o(s,{class:"ms-1 my-auto",textColor:"text-primary-500"},{default:l(()=>[i(d(e.$t("btn_delete")),1)]),_:1})])]),_:1})):V("",!0)]),(p(!0),u(I,null,F(e.contacts,t=>(p(),u("div",{key:t.id,class:"cursor-pointer"},[o(A,{onClick:_=>e.goToDetail(t.id),theme:t.is_read==0?"bg-primary-50 dark:bg-primary-900":" bg-secondary-50 dark:bg-secondary-900",icon:!1,h:"h-26"},{content:l(()=>{var _;return[a("div",pe,[v(a("img",{width:"20",height:"20",class:"mx-2 inline-block h-8 w-8 sm:w-12 sm:h-12 rounded-full ring-2 ring-white object-cover",alt:"Profile photo",onError:n[1]||(n[1]=(...g)=>e.defaultProfileImg&&e.defaultProfileImg(...g))},null,544),[[U,{src:e.$page.props.uploadUrl+"/"+((_=t.owner)==null?void 0:_.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]])]),a("span",_e,[a("span",ue,[o(s,{class:"text-sm lg:text-base"},{default:l(()=>[i(d(t.contact_name),1)]),_:2},1024),o(c,null,{default:l(()=>[i(d(e.moment(t.added_date).format(e.$page.props.dateFormat)),1)]),_:2},1024)]),o(c,null,{default:l(()=>[i("by: "+d(t.contact_email),1)]),_:2},1024)])]}),_:2},1032,["onClick","theme"])]))),128))])),o(L,{ref:"ps_danger_dialog"},null,512),o(T,{ref:"ps_warning_dialog"},null,512)]),_:1})],64)}var Ge=ae(le,[["render",Pe]]);export{Ge as default};