import{d as Hr,H as Br,L as qr,i as Ye,K as Gr,C as wt,B as Yr,O as jr,D as Rt,j as zr,k as Kr,r as ge,o as bt,c as Nt,b as me,w as Xr,a as Ee,l as $r,g as Jr,F as Zr}from"./app.js";import en from"./FooterView.js";import tn from"./PsNavTabBar.js";import rn from"./PsNavBar.js";import nn from"./PsIcon2.js";import on from"./PsNotificationBox.js";import{A as sn}from"./AppInfoParameterHolder.js";import{u as an}from"./AppInfoStore.js";import{P as ln}from"./PsValueStore.js";import{s as ke,e as z,g as Ne,h as d,i as q,j as H,c as it,m as We,v as g,k as A,l as Pt,D as W,n as j,_ as U,o as ot,p as P,q as un,r as hn,t as st,u as er,w as cn,x as dt,L as fn,y as pn,S as dn,z as vn,d as ve,A as _n,B as tr,G as yn,a as gn,b as mn,C as rr,f as ee,H as En,P as Cn,I as Sn,J as Tn}from"./index.esm.js";import{P as Z}from"./ps_constants.js";import{u as In}from"./NotificationStore.js";import{N as wn,a as Rn}from"./NotiUnRegisterHolder.js";import{_ as bn}from"./plugin-vue_export-helper.js";import"./FooterLinkSection.js";import"./PsLabel2.js";import"./PsLink.js";import"./PsRouteLink.js";import"./PsLabelCaption3.js";import"./ProductParameterHolder.js";import"./PsDropdown.js";import"./PsDropdownSelect.js";import"./PsIconToggle.js";import"./LocationModal.js";import"./PsModal2.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsButton2.js";import"./PsInputWithLeftIcon.js";import"./LocationParameterHolder.js";import"./PsApiService2.js";import"./ItemLocationTownship.js";import"./PsObject.js";import"./PsSepetetedStore.js";import"./ItemLocationTownshipStore.js";import"./UserStore.js";import"./User.js";import"./RatingDetail.js";import"./DefaultPhoto.js";import"./UserListParameterHolder.js";import"./ApiStatus.js";import"./auth.esm.js";import"./UserUnReadMessageParameterHolder.js";import"./PsConfirmDialog.js";import"./PsUtils.js";import"./ProductStore.js";import"./Product.js";import"./Category.js";import"./DefaultIcon.js";import"./SubCategory.js";/**
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
 */var Nn=function(){function r(e){this.domStorage_=e,this.prefix_="firebase:"}return r.prototype.set=function(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),P(t))},r.prototype.get=function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:dt(t)},r.prototype.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},r.prototype.prefixedName_=function(e){return this.prefix_+e},r.prototype.toString=function(){return this.domStorage_.toString()},r}();/**
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
 */var Pn=function(){function r(){this.cache_={},this.isInMemoryStorage=!0}return r.prototype.set=function(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t},r.prototype.get=function(e){return H(this.cache_,e)?this.cache_[e]:null},r.prototype.remove=function(e){delete this.cache_[e]},r}();/**
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
 */var nr=function(r){try{if(typeof window!="undefined"&&typeof window[r]!="undefined"){var e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nn(e)}}catch{}return new Pn},se=nr("localStorage"),at=nr("sessionStorage");/**
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
 */var pe=new fn("@firebase/database"),ir=function(){var r=1;return function(){return r++}}(),or=function(r){var e=pn(r),t=new dn;t.update(e);var n=t.digest();return vn.encodeByteArray(n)},Pe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];for(var t="",n=0;n<r.length;n++){var i=r[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Pe.apply(null,i):typeof i=="object"?t+=P(i):t+=i,t+=" "}return t},ae=null,Ot=!0,sr=function(r,e){d(!e||r===!0||r===!1,"Can't turn on custom loggers persistently."),r===!0?(pe.logLevel=En.VERBOSE,ae=pe.log.bind(pe),e&&at.set("logging_enabled",!0)):typeof r=="function"?ae=r:(ae=null,at.remove("logging_enabled"))},F=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];if(Ot===!0&&(Ot=!1,ae===null&&at.get("logging_enabled")===!0&&sr(!0)),ae){var t=Pe.apply(null,r);ae(t)}},Oe=function(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];F.apply(void 0,ve([r],e))}},lt=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t="FIREBASE INTERNAL ERROR: "+Pe.apply(void 0,ve(r));pe.error(t)},Y=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t="FIREBASE FATAL ERROR: "+Pe.apply(void 0,ve(r));throw pe.error(t),new Error(t)},x=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t="FIREBASE WARNING: "+Pe.apply(void 0,ve(r));pe.warn(t)},On=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Be=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},An=function(r){if(document.readyState==="complete")r();else{var e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ue="[MIN_NAME]",ne="[MAX_NAME]",he=function(r,e){if(r===e)return 0;if(r===ue||e===ne)return-1;if(e===ue||r===ne)return 1;var t=At(r),n=At(e);return t!==null?n!==null?t-n===0?r.length-e.length:t-n:-1:n!==null?1:r<e?-1:1},Dn=function(r,e){return r===e?0:r<e?-1:1},Ce=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+P(e))},vt=function(r){if(typeof r!="object"||r===null)return P(r);var e=[];for(var t in r)e.push(t);e.sort();for(var n="{",i=0;i<e.length;i++)i!==0&&(n+=","),n+=P(e[i]),n+=":",n+=vt(r[e[i]]);return n+="}",n},ar=function(r,e){var t=r.length;if(t<=e)return[r];for(var n=[],i=0;i<t;i+=e)i+e>t?n.push(r.substring(i,t)):n.push(r.substring(i,i+e));return n};function O(r,e){for(var t in r)r.hasOwnProperty(t)&&e(t,r[t])}var lr=function(r){d(!Be(r),"Invalid JSON number");var e=11,t=52,n=(1<<e-1)-1,i,o,s,a,l;r===0?(o=0,s=0,i=1/r===-1/0?1:0):(i=r<0,r=Math.abs(r),r>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(r)/Math.LN2),n),o=a+n,s=Math.round(r*Math.pow(2,t-a)-Math.pow(2,t))):(o=0,s=Math.round(r/Math.pow(2,1-n-t))));var u=[];for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);for(l=e;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(i?1:0),u.reverse();var h=u.join(""),c="";for(l=0;l<64;l+=8){var f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},Ln=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fn=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xn=function(r,e){var t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");var n=new Error(r+" at "+e.path.toString()+": "+t);return n.code=r.toUpperCase(),n},kn=new RegExp("^-?(0*)\\d{1,10}$"),At=function(r){if(kn.test(r)){var e=Number(r);if(e>=-2147483648&&e<=2147483647)return e}return null},_e=function(r){try{r()}catch(e){setTimeout(function(){var t=e.stack||"";throw x("Exception was thrown by user callback.",t),e},Math.floor(0))}},Mn=function(){var r=typeof window=="object"&&window.navigator&&window.navigator.userAgent||"";return r.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ie=function(r,e){var t=setTimeout(r,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */var y=function(){function r(e,t){if(t===void 0){this.pieces_=e.split("/");for(var n=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}return Object.defineProperty(r,"Empty",{get:function(){return new r("")},enumerable:!1,configurable:!0}),r.prototype.getFront=function(){return this.pieceNum_>=this.pieces_.length?null:this.pieces_[this.pieceNum_]},r.prototype.getLength=function(){return this.pieces_.length-this.pieceNum_},r.prototype.popFront=function(){var e=this.pieceNum_;return e<this.pieces_.length&&e++,new r(this.pieces_,e)},r.prototype.getBack=function(){return this.pieceNum_<this.pieces_.length?this.pieces_[this.pieces_.length-1]:null},r.prototype.toString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"},r.prototype.toUrlEncodedString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(this.pieces_[t])));return e||"/"},r.prototype.slice=function(e){return e===void 0&&(e=0),this.pieces_.slice(this.pieceNum_+e)},r.prototype.parent=function(){if(this.pieceNum_>=this.pieces_.length)return null;for(var e=[],t=this.pieceNum_;t<this.pieces_.length-1;t++)e.push(this.pieces_[t]);return new r(e,0)},r.prototype.child=function(e){for(var t=[],n=this.pieceNum_;n<this.pieces_.length;n++)t.push(this.pieces_[n]);if(e instanceof r)for(var n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else for(var i=e.split("/"),n=0;n<i.length;n++)i[n].length>0&&t.push(i[n]);return new r(t,0)},r.prototype.isEmpty=function(){return this.pieceNum_>=this.pieces_.length},r.relativePath=function(e,t){var n=e.getFront(),i=t.getFront();if(n===null)return t;if(n===i)return r.relativePath(e.popFront(),t.popFront());throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")},r.comparePaths=function(e,t){for(var n=e.slice(),i=t.slice(),o=0;o<n.length&&o<i.length;o++){var s=he(n[o],i[o]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1},r.prototype.equals=function(e){if(this.getLength()!==e.getLength())return!1;for(var t=this.pieceNum_,n=e.pieceNum_;t<=this.pieces_.length;t++,n++)if(this.pieces_[t]!==e.pieces_[n])return!1;return!0},r.prototype.contains=function(e){var t=this.pieceNum_,n=e.pieceNum_;if(this.getLength()>e.getLength())return!1;for(;t<this.pieces_.length;){if(this.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0},r}(),Wn=function(){function r(e,t){this.errorPrefix_=t,this.parts_=e.slice(),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=ke(this.parts_[n]);this.checkValid_()}return Object.defineProperty(r,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!1,configurable:!0}),Object.defineProperty(r,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!1,configurable:!0}),r.prototype.push=function(e){this.parts_.length>0&&(this.byteLength_+=1),this.parts_.push(e),this.byteLength_+=ke(e),this.checkValid_()},r.prototype.pop=function(){var e=this.parts_.pop();this.byteLength_-=ke(e),this.parts_.length>0&&(this.byteLength_-=1)},r.prototype.checkValid_=function(){if(this.byteLength_>r.MAX_PATH_LENGTH_BYTES)throw new Error(this.errorPrefix_+"has a key path longer than "+r.MAX_PATH_LENGTH_BYTES+" bytes ("+this.byteLength_+").");if(this.parts_.length>r.MAX_PATH_DEPTH)throw new Error(this.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+r.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},r.prototype.toErrorString=function(){return this.parts_.length===0?"":"in property '"+this.parts_.join(".")+"'"},r}();/**
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
 */var _t="5",ur="v",hr="s",cr="r",fr="f",pr="firebaseio.com",dr="ls",Un="p",vr="websocket",_r="long_polling";/**
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
 */var yt=function(){function r(e,t,n,i,o,s,a){o===void 0&&(o=!1),s===void 0&&(s=""),a===void 0&&(a=!1),this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.host=e.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=se.get("host:"+e)||this.host}return r.prototype.needsQueryParam=function(){return this.host!==this.internalHost||this.isCustomHost()||this.includeNamespaceInQueryParams},r.prototype.isCacheableHost=function(){return this.internalHost.substr(0,2)==="s-"},r.prototype.isDemoHost=function(){return this.domain==="firebaseio-demo.com"},r.prototype.isCustomHost=function(){return this.domain!=="firebaseio.com"&&this.domain!=="firebaseio-demo.com"},r.prototype.updateHost=function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&se.set("host:"+this.host,this.internalHost))},r.prototype.connectionURL=function(e,t){d(typeof e=="string","typeof type must == string"),d(typeof t=="object","typeof params must == object");var n;if(e===vr)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?";else if(e===_r)n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);this.needsQueryParam()&&(t.ns=this.namespace);var i=[];return O(t,function(o,s){i.push(o+"="+s)}),n+i.join("&")},r.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},r.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},r}();/**
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
 */function Qn(r){for(var e="",t=r.split("/"),n=0;n<t.length;n++)if(t[n].length>0){var i=t[n];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Vn(r){var e,t,n={};r.charAt(0)==="?"&&(r=r.substring(1));try{for(var i=U(r.split("&")),o=i.next();!o.done;o=i.next()){var s=o.value;if(s.length!==0){var a=s.split("=");a.length===2?n[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):x("Invalid query segment '"+s+"' in query '"+r+"'")}}}catch(l){e={error:l}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return n}var ut=function(r,e){var t=Hn(r),n=t.namespace;t.domain==="firebase.com"&&Y(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Y("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||On();var i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new yt(t.host,t.secure,n,e,i,"",n!==t.subdomain),path:new y(t.pathString)}},Hn=function(r){var e="",t="",n="",i="",o="",s=!0,a="https",l=443;if(typeof r=="string"){var u=r.indexOf("//");u>=0&&(a=r.substring(0,u-1),r=r.substring(u+2));var h=r.indexOf("/");h===-1&&(h=r.length);var c=r.indexOf("?");c===-1&&(c=r.length),e=r.substring(0,Math.min(h,c)),h<c&&(i=Qn(r.substring(h,c)));var f=Vn(r.substring(Math.min(r.length,c)));u=e.indexOf(":"),u>=0?(s=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;var p=e.slice(0,u);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{var v=e.indexOf(".");n=e.substring(0,v).toLowerCase(),t=e.substring(v+1),o=n}"ns"in f&&(o=f.ns)}return{host:e,port:l,domain:t,subdomain:n,secure:s,scheme:a,pathString:i,namespace:o}};/**
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
 */var Bn=/[\[\].#$\/\u0000-\u001F\u007F]/,qn=/[\[\].#$\u0000-\u001F\u007F]/,je=10*1024*1024,qe=function(r){return typeof r=="string"&&r.length!==0&&!Bn.test(r)},yr=function(r){return typeof r=="string"&&r.length!==0&&!qn.test(r)},Gn=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),yr(r)},we=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Be(r)||r&&typeof r=="object"&&H(r,".sv")},te=function(r,e,t,n,i){i&&t===void 0||Ae(j(r,e,i),t,n)},Ae=function(r,e,t){var n=t instanceof y?new Wn(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+n.toErrorString());if(typeof e=="function")throw new Error(r+"contains a function "+n.toErrorString()+" with contents = "+e.toString());if(Be(e))throw new Error(r+"contains "+e.toString()+" "+n.toErrorString());if(typeof e=="string"&&e.length>je/3&&ke(e)>je)throw new Error(r+"contains a string greater than "+je+" utf8 bytes "+n.toErrorString()+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){var i=!1,o=!1;if(O(e,function(s,a){if(s===".value")i=!0;else if(s!==".priority"&&s!==".sv"&&(o=!0,!qe(s)))throw new Error(r+" contains an invalid key ("+s+") "+n.toErrorString()+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);n.push(s),Ae(r,a,n),n.pop()}),i&&o)throw new Error(r+' contains ".value" child '+n.toErrorString()+" in addition to actual children.")}},Yn=function(r,e){var t,n;for(t=0;t<e.length;t++){n=e[t];for(var i=n.slice(),o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!qe(i[o]))throw new Error(r+"contains an invalid key ("+i[o]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(y.comparePaths);var s=null;for(t=0;t<e.length;t++){if(n=e[t],s!==null&&s.contains(n))throw new Error(r+"contains a path "+s.toString()+" that is ancestor of another path "+n.toString());s=n}},gr=function(r,e,t,n,i){if(!(i&&t===void 0)){var o=j(r,e,i);if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");var s=[];O(t,function(a,l){var u=new y(a);if(Ae(o,l,n.child(u)),u.getBack()===".priority"&&!we(l))throw new Error(o+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),Yn(o,s)}},ht=function(r,e,t,n){if(!(n&&t===void 0)){if(Be(t))throw new Error(j(r,e,n)+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!we(t))throw new Error(j(r,e,n)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ze=function(r,e,t,n){if(!(n&&t===void 0))switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(j(r,e,n)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},Ke=function(r,e,t,n){if(!(n&&t===void 0)&&!qe(t))throw new Error(j(r,e,n)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Re=function(r,e,t,n){if(!(n&&t===void 0)&&!yr(t))throw new Error(j(r,e,n)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jn=function(r,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Re(r,e,t,n)},V=function(r,e){if(e.getFront()===".info")throw new Error(r+" failed = Can't modify data under /.info/")},mr=function(r,e,t){var n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!qe(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Gn(n))throw new Error(j(r,e,!1)+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)},zn=function(r,e,t,n){if(!(n&&t===void 0)&&typeof t!="boolean")throw new Error(j(r,e,n)+"must be a boolean.")};/**
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
 */var Kn=function(){function r(e,t){this.repo_=e,this.path_=t}return r.prototype.cancel=function(e){g("OnDisconnect.cancel",0,1,arguments.length),A("OnDisconnect.cancel",1,e,!0);var t=new W;return this.repo_.onDisconnectCancel(this.path_,t.wrapCallback(e)),t.promise},r.prototype.remove=function(e){g("OnDisconnect.remove",0,1,arguments.length),V("OnDisconnect.remove",this.path_),A("OnDisconnect.remove",1,e,!0);var t=new W;return this.repo_.onDisconnectSet(this.path_,null,t.wrapCallback(e)),t.promise},r.prototype.set=function(e,t){g("OnDisconnect.set",1,2,arguments.length),V("OnDisconnect.set",this.path_),te("OnDisconnect.set",1,e,this.path_,!1),A("OnDisconnect.set",2,t,!0);var n=new W;return this.repo_.onDisconnectSet(this.path_,e,n.wrapCallback(t)),n.promise},r.prototype.setWithPriority=function(e,t,n){g("OnDisconnect.setWithPriority",2,3,arguments.length),V("OnDisconnect.setWithPriority",this.path_),te("OnDisconnect.setWithPriority",1,e,this.path_,!1),ht("OnDisconnect.setWithPriority",2,t,!1),A("OnDisconnect.setWithPriority",3,n,!0);var i=new W;return this.repo_.onDisconnectSetWithPriority(this.path_,e,t,i.wrapCallback(n)),i.promise},r.prototype.update=function(e,t){if(g("OnDisconnect.update",1,2,arguments.length),V("OnDisconnect.update",this.path_),Array.isArray(e)){for(var n={},i=0;i<e.length;++i)n[""+i]=e[i];e=n,x("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gr("OnDisconnect.update",1,e,this.path_,!1),A("OnDisconnect.update",2,t,!0);var o=new W;return this.repo_.onDisconnectUpdate(this.path_,e,o.wrapCallback(t)),o.promise},r}();/**
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
 */var Xn=function(){function r(e,t){this.committed=e,this.snapshot=t}return r.prototype.toJSON=function(){return g("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},r}();/**
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
 */var $n=function(){var r="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",e=0,t=[];return function(n){var i=n===e;e=n;var o,s=new Array(8);for(o=7;o>=0;o--)s[o]=r.charAt(n%64),n=Math.floor(n/64);d(n===0,"Cannot push at time == 0");var a=s.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)a+=r.charAt(t[o]);return d(a.length===20,"nextPushId: Length should be 20."),a}}();/**
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
 */var T=function(){function r(e,t){this.name=e,this.node=t}return r.Wrap=function(e,t){return new r(e,t)},r}();/**
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
 */var Ge=function(){function r(){}return r.prototype.getCompare=function(){return this.compare.bind(this)},r.prototype.indexedValueChanged=function(e,t){var n=new T(ue,e),i=new T(ue,t);return this.compare(n,i)!==0},r.prototype.minPost=function(){return T.MIN},r}();/**
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
 */var Le,Er=function(r){z(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return Object.defineProperty(e,"__EMPTY_NODE",{get:function(){return Le},set:function(t){Le=t},enumerable:!1,configurable:!0}),e.prototype.compare=function(t,n){return he(t.name,n.name)},e.prototype.isDefinedOn=function(t){throw Ne("KeyIndex.isDefinedOn not expected to be called.")},e.prototype.indexedValueChanged=function(t,n){return!1},e.prototype.minPost=function(){return T.MIN},e.prototype.maxPost=function(){return new T(ne,Le)},e.prototype.makePost=function(t,n){return d(typeof t=="string","KeyIndex indexValue must always be a string."),new T(t,Le)},e.prototype.toString=function(){return".key"},e}(Ge),re=new Er;/**
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
 */var ct;function Jn(r){ct=r}var Cr=function(r){return typeof r=="number"?"number:"+lr(r):"string:"+r},Sr=function(r){if(r.isLeafNode()){var e=r.val();d(typeof e=="string"||typeof e=="number"||typeof e=="object"&&H(e,".sv"),"Priority must be a string or number.")}else d(r===ct||r.isEmpty(),"priority of unexpected type.");d(r===ct||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */var Dt,de=function(){function r(e,t){t===void 0&&(t=r.__childrenNodeConstructor.EMPTY_NODE),this.value_=e,this.priorityNode_=t,this.lazyHash_=null,d(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sr(this.priorityNode_)}return Object.defineProperty(r,"__childrenNodeConstructor",{get:function(){return Dt},set:function(e){Dt=e},enumerable:!1,configurable:!0}),r.prototype.isLeafNode=function(){return!0},r.prototype.getPriority=function(){return this.priorityNode_},r.prototype.updatePriority=function(e){return new r(this.value_,e)},r.prototype.getImmediateChild=function(e){return e===".priority"?this.priorityNode_:r.__childrenNodeConstructor.EMPTY_NODE},r.prototype.getChild=function(e){return e.isEmpty()?this:e.getFront()===".priority"?this.priorityNode_:r.__childrenNodeConstructor.EMPTY_NODE},r.prototype.hasChild=function(){return!1},r.prototype.getPredecessorChildName=function(e,t){return null},r.prototype.updateImmediateChild=function(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:r.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)},r.prototype.updateChild=function(e,t){var n=e.getFront();return n===null?t:t.isEmpty()&&n!==".priority"?this:(d(n!==".priority"||e.getLength()===1,".priority must be the last token in a path"),this.updateImmediateChild(n,r.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(),t)))},r.prototype.isEmpty=function(){return!1},r.prototype.numChildren=function(){return 0},r.prototype.forEachChild=function(e,t){return!1},r.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},r.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cr(this.priorityNode_.val())+":");var t=typeof this.value_;e+=t+":",t==="number"?e+=lr(this.value_):e+=this.value_,this.lazyHash_=or(e)}return this.lazyHash_},r.prototype.getValue=function(){return this.value_},r.prototype.compareTo=function(e){return e===r.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof r.__childrenNodeConstructor?-1:(d(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))},r.prototype.compareToLeafNode_=function(e){var t=typeof e.value_,n=typeof this.value_,i=r.VALUE_TYPE_ORDER.indexOf(t),o=r.VALUE_TYPE_ORDER.indexOf(n);return d(i>=0,"Unknown leaf type: "+t),d(o>=0,"Unknown leaf type: "+n),i===o?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i},r.prototype.withIndex=function(){return this},r.prototype.isIndexed=function(){return!0},r.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1},r.VALUE_TYPE_ORDER=["object","boolean","number","string"],r}();/**
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
 */var Tr,Ir;function Zn(r){Tr=r}function ei(r){Ir=r}var ti=function(r){z(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.compare=function(t,n){var i=t.node.getPriority(),o=n.node.getPriority(),s=i.compareTo(o);return s===0?he(t.name,n.name):s},e.prototype.isDefinedOn=function(t){return!t.getPriority().isEmpty()},e.prototype.indexedValueChanged=function(t,n){return!t.getPriority().equals(n.getPriority())},e.prototype.minPost=function(){return T.MIN},e.prototype.maxPost=function(){return new T(ne,new de("[PRIORITY-POST]",Ir))},e.prototype.makePost=function(t,n){var i=Tr(t);return new T(n,new de("[PRIORITY-POST]",i))},e.prototype.toString=function(){return".priority"},e}(Ge),I=new ti;/**
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
 */var Fe=function(){function r(e,t,n,i,o){o===void 0&&(o=null),this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)this.isReverse_?e=e.left:e=e.right;else if(s===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}return r.prototype.getNext=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t},r.prototype.hasNext=function(){return this.nodeStack_.length>0},r.prototype.peek=function(){if(this.nodeStack_.length===0)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},r}(),B=function(){function r(e,t,n,i,o){this.key=e,this.value=t,this.color=n!=null?n:r.RED,this.left=i!=null?i:X.EMPTY_NODE,this.right=o!=null?o:X.EMPTY_NODE}return r.prototype.copy=function(e,t,n,i,o){return new r(e!=null?e:this.key,t!=null?t:this.value,n!=null?n:this.color,i!=null?i:this.left,o!=null?o:this.right)},r.prototype.count=function(){return this.left.count()+1+this.right.count()},r.prototype.isEmpty=function(){return!1},r.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},r.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},r.prototype.min_=function(){return this.left.isEmpty()?this:this.left.min_()},r.prototype.minKey=function(){return this.min_().key},r.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},r.prototype.insert=function(e,t,n){var i=this,o=n(e,i.key);return o<0?i=i.copy(null,null,null,i.left.insert(e,t,n),null):o===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()},r.prototype.removeMin_=function(){if(this.left.isEmpty())return X.EMPTY_NODE;var e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()},r.prototype.remove=function(e,t){var n,i;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return X.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()},r.prototype.isRed_=function(){return this.color},r.prototype.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},r.prototype.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e},r.prototype.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e},r.prototype.rotateLeft_=function(){var e=this.copy(null,null,r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},r.prototype.rotateRight_=function(){var e=this.copy(null,null,r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},r.prototype.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},r.prototype.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},r.prototype.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},r.RED=!0,r.BLACK=!1,r}(),ri=function(){function r(){}return r.prototype.copy=function(e,t,n,i,o){return this},r.prototype.insert=function(e,t,n){return new B(e,t,null)},r.prototype.remove=function(e,t){return this},r.prototype.count=function(){return 0},r.prototype.isEmpty=function(){return!0},r.prototype.inorderTraversal=function(e){return!1},r.prototype.reverseTraversal=function(e){return!1},r.prototype.minKey=function(){return null},r.prototype.maxKey=function(){return null},r.prototype.check_=function(){return 0},r.prototype.isRed_=function(){return!1},r}(),X=function(){function r(e,t){t===void 0&&(t=r.EMPTY_NODE),this.comparator_=e,this.root_=t}return r.prototype.insert=function(e,t){return new r(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))},r.prototype.remove=function(e){return new r(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))},r.prototype.get=function(e){for(var t,n=this.root_;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null},r.prototype.getPredecessorKey=function(e){for(var t,n=this.root_,i=null;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(i=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},r.prototype.isEmpty=function(){return this.root_.isEmpty()},r.prototype.count=function(){return this.root_.count()},r.prototype.minKey=function(){return this.root_.minKey()},r.prototype.maxKey=function(){return this.root_.maxKey()},r.prototype.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},r.prototype.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},r.prototype.getIterator=function(e){return new Fe(this.root_,null,this.comparator_,!1,e)},r.prototype.getIteratorFrom=function(e,t){return new Fe(this.root_,e,this.comparator_,!1,t)},r.prototype.getReverseIteratorFrom=function(e,t){return new Fe(this.root_,e,this.comparator_,!0,t)},r.prototype.getReverseIterator=function(e){return new Fe(this.root_,null,this.comparator_,!0,e)},r.EMPTY_NODE=new ri,r}();/**
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
 */var ni=Math.log(2),ii=function(){function r(e){var t=function(o){return parseInt(Math.log(o)/ni,10)},n=function(o){return parseInt(Array(o+1).join("1"),2)};this.count=t(e+1),this.current_=this.count-1;var i=n(this.count);this.bits_=e+1&i}return r.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},r}(),Ue=function(r,e,t,n){r.sort(e);var i=function(l,u){var h=u-l,c,f;if(h===0)return null;if(h===1)return c=r[l],f=t?t(c):c,new B(f,c.node,B.BLACK,null,null);var p=parseInt(h/2,10)+l,v=i(l,p),_=i(p+1,u);return c=r[p],f=t?t(c):c,new B(f,c.node,B.BLACK,v,_)},o=function(l){for(var u=null,h=null,c=r.length,f=function(C,L){var M=c-C,R=c;c-=C;var N=i(M+1,R),k=r[M],ye=t?t(k):k;p(new B(ye,k.node,L,null,N))},p=function(C){u?(u.left=C,u=C):(h=C,u=C)},v=0;v<l.count;++v){var _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,B.BLACK):(f(E,B.BLACK),f(E,B.RED))}return h},s=new ii(r.length),a=o(s);return new X(n||e,a)};/**
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
 */var Xe,fe={},Qe=function(){function r(e,t){this.indexes_=e,this.indexSet_=t}return Object.defineProperty(r,"Default",{get:function(){return d(fe&&I,"ChildrenNode.ts has not been loaded"),Xe=Xe||new r({".priority":fe},{".priority":I}),Xe},enumerable:!1,configurable:!0}),r.prototype.get=function(e){var t=q(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null},r.prototype.hasIndex=function(e){return H(this.indexSet_,e.toString())},r.prototype.addIndex=function(e,t){d(e!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var n=[],i=!1,o=t.getIterator(T.Wrap),s=o.getNext();s;)i=i||e.isDefinedOn(s.node),n.push(s),s=o.getNext();var a;i?a=Ue(n,e.getCompare()):a=fe;var l=e.toString(),u=it({},this.indexSet_);u[l]=e;var h=it({},this.indexes_);return h[l]=a,new r(h,u)},r.prototype.addToIndexes=function(e,t){var n=this,i=We(this.indexes_,function(o,s){var a=q(n.indexSet_,s);if(d(a,"Missing index implementation for "+s),o===fe)if(a.isDefinedOn(e.node)){for(var l=[],u=t.getIterator(T.Wrap),h=u.getNext();h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),Ue(l,a.getCompare())}else return fe;else{var c=t.get(e.name),f=o;return c&&(f=f.remove(new T(e.name,c))),f.insert(e,e.node)}});return new r(i,this.indexSet_)},r.prototype.removeFromIndexes=function(e,t){var n=We(this.indexes_,function(i){if(i===fe)return i;var o=t.get(e.name);return o?i.remove(new T(e.name,o)):i});return new r(n,this.indexSet_)},r}();/**
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
 */function oi(r,e){return he(r.name,e.name)}function gt(r,e){return he(r,e)}/**
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
 */var Se,m=function(){function r(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Sr(this.priorityNode_),this.children_.isEmpty()&&d(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(r,"EMPTY_NODE",{get:function(){return Se||(Se=new r(new X(gt),null,Qe.Default))},enumerable:!1,configurable:!0}),r.prototype.isLeafNode=function(){return!1},r.prototype.getPriority=function(){return this.priorityNode_||Se},r.prototype.updatePriority=function(e){return this.children_.isEmpty()?this:new r(this.children_,e,this.indexMap_)},r.prototype.getImmediateChild=function(e){if(e===".priority")return this.getPriority();var t=this.children_.get(e);return t===null?Se:t},r.prototype.getChild=function(e){var t=e.getFront();return t===null?this:this.getImmediateChild(t).getChild(e.popFront())},r.prototype.hasChild=function(e){return this.children_.get(e)!==null},r.prototype.updateImmediateChild=function(e,t){if(d(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);var n=new T(e,t),i=void 0,o=void 0;t.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(n,this.children_));var s=i.isEmpty()?Se:this.priorityNode_;return new r(i,s,o)},r.prototype.updateChild=function(e,t){var n=e.getFront();if(n===null)return t;d(e.getFront()!==".priority"||e.getLength()===1,".priority must be the last token in a path");var i=this.getImmediateChild(n).updateChild(e.popFront(),t);return this.updateImmediateChild(n,i)},r.prototype.isEmpty=function(){return this.children_.isEmpty()},r.prototype.numChildren=function(){return this.children_.count()},r.prototype.val=function(e){if(this.isEmpty())return null;var t={},n=0,i=0,o=!0;if(this.forEachChild(I,function(l,u){t[l]=u.val(e),n++,o&&r.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):o=!1}),!e&&o&&i<2*n){var s=[];for(var a in t)s[a]=t[a];return s}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t},r.prototype.hash=function(){if(this.lazyHash_===null){var e="";this.getPriority().isEmpty()||(e+="priority:"+Cr(this.getPriority().val())+":"),this.forEachChild(I,function(t,n){var i=n.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":or(e)}return this.lazyHash_},r.prototype.getPredecessorChildName=function(e,t,n){var i=this.resolveIndex_(n);if(i){var o=i.getPredecessorKey(new T(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)},r.prototype.getFirstChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}else return this.children_.minKey()},r.prototype.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null},r.prototype.getLastChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}else return this.children_.maxKey()},r.prototype.getLastChild=function(e){var t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null},r.prototype.forEachChild=function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal(function(i){return t(i.name,i.node)}):this.children_.inorderTraversal(t)},r.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},r.prototype.getIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,function(s){return s});for(var i=this.children_.getIteratorFrom(e.name,T.Wrap),o=i.peek();o!=null&&t.compare(o,e)<0;)i.getNext(),o=i.peek();return i},r.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},r.prototype.getReverseIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,function(s){return s});for(var i=this.children_.getReverseIteratorFrom(e.name,T.Wrap),o=i.peek();o!=null&&t.compare(o,e)>0;)i.getNext(),o=i.peek();return i},r.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===De?-1:0},r.prototype.withIndex=function(e){if(e===re||this.indexMap_.hasIndex(e))return this;var t=this.indexMap_.addIndex(e,this.children_);return new r(this.children_,this.priorityNode_,t)},r.prototype.isIndexed=function(e){return e===re||this.indexMap_.hasIndex(e)},r.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(I),i=t.getIterator(I),o=n.getNext(),s=i.getNext();o&&s;){if(o.name!==s.name||!o.node.equals(s.node))return!1;o=n.getNext(),s=i.getNext()}return o===null&&s===null}else return!1;else return!1},r.prototype.resolveIndex_=function(e){return e===re?null:this.indexMap_.get(e.toString())},r.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/,r}(),si=function(r){z(e,r);function e(){return r.call(this,new X(gt),m.EMPTY_NODE,Qe.Default)||this}return e.prototype.compareTo=function(t){return t===this?0:1},e.prototype.equals=function(t){return t===this},e.prototype.getPriority=function(){return this},e.prototype.getImmediateChild=function(t){return m.EMPTY_NODE},e.prototype.isEmpty=function(){return!1},e}(m),De=new si;Object.defineProperties(T,{MIN:{value:new T(ue,m.EMPTY_NODE)},MAX:{value:new T(ne,De)}});Er.__EMPTY_NODE=m.EMPTY_NODE;de.__childrenNodeConstructor=m;Jn(De);ei(De);/**
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
 */var ai=!0;function w(r,e){if(e===void 0&&(e=null),r===null)return m.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),d(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){var t=r;return new de(t,w(e))}if(!(r instanceof Array)&&ai){var n=[],i=!1,o=r;if(O(o,function(u,h){if(u.substring(0,1)!=="."){var c=w(h);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new T(u,c)))}}),n.length===0)return m.EMPTY_NODE;var s=Ue(n,oi,function(u){return u.name},gt);if(i){var a=Ue(n,I.getCompare());return new m(s,w(e),new Qe({".priority":a},{".priority":I}))}else return new m(s,w(e),Qe.Default)}else{var l=m.EMPTY_NODE;return O(r,function(u,h){if(H(r,u)&&u.substring(0,1)!=="."){var c=w(h);(c.isLeafNode()||!c.isEmpty())&&(l=l.updateImmediateChild(u,c))}}),l.updatePriority(w(e))}}Zn(w);/**
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
 */var li=function(r){z(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.compare=function(t,n){var i=t.node.compareTo(n.node);return i===0?he(t.name,n.name):i},e.prototype.isDefinedOn=function(t){return!0},e.prototype.indexedValueChanged=function(t,n){return!t.equals(n)},e.prototype.minPost=function(){return T.MIN},e.prototype.maxPost=function(){return T.MAX},e.prototype.makePost=function(t,n){var i=w(t);return new T(n,i)},e.prototype.toString=function(){return".value"},e}(Ge),ft=new li;/**
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
 */var pt=function(r){z(e,r);function e(t){var n=r.call(this)||this;return n.indexPath_=t,d(!t.isEmpty()&&t.getFront()!==".priority","Can't create PathIndex with empty path or .priority key"),n}return e.prototype.extractChild=function(t){return t.getChild(this.indexPath_)},e.prototype.isDefinedOn=function(t){return!t.getChild(this.indexPath_).isEmpty()},e.prototype.compare=function(t,n){var i=this.extractChild(t.node),o=this.extractChild(n.node),s=i.compareTo(o);return s===0?he(t.name,n.name):s},e.prototype.makePost=function(t,n){var i=w(t),o=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(n,o)},e.prototype.maxPost=function(){var t=m.EMPTY_NODE.updateChild(this.indexPath_,De);return new T(ne,t)},e.prototype.toString=function(){return this.indexPath_.slice().join("/")},e}(Ge);/**
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
 */var ie=function(){function r(e,t,n){this.node_=e,this.ref_=t,this.index_=n}return r.prototype.val=function(){return g("DataSnapshot.val",0,0,arguments.length),this.node_.val()},r.prototype.exportVal=function(){return g("DataSnapshot.exportVal",0,0,arguments.length),this.node_.val(!0)},r.prototype.toJSON=function(){return g("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},r.prototype.exists=function(){return g("DataSnapshot.exists",0,0,arguments.length),!this.node_.isEmpty()},r.prototype.child=function(e){g("DataSnapshot.child",0,1,arguments.length),e=String(e),Re("DataSnapshot.child",1,e,!1);var t=new y(e),n=this.ref_.child(t);return new r(this.node_.getChild(t),n,I)},r.prototype.hasChild=function(e){g("DataSnapshot.hasChild",1,1,arguments.length),Re("DataSnapshot.hasChild",1,e,!1);var t=new y(e);return!this.node_.getChild(t).isEmpty()},r.prototype.getPriority=function(){return g("DataSnapshot.getPriority",0,0,arguments.length),this.node_.getPriority().val()},r.prototype.forEach=function(e){var t=this;if(g("DataSnapshot.forEach",1,1,arguments.length),A("DataSnapshot.forEach",1,e,!1),this.node_.isLeafNode())return!1;var n=this.node_;return!!n.forEachChild(this.index_,function(i,o){return e(new r(o,t.ref_.child(i),I))})},r.prototype.hasChildren=function(){return g("DataSnapshot.hasChildren",0,0,arguments.length),this.node_.isLeafNode()?!1:!this.node_.isEmpty()},Object.defineProperty(r.prototype,"key",{get:function(){return this.ref_.getKey()},enumerable:!1,configurable:!0}),r.prototype.numChildren=function(){return g("DataSnapshot.numChildren",0,0,arguments.length),this.node_.numChildren()},r.prototype.getRef=function(){return g("DataSnapshot.ref",0,0,arguments.length),this.ref_},Object.defineProperty(r.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),r}();/**
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
 */var wr=function(){function r(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}return r.prototype.getPath=function(){var e=this.snapshot.getRef();return this.eventType==="value"?e.path:e.getParent().path},r.prototype.getEventType=function(){return this.eventType},r.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},r.prototype.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+P(this.snapshot.exportVal())},r}(),Rr=function(){function r(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}return r.prototype.getPath=function(){return this.path},r.prototype.getEventType=function(){return"cancel"},r.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},r.prototype.toString=function(){return this.path.toString()+":cancel"},r}();/**
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
 */var Lt=function(){function r(e,t,n){this.callback_=e,this.cancelCallback_=t,this.context_=n}return r.prototype.respondsTo=function(e){return e==="value"},r.prototype.createEvent=function(e,t){var n=t.getQueryParams().getIndex();return new wr("value",this,new ie(e.snapshotNode,t.getRef(),n))},r.prototype.getEventRunner=function(e){var t=this.context_;if(e.getEventType()==="cancel"){d(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}else{var i=this.callback_;return function(){i.call(t,e.snapshot)}}},r.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new Rr(this,e,t):null},r.prototype.matches=function(e){return e instanceof r?!e.callback_||!this.callback_?!0:e.callback_===this.callback_&&e.context_===this.context_:!1},r.prototype.hasAnyCallback=function(){return this.callback_!==null},r}(),Ft=function(){function r(e,t,n){this.callbacks_=e,this.cancelCallback_=t,this.context_=n}return r.prototype.respondsTo=function(e){var t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,H(this.callbacks_,t)},r.prototype.createCancelEvent=function(e,t){return this.cancelCallback_?new Rr(this,e,t):null},r.prototype.createEvent=function(e,t){d(e.childName!=null,"Child events should have a childName.");var n=t.getRef().child(e.childName),i=t.getQueryParams().getIndex();return new wr(e.type,this,new ie(e.snapshotNode,n,i),e.prevName)},r.prototype.getEventRunner=function(e){var t=this.context_;if(e.getEventType()==="cancel"){d(this.cancelCallback_,"Raising a cancel event on a listener with no cancel callback");var n=this.cancelCallback_;return function(){n.call(t,e.error)}}else{var i=this.callbacks_[e.eventType];return function(){i.call(t,e.snapshot,e.prevName)}}},r.prototype.matches=function(e){var t=this;if(e instanceof r){if(!this.callbacks_||!e.callbacks_)return!0;if(this.context_===e.context_){var n=Object.keys(e.callbacks_),i=Object.keys(this.callbacks_),o=n.length,s=i.length;if(o===s)if(o===1){var a=n[0],l=i[0];return l===a&&(!e.callbacks_[a]||!this.callbacks_[l]||e.callbacks_[a]===this.callbacks_[l])}else return i.every(function(u){return e.callbacks_[u]===t.callbacks_[u]})}}return!1},r.prototype.hasAnyCallback=function(){return this.callbacks_!==null},r}();/**
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
 */var $e,mt=function(){function r(e,t,n,i){this.repo=e,this.path=t,this.queryParams_=n,this.orderByCalled_=i}return Object.defineProperty(r,"__referenceConstructor",{get:function(){return d($e,"Reference.ts has not been loaded"),$e},set:function(e){$e=e},enumerable:!1,configurable:!0}),r.validateQueryEndpoints_=function(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===re){var i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if(e.hasStart()){var s=e.getIndexStartName();if(s!==ue)throw new Error(i);if(typeof t!="string")throw new Error(o)}if(e.hasEnd()){var a=e.getIndexEndName();if(a!==ne)throw new Error(i);if(typeof n!="string")throw new Error(o)}}else if(e.getIndex()===I){if(t!=null&&!we(t)||n!=null&&!we(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(d(e.getIndex()instanceof pt||e.getIndex()===ft,"unknown index type."),t!=null&&typeof t=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},r.validateLimit_=function(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},r.prototype.validateNoPreviousOrderByCall_=function(e){if(this.orderByCalled_===!0)throw new Error(e+": You can't combine multiple orderBy calls.")},r.prototype.getQueryParams=function(){return this.queryParams_},r.prototype.getRef=function(){return g("Query.ref",0,0,arguments.length),new r.__referenceConstructor(this.repo,this.path)},r.prototype.on=function(e,t,n,i){g("Query.on",2,4,arguments.length),ze("Query.on",1,e,!1),A("Query.on",2,t,!1);var o=r.getCancelAndContextArgs_("Query.on",n,i);if(e==="value")this.onValueEvent(t,o.cancel,o.context);else{var s={};s[e]=t,this.onChildEvent(s,o.cancel,o.context)}return t},r.prototype.onValueEvent=function(e,t,n){var i=new Lt(e,t||null,n||null);this.repo.addEventCallbackForQuery(this,i)},r.prototype.onChildEvent=function(e,t,n){var i=new Ft(e,t,n);this.repo.addEventCallbackForQuery(this,i)},r.prototype.off=function(e,t,n){g("Query.off",0,3,arguments.length),ze("Query.off",1,e,!0),A("Query.off",2,t,!0),Pt("Query.off",3,n,!0);var i=null,o=null;if(e==="value"){var s=t||null;i=new Lt(s,null,n||null)}else e&&(t&&(o={},o[e]=t),i=new Ft(o,null,n||null));this.repo.removeEventCallbackForQuery(this,i)},r.prototype.get=function(){return this.repo.getValue(this)},r.prototype.once=function(e,t,n,i){var o=this;g("Query.once",1,4,arguments.length),ze("Query.once",1,e,!1),A("Query.once",2,t,!0);var s=r.getCancelAndContextArgs_("Query.once",n,i),a=!0,l=new W;l.promise.catch(function(){});var u=function(h){a&&(a=!1,o.off(e,u),t&&t.bind(s.context)(h),l.resolve(h))};return this.on(e,u,function(h){o.off(e,u),s.cancel&&s.cancel.bind(s.context)(h),l.reject(h)}),l.promise},r.prototype.limitToFirst=function(e){if(g("Query.limitToFirst",1,1,arguments.length),typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToFirst: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new r(this.repo,this.path,this.queryParams_.limitToFirst(e),this.orderByCalled_)},r.prototype.limitToLast=function(e){if(g("Query.limitToLast",1,1,arguments.length),typeof e!="number"||Math.floor(e)!==e||e<=0)throw new Error("Query.limitToLast: First argument must be a positive integer.");if(this.queryParams_.hasLimit())throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new r(this.repo,this.path,this.queryParams_.limitToLast(e),this.orderByCalled_)},r.prototype.orderByChild=function(e){if(g("Query.orderByChild",1,1,arguments.length),e==="$key")throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if(e==="$priority")throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if(e==="$value")throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Re("Query.orderByChild",1,e,!1),this.validateNoPreviousOrderByCall_("Query.orderByChild");var t=new y(e);if(t.isEmpty())throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var n=new pt(t),i=this.queryParams_.orderBy(n);return r.validateQueryEndpoints_(i),new r(this.repo,this.path,i,!0)},r.prototype.orderByKey=function(){g("Query.orderByKey",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByKey");var e=this.queryParams_.orderBy(re);return r.validateQueryEndpoints_(e),new r(this.repo,this.path,e,!0)},r.prototype.orderByPriority=function(){g("Query.orderByPriority",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByPriority");var e=this.queryParams_.orderBy(I);return r.validateQueryEndpoints_(e),new r(this.repo,this.path,e,!0)},r.prototype.orderByValue=function(){g("Query.orderByValue",0,0,arguments.length),this.validateNoPreviousOrderByCall_("Query.orderByValue");var e=this.queryParams_.orderBy(ft);return r.validateQueryEndpoints_(e),new r(this.repo,this.path,e,!0)},r.prototype.startAt=function(e,t){e===void 0&&(e=null),g("Query.startAt",0,2,arguments.length),te("Query.startAt",1,e,this.path,!0),Ke("Query.startAt",2,t,!0);var n=this.queryParams_.startAt(e,t);if(r.validateLimit_(n),r.validateQueryEndpoints_(n),this.queryParams_.hasStart())throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return e===void 0&&(e=null,t=null),new r(this.repo,this.path,n,this.orderByCalled_)},r.prototype.endAt=function(e,t){e===void 0&&(e=null),g("Query.endAt",0,2,arguments.length),te("Query.endAt",1,e,this.path,!0),Ke("Query.endAt",2,t,!0);var n=this.queryParams_.endAt(e,t);if(r.validateLimit_(n),r.validateQueryEndpoints_(n),this.queryParams_.hasEnd())throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new r(this.repo,this.path,n,this.orderByCalled_)},r.prototype.equalTo=function(e,t){if(g("Query.equalTo",1,2,arguments.length),te("Query.equalTo",1,e,this.path,!1),Ke("Query.equalTo",2,t,!0),this.queryParams_.hasStart())throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.queryParams_.hasEnd())throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(e,t).endAt(e,t)},r.prototype.toString=function(){return g("Query.toString",0,0,arguments.length),this.repo.toString()+this.path.toUrlEncodedString()},r.prototype.toJSON=function(){return g("Query.toJSON",0,1,arguments.length),this.toString()},r.prototype.queryObject=function(){return this.queryParams_.getQueryObject()},r.prototype.queryIdentifier=function(){var e=this.queryObject(),t=vt(e);return t==="{}"?"default":t},r.prototype.isEqual=function(e){if(g("Query.isEqual",1,1,arguments.length),!(e instanceof r)){var t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}var n=this.repo===e.repo,i=this.path.equals(e.path),o=this.queryIdentifier()===e.queryIdentifier();return n&&i&&o},r.getCancelAndContextArgs_=function(e,t,n){var i={cancel:null,context:null};if(t&&n)i.cancel=t,A(e,3,i.cancel,!0),i.context=n,Pt(e,4,i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(j(e,3,!0)+" must either be a cancel callback or a context object.");return i},Object.defineProperty(r.prototype,"ref",{get:function(){return this.getRef()},enumerable:!1,configurable:!0}),r}();/**
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
 */var ui=function(){function r(e){this.node_=e}return r.prototype.getImmediateChild=function(e){var t=this.node_.getImmediateChild(e);return new r(t)},r.prototype.node=function(){return this.node_},r}(),hi=function(){function r(e,t){this.syncTree_=e,this.path_=t}return r.prototype.getImmediateChild=function(e){var t=this.path_.child(e);return new r(this.syncTree_,t)},r.prototype.node=function(){return this.syncTree_.calcCompleteEventCache(this.path_)},r}(),ci=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},xt=function(r,e,t){if(!r||typeof r!="object")return r;if(d(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return fi(r[".sv"],e,t);if(typeof r[".sv"]=="object")return pi(r[".sv"],e);d(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},fi=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:d(!1,"Unexpected server value: "+r)}},pi=function(r,e,t){r.hasOwnProperty("increment")||d(!1,"Unexpected server value: "+JSON.stringify(r,null,2));var n=r.increment;typeof n!="number"&&d(!1,"Unexpected increment value: "+n);var i=e.node();if(d(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return n;var o=i,s=o.getValue();return typeof s!="number"?n:s+n},kt=function(r,e,t,n){return Ct(e,new hi(t,r),n)},Et=function(r,e,t){return Ct(r,new ui(e),t)};function Ct(r,e,t){var n=r.getPriority().val(),i=xt(n,e.getImmediateChild(".priority"),t),o;if(r.isLeafNode()){var s=r,a=xt(s.getValue(),e,t);return a!==s.getValue()||i!==s.getPriority().val()?new de(a,w(i)):r}else{var l=r;return o=l,i!==l.getPriority().val()&&(o=o.updatePriority(new de(i))),l.forEachChild(I,function(u,h){var c=Ct(h,e.getImmediateChild(u),t);c!==h&&(o=o.updateImmediateChild(u,c))}),o}}/**
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
 */var Je=function(){function r(){this.value=null,this.children=new Map}return r.prototype.find=function(e){if(this.value!=null)return this.value.getChild(e);if(!e.isEmpty()&&this.children.size>0){var t=e.getFront();if(e=e.popFront(),this.children.has(t)){var n=this.children.get(t);return n.find(e)}else return null}else return null},r.prototype.remember=function(e,t){if(e.isEmpty())this.value=t,this.children.clear();else if(this.value!==null)this.value=this.value.updateChild(e,t);else{var n=e.getFront();this.children.has(n)||this.children.set(n,new r);var i=this.children.get(n);e=e.popFront(),i.remember(e,t)}},r.prototype.forget=function(e){if(e.isEmpty())return this.value=null,this.children.clear(),!0;if(this.value!==null){if(this.value.isLeafNode())return!1;var t=this.value;this.value=null;var n=this;return t.forEachChild(I,function(s,a){n.remember(new y(s),a)}),this.forget(e)}else if(this.children.size>0){var i=e.getFront();if(e=e.popFront(),this.children.has(i)){var o=this.children.get(i).forget(e);o&&this.children.delete(i)}return this.children.size===0}else return!0},r.prototype.forEachTree=function(e,t){this.value!==null?t(e,this.value):this.forEachChild(function(n,i){var o=new y(e.toString()+"/"+n);i.forEachTree(o,t)})},r.prototype.forEachChild=function(e){this.children.forEach(function(t,n){e(n,t)})},r}();/**
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
 */var G;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(G||(G={}));var K=function(){function r(e,t,n,i){this.fromUser=e,this.fromServer=t,this.queryId=n,this.tagged=i,d(!i||t,"Tagged queries must be from server.")}return r.User=new r(!0,!1,null,!1),r.Server=new r(!1,!0,null,!1),r.forServerTaggedQuery=function(e){return new r(!1,!0,e,!0)},r}();/**
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
 */var di=function(){function r(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=G.ACK_USER_WRITE,this.source=K.User}return r.prototype.operationForChild=function(e){if(this.path.isEmpty()){if(this.affectedTree.value!=null)return d(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var t=this.affectedTree.subtree(new y(e));return new r(y.Empty,t,this.revert)}else return d(this.path.getFront()===e,"operationForChild called for unrelated child."),new r(this.path.popFront(),this.affectedTree,this.revert)},r}();/**
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
 */var Ze,vi=function(){return Ze||(Ze=new X(Dn)),Ze},Q=function(){function r(e,t){t===void 0&&(t=vi()),this.value=e,this.children=t}return r.fromObject=function(e){var t=r.Empty;return O(e,function(n,i){t=t.set(new y(n),i)}),t},r.prototype.isEmpty=function(){return this.value===null&&this.children.isEmpty()},r.prototype.findRootMostMatchingPathAndValue=function(e,t){if(this.value!=null&&t(this.value))return{path:y.Empty,value:this.value};if(e.isEmpty())return null;var n=e.getFront(),i=this.children.get(n);if(i!==null){var o=i.findRootMostMatchingPathAndValue(e.popFront(),t);if(o!=null){var s=new y(n).child(o.path);return{path:s,value:o.value}}else return null}else return null},r.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},r.prototype.subtree=function(e){if(e.isEmpty())return this;var t=e.getFront(),n=this.children.get(t);return n!==null?n.subtree(e.popFront()):r.Empty},r.prototype.set=function(e,t){if(e.isEmpty())return new r(t,this.children);var n=e.getFront(),i=this.children.get(n)||r.Empty,o=i.set(e.popFront(),t),s=this.children.insert(n,o);return new r(this.value,s)},r.prototype.remove=function(e){if(e.isEmpty())return this.children.isEmpty()?r.Empty:new r(null,this.children);var t=e.getFront(),n=this.children.get(t);if(n){var i=n.remove(e.popFront()),o=void 0;return i.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,i),this.value===null&&o.isEmpty()?r.Empty:new r(this.value,o)}else return this},r.prototype.get=function(e){if(e.isEmpty())return this.value;var t=e.getFront(),n=this.children.get(t);return n?n.get(e.popFront()):null},r.prototype.setTree=function(e,t){if(e.isEmpty())return t;var n=e.getFront(),i=this.children.get(n)||r.Empty,o=i.setTree(e.popFront(),t),s=void 0;return o.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,o),new r(this.value,s)},r.prototype.fold=function(e){return this.fold_(y.Empty,e)},r.prototype.fold_=function(e,t){var n={};return this.children.inorderTraversal(function(i,o){n[i]=o.fold_(e.child(i),t)}),t(e,this.value,n)},r.prototype.findOnPath=function(e,t){return this.findOnPath_(e,y.Empty,t)},r.prototype.findOnPath_=function(e,t,n){var i=this.value?n(t,this.value):!1;if(i)return i;if(e.isEmpty())return null;var o=e.getFront(),s=this.children.get(o);return s?s.findOnPath_(e.popFront(),t.child(o),n):null},r.prototype.foreachOnPath=function(e,t){return this.foreachOnPath_(e,y.Empty,t)},r.prototype.foreachOnPath_=function(e,t,n){if(e.isEmpty())return this;this.value&&n(t,this.value);var i=e.getFront(),o=this.children.get(i);return o?o.foreachOnPath_(e.popFront(),t.child(i),n):r.Empty},r.prototype.foreach=function(e){this.foreach_(y.Empty,e)},r.prototype.foreach_=function(e,t){this.children.inorderTraversal(function(n,i){i.foreach_(e.child(n),t)}),this.value&&t(e,this.value)},r.prototype.foreachChild=function(e){this.children.inorderTraversal(function(t,n){n.value&&e(t,n.value)})},r.Empty=new r(null),r}();/**
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
 */var Mt=function(){function r(e,t){this.source=e,this.path=t,this.type=G.LISTEN_COMPLETE}return r.prototype.operationForChild=function(e){return this.path.isEmpty()?new r(this.source,y.Empty):new r(this.source,this.path.popFront())},r}();/**
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
 */var Me=function(){function r(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=G.OVERWRITE}return r.prototype.operationForChild=function(e){return this.path.isEmpty()?new r(this.source,y.Empty,this.snap.getImmediateChild(e)):new r(this.source,this.path.popFront(),this.snap)},r}();/**
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
 */var et=function(){function r(e,t,n){this.source=e,this.path=t,this.children=n,this.type=G.MERGE}return r.prototype.operationForChild=function(e){if(this.path.isEmpty()){var t=this.children.subtree(new y(e));return t.isEmpty()?null:t.value?new Me(this.source,y.Empty,t.value):new r(this.source,y.Empty,t)}else return d(this.path.getFront()===e,"Can't get a merge for a child not on the path of the operation"),new r(this.source,this.path.popFront(),this.children)},r.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},r}();/**
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
 */var $=function(){function r(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}return r.prototype.isFullyInitialized=function(){return this.fullyInitialized_},r.prototype.isFiltered=function(){return this.filtered_},r.prototype.isCompleteForPath=function(e){if(e.isEmpty())return this.isFullyInitialized()&&!this.filtered_;var t=e.getFront();return this.isCompleteForChild(t)},r.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},r.prototype.getNode=function(){return this.node_},r}();/**
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
 */var br=function(){function r(e,t){this.eventCache_=e,this.serverCache_=t}return r.prototype.updateEventSnap=function(e,t,n){return new r(new $(e,t,n),this.serverCache_)},r.prototype.updateServerSnap=function(e,t,n){return new r(this.eventCache_,new $(e,t,n))},r.prototype.getEventCache=function(){return this.eventCache_},r.prototype.getCompleteEventSnap=function(){return this.eventCache_.isFullyInitialized()?this.eventCache_.getNode():null},r.prototype.getServerCache=function(){return this.serverCache_},r.prototype.getCompleteServerSnap=function(){return this.serverCache_.isFullyInitialized()?this.serverCache_.getNode():null},r.Empty=new r(new $(m.EMPTY_NODE,!1,!1),new $(m.EMPTY_NODE,!1,!1)),r}();/**
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
 */var S=function(){function r(e,t,n,i,o){this.type=e,this.snapshotNode=t,this.childName=n,this.oldSnap=i,this.prevName=o}return r.valueChange=function(e){return new r(r.VALUE,e)},r.childAddedChange=function(e,t){return new r(r.CHILD_ADDED,t,e)},r.childRemovedChange=function(e,t){return new r(r.CHILD_REMOVED,t,e)},r.childChangedChange=function(e,t,n){return new r(r.CHILD_CHANGED,t,e,n)},r.childMovedChange=function(e,t){return new r(r.CHILD_MOVED,t,e)},r.CHILD_ADDED="child_added",r.CHILD_REMOVED="child_removed",r.CHILD_CHANGED="child_changed",r.CHILD_MOVED="child_moved",r.VALUE="value",r}();/**
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
 */var St=function(){function r(e){this.index_=e}return r.prototype.updateChild=function(e,t,n,i,o,s){d(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()||(s!=null&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(S.childRemovedChange(t,a)):d(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(S.childAddedChange(t,n)):s.trackChildChange(S.childChangedChange(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)},r.prototype.updateFullNode=function(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(I,function(i,o){t.hasChild(i)||n.trackChildChange(S.childRemovedChange(i,o))}),t.isLeafNode()||t.forEachChild(I,function(i,o){if(e.hasChild(i)){var s=e.getImmediateChild(i);s.equals(o)||n.trackChildChange(S.childChangedChange(i,o,s))}else n.trackChildChange(S.childAddedChange(i,o))})),t.withIndex(this.index_)},r.prototype.updatePriority=function(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)},r.prototype.filtersNodes=function(){return!1},r.prototype.getIndexedFilter=function(){return this},r.prototype.getIndex=function(){return this.index_},r}();/**
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
 */var _i=function(){function r(){this.changeMap=new Map}return r.prototype.trackChildChange=function(e){var t=e.type,n=e.childName;d(t===S.CHILD_ADDED||t===S.CHILD_CHANGED||t===S.CHILD_REMOVED,"Only child changes supported for tracking"),d(n!==".priority","Only non-priority child changes can be tracked.");var i=this.changeMap.get(n);if(i){var o=i.type;if(t===S.CHILD_ADDED&&o===S.CHILD_REMOVED)this.changeMap.set(n,S.childChangedChange(n,e.snapshotNode,i.snapshotNode));else if(t===S.CHILD_REMOVED&&o===S.CHILD_ADDED)this.changeMap.delete(n);else if(t===S.CHILD_REMOVED&&o===S.CHILD_CHANGED)this.changeMap.set(n,S.childRemovedChange(n,i.oldSnap));else if(t===S.CHILD_CHANGED&&o===S.CHILD_ADDED)this.changeMap.set(n,S.childAddedChange(n,e.snapshotNode));else if(t===S.CHILD_CHANGED&&o===S.CHILD_CHANGED)this.changeMap.set(n,S.childChangedChange(n,e.snapshotNode,i.oldSnap));else throw Ne("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)},r.prototype.getChanges=function(){return Array.from(this.changeMap.values())},r}();/**
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
 */var yi=function(){function r(){}return r.prototype.getCompleteChild=function(e){return null},r.prototype.getChildAfterChild=function(e,t,n){return null},r}(),Wt=new yi,tt=function(){function r(e,t,n){n===void 0&&(n=null),this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}return r.prototype.getCompleteChild=function(e){var t=this.viewCache_.getEventCache();if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=this.optCompleteServerCache_!=null?new $(this.optCompleteServerCache_,!0,!1):this.viewCache_.getServerCache();return this.writes_.calcCompleteChild(e,n)},r.prototype.getChildAfterChild=function(e,t,n){var i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:this.viewCache_.getCompleteServerSnap(),o=this.writes_.calcIndexedSlice(i,t,1,n,e);return o.length===0?null:o[0]},r}();/**
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
 */var gi=function(){function r(e,t){this.viewCache=e,this.changes=t}return r}(),mi=function(){function r(e){this.filter_=e}return r.prototype.assertIndexed=function(e){d(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()),"Event snap not indexed"),d(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()),"Server snap not indexed")},r.prototype.applyOperation=function(e,t,n,i){var o=new _i,s,a;if(t.type===G.OVERWRITE){var l=t;l.source.fromUser?s=this.applyUserOverwrite_(e,l.path,l.snap,n,i,o):(d(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.getServerCache().isFiltered()&&!l.path.isEmpty(),s=this.applyServerOverwrite_(e,l.path,l.snap,n,i,a,o))}else if(t.type===G.MERGE){var u=t;u.source.fromUser?s=this.applyUserMerge_(e,u.path,u.children,n,i,o):(d(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.getServerCache().isFiltered(),s=this.applyServerMerge_(e,u.path,u.children,n,i,a,o))}else if(t.type===G.ACK_USER_WRITE){var h=t;h.revert?s=this.revertUserWrite_(e,h.path,n,i,o):s=this.ackUserWrite_(e,h.path,h.affectedTree,n,i,o)}else if(t.type===G.LISTEN_COMPLETE)s=this.listenComplete_(e,t.path,n,o);else throw Ne("Unknown operation type: "+t.type);var c=o.getChanges();return r.maybeAddValueEvent_(e,s,c),new gi(s,c)},r.maybeAddValueEvent_=function(e,t,n){var i=t.getEventCache();if(i.isFullyInitialized()){var o=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=e.getCompleteEventSnap();(n.length>0||!e.getEventCache().isFullyInitialized()||o&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(S.valueChange(t.getCompleteEventSnap()))}},r.prototype.generateEventCacheAfterServerEvent_=function(e,t,n,i,o){var s=e.getEventCache();if(n.shadowingWrite(t)!=null)return e;var a=void 0,l=void 0;if(t.isEmpty())if(d(e.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),e.getServerCache().isFiltered()){var u=e.getCompleteServerSnap(),h=u instanceof m?u:m.EMPTY_NODE,c=n.calcCompleteEventChildren(h);a=this.filter_.updateFullNode(e.getEventCache().getNode(),c,o)}else{var f=n.calcCompleteEventCache(e.getCompleteServerSnap());a=this.filter_.updateFullNode(e.getEventCache().getNode(),f,o)}else{var p=t.getFront();if(p===".priority"){d(t.getLength()===1,"Can't have a priority with additional path components");var v=s.getNode();l=e.getServerCache().getNode();var _=n.calcEventCacheAfterServerOverwrite(t,v,l);_!=null?a=this.filter_.updatePriority(v,_):a=s.getNode()}else{var E=t.popFront(),C=void 0;if(s.isCompleteForChild(p)){l=e.getServerCache().getNode();var L=n.calcEventCacheAfterServerOverwrite(t,s.getNode(),l);L!=null?C=s.getNode().getImmediateChild(p).updateChild(E,L):C=s.getNode().getImmediateChild(p)}else C=n.calcCompleteChild(p,e.getServerCache());C!=null?a=this.filter_.updateChild(s.getNode(),p,C,E,i,o):a=s.getNode()}}return e.updateEventSnap(a,s.isFullyInitialized()||t.isEmpty(),this.filter_.filtersNodes())},r.prototype.applyServerOverwrite_=function(e,t,n,i,o,s,a){var l=e.getServerCache(),u,h=s?this.filter_:this.filter_.getIndexedFilter();if(t.isEmpty())u=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){var c=l.getNode().updateChild(t,n);u=h.updateFullNode(l.getNode(),c,null)}else{var f=t.getFront();if(!l.isCompleteForPath(t)&&t.getLength()>1)return e;var p=t.popFront(),v=l.getNode().getImmediateChild(f),_=v.updateChild(p,n);f===".priority"?u=h.updatePriority(l.getNode(),_):u=h.updateChild(l.getNode(),f,_,p,Wt,null)}var E=e.updateServerSnap(u,l.isFullyInitialized()||t.isEmpty(),h.filtersNodes()),C=new tt(i,E,o);return this.generateEventCacheAfterServerEvent_(E,t,i,C,a)},r.prototype.applyUserOverwrite_=function(e,t,n,i,o,s){var a=e.getEventCache(),l,u,h=new tt(i,e,o);if(t.isEmpty())u=this.filter_.updateFullNode(e.getEventCache().getNode(),n,s),l=e.updateEventSnap(u,!0,this.filter_.filtersNodes());else{var c=t.getFront();if(c===".priority")u=this.filter_.updatePriority(e.getEventCache().getNode(),n),l=e.updateEventSnap(u,a.isFullyInitialized(),a.isFiltered());else{var f=t.popFront(),p=a.getNode().getImmediateChild(c),v=void 0;if(f.isEmpty())v=n;else{var _=h.getCompleteChild(c);_!=null?f.getBack()===".priority"&&_.getChild(f.parent()).isEmpty()?v=_:v=_.updateChild(f,n):v=m.EMPTY_NODE}if(p.equals(v))l=e;else{var E=this.filter_.updateChild(a.getNode(),c,v,f,h,s);l=e.updateEventSnap(E,a.isFullyInitialized(),this.filter_.filtersNodes())}}}return l},r.cacheHasChild_=function(e,t){return e.getEventCache().isCompleteForChild(t)},r.prototype.applyUserMerge_=function(e,t,n,i,o,s){var a=this,l=e;return n.foreach(function(u,h){var c=t.child(u);r.cacheHasChild_(e,c.getFront())&&(l=a.applyUserOverwrite_(l,c,h,i,o,s))}),n.foreach(function(u,h){var c=t.child(u);r.cacheHasChild_(e,c.getFront())||(l=a.applyUserOverwrite_(l,c,h,i,o,s))}),l},r.prototype.applyMerge_=function(e,t){return t.foreach(function(n,i){e=e.updateChild(n,i)}),e},r.prototype.applyServerMerge_=function(e,t,n,i,o,s,a){var l=this;if(e.getServerCache().getNode().isEmpty()&&!e.getServerCache().isFullyInitialized())return e;var u=e,h;t.isEmpty()?h=n:h=Q.Empty.setTree(t,n);var c=e.getServerCache().getNode();return h.children.inorderTraversal(function(f,p){if(c.hasChild(f)){var v=e.getServerCache().getNode().getImmediateChild(f),_=l.applyMerge_(v,p);u=l.applyServerOverwrite_(u,new y(f),_,i,o,s,a)}}),h.children.inorderTraversal(function(f,p){var v=!e.getServerCache().isCompleteForChild(f)&&p.value==null;if(!c.hasChild(f)&&!v){var _=e.getServerCache().getNode().getImmediateChild(f),E=l.applyMerge_(_,p);u=l.applyServerOverwrite_(u,new y(f),E,i,o,s,a)}}),u},r.prototype.ackUserWrite_=function(e,t,n,i,o,s){if(i.shadowingWrite(t)!=null)return e;var a=e.getServerCache().isFiltered(),l=e.getServerCache();if(n.value!=null){if(t.isEmpty()&&l.isFullyInitialized()||l.isCompleteForPath(t))return this.applyServerOverwrite_(e,t,l.getNode().getChild(t),i,o,a,s);if(t.isEmpty()){var u=Q.Empty;return l.getNode().forEachChild(re,function(c,f){u=u.set(new y(c),f)}),this.applyServerMerge_(e,t,u,i,o,a,s)}else return e}else{var h=Q.Empty;return n.foreach(function(c,f){var p=t.child(c);l.isCompleteForPath(p)&&(h=h.set(c,l.getNode().getChild(p)))}),this.applyServerMerge_(e,t,h,i,o,a,s)}},r.prototype.listenComplete_=function(e,t,n,i){var o=e.getServerCache(),s=e.updateServerSnap(o.getNode(),o.isFullyInitialized()||t.isEmpty(),o.isFiltered());return this.generateEventCacheAfterServerEvent_(s,t,n,Wt,i)},r.prototype.revertUserWrite_=function(e,t,n,i,o){var s;if(n.shadowingWrite(t)!=null)return e;var a=new tt(n,e,i),l=e.getEventCache().getNode(),u=void 0;if(t.isEmpty()||t.getFront()===".priority"){var h=void 0;if(e.getServerCache().isFullyInitialized())h=n.calcCompleteEventCache(e.getCompleteServerSnap());else{var c=e.getServerCache().getNode();d(c instanceof m,"serverChildren would be complete if leaf node"),h=n.calcCompleteEventChildren(c)}h=h,u=this.filter_.updateFullNode(l,h,o)}else{var f=t.getFront(),p=n.calcCompleteChild(f,e.getServerCache());p==null&&e.getServerCache().isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?u=this.filter_.updateChild(l,f,p,t.popFront(),a,o):e.getEventCache().getNode().hasChild(f)?u=this.filter_.updateChild(l,f,m.EMPTY_NODE,t.popFront(),a,o):u=l,u.isEmpty()&&e.getServerCache().isFullyInitialized()&&(s=n.calcCompleteEventCache(e.getCompleteServerSnap()),s.isLeafNode()&&(u=this.filter_.updateFullNode(u,s,o)))}return s=e.getServerCache().isFullyInitialized()||n.shadowingWrite(y.Empty)!=null,e.updateEventSnap(u,s,this.filter_.filtersNodes())},r}();/**
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
 */var Ei=function(){function r(e){this.query_=e,this.index_=this.query_.getQueryParams().getIndex()}return r.prototype.generateEventsForChanges=function(e,t,n){var i=this,o=[],s=[];return e.forEach(function(a){a.type===S.CHILD_CHANGED&&i.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push(S.childMovedChange(a.childName,a.snapshotNode))}),this.generateEventsForType_(o,S.CHILD_REMOVED,e,n,t),this.generateEventsForType_(o,S.CHILD_ADDED,e,n,t),this.generateEventsForType_(o,S.CHILD_MOVED,s,n,t),this.generateEventsForType_(o,S.CHILD_CHANGED,e,n,t),this.generateEventsForType_(o,S.VALUE,e,n,t),o},r.prototype.generateEventsForType_=function(e,t,n,i,o){var s=this,a=n.filter(function(l){return l.type===t});a.sort(this.compareChanges_.bind(this)),a.forEach(function(l){var u=s.materializeSingleChange_(l,o);i.forEach(function(h){h.respondsTo(l.type)&&e.push(h.createEvent(u,s.query_))})})},r.prototype.materializeSingleChange_=function(e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,this.index_)),e},r.prototype.compareChanges_=function(e,t){if(e.childName==null||t.childName==null)throw Ne("Should only compare child_ events.");var n=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return this.index_.compare(n,i)},r}();/**
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
 */var Ci=function(){function r(e,t){this.query_=e,this.eventRegistrations_=[];var n=this.query_.getQueryParams(),i=new St(n.getIndex()),o=n.getNodeFilter();this.processor_=new mi(o);var s=t.getServerCache(),a=t.getEventCache(),l=i.updateFullNode(m.EMPTY_NODE,s.getNode(),null),u=o.updateFullNode(m.EMPTY_NODE,a.getNode(),null),h=new $(l,s.isFullyInitialized(),i.filtersNodes()),c=new $(u,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=new br(c,h),this.eventGenerator_=new Ei(this.query_)}return r.prototype.getQuery=function(){return this.query_},r.prototype.getServerCache=function(){return this.viewCache_.getServerCache().getNode()},r.prototype.getCompleteServerCache=function(e){var t=this.viewCache_.getCompleteServerSnap();return t&&(this.query_.getQueryParams().loadsAllData()||!e.isEmpty()&&!t.getImmediateChild(e.getFront()).isEmpty())?t.getChild(e):null},r.prototype.isEmpty=function(){return this.eventRegistrations_.length===0},r.prototype.addEventRegistration=function(e){this.eventRegistrations_.push(e)},r.prototype.removeEventRegistration=function(e,t){var n=[];if(t){d(e==null,"A cancel should cancel all event registrations.");var i=this.query_.path;this.eventRegistrations_.forEach(function(l){t=t;var u=l.createCancelEvent(t,i);u&&n.push(u)})}if(e){for(var o=[],s=0;s<this.eventRegistrations_.length;++s){var a=this.eventRegistrations_[s];if(!a.matches(e))o.push(a);else if(e.hasAnyCallback()){o=o.concat(this.eventRegistrations_.slice(s+1));break}}this.eventRegistrations_=o}else this.eventRegistrations_=[];return n},r.prototype.applyOperation=function(e,t,n){e.type===G.MERGE&&e.source.queryId!==null&&(d(this.viewCache_.getCompleteServerSnap(),"We should always have a full cache before handling merges"),d(this.viewCache_.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"));var i=this.viewCache_,o=this.processor_.applyOperation(i,e,t,n);return this.processor_.assertIndexed(o.viewCache),d(o.viewCache.getServerCache().isFullyInitialized()||!i.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.viewCache_=o.viewCache,this.generateEventsForChanges_(o.changes,o.viewCache.getEventCache().getNode(),null)},r.prototype.getInitialEvents=function(e){var t=this.viewCache_.getEventCache(),n=[];if(!t.getNode().isLeafNode()){var i=t.getNode();i.forEachChild(I,function(o,s){n.push(S.childAddedChange(o,s))})}return t.isFullyInitialized()&&n.push(S.valueChange(t.getNode())),this.generateEventsForChanges_(n,t.getNode(),e)},r.prototype.generateEventsForChanges_=function(e,t,n){var i=n?[n]:this.eventRegistrations_;return this.eventGenerator_.generateEventsForChanges(e,t,i)},r}();/**
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
 */var xe,Nr=function(){function r(){this.views=new Map}return Object.defineProperty(r,"__referenceConstructor",{get:function(){return d(xe,"Reference.ts has not been loaded"),xe},set:function(e){d(!xe,"__referenceConstructor has already been defined"),xe=e},enumerable:!1,configurable:!0}),r.prototype.isEmpty=function(){return this.views.size===0},r.prototype.applyOperation=function(e,t,n){var i,o,s=e.source.queryId;if(s!==null){var a=this.views.get(s);return d(a!=null,"SyncTree gave us an op for an invalid query."),a.applyOperation(e,t,n)}else{var l=[];try{for(var u=U(this.views.values()),h=u.next();!h.done;h=u.next()){var a=h.value;l=l.concat(a.applyOperation(e,t,n))}}catch(c){i={error:c}}finally{try{h&&!h.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}return l}},r.prototype.addEventRegistration=function(e,t,n,i,o){var s=e.queryIdentifier(),a=this.views.get(s);if(!a){var l=n.calcCompleteEventCache(o?i:null),u=!1;l?u=!0:i instanceof m?(l=n.calcCompleteEventChildren(i),u=!1):(l=m.EMPTY_NODE,u=!1);var h=new br(new $(l,u,!1),new $(i,o,!1));a=new Ci(e,h),this.views.set(s,a)}return a.addEventRegistration(t),a.getInitialEvents(t)},r.prototype.removeEventRegistration=function(e,t,n){var i,o,s=e.queryIdentifier(),a=[],l=[],u=this.hasCompleteView();if(s==="default")try{for(var h=U(this.views.entries()),c=h.next();!c.done;c=h.next()){var f=ot(c.value,2),p=f[0],v=f[1];l=l.concat(v.removeEventRegistration(t,n)),v.isEmpty()&&(this.views.delete(p),v.getQuery().getQueryParams().loadsAllData()||a.push(v.getQuery()))}}catch(_){i={error:_}}finally{try{c&&!c.done&&(o=h.return)&&o.call(h)}finally{if(i)throw i.error}}else{var v=this.views.get(s);v&&(l=l.concat(v.removeEventRegistration(t,n)),v.isEmpty()&&(this.views.delete(s),v.getQuery().getQueryParams().loadsAllData()||a.push(v.getQuery())))}return u&&!this.hasCompleteView()&&a.push(new r.__referenceConstructor(e.repo,e.path)),{removed:a,events:l}},r.prototype.getQueryViews=function(){var e,t,n=[];try{for(var i=U(this.views.values()),o=i.next();!o.done;o=i.next()){var s=o.value;s.getQuery().getQueryParams().loadsAllData()||n.push(s)}}catch(a){e={error:a}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return n},r.prototype.getCompleteServerCache=function(e){var t,n,i=null;try{for(var o=U(this.views.values()),s=o.next();!s.done;s=o.next()){var a=s.value;i=i||a.getCompleteServerCache(e)}}catch(l){t={error:l}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i},r.prototype.viewForQuery=function(e){var t=e.getQueryParams();if(t.loadsAllData())return this.getCompleteView();var n=e.queryIdentifier();return this.views.get(n)},r.prototype.viewExistsForQuery=function(e){return this.viewForQuery(e)!=null},r.prototype.hasCompleteView=function(){return this.getCompleteView()!=null},r.prototype.getCompleteView=function(){var e,t;try{for(var n=U(this.views.values()),i=n.next();!i.done;i=n.next()){var o=i.value;if(o.getQuery().getQueryParams().loadsAllData())return o}}catch(s){e={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return null},r}();/**
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
 */var Ut=function(){function r(e){this.writeTree_=e}return r.prototype.addWrite=function(e,t){if(e.isEmpty())return new r(new Q(t));var n=this.writeTree_.findRootMostValueAndPath(e);if(n!=null){var i=n.path,o=n.value,s=y.relativePath(i,e);return o=o.updateChild(s,t),new r(this.writeTree_.set(i,o))}else{var a=new Q(t),l=this.writeTree_.setTree(e,a);return new r(l)}},r.prototype.addWrites=function(e,t){var n=this;return O(t,function(i,o){n=n.addWrite(e.child(i),o)}),n},r.prototype.removeWrite=function(e){if(e.isEmpty())return r.Empty;var t=this.writeTree_.setTree(e,Q.Empty);return new r(t)},r.prototype.hasCompleteWrite=function(e){return this.getCompleteNode(e)!=null},r.prototype.getCompleteNode=function(e){var t=this.writeTree_.findRootMostValueAndPath(e);return t!=null?this.writeTree_.get(t.path).getChild(y.relativePath(t.path,e)):null},r.prototype.getCompleteChildren=function(){var e=[],t=this.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(I,function(n,i){e.push(new T(n,i))}):this.writeTree_.children.inorderTraversal(function(n,i){i.value!=null&&e.push(new T(n,i.value))}),e},r.prototype.childCompoundWrite=function(e){if(e.isEmpty())return this;var t=this.getCompleteNode(e);return t!=null?new r(new Q(t)):new r(this.writeTree_.subtree(e))},r.prototype.isEmpty=function(){return this.writeTree_.isEmpty()},r.prototype.apply=function(e){return Pr(y.Empty,this.writeTree_,e)},r.Empty=new r(new Q(null)),r}();function Pr(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);var n=null;return e.children.inorderTraversal(function(i,o){i===".priority"?(d(o.value!==null,"Priority writes must always be leaf nodes"),n=o.value):t=Pr(r.child(i),o,t)}),!t.getChild(r).isEmpty()&&n!==null&&(t=t.updateChild(r.child(".priority"),n)),t}/**
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
 */var Si=function(){function r(){this.visibleWrites_=Ut.Empty,this.allWrites_=[],this.lastWriteId_=-1}return r.prototype.childWrites=function(e){return new Ti(e,this)},r.prototype.addOverwrite=function(e,t,n,i){d(n>this.lastWriteId_,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),this.allWrites_.push({path:e,snap:t,writeId:n,visible:i}),i&&(this.visibleWrites_=this.visibleWrites_.addWrite(e,t)),this.lastWriteId_=n},r.prototype.addMerge=function(e,t,n){d(n>this.lastWriteId_,"Stacking an older merge on top of newer ones"),this.allWrites_.push({path:e,children:t,writeId:n,visible:!0}),this.visibleWrites_=this.visibleWrites_.addWrites(e,t),this.lastWriteId_=n},r.prototype.getWrite=function(e){for(var t=0;t<this.allWrites_.length;t++){var n=this.allWrites_[t];if(n.writeId===e)return n}return null},r.prototype.removeWrite=function(e){var t=this,n=this.allWrites_.findIndex(function(h){return h.writeId===e});d(n>=0,"removeWrite called with nonexistent writeId.");var i=this.allWrites_[n];this.allWrites_.splice(n,1);for(var o=i.visible,s=!1,a=this.allWrites_.length-1;o&&a>=0;){var l=this.allWrites_[a];l.visible&&(a>=n&&this.recordContainsPath_(l,i.path)?o=!1:i.path.contains(l.path)&&(s=!0)),a--}if(o){if(s)return this.resetTree_(),!0;if(i.snap)this.visibleWrites_=this.visibleWrites_.removeWrite(i.path);else{var u=i.children;O(u,function(h){t.visibleWrites_=t.visibleWrites_.removeWrite(i.path.child(h))})}return!0}else return!1},r.prototype.getCompleteWriteData=function(e){return this.visibleWrites_.getCompleteNode(e)},r.prototype.calcCompleteEventCache=function(e,t,n,i){if(!n&&!i){var o=this.visibleWrites_.getCompleteNode(e);if(o!=null)return o;var s=this.visibleWrites_.childCompoundWrite(e);if(s.isEmpty())return t;if(t==null&&!s.hasCompleteWrite(y.Empty))return null;var a=t||m.EMPTY_NODE;return s.apply(a)}else{var l=this.visibleWrites_.childCompoundWrite(e);if(!i&&l.isEmpty())return t;if(!i&&t==null&&!l.hasCompleteWrite(y.Empty))return null;var u=function(f){return(f.visible||i)&&(!n||!~n.indexOf(f.writeId))&&(f.path.contains(e)||e.contains(f.path))},h=r.layerTree_(this.allWrites_,u,e),a=t||m.EMPTY_NODE;return h.apply(a)}},r.prototype.calcCompleteEventChildren=function(e,t){var n=m.EMPTY_NODE,i=this.visibleWrites_.getCompleteNode(e);if(i)return i.isLeafNode()||i.forEachChild(I,function(a,l){n=n.updateImmediateChild(a,l)}),n;if(t){var o=this.visibleWrites_.childCompoundWrite(e);return t.forEachChild(I,function(a,l){var u=o.childCompoundWrite(new y(a)).apply(l);n=n.updateImmediateChild(a,u)}),o.getCompleteChildren().forEach(function(a){n=n.updateImmediateChild(a.name,a.node)}),n}else{var s=this.visibleWrites_.childCompoundWrite(e);return s.getCompleteChildren().forEach(function(a){n=n.updateImmediateChild(a.name,a.node)}),n}},r.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n,i){d(n||i,"Either existingEventSnap or existingServerSnap must exist");var o=e.child(t);if(this.visibleWrites_.hasCompleteWrite(o))return null;var s=this.visibleWrites_.childCompoundWrite(o);return s.isEmpty()?i.getChild(t):s.apply(i.getChild(t))},r.prototype.calcCompleteChild=function(e,t,n){var i=e.child(t),o=this.visibleWrites_.getCompleteNode(i);if(o!=null)return o;if(n.isCompleteForChild(t)){var s=this.visibleWrites_.childCompoundWrite(i);return s.apply(n.getNode().getImmediateChild(t))}else return null},r.prototype.shadowingWrite=function(e){return this.visibleWrites_.getCompleteNode(e)},r.prototype.calcIndexedSlice=function(e,t,n,i,o,s){var a,l=this.visibleWrites_.childCompoundWrite(e),u=l.getCompleteNode(y.Empty);if(u!=null)a=u;else if(t!=null)a=l.apply(t);else return[];if(a=a.withIndex(s),!a.isEmpty()&&!a.isLeafNode()){for(var h=[],c=s.getCompare(),f=o?a.getReverseIteratorFrom(n,s):a.getIteratorFrom(n,s),p=f.getNext();p&&h.length<i;)c(p,n)!==0&&h.push(p),p=f.getNext();return h}else return[]},r.prototype.recordContainsPath_=function(e,t){if(e.snap)return e.path.contains(t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&e.path.child(n).contains(t))return!0;return!1},r.prototype.resetTree_=function(){this.visibleWrites_=r.layerTree_(this.allWrites_,r.DefaultFilter_,y.Empty),this.allWrites_.length>0?this.lastWriteId_=this.allWrites_[this.allWrites_.length-1].writeId:this.lastWriteId_=-1},r.DefaultFilter_=function(e){return e.visible},r.layerTree_=function(e,t,n){for(var i=Ut.Empty,o=0;o<e.length;++o){var s=e[o];if(t(s)){var a=s.path,l=void 0;if(s.snap)n.contains(a)?(l=y.relativePath(n,a),i=i.addWrite(l,s.snap)):a.contains(n)&&(l=y.relativePath(a,n),i=i.addWrite(y.Empty,s.snap.getChild(l)));else if(s.children){if(n.contains(a))l=y.relativePath(n,a),i=i.addWrites(l,s.children);else if(a.contains(n))if(l=y.relativePath(a,n),l.isEmpty())i=i.addWrites(y.Empty,s.children);else{var u=q(s.children,l.getFront());if(u){var h=u.getChild(l.popFront());i=i.addWrite(y.Empty,h)}}}else throw Ne("WriteRecord should have .snap or .children")}}return i},r}(),Ti=function(){function r(e,t){this.treePath_=e,this.writeTree_=t}return r.prototype.calcCompleteEventCache=function(e,t,n){return this.writeTree_.calcCompleteEventCache(this.treePath_,e,t,n)},r.prototype.calcCompleteEventChildren=function(e){return this.writeTree_.calcCompleteEventChildren(this.treePath_,e)},r.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n){return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_,e,t,n)},r.prototype.shadowingWrite=function(e){return this.writeTree_.shadowingWrite(this.treePath_.child(e))},r.prototype.calcIndexedSlice=function(e,t,n,i,o){return this.writeTree_.calcIndexedSlice(this.treePath_,e,t,n,i,o)},r.prototype.calcCompleteChild=function(e,t){return this.writeTree_.calcCompleteChild(this.treePath_,e,t)},r.prototype.child=function(e){return new r(this.treePath_.child(e),this.writeTree_)},r}();/**
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
 */var Qt=function(){function r(e){this.listenProvider_=e,this.syncPointTree_=Q.Empty,this.pendingWriteTree_=new Si,this.tagToQueryMap=new Map,this.queryToTagMap=new Map}return r.prototype.applyUserOverwrite=function(e,t,n,i){return this.pendingWriteTree_.addOverwrite(e,t,n,i),i?this.applyOperationToSyncPoints_(new Me(K.User,e,t)):[]},r.prototype.applyUserMerge=function(e,t,n){this.pendingWriteTree_.addMerge(e,t,n);var i=Q.fromObject(t);return this.applyOperationToSyncPoints_(new et(K.User,e,i))},r.prototype.ackUserWrite=function(e,t){t===void 0&&(t=!1);var n=this.pendingWriteTree_.getWrite(e),i=this.pendingWriteTree_.removeWrite(e);if(i){var o=Q.Empty;return n.snap!=null?o=o.set(y.Empty,!0):O(n.children,function(s,a){o=o.set(new y(s),a)}),this.applyOperationToSyncPoints_(new di(n.path,o,t))}else return[]},r.prototype.applyServerOverwrite=function(e,t){return this.applyOperationToSyncPoints_(new Me(K.Server,e,t))},r.prototype.applyServerMerge=function(e,t){var n=Q.fromObject(t);return this.applyOperationToSyncPoints_(new et(K.Server,e,n))},r.prototype.applyListenComplete=function(e){return this.applyOperationToSyncPoints_(new Mt(K.Server,e))},r.prototype.applyTaggedQueryOverwrite=function(e,t,n){var i=this.queryKeyForTag_(n);if(i!=null){var o=r.parseQueryKey_(i),s=o.path,a=o.queryId,l=y.relativePath(s,e),u=new Me(K.forServerTaggedQuery(a),l,t);return this.applyTaggedOperation_(s,u)}else return[]},r.prototype.applyTaggedQueryMerge=function(e,t,n){var i=this.queryKeyForTag_(n);if(i){var o=r.parseQueryKey_(i),s=o.path,a=o.queryId,l=y.relativePath(s,e),u=Q.fromObject(t),h=new et(K.forServerTaggedQuery(a),l,u);return this.applyTaggedOperation_(s,h)}else return[]},r.prototype.applyTaggedListenComplete=function(e,t){var n=this.queryKeyForTag_(t);if(n){var i=r.parseQueryKey_(n),o=i.path,s=i.queryId,a=y.relativePath(o,e),l=new Mt(K.forServerTaggedQuery(s),a);return this.applyTaggedOperation_(o,l)}else return[]},r.prototype.addEventRegistration=function(e,t){var n=e.path,i=null,o=!1;this.syncPointTree_.foreachOnPath(n,function(_,E){var C=y.relativePath(_,n);i=i||E.getCompleteServerCache(C),o=o||E.hasCompleteView()});var s=this.syncPointTree_.get(n);s?(o=o||s.hasCompleteView(),i=i||s.getCompleteServerCache(y.Empty)):(s=new Nr,this.syncPointTree_=this.syncPointTree_.set(n,s));var a;if(i!=null)a=!0;else{a=!1,i=m.EMPTY_NODE;var l=this.syncPointTree_.subtree(n);l.foreachChild(function(_,E){var C=E.getCompleteServerCache(y.Empty);C&&(i=i.updateImmediateChild(_,C))})}var u=s.viewExistsForQuery(e);if(!u&&!e.getQueryParams().loadsAllData()){var h=r.makeQueryKey_(e);d(!this.queryToTagMap.has(h),"View does not exist, but we have a tag");var c=r.getNextQueryTag_();this.queryToTagMap.set(h,c),this.tagToQueryMap.set(c,h)}var f=this.pendingWriteTree_.childWrites(n),p=s.addEventRegistration(e,t,f,i,a);if(!u&&!o){var v=s.viewForQuery(e);p=p.concat(this.setupListener_(e,v))}return p},r.prototype.removeEventRegistration=function(e,t,n){var i=this,o=e.path,s=this.syncPointTree_.get(o),a=[];if(s&&(e.queryIdentifier()==="default"||s.viewExistsForQuery(e))){var l=s.removeEventRegistration(e,t,n);s.isEmpty()&&(this.syncPointTree_=this.syncPointTree_.remove(o));var u=l.removed;a=l.events;var h=u.findIndex(function(M){return M.getQueryParams().loadsAllData()})!==-1,c=this.syncPointTree_.findOnPath(o,function(M,R){return R.hasCompleteView()});if(h&&!c){var f=this.syncPointTree_.subtree(o);if(!f.isEmpty())for(var p=this.collectDistinctViewsForSubTree_(f),v=0;v<p.length;++v){var _=p[v],E=_.getQuery(),C=this.createListenerForView_(_);this.listenProvider_.startListening(r.queryForListening_(E),this.tagForQuery_(E),C.hashFn,C.onComplete)}}if(!c&&u.length>0&&!n)if(h){var L=null;this.listenProvider_.stopListening(r.queryForListening_(e),L)}else u.forEach(function(M){var R=i.queryToTagMap.get(r.makeQueryKey_(M));i.listenProvider_.stopListening(r.queryForListening_(M),R)});this.removeTags_(u)}return a},r.prototype.calcCompleteEventCache=function(e,t){var n=!0,i=this.pendingWriteTree_,o=this.syncPointTree_.findOnPath(e,function(s,a){var l=y.relativePath(s,e),u=a.getCompleteServerCache(l);if(u)return u});return i.calcCompleteEventCache(e,o,t,n)},r.prototype.collectDistinctViewsForSubTree_=function(e){return e.fold(function(t,n,i){if(n&&n.hasCompleteView()){var o=n.getCompleteView();return[o]}else{var s=[];return n&&(s=n.getQueryViews()),O(i,function(a,l){s=s.concat(l)}),s}})},r.prototype.removeTags_=function(e){for(var t=0;t<e.length;++t){var n=e[t];if(!n.getQueryParams().loadsAllData()){var i=r.makeQueryKey_(n),o=this.queryToTagMap.get(i);this.queryToTagMap.delete(i),this.tagToQueryMap.delete(o)}}},r.queryForListening_=function(e){return e.getQueryParams().loadsAllData()&&!e.getQueryParams().isDefault()?e.getRef():e},r.prototype.setupListener_=function(e,t){var n=e.path,i=this.tagForQuery_(e),o=this.createListenerForView_(t),s=this.listenProvider_.startListening(r.queryForListening_(e),i,o.hashFn,o.onComplete),a=this.syncPointTree_.subtree(n);if(i)d(!a.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed");else for(var l=a.fold(function(c,f,p){if(!c.isEmpty()&&f&&f.hasCompleteView())return[f.getCompleteView().getQuery()];var v=[];return f&&(v=v.concat(f.getQueryViews().map(function(_){return _.getQuery()}))),O(p,function(_,E){v=v.concat(E)}),v}),u=0;u<l.length;++u){var h=l[u];this.listenProvider_.stopListening(r.queryForListening_(h),this.tagForQuery_(h))}return s},r.prototype.createListenerForView_=function(e){var t=this,n=e.getQuery(),i=this.tagForQuery_(n);return{hashFn:function(){var o=e.getServerCache()||m.EMPTY_NODE;return o.hash()},onComplete:function(o){if(o==="ok")return i?t.applyTaggedListenComplete(n.path,i):t.applyListenComplete(n.path);var s=xn(o,n);return t.removeEventRegistration(n,null,s)}}},r.makeQueryKey_=function(e){return e.path.toString()+"$"+e.queryIdentifier()},r.parseQueryKey_=function(e){var t=e.indexOf("$");return d(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new y(e.substr(0,t))}},r.prototype.queryKeyForTag_=function(e){return this.tagToQueryMap.get(e)},r.prototype.tagForQuery_=function(e){var t=r.makeQueryKey_(e);return this.queryToTagMap.get(t)},r.getNextQueryTag_=function(){return r.nextQueryTag_++},r.prototype.applyTaggedOperation_=function(e,t){var n=this.syncPointTree_.get(e);d(n,"Missing sync point for query tag that we're tracking");var i=this.pendingWriteTree_.childWrites(e);return n.applyOperation(t,i,null)},r.prototype.applyOperationToSyncPoints_=function(e){return this.applyOperationHelper_(e,this.syncPointTree_,null,this.pendingWriteTree_.childWrites(y.Empty))},r.prototype.applyOperationHelper_=function(e,t,n,i){if(e.path.isEmpty())return this.applyOperationDescendantsHelper_(e,t,n,i);var o=t.get(y.Empty);n==null&&o!=null&&(n=o.getCompleteServerCache(y.Empty));var s=[],a=e.path.getFront(),l=e.operationForChild(a),u=t.children.get(a);if(u&&l){var h=n?n.getImmediateChild(a):null,c=i.child(a);s=s.concat(this.applyOperationHelper_(l,u,h,c))}return o&&(s=s.concat(o.applyOperation(e,i,n))),s},r.prototype.applyOperationDescendantsHelper_=function(e,t,n,i){var o=this,s=t.get(y.Empty);n==null&&s!=null&&(n=s.getCompleteServerCache(y.Empty));var a=[];return t.children.inorderTraversal(function(l,u){var h=n?n.getImmediateChild(l):null,c=i.child(l),f=e.operationForChild(l);f&&(a=a.concat(o.applyOperationDescendantsHelper_(f,u,h,c)))}),s&&(a=a.concat(s.applyOperation(e,i,n))),a},r.nextQueryTag_=1,r}();/**
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
 */var Ii=function(){function r(){this.rootNode_=m.EMPTY_NODE}return r.prototype.getNode=function(e){return this.rootNode_.getChild(e)},r.prototype.updateSnapshot=function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)},r}();/**
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
 */var wi=function(){function r(){this.counters_={}}return r.prototype.incrementCounter=function(e,t){t===void 0&&(t=1),H(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t},r.prototype.get=function(){return Tn(this.counters_)},r}();/**
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
 */var Ve=function(){function r(){}return r.getCollection=function(e){var t=e.toString();return this.collections_[t]||(this.collections_[t]=new wi),this.collections_[t]},r.getOrCreateReporter=function(e,t){var n=e.toString();return this.reporters_[n]||(this.reporters_[n]=t()),this.reporters_[n]},r.collections_={},r.reporters_={},r}();/**
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
 */var Or=function(){function r(e){this.collection_=e,this.last_=null}return r.prototype.get=function(){var e=this.collection_.get(),t=it({},e);return this.last_&&O(this.last_,function(n,i){t[n]=t[n]-i}),this.last_=e,t},r}();/**
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
 */var Vt=10*1e3,Ri=30*1e3,bi=5*60*1e3,Ni=function(){function r(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Or(e);var n=Vt+(Ri-Vt)*Math.random();Ie(this.reportStats_.bind(this),Math.floor(n))}return r.prototype.includeStat=function(e){this.statsToReport_[e]=!0},r.prototype.reportStats_=function(){var e=this,t=this.statsListener_.get(),n={},i=!1;O(t,function(o,s){s>0&&H(e.statsToReport_,o)&&(n[o]=s,i=!0)}),i&&this.server_.reportStats(n),Ie(this.reportStats_.bind(this),Math.floor(Math.random()*2*bi))},r}();/**
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
 */var Pi=function(){function r(){this.eventLists_=[],this.recursionDepth_=0}return r.prototype.queueEvents=function(e){for(var t=null,n=0;n<e.length;n++){var i=e[n],o=i.getPath();t!==null&&!o.equals(t.getPath())&&(this.eventLists_.push(t),t=null),t===null&&(t=new Oi(o)),t.add(i)}t&&this.eventLists_.push(t)},r.prototype.raiseEventsAtPath=function(e,t){this.queueEvents(t),this.raiseQueuedEventsMatchingPredicate_(function(n){return n.equals(e)})},r.prototype.raiseEventsForChangedPath=function(e,t){this.queueEvents(t),this.raiseQueuedEventsMatchingPredicate_(function(n){return n.contains(e)||e.contains(n)})},r.prototype.raiseQueuedEventsMatchingPredicate_=function(e){this.recursionDepth_++;for(var t=!0,n=0;n<this.eventLists_.length;n++){var i=this.eventLists_[n];if(i){var o=i.getPath();e(o)?(this.eventLists_[n].raise(),this.eventLists_[n]=null):t=!1}}t&&(this.eventLists_=[]),this.recursionDepth_--},r}(),Oi=function(){function r(e){this.path_=e,this.events_=[]}return r.prototype.add=function(e){this.events_.push(e)},r.prototype.raise=function(){for(var e=0;e<this.events_.length;e++){var t=this.events_[e];if(t!==null){this.events_[e]=null;var n=t.getEventRunner();ae&&F("event: "+t.toString()),_e(n)}}},r.prototype.getPath=function(){return this.path_},r}();/**
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
 */var Ar=function(){function r(e){this.allowedEvents_=e,this.listeners_={},d(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return r.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Array.isArray(this.listeners_[e]))for(var i=ve(this.listeners_[e]),o=0;o<i.length;o++)i[o].callback.apply(i[o].context,t)},r.prototype.on=function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var i=this.getInitialEvent(e);i&&t.apply(n,i)},r.prototype.off=function(e,t,n){this.validateEventType_(e);for(var i=this.listeners_[e]||[],o=0;o<i.length;o++)if(i[o].callback===t&&(!n||n===i[o].context)){i.splice(o,1);return}},r.prototype.validateEventType_=function(e){d(this.allowedEvents_.find(function(t){return t===e}),"Unknown event: "+e)},r}();/**
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
 */var Ai=function(r){z(e,r);function e(){var t=r.call(this,["visible"])||this,n,i;return typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(i="visibilitychange",n="hidden"):typeof document.mozHidden!="undefined"?(i="mozvisibilitychange",n="mozHidden"):typeof document.msHidden!="undefined"?(i="msvisibilitychange",n="msHidden"):typeof document.webkitHidden!="undefined"&&(i="webkitvisibilitychange",n="webkitHidden")),t.visible_=!0,i&&document.addEventListener(i,function(){var o=!document[n];o!==t.visible_&&(t.visible_=o,t.trigger("visible",o))},!1),t}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return d(t==="visible","Unknown event type: "+t),[this.visible_]},e}(Ar);/**
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
 */var Ht=function(r){z(e,r);function e(){var t=r.call(this,["online"])||this;return t.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!er()&&(window.addEventListener("online",function(){t.online_||(t.online_=!0,t.trigger("online",!0))},!1),window.addEventListener("offline",function(){t.online_&&(t.online_=!1,t.trigger("online",!1))},!1)),t}return e.getInstance=function(){return new e},e.prototype.getInitialEvent=function(t){return d(t==="online","Unknown event type: "+t),[this.online_]},e.prototype.currentlyOnline=function(){return this.online_},e}(Ar);/**
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
 */var Di=function(){function r(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return r.prototype.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},r.prototype.handleResponse=function(e,t){var n=this;this.pendingResponses[e]=t;for(var i=function(){var a=o.pendingResponses[o.currentResponseNum];delete o.pendingResponses[o.currentResponseNum];for(var l=function(h){a[h]&&_e(function(){n.onMessage_(a[h])})},u=0;u<a.length;++u)l(u);if(o.currentResponseNum===o.closeAfterResponse)return o.onClose&&(o.onClose(),o.onClose=null),"break";o.currentResponseNum++},o=this;this.pendingResponses[this.currentResponseNum];){var s=i();if(s==="break")break}},r}();/**
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
 */var Bt="start",Li="close",Fi="pLPCommand",xi="pRTLPCB",Dr="id",Lr="pw",Fr="ser",ki="cb",Mi="seg",Wi="ts",Ui="d",Qi="dframe",xr=1870,kr=30,Vi=xr-kr,Hi=25e3,Bi=3e4,Tt=function(){function r(e,t,n,i,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oe(e),this.stats_=Ve.getCollection(t),this.urlFn=function(s){return t.connectionURL(_r,s)}}return r.prototype.open=function(e,t){var n=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Di(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null},Math.floor(Bi)),An(function(){if(!n.isClosed_){n.scriptTagHolder=new qi(function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=ot(s,5),u=l[0],h=l[1],c=l[2];if(l[3],l[4],n.incrementIncomingBytes_(s),!!n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,u===Bt)n.id=h,n.password=c;else if(u===Li)h?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(h,function(){n.onClosed_()})):n.onClosed_();else throw new Error("Unrecognized command received: "+u)},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];var l=ot(s,2),u=l[0],h=l[1];n.incrementIncomingBytes_(s),n.myPacketOrderer.handleResponse(u,h)},function(){n.onClosed_()},n.urlFn);var i={};i[Bt]="t",i[Fr]=Math.floor(Math.random()*1e8),n.scriptTagHolder.uniqueCallbackIdentifier&&(i[ki]=n.scriptTagHolder.uniqueCallbackIdentifier),i[ur]=_t,n.transportSessionId&&(i[hr]=n.transportSessionId),n.lastSessionId&&(i[dr]=n.lastSessionId),n.applicationId&&(i[Un]=n.applicationId),typeof location!="undefined"&&location.href&&location.href.indexOf(pr)!==-1&&(i[cr]=fr);var o=n.urlFn(i);n.log_("Connecting via long-poll to "+o),n.scriptTagHolder.addTag(o,function(){})}})},r.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},r.forceAllow=function(){r.forceAllow_=!0},r.forceDisallow=function(){r.forceDisallow_=!0},r.isAvailable=function(){return r.forceAllow_?!0:!r.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Ln()&&!Fn()},r.prototype.markConnectionHealthy=function(){},r.prototype.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},r.prototype.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},r.prototype.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},r.prototype.send=function(e){var t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=_n(t),i=ar(n,Vi),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},r.prototype.addDisconnectPingFrame=function(e,t){this.myDisconnFrame=document.createElement("iframe");var n={};n[Qi]="t",n[Dr]=e,n[Lr]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},r.prototype.incrementIncomingBytes_=function(e){var t=P(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)},r}(),qi=function(){function r(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ir(),window[Fi+this.uniqueCallbackIdentifier]=e,window[xi+this.uniqueCallbackIdentifier]=t,this.myIFrame=r.createIFrame_();var o="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){var s=document.domain;o='<script>document.domain="'+s+'";<\/script>'}var a="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){F("frame writing exception"),l.stack&&F(l.stack),F(l)}}}return r.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{var t=e.contentWindow.document;t||F("No IE domain setting required")}catch{var n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},r.prototype.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){e.myIFrame!==null&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)},Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())},r.prototype.startLongPoll=function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););},r.prototype.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[Dr]=this.myID,e[Lr]=this.myPW,e[Fr]=this.currentSerial;for(var t=this.urlFn(e),n="",i=0;this.pendingSegs.length>0;){var o=this.pendingSegs[0];if(o.d.length+kr+n.length<=xr){var s=this.pendingSegs.shift();n=n+"&"+Mi+i+"="+s.seg+"&"+Wi+i+"="+s.ts+"&"+Ui+i+"="+s.d,i++}else break}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1},r.prototype.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()},r.prototype.addLongPollTag_=function(e,t){var n=this;this.outstandingRequests.add(t);var i=function(){n.outstandingRequests.delete(t),n.newRequest_()},o=setTimeout(i,Math.floor(Hi)),s=function(){clearTimeout(o),i()};this.addTag(e,s)},r.prototype.addTag=function(e,t){var n=this;setTimeout(function(){try{if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){F("Long-poll script failed to load: "+e),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))},r}();/**
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
 */var Mr="";function Wr(r){Mr=r}/**
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
 */var Gi=16384,Yi=45e3,He=null;typeof MozWebSocket!="undefined"?He=MozWebSocket:typeof WebSocket!="undefined"&&(He=WebSocket);var oe=function(){function r(e,t,n,i,o){this.connId=e,this.applicationId=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oe(this.connId),this.stats_=Ve.getCollection(t),this.connURL=r.connectionURL_(t,i,o),this.nodeAdmin=t.nodeAdmin}return r.connectionURL_=function(e,t,n){var i={};return i[ur]=_t,typeof location!="undefined"&&location.href&&location.href.indexOf(pr)!==-1&&(i[cr]=fr),t&&(i[hr]=t),n&&(i[dr]=n),e.connectionURL(vr,i)},r.prototype.open=function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,se.set("previous_websocket_failure",!0);try{var i,o,s,a;if(!tr()){var o={headers:{"X-Firebase-GMPID":this.applicationId||""}};this.mySock=new He(this.connURL,[],o)}}catch(u){this.log_("Error instantiating WebSocket.");var l=u.message||u.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(u){n.handleIncomingFrame(u)},this.mySock.onerror=function(u){n.log_("WebSocket error.  Closing connection.");var h=u.message||u.data;h&&n.log_(h),n.onClosed_()}},r.prototype.start=function(){},r.forceDisallow=function(){r.forceDisallow_=!0},r.isAvailable=function(){var e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){var t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&He!==null&&!r.forceDisallow_},r.previouslyFailed=function(){return se.isInMemoryStorage||se.get("previous_websocket_failure")===!0},r.prototype.markConnectionHealthy=function(){se.remove("previous_websocket_failure")},r.prototype.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=dt(t);this.onMessage(n)}},r.prototype.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},r.prototype.extractFrameCount_=function(e){if(d(this.frames===null,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e},r.prototype.handleIncomingFrame=function(e){if(this.mySock!==null){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}},r.prototype.send=function(e){this.resetKeepAlive();var t=P(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=ar(t,Gi);n.length>1&&this.sendString_(String(n.length));for(var i=0;i<n.length;i++)this.sendString_(n[i])},r.prototype.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},r.prototype.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},r.prototype.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},r.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()},Math.floor(Yi))},r.prototype.sendString_=function(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},r.responsesRequiredToBeHealthy=2,r.healthyTimeout=3e4,r}();/**
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
 */var ji=function(){function r(e){this.initTransports_(e)}return Object.defineProperty(r,"ALL_TRANSPORTS",{get:function(){return[Tt,oe]},enumerable:!1,configurable:!0}),r.prototype.initTransports_=function(e){var t,n,i=oe&&oe.isAvailable(),o=i&&!oe.previouslyFailed();if(e.webSocketOnly&&(i||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),o=!0),o)this.transports_=[oe];else{var s=this.transports_=[];try{for(var a=U(r.ALL_TRANSPORTS),l=a.next();!l.done;l=a.next()){var u=l.value;u&&u.isAvailable()&&s.push(u)}}catch(h){t={error:h}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}}},r.prototype.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},r.prototype.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},r}();/**
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
 */var zi=6e4,Ki=5e3,Xi=10*1024,$i=100*1024,rt="t",qt="d",Ji="s",Gt="r",Zi="e",Yt="o",jt="a",zt="n",Kt="p",eo="h",Ur=function(){function r(e,t,n,i,o,s,a,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=s,this.onKill_=a,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oe("c:"+this.id+":"),this.transportManager_=new ji(t),this.log_("Connection created"),this.start_()}return r.prototype.start_=function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,void 0,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(function(){e.conn_&&e.conn_.open(n,i)},Math.floor(0));var o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Ie(function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>$i?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>Xi?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))},Math.floor(o)))},r.prototype.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},r.prototype.disconnReceiver_=function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}},r.prototype.connReceiver_=function(e){var t=this;return function(n){t.state_!==2&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}},r.prototype.sendRequest=function(e){var t={t:"d",d:e};this.sendData_(t)},r.prototype.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},r.prototype.onSecondaryControl_=function(e){if(rt in e){var t=e[rt];t===jt?this.upgradeIfSecondaryHealthy_():t===Gt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},r.prototype.onSecondaryMessageReceived_=function(e){var t=Ce("t",e),n=Ce("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)},r.prototype.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Kt,d:{}}}))},r.prototype.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},r.prototype.onPrimaryMessageReceived_=function(e){var t=Ce("t",e),n=Ce("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)},r.prototype.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},r.prototype.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},r.prototype.onControl_=function(e){var t=Ce(rt,e);if(qt in e){var n=e[qt];if(t===eo)this.onHandshake_(n);else if(t===zt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ji?this.onConnectionShutdown_(n):t===Gt?this.onReset_(n):t===Zi?lt("Server Error: "+n):t===Yt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lt("Unknown control packet command: "+t)}},r.prototype.onHandshake_=function(e){var t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.updateHost(i),this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),_t!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())},r.prototype.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},r.prototype.startUpgrade_=function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ie(function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())},Math.floor(zi))},r.prototype.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.updateHost(e),this.state_===1?this.close():(this.closeConnections_(),this.start_())},r.prototype.onConnectionEstablished_=function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ie(function(){n.sendPingOnPrimaryIfNecessary_()},Math.floor(Ki))},r.prototype.sendPingOnPrimaryIfNecessary_=function(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Kt,d:{}}}))},r.prototype.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()},r.prototype.onConnectionLost_=function(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(se.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()},r.prototype.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},r.prototype.sendData_=function(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)},r.prototype.close=function(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},r.prototype.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},r}();/**
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
 */var Qr=function(){function r(){}return r.prototype.put=function(e,t,n,i){},r.prototype.merge=function(e,t,n,i){},r.prototype.refreshAuthToken=function(e){},r.prototype.onDisconnectPut=function(e,t,n){},r.prototype.onDisconnectMerge=function(e,t,n){},r.prototype.onDisconnectCancel=function(e,t){},r.prototype.reportStats=function(e){},r}();/**
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
 */var Te=1e3,to=60*5*1e3,ro=3*1e3,Xt=30*1e3,no=1.3,io=3e4,oo="server_kill",so=3,le=function(r){z(e,r);function e(t,n,i,o,s,a,l){var u=r.call(this)||this;if(u.repoInfo_=t,u.applicationId_=n,u.onDataUpdate_=i,u.onConnectStatus_=o,u.onServerInfoUpdate_=s,u.authTokenProvider_=a,u.authOverride_=l,u.id=e.nextPersistentConnectionId_++,u.log_=Oe("p:"+u.id+":"),u.interruptReasons_={},u.listens=new Map,u.outstandingPuts_=[],u.outstandingGets_=[],u.outstandingPutCount_=0,u.outstandingGetCount_=0,u.onDisconnectRequestQueue_=[],u.connected_=!1,u.reconnectDelay_=Te,u.maxReconnectDelay_=to,u.securityDebugCallback_=null,u.lastSessionId=null,u.establishConnectionTimer_=null,u.visible_=!1,u.requestCBHash_={},u.requestNumber_=0,u.realtime_=null,u.authToken_=null,u.forceTokenRefresh_=!1,u.invalidAuthTokenCount_=0,u.firstConnection_=!0,u.lastConnectionAttemptTime_=null,u.lastConnectionEstablishedTime_=null,l&&!tr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return u.scheduleConnect_(0),Ai.getInstance().on("visible",u.onVisible_,u),t.host.indexOf("fblocal")===-1&&Ht.getInstance().on("online",u.onOnline_,u),u}return e.prototype.sendRequest=function(t,n,i){var o=++this.requestNumber_,s={r:o,a:t,b:n};this.log_(P(s)),d(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[o]=i)},e.prototype.get=function(t){var n=this,i=new W,o={p:t.path.toString(),q:t.queryObject()},s={action:"g",request:o,onComplete:function(l){var u=l.d;l.s==="ok"?(n.onDataUpdate_(o.p,u,!1,null),i.resolve(u)):i.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout(function(){var l=n.outstandingGets_[a];l===void 0||s!==l||(delete n.outstandingGets_[a],n.outstandingGetCount_--,n.outstandingGetCount_===0&&(n.outstandingGets_=[]),n.log_("get "+a+" timed out on connection"),i.reject(new Error("Client is offline.")))},ro),this.connected_&&this.sendGet_(a),i.promise},e.prototype.listen=function(t,n,i,o){var s=t.queryIdentifier(),a=t.path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),d(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),d(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");var l={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)},e.prototype.sendGet_=function(t){var n=this,i=this.outstandingGets_[t];this.sendRequest("g",i.request,function(o){delete n.outstandingGets_[t],n.outstandingGetCount_--,n.outstandingGetCount_===0&&(n.outstandingGets_=[]),i.onComplete&&i.onComplete(o)})},e.prototype.sendListen_=function(t){var n=this,i=t.query,o=i.path.toString(),s=i.queryIdentifier();this.log_("Listen on "+o+" for "+s);var a={p:o},l="q";t.tag&&(a.q=i.queryObject(),a.t=t.tag),a.h=t.hashFn(),this.sendRequest(l,a,function(u){var h=u.d,c=u.s;e.warnOnListenWarnings_(h,i);var f=n.listens.get(o)&&n.listens.get(o).get(s);f===t&&(n.log_("listen response",u),c!=="ok"&&n.removeListen_(o,s),t.onComplete&&t.onComplete(c,h))})},e.warnOnListenWarnings_=function(t,n){if(t&&typeof t=="object"&&H(t,"w")){var i=q(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){var o='".indexOn": "'+n.getQueryParams().getIndex().toString()+'"',s=n.path.toString();x("Using an unspecified index. Your data will be downloaded and "+("filtered on the client. Consider adding "+o+" at ")+(s+" to your security rules for better performance."))}}},e.prototype.refreshAuthToken=function(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},function(){}),this.reduceReconnectDelayIfAdminCredential_(t)},e.prototype.reduceReconnectDelayIfAdminCredential_=function(t){var n=t&&t.length===40;(n||un(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xt)},e.prototype.tryAuth=function(){var t=this;if(this.connected_&&this.authToken_){var n=this.authToken_,i=hn(n)?"auth":"gauth",o={cred:n};this.authOverride_===null?o.noauth=!0:typeof this.authOverride_=="object"&&(o.authvar=this.authOverride_),this.sendRequest(i,o,function(s){var a=s.s,l=s.d||"error";t.authToken_===n&&(a==="ok"?t.invalidAuthTokenCount_=0:t.onAuthRevoked_(a,l))})}},e.prototype.unlisten=function(t,n){var i=t.path.toString(),o=t.queryIdentifier();this.log_("Unlisten called for "+i+" "+o),d(t.getQueryParams().isDefault()||!t.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query");var s=this.removeListen_(i,o);s&&this.connected_&&this.sendUnlisten_(i,o,t.queryObject(),n)},e.prototype.sendUnlisten_=function(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);var s={p:t},a="n";o&&(s.q=i,s.t=o),this.sendRequest(a,s)},e.prototype.onDisconnectPut=function(t,n,i){this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})},e.prototype.onDisconnectMerge=function(t,n,i){this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})},e.prototype.onDisconnectCancel=function(t,n){this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})},e.prototype.sendOnDisconnect_=function(t,n,i,o){var s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,function(a){o&&setTimeout(function(){o(a.s,a.d)},Math.floor(0))})},e.prototype.put=function(t,n,i,o){this.putInternal("p",t,n,i,o)},e.prototype.merge=function(t,n,i,o){this.putInternal("m",t,n,i,o)},e.prototype.putInternal=function(t,n,i,o,s){var a={p:n,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:t,request:a,onComplete:o}),this.outstandingPutCount_++;var l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)},e.prototype.sendPut_=function(t){var n=this,i=this.outstandingPuts_[t].action,o=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,o,function(a){n.log_(i+" response",a),delete n.outstandingPuts_[t],n.outstandingPutCount_--,n.outstandingPutCount_===0&&(n.outstandingPuts_=[]),s&&s(a.s,a.d)})},e.prototype.reportStats=function(t){var n=this;if(this.connected_){var i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,function(o){var s=o.s;if(s!=="ok"){var a=o.d;n.log_("reportStats","Error sending stats: "+a)}})}},e.prototype.onDataMessage_=function(t){if("r"in t){this.log_("from server: "+P(t));var n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}},e.prototype.onDataPush_=function(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):lt("Unrecognized action received from server: "+P(t)+`
Are you using the latest client?`)},e.prototype.onReady_=function(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},e.prototype.scheduleConnect_=function(t){var n=this;d(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(function(){n.establishConnectionTimer_=null,n.establishConnection_()},Math.floor(t))},e.prototype.onVisible_=function(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Te,this.realtime_||this.scheduleConnect_(0)),this.visible_=t},e.prototype.onOnline_=function(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Te,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},e.prototype.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(!this.visible_)this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();else if(this.lastConnectionEstablishedTime_){var t=new Date().getTime()-this.lastConnectionEstablishedTime_;t>io&&(this.reconnectDelay_=Te),this.lastConnectionEstablishedTime_=null}var n=new Date().getTime()-this.lastConnectionAttemptTime_,i=Math.max(0,this.reconnectDelay_-n);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*no)}this.onConnectStatus_(!1)},e.prototype.establishConnection_=function(){var t=this;if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;var n=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),o=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+e.nextConnectionId_++,a=this,l=this.lastSessionId,u=!1,h=null,c=function(){h?h.close():(u=!0,o())},f=function(v){d(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:c,sendRequest:f};var p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1,this.authTokenProvider_.getToken(p).then(function(v){u?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),a.authToken_=v&&v.accessToken,h=new Ur(s,a.repoInfo_,a.applicationId_,n,i,o,function(_){x(_+" ("+a.repoInfo_.toString()+")"),a.interrupt(oo)},l))}).then(null,function(v){a.log_("Failed to get token: "+v),u||(t.repoInfo_.nodeAdmin&&x(v),c())})}},e.prototype.interrupt=function(t){F("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},e.prototype.resume=function(t){F("Resuming connection for reason: "+t),delete this.interruptReasons_[t],st(this.interruptReasons_)&&(this.reconnectDelay_=Te,this.realtime_||this.scheduleConnect_(0))},e.prototype.handleTimestamp_=function(t){var n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})},e.prototype.cancelSentTransactions_=function(){for(var t=0;t<this.outstandingPuts_.length;t++){var n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])},e.prototype.onListenRevoked_=function(t,n){var i;n?i=n.map(function(s){return vt(s)}).join("$"):i="default";var o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")},e.prototype.removeListen_=function(t,n){var i=new y(t).toString(),o;if(this.listens.has(i)){var s=this.listens.get(i);o=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else o=void 0;return o},e.prototype.onAuthRevoked_=function(t,n){F("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=so&&(this.reconnectDelay_=Xt,this.authTokenProvider_.notifyForInvalidToken()))},e.prototype.onSecurityDebugPacket_=function(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))},e.prototype.restoreState_=function(){var t,n,i,o;this.tryAuth();try{for(var s=U(this.listens.values()),a=s.next();!a.done;a=s.next()){var l=a.value;try{for(var u=(i=void 0,U(l.values())),h=u.next();!h.done;h=u.next()){var c=h.value;this.sendListen_(c)}}catch(v){i={error:v}}finally{try{h&&!h.done&&(o=u.return)&&o.call(u)}finally{if(i)throw i.error}}}}catch(v){t={error:v}}finally{try{a&&!a.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var p=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(p.action,p.pathString,p.data,p.onComplete)}for(var f=0;f<this.outstandingGets_.length;f++)this.outstandingGets_[f]&&this.sendGet_(f)},e.prototype.sendConnectStats_=function(){var t={},n="js";t["sdk."+n+"."+Mr.replace(/\./g,"-")]=1,er()?t["framework.cordova"]=1:yn()&&(t["framework.reactnative"]=1),this.reportStats(t)},e.prototype.shouldReconnect_=function(){var t=Ht.getInstance().currentlyOnline();return st(this.interruptReasons_)&&t},e.nextPersistentConnectionId_=0,e.nextConnectionId_=0,e}(Qr);/**
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
 */var ao=function(r){z(e,r);function e(t,n,i){var o=r.call(this)||this;return o.repoInfo_=t,o.onDataUpdate_=n,o.authTokenProvider_=i,o.log_=Oe("p:rest:"),o.listens_={},o}return e.prototype.reportStats=function(t){throw new Error("Method not implemented.")},e.getListenId_=function(t,n){return n!==void 0?"tag$"+n:(d(t.getQueryParams().isDefault(),"should have a tag if it's not a default query."),t.path.toString())},e.prototype.listen=function(t,n,i,o){var s=this,a=t.path.toString();this.log_("Listen called for "+a+" "+t.queryIdentifier());var l=e.getListenId_(t,i),u={};this.listens_[l]=u;var h=t.getQueryParams().toRestQueryStringParameters();this.restRequest_(a+".json",h,function(c,f){var p=f;if(c===404&&(p=null,c=null),c===null&&s.onDataUpdate_(a,p,!1,i),q(s.listens_,l)===u){var v;c?c===401?v="permission_denied":v="rest_error:"+c:v="ok",o(v,null)}})},e.prototype.unlisten=function(t,n){var i=e.getListenId_(t,n);delete this.listens_[i]},e.prototype.get=function(t){var n=this,i=t.getQueryParams().toRestQueryStringParameters(),o=t.path.toString(),s=new W;return this.restRequest_(o+".json",i,function(a,l){var u=l;a===404&&(u=null,a=null),a===null?(n.onDataUpdate_(o,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise},e.prototype.refreshAuthToken=function(t){},e.prototype.restRequest_=function(t,n,i){var o=this;n===void 0&&(n={}),n.format="export",this.authTokenProvider_.getToken(!1).then(function(s){var a=s&&s.accessToken;a&&(n.auth=a);var l=(o.repoInfo_.secure?"https://":"http://")+o.repoInfo_.host+t+"?ns="+o.repoInfo_.namespace+cn(n);o.log_("Sending REST request for "+l);var u=new XMLHttpRequest;u.onreadystatechange=function(){if(i&&u.readyState===4){o.log_("REST Response for "+l+" received. status:",u.status,"response:",u.responseText);var h=null;if(u.status>=200&&u.status<300){try{h=dt(u.responseText)}catch{x("Failed to parse JSON response for "+l+": "+u.responseText)}i(null,h)}else u.status!==401&&u.status!==404&&x("Got unsuccessful REST response for "+l+" Status: "+u.status),i(u.status);i=null}},u.open("GET",l,!0),u.send()})},e}(Qr);/**
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
 */var $t="repo_interrupt",D=function(){function r(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.app=n,this.authTokenProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pi,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=new Je,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return r.prototype.start=function(){var e=this;if(this.stats_=Ve.getCollection(this.repoInfo_),this.forceRestClient_||Mn())this.server_=new ao(this.repoInfo_,this.onDataUpdate_.bind(this),this.authTokenProvider_),setTimeout(this.onConnectStatus_.bind(this,!0),0);else{var t=this.app.options.databaseAuthVariableOverride;if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{P(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}this.persistentConnection_=new le(this.repoInfo_,this.app.options.appId,this.onDataUpdate_.bind(this),this.onConnectStatus_.bind(this),this.onServerInfoUpdate_.bind(this),this.authTokenProvider_,t),this.server_=this.persistentConnection_}this.authTokenProvider_.addTokenChangeListener(function(n){e.server_.refreshAuthToken(n)}),this.statsReporter_=Ve.getOrCreateReporter(this.repoInfo_,function(){return new Ni(e.stats_,e.server_)}),this.transactionsInit_(),this.infoData_=new Ii,this.infoSyncTree_=new Qt({startListening:function(n,i,o,s){var a=[],l=e.infoData_.getNode(n.path);return l.isEmpty()||(a=e.infoSyncTree_.applyServerOverwrite(n.path,l),setTimeout(function(){s("ok")},0)),a},stopListening:function(){}}),this.updateInfo_("connected",!1),this.serverSyncTree_=new Qt({startListening:function(n,i,o,s){return e.server_.listen(n,o,i,function(a,l){var u=s(a,l);e.eventQueue_.raiseEventsForChangedPath(n.path,u)}),[]},stopListening:function(n,i){e.server_.unlisten(n,i)}})},r.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},r.prototype.name=function(){return this.repoInfo_.namespace},r.prototype.serverTime=function(){var e=this.infoData_.getNode(new y(".info/serverTimeOffset")),t=e.val()||0;return new Date().getTime()+t},r.prototype.generateServerValues=function(){return ci({timestamp:this.serverTime()})},r.prototype.onDataUpdate_=function(e,t,n,i){this.dataUpdateCount++;var o=new y(e);t=this.interceptServerDataCallback_?this.interceptServerDataCallback_(e,t):t;var s=[];if(i)if(n){var a=We(t,function(f){return w(f)});s=this.serverSyncTree_.applyTaggedQueryMerge(o,a,i)}else{var l=w(t);s=this.serverSyncTree_.applyTaggedQueryOverwrite(o,l,i)}else if(n){var u=We(t,function(f){return w(f)});s=this.serverSyncTree_.applyServerMerge(o,u)}else{var h=w(t);s=this.serverSyncTree_.applyServerOverwrite(o,h)}var c=o;s.length>0&&(c=this.rerunTransactions_(o)),this.eventQueue_.raiseEventsForChangedPath(c,s)},r.prototype.interceptServerData_=function(e){this.interceptServerDataCallback_=e},r.prototype.onConnectStatus_=function(e){this.updateInfo_("connected",e),e===!1&&this.runOnDisconnectEvents_()},r.prototype.onServerInfoUpdate_=function(e){var t=this;O(e,function(n,i){t.updateInfo_(n,i)})},r.prototype.updateInfo_=function(e,t){var n=new y("/.info/"+e),i=w(t);this.infoData_.updateSnapshot(n,i);var o=this.infoSyncTree_.applyServerOverwrite(n,i);this.eventQueue_.raiseEventsForChangedPath(n,o)},r.prototype.getNextWriteId_=function(){return this.nextWriteId_++},r.prototype.getValue=function(e){var t=this;return this.server_.get(e).then(function(n){var i=w(n),o=t.serverSyncTree_.applyServerOverwrite(e.path,i);return t.eventQueue_.raiseEventsAtPath(e.path,o),Promise.resolve(new ie(i,e.getRef(),e.getQueryParams().getIndex()))},function(n){t.log_("get for query "+P(e)+" falling back to cache after error: "+n);var i=t.serverSyncTree_.calcCompleteEventCache(e.path);return i.isEmpty()?Promise.reject(new Error(n)):Promise.resolve(new ie(i,e.getRef(),e.getQueryParams().getIndex()))})},r.prototype.setWithPriority=function(e,t,n,i){var o=this;this.log_("set",{path:e.toString(),value:t,priority:n});var s=this.generateServerValues(),a=w(t,n),l=this.serverSyncTree_.calcCompleteEventCache(e),u=Et(a,l,s),h=this.getNextWriteId_(),c=this.serverSyncTree_.applyUserOverwrite(e,u,h,!0);this.eventQueue_.queueEvents(c),this.server_.put(e.toString(),a.val(!0),function(p,v){var _=p==="ok";_||x("set at "+e+" failed: "+p);var E=o.serverSyncTree_.ackUserWrite(h,!_);o.eventQueue_.raiseEventsForChangedPath(e,E),o.callOnCompleteCallback(i,p,v)});var f=this.abortTransactions_(e);this.rerunTransactions_(f),this.eventQueue_.raiseEventsForChangedPath(f,[])},r.prototype.update=function(e,t,n){var i=this;this.log_("update",{path:e.toString(),value:t});var o=!0,s=this.generateServerValues(),a={};if(O(t,function(h,c){o=!1,a[h]=kt(e.child(h),w(c),i.serverSyncTree_,s)}),o)F("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok");else{var l=this.getNextWriteId_(),u=this.serverSyncTree_.applyUserMerge(e,a,l);this.eventQueue_.queueEvents(u),this.server_.merge(e.toString(),t,function(h,c){var f=h==="ok";f||x("update at "+e+" failed: "+h);var p=i.serverSyncTree_.ackUserWrite(l,!f),v=p.length>0?i.rerunTransactions_(e):e;i.eventQueue_.raiseEventsForChangedPath(v,p),i.callOnCompleteCallback(n,h,c)}),O(t,function(h){var c=i.abortTransactions_(e.child(h));i.rerunTransactions_(c)}),this.eventQueue_.raiseEventsForChangedPath(e,[])}},r.prototype.runOnDisconnectEvents_=function(){var e=this;this.log_("onDisconnectEvents");var t=this.generateServerValues(),n=new Je;this.onDisconnect_.forEachTree(y.Empty,function(o,s){var a=kt(o,s,e.serverSyncTree_,t);n.remember(o,a)});var i=[];n.forEachTree(y.Empty,function(o,s){i=i.concat(e.serverSyncTree_.applyServerOverwrite(o,s));var a=e.abortTransactions_(o);e.rerunTransactions_(a)}),this.onDisconnect_=new Je,this.eventQueue_.raiseEventsForChangedPath(y.Empty,i)},r.prototype.onDisconnectCancel=function(e,t){var n=this;this.server_.onDisconnectCancel(e.toString(),function(i,o){i==="ok"&&n.onDisconnect_.forget(e),n.callOnCompleteCallback(t,i,o)})},r.prototype.onDisconnectSet=function(e,t,n){var i=this,o=w(t);this.server_.onDisconnectPut(e.toString(),o.val(!0),function(s,a){s==="ok"&&i.onDisconnect_.remember(e,o),i.callOnCompleteCallback(n,s,a)})},r.prototype.onDisconnectSetWithPriority=function(e,t,n,i){var o=this,s=w(t,n);this.server_.onDisconnectPut(e.toString(),s.val(!0),function(a,l){a==="ok"&&o.onDisconnect_.remember(e,s),o.callOnCompleteCallback(i,a,l)})},r.prototype.onDisconnectUpdate=function(e,t,n){var i=this;if(st(t)){F("onDisconnect().update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok");return}this.server_.onDisconnectMerge(e.toString(),t,function(o,s){o==="ok"&&O(t,function(a,l){var u=w(l);i.onDisconnect_.remember(e.child(a),u)}),i.callOnCompleteCallback(n,o,s)})},r.prototype.addEventCallbackForQuery=function(e,t){var n;e.path.getFront()===".info"?n=this.infoSyncTree_.addEventRegistration(e,t):n=this.serverSyncTree_.addEventRegistration(e,t),this.eventQueue_.raiseEventsAtPath(e.path,n)},r.prototype.removeEventCallbackForQuery=function(e,t){var n;e.path.getFront()===".info"?n=this.infoSyncTree_.removeEventRegistration(e,t):n=this.serverSyncTree_.removeEventRegistration(e,t),this.eventQueue_.raiseEventsAtPath(e.path,n)},r.prototype.interrupt=function(){this.persistentConnection_&&this.persistentConnection_.interrupt($t)},r.prototype.resume=function(){this.persistentConnection_&&this.persistentConnection_.resume($t)},r.prototype.stats=function(e){if(e===void 0&&(e=!1),typeof console!="undefined"){var t;e?(this.statsListener_||(this.statsListener_=new Or(this.stats_)),t=this.statsListener_.get()):t=this.stats_.get();var n=Object.keys(t).reduce(function(i,o){return Math.max(o.length,i)},0);O(t,function(i,o){for(var s=i,a=i.length;a<n+2;a++)s+=" ";console.log(s+o)})}},r.prototype.statsIncrementCounter=function(e){this.stats_.incrementCounter(e),this.statsReporter_.includeStat(e)},r.prototype.log_=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="";this.persistentConnection_&&(n=this.persistentConnection_.id+":"),F.apply(void 0,ve([n],e))},r.prototype.callOnCompleteCallback=function(e,t,n){e&&_e(function(){if(t==="ok")e(null);else{var i=(t||"error").toUpperCase(),o=i;n&&(o+=": "+n);var s=new Error(o);s.code=i,e(s)}})},Object.defineProperty(r.prototype,"database",{get:function(){return this.__database||(this.__database=new It(this))},enumerable:!1,configurable:!0}),r}();/**
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
 */var Vr=function(){function r(e){this.indexedFilter_=new St(e.getIndex()),this.index_=e.getIndex(),this.startPost_=r.getStartPost_(e),this.endPost_=r.getEndPost_(e)}return r.prototype.getStartPost=function(){return this.startPost_},r.prototype.getEndPost=function(){return this.endPost_},r.prototype.matches=function(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0},r.prototype.updateChild=function(e,t,n,i,o,s){return this.matches(new T(t,n))||(n=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,o,s)},r.prototype.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=m.EMPTY_NODE);var i=t.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);var o=this;return t.forEachChild(I,function(s,a){o.matches(new T(s,a))||(i=i.updateImmediateChild(s,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)},r.prototype.updatePriority=function(e,t){return e},r.prototype.filtersNodes=function(){return!0},r.prototype.getIndexedFilter=function(){return this.indexedFilter_},r.prototype.getIndex=function(){return this.index_},r.getStartPost_=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()},r.getEndPost_=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()},r}();/**
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
 */var lo=function(){function r(e){this.rangedFilter_=new Vr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}return r.prototype.updateChild=function(e,t,n,i,o,s){return this.rangedFilter_.matches(new T(t,n))||(n=m.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,o,s):this.fullLimitUpdateChild_(e,t,n,o,s)},r.prototype.updateFullNode=function(e,t,n){var i;if(t.isLeafNode()||t.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);var o=void 0;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var s=0;o.hasNext()&&s<this.limit_;){var a=o.getNext(),l=void 0;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),s++;else break}}else{i=t.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);var u=void 0,h=void 0,c=void 0,o=void 0;if(this.reverse_){o=i.getReverseIterator(this.index_),u=this.rangedFilter_.getEndPost(),h=this.rangedFilter_.getStartPost();var f=this.index_.getCompare();c=function(E,C){return f(C,E)}}else o=i.getIterator(this.index_),u=this.rangedFilter_.getStartPost(),h=this.rangedFilter_.getEndPost(),c=this.index_.getCompare();for(var s=0,p=!1;o.hasNext();){var a=o.getNext();!p&&c(u,a)<=0&&(p=!0);var l=p&&s<this.limit_&&c(a,h)<=0;l?s++:i=i.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)},r.prototype.updatePriority=function(e,t){return e},r.prototype.filtersNodes=function(){return!0},r.prototype.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},r.prototype.getIndex=function(){return this.index_},r.prototype.fullLimitUpdateChild_=function(e,t,n,i,o){var s;if(this.reverse_){var a=this.index_.getCompare();s=function(L,M){return a(M,L)}}else s=this.index_.getCompare();var l=e;d(l.numChildren()===this.limit_,"");var u=new T(t,n),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(u);if(l.hasChild(t)){for(var f=l.getImmediateChild(t),p=i.getChildAfterChild(this.index_,h,this.reverse_);p!=null&&(p.name===t||l.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);var v=p==null?1:s(p,u),_=c&&!n.isEmpty()&&v>=0;if(_)return o!=null&&o.trackChildChange(S.childChangedChange(t,n,f)),l.updateImmediateChild(t,n);o!=null&&o.trackChildChange(S.childRemovedChange(t,f));var E=l.updateImmediateChild(t,m.EMPTY_NODE),C=p!=null&&this.rangedFilter_.matches(p);return C?(o!=null&&o.trackChildChange(S.childAddedChange(p.name,p.node)),E.updateImmediateChild(p.name,p.node)):E}else return n.isEmpty()?e:c&&s(h,u)>=0?(o!=null&&(o.trackChildChange(S.childRemovedChange(h.name,h.node)),o.trackChildChange(S.childAddedChange(t,n))),l.updateImmediateChild(t,n).updateImmediateChild(h.name,m.EMPTY_NODE)):e},r}();/**
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
 */var uo=function(){function r(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=I}return r.prototype.hasStart=function(){return this.startSet_},r.prototype.isViewFromLeft=function(){return this.viewFrom_===""?this.startSet_:this.viewFrom_===r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT},r.prototype.getIndexStartValue=function(){return d(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},r.prototype.getIndexStartName=function(){return d(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ue},r.prototype.hasEnd=function(){return this.endSet_},r.prototype.getIndexEndValue=function(){return d(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},r.prototype.getIndexEndName=function(){return d(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ne},r.prototype.hasLimit=function(){return this.limitSet_},r.prototype.hasAnchoredLimit=function(){return this.limitSet_&&this.viewFrom_!==""},r.prototype.getLimit=function(){return d(this.limitSet_,"Only valid if limit has been set"),this.limit_},r.prototype.getIndex=function(){return this.index_},r.prototype.copy_=function(){var e=new r;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e},r.prototype.limit=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="",t},r.prototype.limitToFirst=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,t},r.prototype.limitToLast=function(e){var t=this.copy_();return t.limitSet_=!0,t.limit_=e,t.viewFrom_=r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,t},r.prototype.startAt=function(e,t){var n=this.copy_();return n.startSet_=!0,e===void 0&&(e=null),n.indexStartValue_=e,t!=null?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n},r.prototype.endAt=function(e,t){var n=this.copy_();return n.endSet_=!0,e===void 0&&(e=null),n.indexEndValue_=e,t!==void 0?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n},r.prototype.orderBy=function(e){var t=this.copy_();return t.index_=e,t},r.prototype.getQueryObject=function(){var e=r.WIRE_PROTOCOL_CONSTANTS_,t={};if(this.startSet_&&(t[e.INDEX_START_VALUE]=this.indexStartValue_,this.startNameSet_&&(t[e.INDEX_START_NAME]=this.indexStartName_)),this.endSet_&&(t[e.INDEX_END_VALUE]=this.indexEndValue_,this.endNameSet_&&(t[e.INDEX_END_NAME]=this.indexEndName_)),this.limitSet_){t[e.LIMIT]=this.limit_;var n=this.viewFrom_;n===""&&(this.isViewFromLeft()?n=e.VIEW_FROM_LEFT:n=e.VIEW_FROM_RIGHT),t[e.VIEW_FROM]=n}return this.index_!==I&&(t[e.INDEX]=this.index_.toString()),t},r.prototype.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},r.prototype.isDefault=function(){return this.loadsAllData()&&this.index_===I},r.prototype.getNodeFilter=function(){return this.loadsAllData()?new St(this.getIndex()):this.hasLimit()?new lo(this):new Vr(this)},r.prototype.toRestQueryStringParameters=function(){var e=r.REST_QUERY_CONSTANTS_,t={};if(this.isDefault())return t;var n;return this.index_===I?n=e.PRIORITY_INDEX:this.index_===ft?n=e.VALUE_INDEX:this.index_===re?n=e.KEY_INDEX:(d(this.index_ instanceof pt,"Unrecognized index type!"),n=this.index_.toString()),t[e.ORDER_BY]=P(n),this.startSet_&&(t[e.START_AT]=P(this.indexStartValue_),this.startNameSet_&&(t[e.START_AT]+=","+P(this.indexStartName_))),this.endSet_&&(t[e.END_AT]=P(this.indexEndValue_),this.endNameSet_&&(t[e.END_AT]+=","+P(this.indexEndName_))),this.limitSet_&&(this.isViewFromLeft()?t[e.LIMIT_TO_FIRST]=this.limit_:t[e.LIMIT_TO_LAST]=this.limit_),t},r.WIRE_PROTOCOL_CONSTANTS_={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},r.REST_QUERY_CONSTANTS_={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},r.DEFAULT=new r,r}();/**
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
 */var J=function(r){z(e,r);function e(t,n){var i=this;if(!(t instanceof D))throw new Error("new Reference() no longer supported - use app.database().");return i=r.call(this,t,n,uo.DEFAULT,!1)||this,i}return e.prototype.getKey=function(){return g("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},e.prototype.child=function(t){return g("Reference.child",1,1,arguments.length),typeof t=="number"?t=String(t):t instanceof y||(this.path.getFront()===null?jn("Reference.child",1,t,!1):Re("Reference.child",1,t,!1)),new e(this.repo,this.path.child(t))},e.prototype.getParent=function(){g("Reference.parent",0,0,arguments.length);var t=this.path.parent();return t===null?null:new e(this.repo,t)},e.prototype.getRoot=function(){g("Reference.root",0,0,arguments.length);for(var t=this;t.getParent()!==null;)t=t.getParent();return t},e.prototype.databaseProp=function(){return this.repo.database},e.prototype.set=function(t,n){g("Reference.set",1,2,arguments.length),V("Reference.set",this.path),te("Reference.set",1,t,this.path,!1),A("Reference.set",2,n,!0);var i=new W;return this.repo.setWithPriority(this.path,t,null,i.wrapCallback(n)),i.promise},e.prototype.update=function(t,n){if(g("Reference.update",1,2,arguments.length),V("Reference.update",this.path),Array.isArray(t)){for(var i={},o=0;o<t.length;++o)i[""+o]=t[o];t=i,x("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}gr("Reference.update",1,t,this.path,!1),A("Reference.update",2,n,!0);var s=new W;return this.repo.update(this.path,t,s.wrapCallback(n)),s.promise},e.prototype.setWithPriority=function(t,n,i){if(g("Reference.setWithPriority",2,3,arguments.length),V("Reference.setWithPriority",this.path),te("Reference.setWithPriority",1,t,this.path,!1),ht("Reference.setWithPriority",2,n,!1),A("Reference.setWithPriority",3,i,!0),this.getKey()===".length"||this.getKey()===".keys")throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object.";var o=new W;return this.repo.setWithPriority(this.path,t,n,o.wrapCallback(i)),o.promise},e.prototype.remove=function(t){return g("Reference.remove",0,1,arguments.length),V("Reference.remove",this.path),A("Reference.remove",1,t,!0),this.set(null,t)},e.prototype.transaction=function(t,n,i){if(g("Reference.transaction",1,3,arguments.length),V("Reference.transaction",this.path),A("Reference.transaction",1,t,!1),A("Reference.transaction",2,n,!0),zn("Reference.transaction",3,i,!0),this.getKey()===".length"||this.getKey()===".keys")throw"Reference.transaction failed: "+this.getKey()+" is a read-only object.";i===void 0&&(i=!0);var o=new W;typeof n=="function"&&o.promise.catch(function(){});var s=function(a,l,u){a?o.reject(a):o.resolve(new Xn(l,u)),typeof n=="function"&&n(a,l,u)};return this.repo.startTransaction(this.path,t,s,i),o.promise},e.prototype.setPriority=function(t,n){g("Reference.setPriority",1,2,arguments.length),V("Reference.setPriority",this.path),ht("Reference.setPriority",1,t,!1),A("Reference.setPriority",2,n,!0);var i=new W;return this.repo.setWithPriority(this.path.child(".priority"),t,null,i.wrapCallback(n)),i.promise},e.prototype.push=function(t,n){g("Reference.push",0,2,arguments.length),V("Reference.push",this.path),te("Reference.push",1,t,this.path,!0),A("Reference.push",2,n,!0);var i=this.repo.serverTime(),o=$n(i),s=this.child(o),a=this.child(o),l;return t!=null?l=s.set(t,n).then(function(){return a}):l=Promise.resolve(a),s.then=l.then.bind(l),s.catch=l.then.bind(l,void 0),typeof n=="function"&&l.catch(function(){}),s},e.prototype.onDisconnect=function(){return V("Reference.onDisconnect",this.path),new Kn(this.repo,this.path)},Object.defineProperty(e.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"key",{get:function(){return this.getKey()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this.getParent()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this.getRoot()},enumerable:!1,configurable:!0}),e}(mt);mt.__referenceConstructor=J;Nr.__referenceConstructor=J;/**
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
 */var Jt=function(){function r(){this.children={},this.childCount=0,this.value=null}return r}(),ho=function(){function r(e,t,n){e===void 0&&(e=""),t===void 0&&(t=null),n===void 0&&(n=new Jt),this.name_=e,this.parent_=t,this.node_=n}return r.prototype.subTree=function(e){for(var t=e instanceof y?e:new y(e),n=this,i=t.getFront();i!==null;){var o=q(n.node_.children,i)||new Jt;n=new r(i,n,o),t=t.popFront(),i=t.getFront()}return n},r.prototype.getValue=function(){return this.node_.value},r.prototype.setValue=function(e){d(typeof e!="undefined","Cannot set value to undefined"),this.node_.value=e,this.updateParents_()},r.prototype.clear=function(){this.node_.value=null,this.node_.children={},this.node_.childCount=0,this.updateParents_()},r.prototype.hasChildren=function(){return this.node_.childCount>0},r.prototype.isEmpty=function(){return this.getValue()===null&&!this.hasChildren()},r.prototype.forEachChild=function(e){var t=this;O(this.node_.children,function(n,i){e(new r(n,t,i))})},r.prototype.forEachDescendant=function(e,t,n){t&&!n&&e(this),this.forEachChild(function(i){i.forEachDescendant(e,!0,n)}),t&&n&&e(this)},r.prototype.forEachAncestor=function(e,t){for(var n=t?this:this.parent();n!==null;){if(e(n))return!0;n=n.parent()}return!1},r.prototype.forEachImmediateDescendantWithValue=function(e){this.forEachChild(function(t){t.getValue()!==null?e(t):t.forEachImmediateDescendantWithValue(e)})},r.prototype.path=function(){return new y(this.parent_===null?this.name_:this.parent_.path()+"/"+this.name_)},r.prototype.name=function(){return this.name_},r.prototype.parent=function(){return this.parent_},r.prototype.updateParents_=function(){this.parent_!==null&&this.parent_.updateChild_(this.name_,this)},r.prototype.updateChild_=function(e,t){var n=t.isEmpty(),i=H(this.node_.children,e);n&&i?(delete this.node_.children[e],this.node_.childCount--,this.updateParents_()):!n&&!i&&(this.node_.children[e]=t.node_,this.node_.childCount++,this.updateParents_())},r}();/**
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
 */var b;(function(r){r[r.RUN=0]="RUN",r[r.SENT=1]="SENT",r[r.COMPLETED=2]="COMPLETED",r[r.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",r[r.NEEDS_ABORT=4]="NEEDS_ABORT"})(b||(b={}));D.MAX_TRANSACTION_RETRIES_=25;D.prototype.transactionsInit_=function(){this.transactionQueueTree_=new ho};D.prototype.startTransaction=function(r,e,t,n){this.log_("transaction on "+r);var i=function(){},o=new J(this,r);o.on("value",i);var s=function(){o.off("value",i)},a={path:r,update:e,onComplete:t,status:null,order:ir(),applyLocally:n,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=this.getLatestState_(r);a.currentInputSnapshot=l;var u=a.update(l.val());if(u===void 0){if(a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete){var h=new ie(a.currentInputSnapshot,new J(this,a.path),I);a.onComplete(null,!1,h)}}else{Ae("transaction failed: Data returned ",u,a.path),a.status=b.RUN;var c=this.transactionQueueTree_.subTree(r),f=c.getValue()||[];f.push(a),c.setValue(f);var p=void 0;if(typeof u=="object"&&u!==null&&H(u,".priority"))p=q(u,".priority"),d(we(p),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{var v=this.serverSyncTree_.calcCompleteEventCache(r)||m.EMPTY_NODE;p=v.getPriority().val()}p=p;var _=this.generateServerValues(),E=w(u,p),C=Et(E,l,_);a.currentOutputSnapshotRaw=E,a.currentOutputSnapshotResolved=C,a.currentWriteId=this.getNextWriteId_();var L=this.serverSyncTree_.applyUserOverwrite(r,C,a.currentWriteId,a.applyLocally);this.eventQueue_.raiseEventsForChangedPath(r,L),this.sendReadyTransactions_()}};D.prototype.getLatestState_=function(r,e){return this.serverSyncTree_.calcCompleteEventCache(r,e)||m.EMPTY_NODE};D.prototype.sendReadyTransactions_=function(r){var e=this;if(r===void 0&&(r=this.transactionQueueTree_),r||this.pruneCompletedTransactionsBelowNode_(r),r.getValue()!==null){var t=this.buildTransactionQueue_(r);d(t.length>0,"Sending zero length transaction queue");var n=t.every(function(i){return i.status===b.RUN});n&&this.sendTransactionQueue_(r.path(),t)}else r.hasChildren()&&r.forEachChild(function(i){e.sendReadyTransactions_(i)})};D.prototype.sendTransactionQueue_=function(r,e){for(var t=this,n=e.map(function(f){return f.currentWriteId}),i=this.getLatestState_(r,n),o=i,s=i.hash(),a=0;a<e.length;a++){var l=e[a];d(l.status===b.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),l.status=b.SENT,l.retryCount++;var u=y.relativePath(r,l.path);o=o.updateChild(u,l.currentOutputSnapshotRaw)}var h=o.val(!0),c=r;this.server_.put(c.toString(),h,function(f){t.log_("transaction put response",{path:c.toString(),status:f});var p=[];if(f==="ok"){for(var v=[],_=0;_<e.length;_++){if(e[_].status=b.COMPLETED,p=p.concat(t.serverSyncTree_.ackUserWrite(e[_].currentWriteId)),e[_].onComplete){var E=e[_].currentOutputSnapshotResolved,C=new J(t,e[_].path),L=new ie(E,C,I);v.push(e[_].onComplete.bind(null,null,!0,L))}e[_].unwatcher()}t.pruneCompletedTransactionsBelowNode_(t.transactionQueueTree_.subTree(r)),t.sendReadyTransactions_(),t.eventQueue_.raiseEventsForChangedPath(r,p);for(var _=0;_<v.length;_++)_e(v[_])}else{if(f==="datastale")for(var _=0;_<e.length;_++)e[_].status===b.SENT_NEEDS_ABORT?e[_].status=b.NEEDS_ABORT:e[_].status=b.RUN;else{x("transaction at "+c.toString()+" failed: "+f);for(var _=0;_<e.length;_++)e[_].status=b.NEEDS_ABORT,e[_].abortReason=f}t.rerunTransactions_(r)}},s)};D.prototype.rerunTransactions_=function(r){var e=this.getAncestorTransactionNode_(r),t=e.path(),n=this.buildTransactionQueue_(e);return this.rerunTransactionQueue_(n,t),t};D.prototype.rerunTransactionQueue_=function(r,e){if(r.length!==0){for(var t=[],n=[],i=r.filter(function(N){return N.status===b.RUN}),o=i.map(function(N){return N.currentWriteId}),s=0;s<r.length;s++){var a=r[s],l=y.relativePath(e,a.path),u=!1,h=void 0;if(d(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===b.NEEDS_ABORT)u=!0,h=a.abortReason,n=n.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else if(a.status===b.RUN)if(a.retryCount>=D.MAX_TRANSACTION_RETRIES_)u=!0,h="maxretry",n=n.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0));else{var c=this.getLatestState_(a.path,o);a.currentInputSnapshot=c;var f=r[s].update(c.val());if(f!==void 0){Ae("transaction failed: Data returned ",f,a.path);var p=w(f),v=typeof f=="object"&&f!=null&&H(f,".priority");v||(p=p.updatePriority(c.getPriority()));var _=a.currentWriteId,E=this.generateServerValues(),C=Et(p,c,E);a.currentOutputSnapshotRaw=p,a.currentOutputSnapshotResolved=C,a.currentWriteId=this.getNextWriteId_(),o.splice(o.indexOf(_),1),n=n.concat(this.serverSyncTree_.applyUserOverwrite(a.path,C,a.currentWriteId,a.applyLocally)),n=n.concat(this.serverSyncTree_.ackUserWrite(_,!0))}else u=!0,h="nodata",n=n.concat(this.serverSyncTree_.ackUserWrite(a.currentWriteId,!0))}if(this.eventQueue_.raiseEventsForChangedPath(e,n),n=[],u&&(r[s].status=b.COMPLETED,function(N){setTimeout(N,Math.floor(0))}(r[s].unwatcher),r[s].onComplete))if(h==="nodata"){var L=new J(this,r[s].path),M=r[s].currentInputSnapshot,R=new ie(M,L,I);t.push(r[s].onComplete.bind(null,null,!1,R))}else t.push(r[s].onComplete.bind(null,new Error(h),!1,null))}this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);for(var s=0;s<t.length;s++)_e(t[s]);this.sendReadyTransactions_()}};D.prototype.getAncestorTransactionNode_=function(r){var e,t=this.transactionQueueTree_;for(e=r.getFront();e!==null&&t.getValue()===null;)t=t.subTree(e),r=r.popFront(),e=r.getFront();return t};D.prototype.buildTransactionQueue_=function(r){var e=[];return this.aggregateTransactionQueuesForNode_(r,e),e.sort(function(t,n){return t.order-n.order}),e};D.prototype.aggregateTransactionQueuesForNode_=function(r,e){var t=this,n=r.getValue();if(n!==null)for(var i=0;i<n.length;i++)e.push(n[i]);r.forEachChild(function(o){t.aggregateTransactionQueuesForNode_(o,e)})};D.prototype.pruneCompletedTransactionsBelowNode_=function(r){var e=this,t=r.getValue();if(t){for(var n=0,i=0;i<t.length;i++)t[i].status!==b.COMPLETED&&(t[n]=t[i],n++);t.length=n,r.setValue(t.length>0?t:null)}r.forEachChild(function(o){e.pruneCompletedTransactionsBelowNode_(o)})};D.prototype.abortTransactions_=function(r){var e=this,t=this.getAncestorTransactionNode_(r).path(),n=this.transactionQueueTree_.subTree(r);return n.forEachAncestor(function(i){e.abortTransactionsOnNode_(i)}),this.abortTransactionsOnNode_(n),n.forEachDescendant(function(i){e.abortTransactionsOnNode_(i)}),t};D.prototype.abortTransactionsOnNode_=function(r){var e=r.getValue();if(e!==null){for(var t=[],n=[],i=-1,o=0;o<e.length;o++)if(e[o].status!==b.SENT_NEEDS_ABORT){if(e[o].status===b.SENT)d(i===o-1,"All SENT items should be at beginning of queue."),i=o,e[o].status=b.SENT_NEEDS_ABORT,e[o].abortReason="set";else if(d(e[o].status===b.RUN,"Unexpected transaction status in abort"),e[o].unwatcher(),n=n.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId,!0)),e[o].onComplete){var s=null;t.push(e[o].onComplete.bind(null,new Error("set"),!1,s))}}i===-1?r.setValue(null):e.length=i+1,this.eventQueue_.raiseEventsForChangedPath(r.path(),n);for(var o=0;o<t.length;o++)_e(t[o])}};/**
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
 */var co=function(){function r(e,t){var n=this;this.app_=e,this.authProvider_=t,this.auth_=null,this.auth_=t.getImmediate({optional:!0}),this.auth_||t.get().then(function(i){return n.auth_=i})}return r.prototype.getToken=function(e){return this.auth_?this.auth_.getToken(e).catch(function(t){return t&&t.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)}):Promise.resolve(null)},r.prototype.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):(setTimeout(function(){return e(null)},0),this.authProvider_.get().then(function(t){return t.addAuthTokenListener(e)}))},r.prototype.removeTokenChangeListener=function(e){this.authProvider_.get().then(function(t){return t.removeAuthTokenListener(e)})},r.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.app_.name+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.app_.options?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.app_.options?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)},r}(),Zt=function(){function r(){}return r.prototype.getToken=function(e){return Promise.resolve({accessToken:r.EMULATOR_AUTH_TOKEN})},r.prototype.addTokenChangeListener=function(e){e(r.EMULATOR_AUTH_TOKEN)},r.prototype.removeTokenChangeListener=function(e){},r.prototype.notifyForInvalidToken=function(){},r.EMULATOR_AUTH_TOKEN="owner",r}();/**
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
 */var fo="FIREBASE_DATABASE_EMULATOR_HOST",nt,be=function(){function r(){this.repos_={},this.useRestClient_=!1}return r.getInstance=function(){return nt||(nt=new r),nt},r.prototype.interrupt=function(){var e,t,n,i;try{for(var o=U(Object.keys(this.repos_)),s=o.next();!s.done;s=o.next()){var a=s.value;try{for(var l=(n=void 0,U(Object.keys(this.repos_[a]))),u=l.next();!u.done;u=l.next()){var h=u.value;this.repos_[a][h].interrupt()}}catch(c){n={error:c}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}}}catch(c){e={error:c}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},r.prototype.resume=function(){var e,t,n,i;try{for(var o=U(Object.keys(this.repos_)),s=o.next();!s.done;s=o.next()){var a=s.value;try{for(var l=(n=void 0,U(Object.keys(this.repos_[a]))),u=l.next();!u.done;u=l.next()){var h=u.value;this.repos_[a][h].resume()}}catch(c){n={error:c}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}}}catch(c){e={error:c}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}},r.prototype.applyEmulatorSettings=function(e,t,n){e.repoInfo_=new yt(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),e.repoInfo_.nodeAdmin&&(e.authTokenProvider_=new Zt)},r.prototype.databaseFromApp=function(e,t,n,i){var o=n||e.options.databaseURL;o===void 0&&(e.options.projectId||Y("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var s=ut(o,i),a=s.repoInfo,l,u=void 0;typeof process!="undefined"&&(u=process.env[fo]),u?(l=!0,o="http://"+u+"?ns="+a.namespace,s=ut(o,i),a=s.repoInfo):l=!s.repoInfo.secure;var h=i&&l?new Zt:new co(e,t);mr("Invalid Firebase Database URL",1,s),s.path.isEmpty()||Y("Database URL must point to the root of a Firebase Database (not including a child path).");var c=this.createRepo(a,e,h);return c.database},r.prototype.deleteRepo=function(e){var t=q(this.repos_,e.app.name);(!t||q(t,e.key)!==e)&&Y("Database "+e.app.name+"("+e.repoInfo_+") has already been deleted."),e.interrupt(),delete t[e.key]},r.prototype.createRepo=function(e,t,n){var i=q(this.repos_,t.name);i||(i={},this.repos_[t.name]=i);var o=q(i,e.toURLString());return o&&Y("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new D(e,this.useRestClient_,t,n),i[e.toURLString()]=o,o},r.prototype.forceRestClient=function(e){this.useRestClient_=e},r}();/**
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
 */var It=function(){function r(e){var t=this;this.repoInternal_=e,this.instanceStarted_=!1,this.INTERNAL={delete:function(){return gn(t,void 0,void 0,function(){return mn(this,function(n){return this.checkDeleted_("delete"),be.getInstance().deleteRepo(this.repo_),this.repoInternal_=null,this.rootInternal_=null,[2]})})}},e instanceof D||Y("Don't call new Database() directly - please use firebase.database().")}return Object.defineProperty(r.prototype,"repo_",{get:function(){return this.instanceStarted_||(this.repoInternal_.start(),this.instanceStarted_=!0),this.repoInternal_},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"root_",{get:function(){return this.rootInternal_||(this.rootInternal_=new J(this.repo_,y.Empty)),this.rootInternal_},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"app",{get:function(){return this.repo_.app},enumerable:!1,configurable:!0}),r.prototype.useEmulator=function(e,t){if(this.checkDeleted_("useEmulator"),this.instanceStarted_){Y("Cannot call useEmulator() after instance has already been initialized.");return}be.getInstance().applyEmulatorSettings(this.repoInternal_,e,t)},r.prototype.ref=function(e){return this.checkDeleted_("ref"),g("database.ref",0,1,arguments.length),e instanceof J?this.refFromURL(e.toString()):e!==void 0?this.root_.child(e):this.root_},r.prototype.refFromURL=function(e){var t="database.refFromURL";this.checkDeleted_(t),g(t,1,1,arguments.length);var n=ut(e,this.repo_.repoInfo_.nodeAdmin);mr(t,1,n);var i=n.repoInfo;return!i.isCustomHost()&&i.host!==this.repo_.repoInfo_.host&&Y(t+": Host name does not match the current database: (found "+i.host+" but expected "+this.repo_.repoInfo_.host+")"),this.ref(n.path.toString())},r.prototype.checkDeleted_=function(e){this.repoInternal_===null&&Y("Cannot call "+e+" on a deleted database.")},r.prototype.goOffline=function(){g("database.goOffline",0,0,arguments.length),this.checkDeleted_("goOffline"),this.repo_.interrupt()},r.prototype.goOnline=function(){g("database.goOnline",0,0,arguments.length),this.checkDeleted_("goOnline"),this.repo_.resume()},r.ServerValue={TIMESTAMP:{".sv":"timestamp"},increment:function(e){return{".sv":{increment:e}}}},r}();/**
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
 */var po=function(){oe.forceDisallow(),Tt.forceAllow()},vo=function(){Tt.forceDisallow()},_o=function(){return oe.isAvailable()},yo=function(r,e){r.repo.persistentConnection_.securityDebugCallback_=e},go=function(r,e){r.repo.stats(e)},mo=function(r,e){r.repo.statsIncrementCounter(e)},Eo=function(r){return r.repo.dataUpdateCount},Co=function(r,e){return r.repo.interceptServerData_(e)};function So(r){var e=r.app,t=r.url,n=r.version,i=r.customAuthImpl,o=r.namespace,s=r.nodeAdmin,a=s===void 0?!1:s;Wr(n);var l=new Cn("auth-internal",new Sn("database-standalone"));return l.setComponent(new rr("auth-internal",function(){return i},"PRIVATE")),{instance:be.getInstance().databaseFromApp(e,l,t,a),namespace:o}}var To=Object.freeze({__proto__:null,forceLongPolling:po,forceWebSockets:vo,isWebSocketsAvailable:_o,setSecurityDebugCallback:yo,stats:go,statsIncrementCounter:mo,dataUpdateCount:Eo,interceptServerData:Co,initStandalone:So});/**
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
 */var Io=le;le.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};le.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};var wo=Ur,Ro=function(r){var e=le.prototype.put;return le.prototype.put=function(t,n,i,o){o!==void 0&&(o=r()),e.call(this,t,n,i,o)},function(){le.prototype.put=e}},bo=yt,No=function(r){return r.queryIdentifier()},Po=function(r){be.getInstance().forceRestClient(r)},Oo=Object.freeze({__proto__:null,DataConnection:Io,RealTimeConnection:wo,hijackHash:Ro,ConnectionTarget:bo,queryIdentifier:No,forceRestClient:Po}),Ao="@firebase/database",Do="0.8.1";/**
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
 */var Lo=It.ServerValue;function Fo(r){Wr(r.SDK_VERSION),r.INTERNAL.registerComponent(new rr("database",function(e,t){var n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal");return be.getInstance().databaseFromApp(n,i,t)},"PUBLIC").setServiceProps({Reference:J,Query:mt,Database:It,DataSnapshot:ie,enableLogging:sr,INTERNAL:To,ServerValue:Lo,TEST_ACCESS:Oo}).setMultipleInstances(!0)),r.registerVersion(Ao,Do)}Fo(ee);const xo=Hr({name:"PsFrontendLayout",components:{PsNavBar:rn,FooterView:en,PsIcon:nn,PsNavTabBar:tn,Head:Br,Link:qr,PsNotificationBox:on},props:["authUser","backendSetting","firebaseConfig","webPushKey","appUrl"],setup(r){const e=Ye(!0),t=Ye(!0),n=an(),i=new sn;let o=ln();const s=Ye(r.authUser?r.authUser.id:Z.NO_LOGIN_USER);o.replaceLoginUserId(s.value),i.userId=s.value,n.loadAppInfo(i);const a=Gr(),l=In(),u=new wn,h=new Rn,c=wt(()=>a.getters.isDarkMode),f=Yr({dark:c}),p=wt(()=>a.getters.dir);jr.Inertia.on("finish",R=>{if(localStorage.loginUserId&&localStorage.loginUserId!=""&&localStorage.loginUserId!=null&&localStorage.loginUserId!=null&&localStorage.loginUserId!=Z.NO_LOGIN_USER&&ee.apps.length>=1){const N=ee.database().ref("User_Presence");if(route().current()=="fe_chat"){const k={userId:localStorage.loginUserId,userName:"Tester"};N.child(localStorage.loginUserId).set(k)}else N.child(localStorage.loginUserId).remove()}}),Rt(()=>f.dark,(R,N)=>{R?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),Rt(()=>r.authUser,(R,N)=>{R?s.value!=R.id&&(s.value=R.id,o.replaceLoginUserId(R.id),L()):(ee.auth().signOut(),s.value=Z.NO_LOGIN_USER,o.replaceLoginUserId(Z.NO_LOGIN_USER))});const v=JSON.parse(r.firebaseConfig);ee.apps.length<1&&ee.initializeApp(v);const _=ee.messaging.isSupported()?ee.messaging():null;_&&Notification.requestPermission().then(R=>{console.log(R==="granted"?"Notification permission granted.":"Unable to get permission to notify.")});function E(R,N){_&&fetch("https://iid.googleapis.com/iid/v1/"+R+"/rel/topics/"+N,{method:"POST",headers:new Headers({Authorization:"key="+r.backendSetting.fcm_api_key})}).then(k=>{if(k.status<200||k.status>=400)throw"Error subscribing to topic: "+k.status+" - "+k.text();console.log('Subscribed to "'+N+'"')}).catch(k=>{console.error(k)})}function C(){window.pageYOffset>30?e.value&&(e.value=!1):e.value||(e.value=!0)}zr(async()=>{window.addEventListener("scroll",C);var R=document.getElementById("home_loading__container");if(R.style.display="none","serviceWorker"in navigator){if(_){let N=r.appUrl,k=N+"/firebase-messaging-sw.js";N.endsWith("/")&&(k=N+"firebase-messaging-sw.js"),navigator.serviceWorker.register(k).then(function(ye){_.getToken({vapidKey:r.webPushKey,serviceWorkerRegistration:ye}).then(async ce=>{ce&&(console.log("current token for client: ",ce),localStorage.deviceToken=ce,o.replacedeviceToken(localStorage.deviceToken),E(ce,"fe_broadcast"),await n.loadAppInfo(),o.loadData(),(localStorage.getItem("showProfile")==null||localStorage.showProfile=="")&&(n.appInfo.data.mobileSetting.is_show_owner_info=="1"?localStorage.showProfile="show":localStorage.showProfile="hide"),localStorage.getItem("notiSetting")==null||localStorage.notiSetting==""?L():localStorage.getItem("notiSetting")=="true"?(u.platformName=Z.PLATFORM,u.deviceId=o.deviceToken,u.loginUserId=s.value,l.registerNotiToken(u)):(h.platformName=Z.PLATFORM,h.deviceId=o.deviceToken,h.userId=s.value,l.unRegisterNotiToken(h)),o.replaceshowProfile(localStorage.showProfile),o.replaceNotiSetting(localStorage.notiSetting))}).catch(ce=>{console.log("An error occurred while retrieving token. ",ce)})}).catch(function(ye){console.log("Service worker registration failed, error:",ye)})}}else console.log("no serviceWorker in navigator")}),Kr(()=>{window.removeEventListener("scroll",C)});function L(){n.appInfo.data.frontendConfigSetting.enableNotification=="1"?(localStorage.notiSetting="true",u.platformName=Z.PLATFORM,u.deviceId=o.deviceToken,u.loginUserId=s.value,l.registerNotiToken(u)):(localStorage.notiSetting="hide",h.platformName=Z.PLATFORM,h.deviceId=o.deviceToken,h.userId=s.value,l.unRegisterNotiToken(h))}function M(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{atTopOfPage:e,isDarkMode:c,dataReady:t,dir:p,appInfoStore:n,getDir:M}}}),ko=["href"],Mo=["dir"],Wo={class:"w-full h-full flex flex-col min-h-screen"},Uo={class:"flex-grow bg-feAchromatic-50 dark_bg-feAchromatic-900"},Qo={class:"top-0 fixed"};function Vo(r,e,t,n,i,o){const s=ge("Head"),a=ge("ps-nav-tab-bar"),l=ge("ps-nav-bar"),u=ge("footer-view"),h=ge("ps-notification-box");return bt(),Nt(Zr,null,[me(s,null,{default:Xr(()=>{var c,f,p;return[Ee("link",{rel:"icon",type:"image/svg+xml",href:r.$page.props.thumb1xUrl+"/"+((p=(f=(c=r.appInfoStore.appInfo.data)==null?void 0:c.frontendConfigSetting)==null?void 0:f.frontendIcon)==null?void 0:p.imgPath)},null,8,ko)]}),_:1}),r.dataReady?(bt(),Nt("div",{key:0,dir:r.getDir(),class:"bg-feAchromatic-50 h-full"},[Ee("div",Wo,[Ee("main",Uo,[$r(r.$slots,"default")]),Ee("div",Qo,[me(a,{topOfPage:r.atTopOfPage},null,8,["topOfPage"]),me(l,{topOfPage:r.atTopOfPage},null,8,["topOfPage"])]),Ee("footer",null,[me(u)])])],8,Mo)):Jr("",!0),me(h)],64)}var Ws=bn(xo,[["render",Vo]]);export{Ws as default};
