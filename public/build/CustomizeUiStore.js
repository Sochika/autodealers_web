import{a as C,P as f}from"./PsApiService2.js";import{C as c}from"./CustomFieldStore.js";import{aC as h,B as m,i as z}from"./app.js";import"./PsStore.js";import{m as L}from"./PsSepetetedStore.js";const y=L(n=>h(`customizeUi/${n}`,()=>{const a=m({value:!1}),t=m(new C),s=m({value:!1});let o=z(30),l=0,r="";function d(e){var u,i;t!=null&&t.data!=null&&t.data.length>0&&l!=0?(e.data!=null&&e.data.length>0?(((u=e.data)==null?void 0:u.length)<o.value?a.value=!0:a.value=!1,t.data.push(...e.data)):a.value=!0,t.code=e.code,t.status=e.status,t.message=e.message):(((i=e.data)==null?void 0:i.length)<o.value||e.data==null?a.value=!0:a.value=!1,t.code=e.code,t.status=e.status,t.message=e.message,t.data=e.data),t!=null&&t.data!=null&&(l=t.data.length)}async function v(e,u){s.value=!0;const i=await f.getCustomizeUiList(new c,o.value,l,e,u);d(i),s.value=!1}async function g(e,u){l=0,s.value=!0;const i=await f.getCustomizeUiList(new c,o.value,l,e,u);d(i),s.value=!1}return{isNoMoreRecord:a,customizeUiList:t,loading:s,limit:o,offset:l,id:r,updateCustomFieldList:d,loadCustomFieldList:v,resetCustomFieldList:g}}));export{y as u};
