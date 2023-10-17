import k from"./GalleryHorizontalItem.js";import{D as v}from"./DefaultPhoto.js";import x from"./GalleryHorizontalSkeletorItem.js";import{_ as b}from"./plugin-vue_export-helper.js";import{r,o as l,c as a,b as n,a as f,w as c,F as p,q as w,f as y}from"./app.js";import"./PsObject.js";import"./vue-skeletor.esm.js";/* empty css            */const S={name:"GalleryHorizontalSwiper",components:{GalleryHorizontalItem:k,GalleryHorizontalSkeletorItem:x},props:{totalCount:{type:Number,default:0},imageCount:{type:Number,default:1},galleryList:{type:Array,default:()=>[v]},isLoading:{type:Boolean,default:!0}},emits:["clickImage"],methods:{setThumbsSwiper(){}},setup(d,m){let e;function o(t){e=t}function u(){}function _(t){e.slideTo(t.clickedIndex,100)}function s(t){m.emit("clickImage",t,d.galleryList)}return{onSwiper:o,onSlideChange:u,onClick:_,imgClicked:s}}},L={class:"overflow: hidden;"},z={key:0,class:"flex flex-row"},I={key:1,class:"flex flex-row rtl:space-x-reverse sm:space-x-3 space-x-0"},B=["src"],G=["src"],H={key:2};function N(d,m,e,o,u,_){const s=r("gallery-horizontal-skeletor-item"),t=r("gallery-horizontal-item"),g=r("swiper-slide"),h=r("swiper");return l(),a("div",L,[e.galleryList==null&&e.isLoading?(l(),a("div",z,[n(s),n(s)])):e.galleryList==null&&!e.isLoading?(l(),a("div",I,[f("img",{alt:"Placeholder",class:"sm:w-1/2 w-full h-56 object-cover rounded-xl",width:"30px",height:"30px",src:require("@template1/assets/images/default-placeholder.png")},null,8,B),f("img",{alt:"Placeholder",class:"hidden sm:block w-1/2 h-56 object-cover rounded-xl",width:"30px",height:"30px",src:require("@template1/assets/images/default-placeholder.png")},null,8,G)])):(l(),a("div",H,[n(h,{class:"hidden sm:block",navigation:"","slides-per-view":e.galleryList.length<3?e.galleryList.length:3,"space-between":14,onSlideChange:o.onSlideChange},{default:c(()=>[(l(!0),a(p,null,w(e.galleryList.slice(0,e.totalCount),i=>(l(),y(g,{class:"swiper-slide bg-feAchromatic-50 dark_bg-feAchromatic-900",key:i.imgId},{default:c(()=>[n(t,{imageCount:e.imageCount,gallery:i,onClick:C=>o.imgClicked(i)},null,8,["imageCount","gallery","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","onSlideChange"]),n(h,{class:"block sm:hidden",navigation:"","slides-per-view":1,"space-between":14,onSlideChange:o.onSlideChange},{default:c(()=>[(l(!0),a(p,null,w(e.galleryList.slice(0,e.totalCount),i=>(l(),y(g,{class:"swiper-slide",key:i.imgId},{default:c(()=>[n(t,{imageCount:e.imageCount,gallery:i,onClick:C=>o.imgClicked(i)},null,8,["imageCount","gallery","onClick"])]),_:2},1024))),128))]),_:1},8,["onSlideChange"])]))])}var E=b(S,[["render",N],["__scopeId","data-v-ab062440"]]);export{E as default};
