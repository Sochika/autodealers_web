import{a as U,P as d}from"./PsApiService.317e88ef.js";import{D as f}from"./DefaultPhoto.cc755f93.js";import{A as m}from"./ApiStatus.5720ba0b.js";import{P as b}from"./PsUtils.2215fd6f.js";import{bD as A,y as v,i as T}from"./app.df1b8390.js";import{m as V}from"./PsSepetetedStore.9a31ac47.js";const N=V(p=>A(`galleryUsStore/${p}`,()=>{const t=v(new U),u=v({value:!1}),o=v({value:!1});let n=T(30),i=0;function g(e){var l,a;t!=null&&t.data!=null&&t.data.length>0&&i!=0?(e.data!=null&&e.data.length>0?(((l=e.data)==null?void 0:l.length)<n.value?o.value=!0:o.value=!1,t.data.push(...e.data)):(((a=e.data)==null?void 0:a.length)<n.value||e.data==null?o.value=!0:o.value=!1,o.value=!0),t.code=e.code,t.status=e.status,t.message=e.message):(t.data=e.data,t.code=e.code,t.status=e.status,t.message=e.message),t!=null&&t.data!=null&&(i=t.data.length)}async function w(e,l,a,s,y){u.value=!0;const r=await d.getImageList(new f,l,a,s,n.value,i);return r.data=r.data.filter(c=>c.imgType!="item-video"&&c.imgType!="item-video-icon"),b.log(r),g(r),u.value=!1,r}async function h(){t.data=[],u.value=!1,o.value=!1,n.value=30,i=0}async function S(e,l,a){i=0,u.value=!0;const s=await d.getImageList(new f,e,l,a,n.value,i);g(s)}async function I(e,l){u.value=!0;const a={};a.img_id=e;const s=await d.deleteImage(new m,n.value,i,l,a);return u.value=!1,s}async function L(e,l){u.value=!0;const a={};a.img_id=e;const s=await d.deleteVideo(new m,n.value,i,l,a);return u.value=!1,s}async function P(e,l,a,s,y,r,c){u.value=!0;const G=await d.postChatImageUpload(new f,e,l,a,s,y,r,c);return u.value=!1,G}async function C(e,l){u.value=!0;const a={};a.file_name=e;const s=await d.postChatImageDelete(new m,l,a);return u.value=!1,s}return{galleryList:t,loading:u,isNoMoreRecord:o,limit:n,offset:i,loadGalleryList:w,resetGalleryList:S,deleteImage:I,deleteVideo:L,postChatImageUpload:P,postChatImageDelete:C,resetData:h}}));export{N as u};
