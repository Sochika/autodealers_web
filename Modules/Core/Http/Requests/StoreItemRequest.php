<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Constants\Constants;

class StoreItemRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:psx_items,title,',
            'category_id' => 'required',
            'currency_id' => 'required',
            'location_city_id' => 'required',
            'location_township_id' => 'required',
            'description' => 'required',
            'price' => 'required',
            'cover' => 'nullable|sometimes|image',
            'icon' => 'nullable|sometimes|image',
            // 'video' => 'mimetypes:video/avi,video/mpeg,video/quicktime'
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'category_id' => 'category',
            'currency_id' => 'currency',
            'location_city_id' => 'location city',
            'location_township_id' => 'location township',
            'cover' => 'item photo',
            'icon' => 'video icon',
            'video' => 'item video',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {

            $conds = [
                'module_name' => 'Item',
                'enable' => 1,
                'mandatory' => 1
            ];
            $custom_headers = CustomizeUi::where($conds)->get();

            $custom_fields = $validator->getData()['custom_fields'] ?? '';

            foreach($custom_headers as $custom_header){
                
                if(array_key_exists($custom_header->id, $custom_fields) && empty($custom_fields[$custom_header->id])){
                    $replace = [];
                    $replace['attribute'] = strtolower($custom_header->name);
                    $validator->errors()->add($custom_header->id,__('validation__required', $replace));
                }else if(!array_key_exists($custom_header->id, $custom_fields)){
                    $replace = [];
                    $replace['attribute'] = strtolower($custom_header->name);
                    $validator->errors()->add($custom_header->id, __('validation__required', $replace));
                }
            }

            $conds = [
                'module_name' => Constants::item,
                'enable' => 1,
                'mandatory' => 1,
                'is_core_field' => 1,
            ];
            $core_headers = CoreFieldFilterSetting::where($conds)->get();

            $core_fields = $validator->getData() ?? '';
            
            foreach($core_headers as $core_header){
                if($core_header->field_name == 'item_image'){
                    if(array_key_exists('cover', $core_fields) && empty($core_fields['cover'])){
                        $replace = [];
                        $replace['attribute'] = 'cover';
                        $validator->errors()->add('cover', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'Item Video Icon'){
                    if(array_key_exists('icon', $core_fields) && empty($core_fields['icon'])){
                        $replace = [];
                        $replace['attribute'] = 'icon';
                        $validator->errors()->add('icon', __('validation__required', $replace));
                    }
                }
                if($core_header->field_name == 'item_video'){
                    if(array_key_exists('video', $core_fields) && empty($core_fields['video'])){
                        $replace = [];
                        $replace['attribute'] = 'video';
                        $validator->errors()->add('video', __('validation__required', $replace));
                    }
                }
            }
        });
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [

        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
