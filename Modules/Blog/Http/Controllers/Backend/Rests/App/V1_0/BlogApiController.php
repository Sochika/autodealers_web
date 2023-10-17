<?php

namespace Modules\Blog\Http\Controllers\Backend\Rests\App\V1_0;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Blog\Http\Services\BlogService;
use Modules\Blog\Transformers\Api\App\V1_0\BlogApiResource;

class BlogApiController extends Controller
{
    protected $blogService;

    public function __construct(BlogService $blogService)
    {
        $this->blogService = $blogService;
    }

    public function search(Request $request)
    {
        $blogs = $this->blogService->searchFromApi($request);
        $data = BlogApiResource::collection($blogs);

        $hasError = $this->blogService->noDataError( $request->offset, $data);

        if($hasError)
            return $hasError;
        else {
            return $data;
        }
    }

    public function detail(Request $request)
    {
        $response = $this->blogService->detailFromApi($request);


        if(isset($response['error'])) {
            return responseMsgApi($response['error'], $this->notFoundStatusCode);
        } else  {

            $blog = new BlogApiResource($response);
            return responseDataApi($blog);
        }
    }
    
}
