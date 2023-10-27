import{d as y}from"./PsLayout.f3d182a2.js";import{d as b,Z as w,p as v,o as n,c as p,b as o,w as a,a as t,F as h,s as k,t as r,n as P,f as u,q as l,r as i}from"./app.df1b8390.js";import C from"./FlashMessage.175118f7.js";import{h as $}from"./moment.9709ab41.js";import{P as L}from"./PsInput.a956c4eb.js";import{P as N}from"./PsLabel.220aebc7.js";import{P as B}from"./PsButton.27aa76f7.js";import{P as D}from"./PsTextarea.33cd0e73.js";import{P as F}from"./PsLabelHeader4.08737a41.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.aabd8ae0.js";import"./Icons.70fae9c4.js";import"./PsToggle.853ca190.js";import"./toggle.d860cb28.js";import"./PsModal.5c4d4bf6.js";import"./vue-neat-modal.fd4a8f96.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./PsSuccessDialog.9c3bba6c.js";import"./PsInputWithRightIcon.f0158e49.js";import"./PsLoading.d7e2b7a9.js";import"./PsLabelCaption.ee5fb266.js";import"./PsBannerIcon.93b568f8.js";import"./PsIcon1.a2a2a6d2.js";import"./PsLoadingCircleDialog.72c88d72.js";const H=b({name:"Index",components:{Head:w,Link:v,FlashMessage:C,PsInput:L,PsLabel:N,PsButton:B,PsTextarea:D,PsLabelHeader4:F},layout:y,props:["shippings","status"],data(){return{moment:$}},methods:{handleDelete(e){this.$inertia.delete(route("shipping.destroy",e))},handleEdit(e){this.$inertia.get(route("shipping.edit",e))},handlePublish(e){this.$inertia.put(route("shipping.statusChange",e))}}}),I={class:"py-12"},M={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},V={class:"p-6"},T={class:"flex justify-between mb-6"},j=t("h4",null,"Shipping List",-1),q=l("Create New Shipping "),z=t("hr",null,null,-1),Y={class:"flex"},Z={class:"overflow-x-auto sm:-mx-6 lg:-mx-8 flex-1"},A={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},G={class:"overflow-hidden"},J={class:"w-full"},K=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," # "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Name "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Price "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Days "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Publish "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Control ")])],-1),O={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},Q={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},R={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},U={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},W={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},X=l("Yes"),tt=l("No"),et={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},st=l(" Delete "),ot=l(" Edit ");function at(e,it,nt,lt,rt,dt){const _=i("Head"),x=i("Link"),g=i("FlashMessage"),c=i("ps-label"),d=i("ps-button"),f=i("ps-layout");return n(),p(h,null,[o(_,{title:e.$t("shipping_module")},null,8,["title"]),o(f,null,{default:a(()=>[t("div",I,[t("div",M,[t("div",S,[t("div",V,[t("div",T,[j,o(x,{href:e.route("shipping.create"),type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},{default:a(()=>[q]),_:1},8,["href"])]),z,o(g,{status:e.status},null,8,["status"]),t("div",Y,[t("div",Z,[t("div",A,[t("div",G,[t("table",J,[K,t("tbody",null,[(n(!0),p(h,null,k(e.shippings,s=>(n(),p("tr",{key:s.id,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},[t("td",O,r(s.id),1),t("td",Q,r(s.name),1),t("td",R,r(s.price),1),t("td",U,r(s.days),1),t("td",W,[o(d,{onClick:m=>e.handlePublish(s.id),class:P(["hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded",s.status==1?"bg-green-600":"bg-red-600"])},{default:a(()=>[s.status==1?(n(),u(c,{key:0},{default:a(()=>[X]),_:1})):(n(),u(c,{key:1},{default:a(()=>[tt]),_:1}))]),_:2},1032,["onClick","class"])]),t("td",et,[o(d,{onClick:m=>e.handleDelete(s.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-red-600"},{default:a(()=>[st]),_:2},1032,["onClick"]),o(d,{onClick:m=>e.handleEdit(s.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-yellow-500"},{default:a(()=>[ot]),_:2},1032,["onClick"])])]))),128))])])])])])])])])])])]),_:1})],64)}var Mt=E(H,[["render",at]]);export{Mt as default};
