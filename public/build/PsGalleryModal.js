import{d as P,i,r as n,Q as C,o as a,f as S,w as d,a as s,b as r,h as U,c as p,m as $,q as x,F as B}from"./app.js";import{S as I,a as M,b as N}from"./vue-splide.esm.js";/* empty css          */import T from"./PsModal2.js";import z from"./PsLabel2.js";import G from"./PsButton2.js";import j from"./PsIcon2.js";import{_ as D}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./PsLine.js";const F=P({name:"PsGalleryModal",components:{Splide:I,SplideSlide:M,SplideTrack:N,PsModal:T,PsLabel:z,PsButton:G,PsIcon:j},setup(){const e=i(),t=i(),c=i(),u=i(),b={rewind:!0,perPage:1,gap:"0rem",fixedHeight:"400px",pagination:!1,breakpoints:{744:{height:"400px"},640:{height:"328px"}}},_=i();let l,g;function f(o){o=="yes"?l():g(),e.value.toggle(!1)}function h(o,y,k,w){_.value=w,u.value=o,t.value=y,c.value=k}function v(o,y,k,w){_.value=w,u.value=o,t.value=y,c.value=k,e.value.toggle(!0)}function m(){e.value.toggle(!1)}return{img_type:u,active_img_path:t,gallery_list:_,img_id:c,psmodal:e,options:b,openModal:v,actionClicked:f,close:m,update:h}}}),H={class:"flex justify-end pb-20"},L={class:"h-8 w-8 rounded flex bg-feSecondary-300 dark_bg-feSecondary-800 justify-center items-center"},R={class:"w-full mb-28",dir:"ltr"},V={key:0,class:"w-auto h-full mx-auto rounded-lg",controls:""},q=["src"],E=["src"],O={key:1,class:"w-auto h-full mx-auto rounded-lg"},Q={key:0,class:"w-auto h-full mx-auto rounded-lg"},W={key:1,class:"w-auto h-full mx-auto rounded-lg",controls:""},A=["src"],J=["src"],K={class:"splide__arrows splide__arrows--ltr"},X={class:"bg-feSecondary-50 dark_bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},Y={class:"bg-feSecondary-50 dark_bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function Z(e,t,c,u,b,_){const l=n("ps-icon"),g=n("SplideSlide"),f=n("SplideTrack"),h=n("Splide"),v=n("ps-modal"),m=C("lazy");return a(),S(v,{ref:"psmodal",maxWidth:"100%",bodyHeight:"h-full",line:"hidden",isClickOut:!1,theme:"rounded-lg",bgColor:"rounded-lg bg-transparent dark_bg-transparent",class:"z-20"},{body:d(()=>[s("div",H,[s("div",L,[r(l,{name:"close",class:"text-feSecondary-800 hover:cursor-pointer",onClick:t[0]||(t[0]=U(o=>e.psmodal.toggle(!1),["prevent"]))})])]),s("div",R,[r(h,{options:e.options,"has-track":!1},{default:d(()=>[r(f,null,{default:d(()=>[r(g,null,{default:d(()=>[e.img_type=="item-video-icon"?(a(),p("video",V,[s("source",{src:e.$page.props.uploadUrl+"/"+e.active_img_path,type:"video/mp4"},null,8,q),s("source",{src:e.$page.props.uploadUrl+"/"+e.active_img_path,type:"video/ogg"},null,8,E)])):$((a(),p("img",O,null,512)),[[m,{src:e.$page.props.uploadUrl+"/"+e.active_img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),_:1}),(a(!0),p(B,null,x(e.gallery_list.filter(o=>o.imgPath!=e.active_img_path),o=>(a(),S(g,{key:o.imgId},{default:d(()=>[o.imgType=="item"?$((a(),p("img",Q,null,512)),[[m,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]):(a(),p("video",W,[s("source",{src:e.$page.props.uploadUrl+"/"+o.imgPath,type:"video/mp4"},null,8,A),s("source",{src:e.$page.props.uploadUrl+"/"+o.imgPath,type:"video/ogg"},null,8,J)]))]),_:2},1024))),128))]),_:1}),s("div",K,[s("button",X,[r(l,{textColor:"dark_text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),s("button",Y,[r(l,{textColor:"dark_text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])])]),_:1},8,["options"])])]),_:1},512)}var pe=D(F,[["render",Z],["__scopeId","data-v-12cec57b"]]);export{pe as default};
