import{C as Te,f as q,E as Ie,_ as R,a as c,b as l,c as g,F as Xe,d as Ce,e as Ee}from"./index.esm.159b9749.js";import Qe from"./PsLabel.3935ab2c.js";import{u as Ze}from"./ProductStore.186e332b.js";import{P as et}from"./PsValueStore.08b5513c.js";import{P as pe}from"./ps_constants.deaae373.js";import{O as M,o as tt,c as rt,a as k,b as he,w as ge,q as ve,t as me,g as nt,r as it}from"./app.df1b8390.js";import{u as ot,U as st}from"./UserUnReadMessageParameterHolder.1742bc34.js";import{_ as at}from"./plugin-vue_export-helper.21dcd24c.js";import"./ProductParameterHolder.b3159892.js";import"./PsApiService.317e88ef.js";import"./Product.dc190b28.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./PsSepetetedStore.9a31ac47.js";function ut(e){return Array.prototype.slice.call(e)}function Ae(e){return new Promise(function(t,r){e.onsuccess=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function U(e,t,r){var n,i=new Promise(function(o,s){n=e[t].apply(e,r),Ae(n).then(o,s)});return i.request=n,i}function ct(e,t,r){var n=U(e,t,r);return n.then(function(i){if(!!i)return new D(i,n.request)})}function x(e,t,r){r.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(i){this[t][n]=i}})})}function Z(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return U(this[t],i,arguments)})})}function V(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})})}function Me(e,t,r,n){n.forEach(function(i){i in r.prototype&&(e.prototype[i]=function(){return ct(this[t],i,arguments)})})}function E(e){this._index=e}x(E,"_index",["name","keyPath","multiEntry","unique"]);Z(E,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Me(E,"_index",IDBIndex,["openCursor","openKeyCursor"]);function D(e,t){this._cursor=e,this._request=t}x(D,"_cursor",["direction","key","primaryKey","value"]);Z(D,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(e){e in IDBCursor.prototype&&(D.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,r),Ae(t._request).then(function(n){if(!!n)return new D(n,t._request)})})})});function v(e){this._store=e}v.prototype.createIndex=function(){return new E(this._store.createIndex.apply(this._store,arguments))};v.prototype.index=function(){return new E(this._store.index.apply(this._store,arguments))};x(v,"_store",["name","keyPath","indexNames","autoIncrement"]);Z(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Me(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);V(v,"_store",IDBObjectStore,["deleteIndex"]);function _(e){this._tx=e,this.complete=new Promise(function(t,r){e.oncomplete=function(){t()},e.onerror=function(){r(e.error)},e.onabort=function(){r(e.error)}})}_.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))};x(_,"_tx",["objectStoreNames","mode"]);V(_,"_tx",IDBTransaction,["abort"]);function F(e,t,r){this._db=e,this.oldVersion=t,this.transaction=new _(r)}F.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))};x(F,"_db",["name","version","objectStoreNames"]);V(F,"_db",IDBDatabase,["deleteObjectStore","close"]);function H(e){this._db=e}H.prototype.transaction=function(){return new _(this._db.transaction.apply(this._db,arguments))};x(H,"_db",["name","version","objectStoreNames"]);V(H,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(e){[v,E].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var r=ut(arguments),n=r[r.length-1],i=this._store||this._index,o=i[e].apply(i,r.slice(0,-1));o.onsuccess=function(){n(o.result)}})})});[E,v].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(t,r){var n=this,i=[];return new Promise(function(o){n.iterateCursor(t,function(s){if(!s){o(i);return}if(i.push(s.value),r!==void 0&&i.length==r){o(i);return}s.continue()})})})});function ee(e,t,r){var n=U(indexedDB,"open",[e,t]),i=n.request;return i&&(i.onupgradeneeded=function(o){r&&r(new F(i.result,o.oldVersion,i.transaction))}),n.then(function(o){return new H(o)})}function W(e){return U(indexedDB,"deleteDatabase",[e])}var lt="@firebase/installations",Pe="0.4.32";/**
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
 */var xe=1e4,Oe="w:"+Pe,Ne="FIS_v2",ft="https://firebaseinstallations.googleapis.com/v1",dt=60*60*1e3,pt="installations",ht="Installations";/**
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
 */var y,gt=(y={},y["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',y["not-registered"]="Firebase Installation is not registered.",y["installation-not-found"]="Firebase Installation not found.",y["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',y["app-offline"]="Could not process request. Application offline.",y["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",y),b=new Ie(pt,ht,gt);function De(e){return e instanceof Xe&&e.code.includes("request-failed")}/**
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
 */function te(e){var t=e.projectId;return ft+"/projects/"+t+"/installations"}function Re(e){return{token:e.token,requestStatus:2,expiresIn:vt(e.expiresIn),creationTime:Date.now()}}function re(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,t.json()];case 1:return r=i.sent(),n=r.error,[2,b.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function _e(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function je(e,t){var r=t.refreshToken,n=_e(e);return n.append("Authorization",mt(r)),n}function ne(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,e()];case 1:return t=r.sent(),t.status>=500&&t.status<600?[2,e()]:[2,t]}})})}function vt(e){return Number(e.replace("s","000"))}function mt(e){return Ne+" "+e}/**
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
 */function bt(e,t){var r=t.fid;return c(this,void 0,void 0,function(){var n,i,o,s,a,u,f;return l(this,function(d){switch(d.label){case 0:return n=te(e),i=_e(e),o={fid:r,authVersion:Ne,appId:e.appId,sdkVersion:Oe},s={method:"POST",headers:i,body:JSON.stringify(o)},[4,ne(function(){return fetch(n,s)})];case 1:return a=d.sent(),a.ok?[4,a.json()]:[3,3];case 2:return u=d.sent(),f={fid:u.fid||r,registrationStatus:2,refreshToken:u.refreshToken,authToken:Re(u.authToken)},[2,f];case 3:return[4,re("Create Installation",a)];case 4:throw d.sent()}})})}/**
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
 */function qe(e){return new Promise(function(t){setTimeout(t,e)})}/**
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
 */function wt(e){var t=btoa(String.fromCharCode.apply(String,Ce([],Ee(e))));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */var yt=/^[cdef][\w-]{21}$/,X="";function kt(){try{var e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;var r=St(e);return yt.test(r)?r:X}catch{return X}}function St(e){var t=wt(e);return t.substr(0,22)}/**
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
 */var P=new Map;function Ke(e,t){var r=O(e);Be(r,t),Ct(r,t)}function Tt(e,t){Le();var r=O(e),n=P.get(r);n||(n=new Set,P.set(r,n)),n.add(t)}function It(e,t){var r=O(e),n=P.get(r);!n||(n.delete(t),n.size===0&&P.delete(r),Ue())}function Be(e,t){var r,n,i=P.get(e);if(!!i)try{for(var o=R(i),s=o.next();!s.done;s=o.next()){var a=s.value;a(t)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}function Ct(e,t){var r=Le();r&&r.postMessage({key:e,fid:t}),Ue()}var S=null;function Le(){return!S&&"BroadcastChannel"in self&&(S=new BroadcastChannel("[Firebase] FID Change"),S.onmessage=function(e){Be(e.data.key,e.data.fid)}),S}function Ue(){P.size===0&&S&&(S.close(),S=null)}/**
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
 */var Et="firebase-installations-database",At=1,T="firebase-installations-store",$=null;function ie(){return $||($=ee(Et,At,function(e){switch(e.oldVersion){case 0:e.createObjectStore(T)}})),$}function K(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s;return l(this,function(a){switch(a.label){case 0:return r=O(e),[4,ie()];case 1:return n=a.sent(),i=n.transaction(T,"readwrite"),o=i.objectStore(T),[4,o.get(r)];case 2:return s=a.sent(),[4,o.put(t,r)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),(!s||s.fid!==t.fid)&&Ke(e,t.fid),[2,t]}})})}function oe(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return t=O(e),[4,ie()];case 1:return r=i.sent(),n=r.transaction(T,"readwrite"),[4,n.objectStore(T).delete(t)];case 2:return i.sent(),[4,n.complete];case 3:return i.sent(),[2]}})})}function j(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return r=O(e),[4,ie()];case 1:return n=u.sent(),i=n.transaction(T,"readwrite"),o=i.objectStore(T),[4,o.get(r)];case 2:return s=u.sent(),a=t(s),a!==void 0?[3,4]:[4,o.delete(r)];case 3:return u.sent(),[3,6];case 4:return[4,o.put(a,r)];case 5:u.sent(),u.label=6;case 6:return[4,i.complete];case 7:return u.sent(),a&&(!s||s.fid!==a.fid)&&Ke(e,a.fid),[2,a]}})})}/**
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
 */function se(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return[4,j(e,function(o){var s=Mt(o),a=Pt(e,s);return t=a.registrationPromise,a.installationEntry})];case 1:return r=i.sent(),r.fid!==X?[3,3]:(n={},[4,t]);case 2:return[2,(n.installationEntry=i.sent(),n)];case 3:return[2,{installationEntry:r,registrationPromise:t}]}})})}function Mt(e){var t=e||{fid:kt(),registrationStatus:0};return Ve(t)}function Pt(e,t){if(t.registrationStatus===0){if(!navigator.onLine){var r=Promise.reject(b.create("app-offline"));return{installationEntry:t,registrationPromise:r}}var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=xt(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ot(e)}:{installationEntry:t}}function xt(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,bt(e,t)];case 1:return r=i.sent(),[2,K(e,r)];case 2:return n=i.sent(),De(n)&&n.customData.serverCode===409?[4,oe(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,K(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw n;case 7:return[2]}})})}function Ot(e){return c(this,void 0,void 0,function(){var t,r,n,i;return l(this,function(o){switch(o.label){case 0:return[4,be(e)];case 1:t=o.sent(),o.label=2;case 2:return t.registrationStatus!==1?[3,5]:[4,qe(100)];case 3:return o.sent(),[4,be(e)];case 4:return t=o.sent(),[3,2];case 5:return t.registrationStatus!==0?[3,7]:[4,se(e)];case 6:return r=o.sent(),n=r.installationEntry,i=r.registrationPromise,i?[2,i]:[2,n];case 7:return[2,t]}})})}function be(e){return j(e,function(t){if(!t)throw b.create("installation-not-found");return Ve(t)})}function Ve(e){return Nt(e)?{fid:e.fid,registrationStatus:0}:e}function Nt(e){return e.registrationStatus===1&&e.registrationTime+xe<Date.now()}/**
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
 */function Dt(e,t){var r=e.appConfig,n=e.platformLoggerProvider;return c(this,void 0,void 0,function(){var i,o,s,a,u,f,d,A;return l(this,function(w){switch(w.label){case 0:return i=Rt(r,t),o=je(r,t),s=n.getImmediate({optional:!0}),s&&o.append("x-firebase-client",s.getPlatformInfoString()),a={installation:{sdkVersion:Oe}},u={method:"POST",headers:o,body:JSON.stringify(a)},[4,ne(function(){return fetch(i,u)})];case 1:return f=w.sent(),f.ok?[4,f.json()]:[3,3];case 2:return d=w.sent(),A=Re(d),[2,A];case 3:return[4,re("Generate Auth Token",f)];case 4:throw w.sent()}})})}function Rt(e,t){var r=t.fid;return te(e)+"/"+r+"/authTokens:generate"}/**
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
 */function ae(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return[4,j(e.appConfig,function(a){if(!Fe(a))throw b.create("not-registered");var u=a.authToken;if(!t&&qt(u))return a;if(u.requestStatus===1)return r=_t(e,t),a;if(!navigator.onLine)throw b.create("app-offline");var f=Bt(a);return r=jt(e,f),f})];case 1:return n=s.sent(),r?[4,r]:[3,3];case 2:return o=s.sent(),[3,4];case 3:o=n.authToken,s.label=4;case 4:return i=o,[2,i]}})})}function _t(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,we(e.appConfig)];case 1:r=i.sent(),i.label=2;case 2:return r.authToken.requestStatus!==1?[3,5]:[4,qe(100)];case 3:return i.sent(),[4,we(e.appConfig)];case 4:return r=i.sent(),[3,2];case 5:return n=r.authToken,n.requestStatus===0?[2,ae(e,t)]:[2,n]}})})}function we(e){return j(e,function(t){if(!Fe(t))throw b.create("not-registered");var r=t.authToken;return Lt(r)?g(g({},t),{authToken:{requestStatus:0}}):t})}function jt(e,t){return c(this,void 0,void 0,function(){var r,i,n,i;return l(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,Dt(e,t)];case 1:return r=o.sent(),i=g(g({},t),{authToken:r}),[4,K(e.appConfig,i)];case 2:return o.sent(),[2,r];case 3:return n=o.sent(),De(n)&&(n.customData.serverCode===401||n.customData.serverCode===404)?[4,oe(e.appConfig)]:[3,5];case 4:return o.sent(),[3,7];case 5:return i=g(g({},t),{authToken:{requestStatus:0}}),[4,K(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw n;case 8:return[2]}})})}function Fe(e){return e!==void 0&&e.registrationStatus===2}function qt(e){return e.requestStatus===2&&!Kt(e)}function Kt(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+dt}function Bt(e){var t={requestStatus:1,requestTime:Date.now()};return g(g({},e),{authToken:t})}function Lt(e){return e.requestStatus===1&&e.requestTime+xe<Date.now()}/**
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
 */function Ut(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return[4,se(e.appConfig)];case 1:return t=i.sent(),r=t.installationEntry,n=t.registrationPromise,n?n.catch(console.error):ae(e).catch(console.error),[2,r.fid]}})})}/**
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
 */function Vt(e,t){return t===void 0&&(t=!1),c(this,void 0,void 0,function(){var r;return l(this,function(n){switch(n.label){case 0:return[4,Ft(e.appConfig)];case 1:return n.sent(),[4,ae(e,t)];case 2:return r=n.sent(),[2,r.token]}})})}function Ft(e){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return[4,se(e)];case 1:return t=r.sent().registrationPromise,t?[4,t]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})}/**
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
 */function Ht(e,t){return c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return r=Wt(e,t),n=je(e,t),i={method:"DELETE",headers:n},[4,ne(function(){return fetch(r,i)})];case 1:return o=s.sent(),o.ok?[3,3]:[4,re("Delete Installation",o)];case 2:throw s.sent();case 3:return[2]}})})}function Wt(e,t){var r=t.fid;return te(e)+"/"+r}/**
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
 */function $t(e){return c(this,void 0,void 0,function(){var t,r;return l(this,function(n){switch(n.label){case 0:return t=e.appConfig,[4,j(t,function(i){if(!(i&&i.registrationStatus===0))return i})];case 1:if(r=n.sent(),!r)return[3,6];if(r.registrationStatus!==1)return[3,2];throw b.create("delete-pending-registration");case 2:if(r.registrationStatus!==2)return[3,6];if(navigator.onLine)return[3,3];throw b.create("app-offline");case 3:return[4,Ht(t,r)];case 4:return n.sent(),[4,oe(t)];case 5:n.sent(),n.label=6;case 6:return[2]}})})}/**
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
 */function Gt(e,t){var r=e.appConfig;return Tt(r,t),function(){It(r,t)}}/**
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
 */function Jt(e){var t,r;if(!e||!e.options)throw G("App Configuration");if(!e.name)throw G("App Name");var n=["projectId","apiKey","appId"];try{for(var i=R(n),o=i.next();!o.done;o=i.next()){var s=o.value;if(!e.options[s])throw G(s)}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function G(e){return b.create("missing-app-config-values",{valueName:e})}/**
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
 */function zt(e){var t="installations";e.INTERNAL.registerComponent(new Te(t,function(r){var n=r.getProvider("app").getImmediate(),i=Jt(n),o=r.getProvider("platform-logger"),s={appConfig:i,platformLoggerProvider:o},a={app:n,getId:function(){return Ut(s)},getToken:function(u){return Vt(s,u)},delete:function(){return $t(s)},onIdChange:function(u){return Gt(s,u)}};return a},"PUBLIC")),e.registerVersion(lt,Pe)}zt(q);/**
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
 */var h,Yt=(h={},h["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',h["only-available-in-window"]="This method is available in a Window context.",h["only-available-in-sw"]="This method is available in a service worker context.",h["permission-default"]="The notification permission was not granted and dismissed instead.",h["permission-blocked"]="The notification permission was not granted and blocked instead.",h["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",h["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",h["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",h["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",h["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",h["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",h["token-update-no-token"]="FCM returned no token when updating the user to push.",h["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",h["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",h["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",h["invalid-vapid-key"]="The public VAPID key must be a string.",h["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",h),p=new Ie("messaging","Messaging",Yt);/**
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
 */var Xt="/firebase-messaging-sw.js",Qt="/firebase-cloud-messaging-push-scope",B="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Zt="https://fcmregistrations.googleapis.com/v1",He="FCM_MSG",er="FirebaseMessaging: ",tr="google.c.a.e",We="google.c.a.c_id",rr="google.c.a.ts",nr="google.c.a.c_l",ir=1e3,or=3e3;/**
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
 */var I;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(I||(I={}));/**
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
 */function m(e){var t=new Uint8Array(e),r=btoa(String.fromCharCode.apply(String,Ce([],Ee(t))));return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function sr(e){for(var t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(r),i=new Uint8Array(n.length),o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}/**
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
 */var J="fcm_token_details_db",ar=5,ye="fcm_token_object_Store";function ur(e){return c(this,void 0,void 0,function(){var t,r,n,i,o=this;return l(this,function(s){switch(s.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=s.sent(),r=t.map(function(a){return a.name}),!r.includes(J))return[2,null];s.label=2;case 2:return n=null,[4,ee(J,ar,function(a){return c(o,void 0,void 0,function(){var u,f,d,d,d,A;return l(this,function(w){switch(w.label){case 0:return a.oldVersion<2?[2]:a.objectStoreNames.contains(ye)?(u=a.transaction.objectStore(ye),[4,u.index("fcmSenderId").get(e)]):[2];case 1:return f=w.sent(),[4,u.clear()];case 2:if(w.sent(),!f)return[2];if(a.oldVersion===2){if(d=f,!d.auth||!d.p256dh||!d.endpoint)return[2];n={token:d.fcmToken,createTime:(A=d.createTime)!==null&&A!==void 0?A:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:m(d.vapidKey)}}}else a.oldVersion===3?(d=f,n={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:m(d.auth),p256dh:m(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:m(d.vapidKey)}}):a.oldVersion===4&&(d=f,n={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:m(d.auth),p256dh:m(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:m(d.vapidKey)}});return[2]}})})})];case 3:return i=s.sent(),i.close(),[4,W(J)];case 4:return s.sent(),[4,W("fcm_vapid_details_db")];case 5:return s.sent(),[4,W("undefined")];case 6:return s.sent(),[2,cr(n)?n:null]}})})}function cr(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */var lr="firebase-messaging-database",fr=1,C="firebase-messaging-store",z=null;function ue(){return z||(z=ee(lr,fr,function(e){switch(e.oldVersion){case 0:e.createObjectStore(C)}})),z}function L(e){return c(this,void 0,void 0,function(){var t,r,n,i;return l(this,function(o){switch(o.label){case 0:return t=le(e),[4,ue()];case 1:return r=o.sent(),[4,r.transaction(C).objectStore(C).get(t)];case 2:return n=o.sent(),n?[2,n]:[3,3];case 3:return[4,ur(e.appConfig.senderId)];case 4:return i=o.sent(),i?[4,ce(e,i)]:[3,6];case 5:return o.sent(),[2,i];case 6:return[2]}})})}function ce(e,t){return c(this,void 0,void 0,function(){var r,n,i;return l(this,function(o){switch(o.label){case 0:return r=le(e),[4,ue()];case 1:return n=o.sent(),i=n.transaction(C,"readwrite"),[4,i.objectStore(C).put(t,r)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}})})}function dr(e){return c(this,void 0,void 0,function(){var t,r,n;return l(this,function(i){switch(i.label){case 0:return t=le(e),[4,ue()];case 1:return r=i.sent(),n=r.transaction(C,"readwrite"),[4,n.objectStore(C).delete(t)];case 2:return i.sent(),[4,n.complete];case 3:return i.sent(),[2]}})})}function le(e){var t=e.appConfig;return t.appId}/**
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
 */function pr(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:return[4,de(e)];case 1:r=f.sent(),n=Ge(t),i={method:"POST",headers:r,body:JSON.stringify(n)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig),i)];case 3:return s=f.sent(),[4,s.json()];case 4:return o=f.sent(),[3,6];case 5:throw a=f.sent(),p.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,p.create("token-subscribe-failed",{errorInfo:u});if(!o.token)throw p.create("token-subscribe-no-token");return[2,o.token]}})})}function hr(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:return[4,de(e)];case 1:r=f.sent(),n=Ge(t.subscriptionOptions),i={method:"PATCH",headers:r,body:JSON.stringify(n)},f.label=2;case 2:return f.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig)+"/"+t.token,i)];case 3:return s=f.sent(),[4,s.json()];case 4:return o=f.sent(),[3,6];case 5:throw a=f.sent(),p.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw u=o.error.message,p.create("token-update-failed",{errorInfo:u});if(!o.token)throw p.create("token-update-no-token");return[2,o.token]}})})}function $e(e,t){return c(this,void 0,void 0,function(){var r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return[4,de(e)];case 1:r=u.sent(),n={method:"DELETE",headers:r},u.label=2;case 2:return u.trys.push([2,5,,6]),[4,fetch(fe(e.appConfig)+"/"+t,n)];case 3:return i=u.sent(),[4,i.json()];case 4:if(o=u.sent(),o.error)throw s=o.error.message,p.create("token-unsubscribe-failed",{errorInfo:s});return[3,6];case 5:throw a=u.sent(),p.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}})})}function fe(e){var t=e.projectId;return Zt+"/projects/"+t+"/registrations"}function de(e){var t=e.appConfig,r=e.installations;return c(this,void 0,void 0,function(){var n;return l(this,function(i){switch(i.label){case 0:return[4,r.getToken()];case 1:return n=i.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})]}})})}function Ge(e){var t=e.p256dh,r=e.auth,n=e.endpoint,i=e.vapidKey,o={web:{endpoint:n,auth:r,p256dh:t}};return i!==B&&(o.web.applicationPubKey=i),o}/**
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
 */var gr=7*24*60*60*1e3;function Q(e,t,r){return c(this,void 0,void 0,function(){var n,i,o,s;return l(this,function(a){switch(a.label){case 0:if(Notification.permission!=="granted")throw p.create("permission-blocked");return[4,mr(t,r)];case 1:return n=a.sent(),[4,L(e)];case 2:return i=a.sent(),o={vapidKey:r,swScope:t.scope,endpoint:n.endpoint,auth:m(n.getKey("auth")),p256dh:m(n.getKey("p256dh"))},i?[3,3]:[2,ke(e,o)];case 3:if(br(i.subscriptionOptions,o))return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,$e(e,i.token)];case 5:return a.sent(),[3,7];case 6:return s=a.sent(),console.warn(s),[3,7];case 7:return[2,ke(e,o)];case 8:return Date.now()>=i.createTime+gr?[2,vr({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}})})}function N(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,L(e)];case 1:return r=i.sent(),r?[4,$e(e,r.token)]:[3,4];case 2:return i.sent(),[4,dr(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return n=i.sent(),n?[2,n.unsubscribe()]:[2,!0]}})})}function vr(e,t,r){return c(this,void 0,void 0,function(){var n,i,o;return l(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,hr(t,e)];case 1:return n=s.sent(),i=g(g({},e),{token:n,createTime:Date.now()}),[4,ce(t,i)];case 2:return s.sent(),[2,n];case 3:return o=s.sent(),[4,N(t,r)];case 4:throw s.sent(),o;case 5:return[2]}})})}function ke(e,t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return[4,pr(e,t)];case 1:return r=i.sent(),n={token:r,createTime:Date.now(),subscriptionOptions:t},[4,ce(e,n)];case 2:return i.sent(),[2,n.token]}})})}function mr(e,t){return c(this,void 0,void 0,function(){var r;return l(this,function(n){switch(n.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return r=n.sent(),r?[2,r]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:sr(t)})]}})})}function br(e,t){var r=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return r&&n&&i&&o}/**
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
 */function wr(e){var t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcm_message_id};return yr(t,e),kr(t,e),Sr(t,e),t}function yr(e,t){if(!!t.notification){e.notification={};var r=t.notification.title;r&&(e.notification.title=r);var n=t.notification.body;n&&(e.notification.body=n);var i=t.notification.image;i&&(e.notification.image=i)}}function kr(e,t){!t.data||(e.data=t.data)}function Sr(e,t){if(!!t.fcmOptions){e.fcmOptions={};var r=t.fcmOptions.link;r&&(e.fcmOptions.link=r);var n=t.fcmOptions.analytics_label;n&&(e.fcmOptions.analyticsLabel=n)}}/**
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
 */function Je(e){return typeof e=="object"&&!!e&&We in e}/**
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
 */var Tr=function(){function e(t){var r=this;this.firebaseDependencies=t,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",function(n){n.waitUntil(r.onPush(n))}),self.addEventListener("pushsubscriptionchange",function(n){n.waitUntil(r.onSubChange(n))}),self.addEventListener("notificationclick",function(n){n.waitUntil(r.onNotificationClick(n))})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(t){if(this.isOnBackgroundMessageUsed=!1,!t||typeof t!="function")throw p.create("invalid-bg-handler");this.bgMessageHandler=t},e.prototype.onBackgroundMessage=function(t){var r=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=t,function(){r.bgMessageHandler=null}},e.prototype.getToken=function(){var t,r;return c(this,void 0,void 0,function(){var n;return l(this,function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,L(this.firebaseDependencies)];case 1:n=i.sent(),this.vapidKey=(r=(t=n==null?void 0:n.subscriptionOptions)===null||t===void 0?void 0:t.vapidKey)!==null&&r!==void 0?r:B,i.label=2;case 2:return[2,Q(this.firebaseDependencies,self.registration,this.vapidKey)]}})})},e.prototype.deleteToken=function(){return N(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw p.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(t){if(this.vapidKey!==null)throw p.create("use-vapid-key-after-get-token");if(typeof t!="string"||t.length===0)throw p.create("invalid-vapid-key");this.vapidKey=t},e.prototype.useServiceWorker=function(){throw p.create("only-available-in-window")},e.prototype.onMessage=function(){throw p.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw p.create("only-available-in-window")},e.prototype.onPush=function(t){return c(this,void 0,void 0,function(){var r,n,i,o;return l(this,function(s){switch(s.label){case 0:return r=Cr(t),r?[4,ze()]:(console.debug(er+"failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return n=s.sent(),Ar(n)?[2,Mr(n,r)]:(i=!1,r.notification?[4,Pr(Ir(r))]:[3,3]);case 2:s.sent(),i=!0,s.label=3;case 3:return i===!0&&this.isOnBackgroundMessageUsed===!1?[2]:(this.bgMessageHandler&&(o=wr(r),typeof this.bgMessageHandler=="function"?this.bgMessageHandler(o):this.bgMessageHandler.next(o)),[4,Se(ir)]);case 4:return s.sent(),[2]}})})},e.prototype.onSubChange=function(t){var r,n;return c(this,void 0,void 0,function(){var i,o;return l(this,function(s){switch(s.label){case 0:return i=t.newSubscription,i?[3,2]:[4,N(this.firebaseDependencies,self.registration)];case 1:return s.sent(),[2];case 2:return[4,L(this.firebaseDependencies)];case 3:return o=s.sent(),[4,N(this.firebaseDependencies,self.registration)];case 4:return s.sent(),[4,Q(this.firebaseDependencies,self.registration,(n=(r=o==null?void 0:o.subscriptionOptions)===null||r===void 0?void 0:r.vapidKey)!==null&&n!==void 0?n:B)];case 5:return s.sent(),[2]}})})},e.prototype.onNotificationClick=function(t){var r,n;return c(this,void 0,void 0,function(){var i,o,s,a,u;return l(this,function(f){switch(f.label){case 0:if(i=(n=(r=t.notification)===null||r===void 0?void 0:r.data)===null||n===void 0?void 0:n[He],i){if(t.action)return[2]}else return[2];return t.stopImmediatePropagation(),t.notification.close(),o=xr(i),o?(s=new URL(o,self.location.href),a=new URL(self.location.origin),s.host!==a.host?[2]:[4,Er(s)]):[2];case 1:return u=f.sent(),u?[3,4]:[4,self.clients.openWindow(o)];case 2:return u=f.sent(),[4,Se(or)];case 3:return f.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=f.sent(),f.label=6;case 6:return u?(i.messageType=I.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,[2,u.postMessage(i)]):[2]}})})},e}();function Ir(e){var t,r=g({},e.notification);return r.data=(t={},t[He]=e,t),r}function Cr(e){var t=e.data;if(!t)return null;try{return t.json()}catch{return null}}function Er(e){return c(this,void 0,void 0,function(){var t,r,n,i,o,s,a;return l(this,function(u){switch(u.label){case 0:return[4,ze()];case 1:t=u.sent();try{for(r=R(t),n=r.next();!n.done;n=r.next())if(i=n.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(f){s={error:f}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(s)throw s.error}}return[2,null]}})})}function Ar(e){return e.some(function(t){return t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://")})}function Mr(e,t){var r,n;t.isFirebaseMessaging=!0,t.messageType=I.PUSH_RECEIVED;try{for(var i=R(e),o=i.next();!o.done;o=i.next()){var s=o.value;s.postMessage(t)}}catch(a){r={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}function ze(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Pr(e){var t,r=e.actions,n=Notification.maxActions;return r&&n&&r.length>n&&console.warn("This browser only supports "+n+" actions. The remaining actions will not be displayed."),self.registration.showNotification((t=e.title)!==null&&t!==void 0?t:"",e)}function xr(e){var t,r,n,i=(r=(t=e.fcmOptions)===null||t===void 0?void 0:t.link)!==null&&r!==void 0?r:(n=e.notification)===null||n===void 0?void 0:n.click_action;return i||(Je(e.data)?self.location.origin:null)}/**
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
 */var Or=function(){function e(t){var r=this;this.firebaseDependencies=t,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",function(n){return r.messageEventListener(n)})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(t){return c(this,void 0,void 0,function(){var r,n;return l(this,function(i){switch(i.label){case 0:return r=t.data,r.isFirebaseMessaging?(this.onMessageCallback&&r.messageType===I.PUSH_RECEIVED&&(typeof this.onMessageCallback=="function"?this.onMessageCallback(Dr(Object.assign({},r))):this.onMessageCallback.next(Object.assign({},r))),n=r.data,Je(n)&&n[tr]==="1"?[4,this.logEvent(r.messageType,n)]:[3,2]):[2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return Notification.permission!=="default"?[3,2]:[4,Notification.requestPermission()];case 1:r.sent(),r.label=2;case 2:if(Notification.permission!=="granted")throw p.create("permission-blocked");return[4,this.updateVapidKey(t==null?void 0:t.vapidKey)];case 3:return r.sent(),[4,this.updateSwReg(t==null?void 0:t.serviceWorkerRegistration)];case 4:return r.sent(),[2,Q(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}})})},e.prototype.updateVapidKey=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){return t?this.vapidKey=t:this.vapidKey||(this.vapidKey=B),[2]})})},e.prototype.updateSwReg=function(t){return c(this,void 0,void 0,function(){return l(this,function(r){switch(r.label){case 0:return!t&&!this.swRegistration?[4,this.registerDefaultSw()]:[3,2];case 1:r.sent(),r.label=2;case 2:if(!t&&!!this.swRegistration)return[2];if(!(t instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");return this.swRegistration=t,[2]}})})},e.prototype.registerDefaultSw=function(){return c(this,void 0,void 0,function(){var t,r;return l(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),t=this,[4,navigator.serviceWorker.register(Xt,{scope:Qt})];case 1:return t.swRegistration=n.sent(),this.swRegistration.update().catch(function(){}),[3,3];case 2:throw r=n.sent(),p.create("failed-service-worker-registration",{browserErrorMessage:r.message});case 3:return[2]}})})},e.prototype.deleteToken=function(){return c(this,void 0,void 0,function(){return l(this,function(t){switch(t.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:return[2,N(this.firebaseDependencies,this.swRegistration)]}})})},e.prototype.requestPermission=function(){return c(this,void 0,void 0,function(){var t;return l(this,function(r){switch(r.label){case 0:return Notification.permission==="granted"?[2]:[4,Notification.requestPermission()];case 1:if(t=r.sent(),t==="granted")return[2];throw t==="denied"?p.create("permission-blocked"):p.create("permission-default")}})})},e.prototype.usePublicVapidKey=function(t){if(this.vapidKey!==null)throw p.create("use-vapid-key-after-get-token");if(typeof t!="string"||t.length===0)throw p.create("invalid-vapid-key");this.vapidKey=t},e.prototype.useServiceWorker=function(t){if(!(t instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");if(this.swRegistration)throw p.create("use-sw-after-get-token");this.swRegistration=t},e.prototype.onMessage=function(t){var r=this;return this.onMessageCallback=t,function(){r.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw p.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw p.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(t,r){return c(this,void 0,void 0,function(){var n,i;return l(this,function(o){switch(o.label){case 0:return n=Nr(t),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return i=o.sent(),i.logEvent(n,{message_id:r[We],message_name:r[nr],message_time:r[rr],message_device_time:Math.floor(Date.now()/1e3)}),[2]}})})},e}();function Nr(e){switch(e){case I.NOTIFICATION_CLICKED:return"notification_open";case I.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}function Dr(e){return delete e.messageType,delete e.isFirebaseMessaging,e}/**
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
 */function Rr(e){var t,r;if(!e||!e.options)throw Y("App Configuration Object");if(!e.name)throw Y("App Name");var n=["projectId","apiKey","appId","messagingSenderId"],i=e.options;try{for(var o=R(n),s=o.next();!s.done;s=o.next()){var a=s.value;if(!i[a])throw Y(a)}}catch(u){t={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function Y(e){return p.create("missing-app-config-values",{valueName:e})}/**
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
 */var _r="messaging";function jr(e){var t=e.getProvider("app").getImmediate(),r=Rr(t),n=e.getProvider("installations").getImmediate(),i=e.getProvider("analytics-internal"),o={app:t,appConfig:r,installations:n,analyticsProvider:i};if(!Ye())throw p.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new Tr(o):new Or(o)}var qr={isSupported:Ye};q.INTERNAL.registerComponent(new Te(_r,jr,"PUBLIC").setServiceProps(qr));function Ye(){return self&&"ServiceWorkerGlobalScope"in self?Br():Kr()}function Kr(){return"indexedDB"in window&&indexedDB!==null&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function Br(){return"indexedDB"in self&&indexedDB!==null&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}const Lr={name:"PsNotificationBox",components:{PsLabel:Qe},setup(){const e=ot(),t=new st;return t.userId=localStorage.loginUserId,{userunreadmsgStore:e,userUnreadHolder:t}},data(){return{title:"Test",subject:"Test",flag:"Test",messaging:q.messaging.isSupported()?q.messaging():null,currentMessage:"Test",requireInteraction:!0,notify:!1}},methods:{closed(){this.notify=!1},async clicked(e){if((e=="approval"||e=="verify_blue_mark")&&M.get(route("fe_profile")),e=="follow"&&M.get(route("fe_follower_list"),{userId:localStorage.loginUserId}),e=="fe_broadcast"&&M.get(route("fe_notification_list")),e=="review"&&M.get(route("fe_review_list"),{user_id:localStorage.loginUserId}),e=="chat"||e=="bought"){const t=Ze(),n=et().getLoginUserId(),i=this.currentMessage.data.item_id;await t.loadItem(i,n);let o=pe.CHAT_FROM_BUYER.toString();n==this.currentMessage.data.buyer_id&&(o=pe.CHAT_FROM_SELLER.toString()),M.get(route("fe_chat"),{buyer_user_id:this.currentMessage.data.buyer_id,seller_user_id:this.currentMessage.data.seller_id,item_id:this.currentMessage.data.item_id,chat_flag:o})}e=="subscribe"&&M.get(route("fe_item_detail"),{item_id:this.currentMessage.data.item_id})},receiveMessage(){try{if(!this.messaging)return;this.messaging.onMessage(async e=>{this.currentMessage=e,console.log("Message received. ",this.currentMessag),await this.userunreadmsgStore.postUserUnreadMessageCount(this.userUnreadHolder),this.setNotificationBoxForm(e.notification.title,e.notification.body,e.data.flag),this.notify=!0,setTimeout(()=>{this.notify=!1},1e4)})}catch(e){console.log(e)}},setNotificationBoxForm(e,t,r){this.title=e,this.subject=t,this.flag=r}},created(){this.receiveMessage()}},Ur={key:0},Vr={id:"notification-box",class:"overflow-hidden flex items-end w-mobile sm:w-median lg:w-64 justify-between leading-none bg-fePrimary-000 dark:bg-feAchromatic-900 rounded-t-xl lg:rounded-t-2xl top-0 fixed"},Fr={class:"me-2 w-8 sm:w-10 my-auto"},Hr=["src"],Wr={class:"ms-2 mt-1 text-sm flex-grow"},$r={class:"flex"};function Gr(e,t,r,n,i,o){const s=it("ps-label");return i.notify?(tt(),rt("div",Ur,[k("div",Vr,[k("a",{href:"#",id:"notification-close",onClick:t[0]||(t[0]=a=>o.closed()),title:"close"},"x"),k("div",{class:"bg-fePrimary-000 lg:px-2 py-1 px-1 h-18 cursor-pointer flex-grow flex flex-row items-center no-underline text-feAchromatic-900",onClick:t[1]||(t[1]=a=>o.clicked(i.flag))},[k("div",Fr,[k("img",{alt:"Placeholder",class:"rounded-md w-auto sm:h-10 h-8 cursor-pointer object-cover",width:"50px",height:"50px",src:e.$page.props.thumb1xUrl+"/"+e.$page.props.backendLogo.img_path},null,8,Hr)]),k("p",Wr,[k("span",$r,[he(s,{class:"truncate lg:text-sm text-xs font-medium"},{default:ge(()=>[ve(me(i.title),1)]),_:1})]),he(s,{class:"font-medium text-xxs lg:text-xs",textColor:"text-feSecondary-400 dark:text-feAchromatic-500"},{default:ge(()=>[ve(me(i.subject),1)]),_:1})])])])])):nt("",!0)}var mn=at(Lr,[["render",Gr]]);export{mn as default};
