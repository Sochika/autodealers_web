import{P as j}from"./PsButton.js";import{P as D}from"./PsLabel.js";import{P as S}from"./PsLabelTitle3.js";import{P as A}from"./PsIcon.js";import{P as O}from"./PsDraggable.js";import{P as I}from"./PsSuccessDialog.js";import{Y as T,aM as M,B as H,i as k,r as i,o as v,c as z,a as s,b as r,w as c,f as V,p as b,t as n,n as W,g as Y,F as q}from"./app.js";import{_ as G}from"./plugin-vue_export-helper.js";T.add(M);const J={name:"PsVideoUpload",props:{videoFile:{type:Object},disabled:{type:Boolean,default:!1}},components:{PsButton:j,PsLabel:D,PsLabelTitle3:S,PsIcon:A,PsDraggable:O,PsErrorDialog:I},setup(l,{emit:d}){const a=H({data:[]}),o=k(),C=k();function F(){o.value.click()}function x(){return a.data[0]}let m=k(),g=k();function P(h){const t=h.target.files;if(!(t&&t.length>1)){if(a.data=[],t&&t[0]){const p=new FileReader;p.onload=()=>{var w;const u=t[0];m.value=u.name,g.value=u.size*(1/8)*(1/1e3);const _=new Blob([(w=p.result)!=null?w:""],{type:u.type}),y=URL.createObjectURL(_),e=document.createElement("video");e.oncanplay=function(){if(e.duration>60)return C.value.openModal("Video Upload!","Video must be less than a minute.","Ok",()=>{}),!1;{const B=function(){R()&&(e.removeEventListener("timeupdate",B),e.pause())};e.addEventListener("loadeddata",function(){R()&&e.removeEventListener("timeupdate",B)});const R=function(){const f=document.createElement("canvas");f.width=e.videoWidth,f.height=e.videoHeight,f.getContext("2d").drawImage(e,0,0,f.width,f.height);const E=f.toDataURL();U(E);const N=E.length>1e5;return N&&(a.data.push(E),URL.revokeObjectURL(y)),N};e.addEventListener("timeupdate",B),t[0]}},e.preload="metadata",e.src=y,e.muted=!0,e.play()},p.readAsArrayBuffer(t[0]),d("update:videoFile",t[0])}}}function U(h){let t=h.split(","),p=t[0].match(/:(.*?);/)[1],u=atob(t[1]),_=u.length,y=new Uint8Array(_);const e=p.split("/"),w=Date.now()+"."+e[1];for(;_--;)y[_]=u.charCodeAt(_);return new File([y],w,{type:p})}function L(){if(a.data)return a.data.splice(a.data[0],1)}return{videoClick:F,video:o,onVideoSelected:P,previewVideo:a,getVideoUrl:x,ps_error_dialog:C,videoName:m,videoSize:g,close:L}}},K={class:"w-full"},Q={key:0,class:"flex flex-row bg-primary-50 h-16 dark:bg-indigo-900 dark:rounded-b-lg"},X={class:"w-20 flex flex-row justify-center items-center"},Z={class:"w-20 absolute"},$={id:"slider-full",alt:"Placeholder",width:"68px",height:"62px",class:"w-20 h-16 object-contain dark:rounded"},ee=["src"],te=["src"],oe={class:"relative w-7 h-7 bg-secondary-200 rounded-full mx-auto mt-2"},ae={class:"ms-4 mt-2 flex-rows"};function se(l,d,a,o,C,F){const x=i("ps-icon"),m=i("ps-label"),g=i("ps-button"),P=i("ps-draggable"),U=i("font-awesome-icon"),L=i("ps-label-title-3"),h=i("ps-error-dialog");return v(),z(q,null,[s("div",K,[r(P,{disabled:a.disabled,class:W(["mt-4 px-2.5 h-52 rounded-lg",o.previewVideo.data[0]?"border-b-0":""])},{default:c(()=>[r(x,{name:"small-cloud",theme:a.disabled?"text-secondary-300 dark:text-secondary-700":"text-secondary-500"},null,8,["theme"]),o.previewVideo.data!=""?(v(),V(m,{key:0,textColor:a.disabled?"text-secondary-300 dark:text-secondary-700 mb-2":"text-secondary-500  mb-2"},{default:c(()=>[b(n(o.previewVideo.data.length)+" "+n(l.$t("ps_image_upload__file_is_choosen")),1)]),_:1},8,["textColor"])):(v(),V(m,{key:1,textColor:a.disabled?"text-secondary-300 dark:text-secondary-700 mb-2":"text-secondary-500  mb-2"},{default:c(()=>[b(n(l.$t("ps_image_upload__no_file_is_choosen")),1)]),_:1},8,["textColor"])),s("input",{type:"file",size:"1",max:"1",accept:"video/*",ref:"video",style:{display:"none"},onChange:d[0]||(d[0]=t=>o.onVideoSelected(t))},null,544),a.disabled==!1?(v(),V(g,{key:2,type:"button",onClick:d[1]||(d[1]=t=>o.videoClick()),class:"w-26 py-1 px-2 mt-2",rounded:"rounded"},{default:c(()=>[b(n(l.$t("ps_video_upload__choose_files")),1)]),_:1})):(v(),V(g,{key:3,type:"button",disabled:!0,colors:"bg-secondary-600 text-white",class:"w-26 py-1 px-2 mt-2",rounded:"rounded"},{default:c(()=>[b(n(l.$t("ps_video_upload__choose_files")),1)]),_:1}))]),_:1},8,["disabled","class"]),o.previewVideo.data!=""?(v(),z("div",Q,[s("div",X,[s("div",Z,[s("video",$,[s("source",{src:o.getVideoUrl(),type:"video/mp4"},null,8,ee),s("source",{src:o.getVideoUrl(),type:"video/ogg"},null,8,te)])]),s("div",oe,[r(U,{icon:["fas","play"],class:"text-white py-1.5 px-2 text-md"})])]),s("p",ae,[r(m,{class:"font-bold"},{default:c(()=>[b(n(o.videoName),1)]),_:1}),r(L,{class:"dark:text-gray-500"},{default:c(()=>[b(n(l.$t("ps_video_upload__video_size"))+n(o.videoSize),1)]),_:1})]),r(x,{onClick:d[2]||(d[2]=t=>o.close()),textColor:l.textTheme,name:"cross",class:"text-sm ms-auto text-red-400 mt-1 focus:shadow-none hover:text-purple-500"},null,8,["textColor"])])):Y("",!0)]),r(h,{ref:"ps_error_dialog"},null,512)],64)}var ue=G(J,[["render",se]]);export{ue as P};
