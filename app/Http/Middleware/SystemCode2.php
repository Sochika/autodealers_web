<?php

namespace App\Http\Middleware; use App\Http\Services\PsService; use Carbon\Carbon; use Closure; use Illuminate\Http\Request; use Inertia\Inertia; use Modules\Core\Entities\Project; class SystemCode2 { public function handle(Request $request, Closure $next) { goto a5Bkm; O7gj2: $code2 = date_format(date_create($psService->getSystemCode()), "\131\x2d\155\55\144\x20\110\x3a\151\x3a\x73"); goto zSxCW; BFT5d: return $next($request); goto So7jW; jgxGC: j9rcM: goto N9ldB; qlu4y: o85AA: goto DWVGE; ETBgT: gPs2k: goto UErOd; GGguT: AlrXG: goto jg8bY; e50nO: if (empty($project)) { goto XU_UH; } goto drEMk; V_aV1: $project = Project::first(); goto e50nO; jMaFm: $code1 = Carbon::now(); goto O7gj2; gEaq1: return $next($request); goto dcmO0; DFBN1: goto kxa1y; goto ETBgT; N9ldB: return Inertia::render("\123\171\x73\164\x65\155"); goto GGguT; M5T2Q: kxa1y: goto Cbaq_; So7jW: goto NtNXc; goto qlu4y; rIhTu: XU_UH: goto DFBN1; DWVGE: $psService = new PsService(); goto jMaFm; jg8bY: NtNXc: goto rIhTu; zSxCW: if ($code1->gt($code2)) { goto j9rcM; } goto gEaq1; UErOd: return $next($request); goto M5T2Q; drEMk: if (!$project->ps_license_code) { goto o85AA; } goto BFT5d; dcmO0: goto AlrXG; goto jgxGC; a5Bkm: if (config("\x61\x70\160\56\x64\x65\x76\145\x6c\157\x70\x6d\x65\x6e\164")) { goto gPs2k; } goto V_aV1; Cbaq_: } }
