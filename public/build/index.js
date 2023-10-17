import{i as c,d as m,a3 as R,a4 as A,a5 as K,o as P,f as N,b as V,l as E,g as D,m as Q,v as X,F as Y,a6 as q,D as f,j as U,a7 as k,V as O,a1 as g,C as ee,a8 as te}from"./app.js";let _=Symbol("map"),j=Symbol("api"),F=Symbol("marker"),J=Symbol("mapTilesLoaded"),x=c(null),b="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var oe=function t(e,o){if(e===o)return!0;if(e&&o&&typeof e=="object"&&typeof o=="object"){if(e.constructor!==o.constructor)return!1;var n;if(Array.isArray(e)){var r=e.length;if(r!=o.length)return!1;for(n=r;n--!==0;)if(!t(e[n],o[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();var d=Object.keys(e);if(r=d.length,r!==Object.keys(o).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[n]))return!1;for(n=r;n--!==0;)if(r=d[n],!t(e[r],o[r]))return!1;return!0}return e!==e&&o!==o};class y{constructor({apiKey:e,channel:o,client:n,id:r="__googleMapsScriptId",libraries:d=[],language:s,region:h,version:u,mapIds:v,nonce:l,retries:i=3,url:a="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=u,this.apiKey=e,this.channel=o,this.client=n,this.id=r||"__googleMapsScriptId",this.libraries=d,this.language=s,this.region=h,this.mapIds=v,this.nonce=l,this.retries=i,this.url=a,y.instance){if(!oe(this.options,y.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(y.instance.options)}`);return y.instance}y.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,o)=>{this.loadCallback(n=>{n?o(n.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),o=document.createElement("script");o.id=this.id,o.type="text/javascript",o.src=e,o.onerror=this.loadErrorCallback.bind(this),o.defer=!0,o.async=!0,this.nonce&&(o.nonce=this.nonce),document.head.appendChild(o)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}let L="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var W=m({props:{apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:L,setup(t,{emit:e}){let o=c(null),n=c(!1),r=c(null),d=c(null),s=c(!1);q(_,r),q(j,d),q(J,s);let h=()=>{const l={...t};Object.keys(l).forEach(a=>{l[a]===void 0&&delete l[a]});var i=a=>{var p;return a?{position:(p=d.value)===null||p===void 0?void 0:p.ControlPosition[a]}:{}};return i={scaleControlOptions:t.scaleControlStyle?{style:t.scaleControlStyle}:{},panControlOptions:i(t.panControlPosition),zoomControlOptions:i(t.zoomControlPosition),rotateControlOptions:i(t.rotateControlPosition),streetViewControlOptions:i(t.streetViewControlPosition),fullscreenControlOptions:i(t.fullscreenControlPosition),disableDefaultUI:t.disableDefaultUi},{...l,...i}},u=f([d,r],([l,i])=>{l&&i&&(l.event.addListenerOnce(i,"tilesloaded",()=>{s.value=!0}),setTimeout(u,0))},{immediate:!0}),v=()=>{try{const{apiKey:l,region:i,version:a,language:p,libraries:C}=t;x.value=new y({apiKey:l,region:i,version:a,language:p,libraries:C})}catch(l){console.error(l)}};return U(()=>{v(),x.value.load().then(()=>{d.value=google.maps,r.value=new google.maps.Map(o.value,h()),L.forEach(i=>{var a;(a=r.value)===null||a===void 0||a.addListener(i,p=>e(i,p))}),n.value=!0;let l=Object.keys(t).filter(i=>!["center","zoom"].includes(i)).map(i=>k(t,i));f([()=>t.center,()=>t.zoom,...l],([i,a],[p,C])=>{var S,B,I;let{center:ce,zoom:pe,...H}=h();(S=r.value)===null||S===void 0||S.setOptions(H),a!==void 0&&a!==C&&((B=r.value)===null||B===void 0||B.setZoom(a)),a=!p||i.lng!==p.lng||i.lat!==p.lat,i&&a&&((I=r.value)===null||I===void 0||I.panTo(i))})})}),O(()=>{var l;s.value=!1,r.value&&((l=d.value)===null||l===void 0||l.event.clearInstanceListeners(r.value))}),{mapRef:o,ready:n,map:r,api:d,mapTilesLoaded:s}}});function Z(t,e){if(e===void 0&&(e={}),e=e.insertAt,t&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}Z(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let ie=R();A("data-v-177d06e3");let ne={ref:"mapRef",class:"mapdiv"};K();let re=ie(t=>(P(),N("div",null,[V("div",ne,null,512),E(t.$slots,"default",{ready:t.ready,map:t.map,api:t.api,mapTilesLoaded:t.mapTilesLoaded},void 0,!0)])));W.render=re;W.__scopeId="data-v-177d06e3";let w=(t,e,o,n)=>{let r=null;const d=c(null),s=g(_,c(null)),h=g(j,c(null));return f([s,o],(u,[v,l])=>{u=JSON.stringify(o.value)!==JSON.stringify(l)||s.value!==v,s.value&&h.value&&u&&(r?(r.setOptions(o.value),r.setMap(s.value)):(d.value=r=new h.value[t]({...o.value,map:s.value}),e.forEach(i=>{r==null||r.addListener(i,a=>n(i,a))})))},{immediate:!0}),O(()=>{var u;r&&((u=h.value)===null||u===void 0||u.event.clearInstanceListeners(r),r.setMap(null))}),d},T="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var ve=m({name:"Marker",props:{options:{type:Object,required:!0}},emits:T,setup(t,{emit:e,expose:o,slots:n}){return t=k(t,"options"),e=w("Marker",T,t,e),q(F,e),o({marker:e}),()=>{var r;return(r=n.default)===null||r===void 0?void 0:r.call(n)}}});m({name:"Polyline",props:{options:{type:Object,required:!0}},emits:b,setup(t,{emit:e}){return t=k(t,"options"),{polyline:w("Polyline",b,t,e)}},render:()=>null});m({name:"Polygon",props:{options:{type:Object,required:!0}},emits:b,setup(t,{emit:e}){return t=k(t,"options"),{polygon:w("Polygon",b,t,e)}},render:()=>null});let $=b.concat(["bounds_changed"]);m({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:$,setup(t,{emit:e}){return t=k(t,"options"),{rectangle:w("Rectangle",$,t,e)}},render:()=>null});let z=b.concat(["center_changed","radius_changed"]);var ge=m({name:"Circle",props:{options:{type:Object,required:!0}},emits:z,setup(t,{emit:e}){return t=k(t,"options"),{circle:w("Circle",z,t,e)}},render:()=>null}),le=m({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(t,{emit:e}){let o=c(null),n=g(_,c(null)),r=g(j,c(null)),d=g(J,c(!1)),s=c(!1),h=f([d,r,o],([l,i,a])=>{i&&l&&a&&(u(t.position),s.value=!0,e("content:loaded"),setTimeout(h,0))},{immediate:!0}),u=l=>{n.value&&r.value&&o.value&&n.value.controls[r.value.ControlPosition[l]].push(o.value)},v=l=>{if(n.value&&r.value){let i=null;l=r.value.ControlPosition[l],n.value.controls[l].forEach((a,p)=>{a===o.value&&(i=p)}),i!==null&&n.value.controls[l].removeAt(i)}};return O(()=>v(t.position)),f(()=>t.position,(l,i)=>{v(i),u(l)}),f(()=>t.index,l=>{l&&o.value&&(o.value.index=t.index)}),{controlRef:o,showContent:s}}});let ae={ref:"controlRef"};le.render=function(t){return P(),N(Y,null,[D(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Q(V("div",ae,[E(t.$slots,"default")],512),[[X,t.showContent]])],2112)};let M="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var G=m({props:{options:{type:Object,default:()=>({})}},emits:M,setup(t,{slots:e,emit:o}){let n,r=c(),d=c(),s=g(_,c(null)),h=g(j,c(null)),u=g(F,c(null)),v,l=ee(()=>{var i;return(i=e.default)===null||i===void 0?void 0:i.call(e).some(a=>a.type!==te)});return U(()=>{f([s,()=>t.options],([,i],[a,p])=>{a=JSON.stringify(i)!==JSON.stringify(p)||s.value!==a,s.value&&h.value&&a&&(n?(n.setOptions({...i,content:l.value?d.value:i.content}),u.value||n.open({map:s.value})):(r.value=n=new h.value.InfoWindow({...i,content:l.value?d.value:i.content}),u.value?v=u.value.addListener("click",()=>{n.open({map:s.value,anchor:u.value})}):n.open({map:s.value}),M.forEach(C=>{n==null||n.addListener(C,S=>o(C,S))})))},{immediate:!0})}),O(()=>{var i;v&&v.remove(),n&&((i=h.value)===null||i===void 0||i.event.clearInstanceListeners(n),n.close())}),{infoWindow:r,infoWindowRef:d,hasSlotContent:l,anchor:u}}});Z(`
.info-window-content[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-content[data-v-5b373d6e] {
  display: block;
}
`);let se=R();A("data-v-5b373d6e");let de={key:0,ref:"infoWindowRef",class:"info-window-content"};K();let ue=se(t=>t.hasSlotContent?(P(),N("div",de,[E(t.$slots,"default",{},void 0,!0)],512)):D("v-if",!0));G.render=ue;G.__scopeId="data-v-5b373d6e";export{W as A,ve as H,ge as O};
