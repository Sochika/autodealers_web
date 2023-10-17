<?php

namespace Modules\Blog\Http\Controllers\Backend\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Illuminate\Support\Facades\Validator;
use Modules\Blog\Http\Services\BlogService;
use Modules\Blog\Http\Requests\StoreBlogRequest;
use Modules\Blog\Http\Requests\UpdateBlogRequest;
use Modules\Core\Http\Services\CoreFieldFilterSettingService;

class BlogController extends Controller
{
    const parentPath = "blog/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "blog.index";
    const createRoute = "blog.create";
    const editRoute = "blog.edit";

    protected $blogService, $successFlag, $dangerFlag, $code, $coreFieldFilterSettingService;

    public function __construct(BlogService $blogService, CoreFieldFilterSettingService $coreFieldFilterSettingService)
    {
        $this->blogService = $blogService;
        $this->coreFieldFilterSettingService = $coreFieldFilterSettingService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->code = Constants::blog;
    }

    public function index(Request $request)
    {
        $dataArr = $this->blogService->index(self::indexRoute,$request);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::indexPath, $dataArr);
    }

    public function create(Request $request)
    {
        $dataArr = $this->blogService->create(self::indexRoute);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::createPath, $dataArr);
    }

    public function store(Request $request)
    {
        // validation start
        $errors = validateForCustomField($this->code,$request->blog_relation);

        $coreFieldsIds = [];
        $errors = [];

        $cond['module_name'] = $this->code;
        $cond['mandatory'] = 1;
        $cond['is_core_field'] = 1;

        $coreFields = $this->coreFieldFilterSettingService->getCoreFieldsWithConds($cond);

        // $coreFields = CoreFieldFilterSetting::where('module_name',)->where('mandatory',1)->where('is_core_field',1)->get();
        foreach ($coreFields as $key => $value){
            if (str_contains($value->field_name,"@@")) {
                $originFieldName = strstr($value->field_name,"@@",true);
            } else {
                $originFieldName = $value->field_name;
            }
            array_push($coreFieldsIds,$originFieldName);

        }

        $validationArr = [];

        if(in_array('name',$coreFieldsIds)){
            $validationArr['name'] = 'required';
        }

        if(in_array('location_city_id',$coreFieldsIds)){
            $validationArr['location_city_id'] = 'required';
        }


        if(in_array('description',$coreFieldsIds)){
            $validationArr['description'] = 'required';
        }


        if(in_array('blog_photo',$coreFieldsIds)){
            $validationArr['cover'] = 'nullable|sometimes|image';
        }

        // change custom attribute if required start
        $attributes['location_city_id'] = "Location City";
        // change custom attribute if required end


        $validator = Validator::make($request->all(),$validationArr,[], $attributes);

        if ($validator->fails()) {
            return redirect()->route(self::createRoute)->with('blog_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route(self::createRoute)->with('blog_relation_errors',$errors);
            }
        }
        // validation end

        $blog = $this->blogService->store($request);

        // if have error
        if (isset($blog['error'])){
            $msg = $blog['error'];
            return redirectView(self::createRoute, $msg, $this->dangerFlag);
        }

        return redirectView(self::indexRoute, $blog);
    }

    public function edit($id)
    {
        $dataArr = $this->blogService->edit($id,self::indexRoute);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::editPath, $dataArr);
    }

    public function update(Request $request, $id)
    {
        // validation start
        $errors = validateForCustomField($this->code,$request->blog_relation);

        $coreFieldsIds = [];
        $errors = [];

        $cond['module_name'] = $this->code;
        $cond['mandatory'] = 1;
        $cond['is_core_field'] = 1;

        $coreFields = $this->coreFieldFilterSettingService->getCoreFieldsWithConds($cond);

        // $coreFields = CoreFieldFilterSetting::where('module_name',)->where('mandatory',1)->where('is_core_field',1)->get();
        foreach ($coreFields as $key => $value){
            if (str_contains($value->field_name,"@@")) {
                $originFieldName = strstr($value->field_name,"@@",true);
            } else {
                $originFieldName = $value->field_name;
            }
            array_push($coreFieldsIds,$originFieldName);

        }

        $validationArr = [];

        if(in_array('name',$coreFieldsIds)){
            $validationArr['name'] = 'required';
        }

        if(in_array('location_city_id',$coreFieldsIds)){
            $validationArr['location_city_id'] = 'required';
        }


        if(in_array('description',$coreFieldsIds)){
            $validationArr['description'] = 'required';
        }


        if(in_array('blog_photo',$coreFieldsIds)){
            $validationArr['cover'] = 'nullable|sometimes|image';
        }

        // change custom attribute if required start
        $attributes['location_city_id'] = "Location City";
        // change custom attribute if required end


        $validator = Validator::make($request->all(),$validationArr,[], $attributes);

        if ($validator->fails()) {
            return redirect()->route(self::editRoute, $id)->with('blog_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route(self::editRoute, $id)->with('blog_relation_errors',$errors);
            }
        }
        // validation end

        $blog = $this->blogService->update($id, $request);

        // if have error
        // if ($blog){
        //     $msg = $blog;
        //     return redirectView(self::indexRoute, $msg, $this->dangerFlag, $id);
        // }
        if (isset($blog['error'])){
            $msg = $blog['error'];
            return redirectView(self::editRoute, $msg, $this->dangerFlag, $id);
        }

        return redirectView(self::indexRoute, $blog);
    }

    public function destroy($id)
    {
        $dataArr = $this->blogService->destroy($id);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){

        $this->blogService->makePublishOrUnpublish($id);

        // $msg = 'The status of blog row has been updated successfully.';
        $msg = __('core__be_status_updated');
        return redirectView(self::indexRoute, $msg);

    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];
        $this->blogService->makeColumnHideShown($request);

        // $msg = 'ScreenDisplay UiSetting is updated.';
        $msg = __('core__be_screen_display_ui_updated');
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }
}
