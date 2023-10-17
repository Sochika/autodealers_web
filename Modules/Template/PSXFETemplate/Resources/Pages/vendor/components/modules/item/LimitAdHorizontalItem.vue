<template>

    <div class="sm:w-full md:w-full" v-on:click="onClick != null ? onClick(buyad) : null">
        <!-- Pscard -->
        <div class="flex flex-col rounded-t-3xl bg-fePrimary-300 px-0">
            <div class="text-center mt-6">
                <ps-label textColor="text-base font-medium text-feSecondary-800">{{buyad ? buyad.package.paymentInfo.value : ''}} {{ $t("package__packages") }}</ps-label>
                <ps-label textColor="text-base font-medium text-feSecondary-800">{{buyad ? buyad.package.paymentAttributes.currencySymbol : ''}}{{buyad ? buyad.package.paymentAttributes.price : ''}}</ps-label>
            </div>
            <div :class="['bg-fePrimary-50 rounded-t-3xl mt-4 text-feSecondary-800 flex flex-col gap-4', padding]">
                <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium ">{{ $t("package__total_post") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">{{buyad ? buyad.user.remainingPost : ''}} {{ $t("package__posts") }}</ps-label>
                </div>
                <!-- <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium ">{{ $t("package__used") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">{{buyad ? buyad.package.paymentAttributes.count : ''}} {{ $t("package__posts") }}</ps-label>
                </div>
                <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium">{{ $t("package__available") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">{{buyad ? buyad.user.remainingPost : ''}} {{ $t("package__posts") }}</ps-label>
                </div> -->
                <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium">{{ $t("package__purchased_date") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">
                        {{ buyad ?  moment(buyad.addedDate.split(" ")[0]).format($page.props.dateFormat)  : ''}}
                    </ps-label>
                </div>
                <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium">{{ $t("package__purchased_time") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">{{buyad ? buyad.addedDate.split(" ")[1] : ''}}</ps-label>
                </div>
                <div class="flex justify-between items-center">
                    <ps-label textColor="text-sm font-medium">{{ $t("package__payment_type") }}</ps-label>
                    <ps-label textColor="text-sm font-medium">{{buyad ? buyad.paymentMethod : ''}}</ps-label>
                </div>
            </div>

                <!-- <div class="pt-2 flex items-center justify-between mx-2 lg:mx-4">
                    <div class="">
                        <ps-label class=" truncate font-medium text-sm lg:text-base" > {{buyad ? buyad.package.payment.name : ''}} </ps-label>
                    </div>
                    <div class="">
                        <ps-label class="pt-1 ps-1 font-medium text-xs lg:text-base bg-pri" textColor=" text-fePrimary-500 dark_text-feAccent-500"> {{ buyad.package.paymentAttributes.currencySymbol }} {{ buyad.price }}</ps-label>
                    </div>
                </div>
                <ps-line class="w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark_border-feAchromatic-500" />
                <div class="pt-2 flex items-center justify-between mx-2 lg:mx-4 ">
                    <div class="">
                        <ps-label class="font-medium text-xs lg:text-base" > {{ $t("profile__buy_limit_ad_payment") }} </ps-label>
                    </div>
                    <div class="">
                        <ps-label class="ms-1 font-medium text-xxs lg:text-sm" > {{ buyad ? buyad?.paymentMethod : '' }} </ps-label>
                    </div>
                </div>
                <div class="pt-2 flex items-center justify-between mx-2 lg:mx-4 mb-2 lg:mb-4">
                    <div class="">
                        <ps-label class="font-medium text-xs lg:text-base" > {{ $t("profile__buy_limit_ad_date") }} </ps-label>
                    </div>
                    <div class="">
                        <ps-label class="truncate ms-1 font-medium text-xxs lg:text-sm" > {{ buyad ? buyad?.addedDate : '' }} </ps-label>
                    </div>
                </div> -->


        </div>
    </div>
    <!-- END Pscard -->
</template>

<script lang="ts">

// Components
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsCard from '@template1/vendor/components/core/card/PsCard.vue';
import PsLine from '@template1/vendor/components/core/line/PsLine.vue';

//language

// test

import { trans } from 'laravel-vue-i18n';
import format from 'number-format.js';

// Objects
import LimitAdTransaction from '@templateCore/object/LimitAdTransaction';

// Providers
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import { usePsValueHolderState } from '@templateCore/object/core/PsValueHolder';
import moment from "moment";

export default {
    name : "LimitAdHorizontalItem",
    components : {
        PsLabel,
        PsCard,
        PsLine
    },
    props : {
        buyad : { type : LimitAdTransaction } ,
        onClick : Function,
        padding: {
            type: String,
            default: "py-10 px-10 lg:px-3"
        }
    },
    setup() {
        // Inject Provider
        PsValueStore.psValueStore = usePsValueHolderState();

        const psValueStore = PsValueStore();
        const loginUserId = psValueStore.getLoginUserId();
        const appInfoParameterHolder = new AppInfoParameterHolder();
        appInfoParameterHolder.userId = loginUserId;
        const appInfoStore = usePsAppInfoStoreState();
        // appInfoStore.loadAppInfo(appInfoParameterHolder);
        function formatPrice(value) {
            if(value.toString() == '0') {
                return trans('item_price__free');
            }else {
                return format(appInfoStore.appInfo.data.mobileSetting?.price_format, value);
            }
        }
        return {
            formatPrice,
            psValueStore,
            moment
        }
    }
}
</script>
