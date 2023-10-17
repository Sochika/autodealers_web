<template>
       <ps-modal ref="psmodal" :isClickOut='false' :maxWidth="'405px'" :bodyHeight="'100px'" theme="p-6 rounded-md -z-10">
        <template #title>
             <!-- Item entry title -->
            <div class="flex justify-between">
                <ps-label-header-6 > {{ $t('offer_modal__make_offer_for_this_item') }}</ps-label-header-6>
                <ps-icon name="close" class="text-feAchromatic-400 hover:cursor-pointer" @click.prevent="psmodal.toggle(false)"></ps-icon>
            </div>
        </template>
        <template #body>

            <!-- Start Input Field for md .. -->
            <div class="flex justify-between container w-full h-auto">
                <!-- Start Left Screen -->
                <div class="flex flex-col w-full">
                    <div class="flex flex-row w-full justify-center bg-feAchromatic-50 rounded-md mb-4 dark_bg-feAchromatic-900">

                        <div class="my-4">
                            <img alt="Placeholder" width="300px" height="300px" class="rounded-md w-[120px] h-[120px] flex items-center justify-center object-contail"
                            v-lazy=" { src: $page.props.thumb2xUrl + '/' +itemImage, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }"
                            >
                        </div>
                        <div class="ms-6 my-auto">
                            <ps-label class="text-medium text-lg " textColor="font-semibold text-fePrimary-500"> {{ itemName.length > 20 ? itemName.slice(0,15)+'....' : itemName }} </ps-label>
                            <ps-label class="font-normal text-lg"> {{ itemCategory }} </ps-label>
                            <ps-label class='font-normal text-xs' textColor="text-feAchromatic-500"> {{ currency }} {{ formatPrice(itemPrice) }}   </ps-label>
                        </div>

                     </div>
                     <div class="flex flex-row w-full">
                            <!-- <ps-label class="mt-4 "> {{currency }}</ps-label> -->

                        <div class="flex w-full">
                            <ps-dropdown align="left" class="mt-2 absolute left-1.5" :isPopup="true" @click="loadCurrency">
                                <template #select>
                                    <ps-label class="">
                                        <button
                                        type="button"
                                        class="border inline-flex items-center content-start justify-between w-full h-10 lg:rounded rounded-x
                                        px-4  bg-feSecondary-000 text-sm leading-5 font-medium text-feSecondary-500 dark_text-feSecondary-200
                                        focus:shadow-outline-blue active_bg-feAchromatic-100 active_text-feSecondary-600 transition
                                        ease-in-out duration-150 btn-focus
                                        dark_bg-feSecondary-800 dark_border-feSecondary-200 "
                                        aria-haspopup="true"
                                        aria-expanded="true">
                                        <!-- <ps-icon textColor="text-feSecondary-400 dark_text-feAchromatic-500" name="location" /> -->
                                        <!-- <ps-label v-if="paramHolder1.value.currencyShortForm" textColor="font-normal text-feSecondary-500 dark_text-feSecondary-200" class=" text-start"> {{ paramHolder1.value.currencyShortForm }} </ps-label> -->
                                        <ps-label textColor="font-normal text-feSecondary-500 dark_text-feSecondary-200"> {{ currency }} </ps-label>
                                        <ps-icon class="text-lg" textColor="text-feSecondary-400 dark_text-feSecondary-200" name="upArrow"   />
                                        </button>
                                    </ps-label>
                                </template>
                                <!-- <template #filter>
                                    <div>
                                        <ps-input-with-left-icon :placeholder="$t('offer_modal__search')" rounded="rounded-t-lg" theme="ring-fePrimary-200 dark_ring-feAchromatic-500 focus:outline-none focus_ring focus_border-fePrimary-200 border-feSecondary-300 lg:rounded rounded-x bg-feSecondary-200 dark_bg-feAchromatic-800 text-feSecondary-500 dark_text-feAchromatic-50" height="h-10"  >
                                            <template #icon>
                                                <ps-icon textColor="text-fePrimary-500 dark_text-feAchromatic-500" name="search" class='cursor-pointer' @click="filterCurrency(itemCurrencyStore.filterKeyword)"/>
                                            </template>
                                        </ps-input-with-left-icon>
                                    </div>
                                </template> -->
                                <template #list>
                                    <div v-if="itemCurrencyStore.itemCurrencyList.data == null">
                                        <ps-label class='p-2 flex' @click="loadCurrency">  {{ $t("item_entry__loading") }} </ps-label >
                                    </div>
                                    <div v-else>
                                        <div v-for="itemcurrency in itemCurrencyStore.itemCurrencyList.data" :key="itemcurrency.id"
                                        class="w-56 flex py-4 px-2 hover_bg-fePrimary-000 dark_hover_bg-fePrimary-900 cursor-pointer items-center"
                                        @click="currencyFilterClicked(itemcurrency)" >
                                            <ps-label class="ms-2" :class="itemcurrency.currencySymbol == currency ? ' font-bold' : ''"  > {{itemcurrency.currencySymbol}} - {{ itemcurrency.currencyShortForm }} </ps-label>
                                        </div>
                                    </div>
                                </template>
                                <template #loadmore>
                                    <div class="mb-2 w-56">
                                        <div  v-if="itemCurrencyStore.itemCurrencyList.data != null
                                        && itemCurrencyStore.loading.value == true" class='mt-4 ms-4 flex'>
                                        <ps-label-caption >{{ $t("search_for_large_screem__loading") }} </ps-label-caption>
                                        </div>
                                        <ps-label v-if="!itemCurrencyStore.isNoMoreRecord" class="flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer"   @click="loadCurrency" > {{ $t("search_for_large_screem__load_more") }} </ps-label>
                                    </div>
                                </template>
                            </ps-dropdown>
                            <ps-input class="mt-2 ms-2"  type="text"  v-bind:placeholder="$t('report_item_modal__title')" v-model:value="negoPrice"></ps-input>
                        </div>

                     </div>
                </div>
                <!-- End Left Screen -->
            </div>
            <!-- End Input Field -->
        </template>
        <template #footer>
            <!-- <div class="flex items-center justify-center mb-4">
                <ps-button class="text-center w-60 mx-auto " @click="submitClicked(negoPrice)" > {{ $t('offer_modal__make_offer') }}</ps-button>
                <ps-button class="text-center w-60 mx-auto  ms-4" theme="btn-second" @click="psmodal.toggle(false)" > {{ $t('offer_modal__cancel') }}  </ps-button>

                @click="clicked"> Submit </ps-button>
            </div> -->
            <div class="grid grid-cols-4 gap-6">
                <ps-button @click="submitClicked(negoPrice,currency)" textSize="text-xxs lg:text-sm" class="col-span-2"  > {{ $t("offer_modal__make_offer") }}</ps-button>
                <ps-button @click="psmodal.toggle(false)" textSize="text-xxs lg:text-sm" class="col-span-2" colors="bg-feAchromatic-50 dark_bg-feAchromatic-800 dark_text-feAchromatic-200 hover_text-feAchromatic-50" border="border border-feAchromatic-300 dark_border-feAchromatic-500"> {{ $t("offer_modal__cancel") }} </ps-button>
            </div>
        </template>

    </ps-modal>

    <ps-loading-dialog ref="ps_loading_dialog"  :isClickOut='false'/>

    <ps-error-dialog ref="ps_error_dialog" />


</template>

<script lang='ts'>

// Libs
import { defineComponent, onMounted, ref } from 'vue';
import { useItemCurrencyStoreState } from '@templateCore/store/modules/item/ItemCurrencyStore';
// Compone
import PsModal from '@template1/vendor/components/core/modals/PsModal.vue';
import PsLabelHeader6 from '@template1/vendor/components/core/label/PsLabelHeader6.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsInput from '@template1/vendor/components/core/input/PsInput.vue'
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsErrorDialog from '@template1/vendor/components/core/dialog/PsErrorDialog.vue';
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import { useGetChatHistoryStoreState } from "@templateCore/store/modules/chat/GetChatHistoryStore";
import PsDropdown from '@template1/vendor/components/core/dropdown/PsDropdown.vue';
import ItemEntryParameterHolder from '@templateCore/object/holder/ItemEntryParameterHolder';
import PsInputWithLeftIcon from '@template1/vendor/components/core/input/PsInputWithLeftIcon.vue';
import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import format from 'number-format.js';
import { trans } from 'laravel-vue-i18n';
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore'

export default defineComponent({
    name: "OfferModal",
    components: {
        PsModal,
        PsLabelHeader6,
        PsLabel,
        PsButton,
        PsErrorDialog,
        PsLoadingDialog,
        PsInput,
        PsIcon,
        PsDropdown,
        PsInputWithLeftIcon,
        PsLabelCaption
    },
    props : {
        price : {
            type : String,
            default : '0'
        }
    },
    emits: ['submit'],
    setup(props, context) {
        const psmodal = ref();
        const title = ref('');
        const message = ref('');
        const ps_loading_dialog = ref();
        const ps_error_dialog = ref();
        const itemId = '';
        let itemName = ref('');
        let itemImage = ref('');
        let itemCategory = ref('');
        let currency = ref('');
        const buyerUserId = '';
        const sellerUserId = '';
        const itemCurrencyStore = useItemCurrencyStoreState('entry');

        let negoPrice = ref(props.price);
        let itemPrice= ref('');
        // Init Provider
        const appInfoStore = usePsAppInfoStoreState();
        const chatHistoryProvider = useGetChatHistoryStoreState();
        const psValueStore = PsValueStore();
        const loginUserId = psValueStore.getLoginUserId();
        const paramHolder1 = ref(new ItemEntryParameterHolder());

        function openModal(itemNameParam,itemCategoryParam, itemImageNameParam, currencyParam, priceParam) {

            itemName.value = itemNameParam;
            itemCategory.value = itemCategoryParam;
            itemImage.value =itemImageNameParam;
            currency.value = currencyParam;
            negoPrice.value = priceParam;
            itemPrice.value = priceParam;
            psmodal.value.toggle(true);

        }

        function submitClicked(negoPrice,currency) {
            context.emit('submit',negoPrice,currency);
            psmodal.value.toggle(false);
        }
        function loadCurrency(){
            itemCurrencyStore.loadItemCurrencyList(loginUserId);
        }

        function filterCurrency(value){
            itemCurrencyStore.resetItemCurrencyList()
        }
        function currencyFilterClicked(value) {
                currency.value = value.currencySymbol;
                // alert(currency.value)
                // validation.value.itemCurrencyStatus = false;
        }

        function formatPrice(value) {
            if(value.toString() == '0') {
                return trans('item_price__free');
            }else {
                return format(appInfoStore?.appInfo?.data?.mobileSetting?.price_format, value)
            }
        }

        // onMounted(() => {
        //     itemCurrencyStore.reset
        // })

        return {
            psmodal,
            openModal,
            itemId,
            itemName,
            itemCategory,
            itemImage,
            currency,
            buyerUserId,
            sellerUserId,
            negoPrice,
            itemPrice,
            title,
            message,
            submitClicked,
            ps_loading_dialog,
            ps_error_dialog,
            chatHistoryProvider,
            itemCurrencyStore,
            loadCurrency,
            paramHolder1,
            currencyFilterClicked,
            formatPrice
        }
    },
})
</script>
