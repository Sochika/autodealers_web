import g from"./PsLabel2.js";import{B as f,u as p}from"./BlogStore.js";import{h as u}from"./moment.js";import{_}from"./plugin-vue_export-helper.js";import{r as h,Q as b,o as r,c as n,a as s,m as y,b as a,w as i,p as d,t as v,g as x}from"./app.js";import"./PsApiService2.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./PsSepetetedStore.js";const S={name:"BlogHorizontalItem",components:{PsLabel:g},props:{blog:{type:f},onClick:Function,dateFormat:{type:String}},setup(){return{blogStore:p(),moment:u}}},k={class:"h-56 overflow-hidden"},w={alt:"Placeholder",class:"transform transition duration-500 hover:scale-110 w-full h-full object-cover",width:"360px",height:"100px"},B={key:0,class:"p-4"},C=d("Admin");function z(o,l,e,m,D,H){const t=h("ps-label"),c=b("lazy");return r(),n("div",{class:"rounded-lg cursor-pointer w-full h-full shadow-sm overflow-hidden bg-feSecondary-50 dark_bg-feSecondary-800",onClick:l[0]||(l[0]=I=>e.onClick!=null?e.onClick(e.blog):null)},[s("div",k,[y(s("img",w,null,512),[[c,{src:o.$page.props.thumb2xUrl+"/"+e.blog.defaultPhoto.imgPath,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]])]),e.blog?(r(),n("div",B,[a(t,{class:"font-semibold text-xl dark_text-feSecondary-200",innerHTML:e.blog.name.length>20?e.blog.name.slice(0,15)+" ....":e.blog.name},null,8,["innerHTML"]),a(t,{class:"font-medium text-base text-feSecondary-400 dark_text-feSecondary-300"},{default:i(()=>[C]),_:1}),a(t,{class:"font-normal text-base text-feSecondary-500 dark_text-feSecondary-400"},{default:i(()=>[d(v(m.moment(e.blog.addedDate).format(o.$page.props.dateFormat)),1)]),_:1})])):x("",!0)])}var A=_(S,[["render",z]]);export{A as default};
