import{a as y,P as I}from"./PsApiService2.js";import{a as h}from"./ItemLocationTownship.js";import{aC as g,B as n,i as v}from"./app.js";import{m as E}from"./PsSepetetedStore.js";import{P as l}from"./ps_constants.js";const P=E(f=>g(`ItemLocationStore/${f}`,()=>{const r=n(new y),e=n(new y);let c=v("");const u=n({value:!1});let d=v(15),i=0;const s=n({value:!1});function w(t,a,o){o.keyword=t,L(a,o)}function m(t){var a,o;e!=null&&e.data!=null&&e.data.length>0&&i!=0?(t.data!=null&&t.data.length>0?(((a=t.data)==null?void 0:a.length)<d.value?s.value=!0:s.value=!1,e.data.push(...t.data)):s.value=!0,e.code=t.code,e.status=t.status,e.message=t.message):(((o=t.data)==null?void 0:o.length)<d.value||t.data==null?s.value=!0:s.value=!1,e.data=t.data,e.code=t.code,e.status=t.status,e.message=t.message),e!=null&&e.data!=null&&(i=e.data.length)}async function _(t,a){u.value=!0,a.keyword=c.value;const o=await I.getItemLocationList(new h,d.value,i,t,a.toMap());m(o),u.value=!1}async function L(t,a){i=0,a.keyword=c.value,u.value=!0;const o=await I.getItemLocationList(new h,d.value,i,t,a.toMap());m(o),u.value=!1}return{itemLocationBackupList:r,itemLocationList:e,filterKeyword:c,loading:u,limit:d,offset:i,isNoMoreRecord:s,filterKeywordUpate:w,updateItemLocationList:m,loadItemLocationList:_,resetItemLocationList:L}}));class N{constructor(){this.keyword="",this.orderBy="",this.orderType=""}LocationParameterHolder(){this.keyword="",this.orderBy=l.FILTERING__ADDED_DATE,this.orderType=l.FILTERING__DESC}getDefaultParameterHolder(){return this.keyword="",this.orderBy=l.FILTERING__ORDERING,this.orderType=l.FILTERING__DESC,this}getLatestParameterHolder(){return this.keyword="",this.orderBy=l.FILTERING__ADDED_DATE,this.orderType=l.FILTERING__DESC,this}toMap(){const r={};return r.keyword=this.keyword,r.order_by=this.orderBy,r.order_type=this.orderType,r}}export{N as L,P as u};
