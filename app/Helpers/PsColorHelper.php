<?php
use Modules\Core\Entities\Color;
use Modules\Core\Entities\FrontendSetting;

if ( !function_exists("syncFrontendColors")){
    function syncFrontendColors(){

        $colorList = Color::where('fe_color','1')->get();

        $style =   
".focus_ring,
.focus_ring-1,
.focus_ring-2 {
transition: transform 0.2s, box-shadow 0.2s !important;
outline: none !important;
}\n.border-none{
border: none;
}\n
.focus_border-none:focus{
    border: none;
}\n
.active_border-none:active{
border: none;
}\n
.hover_border-none:hover{
border: none;
}\n";

        foreach($colorList as $color){
                $style = $style . 
".focus_ring-".$color->key.":focus {
box-shadow: 0 0 0 2px ".$color->value." !important;
}\n.text-".$color->key."{
    color: ".$color->value." !important;
}\n.bg-".$color->key."{
    background-color: ".$color->value." !important;
}\n.placeholder-".$color->key."::placeholder{
    color: ".$color->value." !important;
}\n.placeholder-".$color->key."::-ms-input-placeholder{
    color: ".$color->value." !important;
}\n.border-".$color->key."{
    border-color: ".$color->value." !important;
}\n.hover_text-".$color->key.":hover{
    color: ".$color->value." !important;
}\n.hover_bg-".$color->key.":hover{
    background-color: ".$color->value." !important;
}\n.hover_border-".$color->key.":hover{
    color: ".$color->value." !important;
}\n.focus_text-".$color->key.":focus{
    color: ".$color->value." !important;
}\n.focus_bg-".$color->key.":focus{
    background-color: ".$color->value." !important;
}\n.focus_border-".$color->key.":focus{
    color: ".$color->value." !important;
}\n.active_text-".$color->key.":active{
    color: ".$color->value." !important;
}\n.active_bg-".$color->key.":active{
    background-color: ".$color->value." !important;
}\n.active_border-".$color->key.":active{
    color: ".$color->value." !important;
}

\n.dark .dark_focus_ring-".$color->key.":focus {
box-shadow: 0 0 0 3px ".$color->value." !important;
}\n.dark .dark_text-".$color->key."{
    color: ".$color->value." !important;
}\n.dark .dark_bg-".$color->key."{
    background-color: ".$color->value." !important;
}\n.dark .dark_placeholder-".$color->key."::placeholder{
    color: ".$color->value." !important;
}\n.dark .dark_placeholder-".$color->key."::-ms-input-placeholder{
    color: ".$color->value." !important;
}\n.dark .dark_border-".$color->key."{
    border-color: ".$color->value." !important;
}\n.dark .dark_hover_text-".$color->key.":hover{
    color: ".$color->value." !important;
}\n.dark .dark_hover_bg-".$color->key.":hover{
    background-color: ".$color->value." !important;
}\n.dark .dark_hover_border-".$color->key.":hover{
    color: ".$color->value." !important;
}\n.dark .dark_focus_text-".$color->key.":focus{
    color: ".$color->value." !important;
}\n.dark .dark_focus_bg-".$color->key.":focus{
    background-color: ".$color->value." !important;
}\n.dark .dark_focus_border-".$color->key.":focus{
    color: ".$color->value." !important;
}\n.dark .dark_active_text-".$color->key.":active{
    color: ".$color->value." !important;
}\n.dark .dark_active_bg-".$color->key.":active{
    background-color: ".$color->value." !important;
}\n.dark .dark_active_border-".$color->key.":active{
    color: ".$color->value." !important;
}\n";
                
        }
        
        $code = FrontendSetting::first()->color_changed_code;
        $file = 'css/custom_color_'.$code.'.css';
        file_put_contents($file,$style);
    }
}
