import{C as Ie,f as q,E as Te,_ as R,a as c,b as l,c as g,F as Ye,d as Ce}from"./index.esm.js";import Xe from"./PsLabel2.js";import{u as Qe}from"./ProductStore.js";import{P as Ze}from"./PsValueStore.js";import{P as pe}from"./ps_constants.js";import{O as M,r as et,o as tt,c as rt,a as k,b as he,w as ge,p as ve,t as me,g as nt}from"./app.js";import{u as it,U as ot}from"./UserUnReadMessageParameterHolder.js";import{_ as st}from"./plugin-vue_export-helper.js";import"./ProductParameterHolder.js";import"./PsApiService2.js";import"./Product.js";import"./PsObject.js";import"./DefaultPhoto.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";import"./ItemLocationTownship.js";import"./User.js";import"./RatingDetail.js";import"./ApiStatus.js";import"./PsSepetetedStore.js";function at(e){return Array.prototype.slice.call(e)}function Ee(e){return new Promise(function(t,r){e.onsuccess=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function U(e,t,r){var n,i=new Promise(function(o,s){n=e[t].apply(e,r),Ee(n).then(o,s)});return i.request=n,i}function ut(e,t,r){var n=U(e,t,r);return n.then(function(i){if(!!i)return new D(i,n.request)})}function x(e,t,r){r.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(i){this[t][n]=i}})})}function Z(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return U(this[t],i,arguments)})})}function V(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})})}function Ae(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return ut(this[t],i,arguments)})})}function E(e){this._index=e}x(E,"_index",["name","keyPath","multiEntry","unique"]);Z(E,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ae(E,"_index",IDBIndex,["openCursor","openKeyCursor"]);function D(e,t){this._cursor=e,this._request=t}x(D,"_cursor",["direction","key","primaryKey","value"]);Z(D,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(D.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,r),Ee(t._request).then(function(n){if(!!n)return new D(n,t._request)})})})});function v(e){this._store=e}v.prototype.createIndex=function(){return new E(this._store.createIndex.apply(this._store,arguments))};v.prototype.index=function(){return new E(this._store.index.apply(this._store,arguments))};x(v,"_store",["name","keyPath","indexNames","autoIncrement"]);Z(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ae(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);V(v,"_store",IDBObjectStore,["deleteIndex"]);function _(e){this._tx=e,this.complete=new Promise(function(t,r){e.oncomplete=function(){t()},e.onerror=function(){r(e.error)},e.onabort=function(){r(e.error)}})}_.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))};x(_,"_tx",["objectStoreNames","mode"]);V(_,"_tx",IDBTransaction,["abort"]);function F(e,t,r){this._db=e,this.oldVersion=t,this.transaction=new _(r)}F.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))};x(F,"_db",["name","version","objectStoreNames"]);V(F,"_db",IDBDatabase,["deleteObjectStore","close"]);function H(e){this._db=e}H.prototype.transaction=function(){return new _(this._db.transaction.apply(this._db,arguments))};x(H,"_db",["name","version","objectStoreNames"]);V(H,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(e){[v,E].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var r=at(arguments),n=r[r.length-1],i=this._store||this._index,o=i[e].apply(i,r.slice(0,-1));o.onsuccess=function(){n(o.result)}})})});[E,v].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(o){n.iterateCursor(t,function(s){if(!s){o(i);return}if(i.push(s.value),r!==void 0&&i.length==r){o(i);return}s.continue()})})})});function ee(e,t,r){var n=U(indexedDB,"open",[e,t]),i=n.request;return i&&(i.onupgradeneeded=function(o){r&&r(new F(i.result,o.oldVersion,i.transaction))}),n.then(function(o){return new H(o)})}function W(e){return U(indexedDB,"deleteDatabase",[e])}var ct="@firebase/installations",Me="0.4.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe=1e4,xe="w:"+Me,Oe="FIS_v2",lt="https://firebaseinstallations.googleapis.com/v1",ft=60*60*1e3,dt="installations",pt="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y,ht=(y={},y["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',y["not-registered"]="Firebase Installation is not registered.",y["installation-not-found"]="Firebase Installation not found.",y["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',y["app-offline"]="Could not process request. Application offline.",y["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",y),b=new Te(dt,pt,ht);function Ne(e){return e instanceof Ye&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t=e.projectId;return lt+"/projects/"+t+"/installations"}function De(e){return{token:e.token,requestStatus:2,expiresIn:gt(e.expiresIn),creationTime:Date.now()}}function re(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,t.json()];case 1:return r=i.sent(),n=r.error,[2,b.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function Re(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _e(e,t){var r=t.refreshToken,n=Re(e);return n.append("Authorization",vt(r)),n}function ne(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,e()];case 1:return t=r.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}})})}function gt(e){return Number(e.replace("s","000"))}function vt(e){return Oe+" "+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){var r=t.fid;return c(this,void 0,void 0,function(){var n,i,o,s,a,u,f;return l(this,function(d){switch(d.label){case 0:return n=te(e),i=Re(e),o={fid:r,authVersion:Oe,appId:e.appId,sdkVersion:xe},s={method:"POST",headers:i,body:JSON.stringify(o)},[4,ne(function(){return fetch(n,s)})];case 1:return a=d.sent(),a.ok?[4,a.json()]:[3,3];case 2:return u=d.sent(),f={fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:De(u.authToken)},[2,f];case 3:return[4,re("Create Installation",a)];case 4:throw d.sent()}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){return new Promise(function(t){setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){var t=btoa(String.fromCharCode.apply(String,Ce(e)));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt=/^[cdef][\w-]{21}$/,X="";function yt(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var r=kt(e);return wt.test(r)?r:X}catch{return X}}function kt(e){var t=bt(e);return t.substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return e.appName+"!"+e.appId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P=new Map;function qe(e,t){var r=O(e);Ke(r,t),Tt(r,t)}function St(e,t){Be();var r=O(e),n=P.get(r);n||(n=new Set,P.set(r,n)),n.add(t)}function It(e,t){var r=O(e),n=P.get(r);!n||(n.delete(t),n.size===0&&P.delete(r),Le())}function Ke(e,t){var r,n,i=P.get(e);if(!!i)try{for(var o=R(i),s=o.next();!s.done;s=o.next()){var a=s.value;a(t)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}function Tt(e,t){var r=Be();r&&r.postMessage({key:e,fid:t}),Le()}var S=null;function Be(){return!S&&"BroadcastChannel"in self&&(S=new BroadcastChannel("[Firebase] FID Change"),S.onmessage=function(e){Ke(e.data.key,e.data.fid)}),S}function Le(){P.size===0&&S&&(S.close(),S=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct="firebase-installations-database",Et=1,I="firebase-installations-store",$=null;function ie(){return $||($=ee(Ct,Et,function(e){switch(e.oldVersion){case 0:e.createObjectStore(I)}})),$}function K(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s;return l(this,function(a){switch(a.label){case 0:return r=O(e),[4,ie()];case 1:return n=a.sent(),i=n.transaction(I,"readwrite"),o=i.objectStore(I),[4,o.get(r)];case 2:return s=a.sent(),[4,o.put(t,r)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),(!s||s.fid!==t.fid)&&qe(e,t.fid),[2,t]}})})}function oe(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return t=O(e),[4,ie()];case 1:return r=i.sent(),n=r.transaction(I,"readwrite"),[4,n.objectStore(I).delete(t)];case 2:return i.sent(),[4,n.complete];case 3:return i.sent(),[2]}})})}function j(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return r=O(e),[4,ie()];case 1:return n=u.sent(),i=n.transaction(I,"readwrite"),o=i.objectStore(I),[4,o.get(r)];case 2:return s=u.sent(),a=t(s),a!==void 0?[3,4]:[4,o.delete(r)];case 3:return u.sent(),[3,6];case 4:return[4,o.put(a,r)];case 5:u.sent(),u.label=6;case 6:return[4,i.complete];case 7:return u.sent(),a&&(!s||s.fid!==a.fid)&&qe(e,a.fid),[2,a]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return[4,j(e,function(o){var s=At(o),a=Mt(e,s);return t=a.registrationPromise,a.installationEntry})];case 1:return r=i.sent(),r.fid!==X?[3,3]:(n={},[4,t]);case 2:return[2,(n.installationEntry=i.sent(),n)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}})})}function At(e){var t=e||{fid:yt(),registrationStatus:0};return Ue(t)}function Mt(e,t){if(t.registrationStatus===0){if(!navigator.onLine){var r=Promise.reject(b.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=Pt(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:xt(e)}:{installationEntry:t}}function Pt(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,mt(e,t)];case 1:return r=i.sent(),[2,K(e,r)];case 2:return n=i.sent(),Ne(n)&&n.customData.serverCode===409?[4,oe(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,K(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw n;case 7:return[2]}})})}function xt(e){return c(this,void 0,void 0,function(){var t,r,n,i;return l(this,function(o){switch(o.label){case 0:return[4,be(e)];case 1:t=o.sent(),o.label=2;case 2:return t.registrationStatus!==1?[3,5]:[4,je(100)];case 3:return o.sent(),[4,be(e)];case 4:return t=o.sent(),[3,2];case 5:return t.registrationStatus!==0?[3,7]:[4,se(e)];case 6:return r=o.sent(),n=r.installationEntry,i=r.registrationPromise,i?[2,i]:[2,n];case 7:return[2,t]}})})}function be(e){return j(e,function(t){if(!t)throw b.create("installation-not-found");return Ue(t)})}function Ue(e){return Ot(e)?{fid:e.fid,registrationStatus:0}:e}function Ot(e){return e.registrationStatus===1&&e.registrationTime+Pe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){var r=e.appConfig,n=e.platformLoggerProvider;return c(this,void 0,void 0,function(){var i,o,s,a,u,f,d,A;return l(this,function(w){switch(w.label){case 0:return i=Dt(r,t),o=_e(r,t),s=n.getImmediate({optional:!0}),s&&o.append("x-firebase-client",s.getPlatformInfoString()),a={installation:{sdkVersion:xe}},u={method:"POST",headers:o,body:JSON.stringify(a)},[4,ne(function(){return fetch(i,u)})];case 1:return f=w.sent(),f.ok?[4,f.json()]:[3,3];case 2:return d=w.sent(),A=De(d),[2,A];case 3:return[4,re("Generate Auth Token",f)];case 4:throw w.sent()}})})}function Dt(e,t){var r=t.fid;return te(e)+"/"+r+"/authTokens:generate"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return[4,j(e.appConfig,function(a){if(!Ve(a))throw b.create("not-registered");var u=a.authToken;if(!t&&jt(u))return a;if(u.requestStatus===1)return r=Rt(e,t),a;if(!navigator.onLine)throw b.create("app-offline");var f=Kt(a);return r=_t(e,f),f})];case 1:return n=s.sent(),r?[4,r]:[3,3];case 2:return o=s.sent(),[3,4];case 3:o=n.authToken,s.label=4;case 4:return i=o,[2,i]}})})}function Rt(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,we(e.appConfig)];case 1:r=i.sent(),i.label=2;case 2:return r.authToken.requestStatus!==1?[3,5]:[4,je(100)];case 3:return i.sent(),[4,we(e.appConfig)];case 4:return r=i.sent(),[3,2];case 5:return n=r.authToken,n.requestStatus===0?[2,ae(e,t)]:[2,n]}})})}function we(e){return j(e,function(t){if(!Ve(t))throw b.create("not-registered");var r=t.authToken;return Bt(r)?g(g({},t),{authToken:{requestStatus:0}}):t})}function _t(e,t){return c(this,void 0,void 0,function(){var r,i,n,i;return l(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,Nt(e,t)];case 1:return r=o.sent(),i=g(g({},t),{authToken:r}),[4,K(e.appConfig,i)];case 2:return o.sent(),[2,r];case 3:return n=o.sent(),Ne(n)&&(n.customData.serverCode===401||n.customData.serverCode===404)?[4,oe(e.appConfig)]:[3,5];case 4:return o.sent(),[3,7];case 5:return i=g(g({},t),{authToken:{requestStatus:0}}),[4,K(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw n;case 8:return[2]}})})}function Ve(e){return e!==void 0&&e.registrationStatus===2}function jt(e){return e.requestStatus===2&&!qt(e)}function qt(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ft}function Kt(e){var t={requestStatus:1,requestTime:Date.now()};return g(g({},e),{authToken:t})}function Bt(e){return e.requestStatus===1&&e.requestTime+Pe<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return[4,se(e.appConfig)];case 1:return t=i.sent(),r=t.installationEntry,n=t.registrationPromise,n?n.catch(console.error):ae(e).catch(console.error),[2,r.fid]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r;return l(this,function(n){switch(n.label){case 0:return[4,Vt(e.appConfig)];case 1:return n.sent(),[4,ae(e,t)];case 2:return r=n.sent(),[2,r.token]}})})}function Vt(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,se(e)];case 1:return t=r.sent().registrationPromise,t?[4,t]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return r=Ht(e,t),n=_e(e,t),i={method:"DELETE",headers:n},[4,ne(function(){return fetch(r,i)})];case 1:return o=s.sent(),o.ok?[3,3]:[4,re("Delete Installation",o)];case 2:throw s.sent();case 3:return[2]}})})}function Ht(e,t){var r=t.fid;return te(e)+"/"+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return c(this,void 0,void 0,function(){var t,r;return l(this,function(n){switch(n.label){case 0:return t=e.appConfig,[4,j(t,function(i){if(!(i&&i.registrationStatus===0))return i})];case 1:if(r=n.sent(),!r)return[3,6];if(r.registrationStatus!==1)return[3,2];throw b.create("delete-pending-registration");case 2:if(r.registrationStatus!==2)return[3,6];if(navigator.onLine)return[3,3];throw b.create("app-offline");case 3:return[4,Ft(t,r)];case 4:return n.sent(),[4,oe(t)];case 5:n.sent(),n.label=6;case 6:return[2]}})})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){var r=e.appConfig;return St(r,t),function(){It(r,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){var t,r;if(!e||!e.options)throw G("App Configuration");if(!e.name)throw G("App Name");var n=["projectId","apiKey","appId"];try{for(var i=R(n),o=i.next();!o.done;o=i.next()){var s=o.value;if(!e.options[s])throw G(s)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function G(e){return b.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){var t="installations";e.INTERNAL.registerComponent(new Ie(t,function(r){var n=r.getProvider("app").getImmediate(),i=Gt(n),o=r.getProvider("platform-logger"),s={appConfig:i,platformLoggerProvider:o},a={app:n,getId:function(){return Lt(s)},getToken:function(u){return Ut(s,u)},delete:function(){return Wt(s)},onIdChange:function(u){return $t(s,u)}};return a},"PUBLIC")),e.registerVersion(ct,Me)}Jt(q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h,zt=(h={},h["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',h["only-available-in-window"]="This method is available in a Window context.",h["only-available-in-sw"]="This method is available in a service worker context.",h["permission-default"]="The notification permission was not granted and dismissed instead.",h["permission-blocked"]="The notification permission was not granted and blocked instead.",h["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",h["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",h["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",h["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",h["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",h["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",h["token-update-no-token"]="FCM returned no token when updating the user to push.",h["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",h["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",h["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",h["invalid-vapid-key"]="The public VAPID key must be a string.",h["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",h),p=new Te("messaging","Messaging",zt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt="/firebase-messaging-sw.js",Xt="/firebase-cloud-messaging-push-scope",B="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Qt="https://fcmregistrations.googleapis.com/v1",Fe="FCM_MSG",Zt="FirebaseMessaging: ",er="google.c.a.e",He="google.c.a.c_id",tr="google.c.a.ts",rr="google.c.a.c_l",nr=1e3,ir=3e3;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var T;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(T||(T={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){var t=new Uint8Array(e),r=btoa(String.fromCharCode.apply(String,Ce(t)));return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function or(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length),o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J="fcm_token_details_db",sr=5,ye="fcm_token_object_Store";function ar(e){return c(this,void 0,void 0,function(){var t,r,n,i,o=this;return l(this,function(s){switch(s.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=s.sent(),r=t.map(function(a){return a.name}),!r.includes(J))return[2,null];s.label=2;case 2:return n=null,[4,ee(J,sr,function(a){return c(o,void 0,void 0,function(){var u,f,d,d,d,A;return l(this,function(w){switch(w.label){case 0:return a.oldVersion<2?[2]:a.objectStoreNames.contains(ye)?(u=a.transaction.objectStore(ye),[4,u.index("fcmSenderId").get(e)]):[2];case 1:return f=w.sent(),[4,u.clear()];case 2:if(w.sent(),!f)return[2];if(a.oldVersion===2){if(d=f,!d.auth||!d.p256dh||!d.endpoint)return[2];n={token:d.fcmToken,createTime:(A=d.createTime)!==null&&A!==void 0?A:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:m(d.vapidKey)}}}else a.oldVersion===3?(d=f,n={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:m(d.auth),p256dh:m(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:m(d.vapidKey)}}):a.oldVersion===4&&(d=f,n={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:m(d.auth),p256dh:m(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:m(d.vapidKey)}});return[2]}})})})];case 3:return i=s.sent(),i.close(),[4,W(J)];case 4:return s.sent(),[4,W("fcm_vapid_details_db")];case 5:return s.sent(),[4,W("undefined")];case 6:return s.sent(),[2,ur(n)?n:null]}})})}function ur(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr="firebase-messaging-database",lr=1,C="firebase-messaging-store",z=null;function ue(){return z||(z=ee(cr,lr,function(e){switch(e.oldVersion){case 0:e.createObjectStore(C)}})),z}function L(e){return c(this,void 0,void 0,function(){var t,r,n,i;return l(this,function(o){switch(o.label){case 0:return t=le(e),[4,ue()];case 1:return r=o.sent(),[4,r.transaction(C).objectStore(C).get(t)];case 2:return n=o.sent(),n?[2,n]:[3,3];case 3:return[4,ar(e.appConfig.senderId)];case 4:return i=o.sent(),i?[4,ce(e,i)]:[3,6];case 5:return o.sent(),[2,i];case 6:return[2]}})})}function ce(e,t){return c(this,void 0,void 0,function(){var r,n,i;return l(this,function(o){switch(o.label){case 0:return r=le(e),[4,ue()];case 1:return n=o.sent(),i=n.transaction(C,"readwrite"),[4,i.objectStore(C).put(t,r)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}})})}function fr(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return t=le(e),[4,ue()];case 1:return r=i.sent(),n=r.transaction(C,"readwrite"),[4,n.objectStore(C).delete(t)];case 2:return i.sent(),[4,n.complete];case 3:return i.sent(),[2]}})})}function le(e){var t=e.appConfig;return t.appId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:return[4,de(e)];case 1:r=f.sent(),n=$e(t),i={method:"POST",headers:r,body:JSON.stringify(n)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig),i)];case 3:return s=f.sent(),[4,s.json()];case 4:return o=f.sent(),[3,6];case 5:throw a=f.sent(),p.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,p.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw p.create("token-subscribe-no-token");return[2,o.token]}})})}function pr(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:return[4,de(e)];case 1:r=f.sent(),n=$e(t.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig)+"/"+t.token,i)];case 3:return s=f.sent(),[4,s.json()];case 4:return o=f.sent(),[3,6];case 5:throw a=f.sent(),p.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,p.create("token-update-failed",{errorInfo:u});if(!o.token)throw p.create("token-update-no-token");return[2,o.token]}})})}function We(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return[4,de(e)];case 1:r=u.sent(),n={method:"DELETE",headers:r},u.label=2;case 2:return u.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig)+"/"+t,n)];case 3:return i=u.sent(),[4,i.json()];case 4:if(o=u.sent(),o.error)throw s=o.error.message,p.create("token-unsubscribe-failed",{errorInfo:s});return[3,6];case 5:throw a=u.sent(),p.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}})})}function fe(e){var t=e.projectId;return Qt+"/projects/"+t+"/registrations"}function de(e){var t=e.appConfig,r=e.installations;return c(this,void 0,void 0,function(){var n;return l(this,function(i){switch(i.label){case 0:return[4,r.getToken()];case 1:return n=i.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})]}})})}function $e(e){var t=e.p256dh,r=e.auth,n=e.endpoint,i=e.vapidKey,o={web:{endpoint:n,auth:r,p256dh:t}};return i!==B&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr=7*24*60*60*1e3;function Q(e,t,r){return c(this,void 0,void 0,function(){var n,i,o,s;return l(this,function(a){switch(a.label){case 0:if(Notification.permission!=="granted")throw p.create("permission-blocked");return[4,vr(t,r)];case 1:return n=a.sent(),[4,L(e)];case 2:return i=a.sent(),o={vapidKey:r,swScope:t.scope,endpoint:n.endpoint,auth:m(n.getKey("auth")),p256dh:m(n.getKey("p256dh"))},i?[3,3]:[2,ke(e,o)];case 3:if(mr(i.subscriptionOptions,o))return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,We(e,i.token)];case 5:return a.sent(),[3,7];case 6:return s=a.sent(),console.warn(s),[3,7];case 7:return[2,ke(e,o)];case 8:return Date.now()>=i.createTime+hr?[2,gr({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}})})}function N(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,L(e)];case 1:return r=i.sent(),r?[4,We(e,r.token)]:[3,4];case 2:return i.sent(),[4,fr(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return n=i.sent(),n?[2,n.unsubscribe()]:[2,!0]}})})}function gr(e,t,r){return c(this,void 0,void 0,function(){var n,i,o;return l(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,pr(t,e)];case 1:return n=s.sent(),i=g(g({},e),{token:n,createTime:Date.now()}),[4,ce(t,i)];case 2:return s.sent(),[2,n];case 3:return o=s.sent(),[4,N(t,r)];case 4:throw s.sent(),o;case 5:return[2]}})})}function ke(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,dr(e,t)];case 1:return r=i.sent(),n={token:r,createTime:Date.now(),subscriptionOptions:t},[4,ce(e,n)];case 2:return i.sent(),[2,n.token]}})})}function vr(e,t){return c(this,void 0,void 0,function(){var r;return l(this,function(n){switch(n.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return r=n.sent(),r?[2,r]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:or(t)})]}})})}function mr(e,t){var r=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return r&&n&&i&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){var t={from:e.from,collapseKey:e.collapse_key};return wr(t,e),yr(t,e),kr(t,e),t}function wr(e,t){if(!!t.notification){e.notification={};var r=t.notification.title;r&&(e.notification.title=r);var n=t.notification.body;n&&(e.notification.body=n);var i=t.notification.image;i&&(e.notification.image=i)}}function yr(e,t){!t.data||(e.data=t.data)}function kr(e,t){if(!!t.fcmOptions){e.fcmOptions={};var r=t.fcmOptions.link;r&&(e.fcmOptions.link=r);var n=t.fcmOptions.analytics_label;n&&(e.fcmOptions.analyticsLabel=n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return typeof e=="object"&&!!e&&He in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){return new Promise(function(t){setTimeout(t,e)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=function(){function e(t){var r=this;this.firebaseDependencies=t,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",function(n){n.waitUntil(r.onPush(n))}),self.addEventListener("pushsubscriptionchange",function(n){n.waitUntil(r.onSubChange(n))}),self.addEventListener("notificationclick",function(n){n.waitUntil(r.onNotificationClick(n))})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(t){if(this.isOnBackgroundMessageUsed=!1,!t||typeof t!="function")throw p.create("invalid-bg-handler");this.bgMessageHandler=t},e.prototype.onBackgroundMessage=function(t){var r=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=t,function(){r.bgMessageHandler=null}},e.prototype.getToken=function(){var t,r;return c(this,void 0,void 0,function(){var n;return l(this,function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,L(this.firebaseDependencies)];case 1:n=i.sent(),this.vapidKey=(r=(t=n==null?void 0:n.subscriptionOptions)===null||t===void 0?void 0:t.vapidKey)!==null&&r!==void 0?r:B,i.label=2;case 2:return[2,Q(this.firebaseDependencies,self.registration,this.vapidKey)]}})})},e.prototype.deleteToken=function(){return N(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw p.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(t){if(this.vapidKey!==null)throw p.create("use-vapid-key-after-get-token");if(typeof t!="string"||t.length===0)throw p.create("invalid-vapid-key");this.vapidKey=t},e.prototype.useServiceWorker=function(){throw p.create("only-available-in-window")},e.prototype.onMessage=function(){throw p.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw p.create("only-available-in-window")},e.prototype.onPush=function(t){return c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return r=Tr(t),r?[4,Je()]:(console.debug(Zt+"failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return n=s.sent(),Er(n)?[2,Ar(n,r)]:(i=!1,r.notification?[4,Mr(Ir(r))]:[3,3]);case 2:s.sent(),i=!0,s.label=3;case 3:return i===!0&&this.isOnBackgroundMessageUsed===!1?[2]:(this.bgMessageHandler&&(o=br(r),typeof this.bgMessageHandler=="function"?this.bgMessageHandler(o):this.bgMessageHandler.next(o)),[4,Se(nr)]);case 4:return s.sent(),[2]}})})},e.prototype.onSubChange=function(t){var r,n;return c(this,void 0,void 0,function(){var i,o;return l(this,function(s){switch(s.label){case 0:return i=t.newSubscription,i?[3,2]:[4,N(this.firebaseDependencies,self.registration)];case 1:return s.sent(),[2];case 2:return[4,L(this.firebaseDependencies)];case 3:return o=s.sent(),[4,N(this.firebaseDependencies,self.registration)];case 4:return s.sent(),[4,Q(this.firebaseDependencies,self.registration,(n=(r=o==null?void 0:o.subscriptionOptions)===null||r===void 0?void 0:r.vapidKey)!==null&&n!==void 0?n:B)];case 5:return s.sent(),[2]}})})},e.prototype.onNotificationClick=function(t){var r,n;return c(this,void 0,void 0,function(){var i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:if(i=(n=(r=t.notification)===null||r===void 0?void 0:r.data)===null||n===void 0?void 0:n[Fe],i){if(t.action)return[2]}else return[2];return t.stopImmediatePropagation(),t.notification.close(),o=Pr(i),o?(s=new URL(o,self.location.href),a=new URL(self.location.origin),s.host!==a.host?[2]:[4,Cr(s)]):[2];case 1:return u=f.sent(),u?[3,4]:[4,self.clients.openWindow(o)];case 2:return u=f.sent(),[4,Se(ir)];case 3:return f.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=f.sent(),f.label=6;case 6:return u?(i.messageType=T.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,[2,u.postMessage(i)]):[2]}})})},e}();function Ir(e){var t,r=g({},e.notification);return r.data=(t={},t[Fe]=e,t),r}function Tr(e){var t=e.data;if(!t)return null;try{return t.json()}catch{return null}}function Cr(e){return c(this,void 0,void 0,function(){var t,r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return[4,Je()];case 1:t=u.sent();try{for(r=R(t),n=r.next();!n.done;n=r.next())if(i=n.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(f){s={error:f}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}})})}function Er(e){return e.some(function(t){return t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://")})}function Ar(e,t){var r,n;t.isFirebaseMessaging=!0,t.messageType=T.PUSH_RECEIVED;try{for(var i=R(e),o=i.next();!o.done;o=i.next()){var s=o.value;s.postMessage(t)}}catch(a){r={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}function Je(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Mr(e){var t,r=e.actions,n=Notification.maxActions;return r&&n&&r.length>n&&console.warn("This browser only supports "+n+" actions. The remaining actions will not be displayed."),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function Pr(e){var t,r,n,i=(r=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&r!==void 0?r:(n=e.notification)===null||n===void 0?void 0:n.click_action;return i||(Ge(e.data)?self.location.origin:null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=function(){function e(t){var r=this;this.firebaseDependencies=t,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",function(n){return r.messageEventListener(n)})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return r=t.data,r.isFirebaseMessaging?(this.onMessageCallback&&r.messageType===T.PUSH_RECEIVED&&(typeof this.onMessageCallback=="function"?this.onMessageCallback(Nr(Object.assign({},r))):this.onMessageCallback.next(Object.assign({},r))),n=r.data,Ge(n)&&n[er]==="1"?[4,this.logEvent(r.messageType,n)]:[3,2]):[2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return Notification.permission!=="default"?[3,2]:[4,Notification.requestPermission()];case 1:r.sent(),r.label=2;case 2:if(Notification.permission!=="granted")throw p.create("permission-blocked");return[4,this.updateVapidKey(t==null?void 0:t.vapidKey)];case 3:return r.sent(),[4,this.updateSwReg(t==null?void 0:t.serviceWorkerRegistration)];case 4:return r.sent(),[2,Q(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}})})},e.prototype.updateVapidKey=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){return t?this.vapidKey=t:this.vapidKey||(this.vapidKey=B),[2]})})},e.prototype.updateSwReg=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return!t&&!this.swRegistration?[4,this.registerDefaultSw()]:[3,2];case 1:r.sent(),r.label=2;case 2:if(!t&&!!this.swRegistration)return[2];if(!(t instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");return this.swRegistration=t,[2]}})})},e.prototype.registerDefaultSw=function(){return c(this,void 0,void 0,function(){var t,r;return l(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=this,[4,navigator.serviceWorker.register(Yt,{scope:Xt})];case 1:return t.swRegistration=n.sent(),this.swRegistration.update().catch(function(){}),[3,3];case 2:throw r=n.sent(),p.create("failed-service-worker-registration",{browserErrorMessage:r.message});case 3:return[2]}})})},e.prototype.deleteToken=function(){return c(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:return[2,N(this.firebaseDependencies,this.swRegistration)]}})})},e.prototype.requestPermission=function(){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return Notification.permission==="granted"?[2]:[4,Notification.requestPermission()];case 1:if(t=r.sent(),t==="granted")return[2];throw t==="denied"?p.create("permission-blocked"):p.create("permission-default")}})})},e.prototype.usePublicVapidKey=function(t){if(this.vapidKey!==null)throw p.create("use-vapid-key-after-get-token");if(typeof t!="string"||t.length===0)throw p.create("invalid-vapid-key");this.vapidKey=t},e.prototype.useServiceWorker=function(t){if(!(t instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");if(this.swRegistration)throw p.create("use-sw-after-get-token");this.swRegistration=t},e.prototype.onMessage=function(t){var r=this;return this.onMessageCallback=t,function(){r.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw p.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw p.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(t,r){return c(this,void 0,void 0,function(){var n,i;return l(this,function(o){switch(o.label){case 0:return n=Or(t),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return i=o.sent(),i.logEvent(n,{message_id:r[He],message_name:r[rr],message_time:r[tr],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})},e}();function Or(e){switch(e){case T.NOTIFICATION_CLICKED:return"notification_open";case T.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}function Nr(e){return delete e.messageType,delete e.isFirebaseMessaging,e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){var t,r;if(!e||!e.options)throw Y("App Configuration Object");if(!e.name)throw Y("App Name");var n=["projectId","apiKey","appId","messagingSenderId"],i=e.options;try{for(var o=R(n),s=o.next();!s.done;s=o.next()){var a=s.value;if(!i[a])throw Y(a)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function Y(e){return p.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr="messaging";function _r(e){var t=e.getProvider("app").getImmediate(),r=Dr(t),n=e.getProvider("installations").getImmediate(),i=e.getProvider("analytics-internal"),o={app:t,appConfig:r,installations:n,analyticsProvider:i};if(!ze())throw p.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new Sr(o):new xr(o)}var jr={isSupported:ze};q.INTERNAL.registerComponent(new Ie(Rr,_r,"PUBLIC").setServiceProps(jr));function ze(){return self&&"ServiceWorkerGlobalScope"in self?Kr():qr()}function qr(){return"indexedDB"in window&&indexedDB!==null&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Kr(){return"indexedDB"in self&&indexedDB!==null&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}const Br={name:"PsNotificationBox",components:{PsLabel:Xe},setup(){const e=it(),t=new ot;return t.userId=localStorage.loginUserId,{userunreadmsgStore:e,userUnreadHolder:t}},data(){return{title:"Test",subject:"Test",flag:"Test",messaging:q.messaging.isSupported()?q.messaging():null,currentMessage:"Test",requireInteraction:!0,notify:!1}},methods:{closed(){this.notify=!1},async clicked(e){if((e=="approval"||e=="verify_blue_mark")&&M.Inertia.get(route("fe_profile")),e=="follow"&&M.Inertia.get(route("fe_follower_list"),{userId:localStorage.loginUserId}),e=="fe_broadcast"&&M.Inertia.get(route("fe_notification_list")),e=="review"&&M.Inertia.get(route("fe_review_list"),{user_id:localStorage.loginUserId}),e=="chat"||e=="bought"){const t=Qe(),n=Ze().getLoginUserId(),i=this.currentMessage.data.item_id;await t.loadItem(i,n);let o=pe.CHAT_FROM_BUYER.toString();n==this.currentMessage.data.buyer_id&&(o=pe.CHAT_FROM_SELLER.toString()),M.Inertia.get(route("fe_chat"),{buyer_user_id:this.currentMessage.data.buyer_id,seller_user_id:this.currentMessage.data.seller_id,item_id:this.currentMessage.data.item_id,chat_flag:o})}e=="subscribe"&&M.Inertia.get(route("fe_item_detail"),{item_id:this.currentMessage.data.item_id})},receiveMessage(){try{if(!this.messaging)return;this.messaging.onMessage(async e=>{this.currentMessage=e,console.log("Message received. ",this.currentMessag),await this.userunreadmsgStore.postUserUnreadMessageCount(this.userUnreadHolder),this.setNotificationBoxForm(e.notification.title,e.notification.body,e.data.flag),this.notify=!0,setTimeout(()=>{this.notify=!1},1e4)})}catch(e){console.log(e)}},setNotificationBoxForm(e,t,r){this.title=e,this.subject=t,this.flag=r}},created(){this.receiveMessage()}},Lr={key:0},Ur={id:"notification-box",class:"overflow-hidden flex items-end w-mobile sm:w-median lg:w-64 justify-between leading-none bg-fePrimary-000 dark_bg-feAchromatic-900 rounded-t-xl lg:rounded-t-2xl top-0 fixed"},Vr={class:"me-2 w-8 sm:w-10 my-auto"},Fr=["src"],Hr={class:"ms-2 mt-1 text-sm flex-grow"},Wr={class:"flex"};function $r(e,t,r,n,i,o){const s=et("ps-label");return i.notify?(tt(),rt("div",Lr,[k("div",Ur,[k("a",{href:"#",id:"notification-close",onClick:t[0]||(t[0]=a=>o.closed()),title:"close"},"x"),k("div",{class:"bg-fePrimary-000 lg:px-2 py-1 px-1 h-18 cursor-pointer flex-grow flex flex-row items-center no-underline text-feAchromatic-900",onClick:t[1]||(t[1]=a=>o.clicked(i.flag))},[k("div",Vr,[k("img",{alt:"Placeholder",class:"rounded-md w-auto sm:h-10 h-8 cursor-pointer object-cover",width:"50px",height:"50px",src:e.$page.props.thumb1xUrl+"/"+e.$page.props.backendLogo.img_path},null,8,Fr)]),k("p",Hr,[k("span",Wr,[he(s,{class:"truncate lg:text-sm text-xs font-medium"},{default:ge(()=>[ve(me(i.title),1)]),_:1})]),he(s,{class:"font-medium text-xxs lg:text-xs",textColor:"text-feSecondary-400 dark_text-feAchromatic-500"},{default:ge(()=>[ve(me(i.subject),1)]),_:1})])])])])):nt("",!0)}var gn=st(Br,[["render",$r]]);export{gn as default};
