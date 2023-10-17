/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var F=function(t,e){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var n in a)a.hasOwnProperty(n)&&(r[n]=a[n])},F(t,e)};function te(t,e){F(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var R=function(){return R=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++){r=arguments[a];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},R.apply(this,arguments)};function ne(t,e,r,a){function n(i){return i instanceof r?i:new r(function(o){o(i)})}return new(r||(r=Promise))(function(i,o){function f(h){try{s(a.next(h))}catch(p){o(p)}}function l(h){try{s(a.throw(h))}catch(p){o(p)}}function s(h){h.done?i(h.value):n(h.value).then(f,l)}s((a=a.apply(t,e||[])).next())})}function ae(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,n,i,o;return o={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function f(s){return function(h){return l([s,h])}}function l(s){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,n&&(i=s[0]&2?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(h){s=[6,h],n=0}finally{a=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}function M(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],a=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&a>=t.length&&(t=void 0),{value:t&&t[a++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var a=r.call(t),n,i=[],o;try{for(;(e===void 0||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(f){o={error:f}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function ie(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(U(arguments[e]));return t}/**
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
 */var G={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */var oe=function(t,e){if(!t)throw se(e)},se=function(t){return new Error("Firebase Database ("+G.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */var Y=function(t){for(var e=[],r=0,a=0;a<t.length;a++){var n=t.charCodeAt(a);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++a)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},fe=function(t){for(var e=[],r=0,a=0;r<t.length;){var n=t[r++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){var i=t[r++];e[a++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){var i=t[r++],o=t[r++],f=t[r++],l=((n&7)<<18|(i&63)<<12|(o&63)<<6|f&63)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(l&1023))}else{var i=t[r++],o=t[r++];e[a++]=String.fromCharCode((n&15)<<12|(i&63)<<6|o&63)}}return e.join("")},J={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[],n=0;n<t.length;n+=3){var i=t[n],o=n+1<t.length,f=o?t[n+1]:0,l=n+2<t.length,s=l?t[n+2]:0,h=i>>2,p=(i&3)<<4|f>>4,u=(f&15)<<2|s>>6,c=s&63;l||(c=64,o||(u=64)),a.push(r[h],r[p],r[u],r[c])}return a.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fe(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[],n=0;n<t.length;){var i=r[t.charAt(n++)],o=n<t.length,f=o?r[t.charAt(n)]:0;++n;var l=n<t.length,s=l?r[t.charAt(n)]:64;++n;var h=n<t.length,p=h?r[t.charAt(n)]:64;if(++n,i==null||f==null||s==null||p==null)throw Error();var u=i<<2|f>>4;if(a.push(u),s!==64){var c=f<<4&240|s>>2;if(a.push(c),p!==64){var y=s<<6&192|p;a.push(y)}}}return a},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},er=function(t){var e=Y(t);return J.encodeByteArray(e,!0)},z=function(t){try{return J.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ue(t){return D(void 0,t)}function D(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(var a in e)!e.hasOwnProperty(a)||!le(a)||(t[a]=D(t[a],e[a]));return t}function le(t){return t!=="__proto__"}/**
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
 */var ce=function(){function t(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(r,a){e.resolve=r,e.reject=a})}return t.prototype.wrapCallback=function(e){var r=this;return function(a,n){a?r.reject(a):r.resolve(n),typeof e=="function"&&(r.promise.catch(function(){}),e.length===1?e(a):e(a,n))}},t}();/**
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
 */function he(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function pe(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function de(){return typeof self=="object"&&self.self===self}function tr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nr(){return G.NODE_ADMIN===!0}/**
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
 */var ve="FirebaseError",me=function(t){te(e,t);function e(r,a,n){var i=t.call(this,a)||this;return i.code=r,i.customData=n,i.name=ve,Object.setPrototypeOf(i,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,B.prototype.create),i}return e}(Error),B=function(){function t(e,r,a){this.service=e,this.serviceName=r,this.errors=a}return t.prototype.create=function(e){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];var n=r[0]||{},i=this.service+"/"+e,o=this.errors[e],f=o?ge(o,n):"Error",l=this.serviceName+": "+f+" ("+i+").",s=new me(i,l,n);return s},t}();function ge(t,e){return t.replace(ye,function(r,a){var n=e[a];return n!=null?String(n):"<"+a+"?>"})}var ye=/\{\$([^}]+)}/g;/**
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
 */function H(t){return JSON.parse(t)}function ar(t){return JSON.stringify(t)}/**
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
 */var K=function(t){var e={},r={},a={},n="";try{var i=t.split(".");e=H(z(i[0])||""),r=H(z(i[1])||""),n=i[2],a=r.d||{},delete r.d}catch{}return{header:e,claims:r,data:a,signature:n}},ir=function(t){var e=K(t),r=e.claims;return!!r&&typeof r=="object"&&r.hasOwnProperty("iat")},or=function(t){var e=K(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function $(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fr(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e,r){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=e.call(r,t[n],n,t));return a}/**
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
 */function lr(t){for(var e=[],r=function(l,s){Array.isArray(s)?s.forEach(function(h){e.push(encodeURIComponent(l)+"="+encodeURIComponent(h))}):e.push(encodeURIComponent(l)+"="+encodeURIComponent(s))},a=0,n=Object.entries(t);a<n.length;a++){var i=n[a],o=i[0],f=i[1];r(o,f)}return e.length?"&"+e.join("&"):""}/**
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
 */var cr=function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(e,r){r||(r=0);var a=this.W_;if(typeof e=="string")for(var n=0;n<16;n++)a[n]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(var n=0;n<16;n++)a[n]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(var n=16;n<80;n++){var i=a[n-3]^a[n-8]^a[n-14]^a[n-16];a[n]=(i<<1|i>>>31)&4294967295}for(var o=this.chain_[0],f=this.chain_[1],l=this.chain_[2],s=this.chain_[3],h=this.chain_[4],p,u,n=0;n<80;n++){n<40?n<20?(p=s^f&(l^s),u=1518500249):(p=f^l^s,u=1859775393):n<60?(p=f&l|s&(f|l),u=2400959708):(p=f^l^s,u=3395469782);var i=(o<<5|o>>>27)+p+h+u+a[n]&4294967295;h=s,s=l,l=(f<<30|f>>>2)&4294967295,f=o,o=i}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+f&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+s&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(e,r){if(e!=null){r===void 0&&(r=e.length);for(var a=r-this.blockSize,n=0,i=this.buf_,o=this.inbuf_;n<r;){if(o===0)for(;n<=a;)this.compress_(e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<r;)if(i[o]=e.charCodeAt(n),++o,++n,o===this.blockSize){this.compress_(i),o=0;break}}else for(;n<r;)if(i[o]=e[n],++o,++n,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=r}},t.prototype.digest=function(){var e=[],r=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var a=this.blockSize-1;a>=56;a--)this.buf_[a]=r&255,r/=256;this.compress_(this.buf_);for(var n=0,a=0;a<5;a++)for(var i=24;i>=0;i-=8)e[n]=this.chain_[a]>>i&255,++n;return e},t}();function be(t,e){var r=new _e(t,e);return r.subscribe.bind(r)}var _e=function(){function t(e,r){var a=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(function(){e(a)}).catch(function(n){a.error(n)})}return t.prototype.next=function(e){this.forEachObserver(function(r){r.next(e)})},t.prototype.error=function(e){this.forEachObserver(function(r){r.error(e)}),this.close(e)},t.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},t.prototype.subscribe=function(e,r,a){var n=this,i;if(e===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");Ee(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:a},i.next===void 0&&(i.next=P),i.error===void 0&&(i.error=P),i.complete===void 0&&(i.complete=P);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{n.finalError?i.error(n.finalError):i.complete()}catch{}}),this.observers.push(i),o},t.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},t.prototype.forEachObserver=function(e){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,e)},t.prototype.sendOne=function(e,r){var a=this;this.task.then(function(){if(a.observers!==void 0&&a.observers[e]!==void 0)try{r(a.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})},t.prototype.close=function(e){var r=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){r.observers=void 0,r.onNoObservers=void 0}))},t}();function Ee(t,e){if(typeof t!="object"||t===null)return!1;for(var r=0,a=e;r<a.length;r++){var n=a[r];if(n in t&&typeof t[n]=="function")return!0}return!1}function P(){}/**
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
 */var hr=function(t,e,r,a){var n;if(a<e?n="at least "+e:a>r&&(n=r===0?"none":"no more than "+r),n){var i=t+" failed: Was called with "+a+(a===1?" argument.":" arguments.")+" Expects "+n+".";throw new Error(i)}};function q(t,e,r){var a="";switch(e){case 1:a=r?"first":"First";break;case 2:a=r?"second":"Second";break;case 3:a=r?"third":"Third";break;case 4:a=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var n=t+" failed: ";return n+=a+" argument ",n}function pr(t,e,r,a){if(!(a&&!r)&&typeof r!="function")throw new Error(q(t,e,a)+"must be a valid function.")}function dr(t,e,r,a){if(!(a&&!r)&&(typeof r!="object"||r===null))throw new Error(q(t,e,a)+"must be a valid context object.")}/**
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
 */var vr=function(t){for(var e=[],r=0,a=0;a<t.length;a++){var n=t.charCodeAt(a);if(n>=55296&&n<=56319){var i=n-55296;a++,oe(a<t.length,"Surrogate pair missing trail surrogate.");var o=t.charCodeAt(a)-56320;n=65536+(i<<10)+o}n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):n<65536?(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},mr=function(t){for(var e=0,r=0;r<t.length;r++){var a=t.charCodeAt(r);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,r++):e+=3}return e},j=function(){function t(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t}();/**
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
 */var N="[DEFAULT]";/**
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
 */var Se=function(){function t(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return t.prototype.get=function(e){e===void 0&&(e=N);var r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){var a=new ce;this.instancesDeferred.set(r,a);try{var n=this.getOrInitializeService(r);n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise},t.prototype.getImmediate=function(e){var r=R({identifier:N,optional:!1},e),a=r.identifier,n=r.optional,i=this.normalizeInstanceIdentifier(a);try{var o=this.getOrInitializeService(i);if(!o){if(n)return null;throw Error("Service "+this.name+" is not available")}return o}catch(f){if(n)return null;throw f}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var r,a;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,we(e))try{this.getOrInitializeService(N)}catch{}try{for(var n=M(this.instancesDeferred.entries()),i=n.next();!i.done;i=n.next()){var o=U(i.value,2),f=o[0],l=o[1],s=this.normalizeInstanceIdentifier(f);try{var h=this.getOrInitializeService(s);l.resolve(h)}catch{}}}catch(p){r={error:p}}finally{try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}},t.prototype.clearInstance=function(e){e===void 0&&(e=N),this.instancesDeferred.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return ne(this,void 0,void 0,function(){var e;return ae(this,function(r){switch(r.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ie(e.filter(function(a){return"INTERNAL"in a}).map(function(a){return a.INTERNAL.delete()}),e.filter(function(a){return"_delete"in a}).map(function(a){return a._delete()})))];case 1:return r.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.getOrInitializeService=function(e){var r=this.instances.get(e);return!r&&this.component&&(r=this.component.instanceFactory(this.container,Ae(e)),this.instances.set(e,r)),r||null},t.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:N:e},t}();function Ae(t){return t===N?void 0:t}function we(t){return t.instantiationMode==="EAGER"}/**
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
 */var Oe=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var r=this.getProvider(e.name);if(r.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);r.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var r=this.getProvider(e.name);r.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var r=new Se(e,this);return this.providers.set(e,r),r},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function _(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var a=Array(t),n=0,e=0;e<r;e++)for(var i=arguments[e],o=0,f=i.length;o<f;o++,n++)a[n]=i[o];return a}/**
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
 */var w,V=[],d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));var Z={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Ne=d.INFO,Ce=(w={},w[d.DEBUG]="log",w[d.VERBOSE]="log",w[d.INFO]="info",w[d.WARN]="warn",w[d.ERROR]="error",w),Ie=function(t,e){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];if(!(e<t.logLevel)){var n=new Date().toISOString(),i=Ce[e];if(i)console[i].apply(console,_(["["+n+"]  "+t.name+":"],r));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Re=function(){function t(e){this.name=e,this._logLevel=Ne,this._logHandler=Ie,this._userLogHandler=null,V.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in d))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?Z[e]:e},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,_([this,d.DEBUG],e)),this._logHandler.apply(this,_([this,d.DEBUG],e))},t.prototype.log=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,_([this,d.VERBOSE],e)),this._logHandler.apply(this,_([this,d.VERBOSE],e))},t.prototype.info=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,_([this,d.INFO],e)),this._logHandler.apply(this,_([this,d.INFO],e))},t.prototype.warn=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,_([this,d.WARN],e)),this._logHandler.apply(this,_([this,d.WARN],e))},t.prototype.error=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,_([this,d.ERROR],e)),this._logHandler.apply(this,_([this,d.ERROR],e))},t}();function De(t){V.forEach(function(e){e.setLogLevel(t)})}function Te(t,e){for(var r=function(o){var f=null;e&&e.level&&(f=Z[e.level]),t===null?o.userLogHandler=null:o.userLogHandler=function(l,s){for(var h=[],p=2;p<arguments.length;p++)h[p-2]=arguments[p];var u=h.map(function(c){if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(function(c){return c}).join(" ");s>=(f!=null?f:l.logLevel)&&t({level:d[s].toLowerCase(),message:u,args:h,type:l.name})}},a=0,n=V;a<n.length;a++){var i=n[a];r(i)}}/**
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
 */var A,xe=(A={},A["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",A["bad-app-name"]="Illegal App name: '{$appName}",A["duplicate-app"]="Firebase App named '{$appName}' already exists",A["app-deleted"]="Firebase App named '{$appName}' already deleted",A["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",A["invalid-log-argument"]="First argument to `onLog` must be null or a function.",A),C=new B("app","Firebase",xe),Q="@firebase/app",Le="0.6.13",Pe="@firebase/analytics",Fe="@firebase/auth",Me="@firebase/database",Be="@firebase/functions",je="@firebase/installations",Ve="@firebase/messaging",ke="@firebase/performance",ze="@firebase/remote-config",He="@firebase/storage",$e="@firebase/firestore",We="firebase-wrapper";/**
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
 */var g,L="[DEFAULT]",Ue=(g={},g[Q]="fire-core",g[Pe]="fire-analytics",g[Fe]="fire-auth",g[Me]="fire-rtdb",g[Be]="fire-fn",g[je]="fire-iid",g[Ve]="fire-fcm",g[ke]="fire-perf",g[ze]="fire-rc",g[He]="fire-gcs",g[$e]="fire-fst",g["fire-js"]="fire-js",g[We]="fire-js-all",g);/**
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
 */var I=new Re("@firebase/app");/**
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
 */var x=function(){function t(e,r,a){var n,i,o=this;this.firebase_=a,this.isDeleted_=!1,this.name_=r.name,this.automaticDataCollectionEnabled_=r.automaticDataCollectionEnabled||!1,this.options_=ue(e),this.container=new Oe(r.name),this._addComponent(new j("app",function(){return o},"PUBLIC"));try{for(var f=M(this.firebase_.INTERNAL.components.values()),l=f.next();!l.done;l=f.next()){var s=l.value;this._addComponent(s)}}catch(h){n={error:h}}finally{try{l&&!l.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),t.prototype.delete=function(){var e=this;return new Promise(function(r){e.checkDestroyed_(),r()}).then(function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map(function(r){return r.delete()}))}).then(function(){e.isDeleted_=!0})},t.prototype._getService=function(e,r){return r===void 0&&(r=L),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:r})},t.prototype._removeServiceInstance=function(e,r){r===void 0&&(r=L),this.container.getProvider(e).clearInstance(r)},t.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(r){I.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,r)}},t.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},t.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw C.create("app-deleted",{appName:this.name_})},t}();x.prototype.name&&x.prototype.options||x.prototype.delete||console.log("dc");var Ge="8.0.1";/**
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
 */function Ye(t){var e={},r=new Map,a={__esModule:!0,initializeApp:o,app:i,registerVersion:s,setLogLevel:De,onLog:h,apps:null,SDK_VERSION:Ge,INTERNAL:{registerComponent:l,removeApp:n,components:r,useAsService:p}};a.default=a,Object.defineProperty(a,"apps",{get:f});function n(u){delete e[u]}function i(u){if(u=u||L,!$(e,u))throw C.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c){if(c===void 0&&(c={}),typeof c!="object"||c===null){var y=c;c={name:y}}var v=c;v.name===void 0&&(v.name=L);var m=v.name;if(typeof m!="string"||!m)throw C.create("bad-app-name",{appName:String(m)});if($(e,m))throw C.create("duplicate-app",{appName:m});var b=new t(u,v,a);return e[m]=b,b}function f(){return Object.keys(e).map(function(u){return e[u]})}function l(u){var c,y,v=u.name;if(r.has(v))return I.debug("There were multiple attempts to register component "+v+"."),u.type==="PUBLIC"?a[v]:null;if(r.set(v,u),u.type==="PUBLIC"){var m=function(S){if(S===void 0&&(S=i()),typeof S[v]!="function")throw C.create("invalid-app-argument",{appName:v});return S[v]()};u.serviceProps!==void 0&&D(m,u.serviceProps),a[v]=m,t.prototype[v]=function(){for(var S=[],T=0;T<arguments.length;T++)S[T]=arguments[T];var re=this._getService.bind(this,v);return re.apply(this,u.multipleInstances?S:[])}}try{for(var b=M(Object.keys(e)),E=b.next();!E.done;E=b.next()){var O=E.value;e[O]._addComponent(u)}}catch(S){c={error:S}}finally{try{E&&!E.done&&(y=b.return)&&y.call(b)}finally{if(c)throw c.error}}return u.type==="PUBLIC"?a[v]:null}function s(u,c,y){var v,m=(v=Ue[u])!==null&&v!==void 0?v:u;y&&(m+="-"+y);var b=m.match(/\s|\//),E=c.match(/\s|\//);if(b||E){var O=['Unable to register library "'+m+'" with version "'+c+'":'];b&&O.push('library name "'+m+'" contains illegal characters (whitespace or "/")'),b&&E&&O.push("and"),E&&O.push('version name "'+c+'" contains illegal characters (whitespace or "/")'),I.warn(O.join(" "));return}l(new j(m+"-version",function(){return{library:m,version:c}},"VERSION"))}function h(u,c){if(u!==null&&typeof u!="function")throw C.create("invalid-log-argument",{appName:name});Te(u,c)}function p(u,c){if(c==="serverAuth")return null;var y=c;return y}return a}/**
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
 */function X(){var t=Ye(x);t.INTERNAL=R(R({},t.INTERNAL),{createFirebaseNamespace:X,extendNamespace:e,createSubscribe:be,ErrorFactory:B,deepExtend:D});function e(r){D(t,r)}return t}var k=X();/**
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
 */var Je=function(){function t(e){this.container=e}return t.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map(function(r){if(Ke(r)){var a=r.getImmediate();return a.library+"/"+a.version}else return null}).filter(function(r){return r}).join(" ")},t}();function Ke(t){var e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}/**
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
 */function qe(t,e){t.INTERNAL.registerComponent(new j("platform-logger",function(r){return new Je(r)},"PRIVATE")),t.registerVersion(Q,Le,e),t.registerVersion("fire-js","")}/**
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
 */if(de()&&self.firebase!==void 0){I.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var W=self.firebase.SDK_VERSION;W&&W.indexOf("LITE")>=0&&I.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var Ze=k.initializeApp;k.initializeApp=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return pe()&&I.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),Ze.apply(void 0,t)};var ee=k;qe(ee);var Qe="firebase",Xe="8.2.1";/**
 * @license
 * Copyright 2018 Google LLC
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
 */ee.registerVersion(Qe,Xe,"app");export{er as A,nr as B,j as C,ce as D,B as E,me as F,tr as G,d as H,Oe as I,ue as J,Re as L,Se as P,cr as S,M as _,ne as a,ae as b,R as c,ie as d,te as e,ee as f,se as g,oe as h,sr as i,$ as j,pr as k,dr as l,ur as m,q as n,U as o,ar as p,or as q,ir as r,mr as s,fr as t,rr as u,hr as v,lr as w,H as x,vr as y,J as z};
