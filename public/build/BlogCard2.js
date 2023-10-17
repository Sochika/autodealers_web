import g from"./PsLabel2.js";import h from"./PsButton2.js";import b from"./PsRouteLink.js";import{B as u,u as x}from"./BlogStore.js";import{h as v}from"./moment.js";import{_ as A}from"./plugin-vue_export-helper.js";import{r,Q as k,o as w,c as y,a as t,m as B,b as a,w as l,p as i,t as s}from"./app.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./PsSepetetedStore.js";const D={name:"BlogHorizontalItem",components:{PsLabel:g,PsButton:h,PsRouteLink:b},props:{blog:{type:u},onClick:Function,dateFormat:{type:String,default:"YYYY/MM/DD"}},setup(){return{blogStore:x(),moment:v}}},S={class:"w-full lg:h-[390px] flex flex-wrap shadow-sm"},P={class:"overflow-hidden md:w-1/2 w-full sm:h-[400px] md:h-auto h-[202px]"},C={class:"transform transition duration-500 hover:scale-110 w-full h-full rounded object-cover",style:{cursor:"auto"}},I={class:"md:w-1/2 w-full md:[h-285px] md:ps-10",style:{cursor:"auto"}},N={class:"flex mb-4 mt-4"},Y=t("span",{class:"flex text-xs sm:text-sm pe-3 rtl:space-x-reverse space-x-2s text-feAchromatic-500 dark_text-feAchromatic-400"}," Admin ",-1),z={class:"flex text-xs sm:text-sm ms-3 ps-5 border-s-2 rtl:space-x-reverse space-x-2s text-feAchromatic-500 border-feAchromatic-400 dark_border-feAchromatic-400 dark_text-feAchromatic-400"},F={class:"leading-relaxed mb-4 text-base sm:text-lg dark_text-feAchromatic-300"};function U(o,V,e,n,L,M){var c,m;const d=r("ps-label"),_=r("ps-button"),f=r("ps-route-link"),p=k("lazy");return w(),y("div",S,[t("div",P,[B(t("img",C,null,512),[[p,{src:o.$page.props.thumb2xUrl+"/"+((m=(c=e.blog)==null?void 0:c.defaultPhoto)==null?void 0:m.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),t("div",I,[a(d,{class:"text-feAchromatic-800 font-semibold mt-2 text-lg sm:mt-2 sm:text-2xl dark_text-feAchromatic-200",style:{cursor:"auto"}},{default:l(()=>[i(s(e.blog.name.length>30?e.blog.name.slice(0,20)+" ....":e.blog.name),1)]),_:1}),t("div",N,[Y,t("span",z,s(n.moment(e.blog.addedDate).format(o.$page.props.dateFormat)),1)]),t("p",F,s(e.blog.description.length>200?e.blog.description.slice(0,200)+".....":e.blog.description),1),a(f,{to:{name:"fe_blog_detail",params:{blogId:e.blog.id,blogName:e.blog.name}}},{default:l(()=>[a(_,{class:"mb-3",rounded:"rounded",colors:"bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50",border:"border border-feAchromatic-300 dark_border-feAchromatic-500"},{default:l(()=>[i(s(o.$t("blog__read_more")),1)]),_:1})]),_:1},8,["to"])])])}var W=A(D,[["render",U]]);export{W as default};
