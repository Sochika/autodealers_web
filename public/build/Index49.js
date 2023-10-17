import{f as K,h as Q,g as X,a as ee,P as oe,i as se,d as re}from"./PsLayout.js";import{d as te,H as ae,L as le,i as n,D as ie,J as e,r as c,o as l,c as _,b as t,w as i,a as d,p as g,t as y,f as k,F as N,q as x,n as O,g as V,R as C,O as b}from"./app.js";import{h as ne}from"./moment.js";import{P as ce}from"./PsBannerIcon.js";import{P as de}from"./PsInput.js";import{P as _e}from"./PsLabel.js";import{P as pe}from"./PsButton.js";import{P as ue}from"./PsTextarea.js";import{P as me}from"./PsLabelHeader4.js";import{P as be}from"./PsIcon.js";import{P as ge,a as he}from"./PsSuccessDialog.js";import{P as fe}from"./PsToggle.js";import{P as ve}from"./PsBreadcrumb2.js";import{P as ye}from"./PsCard.js";import{P as ke}from"./PsInputWithRightIcon.js";import{P as we}from"./PsLoadingCircleDialog.js";import{_ as Me}from"./plugin-vue_export-helper.js";import"./PsModal.js";import"./vue-neat-modal.js";import"./index.esm.js";import"./auth.esm.js";import"./PsLoading.js";import"./PsLabelCaption.js";import"./PsIcon1.js";import"./Icons.js";import"./toggle.js";const Se=te({name:"Index",components:{Head:ae,Link:le,PsInput:de,PsLabel:_e,PsErrorDialog:ge,PsBannerIcon:ce,PsButton:pe,PsTextarea:ue,PsLabelHeader4:me,PsIcon:be,PsConfirmDialog:K,PsWarningDialog:Q,PsDangerDialog:X,PsToggle:fe,PsBreadcrumb2:ve,PsCard:ye,PsInputWithRightIcon:ke,PsSuccessDialog:he,PsLoadingCircleDialog:we,PsDropdownSelect:ee,PsDropdown:oe,PsLicenseActivateModal:se},layout:re,props:["purchaseCodeOrUrlNotSame","project","builderApiOverwrite","errors","replace_status","replace_message","purchased_code","status","logMessages","needRefresh","hasError","activatedFileName","selectedZipFileName","zipFileName","can","tableUsedTypes","tableUsedTypeId","status","tables","importSuccessMsg","importedFileName","diffIds","recentImportedFileName","search","loadMore","sorting","baseProjectSameMsg","baseProjectNotSameMsg"],setup(o){const h=n(),I=o.sorting==0?n(!1):n(!0),w=o.search?n(o.search):n(""),T=o.loadMore==0?n(!1):n(!0),j=n(),a=n(),M=n(),u=n(),p=n(),m=o.tableUsedTypeId?n(o.tableUsedTypeId):n(99);let S=n();const P=n(),F=n();function L(){let r=e("core__be_btn_reload");M.value.openModal(e("core__be_awesome_title"),e("core__be_impport_success_note"),r,()=>{window.location.reload()},!1)}function B(r){const v=r.target.files;S.value=v[0],u.value.openModal(e("core__be_import_confimation_title"),e("core__be_import_confimation_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{E(S.value)},()=>{})}function A(r){u.value.openModal(e("core__be_import_confirmation"),e("core__be_want_import_zip_file"),e("core__be_btn_confirm"),e("core__be_btn_cancel"),()=>{D(r)},()=>{})}function D(r){let v=C({selectedFileName:r});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.Inertia.post(route("table.import.zip"),v,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:G=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})}function E(r){let v=C({zipFile:r,zipFileName:r.name});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.Inertia.post(route("table.import.zip"),v,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:G=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})}function $(){M.value.openModal(e("license_activation_success"),e("license_activation_success_finish_msg"),e("setup_project"),()=>{let r=C({zipFileName:o.zipFileName});this.$inertia.get(route("table.index"),r)},!1)}function U(r){P.value.openModal(e("core__be_error_import_title"),r,e("core__be_btn_ok"),()=>{})}function z(){p.value.openModal(e("core__be_overwrite_table_title"),e("core__be_overwrite_table_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{let r=C({diffIds:o.diffIds,recentImportedFileName:o.recentImportedFileName});b.Inertia.post(route("table.field.override"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:v=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})},()=>{let r=C({recentImportedFileName:o.recentImportedFileName});b.Inertia.post(route("table.field.override"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:()=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})})}function s(r){this.$inertia.get(route("tables.fields.index",[r]),{symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"})}function f(){p.value.openModal(e("core__be_replace_table_title"),e("core__be_replace_table_note"),e("core__be_btn_confirm"),e("btn_cancel"),()=>{let r=C({importedFileName:o.importedFileName});a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.Inertia.post(route("table.field.handleProjectNotSame"),r,{onBefore:()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note"))},onSuccess:v=>{a.value.closeModal()},onError:()=>{a.value.closeModal()}})},()=>{})}function R(){b.Inertia.get(route("table.index"),{sorting:I.value==!1?0:1,loading:T.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})}function H(){u.value.openModal(e("core__be_replace_project_title"),e("core__be_replace_project_confirmation"),e("core__be_btn_confirm"),e("core__be_btn_cancel"),()=>{a.value.openModal(e("core__be_importing_title"),e("core__be_importing_note")),b.Inertia.get(route("table.do_replace"))},()=>{},e("core__be_replace_project_warning"))}function Z(){F.value.openModal(e("pls_activate_your_app"),"You have successfully imported the file.","Back",()=>{},!1)}ie(w,r=>{setTimeout(()=>{b.Inertia.get(route("table.index"),{sorting:I.value==!1?0:1,loading:T.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})},2e3)});function W(r){m.value=r,b.Inertia.get(route("table.index"),{sorting:I.value==!1?0:1,loading:T.value==!1?0:1,search:w.value,tableUsedTypeId:m.value})}function q(){j.value.click()}function J(r){P.value.openModal(e("ps_error_dialog__error"),r,e("core__be_btn_ok"),()=>{})}function Y(r){M.value.openModal(e("ps_success_dialog__success"),r,e("core__be_btn_ok"),()=>{})}return{showErrorDialog:J,showSuccessDialog:Y,moment:ne,handleImport:B,usedTypeClicked:W,handleBaseProjectNotSame:U,ps_danger_dialog:h,ps_error_dialog:P,route,handleOverride:z,handleDetail:s,sortingClicked:R,isSorting:I,search:w,importClicked:q,importFile:j,ps_success_dialog:M,ps_loading_circle_dialog:a,handleBaseProjectSame:f,openSuccessDialog:L,ps_confirm_dialog:u,ps_warning_dialog:p,usedTypeSearch:m,handleAlreadySelectedImport:A,doAlreadySelectedImport:D,openLicenseActivateModal:Z,confirmToReplaceModal:H,ps_license_activate_modal:F,openLicenseActivateSuccessDialog:$}},created(){},mounted(){this.zipFileName&&this.handleAlreadySelectedImport(this.zipFileName),this.purchaseCodeOrUrlNotSame&&this.openLicenseActivateModal(),this.builderApiOverwrite&&this.confirmToReplaceModal(),this.replace_status&&(this.replace_status=="error"?this.showErrorDialog(this.replace_message):this.showSuccessDialog(this.replace_message)),this.hasError===0&&this.openLicenseActivateSuccessDialog()},beforeUpdate(){this.diffIds&&this.diffIds.length&&this.handleOverride(),this.purchaseCodeOrUrlNotSame&&this.openLicenseActivateModal(),this.builderApiOverwrite&&this.confirmToReplaceModal(),this.replace_status&&(this.replace_status=="error"?this.showErrorDialog(this.replace_message):this.showSuccessDialog(this.replace_message)),this.hasError===0&&this.openLicenseActivateSuccessDialog(),this.baseProjectNotSameMsg&&this.handleBaseProjectNotSame(this.baseProjectNotSameMsg),this.baseProjectSameMsg&&this.handleBaseProjectSame(),this.importSuccessMsg&&this.openSuccessDialog(),this.zipFileName&&this.handleAlreadySelectedImport(this.zipFileName)},computed:{breadcrumb(){return[{label:e("core__be_dashboard_label"),url:route("admin.index")},{label:e("table_setting_group"),color:"text-primary-500"}]}}}),Pe={class:"min-h-screen"},Ce={class:"mt-4 sm:mt-6 lg:mt-10 mb-4 lg:mb-6 flex flex-col sm:flex-row justify-between"},Ie={class:"flex flex-row justify-between mb-4 sm:mb-0"},Ne={class:"flex sm:hidden"},Te={class:"rounded-md shadow-xs w-40"},Fe={class:"pt-2"},De={key:0},xe=g("Create new currency"),je={key:1},Le=["onClick"],Be={class:"flex flex-row"},Ae={class:"sm:flex hidden me-4"},Ee={class:"rounded-md shadow-xs w-40"},$e={class:"pt-2"},Ue={key:0},ze=g("Create new currency"),Oe={key:1},Ve=["onClick"],Re={class:"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6"},He=["onClick"],Ze={class:"pe-4 border-r border-secondary-200 flex items-center justify-center"},We={class:"flex-grow px-4"},qe={class:"flex rtl:space-x-reverse space-x-1 mt-1"},Je={key:0,class:"mt-6 lg:mt-8 flex items-center justify-end rtl:space-x-reverse space-x-1"},Ye={class:"flex"};function Ge(o,h,I,w,T,j){const a=c("Head"),M=c("ps-breadcrumb-2"),u=c("ps-icon"),p=c("ps-label"),m=c("ps-button"),S=c("ps-dropdown-select"),P=c("ps-dropdown"),F=c("ps-input-with-right-icon"),L=c("Link"),B=c("ps-loading-circle-dialog"),A=c("ps-success-dialog"),D=c("ps-confirm-dialog"),E=c("ps-warning-dialog"),$=c("ps-error-dialog"),U=c("ps-license-activate-modal"),z=c("ps-layout");return l(),_(N,null,[t(a,{title:o.$t("table_setting_group")},null,8,["title"]),t(z,null,{default:i(()=>[d("div",Pe,[t(M,{items:o.breadcrumb,class:"mb-4 sm:mb-0"},null,8,["items"]),d("div",Ce,[d("div",Ie,[t(m,{onClick:o.sortingClicked,colors:"bg-background dark:bg-backgroundDark",border:"border-secondary-200 border dark:border-secondary-100",shadow:"shadow-sm",focus:"focus:outline-none",hover:"hover:outline-none hover:bg-secondary-200"},{default:i(()=>[t(u,{name:"sort",class:"cursor-pointer me-2"}),t(p,{textColor:"text-secondary-800 dark:text-secondary-100 text-sm"},{default:i(()=>[g(y(o.$t("core__be_sort_by_name")),1)]),_:1})]),_:1},8,["onClick"]),d("div",Ne,[t(P,{align:"",class:"w-40 h-10"},{select:i(()=>[o.usedTypeSearch==99?(l(),k(S,{key:0,class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:"Null (temp)"})):(l(),k(S,{key:1,class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:o.usedTypeSearch==""?"":o.tableUsedTypes.filter(s=>s.id==o.usedTypeSearch)[0].name},null,8,["selectedValue"]))]),list:i(()=>[d("div",Te,[d("div",Fe,[o.tableUsedTypes.length==null?(l(),_("div",De,[t(p,{class:"p-2 flex",onClick:h[0]||(h[0]=s=>o.route("core_key_type.index"))},{default:i(()=>[xe]),_:1})])):(l(),_("div",je,[(l(!0),_(N,null,x(o.tableUsedTypes,s=>(l(),_("div",{key:s.id,class:"w-40 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:f=>o.usedTypeClicked(s.id)},[t(p,{class:O(["ms-2",s.id==o.usedTypeSearch?" font-bold":""])},{default:i(()=>[g(y(s.name),1)]),_:2},1032,["class"])],8,Le))),128))]))])])]),_:1})])]),d("div",Be,[d("div",Ae,[t(P,{align:"",class:"w-40 h-10"},{select:i(()=>[t(S,{class:"w-40",placeholder:"Choose Table Used Type",showCenter:!0,selectedValue:o.usedTypeSearch==""?"":o.tableUsedTypes.filter(s=>s.id==o.usedTypeSearch)[0].name},null,8,["selectedValue"])]),list:i(()=>[d("div",Ee,[d("div",$e,[o.tableUsedTypes.length==null?(l(),_("div",Ue,[t(p,{class:"p-2 flex",onClick:h[1]||(h[1]=s=>o.route("core_key_type.index"))},{default:i(()=>[ze]),_:1})])):(l(),_("div",Oe,[(l(!0),_(N,null,x(o.tableUsedTypes,s=>(l(),_("div",{key:s.id,class:"w-40 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:f=>o.usedTypeClicked(s.id)},[t(p,{class:O(["ms-2",s.id==o.usedTypeSearch?" font-bold":""])},{default:i(()=>[g(y(s.name),1)]),_:2},1032,["class"])],8,Ve))),128))]))])])]),_:1})]),t(F,{value:o.search,"onUpdate:value":h[2]||(h[2]=s=>o.search=s),class:"w-full sm:w-80",rounded:"rounded-lg",placeholder:o.$t("core__be_search")},{icon:i(()=>[t(u,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),d("div",Re,[(l(!0),_(N,null,x(o.tables.data,s=>(l(),_("div",{onClick:f=>o.handleDetail(s.id),key:s.id,class:"cursor-pointer border border-secondary-200 shadow-sm rounded flex flex-row p-4"},[d("div",Ze,[t(u,{name:"box",theme:"text-secondary-800 dark:text-secondary-50"})]),d("div",We,[t(p,{class:"text-lg"},{default:i(()=>[g(y(s.name),1)]),_:2},1024),d("div",qe,[t(p,{class:"bg-blue-100 dark:bg-primary-800 p-1 rounded text-xs",textColor:"text-blue-800 dark:text-blue-100"},{default:i(()=>[g(y(o.$t("core__be_core_fields")),1)]),_:1}),s.is_only_for_core_field!=1?(l(),k(p,{key:0,class:"bg-yellow-100 p-1 rounded text-xs",textColor:"text-yellow-800"},{default:i(()=>[g(y(o.$t("core__be_custom_fields")),1)]),_:1})):V("",!0)])])],8,He))),128))]),Object.keys(o.tables.data).length>0?(l(),_("div",Je,[(l(!0),_(N,null,x(o.tables.meta.links,(s,f)=>(l(),k(L,{key:f,href:s.url?s.url:"",class:"h-8 rounded bg-white dark:bg-secondaryDark-black"},{default:i(()=>[d("div",Ye,[f==0?(l(),k(m,{key:0,hover:"",focus:"",colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",border:"border border-secodnary-200 dark:border-secodnary-100 "},{default:i(()=>[t(u,{name:"doubleArrowLeft",w:"16",h:"16"})]),_:1})):f==Object.keys(o.tables.meta.links).length-1?(l(),k(m,{key:1,colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",hover:"",focus:"",border:"border border-secodnary-200  dark:border-secodnary-100"},{default:i(()=>[t(u,{name:"doubleArrowRight",w:"16",h:"16"})]),_:1})):(l(),k(m,{key:2,rounded:"rounded",colors:"bg-white",border:"border border-gray-200 rounded",class:O(s.active?"bg-indigo-500 text-white":"hover:text-gray-500 dark:bg-backgroundDark hover:bg-gray-200"),padding:"py-2 px-4"},{default:i(()=>[g(y(s.label),1)]),_:2},1032,["class"]))])]),_:2},1032,["href"]))),128))])):V("",!0)]),t(B,{ref:"ps_loading_circle_dialog"},null,512),t(A,{ref:"ps_success_dialog"},null,512),t(D,{ref:"ps_confirm_dialog"},null,512),t(E,{ref:"ps_warning_dialog"},null,512),t($,{ref:"ps_error_dialog"},null,512),t(U,{selectedZipFileName:o.selectedZipFileName,isCountDownShow:!1,hasError:o.hasError,logMessages:o.logMessages,status:o.status,purchased_code:o.purchased_code,project:o.project,errors:o.errors,systemCode2:o.systemCode2,ref:"ps_license_activate_modal"},null,8,["selectedZipFileName","hasError","logMessages","status","purchased_code","project","errors","systemCode2"])]),_:1})],64)}var So=Me(Se,[["render",Ge]]);export{So as default};
