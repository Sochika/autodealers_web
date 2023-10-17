<template>
    <Head :title="$t('ps_nav_bar__profile')"/>
    <ps-content-container>
        <template #content>
            <div class="mt-32">
                <!-- breadcrumb start-->
                <div class="mb-7">
                    <ps-breadcrumb-2 :items="breadcrumb" class="" />
                </div>
                <!-- breadcrumb end-->

                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-5 md:gap-6">
                    <!-- profile card start -->
                    <div class="">
                        <div class="flex flex-col p-4 gap-2 bg-feSecondary-50 dark_bg-feSecondary-800 rounded">
                            <div class="w-full">
                                <div class="w-32 h-32 rounded-full mx-auto relative">
                                    <img alt="Placeholder" class="rounded-full w-full h-full object-cover"
                                        v-lazy=" { src: $page.props.thumb1xUrl + '/' + userStore.user.data?.userCoverPhoto, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_profile.png' }" />
                                    <div v-if="userStore.user.data?.isVerifybluemark == '1'" class="w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0">
                                        <ps-icon name="bluemark" textColor="text-feSecondary-50" w="24" h="24" />
                                    </div>
                                </div>
                            </div>
                            <ps-label textColor="text-center text-xl font-semibold text-feSecondary-800">{{  userStore.user.data ? userStore.user.data.userName:'' }}</ps-label>
                            <div class="cursor-pointer">
                                <div v-if="userStore.user.data?.isVerifybluemark == '0' || userStore.user.data?.isVerifybluemark == '1'" class="bg-feInfo-50 border border-feInfo-500 px-4 py-2 flex gap-2 justify-center rounded" @click="openApplyUserBluemark(loginUserId)">
                                    <ps-icon class="text-feInfo-500 dark_text-feInfo-500" name="checkCircle" w="24" h="24" />
                                    <ps-label textColor="text-feInfo-500">{{ $t("bluemark__verify") }}</ps-label>
                                </div>
                                <div v-if="userStore.user.data?.isVerifybluemark == '2'" class="bg-feWarning-50 border border-feWarning-500 px-4 py-2 flex gap-2 justify-center rounded">
                                    <ps-icon class="text-feInfo-500 dark_text-feInfo-500" name="checkCircle" w="24" h="24" />
                                    <ps-label textColor="text-feWarning-500">{{ $t("bluemark__pending") }}</ps-label>
                                </div>
                                <div v-if="userStore.user.data?.isVerifybluemark == '3'" class="bg-feError-50 border border-feError-500 px-4 py-2 flex gap-2 justify-center rounded" @click="openApplyUserBluemark(loginUserId)">
                                    <ps-icon class="text-feInfo-500 dark_text-feInfo-500" name="checkCircle" w="24" h="24" />
                                    <ps-label textColor="text-feError-500">{{ $t("bluemark__rejected") }}</ps-label>
                                </div>
                            </div>
                            <ps-route-link :to="{ name: 'fe_review_list',query: { user_id: loginUserId } }">
                                <div class="flex flex-col items-center gap-2 cursor-pointer">
                                    <rating class="h-6" :rating="userStore.user.data ? userStore.user?.data?.overallRating:0" :maxStars="5" iconColor="text-feWarning-500"/>
                                    <ps-label textColor="text-sm text-feSecondary-600 dark_text-feSecondary-200">{{  userStore.user.data ? userStore.user.data.ratingCount:'' }} {{ $t('profile__reviews') }}</ps-label>
                                </div>
                            </ps-route-link>
                            <router-link class="cursor-pointer text-center" v-if="userStore.user?.data?.isShowPhone == '1'">
                                <a :href="'tel:' + userStore.user?.data?.userPhone ">
                                    <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200"> {{  userStore.user?.data ? userStore.user.data.userPhone :'' }} </ps-label>
                                </a>
                            </router-link>
                            <router-link class="cursor-pointer text-center" v-if="userStore.user?.data?.isShowEmail == '1'">
                                <a :href="'tel:' + userStore.user?.data?.userEmail">
                                    <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200"> {{  userStore.user?.data ? userStore.user.data.userEmail :'' }} </ps-label>
                                </a>
                            </router-link>
                            <div class="text-center">
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200"> {{  userStore.user.data ? userStore.user.data.userAboutMe:'' }} </ps-label>
                            </div>
                            <div class="text-center">
                                <ps-label class="text-xs text-feSecondary-500">{{ $t("profile__joined_on") }} - {{ JoinedDate }} </ps-label>
                            </div>
                            <div class="flex justify-between items-center">
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200">{{ $t("profile__available") }}</ps-label>
                                <ps-label v-if="userStore.user?.data?.postCount == PsConst.LIMITED" textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200 font-semibold">{{userStore.user.data ? userStore.user.data.remainingPost:'0'}}</ps-label>
                                <ps-label v-else textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200 font-semibold">{{ $t("profile__unlimited") }}</ps-label>
                            </div>
                            <div class="flex justify-between items-center">
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200">{{ $t("profile__posts") }}</ps-label>
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200 font-semibold">{{userStore.user.data ? userStore.user.data.activeItemCount:'0'}}</ps-label>
                            </div>
                            <div class="flex justify-between items-center">
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200">{{ $t("profile__followers") }}</ps-label>
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200 font-semibold">{{userStore.user.data ? userStore.user.data.followerCount:'0'}}</ps-label>
                            </div>
                            <div class="flex justify-between items-center">
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200">{{ $t("profile__followings") }}</ps-label>
                                <ps-label textColor="text-sm text-feSecondary-800 dark_text-feSecondary-200 font-semibold">{{userStore.user.data ? userStore.user.data.followingCount:'0'}}</ps-label>
                            </div>
                        </div>
                        <ps-route-link :to="{name: 'fe_profile_edit' }">
                            <ps-button class="w-full">
                                <ps-icon class="me-2" name="edit" />
                                {{ $t("profile__edit_profile") }}
                            </ps-button>
                        </ps-route-link>

                        <ps-button class="w-full mt-2" hover="" focus="" colors="bg-feSecondary-700 text-feSecondary-50" @click='openMoreUserSetting'>
                            <ps-icon class="me-2" name="setting" />
                            {{ $t("profile__user_setting") }}
                        </ps-button>
                    </div>
                    <!-- profile card end -->

                    <div v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isPaidApp == '1'" class="w-full sm:col-span-2 lg:col-span-2 xl:col-span-3">
                        <!-- Start Purchased Package -->
                        <div v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isPaidApp == '1'">
                            <div v-if="limitProvider.buyadList?.data != null" class="">
                                <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                    <ps-label-header-4 class="font-medium"> {{ $t("profile__purchased_package") }} </ps-label-header-4>
                                    <div class="flex justify-between gap-5">
                                        <ps-button class="flex flex-row " @click="buyAdClick()">
                                            {{ $t("profile__buy_new_package") }}
                                        </ps-button>
                                        <ps-route-link :to="{ name: 'fe_limit_ads'}">
                                            <ps-button class="flex flex-row " >
                                                {{ $t("list_fe__view_all_label") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                                <div class="w-full mt-6">
                                    <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5 md:gap-6">
                                        <!-- Purchased Package List -->
                                            <div class="w-full hidden xl:block"
                                                v-for="buyad in limitProvider.buyadList?.data.slice(0, 6)" :key="buyad.id">
                                                <limit-ad-horizontal-item  :buyad="buyad" padding="py-10 px-10 sm:px-3 lg:px-9 xl:px-4"/>
                                            </div>
                                            <div class="w-full hidden sm:block xl:hidden"
                                                v-for="buyad in limitProvider.buyadList?.data.slice(0, 4)" :key="buyad.id">
                                                <limit-ad-horizontal-item  :buyad="buyad" padding="py-10 px-10 sm:px-3 lg:px-9 xl:px-4"/>
                                            </div>
                                            <div class="w-full sm:hidden"
                                                v-for="buyad in limitProvider.buyadList?.data.slice(0, 2)" :key="buyad.id">
                                                <limit-ad-horizontal-item  :buyad="buyad" padding="py-10 px-10 sm:px-3 lg:px-9 xl:px-4"/>
                                            </div>
                                        <!-- END Purchased Package List -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Purchased Package -->
                    </div>

                    <div v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isPaidApp == '0'" class="w-full sm:col-span-2 lg:col-span-2 xl:col-span-3">
                        <!-- paid & promote ads -->
                        <div v-if="itempaidProvider.paidAdItemList?.data != null" class="">
                            <div class="flex justify-between items-center">
                                <ps-label-header-4> {{ $t("profile__promote_and_paid_ads") }} </ps-label-header-4>
                                <div v-if="itempaidProvider.paidAdItemList?.data != null" class="justify-end flex">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_paid_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">
                                    <!-- Paid & Promote Ads List -->
                                        <div
                                            class="hidden xl:block"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 3)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="hidden lg:block xl:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 2)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="hidden md:block lg:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 2)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="hidden sm:block md:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 2)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="sm:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 1)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                    <!-- END Paid & Promote Ads List -->
                                </div>
                            </div>
                        </div>
                        <div  v-else-if="itempaidProvider.paidAdItemList != null && itempaidProvider.loading.value ">
                            <div class="flex justify-between items-center">
                                <ps-label-header-4> {{ $t("profile__promote_and_paid_ads") }} </ps-label-header-4>
                                <div v-if="itempaidProvider.paidAdItemList?.data != null" class="justify-end flex">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_paid_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">
                                    <!-- Paid & Promote Ads List -->
                                        <div class="w-full" v-for="i in paidAppZeroItemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                    <!-- END Paid & Promote Ads List -->
                                </div>
                            </div>
                        </div>
                        <!-- end paid ads -->

                        <!-- active listing -->
                        <div v-if="itemactiveProvider.itemList?.data != null" class=" ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__active_listing") }} </ps-label-header-4>
                                <div v-if="itemactiveProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_active_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">
                                    <!-- Active Listing -->
                                    <div class="hidden xl:block"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 3)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="hidden lg:block xl:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 2)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 2)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 2)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="sm:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 1)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <!-- END Active Listing -->
                                </div>
                            </div>
                        </div>
                        <div v-if="itemactiveProvider.itemList.data == null && itemactiveProvider.loading.value ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__active_listing") }} </ps-label-header-4>
                                <div v-if="itemactiveProvider.itemList?.data != null" class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="mt-2" :to="{name: 'fe_active_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                    {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">
                                    <div class="w-full " v-for="i in itemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- end active listing -->

                        <!-- pending listing -->
                        <div v-if="itempendingProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4 class="mt-3 font-medium"> {{ $t("profile__pending_listing") }} </ps-label-header-4>
                                <div v-if="itempendingProvider.itemList?.data != null" class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_pending_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">

                                    <!-- Pending Listing -->
                                    <div class="hidden xl:block" v-for="item in itempendingProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="hidden lg:block xl:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <!-- END Pending Listing -->

                                </div>
                            </div>
                        </div>
                        <!-- end pending listing -->

                        <!-- rejected listing -->
                        <div v-if="itemrejectProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__rejected_listing") }} </ps-label-header-4>
                                <div v-if="itemrejectProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_reject_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">

                                    <!-- Rejected Listing -->
                                    <div class="hidden xl:block" v-for="item in itemrejectProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="hidden lg:block xl:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <!-- END Rejected Listing -->

                                </div>

                            </div>
                        </div>
                        <!-- end rejected listing -->

                        <!-- favourite item lists start -->
                        <div v-if="favouriteitemProvider.favouriteItemList?.data != null" class=" ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                 <ps-label-header-4> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
                                 <div v-if="favouriteitemProvider.favouriteItemList?.data != null" class="justify-end flex mt-2 mb-4">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_favourite_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                    {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">

                                    <!-- Favourite Items List -->
                                        <div
                                            class="hidden xl:block"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 3)"
                                            :key="favouriteItem.id">
                                            <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="hidden lg:block xl:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)"
                                            :key="favouriteItem.id">
                                            <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="hidden md:block lg:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)"
                                            :key="favouriteItem.id">
                                            <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="hidden sm:block md:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)"
                                            :key="favouriteItem.id">
                                            <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="sm:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 1)"
                                            :key="favouriteItem.id">
                                            <profile-item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                    <!-- END Favourite Items List -->

                                </div>

                            </div>
                        </div>
                        <div  v-else-if="favouriteitemProvider.favouriteItemList != null && favouriteitemProvider.loading.value ">
                            <div class="sm:mt-8 mt-6">
                                 <ps-label-header-4> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">

                                    <!-- Favourite Item list -->
                                        <div class="w-full" v-for="i in itemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                    <!-- END Favourite Item list -->

                                </div>
                            </div>
                        </div>
                        <!-- end favourite items list -->

                        <!-- follower item listing -->
                        <!-- <div v-if="followerItemProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__fe_follower_item_listing") }} </ps-label-header-4>
                                <div v-if="followerItemProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_follower_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">
                                    <div class="hidden xl:block" v-for="item in followerItemProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="hidden lg:block xl:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="sm:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- end follower item listing -->

                        <!-- soldout item listing -->
                        <div v-if="itemSoldoutProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__fe_soldout_listing") }} </ps-label-header-4>
                                <div v-if="itemSoldoutProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_soldout_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">
                                    <div class="hidden xl:block" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="hidden lg:block xl:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end soldout item listing -->

                        <!-- disabled listing -->
                        <div v-if="itemdisableProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__disabled_listing") }} </ps-label-header-4>
                                <div v-if="itemdisableProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_disable_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="paidAppZeroItemGrid">

                                    <!-- disabled Listing -->
                                    <div class="hidden xl:block" v-for="item in itemdisableProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="hidden lg:block xl:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <!-- END disabled Listing -->

                                </div>

                            </div>
                        </div>
                        <!-- end disabled listing -->

                    </div>

                </div>

                <div v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isPaidApp == '1'" class="sm:mb-10 mb-8 mt-14">
                        <!-- paid & promote ads -->
                        <div v-if="itempaidProvider.paidAdItemList?.data != null" class="">
                            <div class="flex justify-between items-center">
                                <ps-label-header-4> {{ $t("profile__promote_and_paid_ads") }} </ps-label-header-4>
                                <div v-if="itempaidProvider.paidAdItemList?.data != null" class="justify-end flex">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_paid_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">
                                    <!-- Paid & Promote Ads List -->
                                        <div
                                            class="hidden lg:block"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 4)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="hidden md:block lg:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 3)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="hidden sm:block md:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 2)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                        <div
                                            class="sm:hidden"
                                            v-for="paiditem in itempaidProvider.paidAdItemList.data.slice(0, 1)"
                                            :key="paiditem.id">
                                            <paid-ad-item-horizontal-item  :paiditem="paiditem" />
                                        </div>
                                    <!-- END Paid & Promote Ads List -->
                                </div>
                            </div>
                        </div>
                        <div  v-else-if="itempaidProvider.paidAdItemList != null && itempaidProvider.loading.value ">
                            <div class="flex justify-between items-center">
                                <ps-label-header-4> {{ $t("profile__promote_and_paid_ads") }} </ps-label-header-4>
                                <div v-if="itempaidProvider.paidAdItemList?.data != null" class="justify-end flex">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_paid_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">
                                    <!-- Paid & Promote Ads List -->
                                        <div class="w-full" v-for="i in itemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                    <!-- END Paid & Promote Ads List -->
                                </div>
                            </div>
                        </div>
                        <!-- end paid ads -->

                        <!-- active listing -->
                        <div v-if="itemactiveProvider.itemList?.data != null" class=" ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__active_listing") }} </ps-label-header-4>
                                <div v-if="itemactiveProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_active_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">
                                    <!-- Active Listing -->
                                    <div class="hidden lg:block"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 4)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 3)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 2)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <div class="sm:hidden"
                                        v-for="item in itemactiveProvider.itemList.data.slice(0, 1)"
                                        :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="active"/>
                                    </div>
                                    <!-- END Active Listing -->
                                </div>
                            </div>
                        </div>
                        <div v-if="itemactiveProvider.itemList.data == null && itemactiveProvider.loading.value ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__active_listing") }} </ps-label-header-4>
                                <div v-if="itemactiveProvider.itemList?.data != null" class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="mt-2" :to="{name: 'fe_active_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                    {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">
                                    <div class="w-full " v-for="i in itemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- end active listing -->

                        <!-- pending listing -->
                        <div v-if="itempendingProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4 class="mt-3 font-medium"> {{ $t("profile__pending_listing") }} </ps-label-header-4>
                                <div v-if="itempendingProvider.itemList?.data != null" class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_pending_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">

                                    <!-- Pending Listing -->
                                    <div class="hidden lg:block" v-for="item in itempendingProvider.itemList.data.slice(0, 4)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itempendingProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="pending"/>
                                    </div>
                                    <!-- END Pending Listing -->

                                </div>
                            </div>
                        </div>
                        <!-- end pending listing -->

                        <!-- rejected listing -->
                        <div v-if="itemrejectProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__rejected_listing") }} </ps-label-header-4>
                                <div v-if="itemrejectProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_reject_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">

                                    <!-- Rejected Listing -->
                                    <div class="hidden lg:block" v-for="item in itemrejectProvider.itemList.data.slice(0, 4)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemrejectProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="reject"/>
                                    </div>
                                    <!-- END Rejected Listing -->

                                </div>

                            </div>
                        </div>
                        <!-- end rejected listing -->

                        <!-- favourite item lists start -->
                        <div v-if="favouriteitemProvider.favouriteItemList?.data != null" class=" ">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                 <ps-label-header-4> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
                                 <div v-if="favouriteitemProvider.favouriteItemList?.data != null" class="justify-end flex mt-2 mb-4">
                                    <div class="flex-grow-0">
                                        <ps-route-link :to="{ name: 'fe_favourite_items'}">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                    {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">

                                    <!-- Favourite Items List -->
                                        <div
                                            class="hidden lg:block"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 4)"
                                            :key="favouriteItem.id">
                                            <item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="hidden md:block lg:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 3)"
                                            :key="favouriteItem.id">
                                            <item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="hidden sm:block md:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 2)"
                                            :key="favouriteItem.id">
                                            <item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                        <div
                                            class="sm:hidden"
                                            v-for="favouriteItem in favouriteitemProvider.favouriteItemList.data.slice(0, 1)"
                                            :key="favouriteItem.id">
                                            <item-horizontal-item :item="favouriteItem" storeName="favourite"/>
                                        </div>
                                    <!-- END Favourite Items List -->

                                </div>

                            </div>
                        </div>
                        <div  v-else-if="favouriteitemProvider.favouriteItemList != null && favouriteitemProvider.loading.value ">
                            <div class="">
                                 <ps-label-header-4> {{ $t("profile__favourite_posts") }} </ps-label-header-4>
                            </div>
                            <div class="w-full sm:mt-6 mt-4">
                                <div :class="itemSkeletorGrid">

                                    <!-- Favourite Item list -->
                                        <div class="w-full" v-for="i in itemSkeletorCount" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                    <!-- END Favourite Item list -->

                                </div>
                            </div>
                        </div>
                        <!-- end favourite items list -->

                        <!-- follower item listing -->
                        <!-- <div v-if="followerItemProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__fe_follower_item_listing") }} </ps-label-header-4>
                                <div v-if="followerItemProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_follower_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">
                                    <div class="hidden lg:block" v-for="item in followerItemProvider.itemList.data.slice(0, 4)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                    <div class="sm:hidden" v-for="item in followerItemProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" />
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- end follower item listing -->

                        <!-- soldout item listing -->
                        <div v-if="itemSoldoutProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__fe_soldout_listing") }} </ps-label-header-4>
                                <div v-if="itemSoldoutProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_soldout_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">
                                    <div class="hidden lg:block" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 4)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemSoldoutProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="sold"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end soldout item listing -->

                        <!-- disabled listing -->
                        <div v-if="itemdisableProvider.itemList?.data != null" class="">
                            <div class="flex justify-between items-center sm:mt-8 mt-6">
                                <ps-label-header-4> {{ $t("profile__disabled_listing") }} </ps-label-header-4>
                                <div v-if="itemdisableProvider.itemList?.data != null"  class="justify-end flex mt-2">
                                    <div class="flex-grow-0">
                                        <ps-route-link class="" :to="{name: 'fe_disable_items' }">
                                            <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-2">
                                                {{ $t("fe__view_all") }}
                                            </ps-button>
                                        </ps-route-link>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full sm:mt-6 mt-4 flex flex-col">
                                <div :class="itemGrid">

                                    <!-- disabled Listing -->
                                    <div class="hidden lg:block" v-for="item in itemdisableProvider.itemList.data.slice(0, 4)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="hidden md:block lg:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 3)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="hidden sm:block md:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 2)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <div class="sm:hidden" v-for="item in itemdisableProvider.itemList.data.slice(0, 1)" :key="item.id">
                                        <profile-item-horizontal-item  :item="item" storeName="disable"/>
                                    </div>
                                    <!-- END disabled Listing -->

                                </div>

                            </div>
                        </div>
                        <!-- end disabled listing -->

                </div>
            </div>

            <user-setting-modal ref="user_setting_modal" />

            <user-blue-mark-modal ref="user_blue_mark_modal" />

            <ps-confirm-dialog ref='ps_confirm_dialog' />

            <ps-error-dialog ref='ps_error_dialog' />

            <ps-loading-dialog ref="psloading"  :isClickOut='false'/>

            <limit-item-modal ref="limit_item_modal" />

        </template>
    </ps-content-container>
</template>

<script lang="ts">
import { Head } from '@inertiajs/inertia-vue3';
import PsContentContainer from '@template1/vendor/components/layouts/container/PsContentContainer.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import PsCard from '@template1/vendor/components/core/card/PsCard.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsLabelHeader4 from '@template1/vendor/components/core/label/PsLabelHeader4.vue';
import Rating from '@template1/vendor/components/core/rating/RatingShow.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';
import firebaseApp from 'firebase/app';
import "firebase/auth"
import { Inertia } from "@inertiajs/inertia";
import PsBreadcrumb2 from '@template1/vendor/components/core/breadcrumbs/PsBreadcrumb2.vue';
import LimitItemModal from '@template1/vendor/components/modules/item/LimitItemModal.vue';

import ProfileItemHorizontalItem from "@template1/vendor/components/modules/item/ProfileItemHorizontalItem.vue";
import PaidAdItemHorizontalItem from "@template1/vendor/components/modules/item/PaidAdItemHorizontalItem.vue";
import LimitAdHorizontalItem from "@template1/vendor/components/modules/item/LimitAdHorizontalItem.vue";
import ItemHorizontalSkeletorItem from "@template1/vendor/components/modules/item/ItemHorizontalSkeletorItem.vue";
import ProductParameterHolder from "@templateCore/object/holder/ProductParameterHolder";
import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';
import ItemHorizontalItem from "@template1/vendor/components/modules/item/ItemHorizontalItem.vue";

import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';
import { useProductStore } from "@templateCore/store/modules/item/ProductStore";
import { useFollowerItemStoreState } from "@templateCore/store/modules/item/FollowerItemStore"; //follower item
import FollowItemParameterHolder from '@templateCore/object/holder/FollowItemParameterHolder';
import { usePaidAdItemStoreState } from "@templateCore/store/modules/item/PaidAdItemStore";
import { useLimitAdItemStoreState } from "@templateCore/store/modules/limit/LimitAdItemStore";
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import { useUserStore } from "@templateCore/store/modules/user/UserStore";
import { useFavouriteItemStoreState } from "@templateCore/store/modules/item/FavouriteItemStore";

// import router from "@template1/router";

import "vue-skeletor/dist/vue-skeletor.css";
import UserBlueMarkModal from '@template1/vendor/components/modules/user/UserBlueMarkModal.vue';
import { ref, defineAsyncComponent } from 'vue';
import PsConfirmDialog from '@template1/vendor/components/core/dialog/PsConfirmDialog.vue';
import PsErrorDialog from '@template1/vendor/components/core/dialog/PsErrorDialog.vue';
import UserDeleteItemParameterHolder from '@templateCore/object/holder/UserDeleteItemParameterHolder';
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import PsStatus from '@templateCore/api/common/PsStatus';
import { trans } from 'laravel-vue-i18n';import PsUtils from '@templateCore/utils/PsUtils';
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import PsConst from '@templateCore/object/constant/ps_constants';
import moment from 'moment';

const UserSettingModal = defineAsyncComponent(() => import('@template1/vendor/components/modules/user/UserSettingModal.vue'));

export default {
    name : "ProfileView",
    components : {
        PsContentContainer,
        PsCard,
        PsLabelCaption,
        PsLabelHeader4,
        PsButton,
        ProfileItemHorizontalItem,
        PaidAdItemHorizontalItem,
        ItemHorizontalSkeletorItem,
        LimitAdHorizontalItem,
        Rating,
        PsIcon,
        PsLabel,
        PsRouteLink,
        UserSettingModal,
        PsConfirmDialog,
        PsLoadingDialog,
        UserBlueMarkModal,
        PsAdSense,
        ItemHorizontalItem,
        PsErrorDialog,
        PsBreadcrumb2,
        LimitItemModal,
        Head
    },
    layout: PsFrontendLayout,
    props: ['dateFormat'],
    setup(props) {

        const psValueStore = PsValueStore();

        // Common

        const itemCount = ref(4);
        const itemSkeletorCount = ref(4);
        const itemGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4";
        const itemSpanCol = "w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3";
        const itemSkeletorGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 gap-4";

        const paidAppZeroItemCount = ref(3);
        const paidAppZeroItemSkeletorCount = ref(3);
        const paidAppZeroItemGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-4";
        const paidAppZeroItemSpanCol = "w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3";
        const paidAppZeroItemSkeletorGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-6 gap-4";

        //Modals
        const user_setting_modal = ref();
        const user_blue_mark_modal = ref();
        const dealer_modal = ref();
        const ps_confirm_dialog = ref();
        const ps_error_dialog = ref();
        const psloading = ref();
        const limit_item_modal = ref();

        const JoinedDate = ref();


        // Inject Item Provider
        const itempaidProvider = usePaidAdItemStoreState();
        const itemactiveProvider = useProductStore('active');
        const itempendingProvider = useProductStore('pending');
        const itemrejectProvider = useProductStore('reject');
        const itemdisableProvider = useProductStore('disable');
        const itemSoldoutProvider = useProductStore('sold'); // soldout store
        const followerItemProvider = useFollowerItemStoreState(); // soldout store

        const userStore = useUserStore();
        const limitProvider = useLimitAdItemStoreState();
        const favouriteitemProvider = useFavouriteItemStoreState('favourite');


        const userdelete = new UserDeleteItemParameterHolder();
         // For Radio

        const loginUserId = localStorage.loginUserId;
        const appInfoParameterHolder = new AppInfoParameterHolder();
        appInfoParameterHolder.userId = loginUserId;
        const appInfoStore = usePsAppInfoStoreState();
        async function loadAppInfo(){
            // await appInfoStore.loadAppInfo(appInfoParameterHolder);
        }
        loadAppInfo();

        loadData();

        async function loadData(){

            await userStore.loadUser(loginUserId);
            const joinedDate = await userStore.user.data ? moment(userStore.user.data.addedDate).format(props.dateFormat) : '';
            JoinedDate.value = joinedDate;
        }

        limitProvider.resetPaidAdItemList(loginUserId);
        // Load Item List
        const latitude  =  psValueStore.locationLat == null || psValueStore.locationLat == '' ? '0' : psValueStore.locationLat;
        const longitude =  psValueStore.locationLng == null || psValueStore.locationLng == '' ? '0' : psValueStore.locationLng;

        itemactiveProvider.paramHolder = new ProductParameterHolder().resetParameterHolder();
        itemactiveProvider.paramHolder.addedUserId = loginUserId;
        // holder1.lat = latitude.toString();
        // holder1.lng = longitude.toString();
        // holder1.mile = appInfoStore.appInfo.data?.frontendConfigSetting.mile;
        itempendingProvider.paramHolder = new ProductParameterHolder().getPendingItemParameterHolder();
        itempendingProvider.paramHolder.addedUserId = loginUserId;
        // holder2.lat = latitude.toString();
        // holder2.lng = longitude.toString();
        // holder2.mile = appInfoStore.appInfo.data?.frontendConfigSetting.mile;
        itemrejectProvider.paramHolder = new ProductParameterHolder().getRejectedItemParameterHolder();
        itemrejectProvider.paramHolder.addedUserId = loginUserId;
        // holder3.lat = latitude.toString();
        // holder3.lng = longitude.toString();
        // holder3.mile = appInfoStore.appInfo.data?.frontendConfigSetting.mile;
        itemdisableProvider.paramHolder = new ProductParameterHolder().getDisabledProductParameterHolder();
        itemdisableProvider.paramHolder.addedUserId = loginUserId;

        itemSoldoutProvider.paramHolder = new ProductParameterHolder().getSoldoutProductParameterHolder(); // soldout
        itemSoldoutProvider.paramHolder.addedUserId = loginUserId;

        const holder6 = new FollowItemParameterHolder(); //follower item

        // holder4.lat = latitude.toString();
        // holder4.lng = longitude.toString();
        // holder4.mile = appInfoStore.appInfo.data?.frontendConfigSetting.mile;
        itempaidProvider.resetPaidAdItemList(loginUserId);

        itemactiveProvider.loadItemList(loginUserId, itemactiveProvider.paramHolder);
        itempendingProvider.loadItemList(loginUserId, itempendingProvider.paramHolder);
        itemrejectProvider.loadItemList(loginUserId, itemrejectProvider.paramHolder);
        itemdisableProvider.loadItemList(loginUserId, itemdisableProvider.paramHolder);
        itemSoldoutProvider.loadItemList(loginUserId, itemSoldoutProvider.paramHolder); //soldout item
        followerItemProvider.loadItemList(loginUserId, holder6); //follower item

        favouriteitemProvider.resetFavouriteItemList(loginUserId);
        // Load User By ID List
        // userStore.loadUser(loginUserId);

        // confirm dialog for user deactivate

        function openUserDeactivate(loginUserId) {
           ps_confirm_dialog.value.openModal(
                trans('profile__confirm'),
                trans('profile__are_you_sure_to_deactivate'),
                trans('profile__ok'),
                trans('profile__cancel'),
                () => {

                    doDeactivate(loginUserId);
                },
                () => {
                    PsUtils.log("Cancel");
                }
            );
        }

        // Deactive Account

        async function doDeactivate(loginUserId) {

            userdelete.userId = loginUserId;

            psloading.value.openModal();
            const returnData = await userStore.postDeleteUser(userdelete);

            if(returnData.status == PsStatus.SUCCESS) {

                // psValueStore.logout();
                 psloading.value.closeModal();

                // Redirect
                Inertia.get(route('dashboard'));


            }else {

                psloading.value.closeModal();
                ps_error_dialog.value.openModal('',returnData.message);

            }

        }

        // Verify blue mark user
        function openApplyUserBluemark(loginUserId) {
           user_blue_mark_modal.value.openModal(
                loginUserId
            );
        }

        function openMoreUserSetting() {
            user_setting_modal.value.openModal();
        }

         function clickLogout() {
            // psValueStore.logout();
            firebaseApp.auth().signOut();
            Inertia.post(route('logout'));
            // Inertia.get(route('dashboard'));
        }

        function buyAdClick(){
            limit_item_modal.value.openModal();
        }


        return {
            PsConst,
            itempaidProvider,
            PsValueStore,
            userStore,
            itemactiveProvider,
            itemrejectProvider,
            itemdisableProvider,
            itempendingProvider,
            itemSoldoutProvider,
            followerItemProvider,
            favouriteitemProvider,
            user_setting_modal,
            user_blue_mark_modal,
            limit_item_modal,
            openMoreUserSetting,
            dealer_modal,
            ps_confirm_dialog,
            psloading,
            openUserDeactivate,
            openApplyUserBluemark,
            doDeactivate,
            loginUserId,
            limitProvider,
            appInfoStore,
            clickLogout,
            buyAdClick,
            ps_error_dialog,
            itemCount,
            itemSkeletorCount,
            itemGrid,
            itemSpanCol,
            itemSkeletorGrid,
            paidAppZeroItemCount,
            paidAppZeroItemSkeletorCount,
            paidAppZeroItemGrid,
            paidAppZeroItemSpanCol,
            paidAppZeroItemSkeletorGrid,
            JoinedDate
        };
    },
    computed: {
        breadcrumb() {
            return [
                {
                    label: trans('ps_nav_bar__home'),
                    url: route('dashboard')
                },
                {
                    label: trans('ps_nav_bar__profile'),
                    color: "text-fePrimary-500"
                }
            ]
        }
    },
}
</script>
