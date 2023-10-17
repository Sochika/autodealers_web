<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\About;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Illuminate\Support\Facades\Validator;
use Modules\Core\Http\Services\AboutService;
use Modules\Core\Http\Requests\StoreAboutRequest;
use Modules\Core\Http\Requests\UpdateAboutRequest;
use Modules\Core\Http\Services\CoreFieldFilterSettingService;

class AboutController extends Controller
{
    const parentPath = "about/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "about.index";
    const createRoute = "about.create";
    const editRoute = "about.edit";

    protected $aboutService, $successFlag, $dangerFlag, $code, $coreFieldFilterSettingService;

    public function __construct(AboutService $aboutService, CoreFieldFilterSettingService $coreFieldFilterSettingService)
    {
        $this->aboutService = $aboutService;
        $this->coreFieldFilterSettingService = $coreFieldFilterSettingService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->code = Constants::about;
    }

    public function index()
    {

        $dataArr = $this->aboutService->index(self::indexRoute);
        //return $dataArr;
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }else {

            if(empty($dataArr['about'])){
                return renderView(self::createPath,$dataArr);
            }
            return renderView(self::editPath, $dataArr);

       }


    }

    public function store(StoreAboutRequest $request)
    {
        $about = $this->aboutService->create($request);

        // if have error
        if ($about){
            $msg = $about;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'About has been updated successfully.';
        $msg = __('core__be_about_updated');
        return redirectView(self::indexRoute, $msg);
    }

    public function update(Request $request, $id)
    {
        // echo json_encode($request->all());echo json_encode($id);exit;
        // return $request;
        // dd($request);

        // validation start
        $errors = validateForCustomField($this->code,$request->about_relation);

        $coreFieldsIds = [];
        $errors = [];

        $cond['module_name'] = $this->code;
        $cond['mandatory'] = 1;
        $cond['is_core_field'] = 1;

        $coreFields = $this->coreFieldFilterSettingService->getCoreFieldsWithConds($cond);

        foreach ($coreFields as $key => $value){
            if (str_contains($value->field_name,"@@")) {
                $originFieldName = strstr($value->field_name,"@@",true);
            } else {
                $originFieldName = $value->field_name;
            }
            array_push($coreFieldsIds,$originFieldName);

        }

        $validationArr = [];

        if(in_array('about_title',$coreFieldsIds)){
            $validationArr['about_title'] = 'required|min:3,';
        }

        if(in_array('about_cover',$coreFieldsIds)){
            $validationArr['about_cover'] = 'nullable|sometimes|image';
        }

        if(in_array('about_email',$coreFieldsIds)){
            $validationArr['about_email'] = 'nullable|sometimes|email';
        }

        // change custom attribute if required start
        $attributes['about_title'] = "Title";
        $attributes['about_cover'] = "Cover";
        $attributes['about_email'] = "Email";
        // change custom attribute if required end

        $validator = Validator::make($request->all(),$validationArr,[], $attributes);

        if ($validator->fails()) {
            return redirect()->route(self::indexRoute, $id)->with('about_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route(self::indexRoute, $id)->with('about_relation_errors',$errors);
            }
        }

        // validation end

        $about = $this->aboutService->update($id,$request);

        // if have error
        if ($about){
            $msg = $about;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'About has been updated successfully.';
        $msg = __('core__be_about_updated');
        return redirectView(self::indexRoute, $msg);
    }
}
