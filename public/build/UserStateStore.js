import{a as f,P as c}from"./PsApiService2.js";import{P as y}from"./PsObject.js";import{aC as _,B as l}from"./app.js";import{m as g}from"./PsSepetetedStore.js";class I{constructor(){this.nameOnCard="",this.cardNo="",this.oldCardNo="",this.cvv="",this.expiryDate="",this.expiryMonth="",this.expiryYear="",this.paymentMethodNonce="",this.userId="",this.streetName="",this.city="",this.stateId="",this.stateName="",this.zipCode="",this.apartmentNo=""}CreditCardPrameterHolder(){this.nameOnCard="",this.cardNo="",this.oldCardNo="",this.cvv="",this.expiryDate="",this.expiryMonth="",this.expiryYear="",this.paymentMethodNonce="",this.userId="",this.streetName="",this.city="",this.stateId="",this.stateName="",this.zipCode="",this.apartmentNo=""}toMap(){const t={};return t.name_on_card=this.nameOnCard,t.card_no=this.cardNo,t.old_card_no=this.oldCardNo,t.cvc=this.cvv,t.expiry_date=this.expiryDate,t.month=this.expiryMonth,t.year=this.expiryYear,t.payment_method_nonce=this.paymentMethodNonce,t.user_id=this.userId,t.street_name=this.streetName,t.city=this.city,t.state_id=this.stateId,t.state_name=this.stateName,t.zip_code=this.zipCode,t.apartment_no=this.apartmentNo,t}}class h extends y{constructor(){super(...arguments),this.id="",this.name="",this.status="",this.addedDate="",this.addedUserId="",this.updatedDate="",this.updatedUserId="",this.updatedFlag="",this.addedDateStr=""}init(t,e,s,i,d,r,n,u,a){return this.id=t,this.name=e,this.status=s,this.addedDate=i,this.addedUserId=d,this.updatedDate=r,this.updatedUserId=n,this.updatedFlag=u,this.addedDateStr=a,this}getPrimaryKey(){return this.id}toMap(t){const e={};return e.id=t.id,e.name=t.name,e.status=t.status,e.added_date=t.addedDate,e.added_user_id=t.addedUserId,e.updated_date=t.updatedDate,e.updated_user_id=t.updatedUserId,e.updated_flag=t.updatedFlag,e.added_date_str=t.addedDateStr,e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new h().init(t.id,t.name,t.status,t.addedDate,t.addedUserId,t.updatedDate,t.updatedUserId,t.updatedFlag,t.addedDateStr)}fromMapList(t){const e=[];for(const s in t)s!=null&&e.push(this.fromMap(s));return e}}const M=g(o=>_(`user/${o}`,()=>{const t=l({value:!1}),e=l(new f),s=l({value:!1});let i=30,d=0;function r(a){var m,p;e!=null&&e.data!=null&&e.data.length>0&&d!=0?(a.data!=null&&a.data.length>0?(((m=a.data)==null?void 0:m.length)<i?t.value=!0:t.value=!1,e.data.push(...a.data)):t.value=!0,e.code=a.code,e.status=a.status,e.message=a.message):(((p=a.data)==null?void 0:p.length)<i||a.data==null?t.value=!0:t.value=!1,e.data=a.data,e.code=a.code,e.status=a.status,e.message=a.message),e!=null&&e.data!=null&&(d=e.data.length)}async function n(){s.value=!0;const a=await c.getUserStateList(new h,i,d);r(a),s.value=!1}async function u(){d=0,s.value=!0;const a=await c.getUserStateList(new h,i,d);r(a),s.value=!1}return{isNoMoreRecord:t,userStateList:e,loading:s,limit:i,offset:d,loadUserStateList:n,resetUserStateList:u}}));export{I as C,M as u};
