import{G as d,i,o as s,f as u,w as m,a as p,t as f,D as y,r as _}from"./app.df1b8390.js";import{y as k}from"./main.14982862.js";import{P as x}from"./PsIcon.aabd8ae0.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const g={components:{Datepicker:k,PsIcon:x},props:{value:{type:Date,default:null},inline:{type:Boolean,default:!0},autoApply:{type:Boolean,default:!0},enableTimePicker:{type:Boolean,default:!1},range:{type:Boolean,default:!1},placeholder:{type:String,default:"Select Date"},cancelText:{type:String,default:"Close"},selectText:{type:String,default:"Apply"}},setup(o,{emit:t}){const e=y(),a=d(()=>e.getters.isDarkMode),l=i(o.value),c=n=>{l.value=n,t("update:value",l.value),t("datepick",l.value)};function r(){return o.range==!1?"dd/MM/yyyy":"MM/dd"}return{getFormat:r,date:l,isDarkMode:a,handleDate:c}}},v={class:"font-medium text-sm text-secondary-800 dark:text-white"};function T(o,t,e,a,l,c){const r=_("Datepicker");return s(),u(r,{format:a.getFormat(),modelValue:a.date,"onUpdate:modelValue":[t[0]||(t[0]=n=>a.date=n),a.handleDate],inline:e.inline,autoApply:e.autoApply,enableTimePicker:e.enableTimePicker,range:e.range,placeholder:e.placeholder,clearable:"",menuClassName:"dp-custom-menu",cancelText:e.cancelText,selectText:e.selectText,dark:a.isDarkMode},{"calendar-header":m(({day:n})=>[p("div",v,f(n),1)]),_:1},8,["format","modelValue","onUpdate:modelValue","inline","autoApply","enableTimePicker","range","placeholder","cancelText","selectText","dark"])}var S=D(g,[["render",T]]);export{S as D};
