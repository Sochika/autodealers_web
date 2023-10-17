import{A as c}from"./AppLayout.js";import _ from"./DeleteTeamForm.js";import{J as d}from"./SectionBorder.js";import f from"./TeamMemberManager.js";import u from"./UpdateTeamNameForm.js";import{_ as b}from"./plugin-vue_export-helper.js";import{d as g,r as t,o as a,f as h,w as s,a as m,b as o,c as v,F as y,g as T}from"./app.js";import"./ActionSection.js";import"./SectionTitle.js";import"./ConfirmationModal.js";import"./Modal.js";import"./DangerButton.js";import"./SecondaryButton.js";import"./ActionMessage.js";import"./Button.js";import"./DialogModal.js";import"./FormSection.js";import"./Input.js";import"./InputError.js";import"./Label.js";const B=g({props:["team","availableRoles","permissions"],components:{AppLayout:c,DeleteTeamForm:_,JetSectionBorder:d,TeamMemberManager:f,UpdateTeamNameForm:u}}),k=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};function x(e,C,F,N,S,$){const r=t("update-team-name-form"),n=t("team-member-manager"),i=t("jet-section-border"),p=t("delete-team-form"),l=t("app-layout");return a(),h(l,{title:"Team Settings"},{header:s(()=>[k]),default:s(()=>[m("div",null,[m("div",w,[o(r,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),o(n,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),v(y,{key:0},[o(i),o(p,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):T("",!0)])])]),_:1})}var X=b(B,[["render",x]]);export{X as default};