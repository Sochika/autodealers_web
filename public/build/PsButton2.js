import{_ as a}from"./plugin-vue_export-helper.js";import{o as n,c as d,l as r,n as o}from"./app.js";const i={name:"PsCustomButton",props:{type:{type:String,default:"submit"},rounded:{type:String,default:"rounded"},colors:{type:String,default:"bg-fePrimary-500 text-feAchromatic-50 "},padding:{type:String,default:"py-2 px-4"},border:{type:String,default:"border-none"},shadow:{type:String,default:"shadow-none"},textSize:{type:String,default:"text-sm "},justify:{type:String,default:"flex justify-center items-center "},hover:{type:String,default:"hover:outline-none hover_bg-fePrimary-600 active_bg-fePrimary-700"},focus:{type:String,default:"focus:outline-none focus_bg-fePrimary-500 focus_ring focus_ring-fePrimary-300"},cursor:{type:String,default:"cursor-pointer"},opacity:{type:String,default:"opacity-100"},disabled:{type:Boolean,default:!1}}},u=["type","disabled"];function f(t,c,e,l,s,y){return n(),d("button",{type:e.type,disabled:e.disabled,class:o([e.disabled?[e.rounded,e.padding,e.border,e.shadow,e.textSize,e.justify,"bg-feSecondary-100 text-feSecondary-300 dark_text-feSecondary-600 dark_bg-feSecondary-700 cursor-not-allowed opacity-90"]:[e.rounded,e.colors,e.padding,e.border,e.shadow,e.textSize,e.hover,e.focus,e.cursor,e.opacity,e.justify],"font-medium transition duration-150 ease-in-out"])},[r(t.$slots,"default")],10,u)}var S=a(i,[["render",f]]);export{S as default};
