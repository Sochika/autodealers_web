<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;

class StoreAboutRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'about_title' => 'required|min:3,',
            'about_cover' => 'nullable|sometimes|image',
            'about_email' => 'nullable|sometimes|email'
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {

            $conds = [
                'module_name' => Constants::about,
                'enable' => 1,
                'mandatory' => 1,
                'is_core_field' => 1,
            ];
            $core_headers = CoreFieldFilterSetting::where($conds)->get();

            $core_fields = $validator->getData() ?? '';
            
            foreach($core_headers as $core_header){
                if($core_header->field_name == 'about_cover'){
                    if(array_key_exists('about_cover', $core_fields) && empty($core_fields['about_cover'])){
                        $replace = [];
                        $replace['attribute'] = 'photo';
                        $validator->errors()->add('about_cover', __('validation__required', $replace));
                    }
                }
            }
        });
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
