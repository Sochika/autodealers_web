<?php

namespace App\Http\Middleware;

use App\Config\ps_url;
use Inertia\Middleware;
use App\Config\ps_constant;
use Illuminate\Http\Request;
use App\Http\Services\PsService;
use Modules\Core\Entities\Project;
use Modules\Core\Entities\Language;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Modules\Core\Entities\CoreImage;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\SystemCode;
use Laravel\Sanctum\PersonalAccessToken;
use Modules\Core\Entities\CoreMenuGroup;

use Modules\Core\Entities\MobileSetting;
use Modules\Core\Entities\BackendSetting;
use Modules\Core\Entities\LanguageString;
use Modules\Core\Entities\FrontendSetting;
use Modules\Core\Entities\CoreSubMenuGroup;
use Modules\Core\Entities\ActivatedFileName;
use Modules\Core\Entities\CheckVersionUpdate;
use Modules\Core\Entities\BuilderAppInfoCache;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $route = Route::current();
        $name = $route->getName();
        $psService = new PsService();
        $folder_path_uploads= 'storage/' .Constants::folderPath. '/uploads';
        $folder_path_thumbnail1x= 'storage/' .Constants::folderPath. '/thumbnail';
        $folder_path_thumbnail2x= 'storage/' .Constants::folderPath. '/thumbnail2x';
        $folder_path_thumbnail3x='storage/' .Constants::folderPath. '/thumbnail3x';

        $backendSetting = BackendSetting::first();
        $mobileSetting = MobileSetting::first();
        $frontendSetting = FrontendSetting::select('firebase_web_push_key_pair', 'firebase_config')->first();

        $firebaseConfig = new \stdClass();
        $firebaseConfig->apiKey = '000000000000000000000000000000000000000';
        $firebaseConfig->authDomain = 'flutter-buy-and-sell.firebaseapp.com';
        $firebaseConfig->databaseURL = 'https://flutter-buy-and-sell.firebaseio.com';
        $firebaseConfig->projectId = 'flutter-buy-and-sell';
        $firebaseConfig->storageBucket = 'flutter-buy-and-sell.appspot.com';
        $firebaseConfig->messagingSenderId = '000000000000';
        $firebaseConfig->appId = '1:000000000000:web:0000000000000000000000';
        $firebaseConfig->measurementId = 'G-0000000000';

        $firebaseConfig = json_encode($firebaseConfig);
        $webPushKey = $frontendSetting->firebase_web_push_key_pair;

        $firebaseConfigStr = $frontendSetting->firebase_config;
        if($frontendSetting->firebase_config == null || $frontendSetting->firebase_config == ''){
            $firebaseConfigStr = $firebaseConfig;
        }else{

            $firebaseConfigObj = json_decode($firebaseConfigStr);
            if (!is_object($firebaseConfigObj) || !isset($firebaseConfigObj->apiKey)) {
                $firebaseConfigStr = $firebaseConfig;
            }
        }


        // try{
        //     $checkingVersionUpdate = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkingVersionUpdate, "&project_id=".getProjectId());
        //     if(!empty($checkingVersionUpdate->status) || empty($checkingVersionUpdate)){
        //         // dd($checkingVersionUpdate);
        //         $syncAble = 0;
        //     } else {
        //         $syncAble = $checkingVersionUpdate?->syncAble;
        //     }
        // }
        // catch(\Throwable $e){
        //     $syncAble = 0;
        // }

        if(Schema::hasTable('psx_check_version_updates')){
            $checkVersionUpdate = CheckVersionUpdate::first();
        } else {
            $checkVersionUpdate = null;
        }

        $project = Project::first();
        $builderToken = "builderToken";
        $personalAccessTokens = PersonalAccessToken::where('abilities','like','%'.$builderToken.'%')->pluck('token')->toArray();

        if(!empty($project->ps_license_code) && !empty($project->api_key) && dateDiff() && !empty($project->first_time_sync)){
            try{
                $builderAppInfo = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::builderAppInfo,
                    'project_id='.$project->id.
                    '&project_url='.$project->project_url.
                    '&project_code='.$project->project_code
                );
                if(!empty($personalAccessTokens)){
                    $isConnected = 0;
                    foreach($personalAccessTokens as $personalAccessToken){
                        $tokensMatch  = hash_equals($personalAccessToken, hash('sha256',$builderAppInfo->token)) ?? 1;
                        if($tokensMatch){
                            $isConnected = 1;
                        }
                    }
                }else{
                    $isConnected = 0;
                }
                $builderAppInfo->isConnected = $isConnected;
                updateBuilderAppInfoCache($builderAppInfo);
            }catch(\Throwable $e){
                $builderAppInfo = null;
            }

        }else if(!empty($project->ps_license_code) && !empty($project->api_key) && !dateDiff() && !empty($project->first_time_sync)){
            $builderAppInfoCache = BuilderAppInfoCache::first();
            if(isset($builderAppInfoCache)){
                $cache = json_decode($builderAppInfoCache->cached_data);
                $builderAppInfo = new \stdClass();
                $versionCode = new \stdClass();
                $versionCode->version_code = $cache->versionCode;
                $builderAppInfo->isConnected = $cache->isConnected;
                $builderAppInfo->isProjectChanged = $cache->isProjectChanged;
                $builderAppInfo->latestVersion = $versionCode;
                $builderAppInfo->isValid = $cache->isValid;
                $builderAppInfo->syncAble = $cache->syncAble;
            }else{
                $builderAppInfo = null;
            }
        }else{
            $builderAppInfo = null;
        }

        return array_merge(parent::share($request), [

            // "checkingVersionUpdate" => $syncAble,
            "checkVersionUpdate" => $checkVersionUpdate ? $checkVersionUpdate : null,
            "builderAppInfo" => $builderAppInfo,
            "isSubCategoryOn" => $mobileSetting->is_show_subcategory,

            "firebaseConfig" => $firebaseConfigStr,
            "webPushKey" => $webPushKey,
            "canAccessAdminPanel" => checkForDashboardPermission(),
            "langStatus" => session('langStatus'),
            'dateFormat' => $backendSetting->date_format,
            'mapKey' => $backendSetting->map_key,
            'systemCode2' => $psService->getSystemCode(),
            'backendSetting' => $backendSetting,
            'mobileSetting' => $mobileSetting,
            'activatedFileName' => ActivatedFileName::first(),
            'hasError' => session('hasError'),
            'message' => session('message'),
            'currentRouteName' => Route::currentRouteName(),
            'purchaseCodeOrUrlNotSame' => session('purchaseCodeOrUrlNotSame'),
            'builderApiOverwrite' => session('builderApiOverwrite'),
            'replace_status' => session('replace_status'),
            'replace_message' => session('replace_message'),
            'zipFileName' => session('zipFileName') ? session('zipFileName') : session('zipFileName2'),
            'selectedZipFileName' => session('selectedZipFileName'),
            'logMessages' => session('logMessages'),
            'downloadStatus' => session('downloadStatus'),
            'activateStatus' => session('activateStatus'),
            'autoSyncStatus' => session('autoSyncStatus'),
            'autoSyncMessage' => session('autoSyncMessage'),
            'project' => $project,
            'purchased_code' => session('purchased_code') ? session('purchased_code') : '',
            'currentRoute' => $name,
            'defaultProfileImg' => asset('/images/assets/default_profile.png'),
            'authUser' => Auth::user(),
            'status' => session('status') ? session('status') : '',
            'product_relation_errors' => session('product_relation_errors') ? session('product_relation_errors') : '',
            'user_relation_errors' => session('user_relation_errors') ? session('user_relation_errors') : '',
            'city_relation_errors' => session('city_relation_errors') ? session('city_relation_errors') : '',
            'menuGroups' => CoreMenuGroup::where('is_show_on_menu',1)->with('sub_menu_group')->has('sub_menu_group.module')->orderBy('ordering', 'asc')->get(),
            'subMenuGroups' => CoreSubMenuGroup::with('module')->whereNull('core_menu_group_id')->orderBy('ordering', 'asc')->get(),
            'languages' => Language::get(),
            'importSuccessMsg' => session('importSuccessMsg'),
            'diffIds' => session('diffIds'),
            'importedFileName' => session('importedFileName'),
            'recentImportedFileName' => session('recentImportedFileName'),
            'baseProjectNotSameMsg' => session('baseProjectNotSameMsg'),
            'baseProjectSameMsg' => session('baseProjectSameMsg'),
            'backendLogo' => CoreImage::where('img_type', 'backend-logo')->first(),
            'favIcon' => CoreImage::where('img_type', 'fav-icon')->first(),
            'uploadUrl' => asset($folder_path_uploads),
            'thumb1xUrl' => asset($folder_path_thumbnail1x),
            'thumb2xUrl' => asset($folder_path_thumbnail2x),
            'thumb3xUrl' => asset($folder_path_thumbnail3x),
            'sysImageUrl' => asset('images/assets'),
            'defaultBuilderToken' => session('defaultBuilderToken'),
            'csrf' => csrf_token(),
            'can' => [
                'createItem' => Auth::check() ? auth()->user()->can('create-item') : '',
                'createProduct' => Auth::check() ? auth()->user()->can('create-product') : '',
               'createSubcategory' => Auth::check() ? auth()->user()->can('create-subCategory') : '',
                'createCategory' => Auth::check() ? auth()->user()->can('create-category') : '',
                'createUser' => Auth::check() ? auth()->user()->can('create-user') : '',
                'createRole' => Auth::check() ? auth()->user()->can('create-role') : '',
                'createPayment' => Auth::check() ? auth()->user()->can('create-payment') : '',

                'createAvailableCurrency' => Auth::check() ? auth()->user()->can('create-availableCurrency') : '',
                'createLanguage' => Auth::check() ? auth()->user()->can('create-language') : '',
                'createLanguageString' => Auth::check() ? auth()->user()->can('create-languageString') : '',
                'createBlog' => Auth::check() ? auth()->user()->can('create-blog') : '',
                'createPhoneCountryCode' => Auth::check() ? auth()->user()->can('create-phoneCountryCode') : '',
                'createMobileSetting' => Auth::check() ? auth()->user()->can('create-mobileSetting') : '',
                'createApiToken' => Auth::check() ? auth()->user()->can('create-apiToken') : '',
                'createCurrency' => Auth::check() ? auth()->user()->can('create-currency') : '',
                'createCoreMenu' => Auth::check() ? auth()->user()->can('create-coreMenuGroup') : '',
                'createSystemConfig' => Auth::check() ? auth()->user()->can('create-systemConfig') : '',
                'createCoreSubMenu' => Auth::check() ? auth()->user()->can('create-coreSubMenuGroup') : '',
                'createCoreModule' => Auth::check() ? auth()->user()->can('create-coreModule') : '',
                'createLocationTownship' => Auth::check() ? auth()->user()->can('create-locationTownship') : '',
                'createLocationCity' => Auth::check() ? auth()->user()->can('create-locationCity') : '',
                'createContactUsMessage' => Auth::check() ? auth()->user()->can('create-contactUsMessage') : '',
                'createPushNotificationMessage' => Auth::check() ? auth()->user()->can('create-pushNotificationMessage') : '',
                'createMobileLanguage' => Auth::check() ? auth()->user()->can('create-mobileLanguage') : '',
                'createMobileLanguageString' => Auth::check() ? auth()->user()->can('create-mobileLanguageString') : '',
                'createPackageReport' => permissionControl(Constants::packageReportModule, ps_constant::createPermission) ? true : false,

                'createModule' => Auth::check() ? auth()->user()->can('create-module') : '',
                'updateBackendSetting' => permissionControl(Constants::backendSettingModule, ps_constant::updatePermission) ? true : false,


                'deleteDataReset' => permissionControl(\Modules\DemoDataDeletion\Constants\Constants::dataReset, ps_constant::deletePermission) ? true : false,
                'updateContact' => permissionControl(Constants::contactModule, ps_constant::updatePermission) ? true : false,
                'deleteContact' => permissionControl(Constants::contactModule, ps_constant::deletePermission) ? true : false,
                'updateGenerateDeepLink' => permissionControl(Constants::DeepLinkGenerateModule, ps_constant::updatePermission) ? true : false,
                'updatePaymentSetting' => permissionControl(Constants::paymentSettingModule, ps_constant::updatePermission) ? true : false,
                'createTable' => Auth::check() ? auth()->user()->can('create-table') : '',
                'createCustomizeUiDetail' => Auth::check() ? auth()->user()->can('create-customizeUiDetail') : '',
                'createPrivacyModule' => Auth::check() ? auth()->user()->can('create-privacyModule') : '',
                'createDataDeletionModule' => Auth::check() ? auth()->user()->can('create-dataDeletionModule') : '',

                // for frontend language string
                'createFeLanguageString' => Auth::check() ? auth()->user()->can('create-feLanguageString') : '',
            ],
            'domain' => config("app.base_domain"),
            'dir' => config("app.dir"),
            'appUrl' => config('app.url'),
        ]);
        // dd($test);


    }
}
