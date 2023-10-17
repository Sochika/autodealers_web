import { reactive,ref } from 'vue';
import PsApiService from '@templateCore/api/PsApiService';
import PsResource from '@templateCore/api/common/PsResource';
import PsAppInfo from '@templateCore/object/PsAppInfo';
import { PsValueStore } from '@templateCore/store/modules/core/PsValueStore';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import PsUtils from '@templateCore/utils/PsUtils';
import PsConst from '@templateCore/object/constant/ps_constants';
import { defineStore } from 'pinia'

export const usePsAppInfoStoreState = defineStore('AppInfoStore',
 () => {
    let appInfo = reactive<PsResource<PsAppInfo>>(new PsResource());
    let loading = reactive({
        value: false
    });
    let isThumbnailGenerate : boolean = false;

    let id: string = "";
    let realStartDate: string = '0';
    let realEndDate: string = '0';


    async function loadAppInfo(holder: AppInfoParameterHolder) {

        loading.value = true;
        // if (PsValueStore.psValueStore == null || PsValueStore.psValueStore.startDate == null) {
        //     realStartDate = PsUtils.formatDate(new Date());
        // } else {
        //     realStartDate = PsValueStore.psValueStore.endDate;

        // }

        // realEndDate = PsUtils.formatDate(new Date());

        // holder.startDate = realStartDate;
        // holder.endDate = realEndDate;

        let userId = PsConst.NO_LOGIN_USER;
        if(holder){
            userId = holder.userId;
        }

        const psValueStore = PsValueStore();
        const response = await PsApiService.postPsAppInfo<PsAppInfo>(new PsAppInfo(), userId);

        appInfo.data = response.data;
        appInfo.code = response.code;
        appInfo.status = response.status;
        appInfo.message = response.message;

        if(appInfo.psAppSetting?.isThumbnailGenerate == PsConst.ONE){
            isThumbnailGenerate = true;
        }

        psValueStore.replacePublishKey(appInfo.data.stripePublishableKey);

        loading.value = false;

        return appInfo;

    }

    return{
        appInfo,
        loading,
        id,
        isThumbnailGenerate,
        realStartDate,
        realEndDate,
        loadAppInfo


    }

})
