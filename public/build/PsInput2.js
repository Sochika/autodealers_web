import{_ as o}from"./plugin-vue_export-helper.js";import{i as l,o as f,c,n as u}from"./app.js";const y={name:"PsInput",props:{value:{type:String,default:""},type:{type:String,default:"text"},theme:{type:String,default:"text-feSecondary-500 dark_text-feSecondary-400"},rounded:{type:String,default:"rounded"},maxlength:{type:Number,default:99999999},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabledTheme:{type:String,default:" text-feSecondary-300 border-feSecondary-300 dark_border-feSecondary-800 dark_text-feSecondary-700 shadow-none placeholder-feSecondary-300 dark_placeholder-feSecondary-600"},defaultBorder:{type:String,default:"border border-feSecondary-200 hover_border-feSecondary-400 dark_border-feSecondary-400 hover:dark_border-feSecondary-50 focus:outline-none focus_border-none focus_ring-2 focus_ring-fePrimary-300 ring-fePrimary-300 placeholder-feSecondary-500 dark_placeholder-feSecondary-400"},errorBorder:{type:String,default:"border border-fePrimary-500 focus_border-fePrimary-500 focus:outline-none focus_border-none focus_ring-1 focus_ring-fePrimary-500-500 ring-fePrimary-500-500 placeholder-feSecondary-500 dark_placeholder-feSecondary-400"},onInput:Function,opacity:{type:String,default:"opacity-100"}},setup(d,{emit:r}){const e=l(!1);function a(n){r("update:value",n),d.onInput!=null&&d.onInput(n)}return{handleInput:a,isError:e}}},i=["type","value","disabled","readonly","maxlength","placeholder"];function s(d,r,e,a,n,h){return f(),c("input",{class:u(["block bg-transparent w-full px-3 py-2 text-sm shadow-sm dark_placeholder-feSecondary-300 placeholder-feSecondary-500",e.disabled?[e.opacity,e.rounded,e.disabledTheme]:a.isError?[e.theme,e.rounded,,e.errorBorder,e.opacity]:[e.theme,e.rounded,e.defaultBorder,e.opacity]]),type:e.type,value:e.value,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,placeholder:e.placeholder,onInput:r[0]||(r[0]=t=>a.handleInput(t.target.value))},null,42,i)}var _=o(y,[["render",s]]);export{_ as default};
