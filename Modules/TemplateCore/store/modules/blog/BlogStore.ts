
import { reactive,ref } from 'vue';

import PsApiService from '@templateCore/api/PsApiService';
import PsResource from '@templateCore/api/common/PsResource';
import Blog from '@templateCore/object/Blog';
import BlogListParameterHolder from '@templateCore/object/holder/BlogListParameterHolder';
import { defineStore  } from 'pinia'

import makeSeparatedStore from '@templateCore/store/modules/core/PsSepetetedStore';


export const useBlogStoreState = makeSeparatedStore((key: string) =>
defineStore(`blogStore/${key}`,
 () => {

    const isNoMoreRecord = reactive({
        value: false
    })
    const blogList = reactive<PsResource<Blog[]>>(new PsResource());
    const blog = reactive<PsResource<Blog>>(new PsResource());
    const loading = reactive({
        value: false
    });

    let limit = ref(9);
    let offset: Number = 0;

    let paramHolder = reactive<BlogListParameterHolder>(new BlogListParameterHolder().BlogListParameterHolder());

    function updateBlogList(responseData: PsResource<Blog[]>) {

        if (blogList != null
            && blogList.data != null
            && blogList.data.length > 0
            && offset != 0) {

            if (responseData.data != null && responseData.data.length > 0) {
                if(responseData.data?.length < limit.value){
                    isNoMoreRecord.value = true;
                } else {
                    isNoMoreRecord.value = false;
                }
                blogList.data.push(...responseData.data);
            }else {
                isNoMoreRecord.value = true;
            }

            blogList.code = responseData.code;
            blogList.status = responseData.status;
            blogList.message = responseData.message;

        } else {

            if(responseData.data?.length < limit.value || responseData.data == null){
                isNoMoreRecord.value = true;
            } else {
                isNoMoreRecord.value = false;
            }

            blogList.data = responseData.data;
            blogList.code = responseData.code;
            blogList.status = responseData.status;
            blogList.message = responseData.message;


        }

        if (blogList != null && blogList.data != null) {
            offset = blogList.data.length;
        }

    }

    async function loadBlogList(loginUserId:string,holder: BlogListParameterHolder) {

        loading.value = true;

        const responseData = await PsApiService.getBlogList<Blog>(new Blog(), limit.value, offset, loginUserId, holder.toMap());

        updateBlogList(responseData);


        loading.value = false;

    }

    async function loadBlog(blogId: string, loginUserId: string) {

        loading.value = true;

        const responseData = await PsApiService.getBlogDetail<Blog>(new Blog(), blogId, loginUserId, limit.value, offset);

        blog.data = responseData.data;
        blog.code = responseData.code;
        blog.status = responseData.status;
        blog.message = responseData.message;

        loading.value = false;

        return blog;

    }

    async function resetBlogList(loginUserId:string,holder: BlogListParameterHolder) {

        offset = 0;

        loading.value = true;

        const responseData = await PsApiService.getBlogList<Blog>(new Blog(), limit.value, offset, loginUserId, holder.toMap());

        updateBlogList(responseData);

        loading.value = false;

    }

    return {
        isNoMoreRecord,
        blogList,
        blog,
        loading,
        limit,
        offset,
        paramHolder,
        loadBlogList,
        loadBlog,
        resetBlogList

    }

}),
);
