import{d as Fo,Z as Wo,p as Uo,i as rn,G as _r,y as Bo,O as Qo,I as gr,j as Vo,k as Go,o as yr,c as mr,b as ze,w as Ho,a as qe,l as jo,g as Yo,F as zo,D as qo,r as Ke}from"./app.df1b8390.js";import Ko from"./FooterView.97dc7826.js";import $o from"./PsNavTabBar.6c5f8913.js";import Xo from"./PsNavBar.9d521488.js";import Jo from"./PsIcon.0697a0d8.js";import Zo from"./PsNotificationBox.cc3868e0.js";import{A as es}from"./AppInfoParameterHolder.e24d894d.js";import{u as ts}from"./AppInfoStore.4b2c5718.js";import{P as ns}from"./PsValueStore.08b5513c.js";import{_ as re,g as O,h as p,s as x,D as Q,i as ee,j as Re,k as rs,l as is,a as os,m as hn,n as si,o as ft,c as dn,p as St,e as Z,q as ss,r as Dn,t as G,v as y,u as L,L as as,w as us,S as ls,x as cs,d as Qe,y as fs,z as ai,b as hs,A as ds,B as Ft,G as z,H as Cr,C as ui,f as he,I as ps,J as vs,P as _s,K as gs,M as ys}from"./index.esm.159b9749.js";import{P as fe}from"./ps_constants.deaae373.js";import{u as ms}from"./NotificationStore.987a5d48.js";import{N as Cs,a as Es}from"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import{_ as ws}from"./plugin-vue_export-helper.21dcd24c.js";import"./FooterLinkSection.746092c6.js";import"./PsLabel.3935ab2c.js";import"./PsLink.0ee2fc53.js";import"./PsRouteLink.14f8a093.js";import"./PsLabelCaption.a3843f8e.js";import"./ProductParameterHolder.b3159892.js";import"./PsDropdown.e8bb7988.js";import"./PsDropdownSelect.a0554af8.js";import"./PsIconToggle.27dcede3.js";import"./LocationModal.e33ab72c.js";import"./PsModal.11d3d0c2.js";import"./vue-neat-modal.fd4a8f96.js";import"./PsLine.40e0def3.js";import"./PsButton.935d57c3.js";import"./PsInputWithLeftIcon.bd6285ce.js";import"./LocationParameterHolder.5c9d98a1.js";import"./PsApiService.317e88ef.js";import"./ItemLocationTownship.94979fe0.js";import"./PsObject.a17ef38f.js";import"./PsSepetetedStore.9a31ac47.js";import"./ItemLocationTownshipStore.9af11738.js";import"./UserStore.5c2fdd50.js";import"./User.ca420d1f.js";import"./RatingDetail.291ad5d1.js";import"./DefaultPhoto.cc755f93.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.1742bc34.js";import"./PsConfirmDialog.d57ea5b9.js";import"./PsUtils.2215fd6f.js";import"./ProductStore.186e332b.js";import"./Product.dc190b28.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./UserDeleteItemParameterHolder.5d816aba.js";var Ss="@firebase/database",Ts="0.11.0";/**
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
 */var li="";function ci(t){li=t}/**
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
 */var Is=function(){function t(e){this.domStorage_=e,this.prefix_="firebase:"}return t.prototype.set=function(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(n))},t.prototype.get=function(e){var n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Dn(n)},t.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},t.prototype.prefixedName_=function(e){return this.prefix_+e},t.prototype.toString=function(){return this.domStorage_.toString()},t}();/**
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
 */var bs=function(){function t(){this.cache_={},this.isInMemoryStorage=!0}return t.prototype.set=function(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n},t.prototype.get=function(e){return ee(this.cache_,e)?this.cache_[e]:null},t.prototype.remove=function(e){delete this.cache_[e]},t}();/**
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
 */var fi=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){var e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Is(e)}}catch{}return new bs},Se=fi("localStorage"),pn=fi("sessionStorage");/**
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
 */var Le=new as("@firebase/database"),hi=function(){var t=1;return function(){return t++}}(),di=function(t){var e=us(t),n=new ls;n.update(e);var r=n.digest();return cs.encodeByteArray(r)},ht=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n="",r=0;r<t.length;r++){var i=t[r];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?n+=ht.apply(null,i):typeof i=="object"?n+=x(i):n+=i,n+=" "}return n},Ie=null,Er=!0,pi=function(t,e){p(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Le.logLevel=ps.VERBOSE,Ie=Le.log.bind(Le),e&&pn.set("logging_enabled",!0)):typeof t=="function"?Ie=t:(Ie=null,pn.remove("logging_enabled"))},M=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(Er===!0&&(Er=!1,Ie===null&&pn.get("logging_enabled")===!0&&pi(!0)),Ie){var n=ht.apply(null,t);Ie(n)}},dt=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];M.apply(void 0,Qe([t],Z(e)))}},vn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE INTERNAL ERROR: "+ht.apply(void 0,Qe([],Z(t)));Le.error(n)},ie=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE FATAL ERROR: "+ht.apply(void 0,Qe([],Z(t)));throw Le.error(n),new Error(n)},F=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="FIREBASE WARNING: "+ht.apply(void 0,Qe([],Z(t)));Le.warn(n)},Rs=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wt=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ns=function(t){if(document.readyState==="complete")t();else{var e=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ce="[MIN_NAME]",oe="[MAX_NAME]",Pe=function(t,e){if(t===e)return 0;if(t===ce||e===oe)return-1;if(e===ce||t===oe)return 1;var n=Tt(t),r=Tt(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1},ks=function(t,e){return t===e?0:t<e?-1:1},$e=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+x(e))},Ln=function(t){if(typeof t!="object"||t===null)return x(t);var e=[];for(var n in t)e.push(n);e.sort();for(var r="{",i=0;i<e.length;i++)i!==0&&(r+=","),r+=x(e[i]),r+=":",r+=Ln(t[e[i]]);return r+="}",r},vi=function(t,e){var n=t.length;if(n<=e)return[t];for(var r=[],i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function D(t,e){for(var n in t)t.hasOwnProperty(n)&&e(n,t[n])}var _i=function(t){p(!Wt(t),"Invalid JSON number");var e=11,n=52,r=(1<<e-1)-1,i,o,s,a,u;t===0?(o=0,s=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),o=a+r,s=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(o=0,s=Math.round(t/Math.pow(2,1-r-n))));var l=[];for(u=n;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(u=e;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(i?1:0),l.reverse();var c=l.join(""),f="";for(u=0;u<64;u+=8){var h=parseInt(c.substr(u,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},Ps=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},As=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Os(t,e){var n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");var r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}var xs=new RegExp("^-?(0*)\\d{1,10}$"),gi=-2147483648,Mn=2147483647,Tt=function(t){if(xs.test(t)){var e=Number(t);if(e>=gi&&e<=Mn)return e}return null},Ve=function(t){try{t()}catch(e){setTimeout(function(){var n=e.stack||"";throw F("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ds=function(){var t=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return t.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},et=function(t,e){var n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
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
 */var Ls=function(){function t(e,n){var r=this;this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(function(i){return r.appCheck=i})}return t.prototype.getToken=function(e){var n=this;return this.appCheck?this.appCheck.getToken(e):new Promise(function(r,i){setTimeout(function(){n.appCheck?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(function(r){return r.addTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){F('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},t}();/**
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
 */var Ms=function(){function t(e,n,r){var i=this;this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(function(o){return i.auth_=o})}return t.prototype.getToken=function(e){var n=this;return this.auth_?this.auth_.getToken(e).catch(function(r){return r&&r.code==="auth/token-not-initialized"?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(r)}):new Promise(function(r,i){setTimeout(function(){n.auth_?n.getToken(e).then(r,i):r(null)},0)})},t.prototype.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(function(n){return n.addAuthTokenListener(e)})},t.prototype.removeTokenChangeListener=function(e){this.authProvider_.get().then(function(n){return n.removeAuthTokenListener(e)})},t.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)},t}(),tt=function(){function t(e){this.accessToken=e}return t.prototype.getToken=function(e){return Promise.resolve({accessToken:this.accessToken})},t.prototype.addTokenChangeListener=function(e){e(this.accessToken)},t.prototype.removeTokenChangeListener=function(e){},t.prototype.notifyForInvalidToken=function(){},t.OWNER="owner",t}();/**
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
 */var Fn="5",yi="v",mi="s",Ci="r",Ei="f",wi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Si="ls",Fs="p",_n="ac",Ti="websocket",Ii="long_polling";/**
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
 */var Wn=function(){function t(e,n,r,i,o,s,a){o===void 0&&(o=!1),s===void 0&&(s=""),a===void 0&&(a=!1),this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Se.get("host:"+e)||this._host}return t.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},t.prototype.isCustomHost=function(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"},Object.defineProperty(t.prototype,"host",{get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Se.set("host:"+this._host,this.internalHost))},enumerable:!1,configurable:!0}),t.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},t.prototype.toURLString=function(){var e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+e+this.host+"/"+n},t}();function Ws(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bi(t,e,n){p(typeof e=="string","typeof type must == string"),p(typeof n=="object","typeof params must == object");var r;if(e===Ti)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ii)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ws(t)&&(n.ns=t.namespace);var i=[];return D(n,function(o,s){i.push(o+"="+s)}),r+i.join("&")}/**
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
 */var Us=function(){function t(){this.counters_={}}return t.prototype.incrementCounter=function(e,n){n===void 0&&(n=1),ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n},t.prototype.get=function(){return ys(this.counters_)},t}();/**
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
 */var on={},sn={};function Un(t){var e=t.toString();return on[e]||(on[e]=new Us),on[e]}function Bs(t,e){var n=t.toString();return sn[n]||(sn[n]=e()),sn[n]}/**
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
 */var Qs=function(){function t(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return t.prototype.closeAfter=function(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.prototype.handleResponse=function(e,n){var r=this;this.pendingResponses[e]=n;for(var i=function(){var a=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var u=function(c){a[c]&&Ve(function(){r.onMessage_(a[c])})},l=0;l<a.length;++l)u(l);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var s=i();if(s==="break")break}},t}();/**
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
 */var wr="start",Vs="close",Gs="pLPCommand",Hs="pRTLPCB",Ri="id",Ni="pw",ki="ser",js="cb",Ys="seg",zs="ts",qs="d",Ks="dframe",Pi=1870,Ai=30,$s=Pi-Ai,Xs=25e3,Js=3e4,Bn=function(){function t(e,n,r,i,o,s,a){var u=this;this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dt(e),this.stats_=Un(n),this.urlFn=function(l){return u.appCheckToken&&(l[_n]=u.appCheckToken),bi(n,Ii,l)}}return t.prototype.open=function(e,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Qs(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null},Math.floor(Js)),Ns(function(){if(!r.isClosed_){r.scriptTagHolder=new Zs(function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var u=Z(s,5),l=u[0],c=u[1],f=u[2];if(u[3],u[4],r.incrementIncomingBytes_(s),!!r.scriptTagHolder)if(r.connectTimeoutTimer_&&(clearTimeout(r.connectTimeoutTimer_),r.connectTimeoutTimer_=null),r.everConnected_=!0,l===wr)r.id=c,r.password=f;else if(l===Vs)c?(r.scriptTagHolder.sendNewPolls=!1,r.myPacketOrderer.closeAfter(c,function(){r.onClosed_()})):r.onClosed_();else throw new Error("Unrecognized command received: "+l)},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var u=Z(s,2),l=u[0],c=u[1];r.incrementIncomingBytes_(s),r.myPacketOrderer.handleResponse(l,c)},function(){r.onClosed_()},r.urlFn);var i={};i[wr]="t",i[ki]=Math.floor(Math.random()*1e8),r.scriptTagHolder.uniqueCallbackIdentifier&&(i[js]=r.scriptTagHolder.uniqueCallbackIdentifier),i[yi]=Fn,r.transportSessionId&&(i[mi]=r.transportSessionId),r.lastSessionId&&(i[Si]=r.lastSessionId),r.applicationId&&(i[Fs]=r.applicationId),r.appCheckToken&&(i[_n]=r.appCheckToken),typeof location!="undefined"&&location.hostname&&wi.test(location.hostname)&&(i[Ci]=Ei);var o=r.urlFn(i);r.log_("Connecting via long-poll to "+o),r.scriptTagHolder.addTag(o,function(){})}})},t.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},t.forceAllow=function(){t.forceAllow_=!0},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){return t.forceAllow_?!0:!t.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Ps()&&!As()},t.prototype.markConnectionHealthy=function(){},t.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.prototype.send=function(e){var n=x(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);for(var r=fs(n),i=vi(r,$s),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},t.prototype.addDisconnectPingFrame=function(e,n){this.myDisconnFrame=document.createElement("iframe");var r={};r[Ks]="t",r[Ri]=e,r[Ni]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},t.prototype.incrementIncomingBytes_=function(e){var n=x(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)},t}(),Zs=function(){function t(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hi(),window[Gs+this.uniqueCallbackIdentifier]=e,window[Hs+this.uniqueCallbackIdentifier]=n,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}var a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(u){M("frame writing exception"),u.stack&&M(u.stack),M(u)}}}return t.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{var n=e.contentWindow.document;n||M("No IE domain setting required")}catch{var r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},t.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){e.myIFrame!==null&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var n=this.onDisconnect;n&&(this.onDisconnect=null,n())},t.prototype.startLongPoll=function(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););},t.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[Ri]=this.myID,e[Ni]=this.myPW,e[ki]=this.currentSerial;for(var n=this.urlFn(e),r="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+Ai+r.length<=Pi){var s=this.pendingSegs.shift();r=r+"&"+Ys+i+"="+s.seg+"&"+zs+i+"="+s.ts+"&"+qs+i+"="+s.d,i++}else break}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1},t.prototype.enqueueSegment=function(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()},t.prototype.addLongPollTag_=function(e,n){var r=this;this.outstandingRequests.add(n);var i=function(){r.outstandingRequests.delete(n),r.newRequest_()},o=setTimeout(i,Math.floor(Xs)),s=function(){clearTimeout(o),i()};this.addTag(e,s)},t.prototype.addTag=function(e,n){var r=this;setTimeout(function(){try{if(!r.sendNewPolls)return;var i=r.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=function(){M("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},r.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},t}();/**
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
 */var ea=16384,ta=45e3,It=null;typeof MozWebSocket!="undefined"?It=MozWebSocket:typeof WebSocket!="undefined"&&(It=WebSocket);var we=function(){function t(e,n,r,i,o,s,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dt(this.connId),this.stats_=Un(n),this.connURL=t.connectionURL_(n,s,a,i),this.nodeAdmin=n.nodeAdmin}return t.connectionURL_=function(e,n,r,i){var o={};return o[yi]=Fn,typeof location!="undefined"&&location.hostname&&wi.test(location.hostname)&&(o[Ci]=Ei),n&&(o[mi]=n),r&&(o[Si]=r),i&&(o[_n]=i),bi(e,Ti,o)},t.prototype.open=function(e,n){var r=this;this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Se.set("previous_websocket_failure",!0);try{var i,o,s,a;if(!ai()){var o={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new It(this.connURL,[],o)}}catch(l){this.log_("Error instantiating WebSocket.");var u=l.message||l.data;u&&this.log_(u),this.onClosed_();return}this.mySock.onopen=function(){r.log_("Websocket connected."),r.everConnected_=!0},this.mySock.onclose=function(){r.log_("Websocket connection was disconnected."),r.mySock=null,r.onClosed_()},this.mySock.onmessage=function(l){r.handleIncomingFrame(l)},this.mySock.onerror=function(l){r.log_("WebSocket error.  Closing connection.");var c=l.message||l.data;c&&r.log_(c),r.onClosed_()}},t.prototype.start=function(){},t.forceDisallow=function(){t.forceDisallow_=!0},t.isAvailable=function(){var e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&It!==null&&!t.forceDisallow_},t.previouslyFailed=function(){return Se.isInMemoryStorage||Se.get("previous_websocket_failure")===!0},t.prototype.markConnectionHealthy=function(){Se.remove("previous_websocket_failure")},t.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var n=this.frames.join("");this.frames=null;var r=Dn(n);this.onMessage(r)}},t.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},t.prototype.extractFrameCount_=function(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){var n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e},t.prototype.handleIncomingFrame=function(e){if(this.mySock!==null){var n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{var r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}},t.prototype.send=function(e){this.resetKeepAlive();var n=x(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);var r=vi(n,ea);r.length>1&&this.sendString_(String(r.length));for(var i=0;i<r.length;i++)this.sendString_(r[i])},t.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(ta))},t.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}();/**
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
 */var na=function(){function t(e){this.initTransports_(e)}return Object.defineProperty(t,"ALL_TRANSPORTS",{get:function(){return[Bn,we]},enumerable:!1,configurable:!0}),t.prototype.initTransports_=function(e){var n,r,i=we&&we.isAvailable(),o=i&&!we.previouslyFailed();if(e.webSocketOnly&&(i||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[we];else{var s=this.transports_=[];try{for(var a=re(t.ALL_TRANSPORTS),u=a.next();!u.done;u=a.next()){var l=u.value;l&&l.isAvailable()&&s.push(l)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}},t.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},t.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},t}();/**
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
 */var ra=6e4,ia=5e3,oa=10*1024,sa=100*1024,an="t",Sr="d",aa="s",Tr="r",ua="e",Ir="o",br="a",Rr="n",Nr="p",la="h",Oi=function(){function t(e,n,r,i,o,s,a,u,l,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dt("c:"+this.id+":"),this.transportManager_=new na(n),this.log_("Connection created"),this.start_()}return t.prototype.start_=function(){var e=this,n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(r,i)},Math.floor(0));var o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=et(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>sa?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>oa?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(o)))},t.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.prototype.disconnReceiver_=function(e){var n=this;return function(r){e===n.conn_?n.onConnectionLost_(r):e===n.secondaryConn_?(n.log_("Secondary connection lost."),n.onSecondaryConnectionLost_()):n.log_("closing an old connection")}},t.prototype.connReceiver_=function(e){var n=this;return function(r){n.state_!==2&&(e===n.rx_?n.onPrimaryMessageReceived_(r):e===n.secondaryConn_?n.onSecondaryMessageReceived_(r):n.log_("message on old connection"))}},t.prototype.sendRequest=function(e){var n={t:"d",d:e};this.sendData_(n)},t.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.prototype.onSecondaryControl_=function(e){if(an in e){var n=e[an];n===br?this.upgradeIfSecondaryHealthy_():n===Tr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ir&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.prototype.onSecondaryMessageReceived_=function(e){var n=$e("t",e),r=$e("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)},t.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nr,d:{}}}))},t.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:br,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.prototype.onPrimaryMessageReceived_=function(e){var n=$e("t",e),r=$e("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)},t.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},t.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.prototype.onControl_=function(e){var n=$e(an,e);if(Sr in e){var r=e[Sr];if(n===la)this.onHandshake_(r);else if(n===Rr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aa?this.onConnectionShutdown_(r):n===Tr?this.onReset_(r):n===ua?vn("Server Error: "+r):n===Ir?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vn("Unknown control packet command: "+n)}},t.prototype.onHandshake_=function(e){var n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fn!==r&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},t.prototype.startUpgrade_=function(e){var n=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var r=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(r,i),et(function(){n.secondaryConn_&&(n.log_("Timed out trying to upgrade."),n.secondaryConn_.close())},Math.floor(ra))},t.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())},t.prototype.onConnectionEstablished_=function(e,n){var r=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):et(function(){r.sendPingOnPrimaryIfNecessary_()},Math.floor(ia))},t.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nr,d:{}}}))},t.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()},t.prototype.onConnectionLost_=function(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Se.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},t.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},t.prototype.sendData_=function(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)},t.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},t}();/**
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
 */var xi=function(){function t(){}return t.prototype.put=function(e,n,r,i){},t.prototype.merge=function(e,n,r,i){},t.prototype.refreshAuthToken=function(e){},t.prototype.refreshAppCheckToken=function(e){},t.prototype.onDisconnectPut=function(e,n,r){},t.prototype.onDisconnectMerge=function(e,n,r){},t.prototype.onDisconnectCancel=function(e,n){},t.prototype.reportStats=function(e){},t}();/**
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
 */var Di=function(){function t(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return t.prototype.trigger=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Array.isArray(this.listeners_[e]))for(var i=Qe([],Z(this.listeners_[e])),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)},t.prototype.on=function(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});var i=this.getInitialEvent(e);i&&n.apply(r,i)},t.prototype.off=function(e,n,r){this.validateEventType_(e);for(var i=this.listeners_[e]||[],o=0;o<i.length;o++)if(i[o].callback===n&&(!r||r===i[o].context)){i.splice(o,1);return}},t.prototype.validateEventType_=function(e){p(this.allowedEvents_.find(function(n){return n===e}),"Unknown event: "+e)},t}();/**
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
 */var kr=function(t){O(e,t);function e(){var n=t.call(this,["online"])||this;return n.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!si()&&(window.addEventListener("online",function(){n.online_||(n.online_=!0,n.trigger("online",!0))},!1),window.addEventListener("offline",function(){n.online_&&(n.online_=!1,n.trigger("online",!1))},!1)),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return p(n==="online","Unknown event type: "+n),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(Di);/**
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
 */var Pr=32,Ar=768,I=function(){function t(e,n){if(n===void 0){this.pieces_=e.split("/");for(var r=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}return t.prototype.toString=function(){for(var e="",n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"},t}();function T(){return new I("")}function E(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _e(t){return t.pieces_.length-t.pieceNum_}function b(t){var e=t.pieceNum_;return e<t.pieces_.length&&e++,new I(t.pieces_,e)}function Qn(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ca(t){for(var e="",n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function st(t,e){return e===void 0&&(e=0),t.pieces_.slice(t.pieceNum_+e)}function Li(t){if(t.pieceNum_>=t.pieces_.length)return null;for(var e=[],n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new I(e,0)}function k(t,e){for(var n=[],r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof I)for(var r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else for(var i=e.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new I(n,0)}function w(t){return t.pieceNum_>=t.pieces_.length}function B(t,e){var n=E(t),r=E(e);if(n===null)return e;if(n===r)return B(b(t),b(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fa(t,e){for(var n=st(t,0),r=st(e,0),i=0;i<n.length&&i<r.length;i++){var o=Pe(n[i],r[i]);if(o!==0)return o}return n.length===r.length?0:n.length<r.length?-1:1}function Vn(t,e){if(_e(t)!==_e(e))return!1;for(var n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function j(t,e){var n=t.pieceNum_,r=e.pieceNum_;if(_e(t)>_e(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}var ha=function(){function t(e,n){this.errorPrefix_=n,this.parts_=st(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(var r=0;r<this.parts_.length;r++)this.byteLength_+=Ft(this.parts_[r]);Mi(this)}return t}();function da(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ft(e),Mi(t)}function pa(t){var e=t.parts_.pop();t.byteLength_-=Ft(e),t.parts_.length>0&&(t.byteLength_-=1)}function Mi(t){if(t.byteLength_>Ar)throw new Error(t.errorPrefix_+"has a key path longer than "+Ar+" bytes ("+t.byteLength_+").");if(t.parts_.length>Pr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pr+") or object contains a cycle "+Ee(t))}function Ee(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */var va=function(t){O(e,t);function e(){var n=t.call(this,["visible"])||this,r,i;return typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(i="visibilitychange",r="hidden"):typeof document.mozHidden!="undefined"?(i="mozvisibilitychange",r="mozHidden"):typeof document.msHidden!="undefined"?(i="msvisibilitychange",r="msHidden"):typeof document.webkitHidden!="undefined"&&(i="webkitvisibilitychange",r="webkitHidden")),n.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[r];o!==n.visible_&&(n.visible_=o,n.trigger("visible",o))},!1),n}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(n){return p(n==="visible","Unknown event type: "+n),[this.visible_]},e}(Di);/**
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
 */var Xe=1e3,_a=60*5*1e3,ga=3*1e3,Or=30*1e3,ya=1.3,ma=3e4,Ca="server_kill",xr=3,be=function(t){O(e,t);function e(n,r,i,o,s,a,u,l){var c=t.call(this)||this;if(c.repoInfo_=n,c.applicationId_=r,c.onDataUpdate_=i,c.onConnectStatus_=o,c.onServerInfoUpdate_=s,c.authTokenProvider_=a,c.appCheckTokenProvider_=u,c.authOverride_=l,c.id=e.nextPersistentConnectionId_++,c.log_=dt("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=Xe,c.maxReconnectDelay_=_a,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,l&&!ai())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return va.getInstance().on("visible",c.onVisible_,c),n.host.indexOf("fblocal")===-1&&kr.getInstance().on("online",c.onOnline_,c),c}return e.prototype.sendRequest=function(n,r,i){var o=++this.requestNumber_,s={r:o,a:n,b:r};this.log_(x(s)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[o]=i)},e.prototype.get=function(n){var r=this;this.initConnection_();var i=new Q,o={p:n._path.toString(),q:n._queryObject},s={action:"g",request:o,onComplete:function(u){var l=u.d;u.s==="ok"?(r.onDataUpdate_(o.p,l,!1,null),i.resolve(l)):i.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var u=r.outstandingGets_[a];u===void 0||s!==u||(delete r.outstandingGets_[a],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),r.log_("get "+a+" timed out on connection"),i.reject(new Error("Client is offline.")))},ga),this.connected_&&this.sendGet_(a),i.promise},e.prototype.listen=function(n,r,i,o){this.initConnection_();var s=n._queryIdentifier,a=n._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),p(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");var u={onComplete:o,hashFn:r,query:n,tag:i};this.listens.get(a).set(s,u),this.connected_&&this.sendListen_(u)},e.prototype.sendGet_=function(n){var r=this,i=this.outstandingGets_[n];this.sendRequest("g",i.request,function(o){delete r.outstandingGets_[n],r.outstandingGetCount_--,r.outstandingGetCount_===0&&(r.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},e.prototype.sendListen_=function(n){var r=this,i=n.query,o=i._path.toString(),s=i._queryIdentifier;this.log_("Listen on "+o+" for "+s);var a={p:o},u="q";n.tag&&(a.q=i._queryObject,a.t=n.tag),a.h=n.hashFn(),this.sendRequest(u,a,function(l){var c=l.d,f=l.s;e.warnOnListenWarnings_(c,i);var h=r.listens.get(o)&&r.listens.get(o).get(s);h===n&&(r.log_("listen response",l),f!=="ok"&&r.removeListen_(o,s),n.onComplete&&n.onComplete(f,c))})},e.warnOnListenWarnings_=function(n,r){if(n&&typeof n=="object"&&ee(n,"w")){var i=Re(n,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+r._queryParams.getIndex().toString()+'"',s=r._path.toString();F("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(s+" to your security rules for better performance."))}}},e.prototype.refreshAuthToken=function(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(n)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(n){var r=n&&n.length===40;(r||rs(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Or)},e.prototype.refreshAppCheckToken=function(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},function(){})},e.prototype.tryAuth=function(){var n=this;if(this.connected_&&this.authToken_){var r=this.authToken_,i=is(r)?"auth":"gauth",o={cred:r};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(s){var a=s.s,u=s.d||"error";n.authToken_===r&&(a==="ok"?n.invalidAuthTokenCount_=0:n.onAuthRevoked_(a,u))})}},e.prototype.tryAppCheck=function(){var n=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},function(r){var i=r.s,o=r.d||"error";i==="ok"?n.invalidAppCheckTokenCount_=0:n.onAppCheckRevoked_(i,o)})},e.prototype.unlisten=function(n,r){var i=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),p(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");var s=this.removeListen_(i,o);s&&this.connected_&&this.sendUnlisten_(i,o,n._queryObject,r)},e.prototype.sendUnlisten_=function(n,r,i,o){this.log_("Unlisten on "+n+" for "+r);var s={p:n},a="n";o&&(s.q=i,s.t=o),this.sendRequest(a,s)},e.prototype.onDisconnectPut=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:r,onComplete:i})},e.prototype.onDisconnectMerge=function(n,r,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,r,i):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:r,onComplete:i})},e.prototype.onDisconnectCancel=function(n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,r):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:r})},e.prototype.sendOnDisconnect_=function(n,r,i,o){var s={p:r,d:i};this.log_("onDisconnect "+n,s),this.sendRequest(n,s,function(a){o&&setTimeout(function(){o(a.s,a.d)},Math.floor(0))})},e.prototype.put=function(n,r,i,o){this.putInternal("p",n,r,i,o)},e.prototype.merge=function(n,r,i,o){this.putInternal("m",n,r,i,o)},e.prototype.putInternal=function(n,r,i,o,s){this.initConnection_();var a={p:r,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:n,request:a,onComplete:o}),this.outstandingPutCount_++;var u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+r)},e.prototype.sendPut_=function(n){var r=this,i=this.outstandingPuts_[n].action,o=this.outstandingPuts_[n].request,s=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(i,o,function(a){r.log_(i+" response",a),delete r.outstandingPuts_[n],r.outstandingPutCount_--,r.outstandingPutCount_===0&&(r.outstandingPuts_=[]),s&&s(a.s,a.d)})},e.prototype.reportStats=function(n){var r=this;if(this.connected_){var i={c:n};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var s=o.s;if(s!=="ok"){var a=o.d;r.log_("reportStats","Error sending stats: "+a)}})}},e.prototype.onDataMessage_=function(n){if("r"in n){this.log_("from server: "+x(n));var r=n.r,i=this.requestCBHash_[r];i&&(delete this.requestCBHash_[r],i(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}},e.prototype.onDataPush_=function(n,r){this.log_("handleServerMessage",n,r),n==="d"?this.onDataUpdate_(r.p,r.d,!1,r.t):n==="m"?this.onDataUpdate_(r.p,r.d,!0,r.t):n==="c"?this.onListenRevoked_(r.p,r.q):n==="ac"?this.onAuthRevoked_(r.s,r.d):n==="apc"?this.onAppCheckRevoked_(r.s,r.d):n==="sd"?this.onSecurityDebugPacket_(r):vn("Unrecognized action received from server: "+x(n)+`
Are you using the latest client?`)},e.prototype.onReady_=function(n,r){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=r,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(n){var r=this;p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){r.establishConnectionTimer_=null,r.establishConnection_()},Math.floor(n))},e.prototype.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},e.prototype.onVisible_=function(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)),this.visible_=n},e.prototype.onOnline_=function(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var n=new Date().getTime()-this.lastConnectionEstablishedTime_;n>ma&&(this.reconnectDelay_=Xe),this.lastConnectionEstablishedTime_=null}var r=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-r);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ya)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){return os(this,void 0,void 0,function(){var n,r,i,o,s,a,u,l,c,f,h,d,v,g,_=this;return hs(this,function(m){switch(m.label){case 0:if(!this.shouldReconnect_())return[3,4];this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null,n=this.onDataMessage_.bind(this),r=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+e.nextConnectionId_++,s=this.lastSessionId,a=!1,u=null,l=function(){u?u.close():(a=!0,i())},c=function(A){p(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(A)},this.realtime_={close:l,sendRequest:c},f=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,m.label=1;case 1:return m.trys.push([1,3,,4]),[4,Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)])];case 2:return h=Z.apply(void 0,[m.sent(),2]),d=h[0],v=h[1],a?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=v&&v.token,u=new Oi(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,r,i,function(A){F(A+" ("+_.repoInfo_.toString()+")"),_.interrupt(Ca)},s)),[3,4];case 3:return g=m.sent(),this.log_("Failed to get token: "+g),a||(this.repoInfo_.nodeAdmin&&F(g),l()),[3,4];case 4:return[2]}})})},e.prototype.interrupt=function(n){M("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(n){M("Resuming connection for reason: "+n),delete this.interruptReasons_[n],hn(this.interruptReasons_)&&(this.reconnectDelay_=Xe,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(n){var r=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:r})},e.prototype.cancelSentTransactions_=function(){for(var n=0;n<this.outstandingPuts_.length;n++){var r=this.outstandingPuts_[n];r&&"h"in r.request&&r.queued&&(r.onComplete&&r.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(n,r){var i;r?i=r.map(function(s){return Ln(s)}).join("$"):i="default";var o=this.removeListen_(n,i);o&&o.onComplete&&o.onComplete("permission_denied")},e.prototype.removeListen_=function(n,r){var i=new I(n).toString(),o;if(this.listens.has(i)){var s=this.listens.get(i);o=s.get(r),s.delete(r),s.size===0&&this.listens.delete(i)}else o=void 0;return o},e.prototype.onAuthRevoked_=function(n,r){M("Auth token revoked: "+n+"/"+r),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xr&&(this.reconnectDelay_=Or,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onAppCheckRevoked_=function(n,r){M("App check token revoked: "+n+"/"+r),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xr&&this.appCheckTokenProvider_.notifyForInvalidToken())},e.prototype.onSecurityDebugPacket_=function(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))},e.prototype.restoreState_=function(){var n,r,i,o;this.tryAuth(),this.tryAppCheck();try{for(var s=re(this.listens.values()),a=s.next();!a.done;a=s.next()){var u=a.value;try{for(var l=(i=void 0,re(u.values())),c=l.next();!c.done;c=l.next()){var f=c.value;this.sendListen_(f)}}catch(v){i={error:v}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}}}catch(v){n={error:v}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}for(var h=0;h<this.outstandingPuts_.length;h++)this.outstandingPuts_[h]&&this.sendPut_(h);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var h=0;h<this.outstandingGets_.length;h++)this.outstandingGets_[h]&&this.sendGet_(h)},e.prototype.sendConnectStats_=function(){var n={},r="js";n["sdk."+r+"."+li.replace(/\./g,"-")]=1,si()?n["framework.cordova"]=1:ds()&&(n["framework.reactnative"]=1),this.reportStats(n)},e.prototype.shouldReconnect_=function(){var n=kr.getInstance().currentlyOnline();return hn(this.interruptReasons_)&&n},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(xi);/**
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
 */var S=function(){function t(e,n){this.name=e,this.node=n}return t.Wrap=function(e,n){return new t(e,n)},t}();/**
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
 */var Ut=function(){function t(){}return t.prototype.getCompare=function(){return this.compare.bind(this)},t.prototype.indexedValueChanged=function(e,n){var r=new S(ce,e),i=new S(ce,n);return this.compare(r,i)!==0},t.prototype.minPost=function(){return S.MIN},t}();/**
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
 */var Et,Fi=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return Et},set:function(n){Et=n},enumerable:!1,configurable:!0}),e.prototype.compare=function(n,r){return Pe(n.name,r.name)},e.prototype.isDefinedOn=function(n){throw ft("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(n,r){return!1},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return new S(oe,Et)},e.prototype.makePost=function(n,r){return p(typeof n=="string","KeyIndex indexValue must always be a string."),new S(n,Et)},e.prototype.toString=function(){return".key"},e}(Ut),ne=new Fi;/**
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
 */var wt=function(){function t(e,n,r,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!e.isEmpty();)if(e=e,s=n?r(e.key,n):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}return t.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n},t.prototype.hasNext=function(){return this.nodeStack_.length>0},t.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},t}(),X=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:t.RED,this.left=i!=null?i:ue.EMPTY_NODE,this.right=o!=null?o:ue.EMPTY_NODE}return t.prototype.copy=function(e,n,r,i,o){return new t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)},t.prototype.count=function(){return this.left.count()+1+this.right.count()},t.prototype.isEmpty=function(){return!1},t.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},t.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.prototype.minKey=function(){return this.min_().key},t.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.prototype.insert=function(e,n,r){var i=this,o=r(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()},t.prototype.removeMin_=function(){if(this.left.isEmpty())return ue.EMPTY_NODE;var e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()},t.prototype.remove=function(e,n){var r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ue.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()},t.prototype.isRed_=function(){return this.color},t.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},t.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e},t.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e},t.prototype.rotateLeft_=function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},t.prototype.rotateRight_=function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},t.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)},t.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},t.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},t.RED=!0,t.BLACK=!1,t}(),Ea=function(){function t(){}return t.prototype.copy=function(e,n,r,i,o){return this},t.prototype.insert=function(e,n,r){return new X(e,n,null)},t.prototype.remove=function(e,n){return this},t.prototype.count=function(){return 0},t.prototype.isEmpty=function(){return!0},t.prototype.inorderTraversal=function(e){return!1},t.prototype.reverseTraversal=function(e){return!1},t.prototype.minKey=function(){return null},t.prototype.maxKey=function(){return null},t.prototype.check_=function(){return 0},t.prototype.isRed_=function(){return!1},t}(),ue=function(){function t(e,n){n===void 0&&(n=t.EMPTY_NODE),this.comparator_=e,this.root_=n}return t.prototype.insert=function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,X.BLACK,null,null))},t.prototype.remove=function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))},t.prototype.get=function(e){for(var n,r=this.root_;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null},t.prototype.getPredecessorKey=function(e){for(var n,r=this.root_,i=null;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.prototype.isEmpty=function(){return this.root_.isEmpty()},t.prototype.count=function(){return this.root_.count()},t.prototype.minKey=function(){return this.root_.minKey()},t.prototype.maxKey=function(){return this.root_.maxKey()},t.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},t.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},t.prototype.getIterator=function(e){return new wt(this.root_,null,this.comparator_,!1,e)},t.prototype.getIteratorFrom=function(e,n){return new wt(this.root_,e,this.comparator_,!1,n)},t.prototype.getReverseIteratorFrom=function(e,n){return new wt(this.root_,e,this.comparator_,!0,n)},t.prototype.getReverseIterator=function(e){return new wt(this.root_,null,this.comparator_,!0,e)},t.EMPTY_NODE=new Ea,t}();/**
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
 */function wa(t,e){return Pe(t.name,e.name)}function Gn(t,e){return Pe(t,e)}/**
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
 */var gn;function Sa(t){gn=t}var Wi=function(t){return typeof t=="number"?"number:"+_i(t):"string:"+t},Ui=function(t){if(t.isLeafNode()){var e=t.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ee(e,".sv"),"Priority must be a string or number.")}else p(t===gn||t.isEmpty(),"priority of unexpected type.");p(t===gn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */var Dr,Me=function(){function t(e,n){n===void 0&&(n=t.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=n,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ui(this.priorityNode_)}return Object.defineProperty(t,"__childrenNodeConstructor",{get:function(){return Dr},set:function(e){Dr=e},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!0},t.prototype.getPriority=function(){return this.priorityNode_},t.prototype.updatePriority=function(e){return new t(this.value_,e)},t.prototype.getImmediateChild=function(e){return e===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.getChild=function(e){return w(e)?this:E(e)===".priority"?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE},t.prototype.hasChild=function(){return!1},t.prototype.getPredecessorChildName=function(e,n){return null},t.prototype.updateImmediateChild=function(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)},t.prototype.updateChild=function(e,n){var r=E(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(p(r!==".priority"||_e(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(e),n)))},t.prototype.isEmpty=function(){return!1},t.prototype.numChildren=function(){return 0},t.prototype.forEachChild=function(e,n){return!1},t.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wi(this.priorityNode_.val())+":");var n=typeof this.value_;e+=n+":",n==="number"?e+=_i(this.value_):e+=this.value_,this.lazyHash_=di(e)}return this.lazyHash_},t.prototype.getValue=function(){return this.value_},t.prototype.compareTo=function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},t.prototype.compareToLeafNode_=function(e){var n=typeof e.value_,r=typeof this.value_,i=t.VALUE_TYPE_ORDER.indexOf(n),o=t.VALUE_TYPE_ORDER.indexOf(r);return p(i>=0,"Unknown leaf type: "+n),p(o>=0,"Unknown leaf type: "+r),i===o?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i},t.prototype.withIndex=function(){return this},t.prototype.isIndexed=function(){return!0},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1},t.VALUE_TYPE_ORDER=["object","boolean","number","string"],t}();/**
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
 */var Bi,Qi;function Ta(t){Bi=t}function Ia(t){Qi=t}var ba=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.getPriority(),o=r.node.getPriority(),s=i.compareTo(o);return s===0?Pe(n.name,r.name):s},e.prototype.isDefinedOn=function(n){return!n.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(n,r){return!n.getPriority().equals(r.getPriority())},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return new S(oe,new Me("[PRIORITY-POST]",Qi))},e.prototype.makePost=function(n,r){var i=Bi(n);return new S(r,new Me("[PRIORITY-POST]",i))},e.prototype.toString=function(){return".priority"},e}(Ut),R=new ba;/**
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
 */var Ra=Math.log(2),Na=function(){function t(e){var n=function(o){return parseInt(Math.log(o)/Ra,10)},r=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=n(e+1),this.current_=this.count-1;var i=r(this.count);this.bits_=e+1&i}return t.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},t}(),bt=function(t,e,n,r){t.sort(e);var i=function(u,l){var c=l-u,f,h;if(c===0)return null;if(c===1)return f=t[u],h=n?n(f):f,new X(h,f.node,X.BLACK,null,null);var d=parseInt(c/2,10)+u,v=i(u,d),g=i(d+1,l);return f=t[d],h=n?n(f):f,new X(h,f.node,X.BLACK,v,g)},o=function(u){for(var l=null,c=null,f=t.length,h=function(m,A){var H=f-m,N=f;f-=m;var W=i(H+1,N),U=t[H],Ye=n?n(U):U;d(new X(Ye,U.node,A,null,W))},d=function(m){l?(l.left=m,l=m):(c=m,l=m)},v=0;v<u.count;++v){var g=u.nextBitIsOne(),_=Math.pow(2,u.count-(v+1));g?h(_,X.BLACK):(h(_,X.BLACK),h(_,X.RED))}return c},s=new Na(t.length),a=o(s);return new ue(r||e,a)};/**
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
 */var un,De={},Rt=function(){function t(e,n){this.indexes_=e,this.indexSet_=n}return Object.defineProperty(t,"Default",{get:function(){return p(De&&R,"ChildrenNode.ts has not been loaded"),un=un||new t({".priority":De},{".priority":R}),un},enumerable:!1,configurable:!0}),t.prototype.get=function(e){var n=Re(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ue?n:null},t.prototype.hasIndex=function(e){return ee(this.indexSet_,e.toString())},t.prototype.addIndex=function(e,n){p(e!==ne,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,o=n.getIterator(S.Wrap),s=o.getNext();s;)i=i||e.isDefinedOn(s.node),r.push(s),s=o.getNext();var a;i?a=bt(r,e.getCompare()):a=De;var u=e.toString(),l=dn({},this.indexSet_);l[u]=e;var c=dn({},this.indexes_);return c[u]=a,new t(c,l)},t.prototype.addToIndexes=function(e,n){var r=this,i=St(this.indexes_,function(o,s){var a=Re(r.indexSet_,s);if(p(a,"Missing index implementation for "+s),o===De)if(a.isDefinedOn(e.node)){for(var u=[],l=n.getIterator(S.Wrap),c=l.getNext();c;)c.name!==e.name&&u.push(c),c=l.getNext();return u.push(e),bt(u,a.getCompare())}else return De;else{var f=n.get(e.name),h=o;return f&&(h=h.remove(new S(e.name,f))),h.insert(e,e.node)}});return new t(i,this.indexSet_)},t.prototype.removeFromIndexes=function(e,n){var r=St(this.indexes_,function(i){if(i===De)return i;var o=n.get(e.name);return o?i.remove(new S(e.name,o)):i});return new t(r,this.indexSet_)},t}();/**
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
 */var Je,C=function(){function t(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ui(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(t,"EMPTY_NODE",{get:function(){return Je||(Je=new t(new ue(Gn),null,Rt.Default))},enumerable:!1,configurable:!0}),t.prototype.isLeafNode=function(){return!1},t.prototype.getPriority=function(){return this.priorityNode_||Je},t.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)},t.prototype.getImmediateChild=function(e){if(e===".priority")return this.getPriority();var n=this.children_.get(e);return n===null?Je:n},t.prototype.getChild=function(e){var n=E(e);return n===null?this:this.getImmediateChild(n).getChild(b(e))},t.prototype.hasChild=function(e){return this.children_.get(e)!==null},t.prototype.updateImmediateChild=function(e,n){if(p(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);var r=new S(e,n),i=void 0,o=void 0;n.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),o=this.indexMap_.addToIndexes(r,this.children_));var s=i.isEmpty()?Je:this.priorityNode_;return new t(i,s,o)},t.prototype.updateChild=function(e,n){var r=E(e);if(r===null)return n;p(E(e)!==".priority"||_e(e)===1,".priority must be the last token in a path");var i=this.getImmediateChild(r).updateChild(b(e),n);return this.updateImmediateChild(r,i)},t.prototype.isEmpty=function(){return this.children_.isEmpty()},t.prototype.numChildren=function(){return this.children_.count()},t.prototype.val=function(e){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(R,function(u,l){n[u]=l.val(e),r++,o&&t.INTEGER_REGEXP_.test(u)?i=Math.max(i,Number(u)):o=!1}),!e&&o&&i<2*r){var s=[];for(var a in n)s[a]=n[a];return s}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.getPriority().isEmpty()||(e+="priority:"+Wi(this.getPriority().val())+":"),this.forEachChild(R,function(n,r){var i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":di(e)}return this.lazyHash_},t.prototype.getPredecessorChildName=function(e,n,r){var i=this.resolveIndex_(r);if(i){var o=i.getPredecessorKey(new S(e,n));return o?o.name:null}else return this.children_.getPredecessorKey(e)},t.prototype.getFirstChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.minKey();return r&&r.name}else return this.children_.minKey()},t.prototype.getFirstChild=function(e){var n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null},t.prototype.getLastChildName=function(e){var n=this.resolveIndex_(e);if(n){var r=n.maxKey();return r&&r.name}else return this.children_.maxKey()},t.prototype.getLastChild=function(e){var n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null},t.prototype.forEachChild=function(e,n){var r=this.resolveIndex_(e);return r?r.inorderTraversal(function(i){return n(i.name,i.node)}):this.children_.inorderTraversal(n)},t.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},t.prototype.getIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,function(s){return s});for(var i=this.children_.getIteratorFrom(e.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,e)<0;)i.getNext(),o=i.peek();return i},t.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},t.prototype.getReverseIteratorFrom=function(e,n){var r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,function(s){return s});for(var i=this.children_.getReverseIteratorFrom(e.name,S.Wrap),o=i.peek();o!=null&&n.compare(o,e)>0;)i.getNext(),o=i.peek();return i},t.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pt?-1:0},t.prototype.withIndex=function(e){if(e===ne||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)},t.prototype.isIndexed=function(e){return e===ne||this.indexMap_.hasIndex(e)},t.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){for(var r=this.getIterator(R),i=n.getIterator(R),o=r.getNext(),s=i.getNext();o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=r.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1},t.prototype.resolveIndex_=function(e){return e===ne?null:this.indexMap_.get(e.toString())},t.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,t}(),ka=function(t){O(e,t);function e(){return t.call(this,new ue(Gn),C.EMPTY_NODE,Rt.Default)||this}return e.prototype.compareTo=function(n){return n===this?0:1},e.prototype.equals=function(n){return n===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(n){return C.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(C),pt=new ka;Object.defineProperties(S,{MIN:{value:new S(ce,C.EMPTY_NODE)},MAX:{value:new S(oe,pt)}});Fi.__EMPTY_NODE=C.EMPTY_NODE;Me.__childrenNodeConstructor=C;Sa(pt);Ia(pt);/**
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
 */var Pa=!0;function P(t,e){if(e===void 0&&(e=null),t===null)return C.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){var n=t;return new Me(n,P(e))}if(!(t instanceof Array)&&Pa){var r=[],i=!1,o=t;if(D(o,function(l,c){if(l.substring(0,1)!=="."){var f=P(c);f.isEmpty()||(i=i||!f.getPriority().isEmpty(),r.push(new S(l,f)))}}),r.length===0)return C.EMPTY_NODE;var s=bt(r,wa,function(l){return l.name},Gn);if(i){var a=bt(r,R.getCompare());return new C(s,P(e),new Rt({".priority":a},{".priority":R}))}else return new C(s,P(e),Rt.Default)}else{var u=C.EMPTY_NODE;return D(t,function(l,c){if(ee(t,l)&&l.substring(0,1)!=="."){var f=P(c);(f.isLeafNode()||!f.isEmpty())&&(u=u.updateImmediateChild(l,f))}}),u.updatePriority(P(e))}}Ta(P);/**
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
 */var Hn=function(t){O(e,t);function e(n){var r=t.call(this)||this;return r.indexPath_=n,p(!w(n)&&E(n)!==".priority","Can't create PathIndex with empty path or .priority key"),r}return e.prototype.extractChild=function(n){return n.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(n){return!n.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(n,r){var i=this.extractChild(n.node),o=this.extractChild(r.node),s=i.compareTo(o);return s===0?Pe(n.name,r.name):s},e.prototype.makePost=function(n,r){var i=P(n),o=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(r,o)},e.prototype.maxPost=function(){var n=C.EMPTY_NODE.updateChild(this.indexPath_,pt);return new S(oe,n)},e.prototype.toString=function(){return st(this.indexPath_,0).join("/")},e}(Ut);/**
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
 */var Aa=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.compare=function(n,r){var i=n.node.compareTo(r.node);return i===0?Pe(n.name,r.name):i},e.prototype.isDefinedOn=function(n){return!0},e.prototype.indexedValueChanged=function(n,r){return!n.equals(r)},e.prototype.minPost=function(){return S.MIN},e.prototype.maxPost=function(){return S.MAX},e.prototype.makePost=function(n,r){var i=P(n);return new S(r,i)},e.prototype.toString=function(){return".value"},e}(Ut),jn=new Aa;/**
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
 */var Fe="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yn="-",Vi="z",Gi=786,Oa=function(){var t=0,e=[];return function(n){var r=n===t;t=n;var i,o=new Array(8);for(i=7;i>=0;i--)o[i]=Fe.charAt(n%64),n=Math.floor(n/64);p(n===0,"Cannot push at time == 0");var s=o.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)s+=Fe.charAt(e[i]);return p(s.length===20,"nextPushId: Length should be 20."),s}}(),Lr=function(t){if(t===""+Mn)return yn;var e=Tt(t);if(e!=null)return""+(e+1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);if(n.length<Gi)return n.push(yn),n.join("");for(var i=n.length-1;i>=0&&n[i]===Vi;)i--;if(i===-1)return oe;var o=n[i],s=Fe.charAt(Fe.indexOf(o)+1);return n[i]=s,n.slice(0,i+1).join("")},Mr=function(t){if(t===""+gi)return ce;var e=Tt(t);if(e!=null)return""+(e-1);for(var n=new Array(t.length),r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===yn?n.length===1?""+Mn:(delete n[n.length-1],n.join("")):(n[n.length-1]=Fe.charAt(Fe.indexOf(n[n.length-1])-1),n.join("")+Vi.repeat(Gi-n.length))};/**
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
 */function Hi(t){return{type:"value",snapshotNode:t}}function We(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function at(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ut(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xa(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */var Yn=function(){function t(e){this.index_=e}return t.prototype.updateChild=function(e,n,r,i,o,s){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(s!=null&&(r.isEmpty()?e.hasChild(n)?s.trackChildChange(at(n,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(We(n,r)):s.trackChildChange(ut(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)},t.prototype.updateFullNode=function(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(R,function(i,o){n.hasChild(i)||r.trackChildChange(at(i,o))}),n.isLeafNode()||n.forEachChild(R,function(i,o){if(e.hasChild(i)){var s=e.getImmediateChild(i);s.equals(o)||r.trackChildChange(ut(i,o,s))}else r.trackChildChange(We(i,o))})),n.withIndex(this.index_)},t.prototype.updatePriority=function(e,n){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(n)},t.prototype.filtersNodes=function(){return!1},t.prototype.getIndexedFilter=function(){return this},t.prototype.getIndex=function(){return this.index_},t}();/**
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
 */var ji=function(){function t(e){this.indexedFilter_=new Yn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=t.getStartPost_(e),this.endPost_=t.getEndPost_(e)}return t.prototype.getStartPost=function(){return this.startPost_},t.prototype.getEndPost=function(){return this.endPost_},t.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},t.prototype.updateChild=function(e,n,r,i,o,s){return this.matches(new S(n,r))||(r=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,o,s)},t.prototype.updateFullNode=function(e,n,r){n.isLeafNode()&&(n=C.EMPTY_NODE);var i=n.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);var o=this;return n.forEachChild(R,function(s,a){o.matches(new S(s,a))||(i=i.updateImmediateChild(s,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.indexedFilter_},t.prototype.getIndex=function(){return this.index_},t.getStartPost_=function(e){if(e.hasStart()){var n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()},t.getEndPost_=function(e){if(e.hasEnd()){var n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()},t}();/**
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
 */var Da=function(){function t(e){this.rangedFilter_=new ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}return t.prototype.updateChild=function(e,n,r,i,o,s){return this.rangedFilter_.matches(new S(n,r))||(r=C.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,o,s):this.fullLimitUpdateChild_(e,n,r,o,s)},t.prototype.updateFullNode=function(e,n,r){var i;if(n.isLeafNode()||n.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var s=0;o.hasNext()&&s<this.limit_;){var a=o.getNext(),u=void 0;if(this.reverse_?u=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:u=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,u)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);var l=void 0,c=void 0,f=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),l=this.rangedFilter_.getEndPost(),c=this.rangedFilter_.getStartPost();var h=this.index_.getCompare();f=function(_,m){return h(m,_)}}else o=i.getIterator(this.index_),l=this.rangedFilter_.getStartPost(),c=this.rangedFilter_.getEndPost(),f=this.index_.getCompare();for(var s=0,d=!1;o.hasNext();){var a=o.getNext();!d&&f(l,a)<=0&&(d=!0);var u=d&&s<this.limit_&&f(a,c)<=0;u?s++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)},t.prototype.updatePriority=function(e,n){return e},t.prototype.filtersNodes=function(){return!0},t.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.prototype.getIndex=function(){return this.index_},t.prototype.fullLimitUpdateChild_=function(e,n,r,i,o){var s;if(this.reverse_){var a=this.index_.getCompare();s=function(A,H){return a(H,A)}}else s=this.index_.getCompare();var u=e;p(u.numChildren()===this.limit_,"");var l=new S(n,r),c=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(u.hasChild(n)){for(var h=u.getImmediateChild(n),d=i.getChildAfterChild(this.index_,c,this.reverse_);d!=null&&(d.name===n||u.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var v=d==null?1:s(d,l),g=f&&!r.isEmpty()&&v>=0;if(g)return o!=null&&o.trackChildChange(ut(n,r,h)),u.updateImmediateChild(n,r);o!=null&&o.trackChildChange(at(n,h));var _=u.updateImmediateChild(n,C.EMPTY_NODE),m=d!=null&&this.rangedFilter_.matches(d);return m?(o!=null&&o.trackChildChange(We(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}else return r.isEmpty()?e:f&&s(c,l)>=0?(o!=null&&(o.trackChildChange(at(c.name,c.node)),o.trackChildChange(We(n,r))),u.updateImmediateChild(n,r).updateImmediateChild(c.name,C.EMPTY_NODE)):e},t}();/**
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
 */var Yi=function(){function t(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}return t.prototype.hasStart=function(){return this.startSet_},t.prototype.hasStartAfter=function(){return this.startAfterSet_},t.prototype.hasEndBefore=function(){return this.endBeforeSet_},t.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"},t.prototype.getIndexStartValue=function(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.prototype.getIndexStartName=function(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ce},t.prototype.hasEnd=function(){return this.endSet_},t.prototype.getIndexEndValue=function(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.prototype.getIndexEndName=function(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:oe},t.prototype.hasLimit=function(){return this.limitSet_},t.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},t.prototype.getLimit=function(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.prototype.getIndex=function(){return this.index_},t.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===R},t.prototype.copy=function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},t}();function La(t){return t.loadsAllData()?new Yn(t.getIndex()):t.hasLimit()?new Da(t):new ji(t)}function Ma(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Fa(t,e){var n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function mn(t,e,n){var r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Wa(t,e,n){var r;if(t.index_===ne)typeof e=="string"&&(e=Lr(e)),r=mn(t,e,n);else{var i=void 0;n==null?i=oe:i=Lr(n),r=mn(t,e,i)}return r.startAfterSet_=!0,r}function Cn(t,e,n){var r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Ua(t,e,n){var r,i;return t.index_===ne?(typeof e=="string"&&(e=Mr(e)),i=Cn(t,e,n)):(n==null?r=ce:r=Mr(n),i=Cn(t,e,r)),i.endBeforeSet_=!0,i}function Bt(t,e){var n=t.copy();return n.index_=e,n}function Fr(t){var e={};if(t.isDefault())return e;var n;return t.index_===R?n="$priority":t.index_===jn?n="$value":t.index_===ne?n="$key":(p(t.index_ instanceof Hn,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=x(n),t.startSet_&&(e.startAt=x(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+x(t.indexStartName_))),t.endSet_&&(e.endAt=x(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+x(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wr(t){var e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;var n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==R&&(e.i=t.index_.toString()),e}/**
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
 */var Ba=function(t){O(e,t);function e(n,r,i,o){var s=t.call(this)||this;return s.repoInfo_=n,s.onDataUpdate_=r,s.authTokenProvider_=i,s.appCheckTokenProvider_=o,s.log_=dt("p:rest:"),s.listens_={},s}return e.prototype.reportStats=function(n){throw new Error("Method not implemented.")},e.getListenId_=function(n,r){return r!==void 0?"tag$"+r:(p(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())},e.prototype.listen=function(n,r,i,o){var s=this,a=n._path.toString();this.log_("Listen called for "+a+" "+n._queryIdentifier);var u=e.getListenId_(n,i),l={};this.listens_[u]=l;var c=Fr(n._queryParams);this.restRequest_(a+".json",c,function(f,h){var d=h;if(f===404&&(d=null,f=null),f===null&&s.onDataUpdate_(a,d,!1,i),Re(s.listens_,u)===l){var v;f?f===401?v="permission_denied":v="rest_error:"+f:v="ok",o(v,null)}})},e.prototype.unlisten=function(n,r){var i=e.getListenId_(n,r);delete this.listens_[i]},e.prototype.get=function(n){var r=this,i=Fr(n._queryParams),o=n._path.toString(),s=new Q;return this.restRequest_(o+".json",i,function(a,u){var l=u;a===404&&(l=null,a=null),a===null?(r.onDataUpdate_(o,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise},e.prototype.refreshAuthToken=function(n){},e.prototype.restRequest_=function(n,r,i){var o=this;return r===void 0&&(r={}),r.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(function(s){var a=Z(s,2),u=a[0],l=a[1];u&&u.accessToken&&(r.auth=u.accessToken),l&&l.token&&(r.ac=l.token);var c=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+n+"?ns="+o.repoInfo_.namespace+ss(r);o.log_("Sending REST request for "+c);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(i&&f.readyState===4){o.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);var h=null;if(f.status>=200&&f.status<300){try{h=Dn(f.responseText)}catch{F("Failed to parse JSON response for "+c+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&F("Got unsuccessful REST response for "+c+" Status: "+f.status),i(f.status);i=null}},f.open("GET",c,!0),f.send()})},e}(xi);/**
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
 */var Qa=function(){function t(){this.rootNode_=C.EMPTY_NODE}return t.prototype.getNode=function(e){return this.rootNode_.getChild(e)},t.prototype.updateSnapshot=function(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)},t}();/**
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
 */function Nt(){return{value:null,children:new Map}}function Ge(t,e,n){if(w(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{var r=E(e);t.children.has(r)||t.children.set(r,Nt());var i=t.children.get(r);e=b(e),Ge(i,e,n)}}function En(t,e){if(w(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;var n=t.value;return t.value=null,n.forEachChild(R,function(o,s){Ge(t,new I(o),s)}),En(t,e)}else if(t.children.size>0){var r=E(e);if(e=b(e),t.children.has(r)){var i=En(t.children.get(r),e);i&&t.children.delete(r)}return t.children.size===0}else return!0}function wn(t,e,n){t.value!==null?n(e,t.value):Va(t,function(r,i){var o=new I(e.toString()+"/"+r);wn(i,o,n)})}function Va(t,e){t.children.forEach(function(n,r){e(r,n)})}/**
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
 */var zi=function(){function t(e){this.collection_=e,this.last_=null}return t.prototype.get=function(){var e=this.collection_.get(),n=dn({},e);return this.last_&&D(this.last_,function(r,i){n[r]=n[r]-i}),this.last_=e,n},t}();/**
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
 */var Ur=10*1e3,Ga=30*1e3,Ha=5*60*1e3,ja=function(){function t(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zi(e);var r=Ur+(Ga-Ur)*Math.random();et(this.reportStats_.bind(this),Math.floor(r))}return t.prototype.reportStats_=function(){var e=this,n=this.statsListener_.get(),r={},i=!1;D(n,function(o,s){s>0&&ee(e.statsToReport_,o)&&(r[o]=s,i=!0)}),i&&this.server_.reportStats(r),et(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ha))},t}();function Ya(t,e){t.statsToReport_[e]=!0}/**
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
 */var J;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(J||(J={}));function zn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */var za=function(){function t(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=J.ACK_USER_WRITE,this.source=zn()}return t.prototype.operationForChild=function(e){if(w(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new I(e));return new t(T(),n,this.revert)}else return p(E(this.path)===e,"operationForChild called for unrelated child."),new t(b(this.path),this.affectedTree,this.revert)},t}();/**
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
 */var qi=function(){function t(e,n){this.source=e,this.path=n,this.type=J.LISTEN_COMPLETE}return t.prototype.operationForChild=function(e){return w(this.path)?new t(this.source,T()):new t(this.source,b(this.path))},t}();/**
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
 */var Qt=function(){function t(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=J.OVERWRITE}return t.prototype.operationForChild=function(e){return w(this.path)?new t(this.source,T(),this.snap.getImmediateChild(e)):new t(this.source,b(this.path),this.snap)},t}();/**
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
 */var $n=function(){function t(e,n,r){this.source=e,this.path=n,this.children=r,this.type=J.MERGE}return t.prototype.operationForChild=function(e){if(w(this.path)){var n=this.children.subtree(new I(e));return n.isEmpty()?null:n.value?new Qt(this.source,T(),n.value):new t(this.source,T(),n)}else return p(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,b(this.path),this.children)},t.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},t}();/**
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
 */var ge=function(){function t(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}return t.prototype.isFullyInitialized=function(){return this.fullyInitialized_},t.prototype.isFiltered=function(){return this.filtered_},t.prototype.isCompleteForPath=function(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;var n=E(e);return this.isCompleteForChild(n)},t.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},t.prototype.getNode=function(){return this.node_},t}();/**
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
 */var qa=function(){function t(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}return t}();function Ka(t,e,n,r){var i=[],o=[];return e.forEach(function(s){s.type==="child_changed"&&t.index_.indexedValueChanged(s.oldSnap,s.snapshotNode)&&o.push(xa(s.childName,s.snapshotNode))}),Ze(t,i,"child_removed",e,r,n),Ze(t,i,"child_added",e,r,n),Ze(t,i,"child_moved",o,r,n),Ze(t,i,"child_changed",e,r,n),Ze(t,i,"value",e,r,n),i}function Ze(t,e,n,r,i,o){var s=r.filter(function(a){return a.type===n});s.sort(function(a,u){return Xa(t,a,u)}),s.forEach(function(a){var u=$a(t,a,o);i.forEach(function(l){l.respondsTo(a.type)&&e.push(l.createEvent(u,t.query_))})})}function $a(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Xa(t,e,n){if(e.childName==null||n.childName==null)throw ft("Should only compare child_ events.");var r=new S(e.childName,e.snapshotNode),i=new S(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Vt(t,e){return{eventCache:t,serverCache:e}}function nt(t,e,n,r){return Vt(new ge(e,n,r),t.serverCache)}function Ki(t,e,n,r){return Vt(t.eventCache,new ge(e,n,r))}function kt(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ne(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */var ln,Ja=function(){return ln||(ln=new ue(ks)),ln},V=function(){function t(e,n){n===void 0&&(n=Ja()),this.value=e,this.children=n}return t.fromObject=function(e){var n=new t(null);return D(e,function(r,i){n=n.set(new I(r),i)}),n},t.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},t.prototype.findRootMostMatchingPathAndValue=function(e,n){if(this.value!=null&&n(this.value))return{path:T(),value:this.value};if(w(e))return null;var r=E(e),i=this.children.get(r);if(i!==null){var o=i.findRootMostMatchingPathAndValue(b(e),n);if(o!=null){var s=k(new I(r),o.path);return{path:s,value:o.value}}else return null}else return null},t.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},t.prototype.subtree=function(e){if(w(e))return this;var n=E(e),r=this.children.get(n);return r!==null?r.subtree(b(e)):new t(null)},t.prototype.set=function(e,n){if(w(e))return new t(n,this.children);var r=E(e),i=this.children.get(r)||new t(null),o=i.set(b(e),n),s=this.children.insert(r,o);return new t(this.value,s)},t.prototype.remove=function(e){if(w(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=E(e),r=this.children.get(n);if(r){var i=r.remove(b(e)),o=void 0;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),this.value===null&&o.isEmpty()?new t(null):new t(this.value,o)}else return this},t.prototype.get=function(e){if(w(e))return this.value;var n=E(e),r=this.children.get(n);return r?r.get(b(e)):null},t.prototype.setTree=function(e,n){if(w(e))return n;var r=E(e),i=this.children.get(r)||new t(null),o=i.setTree(b(e),n),s=void 0;return o.isEmpty()?s=this.children.remove(r):s=this.children.insert(r,o),new t(this.value,s)},t.prototype.fold=function(e){return this.fold_(T(),e)},t.prototype.fold_=function(e,n){var r={};return this.children.inorderTraversal(function(i,o){r[i]=o.fold_(k(e,i),n)}),n(e,this.value,r)},t.prototype.findOnPath=function(e,n){return this.findOnPath_(e,T(),n)},t.prototype.findOnPath_=function(e,n,r){var i=this.value?r(n,this.value):!1;if(i)return i;if(w(e))return null;var o=E(e),s=this.children.get(o);return s?s.findOnPath_(b(e),k(n,o),r):null},t.prototype.foreachOnPath=function(e,n){return this.foreachOnPath_(e,T(),n)},t.prototype.foreachOnPath_=function(e,n,r){if(w(e))return this;this.value&&r(n,this.value);var i=E(e),o=this.children.get(i);return o?o.foreachOnPath_(b(e),k(n,i),r):new t(null)},t.prototype.foreach=function(e){this.foreach_(T(),e)},t.prototype.foreach_=function(e,n){this.children.inorderTraversal(function(r,i){i.foreach_(k(e,r),n)}),this.value&&n(e,this.value)},t.prototype.foreachChild=function(e){this.children.inorderTraversal(function(n,r){r.value&&e(n,r.value)})},t}();/**
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
 */var le=function(){function t(e){this.writeTree_=e}return t.empty=function(){return new t(new V(null))},t}();function rt(t,e,n){if(w(e))return new le(new V(n));var r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){var i=r.path,o=r.value,s=B(i,e);return o=o.updateChild(s,n),new le(t.writeTree_.set(i,o))}else{var a=new V(n),u=t.writeTree_.setTree(e,a);return new le(u)}}function Sn(t,e,n){var r=t;return D(n,function(i,o){r=rt(r,k(e,i),o)}),r}function Br(t,e){if(w(e))return le.empty();var n=t.writeTree_.setTree(e,new V(null));return new le(n)}function Tn(t,e){return Ae(t,e)!=null}function Ae(t,e){var n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(B(n.path,e)):null}function Qr(t){var e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(R,function(r,i){e.push(new S(r,i))}):t.writeTree_.children.inorderTraversal(function(r,i){i.value!=null&&e.push(new S(r,i.value))}),e}function pe(t,e){if(w(e))return t;var n=Ae(t,e);return n!=null?new le(new V(n)):new le(t.writeTree_.subtree(e))}function In(t){return t.writeTree_.isEmpty()}function Ue(t,e){return $i(T(),t.writeTree_,e)}function $i(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);var r=null;return e.children.inorderTraversal(function(i,o){i===".priority"?(p(o.value!==null,"Priority writes must always be leaf nodes"),r=o.value):n=$i(k(t,i),o,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(k(t,".priority"),r)),n}/**
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
 */function Gt(t,e){return eo(e,t)}function Za(t,e,n,r,i){p(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=rt(t.visibleWrites,e,n)),t.lastWriteId=r}function eu(t,e,n,r){p(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Sn(t.visibleWrites,e,n),t.lastWriteId=r}function tu(t,e){for(var n=0;n<t.allWrites.length;n++){var r=t.allWrites[n];if(r.writeId===e)return r}return null}function nu(t,e){var n=t.allWrites.findIndex(function(l){return l.writeId===e});p(n>=0,"removeWrite called with nonexistent writeId.");var r=t.allWrites[n];t.allWrites.splice(n,1);for(var i=r.visible,o=!1,s=t.allWrites.length-1;i&&s>=0;){var a=t.allWrites[s];a.visible&&(s>=n&&ru(a,r.path)?i=!1:j(r.path,a.path)&&(o=!0)),s--}if(i){if(o)return iu(t),!0;if(r.snap)t.visibleWrites=Br(t.visibleWrites,r.path);else{var u=r.children;D(u,function(l){t.visibleWrites=Br(t.visibleWrites,k(r.path,l))})}return!0}else return!1}function ru(t,e){if(t.snap)return j(t.path,e);for(var n in t.children)if(t.children.hasOwnProperty(n)&&j(k(t.path,n),e))return!0;return!1}function iu(t){t.visibleWrites=Xi(t.allWrites,ou,T()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ou(t){return t.visible}function Xi(t,e,n){for(var r=le.empty(),i=0;i<t.length;++i){var o=t[i];if(e(o)){var s=o.path,a=void 0;if(o.snap)j(n,s)?(a=B(n,s),r=rt(r,a,o.snap)):j(s,n)&&(a=B(s,n),r=rt(r,T(),o.snap.getChild(a)));else if(o.children){if(j(n,s))a=B(n,s),r=Sn(r,a,o.children);else if(j(s,n))if(a=B(s,n),w(a))r=Sn(r,T(),o.children);else{var u=Re(o.children,E(a));if(u){var l=u.getChild(b(a));r=rt(r,T(),l)}}}else throw ft("WriteRecord should have .snap or .children")}}return r}function Ji(t,e,n,r,i){if(!r&&!i){var o=Ae(t.visibleWrites,e);if(o!=null)return o;var s=pe(t.visibleWrites,e);if(In(s))return n;if(n==null&&!Tn(s,T()))return null;var a=n||C.EMPTY_NODE;return Ue(s,a)}else{var u=pe(t.visibleWrites,e);if(!i&&In(u))return n;if(!i&&n==null&&!Tn(u,T()))return null;var l=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(j(h.path,e)||j(e,h.path))},c=Xi(t.allWrites,l,e),a=n||C.EMPTY_NODE;return Ue(c,a)}}function su(t,e,n){var r=C.EMPTY_NODE,i=Ae(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(R,function(a,u){r=r.updateImmediateChild(a,u)}),r;if(n){var o=pe(t.visibleWrites,e);return n.forEachChild(R,function(a,u){var l=Ue(pe(o,new I(a)),u);r=r.updateImmediateChild(a,l)}),Qr(o).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}else{var s=pe(t.visibleWrites,e);return Qr(s).forEach(function(a){r=r.updateImmediateChild(a.name,a.node)}),r}}function au(t,e,n,r,i){p(r||i,"Either existingEventSnap or existingServerSnap must exist");var o=k(e,n);if(Tn(t.visibleWrites,o))return null;var s=pe(t.visibleWrites,o);return In(s)?i.getChild(n):Ue(s,i.getChild(n))}function uu(t,e,n,r){var i=k(e,n),o=Ae(t.visibleWrites,i);if(o!=null)return o;if(r.isCompleteForChild(n)){var s=pe(t.visibleWrites,i);return Ue(s,r.getNode().getImmediateChild(n))}else return null}function lu(t,e){return Ae(t.visibleWrites,e)}function cu(t,e,n,r,i,o,s){var a,u=pe(t.visibleWrites,e),l=Ae(u,T());if(l!=null)a=l;else if(n!=null)a=Ue(u,n);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){for(var c=[],f=s.getCompare(),h=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s),d=h.getNext();d&&c.length<i;)f(d,r)!==0&&c.push(d),d=h.getNext();return c}else return[]}function fu(){return{visibleWrites:le.empty(),allWrites:[],lastWriteId:-1}}function Pt(t,e,n,r){return Ji(t.writeTree,t.treePath,e,n,r)}function Xn(t,e){return su(t.writeTree,t.treePath,e)}function Vr(t,e,n,r){return au(t.writeTree,t.treePath,e,n,r)}function At(t,e){return lu(t.writeTree,k(t.treePath,e))}function hu(t,e,n,r,i,o){return cu(t.writeTree,t.treePath,e,n,r,i,o)}function Jn(t,e,n){return uu(t.writeTree,t.treePath,e,n)}function Zi(t,e){return eo(k(t.treePath,e),t.writeTree)}function eo(t,e){return{treePath:t,writeTree:e}}/**
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
 */var du=function(){function t(){this.changeMap=new Map}return t.prototype.trackChildChange=function(e){var n=e.type,r=e.childName;p(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),p(r!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(r);if(i){var o=i.type;if(n==="child_added"&&o==="child_removed")this.changeMap.set(r,ut(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&o==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&o==="child_changed")this.changeMap.set(r,at(r,i.oldSnap));else if(n==="child_changed"&&o==="child_added")this.changeMap.set(r,We(r,e.snapshotNode));else if(n==="child_changed"&&o==="child_changed")this.changeMap.set(r,ut(r,e.snapshotNode,i.oldSnap));else throw ft("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)},t.prototype.getChanges=function(){return Array.from(this.changeMap.values())},t}();/**
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
 */var pu=function(){function t(){}return t.prototype.getCompleteChild=function(e){return null},t.prototype.getChildAfterChild=function(e,n,r){return null},t}(),to=new pu,Zn=function(){function t(e,n,r){r===void 0&&(r=null),this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}return t.prototype.getCompleteChild=function(e){var n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);var r=this.optCompleteServerCache_!=null?new ge(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jn(this.writes_,e,r)},t.prototype.getChildAfterChild=function(e,n,r){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ne(this.viewCache_),o=hu(this.writes_,i,n,1,r,e);return o.length===0?null:o[0]},t}();/**
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
 */function vu(t){return{filter:t}}function _u(t,e){p(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gu(t,e,n,r,i){var o=new du,s,a;if(n.type===J.OVERWRITE){var u=n;u.source.fromUser?s=bn(t,e,u.path,u.snap,r,i,o):(p(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!w(u.path),s=Ot(t,e,u.path,u.snap,r,i,a,o))}else if(n.type===J.MERGE){var l=n;l.source.fromUser?s=mu(t,e,l.path,l.children,r,i,o):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),s=Rn(t,e,l.path,l.children,r,i,a,o))}else if(n.type===J.ACK_USER_WRITE){var c=n;c.revert?s=wu(t,e,c.path,r,i,o):s=Cu(t,e,c.path,c.affectedTree,r,i,o)}else if(n.type===J.LISTEN_COMPLETE)s=Eu(t,e,n.path,r,o);else throw ft("Unknown operation type: "+n.type);var f=o.getChanges();return yu(e,s,f),{viewCache:s,changes:f}}function yu(t,e,n){var r=e.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=kt(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Hi(kt(e)))}}function no(t,e,n,r,i,o){var s=e.eventCache;if(At(r,n)!=null)return e;var a=void 0,u=void 0;if(w(n))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){var l=Ne(e),c=l instanceof C?l:C.EMPTY_NODE,f=Xn(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),f,o)}else{var h=Pt(r,Ne(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,o)}else{var d=E(n);if(d===".priority"){p(_e(n)===1,"Can't have a priority with additional path components");var v=s.getNode();u=e.serverCache.getNode();var g=Vr(r,n,v,u);g!=null?a=t.filter.updatePriority(v,g):a=s.getNode()}else{var _=b(n),m=void 0;if(s.isCompleteForChild(d)){u=e.serverCache.getNode();var A=Vr(r,n,s.getNode(),u);A!=null?m=s.getNode().getImmediateChild(d).updateChild(_,A):m=s.getNode().getImmediateChild(d)}else m=Jn(r,d,e.serverCache);m!=null?a=t.filter.updateChild(s.getNode(),d,m,_,i,o):a=s.getNode()}}return nt(e,a,s.isFullyInitialized()||w(n),t.filter.filtersNodes())}function Ot(t,e,n,r,i,o,s,a){var u=e.serverCache,l,c=s?t.filter:t.filter.getIndexedFilter();if(w(n))l=c.updateFullNode(u.getNode(),r,null);else if(c.filtersNodes()&&!u.isFiltered()){var f=u.getNode().updateChild(n,r);l=c.updateFullNode(u.getNode(),f,null)}else{var h=E(n);if(!u.isCompleteForPath(n)&&_e(n)>1)return e;var d=b(n),v=u.getNode().getImmediateChild(h),g=v.updateChild(d,r);h===".priority"?l=c.updatePriority(u.getNode(),g):l=c.updateChild(u.getNode(),h,g,d,to,null)}var _=Ki(e,l,u.isFullyInitialized()||w(n),c.filtersNodes()),m=new Zn(i,_,o);return no(t,_,n,i,m,a)}function bn(t,e,n,r,i,o,s){var a=e.eventCache,u,l,c=new Zn(i,e,o);if(w(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,s),u=nt(e,l,!0,t.filter.filtersNodes());else{var f=E(n);if(f===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),u=nt(e,l,a.isFullyInitialized(),a.isFiltered());else{var h=b(n),d=a.getNode().getImmediateChild(f),v=void 0;if(w(h))v=r;else{var g=c.getCompleteChild(f);g!=null?Qn(h)===".priority"&&g.getChild(Li(h)).isEmpty()?v=g:v=g.updateChild(h,r):v=C.EMPTY_NODE}if(d.equals(v))u=e;else{var _=t.filter.updateChild(a.getNode(),f,v,h,c,s);u=nt(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Gr(t,e){return t.eventCache.isCompleteForChild(e)}function mu(t,e,n,r,i,o,s){var a=e;return r.foreach(function(u,l){var c=k(n,u);Gr(e,E(c))&&(a=bn(t,a,c,l,i,o,s))}),r.foreach(function(u,l){var c=k(n,u);Gr(e,E(c))||(a=bn(t,a,c,l,i,o,s))}),a}function Hr(t,e,n){return n.foreach(function(r,i){e=e.updateChild(r,i)}),e}function Rn(t,e,n,r,i,o,s,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;var u=e,l;w(n)?l=r:l=new V(null).setTree(n,r);var c=e.serverCache.getNode();return l.children.inorderTraversal(function(f,h){if(c.hasChild(f)){var d=e.serverCache.getNode().getImmediateChild(f),v=Hr(t,d,h);u=Ot(t,u,new I(f),v,i,o,s,a)}}),l.children.inorderTraversal(function(f,h){var d=!e.serverCache.isCompleteForChild(f)&&h.value===void 0;if(!c.hasChild(f)&&!d){var v=e.serverCache.getNode().getImmediateChild(f),g=Hr(t,v,h);u=Ot(t,u,new I(f),g,i,o,s,a)}}),u}function Cu(t,e,n,r,i,o,s){if(At(i,n)!=null)return e;var a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(w(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ot(t,e,n,u.getNode().getChild(n),i,o,a,s);if(w(n)){var l=new V(null);return u.getNode().forEachChild(ne,function(f,h){l=l.set(new I(f),h)}),Rn(t,e,n,l,i,o,a,s)}else return e}else{var c=new V(null);return r.foreach(function(f,h){var d=k(n,f);u.isCompleteForPath(d)&&(c=c.set(f,u.getNode().getChild(d)))}),Rn(t,e,n,c,i,o,a,s)}}function Eu(t,e,n,r,i){var o=e.serverCache,s=Ki(e,o.getNode(),o.isFullyInitialized()||w(n),o.isFiltered());return no(t,s,n,r,to,i)}function wu(t,e,n,r,i,o){var s;if(At(r,n)!=null)return e;var a=new Zn(r,e,i),u=e.eventCache.getNode(),l=void 0;if(w(n)||E(n)===".priority"){var c=void 0;if(e.serverCache.isFullyInitialized())c=Pt(r,Ne(e));else{var f=e.serverCache.getNode();p(f instanceof C,"serverChildren would be complete if leaf node"),c=Xn(r,f)}c=c,l=t.filter.updateFullNode(u,c,o)}else{var h=E(n),d=Jn(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=u.getImmediateChild(h)),d!=null?l=t.filter.updateChild(u,h,d,b(n),a,o):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(u,h,C.EMPTY_NODE,b(n),a,o):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(s=Pt(r,Ne(e)),s.isLeafNode()&&(l=t.filter.updateFullNode(l,s,o)))}return s=e.serverCache.isFullyInitialized()||At(r,T())!=null,nt(e,l,s,t.filter.filtersNodes())}/**
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
 */var Su=function(){function t(e,n){this.query_=e,this.eventRegistrations_=[];var r=this.query_._queryParams,i=new Yn(r.getIndex()),o=La(r);this.processor_=vu(o);var s=n.serverCache,a=n.eventCache,u=i.updateFullNode(C.EMPTY_NODE,s.getNode(),null),l=o.updateFullNode(C.EMPTY_NODE,a.getNode(),null),c=new ge(u,s.isFullyInitialized(),i.filtersNodes()),f=new ge(l,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Vt(f,c),this.eventGenerator_=new qa(this.query_)}return Object.defineProperty(t.prototype,"query",{get:function(){return this.query_},enumerable:!1,configurable:!0}),t}();function Tu(t){return t.viewCache_.serverCache.getNode()}function Iu(t){return kt(t.viewCache_)}function bu(t,e){var n=Ne(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!w(e)&&!n.getImmediateChild(E(e)).isEmpty())?n.getChild(e):null}function jr(t){return t.eventRegistrations_.length===0}function Ru(t,e){t.eventRegistrations_.push(e)}function Yr(t,e,n){var r=[];if(n){p(e==null,"A cancel should cancel all event registrations.");var i=t.query._path;t.eventRegistrations_.forEach(function(u){var l=u.createCancelEvent(n,i);l&&r.push(l)})}if(e){for(var o=[],s=0;s<t.eventRegistrations_.length;++s){var a=t.eventRegistrations_[s];if(!a.matches(e))o.push(a);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return r}function zr(t,e,n,r){e.type===J.MERGE&&e.source.queryId!==null&&(p(Ne(t.viewCache_),"We should always have a full cache before handling merges"),p(kt(t.viewCache_),"Missing event cache, even though we have a server cache"));var i=t.viewCache_,o=gu(t.processor_,i,e,n,r);return _u(t.processor_,o.viewCache),p(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,ro(t,o.changes,o.viewCache.eventCache.getNode(),null)}function Nu(t,e){var n=t.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){var i=n.getNode();i.forEachChild(R,function(o,s){r.push(We(o,s))})}return n.isFullyInitialized()&&r.push(Hi(n.getNode())),ro(t,r,n.getNode(),e)}function ro(t,e,n,r){var i=r?[r]:t.eventRegistrations_;return Ka(t.eventGenerator_,e,n,i)}/**
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
 */var xt,io=function(){function t(){this.views=new Map}return t}();function ku(t){p(!xt,"__referenceConstructor has already been defined"),xt=t}function Pu(){return p(xt,"Reference.ts has not been loaded"),xt}function Au(t){return t.views.size===0}function er(t,e,n,r){var i,o,s=e.source.queryId;if(s!==null){var a=t.views.get(s);return p(a!=null,"SyncTree gave us an op for an invalid query."),zr(a,e,n,r)}else{var u=[];try{for(var l=re(t.views.values()),c=l.next();!c.done;c=l.next()){var a=c.value;u=u.concat(zr(a,e,n,r))}}catch(f){i={error:f}}finally{try{c&&!c.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}return u}}function oo(t,e,n,r,i){var o=e._queryIdentifier,s=t.views.get(o);if(!s){var a=Pt(n,i?r:null),u=!1;a?u=!0:r instanceof C?(a=Xn(n,r),u=!1):(a=C.EMPTY_NODE,u=!1);var l=Vt(new ge(a,u,!1),new ge(r,i,!1));return new Su(e,l)}return s}function Ou(t,e,n,r,i,o){var s=oo(t,e,r,i,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,s),Ru(s,n),Nu(s,n)}function xu(t,e,n,r){var i,o,s=e._queryIdentifier,a=[],u=[],l=ye(t);if(s==="default")try{for(var c=re(t.views.entries()),f=c.next();!f.done;f=c.next()){var h=Z(f.value,2),d=h[0],v=h[1];u=u.concat(Yr(v,n,r)),jr(v)&&(t.views.delete(d),v.query._queryParams.loadsAllData()||a.push(v.query))}}catch(g){i={error:g}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}else{var v=t.views.get(s);v&&(u=u.concat(Yr(v,n,r)),jr(v)&&(t.views.delete(s),v.query._queryParams.loadsAllData()||a.push(v.query)))}return l&&!ye(t)&&a.push(new(Pu())(e._repo,e._path)),{removed:a,events:u}}function so(t){var e,n,r=[];try{for(var i=re(t.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.query._queryParams.loadsAllData()||r.push(s)}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}function ve(t,e){var n,r,i=null;try{for(var o=re(t.views.values()),s=o.next();!s.done;s=o.next()){var a=s.value;i=i||bu(a,e)}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i}function ao(t,e){var n=e._queryParams;if(n.loadsAllData())return Ht(t);var r=e._queryIdentifier;return t.views.get(r)}function uo(t,e){return ao(t,e)!=null}function ye(t){return Ht(t)!=null}function Ht(t){var e,n;try{for(var r=re(t.views.values()),i=r.next();!i.done;i=r.next()){var o=i.value;if(o.query._queryParams.loadsAllData())return o}}catch(s){e={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return null}/**
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
 */var Dt;function Du(t){p(!Dt,"__referenceConstructor has already been defined"),Dt=t}function Lu(){return p(Dt,"Reference.ts has not been loaded"),Dt}var Mu=1,qr=function(){function t(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=fu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return t}();function tr(t,e,n,r,i){return Za(t.pendingWriteTree_,e,n,r,i),i?He(t,new Qt(zn(),e,n)):[]}function Fu(t,e,n,r){eu(t.pendingWriteTree_,e,n,r);var i=V.fromObject(n);return He(t,new $n(zn(),e,i))}function de(t,e,n){n===void 0&&(n=!1);var r=tu(t.pendingWriteTree_,e),i=nu(t.pendingWriteTree_,e);if(i){var o=new V(null);return r.snap!=null?o=o.set(T(),!0):D(r.children,function(s){o=o.set(new I(s),!0)}),He(t,new za(r.path,o,n))}else return[]}function vt(t,e,n){return He(t,new Qt(qn(),e,n))}function Wu(t,e,n){var r=V.fromObject(n);return He(t,new $n(qn(),e,r))}function Uu(t,e){return He(t,new qi(qn(),e))}function Bu(t,e,n){var r=nr(t,n);if(r){var i=rr(r),o=i.path,s=i.queryId,a=B(o,e),u=new qi(Kn(s),a);return ir(t,o,u)}else return[]}function Nn(t,e,n,r){var i=e._path,o=t.syncPointTree_.get(i),s=[];if(o&&(e._queryIdentifier==="default"||uo(o,e))){var a=xu(o,e,n,r);Au(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));var u=a.removed;s=a.events;var l=u.findIndex(function(A){return A._queryParams.loadsAllData()})!==-1,c=t.syncPointTree_.findOnPath(i,function(A,H){return ye(H)});if(l&&!c){var f=t.syncPointTree_.subtree(i);if(!f.isEmpty())for(var h=Hu(f),d=0;d<h.length;++d){var v=h[d],g=v.query,_=fo(t,v);t.listenProvider_.startListening(it(g),Lt(t,g),_.hashFn,_.onComplete)}}if(!c&&u.length>0&&!r)if(l){var m=null;t.listenProvider_.stopListening(it(e),m)}else u.forEach(function(A){var H=t.queryToTagMap.get(Yt(A));t.listenProvider_.stopListening(it(A),H)});ju(t,u)}return s}function Qu(t,e,n,r){var i=nr(t,r);if(i!=null){var o=rr(i),s=o.path,a=o.queryId,u=B(s,e),l=new Qt(Kn(a),u,n);return ir(t,s,l)}else return[]}function Vu(t,e,n,r){var i=nr(t,r);if(i){var o=rr(i),s=o.path,a=o.queryId,u=B(s,e),l=V.fromObject(n),c=new $n(Kn(a),u,l);return ir(t,s,c)}else return[]}function Kr(t,e,n){var r=e._path,i=null,o=!1;t.syncPointTree_.foreachOnPath(r,function(g,_){var m=B(g,r);i=i||ve(_,m),o=o||ye(_)});var s=t.syncPointTree_.get(r);s?(o=o||ye(s),i=i||ve(s,T())):(s=new io,t.syncPointTree_=t.syncPointTree_.set(r,s));var a;if(i!=null)a=!0;else{a=!1,i=C.EMPTY_NODE;var u=t.syncPointTree_.subtree(r);u.foreachChild(function(g,_){var m=ve(_,T());m&&(i=i.updateImmediateChild(g,m))})}var l=uo(s,e);if(!l&&!e._queryParams.loadsAllData()){var c=Yt(e);p(!t.queryToTagMap.has(c),"View does not exist, but we have a tag");var f=Yu();t.queryToTagMap.set(c,f),t.tagToQueryMap.set(f,c)}var h=Gt(t.pendingWriteTree_,r),d=Ou(s,e,n,h,i,a);if(!l&&!o){var v=ao(s,e);d=d.concat(zu(t,e,v))}return d}function jt(t,e,n){var r=!0,i=t.pendingWriteTree_,o=t.syncPointTree_.findOnPath(e,function(s,a){var u=B(s,e),l=ve(a,u);if(l)return l});return Ji(i,e,o,n,r)}function Gu(t,e){var n=e._path,r=null;t.syncPointTree_.foreachOnPath(n,function(l,c){var f=B(l,n);r=r||ve(c,f)});var i=t.syncPointTree_.get(n);i?r=r||ve(i,T()):(i=new io,t.syncPointTree_=t.syncPointTree_.set(n,i));var o=r!=null,s=o?new ge(r,!0,!1):null,a=Gt(t.pendingWriteTree_,e._path),u=oo(i,e,a,o?s.getNode():C.EMPTY_NODE,o);return Iu(u)}function He(t,e){return lo(e,t.syncPointTree_,null,Gt(t.pendingWriteTree_,T()))}function lo(t,e,n,r){if(w(t.path))return co(t,e,n,r);var i=e.get(T());n==null&&i!=null&&(n=ve(i,T()));var o=[],s=E(t.path),a=t.operationForChild(s),u=e.children.get(s);if(u&&a){var l=n?n.getImmediateChild(s):null,c=Zi(r,s);o=o.concat(lo(a,u,l,c))}return i&&(o=o.concat(er(i,t,r,n))),o}function co(t,e,n,r){var i=e.get(T());n==null&&i!=null&&(n=ve(i,T()));var o=[];return e.children.inorderTraversal(function(s,a){var u=n?n.getImmediateChild(s):null,l=Zi(r,s),c=t.operationForChild(s);c&&(o=o.concat(co(c,a,u,l)))}),i&&(o=o.concat(er(i,t,r,n))),o}function fo(t,e){var n=e.query,r=Lt(t,n);return{hashFn:function(){var i=Tu(e)||C.EMPTY_NODE;return i.hash()},onComplete:function(i){if(i==="ok")return r?Bu(t,n._path,r):Uu(t,n._path);var o=Os(i,n);return Nn(t,n,null,o)}}}function Lt(t,e){var n=Yt(e);return t.queryToTagMap.get(n)}function Yt(t){return t._path.toString()+"$"+t._queryIdentifier}function nr(t,e){return t.tagToQueryMap.get(e)}function rr(t){var e=t.indexOf("$");return p(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new I(t.substr(0,e))}}function ir(t,e,n){var r=t.syncPointTree_.get(e);p(r,"Missing sync point for query tag that we're tracking");var i=Gt(t.pendingWriteTree_,e);return er(r,n,i,null)}function Hu(t){return t.fold(function(e,n,r){if(n&&ye(n)){var i=Ht(n);return[i]}else{var o=[];return n&&(o=so(n)),D(r,function(s,a){o=o.concat(a)}),o}})}function it(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Lu())(t._repo,t._path):t}function ju(t,e){for(var n=0;n<e.length;++n){var r=e[n];if(!r._queryParams.loadsAllData()){var i=Yt(r),o=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(o)}}}function Yu(){return Mu++}function zu(t,e,n){var r=e._path,i=Lt(t,e),o=fo(t,n),s=t.listenProvider_.startListening(it(e),i,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(r);if(i)p(!ye(a.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=a.fold(function(f,h,d){if(!w(f)&&h&&ye(h))return[Ht(h).query];var v=[];return h&&(v=v.concat(so(h).map(function(g){return g.query}))),D(d,function(g,_){v=v.concat(_)}),v}),l=0;l<u.length;++l){var c=u[l];t.listenProvider_.stopListening(it(c),Lt(t,c))}return s}/**
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
 */var qu=function(){function t(e){this.node_=e}return t.prototype.getImmediateChild=function(e){var n=this.node_.getImmediateChild(e);return new t(n)},t.prototype.node=function(){return this.node_},t}(),Ku=function(){function t(e,n){this.syncTree_=e,this.path_=n}return t.prototype.getImmediateChild=function(e){var n=k(this.path_,e);return new t(this.syncTree_,n)},t.prototype.node=function(){return jt(this.syncTree_,this.path_)},t}(),$u=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$r=function(t,e,n){if(!t||typeof t!="object")return t;if(p(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xu(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ju(t[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xu=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:p(!1,"Unexpected server value: "+t)}},Ju=function(t,e,n){t.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(t,null,2));var r=t.increment;typeof r!="number"&&p(!1,"Unexpected increment value: "+r);var i=e.node();if(p(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var o=i,s=o.getValue();return typeof s!="number"?r:s+r},ho=function(t,e,n,r){return sr(e,new Ku(n,t),r)},or=function(t,e,n){return sr(t,new qu(e),n)};function sr(t,e,n){var r=t.getPriority().val(),i=$r(r,e.getImmediateChild(".priority"),n),o;if(t.isLeafNode()){var s=t,a=$r(s.getValue(),e,n);return a!==s.getValue()||i!==s.getPriority().val()?new Me(a,P(i)):t}else{var u=t;return o=u,i!==u.getPriority().val()&&(o=o.updatePriority(new Me(i))),u.forEachChild(R,function(l,c){var f=sr(c,e.getImmediateChild(l),n);f!==c&&(o=o.updateImmediateChild(l,f))}),o}}/**
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
 */var ar=function(){function t(e,n,r){e===void 0&&(e=""),n===void 0&&(n=null),r===void 0&&(r={children:{},childCount:0}),this.name=e,this.parent=n,this.node=r}return t}();function zt(t,e){for(var n=e instanceof I?e:new I(e),r=t,i=E(n);i!==null;){var o=Re(r.node.children,i)||{children:{},childCount:0};r=new ar(i,r,o),n=b(n),i=E(n)}return r}function Oe(t){return t.node.value}function ur(t,e){t.node.value=e,kn(t)}function po(t){return t.node.childCount>0}function Zu(t){return Oe(t)===void 0&&!po(t)}function qt(t,e){D(t.node.children,function(n,r){e(new ar(n,t,r))})}function vo(t,e,n,r){n&&!r&&e(t),qt(t,function(i){vo(i,e,!0,r)}),n&&r&&e(t)}function el(t,e,n){for(var r=n?t:t.parent;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _t(t){return new I(t.parent===null?t.name:_t(t.parent)+"/"+t.name)}function kn(t){t.parent!==null&&tl(t.parent,t.name,t)}function tl(t,e,n){var r=Zu(n),i=ee(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kn(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kn(t))}/**
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
 */var nl=/[\[\].#$\/\u0000-\u001F\u007F]/,rl=/[\[\].#$\u0000-\u001F\u007F]/,cn=10*1024*1024,Kt=function(t){return typeof t=="string"&&t.length!==0&&!nl.test(t)},_o=function(t){return typeof t=="string"&&t.length!==0&&!rl.test(t)},il=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_o(t)},lt=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Wt(t)||t&&typeof t=="object"&&ee(t,".sv")},se=function(t,e,n,r){r&&e===void 0||gt(z(t,"value"),e,n)},gt=function(t,e,n){var r=n instanceof I?new ha(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ee(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ee(r)+" with contents = "+e.toString());if(Wt(e))throw new Error(t+"contains "+e.toString()+" "+Ee(r));if(typeof e=="string"&&e.length>cn/3&&Ft(e)>cn)throw new Error(t+"contains a string greater than "+cn+" utf8 bytes "+Ee(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){var i=!1,o=!1;if(D(e,function(s,a){if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!Kt(s)))throw new Error(t+" contains an invalid key ("+s+") "+Ee(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);da(r,s),gt(t,a,r),pa(r)}),i&&o)throw new Error(t+' contains ".value" child '+Ee(r)+" in addition to actual children.")}},ol=function(t,e){var n,r;for(n=0;n<e.length;n++){r=e[n];for(var i=st(r),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Kt(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fa);var s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&j(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},go=function(t,e,n,r){if(!(r&&e===void 0)){var i=z(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");var o=[];D(e,function(s,a){var u=new I(s);if(gt(i,a,k(n,u)),Qn(u)===".priority"&&!lt(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(u)}),ol(i,o)}},lr=function(t,e,n){if(!(n&&e===void 0)){if(Wt(e))throw new Error(z(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!lt(e))throw new Error(z(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},sl=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(z(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},yt=function(t,e,n,r){if(!(r&&n===void 0)&&!Kt(n))throw new Error(z(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ct=function(t,e,n,r){if(!(r&&n===void 0)&&!_o(n))throw new Error(z(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},al=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ct(t,e,n,r)},Y=function(t,e){if(E(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yo=function(t,e){var n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kt(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!il(n))throw new Error(z(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},ul=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(z(t,e)+"must be a boolean.")};/**
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
 */var ll=function(){function t(){this.eventLists_=[],this.recursionDepth_=0}return t}();function $t(t,e){for(var n=null,r=0;r<e.length;r++){var i=e[r],o=i.getPath();n!==null&&!Vn(o,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:o}),n.events.push(i)}n&&t.eventLists_.push(n)}function cr(t,e,n){$t(t,n),mo(t,function(r){return Vn(r,e)})}function q(t,e,n){$t(t,n),mo(t,function(r){return j(r,e)||j(e,r)})}function mo(t,e){t.recursionDepth_++;for(var n=!0,r=0;r<t.eventLists_.length;r++){var i=t.eventLists_[r];if(i){var o=i.path;e(o)?(cl(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function cl(t){for(var e=0;e<t.events.length;e++){var n=t.events[e];if(n!==null){t.events[e]=null;var r=n.getEventRunner();Ie&&M("event: "+n.toString()),Ve(r)}}}/**
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
 */var Co="repo_interrupt",fl=25,hl=function(){function t(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ll,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nt(),this.transactionQueueTree_=new ar,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return t.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},t}();function dl(t,e,n){if(t.stats_=Un(t.repoInfo_),t.forceRestClient_||Ds())t.server_=new Ba(t.repoInfo_,function(r,i,o,s){Xr(t,r,i,o,s)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(function(){return Jr(t,!0)},0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new be(t.repoInfo_,e,function(r,i,o,s){Xr(t,r,i,o,s)},function(r){Jr(t,r)},function(r){vl(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(function(r){t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(function(r){t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Bs(t.repoInfo_,function(){return new ja(t.stats_,t.server_)}),t.infoData_=new Qa,t.infoSyncTree_=new qr({startListening:function(r,i,o,s){var a=[],u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=vt(t.infoSyncTree_,r._path,u),setTimeout(function(){s("ok")},0)),a},stopListening:function(){}}),fr(t,"connected",!1),t.serverSyncTree_=new qr({startListening:function(r,i,o,s){return t.server_.listen(r,o,i,function(a,u){var l=s(a,u);q(t.eventQueue_,r._path,l)}),[]},stopListening:function(r,i){t.server_.unlisten(r,i)}})}function Eo(t){var e=t.infoData_.getNode(new I(".info/serverTimeOffset")),n=e.val()||0;return new Date().getTime()+n}function mt(t){return $u({timestamp:Eo(t)})}function Xr(t,e,n,r,i){t.dataUpdateCount++;var o=new I(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;var s=[];if(i)if(r){var a=St(n,function(h){return P(h)});s=Vu(t.serverSyncTree_,o,a,i)}else{var u=P(n);s=Qu(t.serverSyncTree_,o,u,i)}else if(r){var l=St(n,function(h){return P(h)});s=Wu(t.serverSyncTree_,o,l)}else{var c=P(n);s=vt(t.serverSyncTree_,o,c)}var f=o;s.length>0&&(f=Be(t,o)),q(t.eventQueue_,f,s)}function pl(t,e){t.interceptServerDataCallback_=e}function Jr(t,e){fr(t,"connected",e),e===!1&&yl(t)}function vl(t,e){D(e,function(n,r){fr(t,n,r)})}function fr(t,e,n){var r=new I("/.info/"+e),i=P(n);t.infoData_.updateSnapshot(r,i);var o=vt(t.infoSyncTree_,r,i);q(t.eventQueue_,r,o)}function Xt(t){return t.nextWriteId_++}function _l(t,e){var n=Gu(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(function(r){var i=P(r).withIndex(e._queryParams.getIndex()),o=vt(t.serverSyncTree_,e._path,i);return cr(t.eventQueue_,e._path,o),Promise.resolve(i)},function(r){return je(t,"get for query "+x(e)+" failed: "+r),Promise.reject(new Error(r))})}function hr(t,e,n,r,i){je(t,"set",{path:e.toString(),value:n,priority:r});var o=mt(t),s=P(n,r),a=jt(t.serverSyncTree_,e),u=or(s,a,o),l=Xt(t),c=tr(t.serverSyncTree_,e,u,l,!0);$t(t.eventQueue_,c),t.server_.put(e.toString(),s.val(!0),function(h,d){var v=h==="ok";v||F("set at "+e+" failed: "+h);var g=de(t.serverSyncTree_,l,!v);q(t.eventQueue_,e,g),me(t,i,h,d)});var f=pr(t,e);Be(t,f),q(t.eventQueue_,f,[])}function gl(t,e,n,r){je(t,"update",{path:e.toString(),value:n});var i=!0,o=mt(t),s={};if(D(n,function(l,c){i=!1,s[l]=ho(k(e,l),P(c),t.serverSyncTree_,o)}),i)M("update() called with empty data.  Don't do anything."),me(t,r,"ok",void 0);else{var a=Xt(t),u=Fu(t.serverSyncTree_,e,s,a);$t(t.eventQueue_,u),t.server_.merge(e.toString(),n,function(l,c){var f=l==="ok";f||F("update at "+e+" failed: "+l);var h=de(t.serverSyncTree_,a,!f),d=h.length>0?Be(t,e):e;q(t.eventQueue_,d,h),me(t,r,l,c)}),D(n,function(l){var c=pr(t,k(e,l));Be(t,c)}),q(t.eventQueue_,e,[])}}function yl(t){je(t,"onDisconnectEvents");var e=mt(t),n=Nt();wn(t.onDisconnect_,T(),function(i,o){var s=ho(i,o,t.serverSyncTree_,e);Ge(n,i,s)});var r=[];wn(n,T(),function(i,o){r=r.concat(vt(t.serverSyncTree_,i,o));var s=pr(t,i);Be(t,s)}),t.onDisconnect_=Nt(),q(t.eventQueue_,T(),r)}function ml(t,e,n){t.server_.onDisconnectCancel(e.toString(),function(r,i){r==="ok"&&En(t.onDisconnect_,e),me(t,n,r,i)})}function Zr(t,e,n,r){var i=P(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),function(o,s){o==="ok"&&Ge(t.onDisconnect_,e,i),me(t,r,o,s)})}function Cl(t,e,n,r,i){var o=P(n,r);t.server_.onDisconnectPut(e.toString(),o.val(!0),function(s,a){s==="ok"&&Ge(t.onDisconnect_,e,o),me(t,i,s,a)})}function El(t,e,n,r){if(hn(n)){M("onDisconnect().update() called with empty data.  Don't do anything."),me(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,function(i,o){i==="ok"&&D(n,function(s,a){var u=P(a);Ge(t.onDisconnect_,k(e,s),u)}),me(t,r,i,o)})}function wl(t,e,n){var r;E(e._path)===".info"?r=Kr(t.infoSyncTree_,e,n):r=Kr(t.serverSyncTree_,e,n),cr(t.eventQueue_,e._path,r)}function Pn(t,e,n){var r;E(e._path)===".info"?r=Nn(t.infoSyncTree_,e,n):r=Nn(t.serverSyncTree_,e,n),cr(t.eventQueue_,e._path,r)}function wo(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Co)}function Sl(t){t.persistentConnection_&&t.persistentConnection_.resume(Co)}function Tl(t,e){if(e===void 0&&(e=!1),typeof console!="undefined"){var n;e?(t.statsListener_||(t.statsListener_=new zi(t.stats_)),n=t.statsListener_.get()):n=t.stats_.get();var r=Object.keys(n).reduce(function(i,o){return Math.max(o.length,i)},0);D(n,function(i,o){for(var s=i,a=i.length;a<r+2;a++)s+=" ";console.log(s+o)})}}function Il(t,e){t.stats_.incrementCounter(e),Ya(t.statsReporter_,e)}function je(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r="";t.persistentConnection_&&(r=t.persistentConnection_.id+":"),M.apply(void 0,Qe([r],Z(e)))}function me(t,e,n,r){e&&Ve(function(){if(n==="ok")e(null);else{var i=(n||"error").toUpperCase(),o=i;r&&(o+=": "+r);var s=new Error(o);s.code=i,e(s)}})}function bl(t,e,n,r,i,o){je(t,"transaction on "+e);var s={path:e,update:n,onComplete:r,status:null,order:hi(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=dr(t,e,void 0);s.currentInputSnapshot=a;var u=s.update(a.val());if(u===void 0)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{gt("transaction failed: Data returned ",u,s.path),s.status=0;var l=zt(t.transactionQueueTree_,e),c=Oe(l)||[];c.push(s),ur(l,c);var f=void 0;if(typeof u=="object"&&u!==null&&ee(u,".priority"))f=Re(u,".priority"),p(lt(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var h=jt(t.serverSyncTree_,e)||C.EMPTY_NODE;f=h.getPriority().val()}var d=mt(t),v=P(u,f),g=or(v,a,d);s.currentOutputSnapshotRaw=v,s.currentOutputSnapshotResolved=g,s.currentWriteId=Xt(t);var _=tr(t.serverSyncTree_,e,g,s.currentWriteId,s.applyLocally);q(t.eventQueue_,e,_),Jt(t,t.transactionQueueTree_)}}function dr(t,e,n){return jt(t.serverSyncTree_,e,n)||C.EMPTY_NODE}function Jt(t,e){if(e===void 0&&(e=t.transactionQueueTree_),e||Zt(t,e),Oe(e)){var n=To(t,e);p(n.length>0,"Sending zero length transaction queue");var r=n.every(function(i){return i.status===0});r&&Rl(t,_t(e),n)}else po(e)&&qt(e,function(i){Jt(t,i)})}function Rl(t,e,n){for(var r=n.map(function(h){return h.currentWriteId}),i=dr(t,e,r),o=i,s=i.hash(),a=0;a<n.length;a++){var u=n[a];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var l=B(e,u.path);o=o.updateChild(l,u.currentOutputSnapshotRaw)}var c=o.val(!0),f=e;t.server_.put(f.toString(),c,function(h){je(t,"transaction put response",{path:f.toString(),status:h});var d=[];if(h==="ok"){for(var v=[],g=function(m){n[m].status=2,d=d.concat(de(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&v.push(function(){return n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)}),n[m].unwatcher()},_=0;_<n.length;_++)g(_);Zt(t,zt(t.transactionQueueTree_,e)),Jt(t,t.transactionQueueTree_),q(t.eventQueue_,e,d);for(var _=0;_<v.length;_++)Ve(v[_])}else{if(h==="datastale")for(var _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{F("transaction at "+f.toString()+" failed: "+h);for(var _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=h}Be(t,e)}},s)}function Be(t,e){var n=So(t,e),r=_t(n),i=To(t,n);return Nl(t,i,r),r}function Nl(t,e,n){if(e.length!==0){for(var r=[],i=[],o=e.filter(function(l){return l.status===0}),s=o.map(function(l){return l.currentWriteId}),a=function(l){var c=e[l],f=B(n,c.path),h=!1,d;if(p(f!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(de(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=fl)h=!0,d="maxretry",i=i.concat(de(t.serverSyncTree_,c.currentWriteId,!0));else{var v=dr(t,c.path,s);c.currentInputSnapshot=v;var g=e[l].update(v.val());if(g!==void 0){gt("transaction failed: Data returned ",g,c.path);var _=P(g),m=typeof g=="object"&&g!=null&&ee(g,".priority");m||(_=_.updatePriority(v.getPriority()));var A=c.currentWriteId,H=mt(t),N=or(_,v,H);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=N,c.currentWriteId=Xt(t),s.splice(s.indexOf(A),1),i=i.concat(tr(t.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),i=i.concat(de(t.serverSyncTree_,A,!0))}else h=!0,d="nodata",i=i.concat(de(t.serverSyncTree_,c.currentWriteId,!0))}q(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(W){setTimeout(W,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(function(){return e[l].onComplete(null,!1,e[l].currentInputSnapshot)}):r.push(function(){return e[l].onComplete(new Error(d),!1,null)})))},u=0;u<e.length;u++)a(u);Zt(t,t.transactionQueueTree_);for(var u=0;u<r.length;u++)Ve(r[u]);Jt(t,t.transactionQueueTree_)}}function So(t,e){var n,r=t.transactionQueueTree_;for(n=E(e);n!==null&&Oe(r)===void 0;)r=zt(r,n),e=b(e),n=E(e);return r}function To(t,e){var n=[];return Io(t,e,n),n.sort(function(r,i){return r.order-i.order}),n}function Io(t,e,n){var r=Oe(e);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);qt(e,function(o){Io(t,o,n)})}function Zt(t,e){var n=Oe(e);if(n){for(var r=0,i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ur(e,n.length>0?n:void 0)}qt(e,function(o){Zt(t,o)})}function pr(t,e){var n=_t(So(t,e)),r=zt(t.transactionQueueTree_,e);return el(r,function(i){fn(t,i)}),fn(t,r),vo(r,function(i){fn(t,i)}),n}function fn(t,e){var n=Oe(e);if(n){for(var r=[],i=[],o=-1,s=0;s<n.length;s++)n[s].status===3||(n[s].status===1?(p(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(p(n[s].status===0,"Unexpected transaction status in abort"),n[s].unwatcher(),i=i.concat(de(t.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&r.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ur(e,void 0):n.length=o+1,q(t.eventQueue_,_t(e),i);for(var s=0;s<r.length;s++)Ve(r[s])}}/**
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
 */function kl(t){for(var e="",n=t.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Pl(t){var e,n,r={};t.charAt(0)==="?"&&(t=t.substring(1));try{for(var i=re(t.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(s.length!==0){var a=s.split("=");a.length===2?r[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):F("Invalid query segment '"+s+"' in query '"+t+"'")}}}catch(u){e={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}var An=function(t,e){var n=Al(t),r=n.namespace;n.domain==="firebase.com"&&ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Rs();var i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wn(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new I(n.pathString)}},Al=function(t){var e="",n="",r="",i="",o="",s=!0,a="https",u=443;if(typeof t=="string"){var l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));var c=t.indexOf("/");c===-1&&(c=t.length);var f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(c,f)),c<f&&(i=kl(t.substring(c,f)));var h=Pl(t.substring(Math.min(t.length,f)));l=e.indexOf(":"),l>=0?(s=a==="https"||a==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;var d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{var v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),o=r}"ns"in h&&(o=h.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */var bo=function(){function t(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}return t.prototype.getPath=function(){var e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path},t.prototype.getEventType=function(){return this.eventType},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())},t}(),Ro=function(){function t(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}return t.prototype.getPath=function(){return this.path},t.prototype.getEventType=function(){return"cancel"},t.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.prototype.toString=function(){return this.path.toString()+":cancel"},t}();/**
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
 */var No=function(){function t(e,n){this.snapshotCallback=e,this.cancelCallback=n}return t.prototype.onValue=function(e,n){this.snapshotCallback.call(null,e,n)},t.prototype.onCancel=function(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)},Object.defineProperty(t.prototype,"hasCancelCallback",{get:function(){return!!this.cancelCallback},enumerable:!1,configurable:!0}),t.prototype.matches=function(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context},t}();/**
 * @license
 * Copyright 2021 Google LLC
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
 */var Ol=function(){function t(e,n){this._repo=e,this._path=n}return t.prototype.cancel=function(){var e=new Q;return ml(this._repo,this._path,e.wrapCallback(function(){})),e.promise},t.prototype.remove=function(){Y("OnDisconnect.remove",this._path);var e=new Q;return Zr(this._repo,this._path,null,e.wrapCallback(function(){})),e.promise},t.prototype.set=function(e){Y("OnDisconnect.set",this._path),se("OnDisconnect.set",e,this._path,!1);var n=new Q;return Zr(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t.prototype.setWithPriority=function(e,n){Y("OnDisconnect.setWithPriority",this._path),se("OnDisconnect.setWithPriority",e,this._path,!1),lr("OnDisconnect.setWithPriority",n,!1);var r=new Q;return Cl(this._repo,this._path,e,n,r.wrapCallback(function(){})),r.promise},t.prototype.update=function(e){Y("OnDisconnect.update",this._path),go("OnDisconnect.update",e,this._path,!1);var n=new Q;return El(this._repo,this._path,e,n.wrapCallback(function(){})),n.promise},t}();/**
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
 */var K=function(){function t(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}return Object.defineProperty(t.prototype,"key",{get:function(){return w(this._path)?null:Qn(this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new ae(this._repo,this._path)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryIdentifier",{get:function(){var e=Wr(this._queryParams),n=Ln(e);return n==="{}"?"default":n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_queryObject",{get:function(){return Wr(this._queryParams)},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){if(e=G(e),!(e instanceof t))return!1;var n=this._repo===e._repo,r=Vn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i},t.prototype.toJSON=function(){return this.toString()},t.prototype.toString=function(){return this._repo.toString()+ca(this._path)},t}();function en(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ce(t){var e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ne){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){var o=t.getIndexStartName();if(o!==ce)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){var s=t.getIndexEndName();if(s!==oe)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===R){if(e!=null&&!lt(e)||n!=null&&!lt(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(p(t.getIndex()instanceof Hn||t.getIndex()===jn,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function tn(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}var ae=function(t){O(e,t);function e(n,r){return t.call(this,n,r,new Yi,!1)||this}return Object.defineProperty(e.prototype,"parent",{get:function(){var n=Li(this._path);return n===null?null:new e(this._repo,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){for(var n=this;n.parent!==null;)n=n.parent;return n},enumerable:!1,configurable:!0}),e}(K),nn=function(){function t(e,n,r){this._node=e,this.ref=n,this._index=r}return Object.defineProperty(t.prototype,"priority",{get:function(){return this._node.getPriority().val()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.ref.key},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._node.numChildren()},enumerable:!1,configurable:!0}),t.prototype.child=function(e){var n=new I(e),r=ke(this.ref,e);return new t(this._node.getChild(n),r,R)},t.prototype.exists=function(){return!this._node.isEmpty()},t.prototype.exportVal=function(){return this._node.val(!0)},t.prototype.forEach=function(e){var n=this;if(this._node.isLeafNode())return!1;var r=this._node;return!!r.forEachChild(this._index,function(i,o){return e(new t(o,ke(n.ref,i),R))})},t.prototype.hasChild=function(e){var n=new I(e);return!this._node.getChild(n).isEmpty()},t.prototype.hasChildren=function(){return this._node.isLeafNode()?!1:!this._node.isEmpty()},t.prototype.toJSON=function(){return this.exportVal()},t.prototype.val=function(){return this._node.val()},t}();function ko(t,e){return t=G(t),t._checkNotDeleted("ref"),e!==void 0?ke(t._root,e):t._root}function ei(t,e){t=G(t),t._checkNotDeleted("refFromURL");var n=An(e,t._repo.repoInfo_.nodeAdmin);yo("refFromURL",n);var r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&ie("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),ko(t,n.path.toString())}function ke(t,e){return t=G(t),E(t._path)===null?al("child","path",e,!1):ct("child","path",e,!1),new ae(t._repo,k(t._path,e))}function xl(t,e){t=G(t),Y("push",t._path),se("push",e,t._path,!0);var n=Eo(t._repo),r=Oa(n),i=ke(t,r),o=ke(t,r),s;return e!=null?s=vr(o,e).then(function(){return o}):s=Promise.resolve(o),i.then=s.then.bind(s),i.catch=s.then.bind(s,void 0),i}function Dl(t){return Y("remove",t._path),vr(t,null)}function vr(t,e){t=G(t),Y("set",t._path),se("set",e,t._path,!1);var n=new Q;return hr(t._repo,t._path,e,null,n.wrapCallback(function(){})),n.promise}function Ll(t,e){t=G(t),Y("setPriority",t._path),lr("setPriority",e,!1);var n=new Q;return hr(t._repo,k(t._path,".priority"),e,null,n.wrapCallback(function(){})),n.promise}function Ml(t,e,n){if(Y("setWithPriority",t._path),se("setWithPriority",e,t._path,!1),lr("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";var r=new Q;return hr(t._repo,t._path,e,n,r.wrapCallback(function(){})),r.promise}function Fl(t,e){go("update",e,t._path,!1);var n=new Q;return gl(t._repo,t._path,e,n.wrapCallback(function(){})),n.promise}function Wl(t){return t=G(t),_l(t._repo,t).then(function(e){return new nn(e,new ae(t._repo,t._path),t._queryParams.getIndex())})}var Po=function(){function t(e){this.callbackContext=e}return t.prototype.respondsTo=function(e){return e==="value"},t.prototype.createEvent=function(e,n){var r=n._queryParams.getIndex();return new bo("value",this,new nn(e.snapshotNode,new ae(n._repo,n._path),r))},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,null)}},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Ro(this,e,n):null},t.prototype.matches=function(e){return e instanceof t?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1},t.prototype.hasAnyCallback=function(){return this.callbackContext!==null},t}(),Ao=function(){function t(e,n){this.eventType=e,this.callbackContext=n}return t.prototype.respondsTo=function(e){var n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n},t.prototype.createCancelEvent=function(e,n){return this.callbackContext.hasCancelCallback?new Ro(this,e,n):null},t.prototype.createEvent=function(e,n){p(e.childName!=null,"Child events should have a childName.");var r=ke(new ae(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new bo(e.type,this,new nn(e.snapshotNode,r,i),e.prevName)},t.prototype.getEventRunner=function(e){var n=this;return e.getEventType()==="cancel"?function(){return n.callbackContext.onCancel(e.error)}:function(){return n.callbackContext.onValue(e.snapshot,e.prevName)}},t.prototype.matches=function(e){return e instanceof t?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1},t.prototype.hasAnyCallback=function(){return!!this.callbackContext},t}();function Ct(t,e,n,r,i){var o;if(typeof r=="object"&&(o=void 0,i=r),typeof r=="function"&&(o=r),i&&i.onlyOnce){var s=n,a=function(c,f){Pn(t._repo,t,l),s(c,f)};a.userCallback=n.userCallback,a.context=n.context,n=a}var u=new No(n,o||void 0),l=e==="value"?new Po(u):new Ao(e,u);return wl(t._repo,t,l),function(){return Pn(t._repo,t,l)}}function On(t,e,n,r){return Ct(t,"value",e,n,r)}function ti(t,e,n,r){return Ct(t,"child_added",e,n,r)}function ni(t,e,n,r){return Ct(t,"child_changed",e,n,r)}function ri(t,e,n,r){return Ct(t,"child_moved",e,n,r)}function ii(t,e,n,r){return Ct(t,"child_removed",e,n,r)}function oi(t,e,n){var r=null,i=n?new No(n):null;e==="value"?r=new Po(i):e&&(r=new Ao(e,i)),Pn(t._repo,t,r)}var te=function(){function t(){}return t}(),Oo=function(t){O(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){se("endAt",this._value,n._path,!0);var r=Cn(n._queryParams,this._value,this._key);if(tn(r),Ce(r),n._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new K(n._repo,n._path,r,n._orderByCalled)},e}(te);function Ul(t,e){return yt("endAt","key",e,!0),new Oo(t,e)}var Bl=function(t){O(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){se("endBefore",this._value,n._path,!1);var r=Ua(n._queryParams,this._value,this._key);if(tn(r),Ce(r),n._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new K(n._repo,n._path,r,n._orderByCalled)},e}(te);function Ql(t,e){return yt("endBefore","key",e,!0),new Bl(t,e)}var xo=function(t){O(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){se("startAt",this._value,n._path,!0);var r=mn(n._queryParams,this._value,this._key);if(tn(r),Ce(r),n._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new K(n._repo,n._path,r,n._orderByCalled)},e}(te);function Vl(t,e){return t===void 0&&(t=null),yt("startAt","key",e,!0),new xo(t,e)}var Gl=function(t){O(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){se("startAfter",this._value,n._path,!1);var r=Wa(n._queryParams,this._value,this._key);if(tn(r),Ce(r),n._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new K(n._repo,n._path,r,n._orderByCalled)},e}(te);function Hl(t,e){return yt("startAfter","key",e,!0),new Gl(t,e)}var jl=function(t){O(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new K(n._repo,n._path,Ma(n._queryParams,this._limit),n._orderByCalled)},e}(te);function Yl(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new jl(t)}var zl=function(t){O(e,t);function e(n){var r=t.call(this)||this;return r._limit=n,r}return e.prototype._apply=function(n){if(n._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new K(n._repo,n._path,Fa(n._queryParams,this._limit),n._orderByCalled)},e}(te);function ql(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new zl(t)}var Kl=function(t){O(e,t);function e(n){var r=t.call(this)||this;return r._path=n,r}return e.prototype._apply=function(n){en(n,"orderByChild");var r=new I(this._path);if(w(r))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");var i=new Hn(r),o=Bt(n._queryParams,i);return Ce(o),new K(n._repo,n._path,o,!0)},e}(te);function $l(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ct("orderByChild","path",t,!1),new Kl(t)}var Xl=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){en(n,"orderByKey");var r=Bt(n._queryParams,ne);return Ce(r),new K(n._repo,n._path,r,!0)},e}(te);function Jl(){return new Xl}var Zl=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){en(n,"orderByPriority");var r=Bt(n._queryParams,R);return Ce(r),new K(n._repo,n._path,r,!0)},e}(te);function ec(){return new Zl}var tc=function(t){O(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype._apply=function(n){en(n,"orderByValue");var r=Bt(n._queryParams,jn);return Ce(r),new K(n._repo,n._path,r,!0)},e}(te);function nc(){return new tc}var rc=function(t){O(e,t);function e(n,r){var i=t.call(this)||this;return i._value=n,i._key=r,i}return e.prototype._apply=function(n){if(se("equalTo",this._value,n._path,!1),n._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(n._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Oo(this._value,this._key)._apply(new xo(this._value,this._key)._apply(n))},e}(te);function ic(t,e){return yt("equalTo","key",e,!0),new rc(t,e)}function $(t){for(var e,n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var o=G(t);try{for(var s=re(r),a=s.next();!a.done;a=s.next()){var u=a.value;o=u._apply(o)}}catch(l){e={error:l}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return o}ku(ae);Du(ae);/**
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
 */var oc="FIREBASE_DATABASE_EMULATOR_HOST",xn={},Do=!1;function sc(t,e,n,r){t.repoInfo_=new Wn(e+":"+n,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function Lo(t,e,n,r,i){var o=r||t.options.databaseURL;o===void 0&&(t.options.projectId||ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");var s=An(o,i),a=s.repoInfo,u,l=void 0;typeof process!="undefined"&&(l=process.env[oc]),l?(u=!0,o="http://"+l+"?ns="+a.namespace,s=An(o,i),a=s.repoInfo):u=!s.repoInfo.secure;var c=i&&u?new tt(tt.OWNER):new Ms(t.name,t.options,e);yo("Invalid Firebase Database URL",s),w(s.path)||ie("Database URL must point to the root of a Firebase Database (not including a child path).");var f=uc(a,t,c,new Ls(t.name,n));return new cc(f,t)}function ac(t,e){var n=xn[e];(!n||n[t.key]!==t)&&ie("Database "+e+"("+t.repoInfo_+") has already been deleted."),wo(t),delete n[t.key]}function uc(t,e,n,r){var i=xn[e.name];i||(i={},xn[e.name]=i);var o=i[t.toURLString()];return o&&ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new hl(t,Do,n,r),i[t.toURLString()]=o,o}function lc(t){Do=t}var cc=function(){function t(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}return Object.defineProperty(t.prototype,"_repo",{get:function(){return this._instanceStarted||(dl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_root",{get:function(){return this._rootInternal||(this._rootInternal=new ae(this._repo,T())),this._rootInternal},enumerable:!1,configurable:!0}),t.prototype._delete=function(){return this._rootInternal!==null&&(ac(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()},t.prototype._checkNotDeleted=function(e){this._rootInternal===null&&ie("Cannot call "+e+" on a deleted database.")},t}();function fc(t,e,n,r){r===void 0&&(r={}),t=G(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ie("Cannot call useEmulator() after instance has already been initialized.");var i=t._repoInternal,o=void 0;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new tt(tt.OWNER);else if(r.mockUserToken){var s=typeof r.mockUserToken=="string"?r.mockUserToken:vs(r.mockUserToken,t.app.options.projectId);o=new tt(s)}sc(i,e,n,o)}function hc(t){t=G(t),t._checkNotDeleted("goOffline"),wo(t._repo)}function dc(t){t=G(t),t._checkNotDeleted("goOnline"),Sl(t._repo)}/**
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
 */var pc={".sv":"timestamp"};function vc(){return pc}function _c(t){return{".sv":{increment:t}}}/**
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
 */var gc=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();function yc(t,e,n){var r;if(t=G(t),Y("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";var i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,o=new Q,s=function(u,l,c){var f=null;u?o.reject(u):(f=new nn(c,new ae(t._repo,t._path),R),o.resolve(new gc(l,f)))},a=On(t,function(){});return bl(t._repo,t._path,e,s,a,i),o.promise}/**
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
 */var mc=function(){function t(e){this._delegate=e}return t.prototype.cancel=function(e){y("OnDisconnect.cancel",0,1,arguments.length),L("OnDisconnect.cancel","onComplete",e,!0);var n=this._delegate.cancel();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.remove=function(e){y("OnDisconnect.remove",0,1,arguments.length),L("OnDisconnect.remove","onComplete",e,!0);var n=this._delegate.remove();return e&&n.then(function(){return e(null)},function(r){return e(r)}),n},t.prototype.set=function(e,n){y("OnDisconnect.set",1,2,arguments.length),L("OnDisconnect.set","onComplete",n,!0);var r=this._delegate.set(e);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},t.prototype.setWithPriority=function(e,n,r){y("OnDisconnect.setWithPriority",2,3,arguments.length),L("OnDisconnect.setWithPriority","onComplete",r,!0);var i=this._delegate.setWithPriority(e,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},t.prototype.update=function(e,n){if(y("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){for(var r={},i=0;i<e.length;++i)r[""+i]=e[i];e=r,F("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}L("OnDisconnect.update","onComplete",n,!0);var o=this._delegate.update(e);return n&&o.then(function(){return n(null)},function(s){return n(s)}),o},t}();/**
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
 */var Cc=function(){function t(e,n){this.committed=e,this.snapshot=n}return t.prototype.toJSON=function(){return y("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},t}();/**
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
 */var ot=function(){function t(e,n){this._database=e,this._delegate=n}return t.prototype.val=function(){return y("DataSnapshot.val",0,0,arguments.length),this._delegate.val()},t.prototype.exportVal=function(){return y("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()},t.prototype.toJSON=function(){return y("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.exists=function(){return y("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()},t.prototype.child=function(e){return y("DataSnapshot.child",0,1,arguments.length),e=String(e),ct("DataSnapshot.child","path",e,!1),new t(this._database,this._delegate.child(e))},t.prototype.hasChild=function(e){return y("DataSnapshot.hasChild",1,1,arguments.length),ct("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)},t.prototype.getPriority=function(){return y("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority},t.prototype.forEach=function(e){var n=this;return y("DataSnapshot.forEach",1,1,arguments.length),L("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(function(r){return e(new t(n._database,r))})},t.prototype.hasChildren=function(){return y("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()},Object.defineProperty(t.prototype,"key",{get:function(){return this._delegate.key},enumerable:!1,configurable:!0}),t.prototype.numChildren=function(){return y("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size},t.prototype.getRef=function(){return y("DataSnapshot.ref",0,0,arguments.length),new Te(this._database,this._delegate.ref)},Object.defineProperty(t.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),t}(),Mo=function(){function t(e,n){this.database=e,this._delegate=n}return t.prototype.on=function(e,n,r,i){var o=this,s;y("Query.on",2,4,arguments.length),L("Query.on","callback",n,!1);var a=t.getCancelAndContextArgs_("Query.on",r,i),u=function(c,f){n.call(a.context,new ot(o.database,c),f)};u.userCallback=n,u.context=a.context;var l=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(e){case"value":return On(this._delegate,u,l),n;case"child_added":return ti(this._delegate,u,l),n;case"child_removed":return ii(this._delegate,u,l),n;case"child_changed":return ni(this._delegate,u,l),n;case"child_moved":return ri(this._delegate,u,l),n;default:throw new Error(z("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},t.prototype.off=function(e,n,r){if(y("Query.off",0,3,arguments.length),sl("Query.off",e,!0),L("Query.off","callback",n,!0),Cr("Query.off","context",r,!0),n){var i=function(){};i.userCallback=n,i.context=r,oi(this._delegate,e,i)}else oi(this._delegate,e)},t.prototype.get=function(){var e=this;return Wl(this._delegate).then(function(n){return new ot(e.database,n)})},t.prototype.once=function(e,n,r,i){var o=this;y("Query.once",1,4,arguments.length),L("Query.once","callback",n,!0);var s=t.getCancelAndContextArgs_("Query.once",r,i),a=new Q,u=function(c,f){var h=new ot(o.database,c);n&&n.call(s.context,h,f),a.resolve(h)};u.userCallback=n,u.context=s.context;var l=function(c){s.cancel&&s.cancel.call(s.context,c),a.reject(c)};switch(e){case"value":On(this._delegate,u,l,{onlyOnce:!0});break;case"child_added":ti(this._delegate,u,l,{onlyOnce:!0});break;case"child_removed":ii(this._delegate,u,l,{onlyOnce:!0});break;case"child_changed":ni(this._delegate,u,l,{onlyOnce:!0});break;case"child_moved":ri(this._delegate,u,l,{onlyOnce:!0});break;default:throw new Error(z("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise},t.prototype.limitToFirst=function(e){return y("Query.limitToFirst",1,1,arguments.length),new t(this.database,$(this._delegate,Yl(e)))},t.prototype.limitToLast=function(e){return y("Query.limitToLast",1,1,arguments.length),new t(this.database,$(this._delegate,ql(e)))},t.prototype.orderByChild=function(e){return y("Query.orderByChild",1,1,arguments.length),new t(this.database,$(this._delegate,$l(e)))},t.prototype.orderByKey=function(){return y("Query.orderByKey",0,0,arguments.length),new t(this.database,$(this._delegate,Jl()))},t.prototype.orderByPriority=function(){return y("Query.orderByPriority",0,0,arguments.length),new t(this.database,$(this._delegate,ec()))},t.prototype.orderByValue=function(){return y("Query.orderByValue",0,0,arguments.length),new t(this.database,$(this._delegate,nc()))},t.prototype.startAt=function(e,n){return e===void 0&&(e=null),y("Query.startAt",0,2,arguments.length),new t(this.database,$(this._delegate,Vl(e,n)))},t.prototype.startAfter=function(e,n){return e===void 0&&(e=null),y("Query.startAfter",0,2,arguments.length),new t(this.database,$(this._delegate,Hl(e,n)))},t.prototype.endAt=function(e,n){return e===void 0&&(e=null),y("Query.endAt",0,2,arguments.length),new t(this.database,$(this._delegate,Ul(e,n)))},t.prototype.endBefore=function(e,n){return e===void 0&&(e=null),y("Query.endBefore",0,2,arguments.length),new t(this.database,$(this._delegate,Ql(e,n)))},t.prototype.equalTo=function(e,n){return y("Query.equalTo",1,2,arguments.length),new t(this.database,$(this._delegate,ic(e,n)))},t.prototype.toString=function(){return y("Query.toString",0,0,arguments.length),this._delegate.toString()},t.prototype.toJSON=function(){return y("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()},t.prototype.isEqual=function(e){if(y("Query.isEqual",1,1,arguments.length),!(e instanceof t)){var n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)},t.getCancelAndContextArgs_=function(e,n,r){var i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,L(e,"cancel",i.cancel,!0),i.context=r,Cr(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(z(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i},Object.defineProperty(t.prototype,"ref",{get:function(){return new Te(this.database,new ae(this._delegate._repo,this._delegate._path))},enumerable:!1,configurable:!0}),t}(),Te=function(t){O(e,t);function e(n,r){var i=t.call(this,n,new K(r._repo,r._path,new Yi,!1))||this;return i.database=n,i._delegate=r,i}return e.prototype.getKey=function(){return y("Reference.key",0,0,arguments.length),this._delegate.key},e.prototype.child=function(n){return y("Reference.child",1,1,arguments.length),typeof n=="number"&&(n=String(n)),new e(this.database,ke(this._delegate,n))},e.prototype.getParent=function(){y("Reference.parent",0,0,arguments.length);var n=this._delegate.parent;return n?new e(this.database,n):null},e.prototype.getRoot=function(){return y("Reference.root",0,0,arguments.length),new e(this.database,this._delegate.root)},e.prototype.set=function(n,r){y("Reference.set",1,2,arguments.length),L("Reference.set","onComplete",r,!0);var i=vr(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.update=function(n,r){if(y("Reference.update",1,2,arguments.length),Array.isArray(n)){for(var i={},o=0;o<n.length;++o)i[""+o]=n[o];n=i,F("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Y("Reference.update",this._delegate._path),L("Reference.update","onComplete",r,!0);var s=Fl(this._delegate,n);return r&&s.then(function(){return r(null)},function(a){return r(a)}),s},e.prototype.setWithPriority=function(n,r,i){y("Reference.setWithPriority",2,3,arguments.length),L("Reference.setWithPriority","onComplete",i,!0);var o=Ml(this._delegate,n,r);return i&&o.then(function(){return i(null)},function(s){return i(s)}),o},e.prototype.remove=function(n){y("Reference.remove",0,1,arguments.length),L("Reference.remove","onComplete",n,!0);var r=Dl(this._delegate);return n&&r.then(function(){return n(null)},function(i){return n(i)}),r},e.prototype.transaction=function(n,r,i){var o=this;y("Reference.transaction",1,3,arguments.length),L("Reference.transaction","transactionUpdate",n,!1),L("Reference.transaction","onComplete",r,!0),ul("Reference.transaction","applyLocally",i,!0);var s=yc(this._delegate,n,{applyLocally:i}).then(function(a){return new Cc(a.committed,new ot(o.database,a.snapshot))});return r&&s.then(function(a){return r(null,a.committed,a.snapshot)},function(a){return r(a,!1,null)}),s},e.prototype.setPriority=function(n,r){y("Reference.setPriority",1,2,arguments.length),L("Reference.setPriority","onComplete",r,!0);var i=Ll(this._delegate,n);return r&&i.then(function(){return r(null)},function(o){return r(o)}),i},e.prototype.push=function(n,r){var i=this;y("Reference.push",0,2,arguments.length),L("Reference.push","onComplete",r,!0);var o=xl(this._delegate,n),s=o.then(function(u){return new e(i.database,u)});r&&s.then(function(){return r(null)},function(u){return r(u)});var a=new e(this.database,o);return a.then=s.then.bind(s),a.catch=s.catch.bind(s,void 0),a},e.prototype.onDisconnect=function(){return Y("Reference.onDisconnect",this._delegate._path),new mc(new Ol(this._delegate._repo,this._delegate._path))},Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),e}(Mo);/**
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
 */var Mt=function(){function t(e,n){var r=this;this._delegate=e,this.app=n,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return t.prototype.useEmulator=function(e,n,r){r===void 0&&(r={}),fc(this._delegate,e,n,r)},t.prototype.ref=function(e){if(y("database.ref",0,1,arguments.length),e instanceof Te){var n=ei(this._delegate,e.toString());return new Te(this,n)}else{var n=ko(this._delegate,e);return new Te(this,n)}},t.prototype.refFromURL=function(e){var n="database.refFromURL";y(n,1,1,arguments.length);var r=ei(this._delegate,e);return new Te(this,r)},t.prototype.goOffline=function(){return y("database.goOffline",0,0,arguments.length),hc(this._delegate)},t.prototype.goOnline=function(){return y("database.goOnline",0,0,arguments.length),dc(this._delegate)},t.ServerValue={TIMESTAMP:vc(),increment:function(e){return _c(e)}},t}();/**
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
 */var Ec=function(){we.forceDisallow(),Bn.forceAllow()},wc=function(){Bn.forceDisallow()},Sc=function(){return we.isAvailable()},Tc=function(t,e){var n=t._delegate._repo.persistentConnection_;n.securityDebugCallback_=e},Ic=function(t,e){Tl(t._delegate._repo,e)},bc=function(t,e){Il(t._delegate._repo,e)},Rc=function(t){return t._delegate._repo.dataUpdateCount},Nc=function(t,e){return pl(t._delegate._repo,e)};function kc(t){var e=t.app,n=t.url,r=t.version,i=t.customAuthImpl,o=t.namespace,s=t.nodeAdmin,a=s===void 0?!1:s;ci(r);var u=new _s("auth-internal",new gs("database-standalone"));return u.setComponent(new ui("auth-internal",function(){return i},"PRIVATE")),{instance:new Mt(Lo(e,u,void 0,n,a),e),namespace:o}}var Pc=Object.freeze({__proto__:null,forceLongPolling:Ec,forceWebSockets:wc,isWebSocketsAvailable:Sc,setSecurityDebugCallback:Tc,stats:Ic,statsIncrementCounter:bc,dataUpdateCount:Rc,interceptServerData:Nc,initStandalone:kc});/**
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
 */var Ac=be;be.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};be.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};var Oc=Oi,xc=function(t){var e=be.prototype.put;return be.prototype.put=function(n,r,i,o){o!==void 0&&(o=t()),e.call(this,n,r,i,o)},function(){be.prototype.put=e}},Dc=Wn,Lc=function(t){return t._delegate._queryIdentifier},Mc=function(t){lc(t)},Fc=Object.freeze({__proto__:null,DataConnection:Ac,RealTimeConnection:Oc,hijackHash:xc,ConnectionTarget:Dc,queryIdentifier:Lc,forceRestClient:Mc});/**
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
 */var Wc=Mt.ServerValue;function Uc(t){ci(t.SDK_VERSION),t.INTERNAL.registerComponent(new ui("database",function(e,n){var r=n.instanceIdentifier,i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Mt(Lo(i,o,s,r),i)},"PUBLIC").setServiceProps({Reference:Te,Query:Mo,Database:Mt,DataSnapshot:ot,enableLogging:pi,INTERNAL:Pc,ServerValue:Wc,TEST_ACCESS:Fc}).setMultipleInstances(!0)),t.registerVersion(Ss,Ts)}Uc(he);const Bc=Fo({name:"PsFrontendLayout",components:{PsNavBar:Xo,FooterView:Ko,PsIcon:Jo,PsNavTabBar:$o,Head:Wo,Link:Uo,PsNotificationBox:Zo},props:["authUser","backendSetting","firebaseConfig","webPushKey","appUrl"],setup(t){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.popStateDetected=!1,window.addEventListener("popstate",N=>{N!=null&&N.state!=null&&N.state.url!=null&&(String(N.state.url).includes("item-list",1)||String(N.state.url).includes("active-items",1)||String(N.state.url).includes("other-profile",1))?window.popStateDetected=!0:window.popStateDetected=!1});const e=rn(!0),n=rn(!0),r=ts(),i=new es;let o=ns();const s=rn(t.authUser?t.authUser.id:fe.NO_LOGIN_USER);o.replaceLoginUserId(s.value),i.userId=s.value,r.loadAppInfo(i);const a=qo(),u=ms(),l=new Cs,c=new Es,f=_r(()=>a.getters.isDarkMode),h=Bo({dark:f}),d=_r(()=>a.getters.dir);Qo.on("finish",N=>{if(localStorage.loginUserId&&localStorage.loginUserId!=""&&localStorage.loginUserId!=null&&localStorage.loginUserId!=null&&localStorage.loginUserId!=fe.NO_LOGIN_USER&&he.apps.length>=1){const W=he.database().ref("User_Presence");if(route().current()=="fe_chat"){const U={userId:localStorage.loginUserId,userName:"Tester"};W.child(localStorage.loginUserId).set(U)}else W.child(localStorage.loginUserId).remove()}}),gr(()=>h.dark,(N,W)=>{N?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),gr(()=>t.authUser,(N,W)=>{N?s.value!=N.id&&(s.value=N.id,o.replaceLoginUserId(N.id),A()):(he.auth().signOut(),s.value=fe.NO_LOGIN_USER,o.replaceLoginUserId(fe.NO_LOGIN_USER))});const v=JSON.parse(t.firebaseConfig);he.apps.length<1&&he.initializeApp(v);const g=he.messaging.isSupported()?he.messaging():null;g&&Notification.requestPermission().then(N=>{console.log(N==="granted"?"Notification permission granted.":"Unable to get permission to notify.")});function _(N,W){g&&fetch("https://iid.googleapis.com/iid/v1/"+N+"/rel/topics/"+W,{method:"POST",headers:new Headers({Authorization:"key="+t.backendSetting.fcm_api_key})}).then(U=>{if(U.status<200||U.status>=400)throw"Error subscribing to topic: "+U.status+" - "+U.text();console.log('Subscribed to "'+W+'"')}).catch(U=>{console.error(U)})}function m(){window.pageYOffset>30?e.value&&(e.value=!1):e.value||(e.value=!0)}Vo(async()=>{window.addEventListener("scroll",m);var N=document.getElementById("home_loading__container");if(N.style.display="none","serviceWorker"in navigator){if(g){let W=t.appUrl,U=W+"/firebase-messaging-sw.js";W!=null&&String(W).endsWith("/")&&(U=W+"firebase-messaging-sw.js"),navigator.serviceWorker.register(U).then(function(Ye){g.getToken({vapidKey:t.webPushKey,serviceWorkerRegistration:Ye}).then(async xe=>{xe&&(console.log("current token for client: ",xe),localStorage.deviceToken=xe,o.replacedeviceToken(localStorage.deviceToken),_(xe,"fe_broadcast"),await r.loadAppInfo(),o.loadData(),(localStorage.getItem("showProfile")==null||localStorage.showProfile=="")&&(r.appInfo.data.mobileSetting.is_show_owner_info=="1"?localStorage.showProfile="show":localStorage.showProfile="hide"),localStorage.getItem("notiSetting")==null||localStorage.notiSetting==""?A():localStorage.getItem("notiSetting")=="true"?(l.platformName=fe.PLATFORM,l.deviceId=o.deviceToken,l.loginUserId=s.value,u.registerNotiToken(l)):(c.platformName=fe.PLATFORM,c.deviceId=o.deviceToken,c.userId=s.value,u.unRegisterNotiToken(c)),o.replaceshowProfile(localStorage.showProfile),o.replaceNotiSetting(localStorage.notiSetting))}).catch(xe=>{console.log("An error occurred while retrieving token. ",xe)})}).catch(function(Ye){console.log("Service worker registration failed, error:",Ye)})}}else console.log("no serviceWorker in navigator")}),Go(()=>{window.removeEventListener("scroll",m)});function A(){r.appInfo.data.frontendConfigSetting.enableNotification=="1"?(localStorage.notiSetting="true",l.platformName=fe.PLATFORM,l.deviceId=o.deviceToken,l.loginUserId=s.value,u.registerNotiToken(l)):(localStorage.notiSetting="hide",c.platformName=fe.PLATFORM,c.deviceId=o.deviceToken,c.userId=s.value,u.unRegisterNotiToken(c))}function H(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{atTopOfPage:e,isDarkMode:f,dataReady:n,dir:d,appInfoStore:r,getDir:H}}}),Qc=["href"],Vc=["dir"],Gc={class:"w-full h-full flex flex-col min-h-screen"},Hc={class:"flex-grow bg-feAchromatic-50 dark:bg-feAchromatic-900"},jc={class:"top-0 fixed"};function Yc(t,e,n,r,i,o){const s=Ke("Head"),a=Ke("ps-nav-tab-bar"),u=Ke("ps-nav-bar"),l=Ke("footer-view"),c=Ke("ps-notification-box");return yr(),mr(zo,null,[ze(s,null,{default:Ho(()=>{var f,h,d;return[qe("link",{rel:"icon",type:"image/svg+xml",href:t.$page.props.thumb1xUrl+"/"+((d=(h=(f=t.appInfoStore.appInfo.data)==null?void 0:f.frontendConfigSetting)==null?void 0:h.frontendIcon)==null?void 0:d.imgPath)},null,8,Qc)]}),_:1}),t.dataReady?(yr(),mr("div",{key:0,dir:t.getDir(),class:"bg-feAchromatic-50 h-full"},[qe("div",Gc,[qe("main",Hc,[jo(t.$slots,"default")]),qe("div",jc,[ze(a,{topOfPage:t.atTopOfPage},null,8,["topOfPage"]),ze(u,{topOfPage:t.atTopOfPage},null,8,["topOfPage"])]),qe("footer",null,[ze(l)])])],8,Vc)):Yo("",!0),ze(c)],64)}var Yf=ws(Bc,[["render",Yc]]);export{Yf as default};
