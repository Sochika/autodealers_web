<?php

namespace Modules\Core\Http\Services;

use App\Config\ps_constant;
use App\Config\ps_url;
use App\Http\Services\PsService;
use Modules\Core\Constants\Constants;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Entities\LanguageString;
use Modules\Core\Transformers\Backend\NoModel\TableField\TableFieldWithKeyResource;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CustomizeUi;
use Illuminate\Support\Facades\DB;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Entities\Language;
use Modules\Core\Entities\Project;

class CoreAndCustomFieldService extends PsService
{

    protected $languageSymbolCol, $unDelete, $customizeUiService, $coreFieldFilterSettingService,$coreFieldFilterModuleNameCol;

    public function __construct(CoreFieldFilterSettingService $coreFieldFilterSettingService, CustomizeUiService $customizeUiService)
    {

        $this->coreFieldFilterSettingService = $coreFieldFilterSettingService;
        $this->customizeUiService = $customizeUiService;

        $this->unDelete = Constants::unDelete;
        $this->publish = Constants::publish;
        $this->unPublish = Constants::unPublish;
        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->enable = Constants::enable;
        $this->disable = Constants::disable;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->code = Constants::tableField;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;
        $this->screenDisplayUiModuleNameCol = ScreenDisplayUiSetting::moduleName;


        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;
        $this->coreFieldFilterTableName = CoreFieldFilterSetting::tableName;
        $this->coreFieldFilterAddedDateCol = CoreFieldFilterSetting::addedDate;
        $this->coreFieldFilterUpdatedDateCol = CoreFieldFilterSetting::updatedDate;
        $this->coreFieldFilterUpdatedUserIdCol = CoreFieldFilterSetting::updatedUserId;
        $this->coreFieldFilterAddedUserIdCol = CoreFieldFilterSetting::addedUserId;
        $this->coreFieldFilterTableIdCol = CoreFieldFilterSetting::tableId;
        $this->coreFieldFilterIsDeleteCol = CoreFieldFilterSetting::isDelete;
        $this->coreFieldFilterIdCol = CoreFieldFilterSetting::id;
        $this->coreFieldFilterPlaceholderCol = CoreFieldFilterSetting::placeholder;
        $this->coreFieldFilterLabelNameCol = CoreFieldFilterSetting::labelName;
        $this->coreFieldFilterUpdatedFlagCol = CoreFieldFilterSetting::updatedFlag;



        $this->customUiIsDelCol = CustomizeUi::isDelete;
        $this->customUiTableName = CustomizeUi::tableName;
        $this->customUiTableIdCol = CustomizeUi::tableId;
        $this->customUiIdCol = CustomizeUi::id;
        $this->customUiNameCol = CustomizeUi::name;
        $this->customUiPlaceholderCol = CustomizeUi::placeholder;
        $this->customUiAddedDateCol = CustomizeUi::addedDate;
        $this->customUiAddedUserIdCol = CustomizeUi::addedUserId;
        $this->customUiUpdatedDateCol = CustomizeUi::updatedDate;
        $this->customUiUpdatedUserIdCol = CustomizeUi::updatedUserId;
        $this->customUiUpdatedFlagCol = CustomizeUi::updatedFlag;

        $this->languageSymbolCol = Language::symbol;

        $this->languageStringTableName = LanguageString::tableName;
        $this->languageStringKeyCol = LanguageString::key;
        $this->languageStringLanguageIdCol = LanguageString::languageId;
        $this->languageStringValueCol = LanguageString::value;
        $this->langStringLanguageIdCol = LanguageString::languageId;

        $this->noContentStatusCode = Constants::noContentStatusCode;
        $this->internalServerErrorStatusCode = Constants::internalServerErrorStatusCode;
        $this->successStatus = Constants::successStatus;
        $this->createdStatusCode = Constants::createdStatusCode;
        $this->forbiddenStatusCode = Constants::forbiddenStatusCode;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;
        $this->okStatusCode = Constants::okStatusCode;



    }

    public function getCoreOrCustomField($id){
        $customField = CustomizeUi::find($id);
        $coreField = CoreFieldFilterSetting::find($id);

        if($customField){
            return $customField;
        }else if($coreField){
            return $coreField;
        }
    }

    public function destroy($id){
        $customField = CustomizeUi::find($id);
        $coreField = CoreFieldFilterSetting::find($id);

        $name = '';

        if($customField){
            $name = $customField->name;
            $customField->is_delete = $this->publish;

            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();
                $returndata['message'] = $customField->name . __('field_soft_delete_sucess');
                redirectBackWithError($returndata);
            }

        }else if($coreField){
            $name = $coreField->label_name;
            $coreField->is_delete = $this->publish;

            $returndata = syncTableFields($coreField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreField->updated_user_id = Auth::user()->id;
                $coreField->update();
                $returndata['message'] = $coreField->name . __('field_soft_delete_sucess');
                redirectBackWithError($returndata);
            }
        }

        
    }

    // ----------------
    public function index($request){
        // check permission

        // search filter
        $conds['searchterm'] = $request->input('search') ?? '';


        $symbol = $request->input('symbol') ?? 'en';

        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

        $tableId = $request->table;
        $customFieldRelations = ['uiTypeId'];

        $languageId = Language::where($this->languageSymbolCol, $symbol )->first()->id;

        if(isset($conds['searchterm']) && $conds['searchterm']){
            $customFields = DB::table($this->customUiTableName)
                        ->where($this->customUiTableIdCol, $tableId)
                        ->where($this->customUiIsDelCol, 0)
                        ->join($this->languageStringTableName, function ($join) use ($conds,$languageId) {
                            $join->on($this->customUiTableName.'.'.$this->customUiPlaceholderCol, '=', $this->languageStringTableName.'.'.$this->languageStringKeyCol)
                                ->where($this->languageStringTableName.'.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where($this->languageStringTableName.'.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->join($this->languageStringTableName.' as lang', function ($join) use ($conds,$languageId){
                            $join->on($this->customUiTableName.'.'.$this->customUiNameCol, '=', 'lang.'.$this->languageStringKeyCol)
                                ->where('lang.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where('lang.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->select($this->languageStringTableName.'.'.$this->languageStringValueCol.' as placeholder', $this->customUiNameCol.' as nameKey', $this->customUiPlaceholderCol.' as placeholderKey', 'lang.'.$this->languageStringValueCol.' as name', $this->customUiTableName.'.'.$this->customUiIdCol, $this->customUiTableName.'.'.$this->customUiAddedDateCol, $this->customUiTableName.'.'.$this->customUiAddedUserIdCol, $this->customUiTableName.'.'.$this->customUiUpdatedDateCol, $this->customUiTableName.'.'.$this->customUiUpdatedUserIdCol, $this->customUiTableName.'.'.$this->customUiUpdatedFlagCol
                        ,DB::raw('ui_type_id,null as field_name,core_keys_id, mandatory,enable, is_delete, module_name, data_type, table_id, project_id, project_name,base_module_name,is_include_in_hideshow,is_show,is_core_field,permission_for_enable_disable,permission_for_delete,permission_for_mandatory,is_show_sorting,ordering,is_show_in_filter'))
                        ->groupBy($this->customUiTableName.'.'.$this->customUiIdCol)
                        ;

            $coreFields = DB::table($this->coreFieldFilterTableName)
                        ->where($this->coreFieldFilterTableIdCol, $tableId)
                        ->where($this->coreFieldFilterIsDeleteCol, 0)
                        ->join($this->languageStringTableName, function ($join) use ($conds,$languageId) {
                            $join->on($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterPlaceholderCol, '=', $this->languageStringTableName.'.'.$this->languageStringKeyCol)
                                ->where($this->languageStringTableName.'.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where($this->languageStringTableName.'.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->join($this->languageStringTableName.' as lang', function ($join) use ($conds,$languageId){
                            $join->on($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterLabelNameCol, '=', 'lang.'.$this->languageStringKeyCol)
                                ->where('lang.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where('lang.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->select($this->languageStringTableName.'.'.$this->languageStringValueCol.' as placeholder', $this->coreFieldFilterLabelNameCol.' as nameKey', $this->coreFieldFilterPlaceholderCol.' as placeholderKey', 'lang.'.$this->languageStringValueCol.' as name', $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterAddedDateCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterAddedUserIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedDateCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedUserIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedFlagCol,
                        DB::raw('null as ui_type_id,field_name, null as core_keys_id, mandatory,enable, is_delete, module_name, data_type, table_id, project_id, project_name,base_module_name,is_include_in_hideshow,is_show,is_core_field,permission_for_enable_disable,permission_for_delete,permission_for_mandatory,is_show_sorting,ordering,is_show_in_filter'))
                        ->groupBy($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterIdCol);

        }else{
            $customFields = DB::table($this->customUiTableName)
                        ->where($this->customUiTableIdCol, $tableId)
                        ->where($this->customUiIsDelCol, 0)
                        ->leftJoin($this->languageStringTableName, function ($join) use ($conds,$languageId) {
                            $join->on($this->customUiTableName.'.'.$this->customUiPlaceholderCol, '=', $this->languageStringTableName.'.'.$this->languageStringKeyCol)
                                ->where($this->languageStringTableName.'.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where($this->languageStringTableName.'.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->leftJoin($this->languageStringTableName.' as lang', function ($join) use ($conds,$languageId){
                            $join->on($this->customUiTableName.'.'.$this->customUiNameCol, '=', 'lang.'.$this->languageStringKeyCol)
                                ->where('lang.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where('lang.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->select($this->languageStringTableName.'.'.$this->languageStringValueCol.' as placeholder', $this->customUiNameCol.' as nameKey', $this->customUiPlaceholderCol.' as placeholderKey', 'lang.'.$this->languageStringValueCol.' as name', $this->customUiTableName.'.'.$this->customUiIdCol, $this->customUiTableName.'.'.$this->customUiAddedDateCol, $this->customUiTableName.'.'.$this->customUiAddedUserIdCol, $this->customUiTableName.'.'.$this->customUiUpdatedDateCol, $this->customUiTableName.'.'.$this->customUiUpdatedUserIdCol, $this->customUiTableName.'.'.$this->customUiUpdatedFlagCol
                        ,DB::raw('ui_type_id,null as field_name,core_keys_id, mandatory,enable, is_delete, module_name, data_type, table_id, project_id, project_name,base_module_name,is_include_in_hideshow,is_show,is_core_field,permission_for_enable_disable,permission_for_delete,permission_for_mandatory,is_show_sorting,ordering,is_show_in_filter'))
                        ->groupBy('psx_customize_ui.id');

            $coreFields = DB::table($this->coreFieldFilterTableName)
                        ->where($this->coreFieldFilterTableIdCol, $tableId)
                        ->where($this->coreFieldFilterIsDeleteCol, 0)
                        ->leftJoin($this->languageStringTableName, function ($join) use ($conds,$languageId) {
                            $join->on($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterPlaceholderCol, '=', $this->languageStringTableName.'.'.$this->languageStringKeyCol)
                                ->where($this->languageStringTableName.'.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where($this->languageStringTableName.'.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->leftJoin($this->languageStringTableName.' as lang', function ($join) use ($conds,$languageId){
                            $join->on($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterLabelNameCol, '=', 'lang.'.$this->languageStringKeyCol)
                                ->where('lang.'.$this->languageStringLanguageIdCol, '=', $languageId)
                                ->where('lang.'.$this->languageStringValueCol, 'like', '%' . $conds['searchterm'] . '%');
                        })
                        ->select($this->languageStringTableName.'.'.$this->languageStringValueCol.' as placeholder', $this->coreFieldFilterLabelNameCol.' as nameKey', $this->coreFieldFilterPlaceholderCol.' as placeholderKey', 'lang.'.$this->languageStringValueCol.' as name', $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterAddedDateCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterAddedUserIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedDateCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedUserIdCol, $this->coreFieldFilterTableName.'.'.$this->coreFieldFilterUpdatedFlagCol,
                            DB::raw('null as ui_type_id,field_name, null as core_keys_id, mandatory,enable, is_delete, module_name, data_type, table_id, project_id, project_name,base_module_name,is_include_in_hideshow,is_show,is_core_field,permission_for_enable_disable,permission_for_delete,permission_for_mandatory,is_show_sorting,ordering,is_show_in_filter'))
                        ->groupBy($this->coreFieldFilterTableName.'.'.$this->coreFieldFilterIdCol);
        }


        $mergeFields = $customFields->unionAll($coreFields);


        // order by
        if (isset($conds['order_by']) && isset($conds['order_type']) && $conds['order_by'] && $conds['order_type']){
            // dd($conds['order_by']);
            if($conds['order_by'] == 'show_in_table'){
                $conds['order_by'] = 'is_include_in_hideshow';
            }
            else if($conds['order_by'] == 'attribute'){
                $conds['order_by'] = 'is_core_field';
            }
            else if($conds['order_by'] == 'enable'){
                $conds['order_by'] = 'enable';
            }
            $mergeFields = $mergeFields->orderBy($conds['order_by'], $conds['order_type']);
        }
        else{
            $conds['order_by']=null;
            $mergeFields = $mergeFields
            ->orderBy('enable', 'desc')
            ->orderBy('name','asc');
        }

        $mergeFields = $mergeFields->paginate($row);

        // dd($mergeFields);

        $fields = TableFieldWithKeyResource::collection($mergeFields);

        $columnAndColumnFilter = $this->takingForColumnAndFilterOption();
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        // $changedObj = $fields;

        if($conds['order_by'])
        {
            $dataArr = [
                // "checkPermission" => $checkPermission,
                "tableId" => $tableId,
                'fields' => $fields,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
            ];
        }
        else
        {
            $dataArr = [
                // "checkPermission" => $checkPermission,
                "tableId" => $tableId,
                'fields' => $fields,
                'search'=>$conds['searchterm'] ,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
            ];
        }


        return $dataArr;

    }

    public function takingForColumnProps($label, $field, $type, $isShowSorting, $ordering){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->field = $field;
        $hideShowCoreAndCustomFieldObj->type = $type;
        $hideShowCoreAndCustomFieldObj->sort = $isShowSorting;
        $hideShowCoreAndCustomFieldObj->ordering = $ordering;
        if ($type !== "Image" && $type !== "MultiSelect" && $type !== "Action"){
            $hideShowCoreAndCustomFieldObj->action = 'Action';
        }

        return $hideShowCoreAndCustomFieldObj;
    }

    public function takingForColumnAndFilterOption(){

        // for table
        $hideShowCoreFieldForColumnArr = [];
        $hideShowCustomFieldForColumnArr = [];

        $showProductCols = [];

        // for eye
        $hideShowFieldForColumnFilterArr = [];

        // for control
        $controlFieldArr = [];
        $controlFieldObj = $this->takingForColumnProps(__('core__be_action'), "action", "Action", false, 0);
        array_push($controlFieldArr, $controlFieldObj);

        $code = $this->code;
        $hiddenForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->hide, $code);
        $shownForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->show, $code);
        $hideShowForCoreAndCustomFields = $shownForCoreAndCustomField->merge($hiddenForCoreAndCustomField);

        foreach ($hideShowForCoreAndCustomFields as $showFields){
            if ($showFields->coreField !== null) {

                $label = $showFields->coreField->label_name;
                $field = $showFields->coreField->field_name;
                $colName = $showFields->coreField->field_name;
                $type = $showFields->coreField->data_type;
                $isShowSorting = $showFields->coreField->is_show_sorting;
                $ordering = $showFields->coreField->ordering;

                $cols = $colName;
                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->coreField->module_name;
                $keyId = $showFields->coreField->id;

                $coreFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type,$isShowSorting, $ordering);
                $coreFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $coreFieldObjForColumnFilter);
                array_push($hideShowCoreFieldForColumnArr, $coreFieldObjForColumnsProps);
                array_push($showProductCols, $cols);

            }if ($showFields->customizeField !== null) {

                $label = $showFields->customizeField->name;
                $uiHaveAttribute = [$this->dropDownUi, $this->radioUi];
                if (in_array($showFields->customizeField->ui_type_id, $uiHaveAttribute)){
                    $field = $showFields->customizeField->core_keys_id."@@name";
                } else {
                    $field = $showFields->customizeField->core_keys_id;
                }
                $type = $showFields->customizeField->data_type;
                $isShowSorting = $showFields->customizeField->is_show_sorting;
                $ordering = $showFields->customizeField->ordering;

                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->customizeField->module_name;
                $keyId = $showFields->customizeField->core_keys_id;

                $customFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type ,$isShowSorting, $ordering);
                $customFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $customFieldObjForColumnFilter);
                array_push($hideShowCustomFieldForColumnArr, $customFieldObjForColumnsProps);

            }
        }

        // for columns props
        $showCoreAndCustomFieldArr = array_merge($hideShowCoreFieldForColumnArr, $controlFieldArr, $hideShowCustomFieldForColumnArr);
        $sortedColumnArr = columnOrdering("ordering", $showCoreAndCustomFieldArr);

        // for eye
        $hideShowCoreAndCustomFieldArr = array_merge($hideShowFieldForColumnFilterArr);

        $dataArr = [
            "arrForColumnProps" => $sortedColumnArr,
            "arrForColumnFilterProps" => $hideShowCoreAndCustomFieldArr,
            "showCoreField" => $showProductCols,
        ];
        return $dataArr;

    }

    public function makeColumnHideShown($request){
        $hideShowFields = $request->value;
//        foreach ($hideShowFields as $hideShowField){
//            $ScreenDisplayUiSetting = ScreenDisplayUiSetting::find($hideShowField[$this->screenDisplayUiIdCol]);
//            $ScreenDisplayUiSetting->is_show = $hideShowField['hidden'] ? $this->hide : $this->show;
//            $ScreenDisplayUiSetting->update();
//        }
        foreach ($hideShowFields as $hideShowField){
            $hideShowFieldData[] = [
                $this->screenDisplayUiIdCol => $hideShowField['id'],
                $this->screenDisplayUiIsShowCol => $hideShowField['hidden'] ? $this->hide : $this->show,
            ];
        }
        ScreenDisplayUiSetting::upsert(
            $hideShowFieldData,
            [$this->screenDisplayUiIdCol], [$this->screenDisplayUiIsShowCol]
        );
    }

    public function hiddenShownForCoreAndCustomField($isShown, $code){
        $hiddenShownForFields = ScreenDisplayUiSetting::with(['customizeField' => function ($q){
            $q->where($this->customUiIsDelCol, $this->unDelete);
        }, 'coreField'=> function($q){
            $q->where($this->coreFieldFilterModuleNameCol, $this->code);
        }])
            ->where($this->coreFieldFilterModuleNameCol, $code)
            ->where($this->screenDisplayUiIsShowCol, $isShown)
            ->get();
        return $hiddenShownForFields;
    }

    public function takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->id = $id;
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->key = $field;
        $hideShowCoreAndCustomFieldObj->hidden = $hidden;
        $hideShowCoreAndCustomFieldObj->module_name = $moduleName;
        $hideShowCoreAndCustomFieldObj->key_id = $keyId;

        return $hideShowCoreAndCustomFieldObj;
    }

    public function makePublishOrUnpublish($request){


        if($request->isCoreField == '1'){
            $coreFields = $this->coreFieldFilterSettingService->getCoreField($request->id);
            if($coreFields->enable == $this->publish){
                $coreFields->enable = $this->unPublish;
            }else{
                $coreFields->enable = $this->publish;
            }
            $returndata = syncTableFields($coreFields);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreFields->updated_user_id = Auth::user()->id;
                $coreFields->update();
                redirectBackWithError($returndata);
            }

        }else{
            $customField = $this->customizeUiService->getCustomField($request->id);
            if($customField->enable == $this->publish){
                $customField->enable = $this->unPublish;
            }else{
                $customField->enable = $this->publish;
            }
            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();
                redirectBackWithError($returndata);
            }
        }

    }

    public function handleIsShowSorting($request){

        if($request->isCoreField == '1'){
            $coreFields = $this->coreFieldFilterSettingService->getCoreField($request->id);
            if($coreFields->is_show_sorting == $this->publish){
                $coreFields->is_show_sorting = $this->unPublish;
            }else{
                $coreFields->is_show_sorting = $this->publish;
            }

            

            $returndata = syncTableFields($coreFields);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreFields->updated_user_id = Auth::user()->id;
                $coreFields->update();
                redirectBackWithError($returndata);
            }
            
        }else{
            $customField = $this->customizeUiService->getCustomField($request->id);
            if($customField->is_show_sorting == $this->publish){
                $customField->is_show_sorting = $this->unPublish;
            }else{
                $customField->is_show_sorting = $this->publish;
            }
            

            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();
                redirectBackWithError($returndata);
            }
        }

    }

    public function makeMandatoryOrOptional($request){
        
        if($request->isCoreField == '1'){
            $coreFields = $this->coreFieldFilterSettingService->getCoreField($request->id);
            if($coreFields->mandatory == $this->publish){
                $coreFields->mandatory = $this->unPublish;
            }else{
                $coreFields->mandatory = $this->publish;
            }
            

            $returndata = syncTableFields($coreFields);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreFields->updated_user_id = Auth::user()->id;
                $coreFields->update();
                // dd($returndata);
                redirectBackWithError($returndata);
            }

        }else{
            $customField = $this->customizeUiService->getCustomField($request->id);
            if($customField->mandatory == $this->publish){
                $customField->mandatory = $this->unPublish;
            }else{
                $customField->mandatory = $this->publish;
            }
            

            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();
                // dd($returndata);
                redirectBackWithError($returndata);
            }

            // $customField->update();
        }
    }

    public function handleOrdering($request){

        if($request->isCoreField == '1'){
            $coreFields = $this->coreFieldFilterSettingService->getCoreField($request->id);
            $coreFields->ordering = $request->ordering;

            $returndata = syncTableFields($coreFields);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreFields->updated_user_id = Auth::user()->id;
                $coreFields->update();
                redirectBackWithError($returndata);
            }

        }else{
            $customField = $this->customizeUiService->getCustomField($request->id);
            $customField->ordering = $request->ordering;
            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();
                redirectBackWithError($returndata);
            }
        }
    }

    public function isIncludedAndIsShow($request){

        if($request->isCoreField == '1'){
            $coreFields = $this->coreFieldFilterSettingService->getCoreField($request->id);
            $coreFields->is_include_in_hideshow = $request->isIncluded;
            $coreFields->is_show = $request->isShow;
            $coreFields->is_show_in_filter = $request->isShowInFilter;

            $returndata = syncTableFields($coreFields);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $coreFields->updated_user_id = Auth::user()->id;
                $coreFields->update();
                if ($coreFields->is_include_in_hideshow == 1){

                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $coreFields->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $coreFields->field_name)
                                                ->first();
    
                    if($screenDisplayUiSetting){
                        // save in screen_display_ui_setting
                        $screenDisplayUiSetting->is_show = $coreFields->is_show;
                        $screenDisplayUiSetting->save();
                    }else{
                        // save in screen_display_ui_setting
                        $screenDisplay = new ScreenDisplayUiSetting();
                        $screenDisplay->module_name = $coreFields->module_name;
                        $screenDisplay->key = $coreFields->field_name;
                        $screenDisplay->is_show = $coreFields->is_show;
                        $screenDisplay->added_user_id = Auth::id();
                        $screenDisplay->save();
                    }
    
                }else{
                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $coreFields->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $coreFields->field_name)
                                                ->first();
                    $screenDisplayUiSetting->delete();
                }

                redirectBackWithError($returndata);
            }

        }else{
            $customField = $this->customizeUiService->getCustomField($request->id);
            $customField->is_include_in_hideshow = $request->isIncluded;
            $customField->is_show = $request->isShow;
            $customField->is_show_in_filter = $request->isShowInFilter;
            
            $returndata = syncTableFields($customField);
            if($returndata['status'] == 'error'){
                redirectBackWithError($returndata);
            }
            else{
                $customField->updated_user_id = Auth::user()->id;
                $customField->update();

                if ($customField->is_include_in_hideshow == 1){

                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $customField->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $customField->core_keys_id)
                                                ->first();

                    if($screenDisplayUiSetting){
                        // save in screen_display_ui_setting
                        $screenDisplayUiSetting->is_show = $customField->is_show;
                        $screenDisplayUiSetting->save();
                    }else{
                        // save in screen_display_ui_setting
                        $screenDisplay = new ScreenDisplayUiSetting();
                        $screenDisplay->module_name = $customField->module_name;
                        $screenDisplay->key = $customField->core_keys_id;
                        $screenDisplay->is_show = $customField->is_show;
                        $screenDisplay->added_user_id = Auth::id();
                        $screenDisplay->save();
                    }

                }else{
                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $customField->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $customField->core_keys_id)
                                                ->first();
                    $screenDisplayUiSetting->delete();
                }

                redirectBackWithError($returndata);
            }
        }
    }

    public function syncFieldFromApi($request){
        DB::beginTransaction();

        try {

            $project = Project::first();
            if($project->id != $request->project_id){
                DB::rollBack();
                return responseMsgApi('overwrite', $this->badRequestStatusCode);
            }

            $projectId = $request->project_id;
            $tableId = $request->table_id;

            
            if($request->is_core_field != '1'){
                if($request->is_new == '1'){
                    $clientCustomizeUi = new CustomizeUi();
                    $clientCustomizeUi->id = $request->id;
                    $clientCustomizeUi->name = $request->core_keys_id . "_" . $request->id . "_name";
                    $clientCustomizeUi->placeholder = $request->core_keys_id . "_" . $request->id . "_placeholder";
                    $clientCustomizeUi->table_id = $request->table_id;
                    $clientCustomizeUi->project_id = $request->project_id;
                    $clientCustomizeUi->core_keys_id = $request->core_keys_id;
                    $clientCustomizeUi->ui_type_id = $request->ui_type_id ?? null;
                    $clientCustomizeUi->mandatory = $request->mandatory;
                    $clientCustomizeUi->enable = $request->is_enable ?? 1;
                    $clientCustomizeUi->is_delete = $request->is_delete;
                    $clientCustomizeUi->base_module_name = $request->base_module_name;
                    $clientCustomizeUi->module_name = $request->module_name;
                    $clientCustomizeUi->data_type = $request->data_type;
                    $clientCustomizeUi->is_core_field = $request->is_core_field;
                    $clientCustomizeUi->is_show_in_filter = $request->is_show_in_filter;
                    $clientCustomizeUi->is_include_in_hideshow = $request->is_include_in_hideshow;
                    $clientCustomizeUi->is_show = $request->is_show;
                    $clientCustomizeUi->is_show_sorting = $request->is_show_sorting;
                    $clientCustomizeUi->ordering = $request->ordering;
                    $clientCustomizeUi->permission_for_enable_disable = $request->permission_for_enable_disable ?? 1;
                    $clientCustomizeUi->permission_for_delete = $request->permission_for_delete ?? 1;
                    $clientCustomizeUi->permission_for_mandatory = $request->permission_for_mandatory ?? 1;
                    $clientCustomizeUi->updated_user_id = Auth::user()->id ?? '1';
                    $clientCustomizeUi->save();

                     // will added for another languages start
                    $backend_languages = Language::all();
                    foreach ($backend_languages as $backend_language){
                        
                        $backend_language_string = new LanguageString();
                        $backend_language_string->key = $clientCustomizeUi->name;
                        $backend_language_string->value = $request->name_str;
                        $backend_language_string->language_id = $backend_language->id;
                        $backend_language_string->added_user_id = Auth::user()->id ?? '1';
                        $backend_language_string->save();

                        $backend_language_string = new LanguageString();
                        $backend_language_string->key = $clientCustomizeUi->placeholder;
                        $backend_language_string->value = $request->placeholder_str;
                        $backend_language_string->language_id = $backend_language->id;
                        $backend_language_string->added_user_id = Auth::user()->id ?? '1';
                        $backend_language_string->save();
                        

                        // update json file
                        $fileName = $backend_language->symbol . '.json';
                        $lang_str = LanguageString::where($this->langStringLanguageIdCol, $backend_language->id)->get();
                        generateLangStrJson($fileName, $lang_str);
                    }

                }else{
                    $clientCustomizeUi = CustomizeUi::where('id', $request->id)->where('table_id',$tableId)->where('project_id',$projectId)->first();
                    if(!$clientCustomizeUi){
                        DB::rollBack();
                        return responseMsgApi('overwrite', $this->badRequestStatusCode);
                    }
                    $clientCustomizeUi->core_keys_id = $request->core_keys_id;
                    $clientCustomizeUi->ui_type_id = $request->ui_type_id ?? null;
                    $clientCustomizeUi->mandatory = $request->mandatory;
                    $clientCustomizeUi->enable = $request->is_enable;
                    $clientCustomizeUi->is_delete = $request->is_delete;
                    $clientCustomizeUi->module_name = $request->module_name;
                    $clientCustomizeUi->base_module_name = $request->base_module_name;
                    $clientCustomizeUi->data_type = $request->data_type;
                    $clientCustomizeUi->is_core_field = $request->is_core_field;
                    $clientCustomizeUi->is_show_in_filter = $request->is_show_in_filter;
                    $clientCustomizeUi->is_include_in_hideshow = $request->is_include_in_hideshow;
                    $clientCustomizeUi->is_show = $request->is_show;
                    $clientCustomizeUi->is_show_sorting = $request->is_show_sorting;
                    $clientCustomizeUi->ordering = $request->ordering;
                    $clientCustomizeUi->permission_for_enable_disable = $request->permission_for_enable_disable;
                    $clientCustomizeUi->permission_for_delete = $request->permission_for_delete;
                    $clientCustomizeUi->permission_for_mandatory = $request->permission_for_mandatory;
                    $clientCustomizeUi->updated_user_id = Auth::user()->id ?? '1';
                    $clientCustomizeUi->update();
                }
                if ($clientCustomizeUi->is_include_in_hideshow == 1){

                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $clientCustomizeUi->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $clientCustomizeUi->core_keys_id)
                                                ->first();

                    if($screenDisplayUiSetting){
                        // save in screen_display_ui_setting
                        $screenDisplayUiSetting->is_show = $clientCustomizeUi->is_show;
                        $screenDisplayUiSetting->save();
                    }else{
                        // save in screen_display_ui_setting
                        $screenDisplay = new ScreenDisplayUiSetting();
                        $screenDisplay->module_name = $clientCustomizeUi->module_name;
                        $screenDisplay->key = $clientCustomizeUi->core_keys_id;
                        $screenDisplay->is_show = $clientCustomizeUi->is_show;
                        $screenDisplay->added_user_id = Auth::id();
                        $screenDisplay->save();
                    }

                }else{
                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $clientCustomizeUi->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $clientCustomizeUi->core_keys_id)
                                                ->first();
                    $screenDisplayUiSetting->delete();
                }


                
            }else{
                if($request->is_new == '1'){
                    $coreField = new CoreFieldFilterSetting();
                    $coreField->id = $request->id;
                    $coreField->label_name = $request->core_keys_id . "_" . $request->id . "_name";
                    $coreField->placeholder = $request->core_keys_id . "_" . $request->id . "_placeholder";
                    $coreField->table_id = $request->table_id;
                    $coreField->project_id = $request->project_id;
                    $coreField->field_name = $request->core_keys_id;
                    $coreField->mandatory = $request->mandatory;
                    $coreField->enable = $request->is_enable;
                    $coreField->is_delete = $request->is_delete;
                    $coreField->module_name = $request->module_name;
                    $coreField->base_module_name = $request->base_module_name;
                    $coreField->data_type = $request->data_type;
                    $coreField->is_core_field = $request->is_core_field;
                    $coreField->is_show_in_filter = $request->is_show_in_filter;
                    $coreField->is_include_in_hideshow = $request->is_include_in_hideshow;
                    $coreField->is_show = $request->is_show;
                    $coreField->is_show_sorting = $request->is_show_sorting;
                    $coreField->ordering = $request->ordering;
                    $coreField->permission_for_enable_disable = $request->permission_for_enable_disable;
                    $coreField->permission_for_delete = $request->permission_for_delete;
                    $coreField->permission_for_mandatory = $request->permission_for_mandatory;
                    $coreField->updated_user_id = Auth::user()->id ?? '1';
                    $coreField->save();
                }else{
                    $coreField = CoreFieldFilterSetting::where('id', $request->id)->where('table_id',$tableId)->where('project_id',$projectId)->first();
                    if(!$coreField){
                        DB::rollBack();
                        return responseMsgApi('overwrite', $this->badRequestStatusCode);
                    }
                    $coreField->field_name = $request->core_keys_id;
                    $coreField->mandatory = $request->mandatory;
                    $coreField->enable = $request->is_enable;
                    $coreField->is_delete = $request->is_delete;
                    $coreField->module_name = $request->module_name;
                    $coreField->base_module_name = $request->base_module_name;
                    $coreField->data_type = $request->data_type;
                    $coreField->is_core_field = $request->is_core_field;
                    $coreField->is_show_in_filter = $request->is_show_in_filter;
                    $coreField->is_include_in_hideshow = $request->is_include_in_hideshow;
                    $coreField->is_show = $request->is_show;
                    $coreField->is_show_sorting = $request->is_show_sorting;
                    $coreField->ordering = $request->ordering;
                    $coreField->permission_for_enable_disable = $request->permission_for_enable_disable;
                    $coreField->permission_for_delete = $request->permission_for_delete;
                    $coreField->permission_for_mandatory = $request->permission_for_mandatory;
                    $coreField->updated_user_id = Auth::user()->id ?? '1';
                    $coreField->update();
                }
                if ($coreField->is_include_in_hideshow == 1){

                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $coreField->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $coreField->field_name)
                                                ->first();
    
                    if($screenDisplayUiSetting){
                        // save in screen_display_ui_setting
                        $screenDisplayUiSetting->is_show = $coreField->is_show;
                        $screenDisplayUiSetting->save();
                    }else{
                        // save in screen_display_ui_setting
                        $screenDisplay = new ScreenDisplayUiSetting();
                        $screenDisplay->module_name = $coreField->module_name;
                        $screenDisplay->key = $coreField->field_name;
                        $screenDisplay->is_show = $coreField->is_show;
                        $screenDisplay->added_user_id = Auth::id();
                        $screenDisplay->save();
                    }
    
                }else{
                    $screenDisplayUiSetting = ScreenDisplayUiSetting::where($this->screenDisplayUiModuleNameCol, $coreField->module_name)
                                                ->where($this->screenDisplayUiKeyCol, $coreField->field_name)
                                                ->first();
                    $screenDisplayUiSetting->delete();
                }

                
            }
            
            DB::commit();

            return responseMsgApi('success', $this->okStatusCode, $this->successStatus);
        } catch (\Throwable $e) {
            DB::rollBack();
            return responseMsgApi($e->getMessage(), $this->internalServerErrorStatusCode);
        }
    }

}
