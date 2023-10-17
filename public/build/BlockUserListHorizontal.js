import q from"./PsCard2.js";import K from"./PsLabel2.js";import Q from"./PsButton2.js";import G from"./PsIcon2.js";import J from"./Rating.js";import W from"./PsLabelCaption3.js";import X from"./PsRouteLink.js";import{P as Y}from"./PsObject.js";import{R as w}from"./RatingDetail.js";import{_ as Z}from"./plugin-vue_export-helper.js";import{r as u,Q as $,o as f,c as I,a as o,b as s,w as i,m as j,g as v,p as _,t as l,f as S}from"./app.js";class m extends Y{constructor(){super(...arguments),this.userId="",this.userIsSysAdmin="",this.facebookId="",this.googleId="",this.phoneId="",this.appleId="",this.userName="",this.userEmail="",this.userPhone="",this.userAddress="",this.userAboutMe="",this.userCoverPhoto="",this.roleId="",this.status="",this.isBanned="",this.code="",this.overallRating="",this.isShowEmail="",this.isShowPhone="",this.userLat="",this.userLng="",this.addedDate="",this.activeItemCount="",this.ratingCount="",this.ratingDetail=new w,this.followerCount="",this.followingCount="",this.isFollowed="",this.isBlocked="",this.isVerifybluemark=""}init(e,t,r,y,x,d,h,n,g,c,p,k,C,P,B,L,M,N,D,A,E,R,V,U,z,b,F,H,O,T){return this.userId=e,this.userIsSysAdmin=t,this.facebookId=r,this.googleId=y,this.phoneId=x,this.appleId=d,this.userName=h,this.userEmail=n,this.userPhone=g,this.userAddress=c,this.userAboutMe=p,this.userCoverPhoto=k,this.roleId=C,this.status=P,this.isBanned=B,this.code=L,this.overallRating=M,this.isShowEmail=N,this.isShowPhone=D,this.userLat=A,this.userLng=E,this.addedDate=R,this.activeItemCount=V,this.ratingCount=U,this.ratingDetail=z,this.followerCount=b,this.followingCount=F,this.isFollowed=H,this.isBlocked=O,this.isVerifybluemark=T,this}getPrimaryKey(){return this.userId}toMap(e){const t={};return t.id=e.userId,t.user_is_sys_admin=e.userIsSysAdmin,t.facebook_id=e.facebookId,t.google_id=e.googleId,t.phone_id=e.phoneId,t.apple_id=e.appleId,t.name=e.userName,t.email=e.userEmail,t.user_phone=e.userPhone,t.user_address=e.userAddress,t.user_about_me=e.userAboutMe,t.user_cover_photo=e.userCoverPhoto,t.role_id=e.roleId,t.status=e.status,t.is_banned=e.isBanned,t.code=e.code,t.overall_rating=e.overallRating,t.is_show_email=e.isShowEmail,t.is_show_phone=e.isShowPhone,t.user_lat=e.userLat,t.user_lng=e.userLng,t.added_date=e.addedDate,t.active_item_count=e.activeItemCount,t.rating_count=e.ratingCount,t.rating_details=new w().toMap(e.ratingDetail),t.follower_count=e.followerCount,t.following_count=e.followingCount,t.is_followed=e.isFollowed,t.is_blocked=e.isBlocked,t.is_verify_blue_mark=e.isVerifybluemark,t}toMapList(e){const t=[];for(let r=0;r<e.length;r++)e[r]!=null&&t.push(this.toMap(e[r]));return t}fromMap(e){return new m().init(e.id,e.user_is_sys_admin,e.facebook_id,e.google_id,e.phone_id,e.apple_id,e.name,e.email,e.user_phone,e.user_address,e.user_about_me,e.user_cover_photo,e.role_id,e.status,e.is_banned,e.code,e.overall_rating,e.is_show_email,e.is_show_phone,e.user_lat,e.user_lng,e.added_date,e.active_item_count,e.rating_count,new w().fromMap(e.rating_details),e.follower_count,e.following_count,e.is_followed,e.is_blocked,e.is_verify_blue_mark)}fromMapList(e){const t=[];for(const r in e)r!=null&&t.push(this.fromMap(r));return t}}const ee={name:"UserListHorizontal",components:{PsCard:q,PsLabel:K,Rating:J,PsLabelCaption:W,PsButton:Q,PsIcon:G,PsRouteLink:X},props:{block:{type:m,default:new m},onClick:Function},setup(){return{}}},te={class:"shadow-sm relative bg-feSecondary-50 dark_bg-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},se={class:"flex gap-4"},oe={class:"w-20 h-20 relative cursor-pointer"},ie={alt:"Placeholder",width:"15px",height:"10px",class:"w-full h-full rounded-full object-cover"},re={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"},ae={class:"grow flex flex-col gap-2 justify-center truncate"},le={class:"flex flex-col"},ne={class:"self-center hidden"},de={class:"grid grid-cols-2"},ue={class:"flex items-center gap-1"},_e={class:"flex items-center gap-1"},he={class:"h-9"};function ce(a,e,t,r,y,x){const d=u("ps-icon"),h=u("ps-route-link"),n=u("ps-label"),g=u("rating"),c=u("router-link"),p=u("ps-button"),k=$("lazy");return f(),I("div",te,[o("div",se,[s(h,{to:{name:"fe_other_profile",params:{userId:t.block.userId}}},{default:i(()=>[o("div",oe,[j(o("img",ie,null,512),[[k,{src:a.$page.props.thumb2xUrl+"/"+t.block.userCoverPhoto,loading:a.$page.props.sysImageUrl+"/loading_gif.gif",error:a.$page.props.sysImageUrl+"/default_profile.png"}]]),t.block.isVerifybluemark=="1"?(f(),I("div",re,[s(d,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):v("",!0)])]),_:1},8,["to"]),o("div",ae,[s(h,{to:{name:"fe_other_profile",params:{userId:t.block.userId}},class:"cursor-pointer"},{default:i(()=>[s(n,{textColor:"text-lg font-semibold text-feSecondary-800 dark_text-feSecondary-50"},{default:i(()=>[_(l(t.block.userName.length>17?t.block.userName.slice(0,17)+"...":t.block.userName),1)]),_:1})]),_:1},8,["to"]),s(h,{to:{name:"fe_review_list",query:{user_id:t.block.userId}}},{default:i(()=>[s(g,{class:"h-4",grade:t.block?t.block.overallRating:0,maxStars:5,hasCounter:!0},null,8,["grade"])]),_:1},8,["to"]),o("div",le,[o("div",null,[t.block.isShowPhone=="1"?(f(),S(c,{key:0,class:"cursor-pointer"},{default:i(()=>[s(n,{textColor:"text-sm font-normal text-feSecondary-800 dark_text-feSecondary-50"},{default:i(()=>[_(l(t.block.userPhone),1)]),_:1})]),_:1})):v("",!0)]),o("div",null,[t.block.isShowEmail=="1"?(f(),S(c,{key:0,class:"cursor-pointer"},{default:i(()=>[s(n,{textColor:"text-sm font-normal text-feSecondary-800 dark_text-feSecondary-50"},{default:i(()=>[_(l(t.block.userEmail),1)]),_:1})]),_:1})):v("",!0)])])]),o("div",ne,[s(c,null,{default:i(()=>[s(d,{textColor:"text-feSecondary-800",name:"arrowNarrowRight",w:"24",h:"24",viewBox:"0 -3 9 20"})]),_:1})])]),o("div",de,[o("div",ue,[s(d,{class:"text-feSecondary-800 dark_text-feSecondary-50",name:"user-group-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),s(n,{textColor:"text-sm font-medium text-feSecondary-800 dark_text-feSecondary-50"},{default:i(()=>[_(l(a.user?t.block.followerCount:"0")+" "+l(a.$t("profile__followers")),1)]),_:1})]),o("div",_e,[s(d,{class:"text-feSecondary-800 dark_text-feSecondary-50",name:"shoppingCart-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),s(n,{textColor:"text-sm font-medium text-feSecondary-800 dark_text-feSecondary-50"},{default:i(()=>[_(l(a.user?t.block.activeItemCount:"0")+" "+l(a.$t("user__item")),1)]),_:1})])]),o("div",he,[s(p,{onClick:e[0]||(e[0]=C=>t.onClick!=null?t.onClick(t.block):null),class:"absolute bottom-4 right-4 left-4"},{default:i(()=>[_(l(a.$t("blocked_user_list__unblock")),1)]),_:1})])])}var fe=Z(ee,[["render",ce]]),Pe=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{m as B,fe as a,Pe as b};
