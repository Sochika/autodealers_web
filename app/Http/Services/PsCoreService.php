<?php
namespace App\Http\Services; use App\Config\ps_constant; use Carbon\Carbon; use Illuminate\Support\Facades\App; use Illuminate\Support\Facades\Gate; use Illuminate\Support\Facades\Http; use Modules\Core\Entities\ActivatedFileName; use Modules\Core\Entities\Project; use Modules\Core\Entities\SystemCode; class PsCoreService { function checkPermission($ability = null, $model = null, $routeName = null, $msg = null) { goto JtRcU; gy212: if (!Gate::denies($ability, $model)) { goto pBGvV; } goto g6On_; JtRcU: if (!($msg == null)) { goto hp3QT; } goto wpQKO; g6On_: return redirectView($routeName, $msg, "\144\x61\x6e\147\145\x72"); goto xtFyc; wpQKO: $msg = __("\x6e\157\x5f\x70\x65\162\155\151\x73\x73\151\157\x6e"); goto ME8Qt; xtFyc: pBGvV: goto Vrl_Q; ME8Qt: hp3QT: goto gy212; Vrl_Q: } public function getSystemCode() { goto AeLmy; qxFj_: $code1 = Carbon::now(); goto fswRV; IGQ19: $oldExploaded = explode("\x2f\x6e", base64_decode($old->code)); goto oATnZ; beBnB: if (empty($old)) { goto eLzZQ; } goto IGQ19; gCgr9: $systemCode->code = base64_encode($installationDate . $code1 . "\57\x6e" . $code2); goto HOTqf; fswRV: $code2 = Carbon::now()->addDays(ps_constant::freeTrialTotalDay); goto XkcHL; mzQWF: $installationDate = base64_decode($old->code); goto qxFj_; E658M: $code2FromNew = date_format($date, "\x4d\40\144\54\x20\x59\x20\x68\x3a\151\72\163"); goto mCUCt; oATnZ: if (!empty($oldExploaded[2])) { goto Rwvg2; } goto mzQWF; kp0sn: $date = date_create($allCodes[2]); goto E658M; XkcHL: $systemCode = SystemCode::first(); goto gCgr9; uUin0: eLzZQ: goto IGUZP; N1lMe: $allCodes = explode("\x2f\156", base64_decode($new->code)); goto kp0sn; mCUCt: return $code2FromNew; goto uUin0; HOTqf: $systemCode->update(); goto zQImh; zQImh: Rwvg2: goto amN3M; amN3M: $new = SystemCode::first(); goto N1lMe; AeLmy: $old = SystemCode::first(); goto beBnB; IGUZP: } public function updateLicense($request) { goto EcEN6; yfntt: $response = ''; goto EJo8h; iS6C5: m3Khb: goto M5NJ4; uKtQg: $project = new Project(); goto zaETE; dTr3F: goto m3Khb; goto X6c2q; mvmeP: $project->update(); goto DMI8A; Dxnr_: XfyO6: goto M24K2; RydLI: if ($purchaseCode == "\x32\141\145\60\60\x30\60\60\55\60\x30\60\60\55\x30\60\60\60\55\x30\x30\60\60\55\x30\x30\60\60\x30\x30\x30\60\x30\60\x30\60") { goto q0QHv; } goto yfntt; ot8aE: $response = json_decode(file_get_contents(public_path("\x6a\163\157\x6e\57\142\165\171\x73\145\x72\x2d\160\x75\162\143\150\x61\163\145\55\162\145\x73\x70\x6f\156\x73\x65\x2e\x6a\163\157\x6e"), true)); goto Vf23H; EcEN6: if (config("\141\160\160\56\144\145\166\x65\x6c\157\160\155\145\156\x74")) { goto z3B0d; } goto n3DHe; PK2M6: return $message; goto xEF0g; irX2C: if (empty($project)) { goto JWEYL; } goto JGNJZ; n3DHe: if (App::environment("\160\162\157\144\165\143\x74\x69\x6f\x6e")) { goto K_Gvc; } goto faZXI; HKLCc: $purchaseCode = $request->purchased_code; goto Xvq3g; IuEG7: $project->project_url = $request->backend_url; goto mvmeP; DMI8A: goto XfyO6; goto LZi1P; LZi1P: JWEYL: goto uKtQg; JGNJZ: $project->project_code = $request->purchased_code; goto IuEG7; EJo8h: goto ZoTo0; goto lyePt; CXa1Z: if (empty($message)) { goto myLHz; } goto PK2M6; Y7FYm: $project->added_user_id = 1; goto d0Fqm; dCcuX: $project->project_url = $request->backend_url; goto Y7FYm; REJR5: $project->project_code = $request->purchased_code; goto dCcuX; zaETE: $project->project_name = "\144\x65\x66\141\x75\154\164"; goto REJR5; xEF0g: myLHz: goto D3yoo; Vf23H: ZoTo0: goto dTr3F; X6c2q: K_Gvc: goto HKLCc; Xvq3g: $response = json_decode(Http::withHeaders(["\x41\x75\x74\x68\157\162\x69\x7a\141\x74\x69\157\x6e" => config("\x61\160\160\56\145\156\x76\141\x74\x6f\137\x74\157\x6b\145\x6e\x5f\x74\x79\160\145") . "\40" . config("\141\160\x70\56\145\156\x76\x61\164\x6f\137\164\157\153\145\x6e")])->get(ps_constant::envatoApiUri . ps_constant::envatoApiVersion . "\x2f\x6d\x61\162\x6b\x65\x74\57\x61\x75\164\150\x6f\162\x2f\163\x61\x6c\x65\77\143\x6f\x64\145\75" . $purchaseCode)); goto iS6C5; lyePt: q0QHv: goto ot8aE; GZnWq: $project = Project::first(); goto irX2C; faZXI: $purchaseCode = $request->purchased_code; goto RydLI; M5NJ4: $message = checkPurchasedCode($response); goto CXa1Z; d0Fqm: $project->save(); goto Dxnr_; D3yoo: z3B0d: goto GZnWq; M24K2: } public function activateLicense($request) { goto Teb_r; J2OW2: $project->ps_license_code = $psLicenseCode; goto CF1DQ; F2lNX: $logMessages[] = $baseProjectObj; goto WRlY7; qu2SN: HxeV1: goto fK1WO; CiwSs: $logMessages[] = $licenseObj; goto Z0Wga; YQDQQ: $activatedFileName = new ActivatedFileName(); goto qnslX; qc7pv: $file = file_get_contents($fileName); goto JHmG1; MaxcX: cgMLX: goto tc0Ux; su_PE: $domainObj = new \stdClass(); goto h8ZA0; rzP1_: $key = $dataFromJsonFileFromZip->key; goto PWlnj; me0xl: goto he5KU; goto MaxcX; f_RBx: $domainObj = new \stdClass(); goto C7Klr; xpm5t: $dataArr = ["\x6c\x6f\147\115\x65\163\x73\x61\x67\145\163" => $logMessages, "\x68\x61\x73\x45\x72\162\x6f\x72" => $hasError, "\x7a\151\160\x46\151\x6c\145\116\x61\155\x65" => $fileName]; goto GzdC8; Az30a: $baseProjectObj->message = __("\142\x61\163\x65\137\160\x72\157\152\x5f\156\x6f\164\x5f\x73\141\x6d\x65"); goto F2lNX; Z0Wga: ++$hasError; goto TcfGS; C7Klr: $domainObj->status = "\x73\165\x63\143\x65\x73\x73"; goto Ivnls; B6d42: $hasError = 0; goto INnlD; cCY89: if ($request->hasFile("\x7a\151\160\x46\x69\x6c\145")) { goto HxeV1; } goto SBul9; Ivnls: $domainObj->message = __("\144\157\155\x61\151\x6e\x5f\x76\145\162\x69\146\171\x5f\163\x75\143\143\x65\163\x73"); goto YhwhL; O32RV: he5KU: goto XiWYp; F789P: ++$hasError; goto sgHkO; AIFul: $zip->close(); goto NscsF; x_ruv: $baseProjectObj = new \stdClass(); goto pfL0e; SBul9: $fileName = str_replace("\172\x69\x70", "\x6a\x73\x6f\x6e", $request->zipFile); goto EXJ1N; nRg2x: $zip = new \ZipArchive(); goto vITqP; TcfGS: zccXJ: goto V1bAH; EXJ1N: goto azJGM; goto qu2SN; iqBLC: $psLicenseCode = $decryptedKey[2]; goto ZYLGt; SFIGB: $licenseObj->status = "\144\x61\156\x67\x65\162"; goto IvgYW; QOvet: $backendUrl = $decryptedKey[0]; goto oIfom; pjf5H: $domainObj->message = __("\x64\157\x6d\x61\151\x6e\137\x76\145\162\x69\x66\171\x5f\146\x61\151\154"); goto N79DQ; Zqmx7: $licenseObj->message = __("\x6c\151\143\145\156\163\145\137\x76\x65\162\151\x66\171\137\163\x75\x63\143\x65\x73\163"); goto ooxxJ; vITqP: $zip->open($zipFile); goto odtaz; gDzvy: $activatedFileName->is_imported = 0; goto FmPqc; U7JLr: VBP_8: goto GKXF8; bmGwg: $baseProjectObj->message = __("\x62\x61\163\x65\x5f\x70\162\x6f\152\137\x73\141\x6d\145"); goto zApuj; GzdC8: return $dataArr; goto nWlmv; oIfom: $purchasedCode = $decryptedKey[1]; goto iqBLC; pfL0e: $baseProjectObj->status = "\x73\x75\143\143\145\x73\163"; goto bmGwg; sgHkO: VDgEQ: goto Tk6fj; ooxxJ: $logMessages[] = $licenseObj; goto pBSqb; Teb_r: config("\141\160\x70\56\153\x65\171", $request->key); goto cCY89; XiWYp: if (!empty($hasError)) { goto T27DP; } goto dvQrO; AVTyO: $zip->extractTo("\x2e\x2f"); goto AIFul; INnlD: if ($backendUrl !== $oldDataOfProject->project_url) { goto LPy3Q; } goto f_RBx; sYb2O: T27DP: goto xpm5t; pTD1X: $licenseObj->status = "\163\x75\143\143\x65\x73\x73"; goto Zqmx7; odtaz: $fileName = $zip->getNameIndex(0); goto AVTyO; CF1DQ: $project->update(); goto YQDQQ; V1bAH: if ($project->base_project_id !== $oldDataOfProject->base_project_id) { goto cgMLX; } goto x_ruv; gRGww: $baseProjectObj->status = "\x64\x61\156\147\x65\x72"; goto Az30a; N79DQ: $logMessages[] = $domainObj; goto F789P; Tk6fj: if ($purchasedCode !== $oldDataOfProject->project_code) { goto VBP_8; } goto kbhRE; WRlY7: ++$hasError; goto O32RV; dvQrO: $project = Project::first(); goto J2OW2; fK1WO: $zipFile = $request->file("\172\x69\x70\x46\x69\154\145"); goto nRg2x; kbhRE: $licenseObj = new \stdClass(); goto pTD1X; uhzlg: $decryptedKey = explode("\12", base64_decode($key)); goto QOvet; BcWHz: goto VDgEQ; goto QH88L; FmPqc: $activatedFileName->save(); goto sYb2O; IvgYW: $licenseObj->message = __("\154\151\143\x65\x6e\163\x65\137\166\145\162\x69\x66\x79\137\146\x61\x69\x6c"); goto CiwSs; qnslX: $activatedFileName->file_name = $fileName; goto gDzvy; GKXF8: $licenseObj = new \stdClass(); goto SFIGB; QH88L: LPy3Q: goto su_PE; YhwhL: $logMessages[] = $domainObj; goto BcWHz; zApuj: $logMessages[] = $baseProjectObj; goto me0xl; pBSqb: goto zccXJ; goto U7JLr; NscsF: azJGM: goto qc7pv; h8ZA0: $domainObj->status = "\144\x61\x6e\147\145\162"; goto pjf5H; zztXK: $oldDataOfProject = Project::first(); goto B6d42; JHmG1: $dataFromJsonFileFromZip = json_decode($file); goto rzP1_; tc0Ux: $baseProjectObj = new \stdClass(); goto gRGww; ZYLGt: $logMessages = []; goto zztXK; PWlnj: $project = $dataFromJsonFileFromZip->project; goto uhzlg; nWlmv: } public function activateLicenseFromBuilder($dataFromJsonFileFromZip) { goto jVsU7; YwD5R: $licenseObj->status = "\x64\141\x6e\147\145\x72"; goto uRaqh; lCm2c: $logMessages = []; goto VR93W; b621Y: $project->update(); goto ThRWe; fwdPM: if ($purchasedCode !== $oldDataOfProject->project_code) { goto zGcDx; } goto FEuhk; HzPBE: $licenseObj = new \stdClass(); goto YwD5R; U8sUP: $activatedFileName->save(); goto t951F; EhXCy: $backendUrl = $decryptedKey[0]; goto WZx1E; Y1y1r: $domainObj->status = "\144\141\156\147\x65\162"; goto rKxCg; u22WG: $logMessages[] = $domainObj; goto GvYXc; SAmxC: goto u_IMX; goto NQmL1; HZWWw: $project->ps_license_code = $psLicenseCode; goto b621Y; DGgTY: $project = $dataFromJsonFileFromZip->project; goto OnejI; zxHA0: goto vMS2F; goto qJEjn; aP7Dp: $logMessages[] = $domainObj; goto zxHA0; Rws2_: $domainObj->message = __("\x64\157\x6d\x61\151\156\137\166\145\162\151\146\171\137\x73\x75\143\143\145\163\x73"); goto aP7Dp; KAMZ3: vMS2F: goto fwdPM; BzhPy: ++$hasError; goto MhGO9; DVGtG: goto lJCgH; goto Pv45q; GvYXc: ++$hasError; goto KAMZ3; VTs9t: if ($backendUrl !== $oldDataOfProject->project_url) { goto mZmYB; } goto YmNGc; NQmL1: POxWp: goto X_3Uo; jVsU7: config("\x61\x70\160\x2e\x6b\x65\x79", $dataFromJsonFileFromZip->key); goto h0K6Z; d0If5: $baseProjectObj->status = "\x73\x75\143\x63\x65\x73\163"; goto Wi_eP; Ivgkj: $domainObj->status = "\x73\165\143\x63\x65\163\163"; goto Rws2_; qJEjn: mZmYB: goto lZ4lG; KCTEY: $licenseObj->message = __("\154\x69\143\145\156\x73\145\137\166\x65\x72\151\x66\x79\137\x73\165\x63\143\145\163\x73"); goto gPGtT; JTTDo: $dataArr = ["\x6c\x6f\147\115\x65\163\163\x61\x67\145\163" => $logMessages, "\150\x61\163\x45\162\x72\x6f\x72" => $hasError, "\141\x63\x74\151\166\141\x74\145\x53\x74\x61\164\165\163" => $hasError == 0 ? "\164\x72\165\x65" : "\146\x61\154\x73\x65"]; goto gZ6UN; gZ6UN: return $dataArr; goto pEuYu; rKxCg: $domainObj->message = __("\144\157\x6d\141\x69\156\x5f\166\145\x72\151\146\171\137\x66\141\151\x6c"); goto u22WG; EOvQe: $baseProjectObj->message = __("\x62\141\x73\145\x5f\x70\162\157\x6a\x5f\156\157\164\x5f\x73\141\155\x65"); goto scbno; Pv45q: zGcDx: goto HzPBE; Gm20j: $baseProjectObj->status = "\144\x61\156\147\x65\x72"; goto EOvQe; VR93W: $oldDataOfProject = Project::first(); goto e80GK; MhGO9: lJCgH: goto E6bZu; scbno: $logMessages[] = $baseProjectObj; goto F7AB3; t951F: i_Qvy: goto JTTDo; EsIR4: $activatedFileName->file_name = "\101\x50\x49"; goto s5HjS; gPkpc: u_IMX: goto BcRIa; lZ4lG: $domainObj = new \stdClass(); goto Y1y1r; ThRWe: $activatedFileName = new ActivatedFileName(); goto EsIR4; s5HjS: $activatedFileName->is_imported = 0; goto U8sUP; F7AB3: ++$hasError; goto gPkpc; D57Ft: $project = Project::first(); goto HZWWw; BcRIa: if (!empty($hasError)) { goto i_Qvy; } goto D57Ft; ZFoWb: $baseProjectObj = new \stdClass(); goto d0If5; EDkIT: $logMessages[] = $baseProjectObj; goto SAmxC; h0K6Z: $key = $dataFromJsonFileFromZip->key; goto DGgTY; OnejI: $decryptedKey = explode("\xa", base64_decode($key)); goto EhXCy; YmNGc: $domainObj = new \stdClass(); goto Ivgkj; X_3Uo: $baseProjectObj = new \stdClass(); goto Gm20j; uRaqh: $licenseObj->message = __("\154\x69\x63\145\156\x73\145\137\x76\145\162\x69\146\171\x5f\146\x61\151\x6c"); goto wJZky; e80GK: $hasError = 0; goto VTs9t; E6bZu: if ($project->base_project_id !== $oldDataOfProject->base_project_id) { goto POxWp; } goto ZFoWb; wJZky: $logMessages[] = $licenseObj; goto BzhPy; FEuhk: $licenseObj = new \stdClass(); goto CY1ze; Wi_eP: $baseProjectObj->message = __("\142\x61\163\145\x5f\160\x72\157\152\137\x73\141\155\145"); goto EDkIT; WZx1E: $purchasedCode = $decryptedKey[1]; goto OVP1r; OVP1r: $psLicenseCode = $decryptedKey[2]; goto lCm2c; gPGtT: $logMessages[] = $licenseObj; goto DVGtG; CY1ze: $licenseObj->status = "\163\165\x63\x63\x65\163\163"; goto KCTEY; pEuYu: } }