import x from"./PsLabel2.js";import U from"./PsLabelTitle32.js";import v from"./PsCard2.js";import y from"./RatingShow.js";import{P as M}from"./PsObject.js";import{U as a}from"./User.js";import{h as D}from"./moment.js";import{_ as P}from"./plugin-vue_export-helper.js";import{r as m,o as S,c as k,a as i,b as o,w as l,p as _,t as c}from"./app.js";class f extends M{constructor(){super(...arguments),this.id="",this.fromUserId="",this.toUserId="",this.rating="",this.title="",this.description="",this.addedDate="",this.addedDateStr="",this.fromUser=new a,this.toUser=new a}init(t,e,r,p,u,n,d,s,g,w){return this.id=t,this.fromUserId=e,this.toUserId=r,this.rating=p,this.title=u,this.description=n,this.addedDate=d,this.addedDateStr=s,this.fromUser=g,this.toUser=w,this}getPrimaryKey(){return this.id}toMap(t){const e={};return e.id=t.id,e.from_user_id=t.fromUserId,e.to_user_id=t.toUserId,e.rating=t.rating,e.title=t.title,e.description=t.description,e.added_date=t.addedDate,e.added_date_str=t.addedDateStr,e.user=new a().toMap(t.fromUser),e.user=new a().toMap(t.toUser),e}toMapList(t){const e=[];for(let r=0;r<t.length;r++)t[r]!=null&&e.push(this.toMap(t[r]));return e}fromMap(t){return new f().init(t.id,t.from_user_id,t.to_user_id,t.rating,t.title,t.description,t.added_date,t.added_date_str,new a().fromMap(t.from_user),new a().fromMap(t.to_user))}fromMapList(t){const e=[];for(const r in t)r!=null&&e.push(this.fromMap(r));return e}}const C={name:"RatingHorizontal",components:{PsLabel:x,PsCard:v,PsLabelTitle3:U,RatingView:y},props:{rate:{type:f},onClick:Function},setup(){return{moment:D}}},I={class:"w-full md:w-auto cursor-pointer my-2"},R={class:"flex flex-col my-2 bg-fePrimary-50 h-[196px] rounded-md dark_bg-feAchromatic-900",enabledHover:!0},z={class:"px-4 mt-4"},H={class:"flex justify-between"},L={class:"h-[100px] overflow-y-auto"};function V(h,t,e,r,p,u){const n=m("rating-view"),d=m("ps-label-title-3"),s=m("ps-label");return S(),k("div",I,[i("div",R,[i("div",z,[i("div",H,[o(n,{iconColor:"text-feWarning-500 dark_text-feWarning-accent",size:"md",rating:e.rate?e.rate.rating:0,maxStars:5,hasCounter:!0},null,8,["rating"]),o(d,{class:"mt-2"},{default:l(()=>[_(c(e.rate?r.moment(e.rate.addedDate).format(h.$page.props.dateFormat):""),1)]),_:1})]),o(s,{class:"mt-2 mb-2 text-xl"},{default:l(()=>[_(c(e.rate?e.rate.title:""),1)]),_:1}),i("div",L,[o(s,{class:"mt-2 mb-4"},{default:l(()=>[_(c(e.rate?e.rate.description:""),1)]),_:1})])])])])}var B=P(C,[["render",V]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{f as R,B as a,G as b};
