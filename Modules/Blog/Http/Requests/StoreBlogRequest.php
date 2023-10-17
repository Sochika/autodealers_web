<?php

namespace Modules\Blog\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;

class StoreBlogRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=> 'required',
            'location_city_id'=> 'required',
            'description' => 'required',
            'cover' => 'nullable|sometimes|image'
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {

            $conds = [
                'module_name' => Constants::blog,
                'enable' => 1,
                'mandatory' => 1,
                'is_core_field' => 1,
            ];
            $core_headers = CoreFieldFilterSetting::where($conds)->get();

            $core_fields = $validator->getData() ?? '';

            
            foreach($core_headers as $core_header){
                if($core_header->field_name == 'blog_photo'){
                    if(array_key_exists('cover', $core_fields) && empty($core_fields['cover'])){
                        $replace = [];
                        $replace['attribute'] = 'photo';
                        $validator->errors()->add('cover', __('validation__required', $replace));
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
