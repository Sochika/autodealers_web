<template>
    <Head :title="$t('dashboard__title')" />
    <div class="">
        <div class="mt-24 w-full">
            <div class="bg-feAchromatic-900 relative">
                <div class="w-full h-[530px] sm:h-[485px] object-cover relative flex justify-center items-center">
                    <img alt="Placeholder" class="w-full opacity-60 h-[530px] sm:h-[485px] object-cover"
                        v-lazy=" { src: $page.props.uploadUrl + '/'+ appInfoStore.appInfo.data?.frontendConfigSetting?.frontendBanner?.imgPath, error: $page.props.sysImageUrl+'/default_photo.png', lifecycle: lazyOptions.lifecycle }"
                    >
                    <!-- <img alt="Placeholder" class="w-full opacity-60 h-[530px] sm:h-[485px] object-cover"
                        v-lazy=" { src: $page.props.uploadUrl + '/'+appInfoStore.appInfo.data?.frontendConfigSetting?.frontendBanner?.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png', lifecycle: lazyOptions.lifecycle }"
                    > -->
                    <div v-if="is_banner_loading" class="opacity-60 w-full h-full flex flex-col justify-center items-center gap-10 absolute bg-gray-300">
                        <span class="loader"></span>
                        <span class="text-3xl text-gray-500 font-semibold">Loading</span>
                    </div>
                </div>
                <div class="absolute top-0 w-full h-full flex flex-col justify-center gap-5 sm:gap-8">
                    <div class="text-center">
                        <ps-label class="text-xl font-semibold mb-4 sm:text-4xl xl:text-5xl"
                            textColor="text-fePrimary-50">{{ $t("home__banner_header") }}</ps-label>
                        <ps-label class="text-base font-normal px-10" textColor="text-fePrimary-50">{{
                            $t("home__banner_desc") }}</ps-label>
                    </div>
                    <div class="bg-feAchromatic-50 dark:bg-feSecondary-800 rounded-lg px-4 py-4 sm:py-2 mx-auto">
                        <search-for-large-screem />
                    </div>
                    <div class="">
                        <ps-label class="text-center text-sm font-normal mb-4" textColor="text-fePrimary-50">{{
                            $t("home__popular_categories") }}</ps-label>
                        <div class="flex justify-center flex-wrap gap-x-2 sm:gap-x-4 gap-y-4"
                            v-if="popularCategoryStore.itemList?.data != null">
                            <div v-for="category in popularCategoryStore.itemList.data.slice(0, 6)" :key="category.catId"
                                class="">
                                <ps-route-link :to="{
                                    name: appInfoStore?.appInfo?.data?.mobileSetting.is_show_subcategory == '1' ? 'fe_sub_category' : 'fe_item_list',
                                    query: {
                                        cat_id: category.catId,
                                        cat_name: category.catName
                                    }
                                }" @click="updateCategoryTouchCount(category.catId)">
                                    <ps-button class="flex flex-row " rounded="rounded"
                                        colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-100"
                                        hover="" focus="">
                                        {{ category.catName }}
                                    </ps-button>
                                </ps-route-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ps-content-container class="mt-10">
            <template #content>
                <div class="flex justify-between items-center mb-6">
                    <ps-label-header-5 class="font-semibold">{{ $t("home__categories_label") }}</ps-label-header-5>
                    <ps-route-link :to="{ name: 'fe_category.index' }">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                            <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200"
                                name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200"
                                name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 xl:gap-6 gap-4 sm:gap-6 "
                    v-if="categoryStore.itemList?.data != null">
                    <div v-for="category in categoryStore.itemList.data.slice(0, 8)" :key="category.catId"
                        class="w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 sm:block hidden">
                        <ps-route-link :to="{
                            name: appInfoStore?.appInfo?.data?.mobileSetting.is_show_subcategory == '1' ? 'fe_sub_category' : 'fe_item_list',
                            query: {
                                cat_id: category.catId,
                                cat_name: category.catName
                            }
                        }" @click="updateCategoryTouchCount(category.catId)">
                            <category-horizontal-item :category="category" />
                        </ps-route-link>
                    </div>
                    <div v-for="category in categoryStore.itemList.data.slice(0, 4)" :key="category.catId"
                        class="w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 block sm:hidden">
                        <ps-route-link :to="{
                            name: appInfoStore?.appInfo?.data?.mobileSetting.is_show_subcategory == '1' ? 'fe_sub_category' : 'fe_item_list',
                            query: {
                                cat_id: category.catId,
                                cat_name: category.catName
                            }
                        }" @click="updateCategoryTouchCount(category.catId)">
                            <category-horizontal-item :category="category" />
                        </ps-route-link>
                    </div>
                </div>
                <div v-else class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 xl:gap-6 gap-4 sm:gap-6 ">
                    <div v-for="category in 10" :key="category"
                        class="w-full col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3 sm:block hidden">
                        <category-horizontal-skeletor-item />
                    </div>
                </div>
            </template>
        </ps-content-container>

        <div class="bg-feSecondary-800 py-9 mt-10">
            <div class="w-full lg:w-large xl:w-feLarge mx-auto">
                <ps-label-header-3 class="text-center" textColor="text-feAchromatic-50">{{
                    $t("home__how_it_works") }}</ps-label-header-3>
                <div
                    class="flex justify-between flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-4 sm:gap-x-2 sm:gap-y-6 md:gap-2 lg:gap-4 xl:gap-20 mt-4 sm:mt-10">
                    <div class="w-64 sm:w-80 md:w-60 lg:w-full mx-auto">
                        <div class="h-40 sm:w-64 md:w-60 sm:mx-auto relative overflow-hidden">
                            <img v-lazy="{ src: $page.props.sysImageUrl + '/hand_phone.png' }" alt=""
                                class="w-full h-full object-cover absolute bottom-0">
                            <div class="rounded-full bg-feAchromatic-50 w-48 h-48 mx-auto mt-8"></div>
                        </div>
                        <div class="flex flex-col items-center">
                            <ps-label-header-6 textColor="text-feAchromatic-50" class="my-2">{{ $t("home__search_or_list")
                            }}</ps-label-header-6>
                            <ps-label class="text-center" textColor="text-feAchromatic-500">{{
                                $t("home__search_or_list__desc") }}</ps-label>
                        </div>
                    </div>
                    <div class="w-64 sm:w-80 md:w-60 lg:w-full mx-auto">
                        <div class="h-40 sm:w-64 md:w-60 sm:mx-auto relative overflow-hidden">
                            <img v-lazy="{ src: $page.props.sysImageUrl + '/connect.png' }" alt=""
                                class="w-full h-full object-contain absolute bottom-0">
                            <div class="rounded-full bg-feAchromatic-50 w-48 h-48 mx-auto mt-8"></div>
                        </div>
                        <div class="flex flex-col items-center">
                            <ps-label-header-6 textColor="text-feAchromatic-50" class="my-2">{{ $t("home__connect")
                            }}</ps-label-header-6>
                            <ps-label class="text-center" textColor="text-feAchromatic-500">{{ $t("home__connect__desc")
                            }}</ps-label>
                        </div>
                    </div>
                    <div class="w-64 sm:w-80 md:w-60 lg:w-full mx-auto">
                        <div class="h-40 sm:w-64 md:w-60 sm:mx-auto relative overflow-hidden">
                            <img v-lazy="{ src: $page.props.sysImageUrl + '/transation.png' }" alt=""
                                class="w-full h-full object-cover absolute bottom-0">
                            <div class="rounded-full bg-feAchromatic-50 w-48 h-48 mx-auto mt-8"></div>
                        </div>
                        <div class="flex flex-col items-center">
                            <ps-label-header-6 textColor="text-feAchromatic-50" class="my-2">{{
                                $t("home__fe_complete_transaction") }}</ps-label-header-6>
                            <ps-label class="text-center" textColor="text-feAchromatic-500">{{
                                $t("home__fe_complete_transaction__desc") }}</ps-label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="xl:w-feLarge lg:w-large md:w-full md:px-6 lg:px-0 mx-auto">
            <!-- Start feature items -->
            <div
                class="bg-feSecondary-50 dark:bg-feAchromatic-900 flex flex-col sm:flex-row justify-between gap-8 sm:gap-5 mt-10 px-4 py-6 sm:p-10">
                <div class="md:w-64 flex flex-col gap-4">
                    <div class="md:w-64 flex justify-between items-center">
                        <ps-label-header-5 class="font-semibold" textColor="">{{ $t("home__fe_featured_items")
                        }}</ps-label-header-5>
                        <ps-route-link :to="{ name: 'fe_item_list', query: paidParams['query'] }" class="block sm:hidden">
                            <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm"
                                rounded="rounded" hover="" focus=""
                                border="border border-feSecondary-200 dark:border-fePrimary-500"
                                colors="bg-fePrimary-500 text-feSecondary-50">
                                <ps-icon class=" block rtl:hidden" name="rightChervon" h="24" w="24" />
                                <ps-icon class=" hidden rtl:block" name="leftChervon" h="24" w="24" />
                            </ps-button>
                        </ps-route-link>
                    </div>
                    <div class="mt-4 sm:mt-0">
                        <ps-label class="text-base sm:text-lg font-normal" textColor="dark:text-feSecondary-300">{{
                            $t("home__fe_featured_items__desc") }}</ps-label>
                    </div>
                    <ps-route-link :to="{ name: 'fe_item_list', query: paidParams['query'] }" class="hidden sm:block">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-fePrimary-500">
                            <ps-label class="hidden sm:inline" textColor="text-feSecondary-50  dark:text-feSecondary-300">{{
                                $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <div class="w-full sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl">
                    <feature-item-horizontal-swiper 
                        :itemList="itempaidProvider.itemList?.data" notShowTitle
                        storeName="dashboard_paid" />
                </div>
            </div>
            <!-- End feature items -->
        </div>

        <div class="xl:w-feLarge lg:w-large md:w-full px-4 md:px-6 lg:px-0 mx-auto">
            <!-- Start recent items -->
            <div v-if="itemrecentProvider.itemList?.data != null || itemrecentProvider.loading.value">
                <div class="flex justify-between items-center mt-10">
                    <ps-label-header-5 class="font-semibold">{{ $t("home__fe_recently_added") }}</ps-label-header-5>
                    <ps-route-link :to="{ name: 'fe_item_list', query: recentParams['query'] }">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                            <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200"
                                name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200"
                                name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <item-horizontal-swiper 
                    class="mt-6 mb-26 sm:mb-0" 
                    :itemList="itemrecentProvider.itemList?.data"
                    :isLoading="itemrecentProvider.loading.value" 
                    storeName="dashboard_recent" />
            </div>
            <!-- End recent items -->

            <!-- Start popular items -->
            <div v-if="itempopularProvider.itemList?.data != null || itempopularProvider.loading.value">
                <div class="flex justify-between items-center mt-10">
                    <ps-label-header-5 class="font-semibold">{{ $t("dashboard__popular") }}</ps-label-header-5>
                    <ps-route-link :to="{ name: 'fe_item_list', query: popularParams['query'] }">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                            <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200"
                                name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200"
                                name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <item-horizontal-swiper 
                    class="mt-6 mb-26 sm:mb-0" 
                    :itemList="itempopularProvider.itemList?.data"
                    :isLoading="itempopularProvider.loading.value" 
                    storeName="dashboard_popular" />
            </div>
            <!-- End popular items -->

            <!-- Start discount items -->
            <div
                v-if="appInfoStore.appInfo.data?.mobileSetting?.is_show_discount == '1' && (discountListProvider.itemList?.data != null || discountListProvider.loading.value)">
                <div class="flex justify-between items-center mt-10">
                    <ps-label-header-5 class="font-semibold">{{ $t("dashboard__discount") }}</ps-label-header-5>
                    <ps-route-link :to="{ name: 'fe_item_list', query: discountParams['query'] }">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                            <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200"
                                name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200"
                                name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <item-horizontal-swiper 
                    class="mt-6 mb-26 sm:mb-0" 
                    :itemList="discountListProvider.itemList?.data"
                    :isLoading="discountListProvider.loading.value" 
                    storeName="dashboard_discount" />
            </div>
            <!-- End discount items -->

            <div class="mt-10"
                v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isPaidApp == '1' && packageStore.packageList?.data != null">
                <ps-label-header-5 class="font-semibold">{{
                    $t("dashboard__available_post_quota_packages") }}</ps-label-header-5>
                <div class="flex flex-col sm:flex-row sm:justify-center gap-6 sm:gap-4 mt-6 px-0 md:px-8 lg:px-0 xl:px-14">
                    <div class="">
                        <div class="w-full sm:w-60">
                            <ps-label textColor="font-normal text-lg text-feSecondary-800 dark:text-feSecondary-200">{{
                                $t("dashboard__quota_packages_description") }}</ps-label>
                        </div>
                        <ps-button class="flex flex-row mt-4" shadow="shadow-sm" rounded="rounded" hover="" focus=""
                            border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-fePrimary-500 text-feSecondary-50" @click="buyAdClick()">
                            {{ $t("dashboard__buy_package") }}
                        </ps-button>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-2 md:gap-6 w-full">
                        <div class="block sm:hidden lg:block"
                            v-for="packageList in packageStore?.packageList?.data.slice(0, 4)" :key="packageList.id">
                            <package-horizontal-package :packageList="packageList" />
                        </div>
                        <div class="hidden sm:block lg:hidden"
                            v-for="packageList in packageStore?.packageList?.data.slice(0, 3)" :key="packageList.id">
                            <package-horizontal-package :packageList="packageList" />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="topRatedSellerStore.userList?.data != null">
                <div class="flex justify-between items-center mt-10">
                    <ps-label-header-5 class="font-semibold">{{ $t("core_fe__top_rated_seller") }}</ps-label-header-5>
                    <ps-route-link :to="{ name: 'fe_top_rated_seller_list' }">
                        <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                            hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                            colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                            <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                            <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200"
                                name="rightChervon" h="24" w="24" />
                            <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200"
                                name="leftChervon" h="24" w="24" />
                        </ps-button>
                    </ps-route-link>
                </div>
                <div class="mt-6 mb-26 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div v-for="user in topRatedSellerStore.userList?.data.slice(0, 3)" :key="user.id"
                        class="hidden md:block">
                        <user-list-horizontal :user="user" storeName="top_rated_seller" />
                    </div>
                    <div v-for="user in topRatedSellerStore.userList?.data.slice(0, 2)" :key="user.id"
                        class="block md:hidden">
                        <user-list-horizontal :user="user" storeName="top_rated_seller" />
                    </div>
                </div>
            </div>

            <!-- Start blogs -->
            <div class="flex justify-between items-center mt-10 mb-6">
                <ps-label-header-5 class="font-semibold">{{ $t("home__fe_blogs") }}</ps-label-header-5>
                <ps-route-link :to="{ name: 'fe_blog' }">
                    <ps-button class="flex flex-row" padding="p-2 sm:px-4 sm:py-2" shadow="shadow-sm" rounded="rounded"
                        hover="" focus="" border="border border-feSecondary-200 dark:border-feSecondary-800"
                        colors="bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200">
                        <ps-label class="hidden sm:inline">{{ $t("list_fe__view_all_label") }}</ps-label>
                        <ps-icon class="sm:ms-2 block rtl:hidden" textColor="dark:text-feSecondary-200" name="rightChervon"
                            h="24" w="24" />
                        <ps-icon class="sm:ms-2 hidden rtl:block" textColor="dark:text-feSecondary-200" name="leftChervon"
                            h="24" w="24" />
                    </ps-button>
                </ps-route-link>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                <div class="hidden lg:block" v-for="blog in blogStore.blogList?.data?.slice(0, 3)" :key="blog.id">
                    <ps-route-link :to="{ name: 'fe_blog_detail', params: { blogId: blog.id, blogName: blog.name } }">
                        <blog-horizontal-item :blog="blog" />
                    </ps-route-link>
                </div>
                <div class="block lg:hidden" v-for="blog in blogStore.blogList?.data?.slice(0, 2)" :key="blog.id">
                    <ps-route-link :to="{ name: 'fe_blog_detail', params: { blogId: blog.id, blogName: blog.name } }">
                        <blog-horizontal-item :dateFormat="$page.props.dateFormat" :blog="blog" />
                    </ps-route-link>
                </div>
            </div>
            <!-- End blogs -->

        </div>


        <div
            class="bg-feAchromatic-50 dark:bg-feAchromatic-900 w-full lg:w-large xl:w-feLarge mx-auto flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 sm:px-4 md:px-6 lg:gap-16">
            <div class="sm:w-[450px] mt-7 px-4 sm:px-0">
                <ps-label-header-5 class="font-semibold">{{ $t("home__fe_footer__header") }}</ps-label-header-5>
                <ps-label class="font-normal text-base mt-2" textColor="">{{ $t("home__fe_footer__desc") }}</ps-label>
            </div>
            <div class="h-56 w-80 relative">
                <div class="absolute bottom-0" v-if="appInfoStore.appInfo.data?.frontendConfigSetting?.appBrandingImage?.imgPath != ''">
                    <img v-lazy="{ src: $page.props.uploadUrl + '/'+appInfoStore.appInfo.data?.frontendConfigSetting?.appBrandingImage?.imgPath }" alt="" class="w-80 h-48 object-contain object-bottom">
                </div>
            </div>

        </div>

        <limit-item-modal v-if="showLimitModel" ref="limit_item_modal" />
        <ps-confirm-dialog ref='ps_confirm_dialog' />
        <ps-loading-dialog ref="ps_loading_dialog" :isClickOut='false' />
        <ps-account-dialog v-if="showAccountModel" ref="ps_account_dialog" :loginUserId="loginUserId"
            :usernameError="usernameError" :passwordError="passwordError" />

    </div>
</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
// Libs
import { ref, reactive, defineAsyncComponent, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
// import 'vue3-carousel/dist/carousel.css'

import "vue-skeletor/dist/vue-skeletor.css";
import { router } from '@inertiajs/vue3';

// Components
import PsContentContainer from '@template1/vendor/components/layouts/container/PsContentContainer.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsLabelHeader3 from '@template1/vendor/components/core/label/PsLabelHeader3.vue';
import PsLabelHeader5 from '@template1/vendor/components/core/label/PsLabelHeader5.vue';
import PsLabelHeader6 from '@template1/vendor/components/core/label/PsLabelHeader6.vue';
import CategoryHorizontalItem from "@template1/vendor/components/modules/category/CategoryHorizontalItem.vue";
import CategoryHorizontalSkeletorItem from "@template1/vendor/components/modules/category/CategoryHorizontalSkeletorItem.vue";
import BlogHorizontalItem from "@template1/vendor/components/modules/blog/BlogHorizontalItem.vue";
import ItemHorizontalSkeletorItem from "@template1/vendor/components/modules/item/ItemHorizontalSkeletorItem.vue";
import ItemHorizontalSwiper from "@template1/vendor/components/modules/item/ItemHorizontalSwiper.vue";
import FeatureItemHorizontalSwiper from "@template1/vendor/components/modules/item/FeatureItemHorizontalSwiper.vue";
import UserSearchListHorizontal from "@template1/vendor/components/modules/user/UserSearchListHorizontal.vue";
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import PsConfirmDialog from '@template1/vendor/components/core/dialog/PsConfirmDialog.vue';
const PsAccountDialog = defineAsyncComponent(() => import('@template1/vendor/components/core/dialogs/PsAccountDialog.vue'));
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import SearchForLargeScreem from "@template1/vendor/views/search/SearchForLargeScreen.vue";
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';
import PsLink from '@template1/vendor/components/core/link/PsLink.vue'
import PackageHorizontalPackage from '@template1/vendor/components/modules/packages/PackageHorizontalPackage.vue';
const LimitItemModal = defineAsyncComponent(() => import('@template1/vendor/components/modules/item/LimitItemModal.vue'));
import UserListHorizontal from '@template1/vendor/components/modules/user/UserListHorizontal.vue';
const ItemHorizontalItem = defineAsyncComponent(() => import('@template1/vendor/components/modules/item/ItemHorizontalItem.vue'))

// Providers
import { useProductStore } from "@templateCore/store/modules/item/ProductStore";
import { useCategoryStoreState } from "@templateCore/store/modules/category/CategoryStore";
import { useUserListStoreState } from "@templateCore/store/modules/user/UserListStore";
import { useItemLocationStoreState } from '@templateCore/store/modules/itemlocation/ItemLocationStore';
import { useBlogStoreState } from "@templateCore/store/modules/blog/BlogStore";
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';
import { useTouchCountStoreState } from '@templateCore/store/modules/category/TouchCountStore';
import { usePackageStoreState } from '@templateCore/store/modules/package/PackageStore';
// Holders
import LocationParameterHolder from '@templateCore/object/holder/LocationParameterHolder';
import FollowItemParameterHolder from '@templateCore/object/holder/FollowItemParameterHolder';
import ProductParameterHolder from '@templateCore/object/holder/ProductParameterHolder';
import UserListParameterHolder from '@templateCore/object/holder/UserListParameterHolder';
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import TouchCountParameterHolder from '@templateCore/object/holder/TouchCountParameterHolder';
import UserExistParameterHolder from '@templateCore/object/holder/UserExistParameterHolder';
import UserCreateParameterHolder from '@templateCore/object/holder/UserCreateParameterHolder';

import PsConst from '@templateCore/object/constant/ps_constants';
import PsUtils from '@templateCore/utils/PsUtils';
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';

import { trans } from 'laravel-vue-i18n';

import { useAuthStore } from '../../../../../../../../resources/js/store/AuthStore'

export default {
    name: "DashboardView",
    components: {
        PsContentContainer,
        ItemHorizontalItem,
        CategoryHorizontalItem,
        CategoryHorizontalSkeletorItem,
        PsRouteLink,
        PsLink,
        SearchForLargeScreem,
        PsLabelHeader3,
        PsLabelHeader5,
        PsLabelHeader6,
        PsButton,
        PsLabel,
        PsIcon,
        BlogHorizontalItem,
        ItemHorizontalSkeletorItem,
        UserSearchListHorizontal,
        PsLoadingDialog,
        PsConfirmDialog,
        PsAdSense,
        ItemHorizontalSwiper,
        FeatureItemHorizontalSwiper,
        PsAccountDialog,
        PackageHorizontalPackage,
        LimitItemModal,
        Head,
        UserListHorizontal
    },
    props: {
        errors: Object,
        mobileSetting: Object,
    },
    layout: PsFrontendLayout,

    setup(props) {

        // Inject Provider
        const blogStore = useBlogStoreState('dashboard');
        const locationKeyword = ref('');
        const psValueStore = PsValueStore();
        const ps_loading_dialog = ref();
        const ps_confirm_dialog = ref();
        const ps_account_dialog = ref();
        const limit_item_modal = ref();
        const showLimitModel = ref(false);
        const showAccountModel = ref(false);

        const authStore = useAuthStore();
        const userParamHolder = new UserExistParameterHolder();
        const userCreateParamHolder = new UserCreateParameterHolder();
        let usernameError = ref();
        let passwordError = ref();

        const locationName = ref(psValueStore.locationName);
        const locationId = ref(psValueStore.locationId);
        const appInfoStore = usePsAppInfoStoreState();

        const itemLocationStore = useItemLocationStoreState('dashboard');
        const userProvider = useUserListStoreState();
        const topRatedSellerStore = useUserListStoreState('top_rated_seller');

        // Inject Item Provider
        const itempopularProvider = useProductStore('dashboard_popular');
        const itemrecentProvider = useProductStore('dashboard_recent');
        const categoryStore = useCategoryStoreState('dashboard');
        const popularCategoryStore = useCategoryStoreState('');
        const itempaidProvider = useProductStore('dashboard_paid');
        const discountListProvider = useProductStore('dashboard_discount');
        const userListHolder = new UserListParameterHolder();
        const touchCountStore = useTouchCountStoreState();
        const packageStore = usePackageStoreState('dashboard_packages');

        itempopularProvider.limit = props.mobileSetting?.popular_item_loading_limit ?? 12;
        itemrecentProvider.limit = props.mobileSetting?.recent_item_loading_limit ?? 12;
        categoryStore.limit = props.mobileSetting?.category_loading_limit ?? 6;
        popularCategoryStore.limit = props.mobileSetting?.category_loading_limit ?? 6;
        itempaidProvider.limit = props.mobileSetting?.featured_item_loading_limit ?? 12;
        discountListProvider.limit = props.mobileSetting?.discount_item_loading_limit ?? 12;

        const loginUserId = psValueStore.getLoginUserId();
        const touchCountHolder = new TouchCountParameterHolder();
        // alert(loginUserId);
        const appInfoParameterHolder = new AppInfoParameterHolder();

        const paramHolder = new LocationParameterHolder().getDefaultParameterHolder();
        const holder = new FollowItemParameterHolder();
        const paidHolder = new ProductParameterHolder().getPaidItemParameterHolder();
        const discountHolder = new ProductParameterHolder().getDiscountParameterHolder();
        const latitude = psValueStore.locationLat == null || psValueStore.locationLat == '' ? '' : psValueStore.locationLat;
        const longitude = psValueStore.locationLng == null || psValueStore.locationLng == '' ? '' : psValueStore.locationLng;
        itemrecentProvider.paramHolder.lat = latitude.toString();
        itemrecentProvider.paramHolder.lng = longitude.toString();
        itemrecentProvider.paramHolder.mile = '8';
        itemrecentProvider.paramHolder.itemLocationId = locationId.value;
        itemrecentProvider.paramHolder.itemLocationTownship = psValueStore.subLocationId;
        itemrecentProvider.paramHolder.itemLocationName = psValueStore.locationName;
        itemrecentProvider.paramHolder.itemLocationTownshipName = psValueStore.subLocationName;

        holder.itemLocationId = locationId.value;
        holder.itemLocationTownship = psValueStore.subLocationId;

        itempopularProvider.paramHolder = new ProductParameterHolder().getPopularParameterHolder();
        itemrecentProvider.paramHolder = new ProductParameterHolder().getLatestParameterHolder();
        itempaidProvider.paramHolder = new ProductParameterHolder().getPaidItemParameterHolder();
        discountListProvider.paramHolder = new ProductParameterHolder().getDiscountParameterHolder();

        let recentParams = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
        let popularParams = itempopularProvider.paramHolder.getUrlParamsAndQuery();
        let paidParams = paidHolder.getUrlParamsAndQuery();
        let discountParams = discountHolder.getUrlParamsAndQuery();


        //load Blog List
        blogStore.paramHolder.locationId = locationId.value;

        const is_banner_loading = ref(true);
        const lazyOptions = reactive({
            lifecycle: {
                loading: () => {
                    is_banner_loading.value = true;
                },
                error: () => {
                    is_banner_loading.value = false;
                },
                loaded: () => {
                    is_banner_loading.value = false;
                }
            }
        });

        async function buyAdClick(){

            if(loginUserId != '' && loginUserId != PsConst.NO_LOGIN_USER){
                showLimitModel.value = true;
                await PsUtils.waitingComponent(limit_item_modal);
                limit_item_modal.value.openModal();
            } else {
                ps_confirm_dialog.value.openModal(
                    trans('Login'),
                    trans('Please login to buy package'),
                    trans('Ok'),
                    trans('cancel'),
                    () => {
                        router.get(route('login'));
                    },
                    () => {
                        PsUtils.log("Cancel");
                    }
                );
            }
        }

        async function checkUserAccount(username, hasPassword) {
            ps_account_dialog.value.openModal(
                trans('dashboard_modal_user_info'),
                trans('item_detail__confirm_to_mark_as_sold'),
                trans('core__fe_update_user'),
                trans('item_detail__cancel'),
                username,
                hasPassword,

                async () => {
                    userCreateParamHolder.username = ps_account_dialog.value.form.username
                    userCreateParamHolder.loginUserId = loginUserId
                    userCreateParamHolder.loginMethod = "checkFromDashboard"

                    if (hasPassword == 'false') {
                        userCreateParamHolder.password = ps_account_dialog.value.form.password
                    }

                    usernameError.value = '';
                    passwordError.value = '';
                    const UserLogindata = await authStore.createUserwithUsername(userCreateParamHolder);
                    if (UserLogindata.data.status == 'error') {
                        usernameError.value = authStore.isEmpty(UserLogindata.data.message.username) ? '' : UserLogindata.data.message.username[0]
                        passwordError.value = authStore.isEmpty(UserLogindata.data.message.password) ? '' : UserLogindata.data.message.password[0]
                    }
                    if (UserLogindata.data.status == 'success') {
                        ps_account_dialog.value.closeModal();
                    }
                },
                () => {
                    PsUtils.log("Cancel");
                }
            );
        }

        onMounted(async () => {

            appInfoParameterHolder.userId = loginUserId;
            appInfoStore.loadAppInfo(appInfoParameterHolder);
            itemrecentProvider.resetProductList(loginUserId, itemrecentProvider.paramHolder);
            packageStore.packageListWithPurchasedCount('1');
            itempopularProvider.resetProductList(loginUserId, itempopularProvider.paramHolder);
            discountListProvider.resetProductList(loginUserId, discountListProvider.paramHolder);
            itempaidProvider.resetProductList(loginUserId, itempaidProvider.paramHolder);
            blogStore.resetBlogList('1', blogStore.paramHolder);
            userProvider.loadUserSearchList(loginUserId, userListHolder);

            await topRatedSellerStore.resetTopRatedSellerList(loginUserId);

            categoryStore.paramHolder.keyword = '';
            categoryStore.paramHolder.orderType = 'desc';
            categoryStore.paramHolder.orderBy = 'name';
            await categoryStore.resetCategoryList(loginUserId, categoryStore.paramHolder);

            popularCategoryStore.paramHolder.keyword = '';
            popularCategoryStore.paramHolder.orderType = 'desc';
            popularCategoryStore.paramHolder.orderBy = 'category_touch_count';
            await popularCategoryStore.resetCategoryList(loginUserId, popularCategoryStore.paramHolder);

            if (loginUserId !== 'nologinuser') {
                userParamHolder.id = loginUserId
                userParamHolder.loginMethod = "checkFromDashboard"
                const UserLogindata = await authStore.existUser(userParamHolder);
                if (UserLogindata.data.message.user.username == '' || UserLogindata.data.message.user.hasPassword == 'false') {
                    showAccountModel.value = true;
                    await PsUtils.waitingComponent(ps_account_dialog);
                    await checkUserAccount(UserLogindata.data.message.user.username, UserLogindata.data.message.user.hasPassword);
                }

            }

        });
        onBeforeUnmount(() => {
            PsUtils.log('onBeforeUnmount')
        });
        onUnmounted(() => {
            PsUtils.log('unmounting success')
        });

        function loadLocationList() {
            PsUtils.log("Loading ...");

            itemLocationStore.loadItemLocationList(loginUserId, paramHolder);
        }

        async function locationFilterClicked(value) {

            PsUtils.log(value);
            locationId.value = value.id;
            locationName.value = value.name;


            itempopularProvider.paramHolder.itemLocationTownship = '';
            itempopularProvider.paramHolder.itemLocationTownshipName = '';
            itemrecentProvider.paramHolder.itemLocationTownship = '';
            itemrecentProvider.paramHolder.itemLocationTownshipName = '';

            blogStore.paramHolder.locationId = locationId.value;
            psValueStore.replaceLocation(value.id, value.name, value.lat, value.lng);

            itempopularProvider.paramHolder.itemLocationId = value.id;
            itempopularProvider.paramHolder.itemLocationName = value.name;
            itemrecentProvider.paramHolder.itemLocationId = value.id;
            itemrecentProvider.paramHolder.itemLocationName = value.name;

            itempopularProvider.paramHolder.lat = '';
            itempopularProvider.paramHolder.lng = '';
            itemrecentProvider.paramHolder.lat = '';
            itemrecentProvider.paramHolder.lng = '';


            recentParams = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
            popularParams = itempopularProvider.paramHolder.getUrlParamsAndQuery();

            ps_loading_dialog.value.openModal();
            await itempaidProvider.resetProductList(loginUserId, paidHolder);
            await itempopularProvider.resetProductList(loginUserId, itempopularProvider.paramHolder);
            await itemrecentProvider.resetProductList(loginUserId, itemrecentProvider.paramHolder);
            await blogStore.resetBlogList('1', blogStore.paramHolder);
            ps_loading_dialog.value.closeModal();

        }

        async function subLocationFilterClicked(value) {
            PsUtils.log(value);
            locationId.value = value.id;
            locationName.value = value.name;

            itempopularProvider.paramHolder.itemLocationTownship = value.subId;
            itempopularProvider.paramHolder.itemLocationTownshipName = value.subName;
            itemrecentProvider.paramHolder.itemLocationTownship = value.subId;
            itemrecentProvider.paramHolder.itemLocationTownshipName = value.subName;

            itempopularProvider.paramHolder.itemLocationId = value.id;
            itempopularProvider.paramHolder.itemLocationName = value.name;
            itemrecentProvider.paramHolder.itemLocationId = value.id;
            itemrecentProvider.paramHolder.itemLocationName = value.name;

            recentParams = itemrecentProvider.paramHolder.getUrlParamsAndQuery();
            popularParams = itempopularProvider.paramHolder.getUrlParamsAndQuery();

            ps_loading_dialog.value.openModal();
            await itempaidProvider.resetProductList(loginUserId, paidHolder);
            await itempopularProvider.resetProductList(loginUserId, itempopularProvider.paramHolder);
            await itemrecentProvider.resetProductList(loginUserId, itemrecentProvider.paramHolder);
            ps_loading_dialog.value.closeModal();

        }


        function filterKeywordUpate(value) {
            itemLocationStore.filterKeywordUpate(value, loginUserId, paramHolder);
        }
        async function refleshUserData() {

            ps_loading_dialog.value.openModal();
            await userProvider.refleshUserSearchList(loginUserId, userListHolder);


            ps_loading_dialog.value.closeModal();
        }

        async function updateCategoryTouchCount(catId) {
            touchCountHolder.typeName = 'category';
            touchCountHolder.typeId = catId;
            touchCountHolder.userId = loginUserId;
            await touchCountStore.postTouchCount(loginUserId, touchCountHolder);
        }


        return {
            lazyOptions,
            is_banner_loading,
            appInfoStore,
            categoryStore,
            packageStore,
            popularCategoryStore,
            topRatedSellerStore,
            discountListProvider,
            discountParams,
            refleshUserData,
            itempopularProvider,
            itemrecentProvider,
            userProvider,
            PsValueStore,
            blogStore,
            itemLocationStore,
            locationName,
            locationId,
            loadLocationList,
            locationFilterClicked,
            recentParams,
            popularParams,
            filterKeywordUpate,
            locationKeyword,
            ps_loading_dialog,
            ps_confirm_dialog,
            ps_account_dialog,
            subLocationFilterClicked,
            itempaidProvider,
            paidParams,
            PsConst,
            updateCategoryTouchCount,
            checkUserAccount,
            loginUserId,
            usernameError,
            passwordError,
            buyAdClick,
            limit_item_modal,
            showLimitModel,
            showAccountModel
        };
    },
};
</script>

<style scoped>
.loader{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 15px solid #4f5a84;
    border-bottom-color: transparent;
    animation: animate 1.2s linear infinite;
}

@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

</style>
