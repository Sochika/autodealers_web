<?php

namespace Modules\Installer\Services;

use App\Config\ps_constant;
use App\Config\ps_url;
use App\Http\Services\PsService;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Modules\Core\Entities\CheckVersionUpdate;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\FeLanguageString;
use Modules\Core\Entities\LanguageString;
use Modules\Core\Entities\MobileLanguage;
use Modules\Core\Entities\MobileLanguageString;
use Modules\Core\Entities\Project;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Entities\Table;
use Modules\Core\Entities\UpdaterData;
use Modules\Core\Http\Services\LanguageService;
use Modules\Core\Http\Services\LanguageStringService;
use Modules\Core\Http\Services\MobileLanguageService;
use Modules\Core\Http\Services\MobileLanguageStringService;
use Modules\Core\Imports\FeLanguageStringImport;
use Modules\Core\Imports\LanguageStringImport;
use Illuminate\Support\Facades\File;

class NextUpdateService extends PsService
{

    protected $mobileLangStringIdCol,$mobileLangStringKeyCol,$mobileLangStringTableName,$mobileLangStringValueCol,$mobileLangStringMobileLanguageIdCol;
    protected $languageService, $csvFileZip, $langStringLanguageIdCol, $mobileLanguageService, $mobileLanguageStringService, $languageStringService;

    public function __construct(LanguageService $languageService, MobileLanguageService $mobileLanguageService, MobileLanguageStringService $mobileLanguageStringService, LanguageStringService $languageStringService)
    {
        $this->languageService = $languageService;
        $this->mobileLanguageService = $mobileLanguageService;
        $this->mobileLanguageStringService = $mobileLanguageStringService;
        $this->languageStringService = $languageStringService;
        $this->csvFileZip = "csvFileZip";
        $this->langStringLanguageIdCol = LanguageString::languageId;
        $this->mobileLangStringIdCol = MobileLanguageString::id;
        $this->mobileLangStringKeyCol = MobileLanguageString::key;
        $this->mobileLangStringTableName = MobileLanguageString::tableName;
        $this->mobileLangStringValueCol = MobileLanguageString::value;
        $this->mobileLangStringMobileLanguageIdCol = MobileLanguageString::mobileLanguageId;
    }

    public function addNewLangStore($request, $redirectRouteName)
    {
        // dd($redirectRouteName);

        $checkBuilderConnection = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkBuilderConnection);
        if ($checkBuilderConnection?->status !== "success" || empty($checkBuilderConnection)) {

            $msg = $checkBuilderConnection?->message ? $checkBuilderConnection?->message : "Builder Connection Fail";
            return redirectBackWithError(resultMessage($msg, "error"));
        } else {
            $checkVersionUpdate = CheckVersionUpdate::first();
            $getLatestVersion = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::getLatestVersion);
            // dd($getLatestVersion);


            // checking that you have updated latest version or not start
            if (!empty($checkVersionUpdate)) {
                $currentVersionCode = intval($checkVersionUpdate->backend_language_version_code);
                $latestVersionCode = $getLatestVersion->version_code;
                if ($currentVersionCode == $latestVersionCode) {
                    return ['logMessages' => 'be_lang_sync_success'];
                }
                $currentVersionCode = $currentVersionCode + 1;
            } else {
                $currentVersionCode = 0;
            }

            $dataArr = [
                'current_version_code' => $currentVersionCode,
            ];

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' .  getApiKey(),
                // 'Content-Type' => 'multipart/form-data'
            ])->post(ps_constant::base_url . ps_url::getBeLangZip . "?&project_id=".getProjectId(), $dataArr);
            // dd( $response);
            if ($response->successful()) {
                $zipContent = $response->body();

                $fileName = 'beLanguage.zip';

                $parentFileName = 'beLanguageZip' . time();
                if (!File::isDirectory(public_path() . '/' . $parentFileName . '/')) {
                    File::makeDirectory(public_path() . '/' . $parentFileName . '/', 0777, true, true);
                }
                file_put_contents(public_path("{$parentFileName}/{$fileName}"), $zipContent);

                $filePath = public_path($parentFileName);
                $folderName = "beLanguageZip";

                $zip = new \ZipArchive();
                $zip->open($filePath . '/' . $fileName);
                $langSymbols = [];
                $langStringCSVFiles = [];
                for ($i = 0; $i < $zip->numFiles; $i++) {
                    $fileName = $zip->getNameIndex($i);
                    $langSymbol = str_replace(".csv", "", $fileName);
                    array_push($langSymbols, $langSymbol);
                    array_push($langStringCSVFiles, $fileName);
                }
                $zip->extractTo("./");
                $zip->close();
                // extract lang zip file end

                // add new lang string for our supported lang start
                $ourSupportedLangSymbols = [];
                $languages = $this->languageService->getLanguages();
                foreach ($languages as $language) {
                    array_push($ourSupportedLangSymbols, $language->symbol);
                    foreach ($langSymbols as $langSymbol) {
                        if ($language->symbol == $langSymbol) {
                            $languageId = $language->id;
                            $file = $langSymbol . ".csv";

                            $import = new LanguageStringImport($language);
                            $import->import($file);

                            // update json file
                            $fileName = $language->symbol . '.json';
                            $lang_str = LanguageString::where($this->langStringLanguageIdCol, $language->id)->get();
                            generateLangStrJson($fileName, $lang_str);
                        }
                    }
                }
                // add new lang string for our supported lang end


                // for not our support lang, we will add english lang string for our new lang string start
                $notOurSupportedLangSymbols = array_diff($ourSupportedLangSymbols, $langSymbols);
                foreach ($languages as $language) {
                    foreach ($notOurSupportedLangSymbols as $notOurSupportedLangSymbol) {
                        if ($language->symbol == $notOurSupportedLangSymbol) {
                            $languageId = $language->id;
                            $file = "en.csv";

                            $import = new LanguageStringImport($language);
                            $import->import($file);

                            // update json file
                            $fileName = $language->symbol . '.json';
                            $lang_str = LanguageString::where($this->langStringLanguageIdCol, $language->id)->get();
                            generateLangStrJson($fileName, $lang_str);
                        }
                    }
                }
                // for not our support lang, we will add english lang string for our new lang string end

                // clean imported files start
                // Storage::delete($langStringCSVFiles);
                // Storage::deleteDirectory(($parentFileName));
                // clean imported files start

                // updated at psx_check_version_updates
                if (empty($checkVersionUpdate)) {
                    $checkVersionUpdate = new CheckVersionUpdate();
                    $checkVersionUpdate->backend_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->backend_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->save();
                } else {
                    $checkVersionUpdate->backend_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->backend_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->update();
                }
            } else {
                return redirectBackWithError(resultMessage("There have issue at getting BE language Zip", "error"));
            }
        }
        // dd("here");
        return ['logMessages' => 'be_lang_sync_success'];
    }

    public function addNewFeLangStore($request)
    {

        $checkBuilderConnection = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkBuilderConnection);
        if ($checkBuilderConnection?->status !== "success" || empty($checkBuilderConnection)) {

            $msg = $checkBuilderConnection?->message ? $checkBuilderConnection?->message : "Builder Connection Fail";
            return redirectBackWithError(resultMessage($msg, "error"));
        } else {
            $checkVersionUpdate = CheckVersionUpdate::first();
            $getLatestVersion = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::getLatestVersion);
            // dd($getLatestVersion);


            // checking that you have updated latest version or not start
            if (!empty($checkVersionUpdate)) {
                $currentVersionCode = intval($checkVersionUpdate->frontend_language_version_code);
                $latestVersionCode = $getLatestVersion->version_code;
                if ($currentVersionCode == $latestVersionCode) {
                    return ['logMessages' => 'fe_lang_sync_success'];
                }
                $currentVersionCode = $currentVersionCode + 1;
            } else {
                $currentVersionCode = 0;
            }

            $dataArr = [
                'current_version_code' => $currentVersionCode,
            ];

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' .  getApiKey(),
                // 'Content-Type' => 'multipart/form-data'
            ])->post(ps_constant::base_url . ps_url::getFeLangZip . "?&project_id=".getProjectId(), $dataArr);

            // $response = Http::withHeaders([
            //     'Authorization' => 'Bearer ' .  getApiKey(),
            //     'Content-Type' => 'multipart/form-data'
            // ])->post(ps_constant::base_url . ps_url::getFeLangZip, [
            //     'current_version_code' => $currentVersionCode,
            // ]);
            if ($response->successful()) {
                $zipContent = $response->body();

                $fileName = 'feLanguage.zip';

                $parentFileName = 'feLanguageZip' . time();
                if (!File::isDirectory(public_path() . '/' . $parentFileName . '/')) {
                    File::makeDirectory(public_path() . '/' . $parentFileName . '/', 0777, true, true);
                }
                file_put_contents(public_path("{$parentFileName}/{$fileName}"), $zipContent);

                $filePath = public_path($parentFileName);
                $folderName = "feLanguageZip";

                $zip = new \ZipArchive();
                $zip->open($filePath . '/' . $fileName);
                $langSymbols = [];
                $langStringCSVFiles = [];
                for ($i = 0; $i < $zip->numFiles; $i++) {
                    $fileName = $zip->getNameIndex($i);
                    $langSymbol = str_replace(".csv", "", $fileName);
                    array_push($langSymbols, $langSymbol);
                    array_push($langStringCSVFiles, $fileName);
                }
                $zip->extractTo("./");
                $zip->close();
                // extract lang zip file end

                // add new fe lang string for our supported lang start
                $ourSupportedLangSymbols = [];
                $languages = $this->languageService->getLanguages();
                foreach ($languages as $language) {
                    array_push($ourSupportedLangSymbols, $language->symbol);
                    foreach ($langSymbols as $langSymbol) {
                        if ($language->symbol == $langSymbol) {
                            $languageId = $language->id;
                            $file = $langSymbol . ".csv";

                            $import = new FeLanguageStringImport($language);
                            $import->import($file);

                            // update json file
                            $fileName = $language->symbol . '.json';
                            $lang_str = FeLanguageString::where($this->langStringLanguageIdCol, $language->id)->get();
                            generateFeLangStrJson($fileName, $lang_str);
                        }
                    }
                }
                // add new fe lang string for our supported lang end


                // for not our support lang, we will add english lang string for our new lang string start
                $notOurSupportedLangSymbols = array_diff($ourSupportedLangSymbols, $langSymbols);
                foreach ($languages as $language) {
                    foreach ($notOurSupportedLangSymbols as $notOurSupportedLangSymbol) {
                        if ($language->symbol == $notOurSupportedLangSymbol) {
                            $languageId = $language->id;
                            $file = "en.csv";

                            $import = new FeLanguageStringImport($language);
                            $import->import($file);

                            // update json file
                            $fileName = $language->symbol . '.json';
                            $lang_str = FeLanguageString::where($this->langStringLanguageIdCol, $language->id)->get();
                            generateFeLangStrJson($fileName, $lang_str);
                        }
                    }
                }
                // for not our support lang, we will add english lang string for our new lang string end

                // clean imported files start
                Storage::delete($langStringCSVFiles);
                Storage::deleteDirectory(($parentFileName));
                // clean imported files end

                // updated at psx_check_version_updates
                if (empty($checkVersionUpdate)) {
                    $checkVersionUpdate = new CheckVersionUpdate();
                    $checkVersionUpdate->frontend_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->frontend_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->save();
                } else {
                    $checkVersionUpdate->frontend_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->frontend_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->update();
                }
            } else {
                return redirectBackWithError(resultMessage("There have issue at getting MB language Zip", "error"));
            }
        }

        return ['logMessages' => 'mb_lang_sync_success'];
    }

    public function addNewMobileLangStore($request)
    {
        $checkBuilderConnection = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkBuilderConnection);
        if ($checkBuilderConnection?->status !== "success" || empty($checkBuilderConnection)) {

            $msg = $checkBuilderConnection?->message ? $checkBuilderConnection?->message : "Builder Connection Fail";
            return redirectBackWithError(resultMessage($msg, "error"));
        } else {

            $checkVersionUpdate = CheckVersionUpdate::first();
            $getLatestVersion = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::getLatestVersion);
            // dd($getLatestVersion);


            // checking that you have updated latest version or not start
            if (!empty($checkVersionUpdate)) {
                $currentVersionCode = intval($checkVersionUpdate->mobile_language_version_code);
                $latestVersionCode = $getLatestVersion->version_code;
                if ($currentVersionCode == $latestVersionCode) {
                    return ['logMessages' => 'mb_lang_sync_success'];
                }
                $currentVersionCode = $currentVersionCode + 1;
            } else {
                $currentVersionCode = 0;
            }

            $dataArr = [
                'current_version_code' => $currentVersionCode,
            ];

            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' .  getApiKey(),
                // 'Content-Type' => 'multipart/form-data'
            ])->post(ps_constant::base_url . ps_url::getMbLangZip . "?&project_id=".getProjectId(), $dataArr);

            // $response = Http::withHeaders([
            //     'Authorization' => 'Bearer ' .  getApiKey(),
            //     'Content-Type' => 'multipart/form-data'
            // ])->post(ps_constant::base_url . ps_url::getMbLangZip, [
            //     'current_version_code' => $currentVersionCode,
            // ]);
            if ($response->successful()) {
                // extract lang zip file start
                $zipContent = $response->body();

                $fileName = 'mbLanguage.zip';

                $parentFileName = 'mbLanguageZip' . time();
                if (!File::isDirectory(public_path() . '/' . $parentFileName . '/')) {
                    File::makeDirectory(public_path() . '/' . $parentFileName . '/', 0777, true, true);
                }
                file_put_contents(public_path("{$parentFileName}/{$fileName}"), $zipContent);

                $filePath = public_path($parentFileName);
                $folderName = "mbLanguageZip";

                $zip = new \ZipArchive();
                $zip->open($filePath . '/' . $fileName);
                $langSymbols = [];
                $langStringCSVFiles = [];
                for ($i = 0; $i < $zip->numFiles; $i++) {
                    $fileName = $zip->getNameIndex($i);
                    $langSymbol = str_replace(".json", "", $fileName);
                    array_push($langSymbols, $langSymbol);
                    array_push($langStringCSVFiles, $fileName);
                }
                $zip->extractTo("./");
                $zip->close();
                // extract lang zip file end

                // add new lang string for our supported lang start
                $ourSupportedLangSymbols = [];
                $mobileLanguages = $this->mobileLanguageService->getMobileLanguages();
                foreach ($mobileLanguages as $mobileLanguage) {
                    array_push($ourSupportedLangSymbols, $mobileLanguage->symbol);
                    foreach ($langSymbols as $langSymbol) {
                        if ($mobileLanguage->symbol == $langSymbol) {
                            // update code for mobile language start
                            $this->mobileLanguageStringService->updateCode($mobileLanguage->id);
                            // update code for mobile language end

                            $file = $langSymbol . ".json";
                            $languageStrings = json_decode(file_get_contents($file));

                            $fileKeys = [];
                            $existKeys = [];

                            foreach ($languageStrings as $key => $value) {
                                array_push($fileKeys, $key);
                            }

                            //filter exist keys
                            $langStrs = MobileLanguageString::where($this->mobileLangStringMobileLanguageIdCol, $mobileLanguage->id)->whereIn($this->mobileLangStringKeyCol, $fileKeys)->get();

                            //for update
                            foreach ($langStrs as $langStr) {
                                array_push($existKeys, $langStr->key);

                                foreach ($languageStrings as $k => $v) {
                                    if ($k == $langStr->key) {
                                        $langStr->value = $v;

                                        $langStr->update();
                                    }
                                }
                            }

                            //for new keys
                            foreach ($languageStrings as $newkey => $newvalue) {
                                //if not in exist keys
                                if (!in_array($newkey, $existKeys)) {
                                    $language_string = new MobileLanguageString();
                                    $language_string->key = $newkey;
                                    $language_string->value = $newvalue;
                                    $language_string->mobile_language_id = $mobileLanguage->id;
                                    $language_string->added_user_id = Auth::user()->id;
                                    $language_string->save();
                                }
                            }
                        }
                    }
                }
                // add new lang string for our supported lang end


                // for not our support lang, we will add english lang string for our new lang string start
                $notOurSupportedLangSymbols = array_diff($ourSupportedLangSymbols, $langSymbols);
                foreach ($mobileLanguages as $mobileLanguage) {
                    foreach ($notOurSupportedLangSymbols as $notOurSupportedLangSymbol) {
                        if ($mobileLanguage->symbol == $notOurSupportedLangSymbol) {

                            // update code for mobile language start
                            $this->mobileLanguageStringService->updateCode($mobileLanguage->id);
                            // update code for mobile language end

                            $file = "en.json";
                            $languageStrings = json_decode(file_get_contents($file));

                            $fileKeys = [];
                            $existKeys = [];

                            foreach ($languageStrings as $key => $value) {
                                array_push($fileKeys, $key);
                            }

                            //filter exist keys
                            $langStrs = MobileLanguageString::where($this->mobileLangStringMobileLanguageIdCol, $mobileLanguage->id)->whereIn($this->mobileLangStringKeyCol, $fileKeys)->get();

                            //for update
                            foreach ($langStrs as $langStr) {
                                array_push($existKeys, $langStr->key);

                                foreach ($languageStrings as $k => $v) {
                                    if ($k == $langStr->key) {
                                        $langStr->value = $v;

                                        $langStr->update();
                                    }
                                }
                            }

                            //for new keys
                            foreach ($languageStrings as $newkey => $newvalue) {
                                //if not in exist keys
                                if (!in_array($newkey, $existKeys)) {
                                    $language_string = new MobileLanguageString();
                                    $language_string->key = $newkey;
                                    $language_string->value = $newvalue;
                                    $language_string->mobile_language_id = $mobileLanguage->id;
                                    $language_string->added_user_id = Auth::user()->id;
                                    $language_string->save();
                                }
                            }
                        }
                    }
                }
                // for not our support lang, we will add english lang string for our new lang string end


                // clean imported files start
                Storage::delete($langStringCSVFiles);
                // Storage::deleteDirectory(($parentFileName));
                // clean imported files start

                if (empty($checkVersionUpdate)) {
                    $checkVersionUpdate = new CheckVersionUpdate();
                    $checkVersionUpdate->mobile_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->mobile_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->save();
                } else {
                    $checkVersionUpdate->mobile_language_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->mobile_language_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->update();
                }
            } else {
                return redirectBackWithError(resultMessage("There have issue at getting MB language Zip", "error"));
            }
        }
        return ['logMessages' => 'fe_lang_sync_success'];
    }

    public function builderZipFileStore($request)
    {
        $zipFile = $request->file("zipFile");
        $zip = new \ZipArchive();
        $zip->open($zipFile);
        $fileName = $zip->getNameIndex(0);
        $zip->extractTo("./");
        $zip->close();

        $updaterData = UpdaterData::first();

        if (empty($updaterData)) {
            $updaterData = new UpdaterData();
            $updaterData->file_name = $fileName;
            $updaterData->is_imported = 0;
            $updaterData->save();
        } else {
            $updaterData->file_name = $fileName;
            $updaterData->is_imported = 0;
            $updaterData->update();
        }
    }

    // For One click update Start

    public function sourceCodeSync($redirectRouteName)
    {

        $checkBuilderConnection = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkBuilderConnection);
        if ($checkBuilderConnection?->status !== "success" || empty($checkBuilderConnection)) {

            $msg = $checkBuilderConnection?->message ? $checkBuilderConnection?->message : "Builder Connection Fail";
            return redirectBackWithError(resultMessage($msg, "error"));
        } else {
            $checkVersionUpdate = CheckVersionUpdate::first();
            $getLatestVersion = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::getLatestVersion);
            $haveSourceCodeZipFile = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::haveSourceCodeZipFile);;

            // checking zip file have or not start
            if ($haveSourceCodeZipFile->isEmptyZip) {
                return redirectBackWithError(resultMessage($haveSourceCodeZipFile->msg, "error"));
            }
            // checking zip file have or not end

            // checking that you have updated latest version or not start
            if (!empty($checkVersionUpdate)) {
                $currentVersionCode = $checkVersionUpdate->source_code_version_code;
                $latestVersionCode = $getLatestVersion->version_code;
                if ($currentVersionCode == $latestVersionCode) {
                    return redirectView($redirectRouteName, "Source Code Sync have been finished successfully");
                }
            }
            // checking that you have updated latest version or not end

            $getSourceCode = Http::withHeaders([
                'Authorization' => 'Bearer ' . getApiKey(),
            ])->get(ps_constant::base_url . ps_url::getSourceCode);

            if ($getSourceCode->successful()) {

                //make backup
                try{
                    Artisan::call('backup:run --disable-notifications');
                }catch(\Throwable $e){
                    Artisan::call('optimize:clear');
                    return redirectBackWithError(resultMessage("Source Code Sync Fail. Reload and Try Againg", "error"));
                }

                $zipContent = $getSourceCode->body();

                // Save the zip file content to a local file
                $fileName = 'received_files.zip';

                $filePath = public_path("code/");
                if (! File::exists($filePath)) {
                    File::makeDirectory($filePath);
                }
                file_put_contents(public_path("code/{$fileName}"), $zipContent);
                $folderName = "code";

                // extract the zip file
                $zip = new \ZipArchive();
                $zip->open($filePath . $fileName);
                // $fileName = $zip->getNameIndex(0);
                $zip->extractTo(base_path("./"));
                $zip->close();

                // replace content at builded file
                $path_to_file = public_path('build/app.js');
                $path_to_file2 = public_path('build/PsApiService2.js');
                $path_to_file3 = public_path('build/psApiService.js');

                if(empty(config("app.dir"))){
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchSubFolder, "");
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchSubFolderWithSlash1, "");
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchSubFolderWithSlash2, "");

                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchApiToken, config("app.api_token"));
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchSubFolder, "");
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchSubFolderWithSlash1, "");
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchSubFolderWithSlash2, "");

                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchSubFolder, "");
                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchSubFolderWithSlash1, "");
                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchSubFolderWithSlash2, "");
                } else {
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file, ps_constant::searchSubFolder, config("app.dir"));

                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchApiToken, config("app.api_token"));
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file2, ps_constant::searchSubFolder, config("app.dir"));

                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchDomain, config("app.base_domain"));
                    findAndReplaceForBuildFolder($path_to_file3, ps_constant::searchSubFolder, config("app.dir"));
                }


                // run migration command
                Artisan::call('migrate', ['--force' => true]);

                $composerPath = base_path('./composer.phar');
                // $command = "cd .. && php $composerPath update 2>&1";
                $command = "cd .. && php $composerPath update";
                $output = shell_exec($command);

                // extracted zip file delete
                Storage::delete($folderName . "/" . $fileName);

                // updated at psx_check_version_updates
                if (empty($checkVersionUpdate)) {
                    $checkVersionUpdate = new CheckVersionUpdate();
                    $checkVersionUpdate->source_code_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->source_code_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->save();
                } else {
                    $checkVersionUpdate->source_code_version_number = $getLatestVersion->version_number;
                    $checkVersionUpdate->source_code_version_code = $getLatestVersion->version_code;
                    $checkVersionUpdate->update();
                }
            } else {
                return redirectBackWithError(resultMessage("There have issue at getting source code", "error"));
            }

            return redirectView($redirectRouteName, "Source Code Sync have been finished successfully");
        }
    }

    public function handleBuilderTableFieldSync($redirectRouteName)
    {
        $project = Project::first();
        $builderAppInfoPara = "&project_id=".getProjectId()."&project_url=".$project->project_url."&project_code=".$project->project_code."&api_key=".$project->api_key."&token=".$project->token."&user_id=1";
        $builderAppInfo = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::builderAppInfo, $builderAppInfoPara);
        if(!$builderAppInfo->isProjectChanged){

            $checkVersionUpdate = CheckVersionUpdate::first();
            $getLatestVersion = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::getLatestVersion);

            if($builderAppInfo->syncAble){
                if (!empty($builderAppInfo)){
                    $data = $builderAppInfo;
                    $handleVersionUpdate = postHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::handleDefaultFieldTable, "&project_id=".getProjectId(), $data);
                    // dd($handleVersionUpdate);
                    $tableObjArr = collect($handleVersionUpdate->tableObjArr);
                    $customFieldObjArr = collect($handleVersionUpdate->customFieldObjArr);
                    $coreFieldObjArr = collect($handleVersionUpdate->coreFieldObjArr);
                    $languageObjArr = collect($handleVersionUpdate->languageObjArr);

                    if (!empty($tableObjArr)){
                        foreach ($tableObjArr as $tableObj){
                            // save or update in tables table
                            Table::unguard();
                            $table = Table::updateOrCreate(
                                ['id' => $tableObj->id],
                                [
                                    "name" => $tableObj->name,
                                    "description" => $tableObj->description,
                                    "core_key_type_id" => $tableObj->core_key_type_id,
                                    "is_only_for_core_field" => $tableObj->is_only_for_core_field,
                                    "table_used_type_id" => $tableObj->table_used_type_id,
                                    "added_user_id" => 1,
                                ]
                            );
                        }
                    }

                    if($coreFieldObjArr->isNotEmpty()){
                        foreach($coreFieldObjArr as $fieldObj){
                            if($fieldObj->is_core_field){
                                $coreField = $fieldObj;
                                $hasNewCoreField = CoreFieldFilterSetting::find($coreField->id);

                                CoreFieldFilterSetting::unguard();
                                $coreFieldFilterSetting = CoreFieldFilterSetting::updateOrCreate(
                                    ["id" => $coreField->id],
                                    [
                                        "table_id" => $coreField->table_id,
                                        "project_name" => $coreField->project_name,
                                        "project_id" => $coreField->project_id,
                                        "label_name" => $coreField->label_name,
                                        "module_name" => $coreField->module_name,
                                        "base_module_name" => $coreField->base_module_name,
                                        "field_name" => $coreField->field_name,
                                        "placeholder" => $coreField->placeholder,
                                        "data_type" => $coreField->data_type,
                                        "is_delete" => $coreField->is_delete,
                                        "enable" => $coreField->enable,
                                        "mandatory" => $coreField->mandatory,
                                        "is_show_sorting" => $coreField->is_show_sorting,
                                        "ordering" => $coreField->ordering,
                                        "is_show_in_filter" => $coreField->is_show_in_filter,
                                        "is_include_in_hideshow" => $coreField->is_include_in_hideshow,
                                        "is_show" => $coreField->is_show,
                                        "is_core_field" => 1,
                                        "permission_for_enable_disable" => $coreField->permission_for_enable_disable,
                                        "permission_for_delete" => $coreField->permission_for_delete,
                                        "permission_for_mandatory" => $coreField->permission_for_mandatory,
                                        "added_user_id" => 1
                                    ]
                                );

                                if(empty($hasNewCoreField)){
                                    if ($coreField->is_include_in_hideshow == 1){
                                        // save in screen_display_ui_settings
                                        $oldScreenDisplayUiSetting = ScreenDisplayUiSetting::where("module_name", $coreField->module_name)->where("key", $coreField->field_name)->first();
                                        if(empty($oldScreenDisplayUiSetting)){
                                            $screenDisplayUiSetting = new ScreenDisplayUiSetting();
                                            $screenDisplayUiSetting->module_name = $coreField->module_name;
                                            $screenDisplayUiSetting->key = $coreField->field_name;
                                            $screenDisplayUiSetting->is_show = $coreField->is_show;
                                            $screenDisplayUiSetting->added_user_id = 1;
                                            $screenDisplayUiSetting->save();
                                        }
                                    }
                                }

                            }

                        }
                    }

                    if($customFieldObjArr->isNotEmpty()){
                        foreach($customFieldObjArr as $fieldObj){
                            if(!$fieldObj->is_core_field){
                                $customField = $fieldObj;
                                $hasNewCustomField = CustomizeUi::find($customField->id);

                                CustomizeUi::unguard();
                                $customizeUi = CustomizeUi::updateOrCreate(
                                    ["id" => $customField->id],
                                    [
                                        "table_id" => $customField->table_id,
                                        "project_name" => $customField->project_name,
                                        "project_id" => $customField->project_id,
                                        "name" => $customField->name,
                                        "placeholder" => $customField->placeholder,
                                        "ui_type_id" => $customField->ui_type_id,
                                        "core_keys_id" => $customField->core_keys_id,
                                        "is_delete" => $customField->is_delete,
                                        "data_type" => $customField->data_type,
                                        "module_name" => $customField->module_name,
                                        "base_module_name" => $customField->base_module_name,
                                        "enable" => $customField->enable,
                                        "mandatory" => $customField->mandatory,
                                        "is_show_sorting" => $customField->is_show_sorting,
                                        "ordering" => $customField->ordering,
                                        "is_show_in_filter" => $customField->is_show_in_filter,
                                        "is_include_in_hideshow" => $customField->is_include_in_hideshow,
                                        "is_show" => $customField->is_show,
                                        "is_core_field" => 0,
                                        "permission_for_enable_disable" => $customField->permission_for_enable_disable,
                                        "permission_for_delete" => $customField->permission_for_delete,
                                        "permission_for_mandatory" => $customField->permission_for_mandatory,
                                        "added_user_id" => 1
                                    ]
                                );

                                if(empty($hasNewCustomField)){
                                    if ($customField->is_include_in_hideshow == 1){
                                        $oldScreenDisplayUiSetting = ScreenDisplayUiSetting::where("module_name", $customField->module_name)->where("key", $customField->core_keys_id)->first();
                                        if(empty($oldScreenDisplayUiSetting)){
                                            // save in screen_display_ui_settings
                                            $screenDisplayUiSetting = new ScreenDisplayUiSetting();
                                            $screenDisplayUiSetting->module_name = $customField->module_name;
                                            $screenDisplayUiSetting->key = $customField->core_keys_id;
                                            $screenDisplayUiSetting->is_show = $customField->is_show;
                                            $screenDisplayUiSetting->added_user_id = 1;
                                            $screenDisplayUiSetting->save();
                                        }
                                    }
                                }



                            }

                        }
                    }

                    // if new field, will add lang start
                    if($languageObjArr->isNotEmpty()){
                        $this->languageStringService->importAllLanguageStrings($languageObjArr);
                    }
                    // if new field, will add lang end

                }
            }

            // updated at psx_check_version_updates
            if(empty($checkVersionUpdate)){
                $checkVersionUpdate = new CheckVersionUpdate();
                $checkVersionUpdate->field_table_version_number = $getLatestVersion->version_number;
                $checkVersionUpdate->field_table_version_code = $getLatestVersion->version_code;
                $checkVersionUpdate->save();

                // Update Builder App Info Cache
                $buildAppInfoCache = new \stdClass();
                $buildAppInfoCache->syncAble = 0;
                $buildAppInfoCache->versionCode = $getLatestVersion->version_code;
                updateBuilderAppInfoCache($buildAppInfoCache);
            } else {
                $checkVersionUpdate->field_table_version_number = $getLatestVersion->version_number;
                $checkVersionUpdate->field_table_version_code = $getLatestVersion->version_code;
                $checkVersionUpdate->update();

                // Update Builder App Info Cache
                $buildAppInfoCache = new \stdClass();
                $buildAppInfoCache->syncAble = 0;
                $buildAppInfoCache->versionCode = $getLatestVersion->version_code;
                updateBuilderAppInfoCache($buildAppInfoCache);
            }

            // dd($coreFieldObjArr);
            return redirectView($redirectRouteName, "Congratulations! You have completed the updating process successfully.");

        } else {
            return redirectBackWithError(resultMessage("Project is not same.", "error"));
        }

    }

    public function builderTableFieldSync($redirectRouteName)
    {
        $checkBuilderConnection = getHttpWithApiKey(ps_constant::base_url, getApiKey(), ps_url::checkBuilderConnection);
        if($checkBuilderConnection?->status !== "success" || empty($checkBuilderConnection)){

            $msg = $checkBuilderConnection?->message ? $checkBuilderConnection?->message : "Builder Connection Fail";
            return redirectBackWithError(resultMessage($msg, "error"));

        } else {

            // call function twice
            $builderAppInfo = $this->handleBuilderTableFieldSync($redirectRouteName);
            $builderAppInfo = $this->handleBuilderTableFieldSync($redirectRouteName);
            return $builderAppInfo;
        }
    }



}
