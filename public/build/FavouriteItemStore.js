import{a as f,P as n}from"./PsApiService2.js";import{P as d}from"./Product.js";import{aC as L,B as m,i as P}from"./app.js";import{m as S}from"./PsSepetetedStore.js";class y{constructor(){this.itemId="",this.userId=""}FavouriteParameterHolder(){this.itemId="",this.userId=""}toMap(){const t={};return t.item_id=this.itemId,t.user_id=this.userId,t}}const k=S(v=>L(`FavouriteItemStore/${v}`,()=>{const t=m(new f),g=m(new f),u=m({value:!1});let l=P(12),i=0;const o=m({value:!1});let h="";function c(e){var a,s;t!=null&&t.data!=null&&t.data.length>0&&i!=0?(e.data!=null&&e.data.length>0?(((a=e.data)==null?void 0:a.length)<l.value?o.value=!0:o.value=!1,t.data.push(...e.data)):o.value=!0,t.code=e.code,t.status=e.status,t.message=e.message):(((s=e.data)==null?void 0:s.length)<l.value||e.data==null?o.value=!0:o.value=!1,t.data=e.data,t.code=e.code,t.status=e.status,t.message=e.message),t!=null&&t.data!=null&&(i=t.data.length)}async function I(e){u.value=!0;const a=await n.getFavouritesList(new d,e,l.value,i);c(a),u.value=!1}async function F(e){i=0,u.value=!0;const a=await n.getFavouritesList(new d,e,l.value,i);c(a),u.value=!1}async function w(e,a){const s=new y;return s.itemId=e,s.userId=a,await n.postFavourite(new d,a,s.toMap())}async function p(e){u.value=!0;const a=0,s=t.data.length,r=await n.getFavouritesList(new d,e,s,a);t.data=r.data,t.code=r.code,t.status=r.status,t.message=r.message,u.value=!1}return{favouriteItemList:t,item:g,loading:u,limit:l,offset:i,isNoMoreRecord:o,id:h,updateItemList:c,loadFavouriteItemList:I,resetFavouriteItemList:F,postFavourite:w,refleshFavouriteItemList:p}}));export{k as u};
