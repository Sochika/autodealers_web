import{P as u}from"./PsObject.a17ef38f.js";class a extends u{constructor(){super(...arguments),this.id="",this.name="",this.description="",this.status="",this.addedDateStr=""}init(t,s,r,i,e){return this.id=t,this.name=s,this.description=r,this.status=i,this.addedDateStr=e,this}getPrimaryKey(){return this.id}toMap(t){const s={};return s.id=t.id,s.name=t.name,s.description=t.description,s.status=t.status,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let r=0;r<t.length;r++)t[r]!=null&&s.push(this.toMap(t[r]));return s}fromMap(t){return new a().init(t.id,t.name,t.description,t.status,t.added_date_str)}fromMapList(t){const s=[];for(const r in t)r!=null&&s.push(this.fromMap(r));return s}}class d extends u{constructor(){super(...arguments),this.coreKeysId="",this.name="",this.description="",this.status="",this.addedDateStr=""}init(t,s,r,i,e){return this.coreKeysId=t,this.name=s,this.description=r,this.status=i,this.addedDateStr=e,this}getPrimaryKey(){return this.coreKeysId}toMap(t){const s={};return s.core_keys_id=t.coreKeysId,s.name=t.name,s.description=t.description,s.status=t.status,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let r=0;r<t.length;r++)t[r]!=null&&s.push(this.toMap(t[r]));return s}fromMap(t){return new d().init(t.core_keys_id,t.name,t.description,t.status,t.added_date_str)}fromMapList(t){const s=[];for(const r in t)r!=null&&s.push(this.fromMap(r));return s}}class p extends u{constructor(){super(...arguments),this.id="",this.paymentId="",this.coreKeysId="",this.value="",this.uiTypeId="",this.shopId="",this.addedDateStr=""}init(t,s,r,i,e,n,o){return this.id=t,this.paymentId=s,this.coreKeysId=r,this.value=i,this.uiTypeId=e,this.shopId=n,this.addedDateStr=o,this}getPrimaryKey(){return this.id}toMap(t){const s={};return s.id=t.id,s.payment_id=t.paymentId,s.core_keys_id=t.coreKeysId,s.value=t.value,s.ui_type_id=t.uiTypeId,s.shop_id=t.shopId,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let r=0;r<t.length;r++)t[r]!=null&&s.push(this.toMap(t[r]));return s}fromMap(t){return new p().init(t.id,t.payment_id,t.core_keys_id,t.value,t.ui_type_id,t.shop_id,t.added_date_str)}fromMapList(t){const s=[];for(const r in t)r!=null&&s.push(this.fromMap(r));return s}}class h extends u{constructor(){super(...arguments),this.type="",this.count="",this.price="",this.status="",this.currencySymbol="",this.currencyShortForm=""}init(t,s,r,i,e,n){return this.type=t,this.count=s,this.price=r,this.status=i,this.currencySymbol=e,this.currencyShortForm=n,this}getPrimaryKey(){return this.type}toMap(t){const s={};return s.type=t.type,s.count=t.count,s.price=t.price,s.status=t.status,s.currency_symbol=t.currencySymbol,s.currency_short_form=t.currencyShortForm,s}toMapList(t){const s=[];for(let r=0;r<t.length;r++)t[r]!=null&&s.push(this.toMap(t[r]));return s}fromMap(t){return new h().init(t.type,t.count,t.price,t.status,t.currency_symbol,t.currency_short_form)}fromMapList(t){const s=[];for(const r in t)r!=null&&s.push(this.fromMap(r));return s}}class m extends u{constructor(){super(...arguments),this.id="",this.paymentId="",this.coreKeysId="",this.shopId="",this.payment=new a,this.coreKey=new d,this.paymentInfo=new p,this.paymentAttributes=new h,this.addedDateStr=""}init(t,s,r,i,e,n,o,y,c){return this.id=t,this.paymentId=s,this.coreKeysId=r,this.shopId=i,this.payment=e,this.coreKey=n,this.paymentInfo=o,this.paymentAttributes=y,this.addedDateStr=c,this}getPrimaryKey(){return this.id}toMap(t){const s={};return s.id=t.id,s.payment_id=t.paymentId,s.coreKeys_id=t.coreKeysId,s.shop_id=t.shopId,s.payment=new a().toMap(t.payment),s.core_key=new d().toMap(t.coreKey),s.payment_info=new p().toMap(t.paymentInfo),s.payment_attributes=new h().toMap(t.paymentAttributes),s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let r=0;r<t.length;r++)t[r]!=null&&s.push(this.toMap(t[r]));return s}fromMap(t){return new m().init(t.id,t.payment_id,t.core_keys_id,t.shop_id,new a().fromMap(t.payment),new d().fromMap(t.core_key),new p().fromMap(t.payment_info),new h().fromMap(t.payment_attributes),t.added_date_str)}fromMapList(t){const s=[];for(const r in t)r!=null&&s.push(this.fromMap(r));return s}}export{a as P,p as a,h as b,m as c};
