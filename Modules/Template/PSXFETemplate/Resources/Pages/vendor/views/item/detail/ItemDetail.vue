<template>
    <Head :title="$t('item__detail')" />
    <ps-content-container>
        <template #content>
            <div class="mt-32 mb-10">
                <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-24">
                    <div class="">
                        <ps-breadcrumb-2 :items="breadcrumb" />
                    </div>

                    <div class="flex items-center gap-7 self-end">
                        <ps-label textColor="text-sm text-feInfo-500 cursor-pointer"
                            @click="shareClicked(productStore.item?.data?.dynamicLink)">{{ $t('item_detail__share')
                            }}</ps-label>
                        <div v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId">
                            <ps-label textColor="text-sm text-fePrimary-500 cursor-pointer" @click="reportItemClicked">{{
                                $t('item_detail__report_this_ad') }}</ps-label>
                        </div>
                    </div>
                </div>


                <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div class="col-span-1 sm:col-span-7 md:col-span-8">
                        <!-- gallery start -->
                        <gallery-vertical-swiper :galleryList="galleryProvider.galleryList?.data"
                            :video="videoStore.galleryList?.data"
                            :isLoading="galleryProvider.galleryList.data == null && dataReady ? false : true" />
                        
                        <!-- gallery end -->

                        <!-- price start -->
                        <div
                            class="flex flex-col px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800 mt-6 sm:hidden">
                            <div class="flex justify-between">
                                <div class="flex flex-wrap items-center gap-1">
                                    <div
                                        v-if="productStore.item?.data?.isDiscount == '1' && appInfoProvider.appInfo.data?.mobileSetting?.is_show_discount == '1'">
                                        <ps-label
                                            textColor="line-through text-lg font-semibold text-feSecondart-600 dark:text-feSecondary-200">
                                            <span v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType ==  PsConst.NORMAL_PRICE">{{ productStore.item?.data?.itemCurrency?.currencySymbol }}</span>
                                            {{ formatPrice(productStore.item?.data ? productStore.item?.data?.originalPrice
                                                :
                                                '') }}</ps-label>
                                    </div>
                                    <ps-label textColor="text-4xl font-semibold text-fePrimary-500 ">
                                        <span v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType == PsConst.NORMAL_PRICE">{{ productStore.item?.data?.itemCurrency?.currencySymbol }}</span>
                                        {{ formatPrice(productStore.item?.data ? productStore.item?.data?.price :
                                            '') }}</ps-label>
                                </div>

                                <ps-button
                                    v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId"
                                    padding="p-2"
                                    colors="bg-feAchromatic-50 text-fePrimary-500 dark:bg-feSecondary-700 dark:text-fePrimary-500"
                                    border="border" hover="" focus="" @click="favouriteClicked">
                                    <ps-icon textColor="text-fePrimary-500 dark:text-fePrimary-500"
                                        v-if="productStore.item?.data?.isFavourited == '1'" name="heart" w="24" h="24" />
                                    <ps-icon textColor="text-fePrimary-500 dark:text-fePrimary-500" v-else
                                        name="heart-outline" w="24" h="24" />
                                </ps-button>
                                <ps-route-link
                                    v-else-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId == loginUserId && submitButtonShow == true"
                                    class="cursor-pointer"
                                    :to="{ name: 'fe_item_entry', query: { itemId: productStore.item?.data?.id } }">
                                    <ps-icon textColor="text-fePrimary-500" name="pencil" w="24" h="24" />
                                </ps-route-link>
                            </div>
                            <div class="mt-4">
                                <ps-label textColor="text-base font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                    productStore.item?.data ? productStore.item?.data?.title : '' }}</ps-label>
                            </div>
                            <div class="flex justify-between items-center mt-7">
                                <div class="flex">
                                    <ps-icon name="location" w="20" h="20" viewBox="0 -2 19 19" />
                                    <ps-label
                                        textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                            productStore.item?.data ? productStore.item?.data?.itemLocation.name : ''
                                        }}</ps-label>
                                </div>
                                <ps-label textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                    productStore.item?.data ? productStore.item?.data?.addedDateStr : '' }}</ps-label>
                            </div>
                        </div>
                        <!-- price end -->

                        <!-- item details start -->
                        <!-- <div v-for="productRelation in productStore.item?.data?.productRelation.filter((pr) => pr.coreKeysId == 'ps-itm00008')" :key="productRelation.id"> -->
                        <div class="flex items-center gap-3 mt-4"
                            v-if="productStore.item?.data?.productRelation.filter((pr) => pr.coreKeysId == 'ps-itm00008').length != 0 && productStore.item?.data?.productRelation.filter((pr) => pr.coreKeysId == 'ps-itm00008')[0]?.selectedValue[0]?.value != ''">
                            <ps-icon textColor="text-fePrimary-500 dark:text-fePrimary-500" name="case" w="24" h="24" />
                            <ps-label textColor="text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50">{{
                                $t('item_detail__multi_item') }}</ps-label>
                        </div>
                        <div class="flex items-center gap-3 mt-4" v-else>
                            <ps-icon textColor="text-fePrimary-500 dark:text-fePrimary-500" name="case" w="24" h="24" />
                            <ps-label textColor="text-base font-semibold text-feSecondary-600 dark:text-feSecondary-50">{{
                                $t('item_detail__single_item') }}</ps-label>
                        </div>
                        <!-- </div> -->
                        <div class="bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 mt-6">
                            <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                $t('item_detail__details') }}</ps-label>
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <div v-for="pr in productRelation" :key="pr.id" class="">
                                    <ps-label
                                        textColor="text-base font-medium text-feSecondary-800 dark:text-feSecondary-50">{{
                                            itemCustomFieldStore.customField.data?.customList.filter((cf) => cf.coreKeysId ==
                                                pr.coreKeysId && cf.isVisible == '1')[0]?.name }}</ps-label>
                                    <ps-label
                                        textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200">{{
                                            pr.selectedValue[0].value }}</ps-label>
                                </div>
                                <div class="">
                                    <ps-label
                                        textColor="text-base font-medium text-feSecondary-800 dark:text-feSecondary-50">{{
                                            $t('item_detail__stock') }}</ps-label>
                                    <ps-label
                                        textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200">{{
                                            productStore.item?.data?.isSoldOut == '1' ? $t('item_list__sold_item') :
                                            $t('item_detail__available') }}</ps-label>
                                </div>
                            </div>
                        </div>
                        <!-- item details end -->

                        <!-- description start -->
                        <div class="mt-6 px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800">
                            <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                $t('item_detail__description') }}</ps-label>
                            <div class="mt-6">
                                <ps-label textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200">{{
                                    productStore.item?.data ? productStore.item?.data?.description : '' }}</ps-label>
                            </div>
                        </div>
                        <!-- description end -->

                        <div class="mt-6 sm:hidden">
                            <!-- owner profile start -->
                            <div class="mt-4"
                                v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId">
                                <user-list-horizontal :user="productStore.item?.data?.user" :storeName="itemId" />
                            </div>
                            <!-- owner profile end -->

                            <!-- button group start -->
                           <div class="mt-6" v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId">
                                <div v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedChatType != PsConst.NO_CHAT">
                                    <ps-route-link class="flex flex-grow" :to="{
                                    name: 'fe_chat',
                                    query: {
                                        buyer_user_id: loginUserId,
                                        seller_user_id: productStore.item?.data?.addedUserId,
                                        item_name: productStore.item?.data?.title,
                                        item_id: productStore.item?.data?.id,
                                        item_image_name: productStore.item?.data?.defaultPhoto.imgPath,
                                        item_price: getPrice(),
                                        currency: productStore.item?.data?.itemCurrency.currencySymbol,
                                        condition: productStore.item?.data?.conditionOfItem?.name,
                                        chat_flag: PsConst.CHAT_FROM_SELLER,
                                        is_sold_out: productStore.item?.data?.isSoldOut,

                                    }}">
                                    <ps-button class="w-full flex items-center justify-center" padding="px-4 py-1.5">
                                        <ps-icon class="cursor-pointer" textColor="text-feAchromatic-50 mr-2" name="message" h="20" w="20" />
                                        <ps-label textColor="font-medium text-base">{{ $t("item_detail__chat") }}</ps-label>
                                    </ps-button>
                                </ps-route-link>  
                                </div>  
                                <ps-button  v-if="whatsAppNo != ''" @click="toWhatsApp()" class="w-full flex items-center justify-center mt-4" colors="bg-green-900 text-feAchromatic-50" padding="px-4 py-1.5">
                                    <ps-icon class="cursor-pointer" textColor="text-feAchromatic-50 mr-2" name="whatsapp" h="20" w="20" />
                                    <ps-label textColor="font-medium text-base"> WhatsApp </ps-label>
                                </ps-button>                   
                            </div>
                            <div class="mt-6" v-else>
                                <div
                                    class="flex flex-col px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800">
                                    <div class="flex items-center gap-1">
                                        <ps-icon name="statistic" w="24" h="24" />
                                        <ps-label
                                            textColor="text-base font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                                $t('item_detail__statistic') }}</ps-label>
                                    </div>
                                    <div class="grid grid-cols-2 mt-6">
                                        <div class="flex flex-col items-center border-e-2 border-feSecondary-500">
                                            <ps-label
                                                textColor="font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-50">
                                                {{ productStore.item?.data?.touchCount }} </ps-label>
                                            <div
                                                class="flex items-center gap-1 mt-1 text-feSecondary-800 dark:text-feSecondary-200">
                                                <ps-icon name="eye-on" w="24" h="24" />
                                                <ps-label textColor="font-medium text-base"> {{ $t('item_detail__views') }}
                                                </ps-label>
                                            </div>
                                        </div>
                                        <div class="flex flex-col items-center">
                                            <ps-label
                                                textColor="font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-50">
                                                {{ productStore.item?.data?.favouriteCount }} </ps-label>
                                            <div
                                                class="flex items-center gap-1 mt-1 text-feSecondary-800 dark:text-feSecondary-200">
                                                <ps-icon name="heart-outline" w="24" h="24" />
                                                <ps-label textColor="font-medium text-base"> {{
                                                    $t('item_detail__favourites') }} </ps-label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full flex gap-6 mt-7">
                                    <ps-button padding="p-2" @click="deleteClicked()">
                                        <ps-icon name="trash-alt" w="24" h="24" />
                                    </ps-button>
                                    <ps-button class="grow" v-if="productStore.item?.data && productStore.item?.data.isOwner == PsConst.ONE &&
                                        productStore.item?.data.status == PsConst.ONE &&
                                        (productStore.item?.data.paidStatus == PsConst.ADSNOTAVAILABLE ||
                                            productStore.item?.data?.paidStatus == PsConst.ADSFINISHED) && isPromoteSuccessful == false &&
                                        !isAllPaymentDisable" @click="promoteClicked">
                                        {{ $t('item_detail__promote') }}
                                    </ps-button>
                                    <!-- <ps-button class="grow" v-else-if="isPromoteSuccessful === true" @click="promoteClicked" disabled>
                                        {{ $t('item_detail__promote') }}
                                    </ps-button> -->
                                    <ps-button class="grow" v-else disabled>
                                        {{ $t('item_detail__promote') }}
                                    </ps-button>
                                </div>
                                <div class="w-full flex gap-6 mt-6">
                                    <ps-button class="grow"
                                        v-if="productStore.item?.data && productStore.item.data.isSoldOut == PsConst.ZERO && loginUserId == productStore.item?.data?.user?.userId"
                                        @click="markAsSold">
                                        {{ $t('item_detail__mark_as_sold') }}
                                    </ps-button>
                                    <ps-button class="grow" v-else disabled>
                                        {{ $t('item_detail__mark_as_sold') }}
                                    </ps-button>
                                    <ps-button class="grow" v-if="productStore.item?.data?.status == '1'"
                                        @click="markAsEnableDisable('disable')">
                                        {{ $t('item_detail__mark_as_disable') }}
                                    </ps-button>
                                    <ps-button class="grow" v-if="productStore.item?.data?.status == '2'"
                                        @click="markAsEnableDisable('accept')">
                                        {{ $t('item_detail__mark_as_enable') }}
                                    </ps-button>
                                </div>
                            </div>
                            <!-- button group end -->

                            <!-- item location Pscard -->
                            <div v-if="productStore.item?.data"
                                class="mt-6 px-2 py-6 lg:p-4 bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg">
                                <div class="flex flex-col gap-2 mb-6">
                                    <ps-label
                                        textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                            $t('item_detail__location') }}</ps-label>
                                    <ps-label
                                        v-if="appInfoProvider?.appInfo?.data.psItemUploadConfig?.address == PsConst.ONE"
                                        class="text-feSecondary-800 dark:text-feSecondary-200 font-normal text-sm"> {{
                                            productStore.item?.data?.itemLocation.name }} </ps-label>
                                </div>

                                <map-with-pin-picker
                                    v-if="appInfoProvider?.appInfo?.data.frontendConfigSetting.googleMap == PsConst.ONE"
                                    :lat="parseFloat(productStore.item?.data?.lat + '0')"
                                    :lng="parseFloat(productStore.item?.data?.lng + '0')" :draggable="false" />

                                <open-street-map :dir="$page.props.dir"
                                    v-if="appInfoProvider?.appInfo?.data.frontendConfigSetting.openStreetMap == PsConst.ONE"
                                    mapSize="h-68" :lat="parseFloat(productStore.item?.data?.lat + '0')"
                                    :lng="parseFloat(productStore.item?.data?.lng + '0')" :dragValue="false" />
                            </div>
                            <!-- end item location Pscard -->
                        </div>

                        <!-- other info start -->
                        <div class="col-span-8 mt-6">
                            <div
                                class="bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex flex-col">
                                <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                    $t('item_detail__other_info') }}</ps-label>
                                <div class="flex grid grid-cols-2 gap-2">
                                    <div v-for="productRelation in productStore.item?.data?.productRelation.filter((pr) => pr.coreKeysId == 'ps-itm-rpt00005' || pr.coreKeysId == 'ps-itm00003')"
                                        :key="productRelation.id">
                                        <div
                                            v-if="productRelation.selectedValue[0].value != '' && itemCustomFieldStore.customField.data?.customList.filter((cf) => cf.coreKeysId == productRelation.coreKeysId && cf.isVisible == '1') != ''">
                                            <ps-label
                                                textColor="text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6">{{
                                                    itemCustomFieldStore.customField.data?.customList.filter((cf) => cf.coreKeysId
                                                        == productRelation.coreKeysId && cf.isVisible == '1')[0]?.name }}</ps-label>
                                            <ps-label
                                                textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2">{{
                                                    productRelation.selectedValue[0].value }}</ps-label>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="productRelation in productStore.item?.data?.productRelation.filter((pr) => pr.coreKeysId != 'ps-itm00002' && pr.coreKeysId != 'ps-itm00003' && pr.coreKeysId != 'ps-itm00004' && pr.coreKeysId != 'ps-itm00007' && pr.coreKeysId != 'ps-itm00008' && pr.coreKeysId != 'ps-itm00009' && pr.coreKeysId != 'ps-itm-rpt00005')"
                                    :key="productRelation.id">
                                    <div
                                        v-if="productRelation.selectedValue[0].value != '' && itemCustomFieldStore.customField.data?.customList.filter((cf) => cf.coreKeysId == productRelation.coreKeysId && cf.isVisible == '1') != ''">
                                        <ps-label
                                            textColor="text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6">{{
                                                itemCustomFieldStore.customField.data?.customList.filter((cf) => cf.coreKeysId ==
                                                    productRelation.coreKeysId && cf.isVisible == '1')[0]?.name }}</ps-label>
                                        <ps-label
                                            textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2">{{
                                                productRelation.selectedValue[0].value }}</ps-label>
                                    </div>
                                </div>
                                <div v-if="productStore.item?.data?.phone != null && productStore.item?.data?.phone != ''">
                                    <ps-label
                                        textColor="text-base font-medium text-feSecondary-800 dark:text-feSecondary-50 mt-6">{{
                                            $t('item_detail__contact_numbers') }}</ps-label>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                        <div v-for="(phone, index) in productStore.item?.data.phone.split('#')"
                                            :key="index">
                                            <ps-label
                                                textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-200 mt-2">{{
                                                    phone }}</ps-label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- other info end -->

                        <div class="flex flex-col gap-6 col-span-8 mt-8">
                            <!-- safty tips start -->
                            <div
                                class="bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex justify-between items-center">
                                <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                    $t('item_detail__safety_tips') }}</ps-label>
                                <ps-label textColor="text-sm font-medium text-feInfo-600 cursor-pointer"
                                    @click="safetyTip()">{{ $t('item_detail__learn_more') }}</ps-label>
                            </div>
                            <!-- safty tips end -->

                            <!-- T&C start -->
                            <div
                                class="bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex justify-between items-center">
                                <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                    $t('term_and_condition__term_and_condition') }}</ps-label>
                                <ps-label textColor="text-sm font-medium text-feInfo-600 cursor-pointer"
                                    @click="termsAndConditions()">{{ $t('item_detail__learn_more') }}</ps-label>
                            </div>
                            <!-- T&C end -->

                            <!-- FAQ start -->
                            <div
                                class="bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg px-2 py-4 lg:p-4 flex justify-between items-center">
                                <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                    $t('item_detail__faq') }}</ps-label>
                                <ps-label textColor="text-sm font-medium text-feInfo-600 cursor-pointer" @click="faq()">{{
                                    $t('item_detail__learn_more') }}</ps-label>
                            </div>
                            <!-- FAQ end -->
                        </div>
                    </div>
                    <div class="col-span-1 sm:col-span-5 md:col-span-4 hidden sm:block">
                        <!-- price start -->
                        <div class="flex flex-col px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800">
                            <div class="flex justify-between ">

                                <div v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType != PsConst.NO_PRICE" class="flex flex-wrap items-center gap-1">
                                    <div
                                        v-if="productStore.item?.data?.isDiscount == '1' && appInfoProvider.appInfo.data?.mobileSetting?.is_show_discount == '1'">
                                        <ps-label
                                            textColor="line-through text-lg font-semibold text-feSecondart-600 dark:text-feSecondary-200">
                                            <!-- {{ productStore.item?.data?.itemCurrency?.currencySymbol }} -->
                                            <span v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType ==  PsConst.NORMAL_PRICE">
                                                
                                                {{ productStore.item?.data?.itemCurrency?.currencySymbol }}

                                                {{ formatPrice(productStore.item?.data ? productStore.item?.data?.originalPrice
                                                    :
                                                '') }}
                                            </span>                                        
                                            
                                        </ps-label>
                                    </div>
                                    <ps-label textColor="text-4xl font-semibold text-fePrimary-500 ">
                                        <span v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType ==  PsConst.NORMAL_PRICE">{{ productStore.item?.data?.itemCurrency?.currencySymbol }}</span>
                                        {{ formatPrice(productStore.item?.data ? productStore.item?.data?.price :
                                            '') }}</ps-label>
                                </div>

                                <ps-button
                                    v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId"
                                    padding="p-2"
                                    colors="bg-feAchromatic-50 text-fePrimary-500 dark:bg-feSecondary-700 dark:text-fePrimary-500"
                                    border="border" hover="" focus="" @click="favouriteClicked">
                                    <ps-icon textColor="text-fePrimary-500 dark:text-feAchromatic-50"
                                        v-if="productStore.item?.data?.isFavourited == '1'" name="heart" w="24" h="24" />
                                    <ps-icon textColor="text-fePrimary-500 dark:text-fePrimary-500" v-else
                                        name="heart-outline" w="24" h="24" />
                                </ps-button>
                                <ps-route-link
                                    v-else-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId == loginUserId && submitButtonShow == true"
                                    class="cursor-pointer"
                                    :to="{ name: 'fe_item_entry', query: { itemId: productStore.item?.data?.id } }">
                                    <ps-icon textColor="text-fePrimary-500" name="pencil" w="24" h="24" />
                                </ps-route-link>
                            </div>
                            <div class="mt-4">
                                <ps-label textColor="text-base font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                    productStore.item?.data ? productStore.item?.data?.title : '' }}</ps-label>
                            </div>
                            <div class="flex justify-between items-center mt-7">
                                <div class="flex">
                                    <ps-icon name="location" w="20" h="20" viewBox="0 -2 19 19" />
                                    <ps-label
                                        textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                            productStore.item?.data ? productStore.item?.data?.itemLocation.name : ''
                                        }}</ps-label>
                                </div>
                                <ps-label textColor="text-sm font-normal text-feSecondary-600 dark:text-feSecondary-50">{{
                                    productStore.item?.data ? productStore.item?.data?.addedDateStr : '' }}</ps-label>
                            </div>
                        </div>
                        <!-- price end -->

                        <!-- owner profile start -->
                        <div class="mt-4"
                            v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId">
                            <user-list-horizontal :user="productStore.item?.data?.user" :storeName="itemId" />
                        </div>
                        <!-- owner profile end -->

                        <!-- button group start -->
                        <div class="mt-6"
                            v-if="productStore.item?.data?.user && productStore.item?.data?.user?.userId != loginUserId">
                            <div v-if="appInfoProvider.appInfo.data?.psAppSetting?.SelectedChatType != PsConst.NO_CHAT">
                                <ps-route-link class="flex flex-grow" :to="{
                                name: 'fe_chat',
                                query: {
                                    buyer_user_id: loginUserId,
                                    seller_user_id: productStore.item?.data?.addedUserId,
                                    item_name: productStore.item?.data?.title,
                                    item_id: productStore.item?.data?.id,
                                    item_image_name: productStore.item?.data?.defaultPhoto.imgPath,
                                    item_price: getPrice(),
                                    currency: productStore.item?.data?.itemCurrency.currencySymbol,
                                    condition: productStore.item?.data?.conditionOfItem?.name,
                                    chat_flag: PsConst.CHAT_FROM_SELLER,
                                    is_sold_out: productStore.item?.data?.isSoldOut,

                                }}">
                                <ps-button class="w-full flex items-center justify-center" padding="px-4 py-1.5">
                                    <ps-icon class="cursor-pointer" textColor="text-feAchromatic-50 mr-2" name="message" h="20" w="20" />
                                    <ps-label textColor="font-medium text-base">{{ $t("item_detail__chat") }}</ps-label>
                                </ps-button>
                            </ps-route-link>
                            </div>
                            <ps-button v-if="whatsAppNo != ''" @click="toWhatsApp()" class="w-full flex items-center justify-center mt-4" colors="bg-green-900 text-feAchromatic-50" padding="px-4 py-1.5">
                                <ps-icon class="cursor-pointer" textColor="text-feAchromatic-50 mr-2" name="whatsapp" h="20" w="20" />
                                <ps-label textColor="font-medium text-base"> WhatsApp </ps-label>
                            </ps-button>
                        </div>
                        <div class="mt-6" v-else>
                            <div
                                class="flex flex-col px-2 py-4 lg:p-4 rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800">
                                <div class="flex items-center gap-1">
                                    <ps-icon name="statistic" w="24" h="24" />
                                    <ps-label
                                        textColor="text-base font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                            $t('item_detail__statistic') }}</ps-label>
                                </div>
                                <div class="grid grid-cols-2 mt-6">
                                    <div class="flex flex-col items-center border-e-2 border-feSecondary-500">
                                        <ps-label
                                            textColor="font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-50">
                                            {{ productStore.item?.data?.touchCount }} </ps-label>
                                        <div
                                            class="flex items-center gap-1 mt-1 text-feSecondary-800 dark:text-feSecondary-200">
                                            <ps-icon name="eye-on" w="24" h="24" />
                                            <ps-label textColor="font-medium text-base"> {{ $t('item_detail__views') }}
                                            </ps-label>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <ps-label
                                            textColor="font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-50">
                                            {{ productStore.item?.data?.favouriteCount }} </ps-label>
                                        <div
                                            class="flex items-center gap-1 mt-1 text-feSecondary-800 dark:text-feSecondary-200">
                                            <ps-icon name="heart-outline" w="24" h="24" />
                                            <ps-label textColor="font-medium text-base"> {{ $t('item_detail__favourites') }}
                                            </ps-label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex gap-6 mt-7">
                                <ps-button padding="p-2" @click="deleteClicked()">
                                    <ps-icon name="trash-alt" w="24" h="24" />
                                </ps-button>
                                <ps-button class="grow" v-if="productStore.item?.data && productStore.item?.data.isOwner == PsConst.ONE &&
                                    productStore.item?.data.status == PsConst.ONE &&
                                    (productStore.item?.data.paidStatus == PsConst.ADSNOTAVAILABLE ||
                                        productStore.item?.data?.paidStatus == PsConst.ADSFINISHED) && isPromoteSuccessful == false &&
                                    !isAllPaymentDisable" @click="promoteClicked">
                                    {{ $t('item_detail__promote') }}
                                </ps-button>
                                <!-- <ps-button class="grow" v-else-if="isPromoteSuccessful === true" @click="promoteClicked" disabled>
                                    {{ $t('item_detail__promote') }}
                                </ps-button> -->
                                <ps-button class="grow" v-else disabled>
                                    {{ $t('item_detail__promote') }}
                                </ps-button>
                            </div>
                            <div class="w-full flex gap-6 mt-6">
                                <ps-button class="grow"
                                    v-if="productStore.item?.data && productStore.item.data.isSoldOut == PsConst.ZERO && loginUserId == productStore.item?.data?.user?.userId"
                                    @click="markAsSold">
                                    {{ $t('item_detail__mark_as_sold') }}
                                </ps-button>
                                <ps-button class="grow" v-else disabled>
                                    {{ $t('item_detail__mark_as_sold') }}
                                </ps-button>
                                <ps-button class="grow" v-if="productStore.item?.data?.status == '1'"
                                    @click="markAsEnableDisable('disable')">
                                    {{ $t('item_detail__mark_as_disable') }}
                                </ps-button>
                                <ps-button class="grow" v-if="productStore.item?.data?.status == '2'"
                                    @click="markAsEnableDisable('accept')">
                                    {{ $t('item_detail__mark_as_enable') }}
                                </ps-button>
                            </div>
                        </div>
                        <!-- button group end -->

                        <!-- item location Pscard -->
                        <div v-if="productStore.item?.data"
                            class="mt-6 px-2 py-6 lg:p-4 bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg">
                            <div class="flex flex-col gap-2 mb-6">
                                <ps-label textColor="text-xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                    $t('item_detail__location') }}</ps-label>
                                <ps-label v-if="appInfoProvider?.appInfo?.data.psItemUploadConfig?.address == PsConst.ONE"
                                    class="text-feSecondary-800 dark:text-feSecondary-200 font-normal text-sm"> {{
                                        productStore.item?.data?.itemLocation.name }} </ps-label>
                            </div>

                            <map-with-pin-picker
                                v-if="appInfoProvider?.appInfo?.data.frontendConfigSetting.googleMap == PsConst.ONE"
                                :lat="parseFloat(productStore.item?.data?.lat + '0')"
                                :lng="parseFloat(productStore.item?.data?.lng + '0')" :draggable="false" />

                            <open-street-map mapContainer="mapContainer2" :dir="$page.props.dir"
                                v-if="appInfoProvider?.appInfo?.data.frontendConfigSetting.openStreetMap == PsConst.ONE"
                                mapSize="h-68" :lat="parseFloat(productStore.item?.data?.lat + '0')"
                                :lng="parseFloat(productStore.item?.data?.lng + '0')" :dragValue="false" />
                        </div>
                        <!-- end item location Pscard -->
                    </div>
                </div>

                <div class="">
                    <!-- Start related items -->
                    <div v-if="relatedItemStore.loading.value || relatedItemStore.itemList?.data != null">
                        <div class="flex justify-between items-center mt-10">
                            <ps-label textColor="text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-50">{{
                                $t("core__fe_related_items") }}</ps-label>
                            <ps-route-link :to="{
                                name: 'fe_item_list', params: {
                                    cat_id: productStore.item?.data?.category?.catId,
                                    cat_name: productStore.item?.data?.category?.catName
                                }
                            }">
                                <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm"
                                    rounded="rounded" hover="" focus=""
                                    border="border border-feSecondary-200 dark:border-feSecondary-800"
                                    colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                                    <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                                    <ps-icon class="sm:ms-2" textColor="dark:text-feSecondary-200" name="arrowNarrowRight"
                                        h="23" w="23" viewBox="0 -3 9 20" />
                                </ps-button>
                            </ps-route-link>
                        </div>
                        <div class="mt-6 mb-26 sm:mb-0">
                            <div v-if="relatedItemStore.itemList?.data != null" class="">

                                <item-horizontal-swiper
                                    :itemList="relatedItemStore.itemList?.data.filter((item) => item.id !== itemId)"
                                    storeName="related_item"></item-horizontal-swiper>
                            </div>
                            <div v-else-if="relatedItemStore.loading.value">
                                <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4">
                                    <div class="w-full col-span-2 lg:col-span-3" v-for="i in 4" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End related items -->
                </div>
            </div>
        </template>
    </ps-content-container>


    <!-- google adsense desktop view -->
    <!-- <div class="w-mobile sm:w-median lg:w-large mx-auto mt-2">
        <ps-ad-sense adFormat="horizontal"></ps-ad-sense>
    </div> -->
    <map-with-pin-modal ref="map_with_pin_modal" />
    <ps-loading-dialog ref="ps_loading_dialog" />
    <ps-confirm-dialog ref="ps_confirm_dialog" />
    <ps-error-dialog ref="ps_error_dialog" />
    <gallery-detail-horizontal-swiper ref="gallery_detail" />
    <promote-item-modal ref="promote_item_modal" @isPromoteSuccessful="handlePromote"/>
    <share-to-social-modal ref="share_modal" />
    <ps-learn-more-dialog ref = "ps_learn_more_dialog" />
</template>

<script  lang="ts">
import { Head } from '@inertiajs/vue3';
// //Libs
// import { routeLocationKey, useRoute, useRouter } from 'vue-router';
// import router from "@template1/router";
import { router } from '@inertiajs/vue3';

// Objects
import PsConst from '@templateCore/object/constant/ps_constants';
import { ref, defineAsyncComponent, onMounted, onUnmounted, computed } from 'vue';

// Components
import PsContentContainer from '@template1/vendor/components/layouts/container/PsContentContainer.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import GalleryDetailHorizontalSwiper from '@template1/vendor/components/modules/gallery/GalleryDetailHorizontalSwiper.vue';
import Rating from '@template1/vendor/components/core/rating/RatingShow.vue';
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import PsConfirmDialog from '@template1/vendor/components/core/dialog/PsConfirmDialog.vue';
import PsErrorDialog from '@template1/vendor/components/core/dialog/PsErrorDialog.vue';
import PromoteItemModal from '@template1/vendor/components/modules/item/PromoteItemModal.vue';
import MapWithPinModal from '@template1/vendor/components/layouts/map/MapWithPinModal.vue';
import ShareToSocialModal from '@template1/vendor/components/layouts/share/ShareToSocialModal.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import PsBreadcrumb2 from "@template1/vendor/components/core/breadcrumbs/PsBreadcrumb2.vue";
import UserListHorizontal from '@template1/vendor/components/modules/user/UserListHorizontal.vue';
import GalleryVerticalSwiper from "@template1/vendor/components/modules/gallery/GalleryVerticalSwiper.vue";
import ItemHorizontalSwiper from "@template1/vendor/components/modules/item/ItemHorizontalSwiper.vue";
import ItemHorizontalSkeletorItem from "@template1/vendor/components/modules/item/ItemHorizontalSkeletorItem.vue"
import PsLearnMoreDialog from '@template1/vendor/components/core/dialogs/PsLearnMoreDialog.vue';

// Models
// import { createproductStoreState } from '@templateCore/store/modules/item/productStore';
import { useProductStore } from '@templateCore/store/modules/item/ProductStore';
import { PsValueStore } from '@templateCore/store/modules/core/PsValueStore';
import { useGalleryStoreState } from '@templateCore/store/modules/gallery/GalleryStore';
import { useAboutUsStoreState } from "@templateCore/store/modules/aboutus/AboutUsStore";
import { useFavouriteItemStoreState } from "@templateCore/store/modules/item/FavouriteItemStore";
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';
import { useTouchCountStore } from '@templateCore/store/modules/item/TouchCountStore';
import { useOfferStoreState } from '@templateCore/store/modules/offer/OfferStore';
// Holders
import ProductParameterHolder from '@templateCore/object/holder/ProductParameterHolder';
import ReportItemHolder from '@templateCore/object/holder/ReportItemHolder';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import TouchCountParameterHolder from "@templateCore/object/holder/TouchCountParameterHolder";
import { trans } from 'laravel-vue-i18n'; import PsUtils from '@templateCore/utils/PsUtils';
import { useReportedItemStoreState } from '@templateCore/store/modules/item/ReportedItemStore';
import MarkSoldOutItemParameterHolder from '@templateCore/object/holder/MarkSoldOutItemParameterHolder';
import ProductStatusChangeParameterHolder from '@templateCore/object/holder/ProductStatusChangeParameterHolder';
import PsStatus from '@templateCore/api/common/PsStatus';
import format from 'number-format.js';
import { useCustomFieldStoreState } from '@templateCore/store/modules/customField/CustomFieldStore';
import { useUserStore } from "@templateCore/store/modules/user/UserStore";

const MapWithPinPicker = defineAsyncComponent(() => import('@template1/vendor/components/layouts/map/MapWithPinPicker.vue'))
const OpenStreetMap = defineAsyncComponent(() => import('@template1/vendor/components/layouts/map/OpenStreetMap.vue'))

export default {
    name: "ItemDetailView",
    components: {
        PsLearnMoreDialog,
        PsContentContainer,
        ItemHorizontalSwiper,
        ItemHorizontalSkeletorItem,
        PsBreadcrumb2,
        PsConfirmDialog,
        PsLabel,
        PsIcon,
        PsButton,
        Rating,
        PsLoadingDialog,
        PsErrorDialog,
        GalleryDetailHorizontalSwiper,
        PromoteItemModal,
        MapWithPinModal,
        ShareToSocialModal,
        PsRouteLink,
        PsAdSense,
        OpenStreetMap,
        MapWithPinPicker,
        UserListHorizontal,
        GalleryVerticalSwiper,
        Head
    },
    layout: PsFrontendLayout,
    props: ['query'],
    setup(props) {
        // const route = useRoute();
        // const router = useRouter();
        // Get Route Data
        // const itemId = route.query.item_id?.toString() ?? '';
        // const itemName = route.query.item_name?.toString() ?? '';

        const itemId = props.query.item_id;
        const itemName = '';

        // Inject Providers
        const relatedItemStore = useProductStore('related_item');
        const productStore = useProductStore('detail');
        const galleryProvider = useGalleryStoreState('detail');
        const userProvider = useUserStore();
        const videoStore = useGalleryStoreState('video');
        const aboutUsProvider = useAboutUsStoreState();
        const reportedItemStore = useReportedItemStoreState();
        const FavouriteItemProvider = useFavouriteItemStoreState();
        const markAsSoldHolder = new MarkSoldOutItemParameterHolder().markSoldOutItemHolder();
        const ProductStatusChangeHolder = new ProductStatusChangeParameterHolder().ProductStatusChangeItemHolder();
        relatedItemStore.paramHolder = new ProductParameterHolder().getRelatedProductParameterHolder();
        const touchCountStore = useTouchCountStore();
        const offerProvider = useOfferStoreState();
        const itemCustomFieldStore = useCustomFieldStoreState('detail');
        const userCustomFieldStore = useCustomFieldStoreState('owner');

        const showSafetyTip = ref(false);
        const dataReady = ref(false);
        const imageCount = ref(1);
        let totalCount = ref(0);
        let whatsAppNo = ref('');

        // Init Variables
        const psValueStore = PsValueStore();

        const submitButtonShow = ref();
        const reportItemHolder = new ReportItemHolder();
        const loginUserId = ref(psValueStore.getLoginUserId());
        const ps_loading_dialog = ref();
        const ps_confirm_dialog = ref();
        const ps_learn_more_dialog = ref();
        const ps_error_dialog = ref();
        const gallery_detail = ref();
        const isPromote = ref(false);
        const isPromoteSuccessful = ref(false);
        const isAllPaymentDisable = ref();
        const promote_item_modal = ref();
        const map_with_pin_modal = ref();
        const share_modal = ref();
        const holder = new TouchCountParameterHolder();
        const appInfoProvider = usePsAppInfoStoreState();
        const appInfoParameterHolder = new AppInfoParameterHolder();

        let isVideoSetting = ref(false);
        let productRelation = [];

        onMounted(async () => {
            // Load Item Data
            isSubmitButtonShow()
            loadDataForItemDetail();
            holder.typeId = itemId;
            holder.userId = loginUserId.value;
            holder.typeName = 'item';
            if(loginUserId.value != 'nologinuser') {
                touchCountStore.postTouchCount(loginUserId.value, holder);
            }
            // console.log(touchCountStore);
            if (!isAllPaymentDisable.value) {
                isAllPaymentDisableFun();
            }

        });
        onUnmounted(() => {
            productStore.item.data = null;
            galleryProvider.galleryList.data = null;
            videoStore.galleryList.data = null;
        });

        async function isSubmitButtonShow() {
            // alert(this.loginUserId);
            if (loginUserId.value != 'nologinuser') {
                await userProvider.loadUser(loginUserId.value);
                const roleId = await userProvider.user.data ? userProvider.user.data.roleId : '';
                const isVerifybluemark = await userProvider.user.data ? userProvider.user.data.isVerifybluemark : '';
                if (appInfoProvider.appInfo.data?.uploadSetting == 'admin') {
                    if (roleId == 1) {
                        // alert("here");
                        submitButtonShow.value = true;
                    } else {
                        submitButtonShow.value = false
                    }
                }
                if (appInfoProvider.appInfo.data?.uploadSetting == 'admin-bluemark') {
                    // alert(isVerifybluemark)
                    if (roleId == 1 || isVerifybluemark == 1) {
                        submitButtonShow.value = true
                    } else {
                        submitButtonShow.value = false
                    }
                }
                if (appInfoProvider.appInfo.data?.uploadSetting == 'all') {
                    submitButtonShow.value = true
                }
            } else {
                submitButtonShow.value = true
            }
        }

        function safetyTip() {
            ps_learn_more_dialog.value.openModal('item_detail__safety_tips', aboutUsProvider.aboutus?.data?.safetyTips);
        }

        function termsAndConditions() {
            ps_learn_more_dialog.value.openModal('term_and_condition__term_and_condition', aboutUsProvider.aboutus?.data?.termsAndConditions);
        }

        function faq() {
            ps_learn_more_dialog.value.openModal('item_detail__faq', aboutUsProvider.aboutus?.data?.faqPage);
        }


        async function loadDataForItemDetail() {
            await aboutUsProvider.loadAboutUs(loginUserId.value);
            await productStore.loadItem(itemId, loginUserId.value);
            await userCustomFieldStore.loadUserCustomFieldList(loginUserId.value);
            loadProductRelation();

            for (const customField of userCustomFieldStore.customField.data?.customList) {
                if (customField.coreKeysId == PsConst.WHATSAPP_CORE_KEY_Id && customField.isVisible == '1') {
                    const ownerWhatsAppRelation = productStore.item?.data?.user?.userRelation.filter((pr) => pr.coreKeysId == PsConst.WHATSAPP_CORE_KEY_Id);
                    if (ownerWhatsAppRelation.length != 0 && ownerWhatsAppRelation[0]?.value != null ) {
                        whatsAppNo.value = ownerWhatsAppRelation[0]?.value;
                    }
                }
            }

            // await galleryProvider.loadGalleryList(0,loginUserId.value, itemId,PsConst.ITEM_TYPE, productStore.item?.data.videoThumbnail);
            // await videoStore.loadGalleryList(0,loginUserId.value, itemId,PsConst.ITEM_TYPE, productStore.item?.data.videoThumbnail);
            await galleryProvider.resetGalleryList(loginUserId.value, itemId, PsConst.ITEM__RELATED_TYPE);
            // videoStore.resetGalleryList(loginUserId.value, itemId,PsConst.ITEM_TYPE);

            // console.log(relatedItemStore.paramHolder)
            relatedItemStore.paramHolder.catId = productStore.item.data.catId;
            await relatedItemStore.resetProductList(loginUserId.value, relatedItemStore.paramHolder);

            // let ids = []
            // ids.push(itemId);

            // relatedItems=relatedItemStore.itemList?.data.filter(function(item){

            //                     return ids.indexOf(item.id) == -1;
            //                     });



            if (appInfoProvider.appInfo.data.mobileSetting.is_show_item_video == 1) {
                videoStore.galleryList.data = galleryProvider.galleryList.data.filter(item => item.imgType != 'item-video-icon');
                galleryProvider.galleryList.data = galleryProvider.galleryList.data.filter(item => item.imgType != 'item-video');
            } else {
                videoStore.galleryList.data = galleryProvider.galleryList.data.filter(item => item.imgType != 'item-video-icon' && item.imgType != 'item-video');
                galleryProvider.galleryList.data = galleryProvider.galleryList.data.filter(item => item.imgType != 'item-video' && item.imgType != 'item-video-icon');
            }

            // remove unwanted data


            if (productStore.item?.data.isOwner == PsConst.ONE &&
                productStore.item?.data.status == PsConst.ONE &&
                (productStore.item?.data.paidStatus == PsConst.ADSNOTAVAILABLE ||
                    productStore.item?.data?.paidStatus == PsConst.ADSFINISHED) &&
                !isAllPaymentDisable.value) {
                isPromote.value = true;

            } else {
                isPromote.value = false;

            }
            await itemCustomFieldStore.loadCustomFieldList(loginUserId.value);
            dataReady.value = true;
        }

        appInfoParameterHolder.userId = psValueStore.getLoginUserId();

        function loadProductRelation() {
            productStore.item?.data?.productRelation.forEach(e => {
                if (e.coreKeysId == 'ps-itm00002' || e.coreKeysId == 'ps-itm00004' || e.coreKeysId == 'ps-itm00007') {
                    if (e.selectedValue[0].value != '') {
                        productRelation.push(e)
                    }
                }
            });
        }

        async function loadAppInfo() {
            await appInfoProvider.loadAppInfo(appInfoParameterHolder);
            if (appInfoProvider.appInfo.data.mobileSetting.is_show_item_video == PsConst.ONE) {
                isVideoSetting.value = true;
            }
            if (parseInt(appInfoProvider.appInfo.data.psAppSetting.maxImgUploadOfItem) >= 1) {
                imageCount.value = parseInt(appInfoProvider.appInfo.data.psAppSetting.maxImgUploadOfItem);
                //for video upload
                totalCount.value = imageCount.value + 1;

            }
        }
        loadAppInfo();

        function isAllPaymentDisableFun() {

            if (appInfoProvider?.appInfo?.data != null &&
                appInfoProvider?.appInfo?.data.inAppPurchasedEnabled == PsConst.ZERO &&
                appInfoProvider?.appInfo?.data.stripeEnable == PsConst.ZERO &&
                appInfoProvider?.appInfo?.data.paypalEnable == PsConst.ZERO &&
                appInfoProvider?.appInfo?.data.payStackEnabled == PsConst.ZERO &&
                appInfoProvider?.appInfo?.data.razorEnable == PsConst.ZERO &&
                appInfoProvider?.appInfo?.data.offlineEnabled == PsConst.ZERO) {
                isAllPaymentDisable.value = true;
            } else {
                isAllPaymentDisable.value = false;
            }
            // isAllPaymentDisable.value = false;
        }

        function promoteClicked() {

            isPromoteSuccessful.value = true;  

            promote_item_modal.value.openModal(
                productStore.item?.data?.id
            );
        }

        function handlePromote(value){
            isPromoteSuccessful.value = value;
        }

        // console.log(isPromote.value);

        function showGalleryDetail(gallery, galleryList) {

            let tempGallery = JSON.parse(JSON.stringify(gallery));
            let tempGalleryList = JSON.parse(JSON.stringify(galleryList));


            if (productStore.item.data.video.imgId != '' && isVideoSetting.value == true) {

                if (gallery == galleryList[0]) {
                    tempGallery = productStore.item.data.video;
                }
                tempGalleryList.shift();
                tempGalleryList.unshift(productStore.item.data.video);

            }
            PsUtils.log(tempGalleryList);

            gallery_detail.value.openModal(tempGallery, tempGalleryList);
        }

        async function markAsEnableDisable(status) {
            if (loginUserId.value && loginUserId.value != PsConst.NO_LOGIN_USER) {
                ps_confirm_dialog.value.openModal(
                    status == 'accept' ? trans('item_detail__mark_this_item_enable') : trans('item_detail__mark_this_item_disable'),
                    status == 'accept' ? trans('item_detail__are_you_sure_enable') : trans('item_detail__are_you_sure_disable'),
                    trans('core_fe__confirm'),
                    trans('item_detail__cancel'),
                    async () => {
                        ProductStatusChangeHolder.itemId = productStore?.item.data?.id;
                        ProductStatusChangeHolder.status = status
                        ps_loading_dialog.value.openModal();

                        await offerProvider.productStatusChange(loginUserId.value, ProductStatusChangeHolder);
                        await loadDataForItemDetail();

                        ps_loading_dialog.value.closeModal();
                    },
                    () => {
                        PsUtils.log("Cancel");
                    }
                );


            } else {
                router.get(route('login'));
            }
        }

        async function markAsSold() {
            if (loginUserId.value && loginUserId.value != PsConst.NO_LOGIN_USER) {
                ps_confirm_dialog.value.openModal(
                    trans('item_detail__item_sold_out'),
                    trans('item_detail__are_you_sure'),
                    trans('core_fe__confirm'),
                    trans('item_detail__cancel'),
                    async () => {
                        markAsSoldHolder.itemId = productStore?.item.data?.id;
                        ps_loading_dialog.value.openModal();

                        await offerProvider.markAsSoldFromDetail(loginUserId.value, markAsSoldHolder);
                        await loadDataForItemDetail();

                        ps_loading_dialog.value.closeModal();
                    },
                    () => {
                        PsUtils.log("Cancel");
                    }
                );


            } else {
                router.get(route('login'));
            }
        }

        async function favouriteClicked() {

            if (loginUserId.value && loginUserId.value != PsConst.NO_LOGIN_USER) {
                ps_loading_dialog.value.openModal();
                if (productStore.item.data.isFavourited == '1') {
                    ps_loading_dialog.value.message = trans('item_detail__removing_item_from_favourite');
                } else {
                    ps_loading_dialog.value.message = trans('item_detail__adding_item_to_favourite');
                }

                await FavouriteItemProvider.postFavourite(itemId, loginUserId.value);

                await loadDataForItemDetail();
                ps_loading_dialog.value.closeModal();
            }
            else {
                router.get(route('login'));
            }

        }

        // Report Item Functions
        function deleteClicked() {
            ps_confirm_dialog.value.openModal(
                trans('item_detail__delete_this_item'),
                trans('item_detail__confirm_to_delete_item'),
                trans('item_detail__delete'),
                trans('item_detail__cancel'),
                () => {
                    doDelete()
                },
                () => {
                    PsUtils.log("Cancel");
                }
            );

        }
        async function doDelete() {

            const item = await productStore.userDeleteItem(loginUserId.value, itemId);
            // console.log(item);
            if (item.status == PsStatus.SUCCESS) {

                router.get(route("dashboard"));
            }
            else {
                ps_error_dialog.value.openModal(item.message);

            }

        }

        // Report Item Functions
        function reportItemClicked() {
            if (loginUserId.value && loginUserId.value != PsConst.NO_LOGIN_USER) {
                ps_confirm_dialog.value.openModal(
                    trans('item_detail__confirm'),
                    trans('item_detail__confirm_to_report_item'),
                    trans('item_detail__report'),
                    trans('item_detail__cancel'),
                    () => {
                        doReport();
                    },
                    () => {
                        PsUtils.log("Cancel");
                    }
                );
            }
            else {
                router.get(route('login'));
            }


        }
        async function doReport() {
            reportItemHolder.itemId = itemId;
            reportItemHolder.reportedUserId = loginUserId.value;
            const item = await reportedItemStore.addReportItem(loginUserId.value, reportItemHolder);
            // console.log(item);
            if (item.message == "You have already reported to this item.") {
                ps_error_dialog.value.openModal(item.message);
            }
            else {
                router.get(route('dashboard'));
            }

        }
        function shareClicked(url) {
            share_modal.value.openModal(url, itemId, itemName);
        }
        function formatPrice(value) {

            if(appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType ==  PsConst.NORMAL_PRICE && value.toString() == '0'){
                return trans('item_price__free');
            }else{
                if (appInfoProvider.appInfo.data?.psAppSetting?.SelectedPriceType ==  PsConst.PRICE_RANGE) {
                    const floatValue = parseFloat(value);
                    const intValue = parseInt(floatValue);
                    if (intValue > 5) {
                        return '$'.repeat(5);
                    }
                    if (intValue < 1) {
                        return '$'.repeat(1);
                    }
                    return '$'.repeat(intValue);
                } else {
                    return format(appInfoProvider?.appInfo?.data?.mobileSetting?.price_format, value);
                }
            }
        }
        function toWhatsApp() {
            // Construct the WhatsApp URL
            const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsAppNo.value}&text=${encodeURIComponent(productStore.item?.data?.title)}`;
            window.open(whatsappURL, '_blank');
        }
        function getPrice() {
            // if(productStore.item?.data && productStore.item.data.discountRate!='0' && appInfoProvider.appInfo.data.psItemUploadConfig.discountRate== PsConst.ONE){
            //     return parseFloat(productStore.item.data.price)-(parseFloat(productStore.item.data.price)*(parseFloat(productStore.item.data.discountRate)/100));
            // }else{
            //     return productStore.item?.data?.price;
            // }
        }

        return {
            getPrice,
            dataReady,
            appInfoProvider,
            loginUserId,
            itemId,
            itemName,
            productStore,
            galleryProvider,
            videoStore,
            aboutUsProvider,
            favouriteClicked,
            ps_loading_dialog,
            ps_learn_more_dialog,
            reportItemClicked,
            ps_confirm_dialog,
            ps_error_dialog,
            showGalleryDetail,
            gallery_detail,
            isPromote,
            promoteClicked,
            promote_item_modal,
            map_with_pin_modal,
            share_modal,
            shareClicked,
            deleteClicked,
            PsConst,
            showSafetyTip,
            safetyTip,
            termsAndConditions,
            faq,
            formatPrice,
            markAsSold,
            totalCount,
            imageCount,
            itemCustomFieldStore,
            markAsEnableDisable,
            relatedItemStore,
            productRelation,
            submitButtonShow,
            isAllPaymentDisable,
            isPromoteSuccessful,
            handlePromote,
            whatsAppNo,
            toWhatsApp
        }
    },
    computed: {
        breadcrumb() {
            if (this.appInfoProvider?.appInfo?.data?.mobileSetting.is_show_subcategory == '0' || this.productStore.item?.data?.subCategory?.id == '') {
                return [
                    {
                        label: trans('ps_nav_bar__home'),
                        url: route('dashboard')
                    },
                    {
                        label: this.productStore.item?.data?.category?.catName,
                        url: route('fe_item_list', {
                            cat_id: this.productStore.item?.data?.category?.catId,
                            cat_name: this.productStore.item?.data?.category?.catName
                        })
                    },
                    {
                        label: this.productStore.item?.data?.title,
                        color: "text-fePrimary-500"
                    }
                ]
            } else {
                return [
                    {
                        label: trans('ps_nav_bar__home'),
                        url: route('dashboard')
                    },
                    {
                        label: this.productStore.item?.data?.category?.catName,
                        url: route('fe_item_list', {
                            cat_id: this.productStore.item?.data?.category?.catId,
                            cat_name: this.productStore.item?.data?.category?.catName
                        })
                    },
                    {
                        label: this.productStore.item?.data?.subCategory?.name,
                        url: route('fe_item_list', {
                            cat_id: this.productStore.item?.data?.category?.catId,
                            cat_name: this.productStore.item?.data?.category?.catName,
                            sub_cat_id: this.productStore.item?.data?.subCategory?.id,
                            sub_cat_name: this.productStore.item?.data?.subCategory?.name
                        })
                    },
                    {
                        label: this.productStore.item?.data?.title,
                        color: "text-fePrimary-500"
                    }
                ]
            }
        },

        relatedItem() {
            // return this.itemId;
            let ids = []
            ids.push(this.itemId);
            // return ids;

            this.relatedItemStore.itemList?.data.filter(function (item) {
                console.log(item.id);
                return ids.indexOf(item.id) == -1;
            });
        }

    },
}
</script>
