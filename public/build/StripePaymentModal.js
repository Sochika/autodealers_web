import{d as $,i as _,j as V,aj as N,G as O,V as R,r as v,o as E,c as C,b as m,w as f,a as k,p as w,t as S,g as B,F}from"./app.js";import I from"./PsModal2.js";import M from"./PsLabelHeader42.js";import G from"./PsErrorDialog2.js";import T from"./PsButton2.js";import q from"./PsLoadingDialog3.js";import{P as D}from"./PsValueStore.js";import{_ as U}from"./plugin-vue_export-helper.js";import"./vue-neat-modal.js";import"./PsLine.js";import"./PsLabel2.js";import"./PsLabelTitle2.js";var A=Object.assign;const H={base:{color:"#32325d",fontFamily:"Helvetica Neue, Roboto",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}};function X({key:e,elements:t=[],constructorOptions:o,elementsOptions:n}){const r=_(null),s=_(null),i=t.map(()=>_(null)),c=()=>typeof window=="undefined"||!window.Stripe?!1:(r.value=window.Stripe(e,o),s.value=r.value.elements(n),t.forEach(({type:a,options:u},l)=>{i[l].value=s.value.create(a,A({style:H},u))}),!0),d=a=>{if(a)try{a.unmount(),a.destroy()}catch{}};return V(()=>{if(!c()){let a=0;const u=setInterval(()=>{a++;const l=c();(l||a>10)&&(clearInterval(u),l||console.error("Stripe library is not loaded"))},500)}}),R(()=>{i.forEach(a=>d(a.value))}),{stripe:r,stripeElements:s,elements:i}}const P=["change","focus","blur","click","ready"];var z=$({name:"StripeElement",props:{element:{type:Object,default:null}},emits:P,setup(e,{emit:t}){const o=_(null),n=r=>{const[s,...i]=P;for(const c of i)r.on(c,()=>t(c));e.element.on(s,c=>t(s,c))};return V(()=>{N(()=>{!e.element||(n(e.element),e.element.mount(o.value))})}),{domRef:o}},render(){return O("div",{ref:"domRef"})}}),x="https://js.stripe.com/v3",K=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,j="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",J=function(){for(var t=document.querySelectorAll('script[src^="'.concat(x,'"]')),o=0;o<t.length;o++){var n=t[o];if(!!K.test(n.src))return n}return null},Q=function(t){var o=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(x).concat(o);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},g=null,W=function(t){return g!==null||(g=new Promise(function(o,n){if(typeof window=="undefined"||typeof document=="undefined"){o(null);return}if(window.Stripe&&t&&console.warn(j),window.Stripe){o(window.Stripe);return}try{var r=J();r&&t?console.warn(j):r||(r=Q(t)),r.addEventListener("load",function(){window.Stripe?o(window.Stripe):n(new Error("Stripe.js not available"))}),r.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(s){n(s);return}})),g},Y=Promise.resolve().then(function(){return W(null)});Y.catch(function(e){console.warn(e)});const Z=$({components:{StripeElement:z,PsModal:I,PsLabelHeader4:M,PsButton:T,PsLoadingDialog:q,PsErrorDialog:G},setup(){const e=_(),t=D();let o,n;function r(l){l=="no"&&n(),e.value.toggle(!1)}function s(l,p){e.value.toggle(!0),o=l,n=p}const i=_(),c=t.getPublishedKey(),{stripe:d,elements:[a]}=X({key:c||"",elements:[{type:"card",options:{}}]});return{psmodal:e,openModal:s,actionClicked:r,event:i,cardElement:a,registerCard:()=>{var l,p,y,b;i.value!=null&&((l=i.value)==null?void 0:l.complete)!=null&&((p=i.value)==null?void 0:p.complete)&&((y=d.value)==null||y.elements().create("card"),(b=d.value)==null||b.createToken(a.value).then(function(L){var h;localStorage.paymentNonce=(h=L.token)==null?void 0:h.id,o()}))}}}}),ee={class:"flex flex-col items-center mt-8"},te={class:"flex items-center justify-center mb-4"},oe={key:0};function ne(e,t,o,n,r,s){const i=v("ps-label-header-4"),c=v("StripeElement"),d=v("ps-button"),a=v("ps-modal"),u=v("ps-loading-dialog"),l=v("ps-error-dialog");return E(),C(F,null,[m(a,{ref:"psmodal",isClickOut:!1},{title:f(()=>[k("div",ee,[m(i,{class:"font-bold"},{default:f(()=>[w(S(e.$t("stripe_credit_card_modal__card_entry")),1)]),_:1})])]),body:f(()=>[m(c,{element:e.cardElement,onChange:t[0]||(t[0]=p=>e.event=p)},null,8,["element"])]),footer:f(()=>[k("div",te,[m(d,{class:"text-center w-60 mx-auto",onClick:e.registerCard},{default:f(()=>[w(S(e.$t("stripe_credit_card_modal__save")),1)]),_:1},8,["onClick"]),m(d,{class:"text-center w-60 mx-auto ms-4",theme:"btn-second",onClick:t[1]||(t[1]=p=>e.actionClicked("no"))},{default:f(()=>[w(S(e.$t("stripe_credit_card_modal__cancel")),1)]),_:1})])]),default:f(()=>[e.event&&e.event.error?(E(),C("div",oe,S(e.event.error.message),1)):B("",!0)]),_:1},512),m(u,{ref:"psloading",isClickOut:!1},null,512),m(l,{ref:"ps_error_dialog"},null,512)],64)}var _e=U(Z,[["render",ne]]);export{_e as default};
