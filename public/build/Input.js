import{_ as t}from"./plugin-vue_export-helper.js";import{d as r,o as n,c as u}from"./app.js";const a=r({props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}}),d=["value"];function i(e,o,p,l,m,c){return n(),u("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:o[0]||(o[0]=s=>e.$emit("update:modelValue",s.target.value)),ref:"input"},null,40,d)}var _=t(a,[["render",i]]);export{_ as J};
