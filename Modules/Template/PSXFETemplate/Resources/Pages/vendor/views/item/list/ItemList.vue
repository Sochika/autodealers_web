<template>
    <Head :title="$t('item__list')"/>
    <ps-content-container>
        <template #content>
            <div class="sm:mt-32 lg:mt-36 mt-28">
                <div>
                    <div class="flex flex-col">
                        <div class="sm:flex flex-row">
                            <div class="flex flex-row sm:mt-0 mt-6">
                                <ps-breadcrumb-2 :items="breadcrumb" class=""/>
                            </div>
                            <div class="sm:ms-16 mt-4 sm:mt-0" v-if="itemProvider.paramHolder.catId == ''">
                                <p v-if="query.ad_post_type == 'only_paid_item' && query.order_by == 'added_date'" class="text-lg text-feSeondary-800 font-semibold dark:text-feSecondary-200">{{ $t("home__fe_featured_items") }}</p>
                                <p v-else-if="itemProvider.paramHolder.searchTerm" class="text-lg text-feSeondary-800 font-semibold dark:text-feSecondary-200">{{ $t("search_result_for") }} "{{ itemProvider.paramHolder.searchTerm }}"</p>
                                <p v-else-if="query.order_by == 'item_touch_count'" class="text-lg text-feSeondary-800 font-semibold dark:text-feSecondary-200">{{ $t("dashboard__popular") }}</p>
                                <p v-else-if="(query.is_discount == '1' && query.order_by == 'added_date')" class="text-lg text-feSeondary-800 font-semibold dark:text-feSecondary-200">{{ $t("dashboard__discount") }}</p>
                                <p v-else-if="query.order_by == 'added_date'" class="text-lg text-feSeondary-800 font-semibold dark:text-feSecondary-200">{{ $t("home__fe_recently_added") }}</p>
                            </div>
                        </div>

                    </div>


                    <div class="relative mt-4 sm:mt-10">

                        <!-- End Filter For Small Screen -->
                        <div class="flex flex-row">

                            <!-- Filter For Normal and Large Screen -->
                            <div class='w-64 me-7 hidden sm:flex flex-col dark:bg-feSecondary-800 h-full p-4 rounded-lg' >

                                <div class="flex flex-row items-center justify-between w-full">
                                    <ps-label textColor="text-feSecondary-800 dark:text-feSecondary-300" class="font-semibold text-md lg:text-xl"> {{ $t("item_list__filter_by") }} </ps-label>

                                    <ps-label-caption class="font-light cursor-pointer" textColor="text-feSecondary-500 dark:text-feSecondary-300" @click="clearAllFilter"> {{ $t("item_list__clear_filter") }} </ps-label-caption>
                                </div>

                                <!-- Category -->
                                <ps-label class="sm:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("category_list__title") }} </ps-label>
                                <ps-dropdown align="left" class='mt-1 lg:mt-2 ' @onClick="loadCategory" >
                                    <template #select>
                                        <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.catName" />
                                    </template>
                                    <template #list >
                                        <div class="rounded-md shadow-xs w-56 " >
                                            <div class="pt-2 z-30">
                                                <div v-if="categoryStore.itemList.data == null">
                                                    <ps-label class='p-2 flex' @click="loadCategory"> {{ $t("list__loading") }} </ps-label>
                                                </div>
                                                <div v-else>
                                                    <div
                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                    @click="categoryFilterClicked({catId:'', catName:$t('item_list__all')})" >
                                                        <ps-label class="ms-2" :class="itemProvider.paramHolder.catId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                    </div>
                                                    <div v-for="selectData in categoryStore.itemList.data" :key="selectData.catId"
                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                    @click="categoryFilterClicked(selectData)" >
                                                        <ps-label class="ms-2" :class="selectData.catId==itemProvider.paramHolder.catId ? ' font-medium' : 'font-light'"  > {{selectData.catName}} </ps-label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template #loadmore>

                                        <div class="mb-2 w-56">

                                            <div  v-if="categoryStore.itemList.data != null
                                                && categoryStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                            </div>

                                            <ps-label class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex" v-if="!categoryStore.isNoMoreRecord"  @click="loadCategory" > {{ $t("list__load_more") }} </ps-label>
                                        </div>

                                    </template>
                                </ps-dropdown>

                                <!-- for sub category dropdown -->
                                <div v-if="appInfoStore?.appInfo?.data?.mobileSetting.is_show_subcategory == '1'">
                                    <ps-label class="sm:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__sub_categories") }} </ps-label>
                                    <ps-dropdown align="left" class='mt-1 lg:mt-2 w-full' @click="loadSubCategory(itemProvider.paramHolder.catId)" >
                                        <template #select>
                                            <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.subCatName
                                            " />
                                        </template>
                                        <template #filter >
                                            <div class="w-56">
                                                <ps-input-with-right-icon class="rounded-xl flex-1 " @keyup.enter="filterSubCatUpdate(subCatKeyword)" v-model:value="subCatKeyword" v-bind:placeholder= "$t('item_list__search_subcat')" >
                                                <template #icon>
                                                    <ps-icon textColor="text-feSecondary-400 dark:text-feAchromatic-500" name="search" class='cursor-pointer' @click="filterSubCatUpdate(subCatKeyword)"/>
                                                </template>
                                                </ps-input-with-right-icon>
                                            </div>
                                        </template>
                                        <template #list >
                                            <div class="rounded-md shadow-xs w-56 " >
                                                <div class="pt-2 z-30 ">
                                                    <div v-if="subCategoryStore.subCategoryList.data == null">
                                                        <ps-label class='p-2 flex' > {{ $t("list__loading") }} </ps-label>
                                                    </div>
                                                    <div v-else>
                                                        <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                        @click="subCategoryFilterClicked({id:'', name:$t('item_list__all')})" >
                                                            <ps-label class="ms-2" :class="itemProvider.paramHolder.subCatId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                        </div>
                                                        <div v-for="selectSubCat in subCategoryStore.subCategoryList.data" :key="selectSubCat.id"
                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                            @click="subCategoryFilterClicked(selectSubCat)" >
                                                            <ps-label class="ms-2" :class="selectSubCat.id==itemProvider.paramHolder.subCatId ? ' font-medium' : 'font-light'"  > {{selectSubCat.name}} </ps-label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template #loadmore>

                                            <div class="mb-2 w-56">

                                                <div  v-if="subCategoryStore.subCategoryList.data != null
                                                    && subCategoryStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                    <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                                </div>

                                                <ps-label v-if="itemProvider.paramHolder.catId != '' &&  !subCategoryStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadSubCategory(itemProvider.paramHolder.catId)" > {{ $t("list__load_more") }} </ps-label>
                                            </div>

                                        </template>
                                    </ps-dropdown>
                                </div>
                                <!-- end sub category -->

                                <div class="w-full">
                                    <!-- <ps-label class="sm:mt-6 lg:mb-2 mb-1 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_detail__status") }} </ps-label>
                                    <div class="sm:block md:flex flex-row w-full text-sm font-medium md:mb-0">
                                        <ps-radio v-for=" selectData  in itemProvider.paramHolder.sortingList"
                                            :key="selectData.id"
                                            :value="selectData"
                                            v-model:selectedValue="currentsorting"
                                            :title="selectData.name"
                                            :onChange = "sortingFilterClicked"
                                            class="text-feSecondary-800 text-xs lg:text-sm sm:me-2 sm:mb-4 md:mb-0"></ps-radio>


                                    </div> -->
                                    <div v-if="appInfoStore.appInfo.data?.mobileSetting?.is_show_discount == '1'" class="w-full text-sm font-medium">
                                         <div class="sm:mt-4 md:mt-6 flex flex-row w-full text-sm font-medium">
                                            <ps-checkbox-value title=""
                                            class="" v-model:value="isDiscount"
                                            @click="isDiscountFilterClicked" />
                                            <ps-label class='me-2 font-medium text-sm lg:text-base'>{{ $t("item_list__is_discount") }}</ps-label>
                                        </div>

                                    </div>
                                </div>

                                <div class="w-full flex flex-col">
                                    <ps-label class="sm:mt-6 lg:mb-2 mb-1 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_list__stock") }} </ps-label>
                                    <div class="sm:block md:flex flex-row w-full text-sm font-medium">
                                        <ps-radio v-for=" selectData  in soldOutItem"
                                            :key="selectData.id"
                                            :value="selectData"
                                            v-model:selectedValue="currentstatus"
                                            :title="selectData.name"
                                            :onChange = "soldItemFilterClicked"
                                            class="text-feSecondary-800 whitespace-nowrap text-xs lg:text-sm sm:me-2 sm:mb-4"></ps-radio>
                                    </div>
                                </div>

                                <!-- Price Range -->
                                <div class="w-full">

                                    <ps-label class="sm:mt-6 mb-1 lg:mb-2 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_list__price_range") }} </ps-label>
                                    <div class="sm:block md:grid grid-cols-2 gap-2">
                                        <ps-input theme="dark:bg-feSecondary-800 dark:text-feSecondary-300" type="text" class="w-full sm:mb-4 md:mb-0" v-bind:placeholder="$t('item_list__min')" v-model:value="itemProvider.paramHolder.minPrice" @keypress="checkPrice($event)" @keyup.enter="pricerangeItemFilterClicked" />
                                        <ps-input theme="dark:bg-feSecondary-800 dark:text-feSecondary-300" type="text" class="w-full " v-bind:placeholder="$t('item_list__max')" v-model:value="itemProvider.paramHolder.maxPrice" @keypress="checkPrice($event)" @keyup.enter="pricerangeItemFilterClicked"/>
                                    </div>
                                </div>

                                <!-- custom field start -->
                                <div v-for="customFieldHeader in customFieldStore.customField.data?.customList" :key="customFieldHeader.id">
                                    <!-- dropdown-->

                                    <div class="sm:mt-6" v-if="(customFieldHeader.coreKeysId == 'ps-itm00007' || customFieldHeader.coreKeysId == 'ps-itm00002') && customFieldHeader.uiType.coreKeysId === 'uit00001' && customFieldHeader.isVisible === '1' && customFieldHeader.isDelete === '0'">
                                        <ps-label class="text-base font-medium">{{ $t(customFieldHeader.name) }}</ps-label>
                                        <ps-dropdown align="left" class='lg:mt-2 mt-1  w-full' @onClick="loadCustomField(customFieldHeader.coreKeysId)">
                                            <template #select>

                                                <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :showCenter="true" :selectedValue="
                                                customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data?.filter((customField)=> customField.id === form.product_relation[customFieldHeader.coreKeysId])[0]?.name

                                                " />

                                            </template>
                                            <template #list >
                                                <div
                                                    class="rounded-md shadow-xs w-56 " >
                                                    <div class="pt-2 z-30 ">
                                                        <div v-if="customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data == null">
                                                            <ps-label class='p-2 flex' @click="loadCustomField(customFieldHeader.coreKeysId)">{{ $t("item_entry__loading") }} </ps-label >
                                                        </div>
                                                        <div v-else>
                                                            <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                @click="selectCustomDropdown(customFieldHeader.coreKeysId,'')" >
                                                                    <ps-label class="ms-2" :class="form.product_relation[customFieldHeader.coreKeysId] =='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                            </div>
                                                            <div v-for="selectData in customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data"
                                                            :key="selectData.coreKeysId"
                                                            class="w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center"
                                                            @click="selectCustomDropdown(customFieldHeader.coreKeysId,selectData.id)" >

                                                                <ps-label class="ms-2" :class="form.product_relation[customFieldHeader.coreKeysId] == selectData.id ? 'font-bold' : ''"> {{selectData.name}} </ps-label>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                            <template #loadmore>

                                                <div class="mb-2 w-56">

                                                    <div  v-if="customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data != null
                                                        && customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.loading.value == true" class='mt-4 ms-4 flex'>
                                                        <ps-label > {{ $t("item_entry__loading") }}</ps-label>
                                                    </div>

                                                    <ps-label class="flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer" v-if="!customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.isNoMoreRecord"   @click="loadCustomField(customFieldHeader.coreKeysId)" > {{ $t("item_entry__load_more") }} </ps-label>
                                                </div>

                                            </template>
                                        </ps-dropdown>
                                    </div>

                                </div>
                                <!-- /.custom field end -->

                                <!-- Location -->
                                <ps-label class="sm:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__location_city") }} </ps-label>
                                <ps-dropdown align="left" class='mt-1 lg:mt-2 ' @onClick="loadLocation" >
                                    <template #select>
                                        <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.itemLocationName" />
                                    </template>
                                    <template #list >
                                        <div class="rounded-md shadow-xs w-56 " >
                                            <div class="pt-2 z-30">
                                                <div v-if="itemLocationStore.itemLocationList.data == null">
                                                    <ps-label class='p-2 flex' @click="loadLocation"> {{ $t("list__loading") }} </ps-label>
                                                </div>
                                                <div v-else>
                                                    <div
                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                    @click="itemlocFilterClicked('', $t('item_list__all'),0,0)" >
                                                        <ps-label class="ms-2" :class="itemProvider.paramHolder.itemLocationId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                    </div>
                                                    <div v-for="selectData in itemLocationStore.itemLocationList.data" :key="selectData.id"
                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                    @click="itemlocFilterClicked(selectData.id, selectData.name,selectData.lat, selectData.lng)" >
                                                        <ps-label class="ms-2" :class="selectData.id==itemProvider.paramHolder.itemLocationId ? ' font-medium' : 'font-light'"  > {{selectData.name}} </ps-label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template #loadmore>

                                        <div class="mb-2 w-56">

                                            <div  v-if="itemLocationStore.itemLocationList.data != null
                                                && itemLocationStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                            </div>

                                            <ps-label v-if="!itemLocationStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadLocation" > {{ $t("list__load_more") }} </ps-label>
                                        </div>

                                    </template>
                                </ps-dropdown>

                                <!-- for sub Location -->
                                <ps-label v-if="appInfoStore.appInfo.data?.psAppSetting?.isSubLocation == '1'" class="sm:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__location_township") }} </ps-label>
                                <ps-dropdown align="left" class='mt-1 lg:mt-2' @click="loadSubLocation(itemProvider.paramHolder.itemLocationId)" v-if="appInfoStore.appInfo.data?.psAppSetting?.isSubLocation == '1'">
                                    <template #select>
                                        <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.itemLocationTownshipName
                                        " />
                                    </template>
                                    <template #list >
                                        <div class="rounded-md shadow-xs w-56 " >
                                            <div class="pt-2 z-30 ">
                                                <div v-if="itemLocationTownshipStore.locationTownshipList.data == null">
                                                    <ps-label class='p-2 flex' > {{ $t("list__loading") }} </ps-label>
                                                </div>
                                                <div v-else>
                                                    <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                    @click="subLocFilterClicked({id:'', name:$t('item_list__all')})" >
                                                        <ps-label class="ms-2" :class="itemProvider.paramHolder.itemLocationTownship=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                    </div>
                                                    <div v-for="selectSubLoc in itemLocationTownshipStore.locationTownshipList.data" :key="selectSubLoc.id"
                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                        @click="subLocFilterClicked(selectSubLoc)" >
                                                        <ps-label class="ms-2" :class="selectSubLoc.id==itemProvider.paramHolder.itemLocationTownship ? ' font-medium' : 'font-light'"  > {{selectSubLoc.townshipName}} </ps-label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                    <template #loadmore>

                                        <div class="mb-2 w-56">

                                            <div  v-if="itemLocationTownshipStore.locationTownshipList.data != null
                                                && itemLocationTownshipStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                            </div>

                                            <ps-label v-if="itemProvider.paramHolder.itemLocationId != '' && !itemLocationTownshipStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadSubLocation(itemProvider.paramHolder.itemLocationId)" > {{ $t("list__load_more") }} </ps-label>
                                        </div>

                                    </template>
                                </ps-dropdown>
                                <!-- end sub Location -->

                                <ps-feSecondary-button  v-if="appInfoStore.appInfo.data?.mobileSetting?.no_filter_with_location_on_map == '1'"  @click="mapFilterClicked()" class=" sm:mt-5 w-full ">
                                        {{ $t("item_list__pick_location") }}
                                </ps-feSecondary-button>


                                <ps-button theme="bg-fePrimary-500 dark:bg-feAccent-500 text-feAchromatic-50 dark:text-feAchromatic-900 py-3" class="w-full text-center sm:mt-6 mb-2" @click="locationFilterClicked"> {{ $t("fe_map_with_marker_moadl__apply") }} </ps-button>

                            </div>
                            <!-- End Filter For Normal and Large Screen -->

                            <!-- Content -->
                            <div class='w-full' >

                                <div class="flex justify-end mb-4">

                                    <div class="sm:block hidden">

                                        <ps-input-with-right-icon @keyup.enter="nameFilterClicked" v-model:value="itemProvider.paramHolder.searchTerm" className="sm:w-80 w-full bg-feAchromatic-50 dark:bg-feAchromatic-900" placeholderColor="placeholder-feSecondary-400 dark:placeholder-feSecondary-400" padding=" px-4 h-10" v-bind:placeholder="$t('search_for_large_screem__search')" >
                                            <template #icon>
                                                <ps-icon v-if="itemProvider.paramHolder.searchTerm == ''" name="search" textColor="text-feSecondary-400" class='cursor-pointer'/>
                                                <ps-icon v-else @click="[itemProvider.paramHolder.searchTerm = '',nameFilterClicked()]" name="cross" textColor="text-feSecondary-400" class='cursor-pointer'/>
                                            </template>
                                        </ps-input-with-right-icon>
                                        <!-- <ps-input type="text" class="w-full mt-1 lg:mt-2 lg:text-sm text-xs" v-bind:placeholder="$t('item_list__search')" v-model:value="itemProvider.paramHolder.searchTerm" @keyup.enter="nameFilterClicked" /> -->
                                    </div>

                                    <ps-button hover="" focus="" colors="bg-feAchromatic-50 dark:bg-feAchromatic-900 text-feSecondary-800 dark:text-feSecondary-200 " class="me-2 sm:hidden" padding="px-4 py-2" border="border border-1 border-feSecondary-200" @click="toggleShowFilter" :disabled="false">
                                        <ps-icon textColor="text-feSecondary-500 dark:text-feSecondary-200" name="filter" class='cursor-pointer me-1' />
                                        {{ $t("filter") }}
                                    </ps-button>

                                </div>

                                <div class="sm:hidden block mb-4 sm:mb-0">
                                    <ps-input-with-right-icon @keyup.enter="nameFilterClicked" v-model:value="itemProvider.paramHolder.searchTerm" className="sm:w-80 w-full bg-feAchromatic-50 dark:bg-feAchromatic-900" placeholderColor="placeholder-feSecondary-400 dark:placeholder-feSecondary-400" padding=" px-4 h-10" v-bind:placeholder="$t('search_for_large_screem__search')" >
                                        <template #icon>
                                            <ps-icon v-if="itemProvider.paramHolder.searchTerm == ''" name="search" textColor="text-feSecondary-400" class='cursor-pointer'/>
                                                <ps-icon v-else @click="[itemProvider.paramHolder.searchTerm = '',nameFilterClicked()]" name="cross" textColor="text-feSecondary-400" class='cursor-pointer'/>
                                        </template>
                                    </ps-input-with-right-icon>
                                </div>

                                    <div class="mb-4 flex flex-col gap-4 sm:flex-row md:gap-6 justify-end">
                                        <div class="flex items-center">
                                            <ps-label textColor="text-xs font-medium me-2 dark:text-feSecondary-200">{{$t("core_fe__sort_by")}}</ps-label>
                                            <ps-dropdown horizontalAlign="right" h="h-auto" class="h-10 w-auto">
                                                <template #select>
                                                    <ps-button class=" h-10 " :disabled="activeProductsArrId != 1 && activeProductsArrId != 0" colors="bg-feAchromatic-50 dark:bg-feAchromatic-900" border="border dark:border-feSecondary-400" focus="focus:outline-none focus:bg-fePrimary-500 focus:ring focus:ring-fePrimary-300 focus:text-feAchromatic-50" hover="hover:outline-none hover:bg-fePrimary-600 hover:text-feAchromatic-50">
                                                        <span class="me-2 font-medium"> {{activeSortingArrName ? $t(activeSortingArrName) : $t('core_fe__default')}} </span>
                                                        <ps-icon class="flex" name="downChervon"/>
                                                    </ps-button>
                                                </template>
                                                <template #list v-if="activeProductsArrId == 1 || activeProductsArrId == 0">
                                                    <div class="rounded-md bg-feAchromatic-50 dark:bg-feSecondary-800 shadow-xs w-44 " >
                                                        <div class="pt-2 z-30">
                                                            <div>
                                                                <div v-for="sort in sortingArr" :key="sort.id"
                                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feSecondary-500 cursor-pointer items-center"
                                                                        @click="orderingFilterClicked(sort)" >
                                                                    <ps-label v-if="(sort.id == 1 || sort.id == 2)" class="ms-2" :class="sort.id==activeSortingArrId ? ' font-medium' : 'font-light'"  >{{$t("review_entry__title")}}: {{$t(sort.title)}} </ps-label>
                                                                    <ps-label v-else-if="(sort.id == 3 || sort.id == 4)" class="ms-2" :class="sort.id==activeSortingArrId ? ' font-medium' : 'font-light'"  >{{$t("item_entry__price")}}: {{$t(sort.title)}} </ps-label>
                                                                    <ps-label v-else class="ms-2" :class="sort.id==activeSortingArrId ? ' font-medium' : 'font-light'"  > {{$t(sort.title)}} </ps-label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </ps-dropdown>
                                        </div>
                                        <div class="flex items-center">
                                            <ps-label textColor="text-xs font-medium me-2 dark:text-feSecondary-200">{{$t('core_fe__products_by')}}</ps-label>
                                            <ps-dropdown horizontalAlign="right" h="h-auto" class="h-10 w-auto">
                                                <template #select>
                                                    <ps-button class=" h-10 " colors="bg-feAchromatic-50 dark:bg-feAchromatic-900" border="border dark:border-feSecondary-400" focus="focus:outline-none focus:bg-fePrimary-500 focus:ring focus:ring-fePrimary-300 focus:text-feAchromatic-50" hover="hover:outline-none hover:bg-fePrimary-600 hover:text-feAchromatic-50">
                                                        <span class="me-2 font-medium"> {{activeProductsArrName ? $t(activeProductsArrName) : $t('core_fe__relevance')}} </span>
                                                        <ps-icon class="flex" name="downChervon"/>
                                                    </ps-button>
                                                </template>
                                                <template #list >
                                                    <div class="rounded-md bg-feAchromatic-50 dark:bg-feSecondary-800 shadow-xs w-44 " >
                                                        <div class="pt-2 z-30">
                                                            <div>
                                                                <div v-for="sort in productsArr" :key="sort.id"
                                                                    class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feSecondary-500 cursor-pointer items-center"
                                                                        @click="orderingByProductsClicked(sort)" >
                                                                    <ps-label class="ms-2" :class="sort.id==activeProductsArrId ? ' font-medium' : 'font-light'"  >{{$t(sort.title)}}</ps-label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </ps-dropdown>
                                        </div>
                                    </div>
                                

                                <div class="grid sm:grid-cols-8 xl:grid-cols-9 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-6">

                                    <div class=" sm:col-span-8 zl:col-span-9 col-span-4 w-full h-screen" v-if="itemProvider.loading.value == false && itemProvider.itemList.data == null && initial == false" >
                                        <div class="flex flex-col items-center justify-center" >
                                            <div class="h-52 ">
                                                <img v-lazy="{ src: $page.props.sysImageUrl+'/no_result.png' }" alt="" class="w-full h-52 object-contain">
                                            </div>
                                            <ps-label textColor="text-feSecondary-800 dark:text-feSecondary-300" class="text-lg font-semibold mt-4"> {{ $t("list__no_result") }} </ps-label>
                                            <ps-label textColor="text-feSecondary-500" class="mt-2 text-sm"> {{ $t("list__no_list_found") }} </ps-label>
                                            <ps-label textColor="text-feSecondary-500" class="text-sm"> {{ $t("list__search_again") }} </ps-label>
                                            <ps-button class="mt-6"> {{ $t("list__search") }} </ps-button>
                                        </div>
                                    </div>

                                    <!-- Column -->
                                    <div class="col-span-4 sm:col-span-4 xl:col-span-3 w-full" v-for="item in itemProvider.itemList.data" :key="item.id">

                                        <!-- <ps-route-link :to="{ name: 'fe_item_detail', query: { item_id: item.id   }}"> -->
                                            <item-horizontal-item  :item="item" class="infobox-item-properties" storeName="list" />
                                        <!-- </ps-route-link> -->

                                    </div>
                                    <!-- END Column -->

                                </div>

                                <div v-if="itemProvider.itemList?.code != null && itemProvider.itemList?.code.toString() != notDataCode ">

                                    <div class="flex flex-wrap justify-center mb-6">
                                        <ps-button v-if="itemProvider.loading.value == false && initial == false" class="mx-auto mt-8" @click="loadItemList" :class="itemProvider.isNoMoreRecord.value ? 'hidden' : ''"> {{ $t("list__load_more") }} </ps-button>
                                        <ps-button v-else-if="initial == false" class="mx-auto mt-8" @click="loadItemList" :disabled="true">{{ $t("list__loading") }}</ps-button>
                                    </div>
                                </div>

                            </div>
                            <!-- End Content -->

                            <!-- Filter For Small Screen -->
                            <div class='flex justify-between sm:hidden' v-if="showFilter">
                                <!-- <div class="mb-2 w-31 h-6">
                                    <ps-label class="lg:text-3xl text-xl font-medium sm:text-2xl" > {{ itemProvider.paramHolder.searchTerm }} </ps-label>
                                </div> -->
                                <div class="flex flex-col absolute top-10 right-[40px]"  >

                                    <div>
                                        <transition @enter="enter" @leave="leave">

                                            <div class='flex flex-col w-68 p-8 h-auto bg-feAchromatic-50 dark:bg-feSecondary-800 shadow-xl rounded-lg'  >

                                                <div class="flex flex-row items-center justify-between w-full">
                                                    <ps-label class="font-semibold text-base">  {{ $t("item_list__filter_by") }} </ps-label>

                                                    <ps-label class="font-light cursor-pointer text-xxs" textColor="text-feSecondary-300 dark:text-feAccent-500" @click="clearAllFilter"> {{ $t("item_list__clear_filter") }} </ps-label>
                                                </div>

                                                <!-- Category -->
                                                <div class="mt-9 mb-6">
                                                    <ps-label class="font-medium text-sm mb-1"> {{ $t("category_list__title") }} </ps-label>
                                                    <ps-dropdown align="right" class='mt-1 w-full' @onClick="loadCategory" >
                                                        <template #select>
                                                            <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.catName" />
                                                        </template>
                                                        <template #list >
                                                            <div class="rounded-md shadow-xs w-56 " >
                                                                <div class="pt-2 z-30">
                                                                    <div v-if="categoryStore.itemList.data == null">
                                                                        <ps-label class='p-2 flex' @click="loadCategory"> {{ $t("list__loading") }} </ps-label>
                                                                    </div>
                                                                    <div v-else>
                                                                        <div
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="categoryFilterClicked({catId:'', catName:$t('item_list__all')})" >
                                                                            <ps-label class="ms-2" :class="itemProvider.paramHolder.catId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                                        </div>
                                                                        <div v-for="selectData in categoryStore.itemList.data" :key="selectData.catId"
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="categoryFilterClicked(selectData)" >
                                                                            <ps-label class="ms-2" :class="selectData.catId==itemProvider.paramHolder.catId ? ' font-medium' : 'font-light'"  > {{selectData.catName}} </ps-label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #loadmore>

                                                            <div class="mb-2 w-56">

                                                                <div  v-if="categoryStore.itemList.data != null
                                                                    && categoryStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                                    <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                                                </div>

                                                                <ps-label v-if="!categoryStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadCategory" > {{ $t("list__load_more") }} </ps-label>
                                                            </div>

                                                        </template>
                                                    </ps-dropdown>
                                                </div>

                                                <!-- for sub category dropdown -->
                                                <div class="mb-6" v-if="appInfoStore?.appInfo?.data?.mobileSetting.is_show_subcategory == '1'">
                                                    <ps-label class="lg:mt-6 mb-1 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__sub_categories") }} </ps-label>
                                                    <ps-dropdown align="left" class='mt-1 w-full' @click="loadSubCategory(itemProvider.paramHolder.catId)" >
                                                        <template #select>
                                                            <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.subCatName
                                                            " />
                                                        </template>
                                                        <template #filter >
                                                            <div class="w-56">
                                                                <ps-input-with-right-icon class="rounded-xl flex-1 " @keyup.enter="filterSubCatUpdate(subCatKeyword)" v-model:value="subCatKeyword" v-bind:placeholder= "$t('item_list__search_subcat')" >
                                                                <template #icon>
                                                                    <ps-icon textColor="text-feSecondary-400 dark:text-feAchromatic-500" name="search" class='cursor-pointer' @click="filterSubCatUpdate(subCatKeyword)"/>
                                                                </template>
                                                                </ps-input-with-right-icon>
                                                            </div>
                                                        </template>
                                                        <template #list >
                                                            <div class="rounded-md shadow-xs w-56 " >
                                                                <div class="pt-2 z-30 ">
                                                                    <div v-if="subCategoryStore.subCategoryList.data == null">
                                                                        <ps-label class='p-2 flex' > {{ $t("list__loading") }} </ps-label>
                                                                    </div>
                                                                    <div v-else>
                                                                        <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="subCategoryFilterClicked({id:'', name:$t('item_list__all')})" >
                                                                            <ps-label class="ms-2" :class="itemProvider.paramHolder.subCatId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                                        </div>
                                                                        <div v-for="selectSubCat in subCategoryStore.subCategoryList.data" :key="selectSubCat.id"
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                            @click="subCategoryFilterClicked(selectSubCat)" >
                                                                            <ps-label class="ms-2" :class="selectSubCat.id==itemProvider.paramHolder.subCatId ? ' font-medium' : 'font-light'"  > {{selectSubCat.name}} </ps-label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #loadmore>

                                                            <div class="mb-2 w-56">

                                                                <div  v-if="subCategoryStore.subCategoryList.data != null
                                                                    && subCategoryStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                                    <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                                                </div>

                                                                <ps-label v-if="itemProvider.paramHolder.catId != '' &&  !subCategoryStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadSubCategory(itemProvider.paramHolder.catId)" > {{ $t("list__load_more") }} </ps-label>
                                                            </div>

                                                        </template>
                                                    </ps-dropdown>
                                                </div>
                                                <!-- end sub category -->

                                                <!-- Status -->
                                                <div class="w-full mb-6 flex flex-col">
                                                    <!-- <ps-label class="mb-1 lg:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_detail__status") }} </ps-label>
                                                    <div class="flex flex-row w-full text-sm font-medium">
                                                        <ps-radio v-for=" selectData  in itemProvider.paramHolder.sortingList"
                                                            :key="selectData.id"
                                                            :value="selectData"
                                                            v-model:selectedValue="currentsorting"
                                                            :title="selectData.name"
                                                            :onChange = "sortingFilterClicked"
                                                            class="text-feSecondary-800 text-xs lg:text-sm lg:me-6 me-2 mt-1 lg:mt-2"></ps-radio>


                                                    </div> -->
                                                    <div v-if="appInfoStore.appInfo.data?.mobileSetting?.is_show_discount == '1'" class="mt-6 w-full text-sm font-medium">
                                                        <div class="sm:mt-4 md:mt-6 flex flex-row w-full text-sm font-medium">
                                                            <ps-checkbox-value title=""
                                                            class="" v-model:value="isDiscount"
                                                            @click="isDiscountFilterClicked" />
                                                            <ps-label class='me-2 font-medium text-sm lg:text-base'>{{ $t("item_list__is_discount") }}</ps-label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <!-- Stock -->
                                                <div class="mb-6 w-full flex flex-col">
                                                    <ps-label class="mb-1 lg:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_list__stock") }} </ps-label>
                                                    <div class="flex flex-row w-full text-sm font-medium">
                                                        <ps-radio v-for=" selectData  in soldOutItem"
                                                            :key="selectData.id"
                                                            :value="selectData"
                                                            v-model:selectedValue="currentstatus"
                                                            :title="selectData.name"
                                                            :onChange = "soldItemFilterClicked"
                                                            class="text-feSecondary-800 text-xs lg:text-sm lg:me-6 me-2 mt-1 lg:mt-2"></ps-radio>
                                                    </div>
                                                </div>

                                                <!-- Price Range -->
                                                <div class="w-full mb-6">
                                                    <ps-label class="mb-1 lg:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" >  {{ $t("item_list__price_range") }} </ps-label>
                                                    <div class="grid grid-cols-2 gap-2">
                                                        <ps-input theme="dark:bg-feSecondary-800 dark:text-feSecondary-300" type="text" class="w-full" v-bind:placeholder="$t('item_list__min')" v-model:value="itemProvider.paramHolder.minPrice" @keypress="checkPrice($event)" @keyup.enter="pricerangeItemFilterClicked" />
                                                        <ps-input theme="dark:bg-feSecondary-800 dark:text-feSecondary-300" type="text" class="w-full " v-bind:placeholder="$t('item_list__max')" v-model:value="itemProvider.paramHolder.maxPrice" @keypress="checkPrice($event)" @keyup.enter="pricerangeItemFilterClicked"/>
                                                    </div>
                                                </div>

                                                <!-- custom field start -->
                                                <div v-for="customFieldHeader in customFieldStore.customField.data?.customList" :key="customFieldHeader.id">
                                                    <!-- dropdown-->

                                                    <div class="mb-6 lg:mt-6" v-if="(customFieldHeader.coreKeysId == 'ps-itm00007' || customFieldHeader.coreKeysId == 'ps-itm00002') && customFieldHeader.uiType.coreKeysId === 'uit00001' && customFieldHeader.isVisible === '1' && customFieldHeader.isDelete === '0'">
                                                        <ps-label class="mb-1 text-base">{{ $t(customFieldHeader.name) }}</ps-label>
                                                        <ps-dropdown align="left" class='lg:mt-2 mt-1  w-full' @onClick="loadCustomField(customFieldHeader.coreKeysId)">
                                                            <template #select>

                                                                <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :showCenter="true" :selectedValue="
                                                                customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data?.filter((customField)=> customField.id === form.product_relation[customFieldHeader.coreKeysId])[0]?.name

                                                                " />

                                                            </template>
                                                            <template #list >
                                                                <div
                                                                    class="rounded-md shadow-xs w-56 " >
                                                                    <div class="pt-2 z-30 ">
                                                                        <div v-if="customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data == null">
                                                                            <ps-label class='p-2 flex' @click="loadCustomField(customFieldHeader.coreKeysId)">{{ $t("item_entry__loading") }} </ps-label >
                                                                        </div>
                                                                        <div v-else>
                                                                            <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                                @click="selectCustomDropdown(customFieldHeader.coreKeysId,'')" >
                                                                                    <ps-label class="ms-2" :class="form.product_relation[customFieldHeader.coreKeysId] =='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                                            </div>
                                                                            <div v-for="selectData in customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data"
                                                                            :key="selectData.coreKeysId"
                                                                            class="w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center"
                                                                            @click="selectCustomDropdown(customFieldHeader.coreKeysId,selectData.id)" >

                                                                                <ps-label class="ms-2" :class="form.product_relation[customFieldHeader.coreKeysId] == selectData.id ? 'font-bold' : ''"> {{selectData.name}} </ps-label>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                            <template #loadmore>

                                                                <div class="mb-2 w-56">

                                                                    <div  v-if="customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.customizeUiList.data != null
                                                                        && customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.loading.value == true" class='mt-4 ms-4 flex'>
                                                                        <ps-label > {{ $t("item_entry__loading") }}</ps-label>
                                                                    </div>

                                                                    <ps-label class="flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer" v-if="!customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customFieldHeader.coreKeysId)[0]?.provider?.isNoMoreRecord"   @click="loadCustomField(customFieldHeader.coreKeysId)" > {{ $t("item_entry__load_more") }} </ps-label>
                                                                </div>

                                                            </template>
                                                        </ps-dropdown>
                                                    </div>




                                                </div>
                                                <!-- /.custom field end -->

                                                <!-- Location -->
                                                <div class="mb-6">
                                                    <ps-label class="mb-1 lg:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__location_city") }} </ps-label>
                                                    <ps-dropdown align="left" class='mt-1 lg:mt-2 w-full' @onClick="loadLocation" >
                                                        <template #select>
                                                            <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.itemLocationName" />
                                                        </template>
                                                        <template #list >
                                                            <div class="rounded-md shadow-xs w-56" >
                                                                <div class="pt-2 z-30">
                                                                    <div v-if="itemLocationStore.itemLocationList.data == null">
                                                                        <ps-label class='p-2 flex' @click="loadLocation"> {{ $t("list__loading") }} </ps-label>
                                                                    </div>
                                                                    <div v-else>
                                                                        <div
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="itemlocFilterClicked('', $t('item_list__all'),0,0)" >
                                                                            <ps-label class="ms-2" :class="itemProvider.paramHolder.itemLocationId=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                                        </div>
                                                                        <div v-for="selectData in itemLocationStore.itemLocationList.data" :key="selectData.id"
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="itemlocFilterClicked(selectData.id, selectData.name,selectData.lat, selectData.lng)" >
                                                                            <ps-label class="ms-2" :class="selectData.id==itemProvider.paramHolder.itemLocationId ? ' font-medium' : 'font-light'"  > {{selectData.name}} </ps-label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #loadmore>

                                                            <div class="mb-2 w-56">

                                                                <div  v-if="itemLocationStore.itemLocationList.data != null
                                                                    && itemLocationStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                                    <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                                                </div>

                                                                <ps-label v-if="!itemLocationStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadLocation" > {{ $t("list__load_more") }} </ps-label>
                                                            </div>

                                                        </template>
                                                    </ps-dropdown>
                                                </div>

                                                <!-- for sub Location -->
                                                <div class="mb-6">
                                                    <ps-label v-if="appInfoStore.appInfo.data?.psAppSetting?.isSubLocation == '1'" class="mb-1 lg:mt-6 lg:text-base font-medium text-sm" textColor="text-feSecondary-800 dark:text-feSecondary-300" > {{ $t("item_list__location_township") }} </ps-label>
                                                    <ps-dropdown align="left" class='mt-1 w-full' @click="loadSubLocation(itemProvider.paramHolder.itemLocationId)" v-if="appInfoStore.appInfo.data?.psAppSetting?.isSubLocation == '1'">
                                                        <template #select>
                                                            <ps-dropdown-select placeholderLang='item_list__all' border="border dark:border-feSecondary-200" :selectedValue="itemProvider.paramHolder.itemLocationTownshipName
                                                            " />
                                                        </template>
                                                        <template #list >
                                                            <div class="rounded-md shadow-xs w-56 " >
                                                                <div class="pt-2 z-30 ">
                                                                    <div v-if="itemLocationTownshipStore.locationTownshipList.data == null">
                                                                        <ps-label class='p-2 flex' > {{ $t("list__loading") }} </ps-label>
                                                                    </div>
                                                                    <div v-else>
                                                                        <div class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                        @click="subLocFilterClicked({id:'', name:$t('item_list__all')})" >
                                                                            <ps-label class="ms-2" :class="itemProvider.paramHolder.itemLocationTownship=='' ? ' font-medium' : 'font-light'"  > {{ $t("item_list__all") }}  </ps-label>
                                                                        </div>
                                                                        <div v-for="selectSubLoc in itemLocationTownshipStore.locationTownshipList.data" :key="selectSubLoc.id"
                                                                        class="w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"
                                                                            @click="subLocFilterClicked(selectSubLoc)" >
                                                                            <ps-label class="ms-2" :class="selectSubLoc.id==itemProvider.paramHolder.itemLocationTownship ? ' font-medium' : 'font-light'"  > {{selectSubLoc.townshipName}} </ps-label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #loadmore>

                                                            <div class="mb-2 w-56">

                                                                <div  v-if="itemLocationTownshipStore.locationTownshipList.data != null
                                                                    && itemLocationTownshipStore.loading.value == true" class='mt-4 ms-4 flex'>
                                                                    <ps-label-caption > {{ $t("list__loading") }} </ps-label-caption>
                                                                </div>

                                                                <ps-label v-if="itemProvider.paramHolder.itemLocationId != '' && !itemLocationTownshipStore.isNoMoreRecord" class="mt-4 ms-4 mb-2 underline font-medium cursor-pointer flex"   @click="loadSubLocation(itemProvider.paramHolder.itemLocationId)" > {{ $t("list__load_more") }} </ps-label>
                                                            </div>

                                                        </template>
                                                    </ps-dropdown>
                                                </div>
                                                <!-- end sub Location -->

                                                <ps-feSecondary-button  v-if="appInfoStore.appInfo.data?.frontendConfigSetting?.noFilterWithLocationOnMap != '1'"  @click="mapFilterClicked()" class="mb-6 lg:mt-5 w-full ">
                                                {{ $t("item_list__pick_location") }}
                                                </ps-feSecondary-button>

                                                <ps-button theme="bg-fePrimary-500 dark:bg-feAccent-500 text-feAchromatic-50 dark:text-feAchromatic-900 py-3 " textSize="text-xs" class="w-full text-center mb-2" @click="locationFilterClicked"> {{ $t("fe_map_with_marker_moadl__apply") }} </ps-button>

                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- google adsense desktop view -->
                <div class="mx-auto">
                    <ps-ad-sense adFormat="horizontal"></ps-ad-sense>
                </div>

            </div>

            <ps-error-dialog ref="ps_error_dialog" />
            <ps-loading-dialog ref="ps_loading_dialog" class='z-40' />
            <map-with-makers-modal ref="map_with_makers_modal" />
        </template>
    </ps-content-container>


</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
import PsContentContainer from '@template1/vendor/components/layouts/container/PsContentContainer.vue';

// Vue
// import { useRoute } from 'vue-router'
import { onMounted,onUnmounted, ref,reactive ,defineAsyncComponent } from 'vue';

// Core UI
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsLabelTitle from '@template1/vendor/components/core/label/PsLabelTitle.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsSecondaryButton from '@template1/vendor/components/core/buttons/PsSecondaryButton.vue';
import PsInput from '@template1/vendor/components/core/input/PsInput.vue';
import PsInputWithRightIcon from '@template1/vendor/components/core/input/PsInputWithRightIcon.vue';
const PsDropdown = defineAsyncComponent(() => import('@template1/vendor/components/core/dropdown/PsDropdown.vue'));
// import PsDropdown from '';
import PsDropdownSelect from '@template1/vendor/components/core/dropdown/PsDropdownSelect.vue';
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import PsErrorDialog from '@template1/vendor/components/core/dialog/PsErrorDialog.vue';
import MapWithMakersModal from '@template1/vendor/components/layouts/map/MapWithMakersModal.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsRadio from '@template1/vendor/components/core/radio/PsRadio.vue';
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';
import PsCheckboxValue from '@template1/vendor/components/core/checkbox/PsCheckboxValue.vue';
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import PsBreadcrumb2 from "@template1/vendor/components/core/breadcrumbs/PsBreadcrumb2.vue";

// Models
import { useProductStore } from "@templateCore/store/modules/item/ProductStore";

import { useSubCategoryStoreState } from '@templateCore/store/modules/subCategory/SubCategoryStore';
import { useUserListStoreState } from "@templateCore/store/modules/user/UserListStore";
import { useCategoryStoreState } from '@templateCore/store/modules/category/CategoryStore';
import { useItemLocationStoreState } from '@templateCore/store/modules/itemlocation/ItemLocationStore';
import { useItemLocationTownshipStoreState } from '@templateCore/store/modules/itemLocationTownship/ItemLocationTownshipStore';
import { createDealOptionProviderState } from '@templateCore/store/modules/dealOption/DealOptionProvider';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';

// Params Holders
import { PsValueStore } from '@templateCore/store/modules/core/PsValueStore';
import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import PsConst from '@templateCore/object/constant/ps_constants';
import LocationParameterHolder from '@templateCore/object/holder/LocationParameterHolder';
import SubCategoryListParameterHolder from '@templateCore/object/holder/SubCategoryListParameterHolder';
// import Velocity from "velocity-animate";
    import { useCustomFieldStoreState } from '@templateCore/store/modules/customField/CustomFieldStore';
    import { useCustomizeUiStoreState } from '@templateCore/store/modules/customField/CustomizeUiStore';
//language
import { trans } from 'laravel-vue-i18n';
import {  useForm } from "@inertiajs/vue3";
    import Axios from 'axios';


const ItemHorizontalItem = defineAsyncComponent(() => import('@template1/vendor/components/modules/item/ItemHorizontalItem.vue'));

export default {
    name : "ItemListView",
    components : {
        PsBreadcrumb2,
        PsContentContainer,
        PsInputWithRightIcon,
        PsLabel,
        PsLabelTitle,
        ItemHorizontalItem,
        PsButton,
        PsRadio,
        PsInput,
        PsDropdown,
        PsDropdownSelect,
        PsLabelCaption,
        PsLoadingDialog,
        PsErrorDialog,
        MapWithMakersModal,
        PsRouteLink,
        PsIcon,
        PsAdSense,
        PsCheckboxValue,
        PsSecondaryButton,
        Head
    },
    layout: PsFrontendLayout,
    props : ['query'],
    setup(props) {

        const sortingArr = reactive([
            {
                id: 0,
                title: "core_fe__default",
                orderBy: "added_date",
                type: 'desc'
            },
            {
                id: 1,
                title: "A_to_Z",
                orderBy: "title",
                type: 'asc'
            },
            {
                id: 2,
                title: "Z_to_A",
                orderBy: "title",
                type: 'desc'
            },
            {
                id: 3,
                title: "core_fe__high_to_low",
                orderBy: "price",
                type: 'desc'
            },
            {
                id: 4,
                title: "core_fe__low_to_high",
                orderBy: "price",
                type: 'asc'
            }
        ]);

        let activeSortingArrName = ref('');
        let activeSortingArrId = ref('');

        const productsArr = reactive([
            {
                id: 0,
                title: "core_fe__relevance",
                orderBy: "added_date",
                type: 'desc'
            },
            {
                id: 1,
                title: "core_fe__featured",
                orderBy: "title",
                type: 'desc'
            },
            {
                id: 2,
                title: "core_fe__recently_added",
                orderBy: "added_date",
                type: 'desc'
            },
            {
                id: 3,
                title: "core_fe__popular",
                orderBy: "item_touch_count",
                type: 'desc'
            },
            {
                id: 4,
                title: "core_fe__most_favorited",
                orderBy: "favourite_count",
                type: 'desc'
            }
        ]);

        let activeProductsArrName = ref('');
        let activeProductsArrId = ref('');

        /**
         * Init Providers & Refs
         */
        const subCategoryStore = useSubCategoryStoreState();
        const categoryStore = useCategoryStoreState('cat');
        const itemLocationStore = useItemLocationStoreState();
        const itemLocationTownshipStore = useItemLocationTownshipStoreState();
        const itemProvider = useProductStore('list');
        const userProvider = useUserListStoreState();
        const appInfoStore = usePsAppInfoStoreState();
        const dealOptionProvider = createDealOptionProviderState();
        const locationKeyword = ref('');
        const psValueStore = PsValueStore();
        const ps_loading_dialog = ref();
        const map_with_makers_modal = ref();
        const loginUserId = psValueStore.getLoginUserId();
        const paramHolder = new LocationParameterHolder().getDefaultParameterHolder();
        const subcatHolder = new SubCategoryListParameterHolder();
        const initial = ref(true);


        const customFieldStore = useCustomFieldStoreState('list');
        const customizeUiStoreList = reactive({
                                            data : [{
                                                'id': 'default',
                                                'provider': useCustomizeUiStoreState('default')
                                            }]
                                            });

        const ps_error_dialog = ref();
        const radius = ref("0");
        const subCatKeyword = ref("");

        const soldOutItem = ref([
            {
                id: "0",name : "Available"
            },
            {
                id: "1",name : "Sold out"
            }
        ]);
        const soldItemId = ref('');
        const soldItemName = ref('');

        const filtering = ref(false);

        const showFilter = ref(false);

        const selectedLocationlat = ref(0);
        const selectedLocationlng = ref(0);

        let form = useForm(
                {
                    product_relation: {},
                }
            )

        const notDataCode =  PsConst.ERROR_CODE_10001;
        let activeSortingId = ref('');
        let activeSortingName = ref('');
        const usersorting = [
            {
                id:"0",
                orderBy:"user_name",
                orderType:PsConst.FILTERING__ASC,
                name: trans('item_list__ascending')
            },
            {
                id:"1",
                orderBy:"user_name",
                orderType:PsConst.FILTERING__DESC,
                name: trans('item_list__decending'),
            }
        ];

        /**
         * Init Data
         */
        // const route = useRoute();
        let isDiscount = ref(false);

        itemProvider.paramHolder.parseParamsAndQuery(props.query);


        let currentsorting = reactive({
            id:"0",
            orderBy:PsConst.FILTERING__ADDED_DATE,
            orderType:PsConst.FILTERING__DESC,
            name:"Recent"
        });

         let currentstatus = reactive({
            id: "0",name : "Available"
        });




        async function usernameFilterClicked() {
            loadUserDataList()
        }

        async function usersortingFilterClicked(value) {

            activeSortingId.value = value.id;
            activeSortingName.value = value.name;
            userProvider.userparamHolder.orderBy = value.orderBy;
            userProvider.userparamHolder.orderType = value.orderType;
            loadUserDataList()


        }

        function filterSubCatUpdate(value){
            subcatHolder.keyword = value;
            subCategoryStore.filtersubCatUpdate(loginUserId,subcatHolder);
        }

        async function loadUserDataList() {

           await userProvider.loadUserSearchList( loginUserId,userProvider.userparamHolder);

        }

        function isDiscountFilterClicked() {
            itemProvider.paramHolder.isDiscount = isDiscount.value == false ? '1' : '0';
            loadDataList();
        }

        /**
         * Loading Data
         */
        onMounted(async () => {
            setTimeout(async ()=>{
            // console.log(window.popStateDetected);
                if(!window.popStateDetected) {
                    if(initial.value == true && itemProvider.itemList.data == null){
                        ps_loading_dialog.value.openModal();
                    }
                    
                    if(itemProvider.paramHolder.isDiscount == '1'){
                            isDiscount.value = true;
                    }else {
                            isDiscount.value = false;
                    }
                        if(itemProvider.paramHolder.orderBy == PsConst.FILTERING_TRENDING && itemProvider.paramHolder.orderType == PsConst.FILTERING__DESC){
                            currentsorting.id = "1";
                            currentsorting.orderBy = PsConst.FILTERING_TRENDING;
                            currentsorting.orderType = PsConst.FILTERING__DESC;
                            currentsorting.name = "Popular";
                        }else{

                            currentsorting.id = "0";
                            currentsorting.orderBy = PsConst.FILTERING__ADDED_DATE;
                            currentsorting.orderType = PsConst.FILTERING__DESC;
                            currentsorting.name = "Recent";


                            itemProvider.paramHolder.sortingName == 'Recent';
                            itemProvider.paramHolder.orderBy == PsConst.FILTERING__ADDED_DATE;
                            itemProvider.paramHolder.orderType == PsConst.FILTERING__DESC;
                        }

                        if(itemProvider.paramHolder.isSoldOut == '1'){
                            currentstatus.id = "1";
                            currentstatus.name = "Sold";
                        }else{
                            currentstatus.id = "0";
                            currentstatus.name = "Available";

                            itemProvider.paramHolder.isSoldOut == '0';
                        }

                        await loadDataList();

                        await customFieldStore.loadCustomFieldList(loginUserId);

                        for(const customField of customFieldStore.customField.data?.customList){
                            // for dropdown
                            if(customField.isVisible == '1' && customField.isDelete == '0' && customField.uiType.coreKeysId == 'uit00001'){
                                customizeUiStoreList.data.push({
                                    'id': customField.coreKeysId,
                                    'provider': useCustomizeUiStoreState(customField.coreKeysId)
                                })
                            }
                        }

                        const productRelation = itemProvider.paramHolder.productRelation;

                        if(productRelation != null && productRelation.length > 0){
                            productRelation.forEach((customField) => {

                                form.product_relation[customField.core_keys_id] = customField.value;

                                loadCustomField(customField.core_keys_id);

                            });
                        }
                        if(itemProvider.paramHolder.catId != '') {
                            loadSubCategory(itemProvider.paramHolder.catId);
                        }

                    
                }else {
                    initial.value = false;
                    window.popStateDetected = false;
                } 
            },1000);        
        });
         onUnmounted(() => {
            // Search Terms
            itemProvider.paramHolder.searchTerm = '';

            // Price Range
            itemProvider.paramHolder.minPrice = '';
            itemProvider.paramHolder.maxPrice = '';

            // Category
            itemProvider.paramHolder.catId = '';
            itemProvider.paramHolder.catName = '';

            // SubCategory
            itemProvider.paramHolder.subCatId = '';
            itemProvider.paramHolder.subCatName = '';

            // Item Type
            itemProvider.paramHolder.itemTypeId = '';
            itemProvider.paramHolder.itemTypeName = '';

            // Item Conditions
            itemProvider.paramHolder.conditionOfItemId = '';
            itemProvider.paramHolder.itemConditionName = '';

            // Item Price Type
            itemProvider.paramHolder.itemPriceTypeId = '';
            itemProvider.paramHolder.itemPriceTypeName = '';

            // deal option
            itemProvider.paramHolder.dealOptionId = '';
            itemProvider.paramHolder.dealOptionName = '';

            itemProvider.paramHolder.itemLocationId = '';
            itemProvider.paramHolder.itemLocationName = trans('item_list__all');
            itemProvider.paramHolder.itemLocationTownship = '';
            itemProvider.paramHolder.itemLocationTownshipName = '';
            itemProvider.paramHolder.lat = '';
            itemProvider.paramHolder.lng = '';
            itemProvider.paramHolder.mile = '';

            customFieldStore.$reset;

            for(const customField of customFieldStore.customField.data?.customList){
                if(customField.isVisible == '1' && customField.isDelete == '0' && customField.uiType.coreKeysId == 'uit00001'){
                    customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === customField.coreKeysId)[0]?.provider.$reset;
                }
            }
        });

        function loadSubCategory(catId) {
            subCategoryStore.loadSubCategoryList(catId);
        }

        function loadSubLocation(itemLocationId) {
            itemLocationTownshipStore.loadItemLocationTownshipList(itemLocationId);
        }

        function loadDealOption() {
            dealOptionProvider.loadDealOptionList();
        }

        function loadItemList() {
            itemProvider.loadItemList(psValueStore.getLoginUserId(), itemProvider.paramHolder);
        }

        function loadCategory() {
            categoryStore.loadItemList(psValueStore.getLoginUserId(), categoryStore.paramHolder);
        }

        function loadLocation() {
            itemLocationStore.loadItemLocationList(psValueStore.getLoginUserId(), paramHolder);
        }

        /**
         * Actions
         */

        function sortingFilterClicked(value) {
            currentsorting = value;
            itemProvider.paramHolder.orderBy = value.orderBy;
            itemProvider.paramHolder.orderType = value.orderType;
            itemProvider.paramHolder.sortingId = value.id;
            itemProvider.paramHolder.sortingName = value.name;

            loadDataList();
        }

        function soldItemFilterClicked(value) {
currentstatus = value;
            itemProvider.paramHolder.isSoldOut = value.id;

            soldItemId.value = value.id;
            soldItemName.value = value.name;

            loadDataList();
        }


        function conditionFilterClicked(value) {
            itemProvider.paramHolder.conditionOfItemId = value.id;
            itemProvider.paramHolder.itemConditionName = value.name;

            loadDataList();
        }



        function checkPrice(e) {

            const char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[0-9]+$/.test(char)) return true; // Match with regex
            else e.preventDefault(); // If not match, don't add to input text

        }
        function checklocation(e) {

            const char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[0-9]*\.?[0-9]*$/.test(char)) return true; // Match with regex
            else e.preventDefault(); // If not match, don't add to input text

        }

        function pricerangeItemFilterClicked() {

            if(itemProvider.paramHolder.minPrice != '' && itemProvider.paramHolder.maxPrice != '') {
                const maxPrice : number = parseFloat(itemProvider.paramHolder.maxPrice.toString());
                const minPrice : number = parseFloat(itemProvider.paramHolder.minPrice.toString())
                if( minPrice >= maxPrice) {
                    ps_error_dialog.value.openModal(
                        trans('item_list__warning'),
                        trans('item_list__invalid_min_max_prices'));
                    return;
                }
            }

            loadDataList();
        }



        function nameFilterClicked() {

            loadDataList();
        }

        function subCategoryFilterClicked(value) {

            itemProvider.paramHolder.subCatId = value.id;
            itemProvider.paramHolder.subCatName = value.name;

            loadDataList();
        }

        function categoryFilterClicked(value) {
            subcatHolder.catId = value.catId;
            itemProvider.paramHolder.catId = value.catId;
            itemProvider.paramHolder.catName = value.catName;

            itemProvider.paramHolder.subCatId = '';
            itemProvider.paramHolder.subCatName = '';

            loadDataList();
            subCategoryStore.resetSubCategoryList(value.id);

        }

        function orderingFilterClicked(value) {
            activeSortingArrId.value = value.id;
            activeSortingArrName.value = value.title;
            itemProvider.paramHolder.orderBy = value.orderBy;
            itemProvider.paramHolder.orderType = value.type;

            loadDataList();
        }

        function orderingByProductsClicked(value) {
            activeProductsArrId.value = value.id;
            activeProductsArrName.value = value.title;
            itemProvider.paramHolder.paidStatus = value.id == "1" ? "only_paid_item" : '';
            itemProvider.paramHolder.orderBy = value.orderBy;
            itemProvider.paramHolder.orderType = value.type;

            loadDataList();
        }

        function itemlocFilterClicked(id, name,lat,lng) {

            selectedLocationlat.value = lat;
            selectedLocationlng.value = lng;

            itemProvider.paramHolder.itemLocationId = id;
            itemProvider.paramHolder.itemLocationName = name;

            itemProvider.paramHolder.itemLocationTownship = '';
            itemProvider.paramHolder.itemLocationTownshipName = '';

            loadDataList();
            itemLocationTownshipStore.resetItemLocationTownshipList(id);

        }

        function subLocFilterClicked(value) {

            itemProvider.paramHolder.itemLocationTownship = value.id;
            itemProvider.paramHolder.itemLocationTownshipName = value.townshipName;

            loadDataList();
        }

        function itemtypeFilterClicked(value) {

            itemProvider.paramHolder.itemTypeId = value.id;
            itemProvider.paramHolder.itemTypeName = value.name;

            loadDataList();
        }
         function itemPriceTypeFilterClicked(value) {

            itemProvider.paramHolder.itemPriceTypeId = value.id;
            itemProvider.paramHolder.itemPriceTypeName = value.name;

            loadDataList();
        }
        function dealOptionFilterClicked(value) {

            itemProvider.paramHolder.dealOptionId = value.id ;
            itemProvider.paramHolder.dealOptionName = value.name;

            loadDataList();
        }
        function mapFilterClicked(){

            if(map_with_makers_modal.value.isFirstTime){
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        Axios.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude,
                        ).then(async (response) => {
                            map_with_makers_modal.value.closeModal();

                            itemProvider.paramHolder.lat =  await response.data.lat.toString();
                            itemProvider.paramHolder.lng = await response.data.lon.toString();

                            map_with_makers_modal.value.openModal(itemProvider.paramHolder.lat,itemProvider.paramHolder.lng,itemProvider.paramHolder.mile,
                            (lat, lng, mile)=>{

                                if(lat == null || lng == null) {
                                    return;
                                }

                                itemProvider.paramHolder.lat = lat;
                                itemProvider.paramHolder.lng = lng;
                                itemProvider.paramHolder.mile = mile;
                                loadDataList();
                            });

                    }).catch(error => {
                        console.log("sese1");
                        console.log(error);
                        setDefaultLatLng();
                        map_with_makers_modal.value.openModal(itemProvider.paramHolder.lat,itemProvider.paramHolder.lng,itemProvider.paramHolder.mile,
                            (lat, lng, mile)=>{

                                if(lat == null || lng == null) {
                                    return;
                                }

                                itemProvider.paramHolder.lat = lat;
                                itemProvider.paramHolder.lng = lng;
                                itemProvider.paramHolder.mile = mile;
                                loadDataList();
                            });

                    });
                    },
                    error => {
                        console.log("sese");
                        console.log(error);
                        setDefaultLatLng();
                        map_with_makers_modal.value.openModal(itemProvider.paramHolder.lat,itemProvider.paramHolder.lng,itemProvider.paramHolder.mile,
                                                (lat, lng, mile)=>{

                        if(lat == null || lng == null) {
                            return;
                        }

                        itemProvider.paramHolder.lat = lat;
                        itemProvider.paramHolder.lng = lng;
                        itemProvider.paramHolder.mile = mile;
                        loadDataList();
                    });

                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 7000,
                        maximumAge: 0
                        });
                } else {
                    alert("Your browser doesn't support geolocation API");
                    setDefaultLatLng();
                    map_with_makers_modal.value.openModal(itemProvider.paramHolder.lat,itemProvider.paramHolder.lng,itemProvider.paramHolder.mile,
                        (lat, lng, mile)=>{

                        if(lat == null || lng == null) {
                            return;
                        }

                        itemProvider.paramHolder.lat = lat;
                        itemProvider.paramHolder.lng = lng;
                        itemProvider.paramHolder.mile = mile;
                        loadDataList();
                    });

                }
            }else{

                if(itemProvider.paramHolder.lat == null || itemProvider.paramHolder.lat == ''  || itemProvider.paramHolder.lng == null || itemProvider.paramHolder.lng == ''){
                    setDefaultLatLng();
                }
                map_with_makers_modal.value.openModal(itemProvider.paramHolder.lat,itemProvider.paramHolder.lng,itemProvider.paramHolder.mile,
                (lat, lng, mile)=>{

                    if(lat == null || lng == null) {
                        return;
                    }

                    itemProvider.paramHolder.lat = lat;
                    itemProvider.paramHolder.lng = lng;
                    itemProvider.paramHolder.mile = mile;
                    loadDataList();
                }
                );

            }

        }

        function setDefaultLatLng(){
            if(selectedLocationlat.value != null && selectedLocationlat.value != 0 && selectedLocationlat.value != undefined){
                itemProvider.paramHolder.lat = selectedLocationlat.value;
            }else{
                itemProvider.paramHolder.lat = appInfoStore.appInfo.data?.psAppSetting?.latitude;
            }
            if(selectedLocationlng.value != null && selectedLocationlng.value != 0 && selectedLocationlng.value != undefined){
                itemProvider.paramHolder.lng = selectedLocationlng.value;
            }else{
                itemProvider.paramHolder.lng = appInfoStore.appInfo.data?.psAppSetting?.longitude;

            }
        }

        function updateLocation(lat, lng, mile) {
            if(lat == null || lng == null) {
                return;
            }

            itemProvider.paramHolder.lat = lat;
            itemProvider.paramHolder.lng = lng;
            itemProvider.paramHolder.mile = mile;
            loadDataList();
        }
        function locationFilterClicked(){
            loadDataList();
        }

        function filterKeywordUpate(value) {
            itemLocationStore.filterKeywordUpate(value,loginUserId, paramHolder);
        }
        let tmpLat = '';
        let tmpLng = '';
        async function loadDataList() {

            if(showFilter.value == true){
                showFilter.value = false;
            }

            ps_loading_dialog.value.openModal();

            if(itemProvider.paramHolder.mile == '0' || itemProvider.paramHolder.mile.toString() == '') {
                tmpLat = itemProvider.paramHolder.lat.toString();
                tmpLng = itemProvider.paramHolder.lng.toString();
                itemProvider.paramHolder.lat = '';
                itemProvider.paramHolder.lng = '';
            }else{
                tmpLat = itemProvider.paramHolder.lat;
                tmpLng = itemProvider.paramHolder.lng;
            }

            // console.log(window.location);
            const param = itemProvider.getURLforList();
            const url = window.location.origin+window.location.pathname+param;
            history.pushState(null, "", url);

            await itemProvider.resetProductList(psValueStore.getLoginUserId(), itemProvider.paramHolder);

            itemProvider.paramHolder.lat = tmpLat;
            itemProvider.paramHolder.lng = tmpLng;

            ps_loading_dialog.value.closeModal();
            isFiltering();
            initial.value = false;
        }
        function toggleShowFilter(){
            showFilter.value = !showFilter.value;
        }
        async function clearAllFilter() {
            // Search Terms
            itemProvider.paramHolder.searchTerm = '';

            // Price Range
            itemProvider.paramHolder.minPrice = '';
            itemProvider.paramHolder.maxPrice = '';

            // Category
            itemProvider.paramHolder.catId = '';
            itemProvider.paramHolder.catName = '';

            // SubCategory
            itemProvider.paramHolder.subCatId = '';
            itemProvider.paramHolder.subCatName = '';

            // Item Type
            itemProvider.paramHolder.itemTypeId = '';
            itemProvider.paramHolder.itemTypeName = '';

            // Item Conditions
            itemProvider.paramHolder.conditionOfItemId = '';
            itemProvider.paramHolder.itemConditionName = '';

            // Item Price Type
            itemProvider.paramHolder.itemPriceTypeId = '';
            itemProvider.paramHolder.itemPriceTypeName = '';

            // deal option
            itemProvider.paramHolder.dealOptionId = '';
            itemProvider.paramHolder.dealOptionName = '';

            itemProvider.paramHolder.itemLocationId = localStorage.locationId ?? '';
            itemProvider.paramHolder.itemLocationName = trans('item_list__all');
            itemProvider.paramHolder.itemLocationTownship = localStorage.subLocationId ?? '';
            itemProvider.paramHolder.itemLocationTownshipName = '';
            itemProvider.paramHolder.lat = '';
            itemProvider.paramHolder.lng = '';
            itemProvider.paramHolder.mile = '';
            selectedLocationlat.value = 0;
            selectedLocationlat.value = 0;
            itemProvider.paramHolder.isSoldOut = '';
            itemProvider.paramHolder.paidStatus = '';
            itemProvider.paramHolder.isPaid = '';
            currentstatus.id = "0";
            currentstatus.name = "Available";
            itemProvider.paramHolder.isDiscount = '0';
            isDiscount.value = false;
            itemProvider.paramHolder.productRelation = [];
            form.product_relation = {};
            loadDataList();

        }
        function isFiltering() {

            filtering.value = false;
            if(
            itemProvider.paramHolder.searchTerm != '' ||
            itemProvider.paramHolder.minPrice != '' ||
            itemProvider.paramHolder.maxPrice != '' ||
            itemProvider.paramHolder.catId != '' ||
            itemProvider.paramHolder.subCatId != '' ||
            itemProvider.paramHolder.itemTypeId != '' ||
            itemProvider.paramHolder.conditionOfItemId != '' ||
            itemProvider.paramHolder.itemPriceTypeId != '' ||
            itemProvider.paramHolder.dealOptionId != '' ||
            itemProvider.paramHolder.itemLocationId != '' ||
            itemProvider.paramHolder.itemLocationTownship != '' ||
            itemProvider.paramHolder.lat != '' ||
            itemProvider.paramHolder.lng != '' ||
            itemProvider.paramHolder.mile != '' ){
                filtering.value = true;
            }


        }

        const appInfoParameterHolder = new AppInfoParameterHolder();
        appInfoParameterHolder.userId = loginUserId;
        // appInfoStore.loadAppInfo(appInfoParameterHolder);
        const arrowIcon = ref("downArrow");
        function enter(el, done) {
            arrowIcon.value = "upArrow";
			// Velocity(
			// 	el,
			// 	"slideDown",
			// 	{
			// 	duration: 300
			// 	},
			// 	{
			// 	complete: done
			// 	}
			// );
        }

		function leave(el, done) {
            arrowIcon.value = "downArrow";
			// Velocity(
			// 	el,
			// 	"slideUp",
			// 	{
			// 	duration: 300
			// 	},
			// 	{
			// 	complete: done
			// 	}
			// );
        }
        function selectCustomDropdown(coreKeysId,id){
            form.product_relation[coreKeysId] = id;

            itemProvider.paramHolder.productRelation = [];

            let coreKeysIds = Object.keys(form.product_relation);
            coreKeysIds.forEach((coreKeysId) => {
                itemProvider.paramHolder.productRelation.push({
                    "core_keys_id" : coreKeysId,
                    "value" : form.product_relation[coreKeysId]
                })
            });

            loadDataList();
            // validateCustom(coreKeysId);
        }
        function loadCustomField(coreKeysId){
            customizeUiStoreList.data.filter((customizeDetail) => customizeDetail.id === coreKeysId)[0].provider.loadCustomFieldList('1',coreKeysId)


        }

        return {
            orderingFilterClicked,
            orderingByProductsClicked,
            sortingArr,
            productsArr,
            selectCustomDropdown,
            loadCustomField,
            customFieldStore,
            customizeUiStoreList,
            ps_loading_dialog,
            ps_error_dialog,
            map_with_makers_modal,
            activeSortingId,
            subCategoryStore,
            itemProvider,
            itemLocationStore,
            itemLocationTownshipStore,
            dealOptionProvider,
            categoryStore,
            userProvider,

            loadItemList,
            loadCategory,
            loadSubCategory,
            // loadItemType,

            nameFilterClicked,
            usernameFilterClicked,
            categoryFilterClicked,
            subCategoryFilterClicked,
            itemtypeFilterClicked,
            conditionFilterClicked,
            itemPriceTypeFilterClicked,
            dealOptionFilterClicked,
            sortingFilterClicked,
            pricerangeItemFilterClicked,
            clearAllFilter,
            mapFilterClicked,
            locationFilterClicked,
            notDataCode,
            filterKeywordUpate,
            locationKeyword,
            checkPrice,
            checklocation,
            radius,
            loadLocation,
            itemlocFilterClicked,
            subLocFilterClicked,
            isDiscountFilterClicked,
            loadSubLocation,
            appInfoStore,
            currentsorting,
            currentstatus,
            filtering,
            soldOutItem,
            soldItemId,
            soldItemName,
            soldItemFilterClicked,
            showFilter,
            toggleShowFilter,
            usersortingFilterClicked,
            usersorting,
            enter,
            leave,
            isDiscount,
            PsConst,
            activeSortingName,
            subCatKeyword,
            filterSubCatUpdate,
            form,
            updateLocation,
            activeSortingArrName,
            activeSortingArrId,
            activeProductsArrName,
            activeProductsArrId,
            initial,
        }
    },
    computed: {
        breadcrumb() {
            if(this.itemProvider.paramHolder.catName && this.itemProvider.paramHolder.subCatName){
                return [
                    {
                        label: trans('item_detail__home'),
                        url: route('dashboard')
                    },
                    {
                        label: trans('category_list__title'),
                        url: route('fe_category.index'),
                    },
                    {
                        label: this.itemProvider.paramHolder.catName,
                        url: route('fe_sub_category', {
                            cat_id: this.query.cat_id ,
                            cat_name: this.query.cat_name
                        }),
                    },
                    {
                        label: this.itemProvider.paramHolder.subCatName,
                        color: "text-fePrimary-500"
                    }
                ]
            }else if(this.itemProvider.paramHolder.catName){
                return [
                    {
                        label: trans('item_detail__home'),
                        url: route('dashboard')
                    },
                    {
                        label: trans('category_list__title'),
                        url: route('fe_category.index'),
                    },
                    {
                        label: this.itemProvider.paramHolder.catName,
                        color: "text-fePrimary-500"
                    }
                ]
            }else{
                return [
                    {
                        label: trans('item_detail__home'),
                        url: route('dashboard')
                    },
                    {
                        label: trans('fe__search_result'),
                        color: "text-fePrimary-500"
                    }
                ]
            }
        }
    },
}
</script>
<style scoped>
    [v-cloak]{
        display: none;
    }
</style>
