import{d as J,i as l,J as n,R as z,r as a,o as c,f as x,w as s,a as T,l as se,b as t,p as $,t as S,L as de,H as ue,O as L,c as C,g as p,F as ce}from"./app.js";import _e from"./TableFieldHideShowModal.js";import ge from"./LanguageModal.js";import me from"./LanguageEditModal.js";import{f as fe,g as he,d as pe}from"./PsLayout.js";import{P as G}from"./PsLabel.js";import{P as Q}from"./PsButton.js";import{P as be}from"./PsTable2.js";import{P as ve}from"./PsAlert.js";import{P as ye}from"./PsBreadcrumb2.js";import{P as ke}from"./PsModal.js";import{P as X}from"./PsIcon.js";import{P as Y}from"./PsInput.js";import{_ as Z}from"./plugin-vue_export-helper.js";import{P as we}from"./PsToggle.js";import{P as Ce}from"./PsBannerIcon.js";import{D as $e}from"./PsTableSearch.js";import{P as Se}from"./PsIconButton.js";import{a as Fe,P as Ie}from"./PsSuccessDialog.js";import{P as De}from"./PsLoadingCircleDialog.js";import"./vue-neat-modal.js";import"./toggle.js";import"./Icons.js";import"./PsLoading.js";import"./index.esm.js";import"./auth.esm.js";import"./PsInputWithRightIcon.js";import"./PsLabelCaption.js";import"./moment.js";import"./PsIcon1.js";const Oe=J({name:"PsDialogWithInput2",components:{PsModal:ke,PsLabel:G,PsButton:Q,PsIcon:X,PsInput:Y},setup(){const e=l(),r=l(n("ps_danger_dialog__danger")),d=l(n("ps_danger_dialog__danger_message")),u=l(!0),m=l(),I=l(n("ps_confirm_dialog__yes")),b=l(n("ps_confirm_dialog__no"));let y,k=z({name:""});function v(){m.value==k.name?u.value=!1:u.value=!0}function f(_){_=="yes"?y():h(),e.value.toggle(!1)}function D(_,O,M,w,A,j){_!=null&&_.trim()!=""&&(r.value=_),O!=null&&O.trim()!=""&&(d.value=O),name!=null&&name.trim()!=""&&(m.value=name),w!=null&&w.trim()!=""&&(b.value=w),M!=null&&M.trim()!=""&&(I.value=M),e.value.toggle(!0),y=A}function h(){e.value.toggle(!1)}return{psmodal:e,openModal:D,closeModal:h,title:r,actionClicked:f,okButton:I,cancelButton:b,message:d,okBtnIsDisable:u,checkNameEqualOrNot:v,form:k,projectName:m}}}),Me={class:"flex flex-row justify-end"};function Ae(e,r,d,u,m,I){const b=a("ps-button"),y=a("ps-modal");return c(),x(y,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!0,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{body:s(()=>[T("div",null,[se(e.$slots,"body")])]),footer:s(()=>[T("div",Me,[t(b,{rounded:"rounded",onClick:r[0]||(r[0]=k=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none text-secondary-800 dark:text-white",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:s(()=>[$(S(e.cancelButton),1)]),_:1}),t(b,{rounded:"rounded",onClick:r[1]||(r[1]=k=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-primary-500 text-white",hover:"hover:outline-none hover:ring hover:ring-primary-100",focus:"focus:outline-none focus:ring focus:ring-primary-300"},{default:s(()=>[$(S(e.okButton),1)]),_:1})])]),_:3},512)}var ze=Z(Oe,[["render",Ae]]);const Be=J({name:"Index",components:{PsLoadingCircleDialog:De,PsConfirmDialog:fe,PsSuccessDialog:Fe,PsErrorDialog:Ie,Link:de,Head:ue,PsLabel:G,PsButton:Q,PsTable2:be,PsAlert:ve,PsBreadcrumb2:ye,PsDangerDialog:he,PsInput:Y,PsToggle:we,PsIcon:X,PsBannerIcon:Ce,Dropdown:$e,PsIconButton:Se,TableFieldHideShowModal:_e,LanguageModal:ge,LanguageEditModal:me,PsDialogWithInput2:ze},layout:pe,props:{errors:Object,tableId:String,status:Object,can:Object,fields:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let r=e.search?l(e.search):l(""),d=e.sort_field?l(e.sort_field):l(""),u=e.sort_order?l(e.sort_order):l("desc"),m=l(!1);const I=l(),b=l(),y=l(),k=l(),v=l(),f=l(),D=l(),h=l(),_=l(),O=l(),M=l(),w=["uit00001","uit00003","uit00008"],A=z({ordering:"",_method:"put"});function j(i){I.value.openModal(n("core__delete"),n("core__comfirm_to_delete_field"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{L.Inertia.put(route("tables.fields.deleteField",{id:i}),{onSuccess:()=>{m.value=!0,setTimeout(()=>{m.value=!1},3e3)},onError:()=>{m.value=!0,setTimeout(()=>{m.value=!1},3e3)}})},()=>{})}function E(i){k.value.openModal(i,g=>{v.value.openModal(g)})}function N(i){d.value=i.field,u.value=i.sort_order,B()}function U(i){r.value=i,B(1)}function V(i){B(1,i)}function B(i=null,g=null){L.Inertia.get(route("tables.fields.index",e.tableId),{table:e.tableId,sort_field:d.value,sort_order:u.value,page:i!=null?i:e.fields.meta.current_page,row:g!=null?g:e.fields.meta.per_page,search:r.value,symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"},{preserveScroll:!0,preserveState:!0})}function R(i){return!w.includes(i)}function o(i){var g;return i.authorizations.update&&i.is_core_field!="1"?!!w.includes((g=i.ui_type_id)==null?void 0:g.core_keys_id):!1}function H(i,g,K,W){A.ordering=W,y.value.openModal(n("column_order_label"),n("edit_column_order"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{let q=z({id:i,isCoreField:K,ordering:A.ordering,_method:"put"});this.$inertia.post(route("tables.fields.handleOrdering"),q)},()=>{})}function F(i,g,K,W,q){b.value.openModal(K,W,q,(ne,le,re)=>{let ae=z({id:i,isCoreField:g,isIncluded:ne,isShow:le,isShowInFilter:re});L.Inertia.post(route("tables.fields.eyeStatusChange",ae))},()=>{})}function P(i){h.value.openModal(n("ps_error_dialog__error"),i,n("core__be_btn_ok"),()=>{})}function ee(i){f.value.openModal(n("ps_success_dialog__success"),i,n("core__be_btn_ok"),()=>{})}function oe(){_.value.openModal(n("core__be_updating"),n("core__be_sync_and_update)"))}function te(){_.value.closeModal()}function ie(){D.value.openModal(n("core__be_overwrite"),n("core__be_want_overwrite"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{L.Inertia.get(route("table.replace"))},()=>{})}return{openLoading:oe,closeLoading:te,eyeIconClicked:F,haveAttrUiTypes:w,isIncludehaveAttrUiTypes:R,language_edit_modal:v,language_modal:k,languageClicked:E,hide_show_modal:b,columns:M,ps_danger_dialog:I,confirmDeleteClicked:j,colFilterOptions:O,handleRow:V,handleSearchingSorting:B,handleSearching:U,handleSorting:N,visible:m,ps_dialog_with_input2:y,handleOrdering:H,columnOrderingForm:A,isEnableAttribute:o,ps_success_dialog:f,ps_confirm_dialog:D,ps_error_dialog:h,ps_loading_circle_dialog:_,showErrorDialog:P,showSuccessDialog:ee,showOverwriteDialog:ie}},beforeUpdate(){var e,r;((e=this.errors)==null?void 0:e.status)=="error"&&(this.errors.message=="overwrite"?this.showOverwriteDialog():this.showErrorDialog(this.errors.message)),((r=this.errors)==null?void 0:r.status)=="success"&&this.showSuccessDialog(this.errors.message)},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("table_setting_group"),url:route("table.index")},{label:n("core__be_fields"),color:"text-primary-500"}]}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:n(e.label),type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:n(e.key),key_id:e.key_id,label:n(e.label),module_name:e.module_name}))},methods:{handleCreate(){this.$inertia.get(route("mobile_language.create"))},handleCustomDetail(e,r,d){r=="1"||this.haveAttrUiTypes.includes(d)&&this.$inertia.get(route("attribute.index",[this.tableId,e]))},handlePublish(e,r,d){if(r){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.enableChange",u))}},handleIsShowSorting(e,r,d){if(r){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.isShowSorting",u))}},handleMandatory(e,r,d){if(r){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.mandatoryChange",u))}},handleLanguageString(e){this.$inertia.get(route("mobile_language_string.index",e))},FilterOptionshandle(e){L.Inertia.put(route("tables.fields.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.fields.per_page,search:this.search.value,current_page:this.fields.current_page},{preserveScroll:!0,preserveState:!0})}}}),He={key:0,class:"flex flex-row mb-2"},Le={key:0,class:"flex"},Te={class:""},je={key:1,class:"flex"},xe={class:""},Ee={key:2},Ne={key:3},Ue={key:4},Ve={key:5},Re={key:6,class:"flex"},Ke={class:"w-full text-start mt-2"};function We(e,r,d,u,m,I){const b=a("Head"),y=a("ps-breadcrumb-2"),k=a("ps-banner-icon"),v=a("ps-icon"),f=a("ps-button"),D=a("ps-danger-dialog"),h=a("ps-label"),_=a("ps-toggle"),O=a("ps-table2"),M=a("table-field-hide-show-modal"),w=a("language-modal"),A=a("language-edit-modal"),j=a("ps-input"),E=a("ps-dialog-with-input2"),N=a("ps-success-dialog"),U=a("ps-confirm-dialog"),V=a("ps-error-dialog"),B=a("ps-loading-circle-dialog"),R=a("ps-layout");return c(),C(ce,null,[t(b,{title:e.$t("fields_label")},null,8,["title"]),t(R,null,{default:s(()=>[t(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(c(),x(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:s(()=>[$(S(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),t(O,{row:e.row,search:e.search,object:this.fields,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{tableActionRow:s(o=>[o.field=="action"?(c(),C("div",He,[t(f,{disabled:o.row.authorizations.delete?o.row.permission_for_delete=="0":!0,onClick:H=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:s(()=>[t(v,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),t(D,{ref:"ps_danger_dialog"},null,512)])):p("",!0)]),tableRow:s(o=>{var H;return[o.field=="name"?(c(),C("div",Le,[T("div",Te,[t(f,{disabled:!o.row.authorizations.update,onClick:F=>e.languageClicked(o.row.nameKey),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[t(v,{name:"language",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),t(D,{ref:"ps_danger_dialog"},null,512)]),t(h,{class:"font-normal"},{default:s(()=>[$(S(e.$t(o.row.nameKey)),1)]),_:2},1024)])):p("",!0),o.field=="placeholder"?(c(),C("div",je,[T("div",xe,[t(f,{disabled:!o.row.authorizations.update,onClick:F=>e.languageClicked(o.row.placeholderKey),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[t(v,{name:"language",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])]),t(h,{class:"font-normal"},{default:s(()=>[$(S(e.$t(o.row.placeholderKey)),1)]),_:2},1024)])):p("",!0),o.field=="ui_type_id"?(c(),C("div",Ee,[t(h,{class:"font-normal"},{default:s(()=>[$(S(o.row.ui_type_id?e.$t(o.row.ui_type_id.name):e.$t("N.A")),1)]),_:2},1024)])):p("",!0),o.field=="show_in_table"?(c(),C("div",Ne,[t(f,{disabled:!o.row.authorizations.update,onClick:F=>e.eyeIconClicked(o.row.id,o.row.is_core_field,o.row.is_include_in_hideshow,o.row.is_show,o.row.is_show_in_filter),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[t(v,{name:"eye-on",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])):p("",!0),o.field=="enable"?(c(),C("div",Ue,[t(_,{disabled:o.row.authorizations.update?o.row.permission_for_enable_disable!=1:!0,selectedValue:o.row.enable==1,onClick:F=>e.handlePublish(o.row.id,o.row.authorizations.update&&o.row.permission_for_enable_disable=="1",o.row.is_core_field),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])])):p("",!0),o.field=="is_show_sorting"?(c(),C("div",Ve,[t(_,{disabled:!o.row.authorizations.update,selectedValue:o.row.is_show_sorting=="1",onClick:F=>e.handleIsShowSorting(o.row.id,o.row.authorizations.update,o.row.is_core_field),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])])):p("",!0),o.field=="ordering"?(c(),C("div",Re,[t(h,{class:"font-normal"},{default:s(()=>[$(S(e.$t(o.row.ordering)),1)]),_:2},1024)])):p("",!0),o.field=="mandatory"?(c(),x(f,{key:7,disabled:o.row.authorizations.update?o.row.permission_for_mandatory!="1":!0,onClick:F=>e.handleMandatory(o.row.id,o.row.permission_for_mandatory,o.row.is_core_field),padding:[o.row.mandatory=="1"?"py-2 px-2":"py-2 px-4"],colors:[o.row.mandatory=="1"?"bg-red-400  dark:bg-red-200 text-white dark:text-red-800":"bg-green-400"," dark:bg-green-200 text-white dark:text-green-800"]},{default:s(()=>[$(S(o.row.mandatory=="1"?e.$t("core__be_btn_mandatory"):e.$t("core__be_btn_optional")),1)]),_:2},1032,["disabled","onClick","padding","colors"])):p("",!0),o.field=="attribute"?(c(),x(f,{key:8,disabled:o.row.authorizations.update?o.row.is_core_field=="1"?!0:e.isIncludehaveAttrUiTypes((H=o.row.ui_type_id)==null?void 0:H.core_keys_id):!0,onClick:F=>e.handleCustomDetail(o.row.core_keys_id,o.row.is_core_field,o.row.ui_type_id.core_keys_id),class:"me-4",colors:e.isEnableAttribute(o.row)?"bg-green-400 text-white":"bg-primary-100 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:s(()=>[t(v,{theme:e.isEnableAttribute(o.row)?"text-white dark:text-primary-900":"text-primary-300 dark:text-primary-900",name:"editPencil",w:"16",h:"16"},null,8,["theme"])]),_:2},1032,["disabled","onClick","colors"])):p("",!0)]}),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),t(M,{ref:"hide_show_modal"},null,512),t(w,{ref:"language_modal"},null,512),t(A,{ref:"language_edit_modal"},null,512),t(E,{ref:"ps_dialog_with_input2"},{body:s(()=>[T("div",Ke,[t(h,{class:"font-weight-bolder text-base mb-2"},{default:s(()=>[$(S(e.$t("column_order_label")),1)]),_:1}),t(j,{type:"number",value:e.columnOrderingForm.ordering,"onUpdate:value":r[0]||(r[0]=o=>e.columnOrderingForm.ordering=o),valueModifiers:{number:!0},placeholder:e.$t("column_order_placeholder")},null,8,["value","placeholder"])])]),_:1},512),t(N,{ref:"ps_success_dialog"},null,512),t(U,{ref:"ps_confirm_dialog"},null,512),t(V,{ref:"ps_error_dialog"},null,512),t(B,{ref:"ps_loading_circle_dialog"},null,512)]),_:1})],64)}var Co=Z(Be,[["render",We]]);export{Co as default};