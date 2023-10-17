<template>
    <Head :title="$t('fe__other_profile')"/>
    <ps-content-container>
        <template #content>
            <div class="mt-32 mb-10">
                <div class="xl:mb-7 lg:mb-11 sm:mb-7 mb-9">
                    <ps-breadcrumb-2 :items="breadcrumb" class="" />
                </div>
                <div>
                    <div class="grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4  gap-4 sm:gap-3.5 lg:gap-4 ">
                        <!-- User Profile Normal -->
                        <div class='w-full col-span-4 sm:col-span-2 lg:col-span-3 mt-2 ' >
                            <ps-card class="lg:rounded-lg bg-feSecondary-50 dark_bg-feSecondary-800 p-4">
                                <div class="">

                                    <!-- <img alt="Placeholder"  width="30px" height="30px"  class="rounded-full w-16 h-16 lg:w-24 lg:h-24 object-cover mx-auto" :src="userStore.imageUrl(userStore.user.data ? userStore.user.data.userProfilePhoto : '',2)" @error="userStore.defaultProfileImage" > -->
                                    <!-- <img alt="Placeholder"  width="30px" height="30px"  class="mb-3 rounded-full w-[7.5rem] h-[7.5rem] object-cover mx-auto"
                                    v-lazy=" { src: $page.props.thumb2xUrl + '/' + userStore.user.data?.userCoverPhoto, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_profile.png' }"
                                    > -->
                                    <div class="w-full">
                                        <div class="w-32 h-32 rounded-full mx-auto relative">
                                            <img alt="Placeholder" class="rounded-full w-full h-full object-cover"
                                                v-lazy=" { src: $page.props.thumb1xUrl + '/' + userStore.user.data?.userCoverPhoto, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_profile.png' }" />
                                            <div v-if="userStore.user.data?.isVerifybluemark == '1'" class="w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0">
                                                <ps-icon name="bluemark" textColor="text-feSecondary-50" w="24" h="24" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex flex-col justify-center mb-2 mt-2">
                                        <ps-label textColor="dark_text-feSecondary-200" class="text-center text-xl font-semibold"> {{  userStore.user.data ? userStore.user.data.userName:'' }} </ps-label>
                                       
                                    </div>

                                    <ps-route-link :to="{ name: 'fe_review_list',query: { user_id: userStore.user.data?.userId } }">
                                        <div class="flex items-center content-center justify-center px-4 mb-3 cursor-pointer">
                                            <rating :rating="userStore.user.data ? userStore.user?.data?.overallRating:0" :maxStars="5" size="md" iconColor="text-feWarning-500" />
                                        </div>
                                    </ps-route-link>

                                    <ps-label textColor="text-feSecondary-600 dark_text-feSecondary-400" class="text-sm mb-3 text-center"> {{  userStore.user.data ? userStore.user.data.ratingCount:'' }} {{ $t("profile__reviews") }} </ps-label>
                                    <ps-label textColor="dark_text-feSecondary-200" v-if="userStore.user.data && userStore.user.data.isShowEmail == '1' " class="text-sm mb-3 text-center"> {{  userStore.user.data ? userStore.user.data.userEmail:'' }} </ps-label>
                                    <ps-label textColor="dark_text-feSecondary-200" v-if="userStore.user.data && userStore.user.data.isShowPhone == '1' " class="text-sm mb-3 text-center"> {{  userStore.user.data ? userStore.user.data.userPhone:'' }} </ps-label>
                                    <ps-label textColor="dark_text-feSecondary-200" class="text-sm mb-3 text-center"> {{  userStore.user.data ? userStore.user.data.userAboutMe:'' }} </ps-label>
                                </div>
                                <div  class="">
                                    <ps-label textColor="text-feSecondary-500 dark_text-feSecondary-400" class="text-xs mb-3 text-center">{{ $t("profile__joined_on") }} {{JoinedDate}}</ps-label>

                                    <ps-route-link :to="{ name: 'fe_follower_list', query: { userId: userStore.user.data?.userId   }}">
                                        <div class="cursor-pointer mb-2 flex justify-between">
                                            <ps-label class="text-sm">{{ $t("other_profile__followers") }} </ps-label>
                                            <ps-label class="font-semibold text-sm">{{userStore.user.data ? userStore.user.data.followerCount:'0'}}</ps-label>
                                        </div>
                                    </ps-route-link>
                                    <ps-route-link :to="{ name: 'fe_following_list', query: { userId: userStore.user.data?.userId   }}">
                                        <div class="cursor-pointer flex justify-between">
                                            <ps-label class="text-sm">{{ $t("other_profile__followings") }} </ps-label>
                                            <ps-label  class="font-semibold text-sm">{{userStore.user.data ? userStore.user.data.followingCount:'0'}}</ps-label>
                                        </div>
                                    </ps-route-link>

                                </div>
                            </ps-card>
                            <div class=" text-center mt-6" v-if="userStore.user.data?.userId != LoginUserId" @click="followClick">
                                <div v-if="userStore.user.data?.isFollowed == '0'">
                                    <ps-button rounded="rounded" textSize="text-sm" class=" w-full  mx-auto" > {{ $t("other_profile__follow") }}  </ps-button>
                                </div>
                                <div v-else-if="userStore.user.data?.isFollowed == '1'">
                                    <ps-button rounded="rounded" textSize="text-sm" class=" w-full  mx-auto" > {{ $t("other_profile__unfollow") }}  </ps-button>
                                </div>
                            </div>

                            <div v-if="appInfoStore?.appInfo?.data?.psAppSetting?.isBlockUser ==PsConst.ONE" class="mt-5 py-2 px-4 text-center w-full border bg-feAchromatic-50 border-1 border-feSecondary-300 dark_border-feSecondary-500 dark_bg-feSecondary-800 rounded lg:w-full mx-auto">
                                <ps-label class="text-sm cursor-pointer" @click="blockClicked(userStore.user?.data?.userId ?? '')">
                                        {{ $t("other_profile__block_user") }}
                                </ps-label>
                            </div>
                        </div>
                        <!-- End User Profile Normal -->

                        <!-- Latest item listing -->
                        <div v-if="itemStore.itemList?.data != null" class="w-full col-span-4 sm:col-span-6 lg:col-span-9">
                            <div class="w-full sm:mt-2">
                                <ps-label-header-4 class="mt-8 mb-6 sm:mt-0 font-medium"> {{ userStore.user.data ? userStore.user.data.userName+"'s" :'' }} {{ $t("other_profile__active_post") }} </ps-label-header-4>
                                <div class="w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6">
                                    <!-- Active Listing -->
                                    <div class=" w-full h-full"
                                        v-for="item in itemStore.itemList.data"
                                        :key="item.id">
                                        <ps-route-link :to="{ name: 'item', params: { itemName: item.title.split(' ').join('-').toLowerCase(),imgName: item.defaultPhoto.imgPath  }, query: { item_id: item.id, item_name: item.title.split(' ').join('-').toLowerCase()   }}">
                                            <item-horizontal-item  :item="item" />
                                        </ps-route-link>
                                    </div>
                                    <!-- END Active Listing -->
                                </div>

                            </div>

                            <div v-if="itemStore.itemList?.data != null && itemStore.isNoMoreRecord.value == false" class="flex justify-center mt-6 mb-4">
                                <!-- <ps-route-link :to="{name: 'fe_item_list', query: userItemParams['query']}">
                                    <ps-button class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-1">
                                        {{ $t("blog_list__load_more") }}
                                    </ps-button>
                                </ps-route-link> -->
                                <ps-button v-if="itemStore.loading.value == false" @click.prevent="loadMoreActivePost" class="flex flex-row " theme="bg-fePrimary-500 dark_bg-feAccent-500 text-feAchromatic-50 dark_text-feAchromatic-900 capitalize px-4 py-1">
                                        {{ $t("blog_list__load_more") }}
                                </ps-button>
                                <ps-button v-else class="mx-auto mt-8" :disabled="true">{{ $t("list__loading") }}</ps-button>
                            </div>

                            <!-- google adsense desktop view -->
                            <div class="mx-auto">
                                <ps-ad-sense adFormat="horizontal"></ps-ad-sense>
                            </div>

                        </div>
                        <div v-else-if="itemStore.itemList != null && itemStore.loading.value " class="w-full col-span-4 sm:col-span-6 lg:col-span-9 mt-4  mb-6">
                            <div class="w-full">
                                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6 ">
                                    <div class="w-full" v-for="i in 6" :key="i">
                                        <item-horizontal-skeletor-item />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="col-span-4 sm:col-span-6 lg:col-span-9 mt-2  mb-6 w-full flex justify-center">
                            <ps-label textColor="text-feSecondary-500 dark_text-feAchromatic-50 lg:text-xl sm:text-lg text-base font-medium" class="mt-10 flex-grow-0 mx-auto"> {{ $t("list__no_result") }} </ps-label>
                        </div>

                        <!-- end latest item listing -->
                    </div>

                </div>
            </div>

            <ps-confirm-dialog ref='ps_confirm_dialog' />

            <ps-loading-dialog ref="psloading"  :isClickOut='false'/>
        </template>
    </ps-content-container>
</template>
<script lang="ts">
import { Head } from '@inertiajs/inertia-vue3';
//Vue
// import { useRoute } from 'vue-router';
// import router from "@template1/router";
import { ref } from 'vue';
import PsContentContainer from '@template1/vendor/components/layouts/container/PsContentContainer.vue';
import PsLabelHeader4 from '@template1/vendor/components/core/label/PsLabelHeader4.vue';
import PsCard from '@template1/vendor/components/core/card/PsCard.vue';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import PsButton from '@template1/vendor/components/core/buttons/PsButton.vue';
import Rating from '@template1/vendor/components/core/rating/RatingShow.vue';
import PsRouteLink from '@template1/vendor/components/core/link/PsRouteLink.vue';
import PsIcon from '@template1/vendor/components/core/icons/PsIcon.vue';
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';

import ItemHorizontalItem from "@template1/vendor/components/modules/item/ItemHorizontalItem.vue";
import ItemHorizontalSkeletorItem from "@template1/vendor/components/modules/item/ItemHorizontalSkeletorItem.vue";
//Models
import { useProductStore } from "@templateCore/store/modules/item/ProductStore";

import ProductParameterHolder from "@templateCore/object/holder/ProductParameterHolder";
import PsConfirmDialog from '@template1/vendor/components/core/dialog/PsConfirmDialog.vue';
import PsLoadingDialog from '@template1/vendor/components/core/dialog/PsLoadingDialog.vue';
import UserBlockParameterHolder from '@templateCore/object/holder/UserBlockParameterHolder';
import { PsValueStore } from "@templateCore/store/modules/core/PsValueStore";
import UserParameterHolder from '@templateCore/object/holder/UserParameterHolder';
import UserFollowHolder from '@templateCore/object/holder/UserFollowHolder';
import PsStatus from '@templateCore/api/common/PsStatus';
import PsConst from "@templateCore/object/constant/ps_constants";
import { useUserStore } from "@templateCore/store/modules/user/UserStore";
import { usePsAppInfoStoreState } from '@templateCore/store/modules/appinfo/AppInfoStore';

import AppInfoParameterHolder from '@templateCore/object/holder/AppInfoParameterHolder';

import "vue-skeletor/dist/vue-skeletor.css";
import { trans } from 'laravel-vue-i18n';import PsUtils from '@templateCore/utils/PsUtils';
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import PsBreadcrumb2 from '@template1/vendor/components/core/breadcrumbs/PsBreadcrumb2.vue';
import { Inertia } from "@inertiajs/inertia";
import moment from 'moment';

export default {
    name : "OtherProfileView",
    components : {
        PsIcon,
        PsBreadcrumb2,
        PsContentContainer,
        PsLabelHeader4,
        PsCard,
        PsLabel,
        PsLabelCaption,
        PsButton,
        Rating,
        ItemHorizontalItem,
        ItemHorizontalSkeletorItem,
        PsConfirmDialog,
        PsLoadingDialog,
        PsRouteLink,
        PsAdSense,
        Head
    },
    layout: PsFrontendLayout,
    props: ['query','dateFormat'],
    setup(props) {
        const JoinedDate = ref();
        // Modals
        const ps_confirm_dialog = ref();
        const psloading = ref();

        const userblock = new UserBlockParameterHolder();

        // const route = useRoute();
        const userId = props.query?.userId?.toString();
        // Inject Item Store
        const itemStore = useProductStore();

        // Load Item List
        const holder = new ProductParameterHolder().getLatestParameterHolder();
        holder.addedUserId = userId;

        itemStore.resetProductList(userId, holder);

        // Get Login User Id
        const psValueStore = PsValueStore();
        const LoginUserId = psValueStore.getLoginUserId();
        const paramHolder = new UserParameterHolder().getOtherUserData();
        const followHolder = new UserFollowHolder();

        //for block user setting
        const appInfoStore = usePsAppInfoStoreState();

        const appInfoParameterHolder = new AppInfoParameterHolder();
        appInfoParameterHolder.userId = LoginUserId;
        // appInfoStore.loadAppInfo(appInfoParameterHolder);

        paramHolder.loginUserId = LoginUserId;
        paramHolder.id = userId;
        let userStore = useUserStore('other');;
        loadUserData();
        async function loadUserData(){

            await userStore.loadOtherUser(LoginUserId,paramHolder);
            const joinedDate = await userStore.user.data ? moment(userStore.user.data.addedDate).format(props.dateFormat) : '';
            JoinedDate.value = joinedDate;


        }
        itemStore.paramHolder.addedUserId = userId;

        const userItemParams = itemStore.paramHolder.getUrlParamsAndQuery();

        async function followClick(){
            if(LoginUserId && LoginUserId != PsConst.NO_LOGIN_USER){
                psloading.value.openModal();
                if( userStore.user.data?.isFollowed == '1'){
                    psloading.value.message = trans('other_profile__removing_user_from_follower_list');
                }else{
                    psloading.value.message = trans('other_profile__adding_user_to_follower_list');
                }
                followHolder.userId = LoginUserId;
                followHolder.followedUserId = userStore.user?.data?.userId ?? '';
                await userStore.postUserFollow(followHolder);
                loadUserData();

                psloading.value.closeModal();
            }
            else{
                 Inertia.get(route('login'));
            }


        }

        // Block this user

        function blockClicked(userId) {
            if(LoginUserId && LoginUserId != PsConst.NO_LOGIN_USER){
                ps_confirm_dialog.value.openModal(
                    trans('other_profile__confirm'),
                    trans('other_profile__confirm_to_block_user'),
                    trans('other_profile__block'),
                    trans('other_profile__cancel'),
                    () => {

                        doBlock(userId);
                    },
                    () => {
                        PsUtils.log("Cancel");
                    }
                );
            }
            else{
                Inertia.get(route('login'));
            }

        }
        //unblock user

        //Block User
        async function doBlock(userId) {

            userblock.loginUserId = LoginUserId;
            userblock.addedUserId = userId;

            psloading.value.openModal();
            psloading.value.message = trans('other_profile__adding_user_to_block_list');
            const returnData = await userStore.blockUser(userblock,LoginUserId);
            psloading.value.closeModal();

            if(returnData.status == PsStatus.ERROR) {
                return;
            }else if(returnData.status == PsStatus.SUCCESS) {

                Inertia.get(route('dashboard'));

            }
        }

        function loadMoreActivePost(){
            itemStore.loadItemList(userId,holder);
        }


        return {
            itemStore,
            userStore,
            userItemParams,
            blockClicked,
            ps_confirm_dialog,
            psloading,
            followClick,
            LoginUserId,
            doBlock,
            appInfoStore,
            PsConst,
            JoinedDate,
            loadMoreActivePost
        }
    },
    computed: {
        breadcrumb() {
            return [
                {
                    label: trans('fe__other_profile'),
                    url: route('fe_profile')
                },
                {
                    label: this.userStore.user.data ? this.userStore.user.data.userName:'',
                    color: "text-fePrimary-500"
                }
            ]
        }
    },
}
</script>
