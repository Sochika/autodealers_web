import PsResource from '@templateCore/api/common/PsResource';
import axios from 'axios';
import PsStatus from './PsStatus';
import { PsObject } from '@templateCore/object/core/PsObject';
import { Head, Link, usePage } from '@inertiajs/vue3';
// import PsUtils from '@templateCore/utils/PsUtils';


axios.defaults.headers.common['Authorization'] = 'Bearer zUMi0HNjAtnREMj3weG7XEv6ogEVovsf6eUFgOp4';
let sub_domain_url = '';
// console.log(usePage().props.dir);
let clearSlash =  import.meta.env.VITE_APP_DIR;
// let subFolder = clearSlash.replaceAll("\\", "");
let subFolder = clearSlash;

if(import.meta.env.VITE_APP_ENV == "production"){

    if(subFolder != null && subFolder != '')
    {
        sub_domain_url = '/'  + import.meta.env.VITE_APP_DIR;
    }
    else
    {
        sub_domain_url = '';
    }


}else{
    sub_domain_url = '';
}

const base_url = sub_domain_url+"/api/v1.0"

export default class PsApi {

    // getData
    static async getData<T extends PsObject<T>, R>(obj: T, url: String): Promise<PsResource<R>> {

        axios.defaults.headers.post['header-token'] = localStorage.headerToken;

        const psResource: PsResource<R> = new PsResource();

        await axios.get(base_url + '' + url
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    for (let i = 0; i < response.data.length; i++) {

                        tList.push(obj.fromMap(response.data[i]));
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    if(response.data.message.includes("##")) {
                        const arr = response.data.message.split('##');
                        psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                    }else {
                        psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);
                    }

                } else {

                    psResource.init(PsStatus.ERROR, 404, "Get Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                }else if(error.response.data.message.includes("##")) {
                    const arr = error.response.data.message.split('##');
                    psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                }else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }


            } else {
                psResource.init(PsStatus.ERROR, 404, "Get Error 2", null as any);
            }

        });
        return psResource;
    }

    // post Data
    static async postData<T extends PsObject<T>, R>(obj: T, url: String, postData: any): Promise<PsResource<R>> {
        axios.defaults.headers.post['header-token'] = localStorage.headerToken;
        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url, postData
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {
                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {
                    //if 204 no content
                    if(response.data == ''){

                        psResource.init(PsStatus.SUCCESS, response.status, "", null as any);
                    }else{
                        psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                    }
                }
            } else {

                if (response) {

                    if(response.data.message.includes("##")) {
                        const arr = response.data.message.split('##');
                        psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                    }else {
                        psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);
                    }


                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            console.log(error);
            if (error.response != null
                && error.response.data != null
                && error.response.data.message != null) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                }else if(error.response.data.message.includes("##")) {
                    const arr = error.response.data.message.split('##');
                    psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                }else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }

            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

    // post JsonData
    static async postJsonData<T extends PsObject<T>, R>(obj: T, url: String, postData: any): Promise<PsResource<R>> {
        axios.defaults.headers.post['header-token'] = localStorage.headerToken;
        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url, postData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {

            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {
                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                        console.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {
                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {

                if (response) {

                    if(response.data.message.includes("##")) {
                        const arr = response.data.message.split('##');
                        psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                    }else {
                        psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);
                    }


                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response != null
                && error.response.data != null
                && error.response.data.message != null) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                }else if(error.response.data.message.includes("##")) {
                    const arr = error.response.data.message.split('##');
                    psResource.init(PsStatus.ERROR, arr[0], arr[1], null as any);
                }else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }

            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

    // post upload chat image
    static async postUploadChatImage<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        senderIdText : String,
        senderId : String,
        sellerUserIdText : String,
        sellerUserId : String,
        buyerUserIdText : String,
        buyerUserId : String,
        itemIdText : String,
        itemId : String,
        typeText : String,
        type : String,
        isUserOnlineFlagText : String,
        isUserOnlineFlag : String,
        file: File): Promise<PsResource<R>> {

            /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('file', file);


        formData.append(senderIdText+'', senderId+'');
        formData.append(sellerUserIdText+'', sellerUserId+'');
        formData.append(buyerUserIdText+'', buyerUserId+'');
        formData.append(itemIdText+'', itemId+'');
        formData.append(typeText+'', type+'');
        formData.append(isUserOnlineFlagText+'', isUserOnlineFlag+'');
        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

    // postUploadImage
    static async postUploadImage<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        userIdText : String,
        userId : String,
        platformNameText : String,
        platformName : String,
        file: File,
        imgIdText : String,
        imgId): Promise<PsResource<R>> {
            /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('file', file);

        formData.append(userIdText+'', userId+'');
        formData.append(platformNameText+'', platformName+'');
        formData.append(imgIdText+'', imgId+'');
        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

    // postUploadImage
    static async postUploadItemImage<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        item_id : String,
        imgParentId : String,
        img_type : String,
        imgType : String,
        ordering : Number,
        imgDesc : String,
        file: File,
        img_id : String,
        imgId : String): Promise<PsResource<R>> {

        /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('cover', file);
        formData.append(item_id+'', imgParentId+'');
        // formData.append(img_type+'', imgType+'');
        formData.append('ordering', ordering+'');
        // formData.append('img_desc', imgDesc+'');
        formData.append(img_id+'', imgId+'');
        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

     // postUploadImage
     static async postUploadVideoImage<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        item_id : String,
        imgParentId : String,
        img_id : String,
        file: File): Promise<PsResource<R>> {

        /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('video', file);
        formData.append(item_id+'', imgParentId+'');
        formData.append('img_id', img_id+'');

        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

     // postUploadImage
     static async postUploadVideoThumbUpload<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        item_id : String,
        imgParentId : String,
        file: File): Promise<PsResource<R>> {

        /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('video_icon', file);
        formData.append(item_id+'', imgParentId+'');

        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }

    // postUploadChatImage
    // TODO


    // postUploadDealership
    static async postUploadDealerUpload<T extends PsObject<T>, R>(
        obj: T,
        url: String,
        user_id : String,
        imgParentId : String,
        file: File): Promise<PsResource<R>> {


        /*
          Initialize the form data
        */
        const formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */

        formData.append('file', file);
        formData.append(user_id+'', imgParentId+'');

        const psResource: PsResource<R> = new PsResource();
        await axios.post(base_url + '' + url,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(response => {
            // PsUtils.clear();
            if (this.isSuccessful(response.status)) {

                if (Array.isArray(response.data)) {

                    const tList: T[] = [];

                    try {
                        for (let i = 0; i < response.data.length; i++) {
                            tList.push(obj.fromMap(response.data[i]));
                        }
                    } catch (e) {
                        // PsUtils.log(e);
                    }

                    psResource.init(PsStatus.SUCCESS, response.status, "", tList as any);

                } else {

                    psResource.init(PsStatus.SUCCESS, response.status, "", obj.fromMap(response.data) as any);
                }
            } else {
                if (response) {
                    psResource.init(PsStatus.ERROR, response.status, response.data.message, null as any);

                } else {
                    psResource.init(PsStatus.ERROR, 404, "Post Error 1", null as any);
                }
            }

        }).catch(error => {
            // PsUtils.clear();
            if (error.response) {
                if(error.response && error.response.status === 404) {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                    //console.clear();
                } else {
                    psResource.init(PsStatus.ERROR, error.response.status, error.response.data.message, null as any);
                }
            } else {
                psResource.init(PsStatus.ERROR, 404, "Post Error 2", null as any);
            }

        });

        return psResource;
    }


    static isSuccessful(code): boolean {
        return parseInt(code) >= 200 && parseInt(code) < 300;
    }
}
