<template>
    <Head :title="$t('footer__about_us')"></Head>
  <ps-content-container>
    <template #content>
      <div class="mt-36 mb-16 flex flex-col">
        <div class="flex flex-col mb-4 ">

          <div class=" w-auto cursor-pointer my-2">
            <img alt="Placeholder" width="15px" height="10px" class="block w-full h-128 object-cover"
            v-lazy=" { src: $page.props.uploadUrl + '/' + aboutUsStore.aboutus?.data?.defaultPhoto?.imgPath, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }">
            <div class="mt-4">
              <ps-label-title> {{aboutUsStore.aboutus?.data?.aboutTitle}} </ps-label-title>
              <p class="mt-4" v-if="aboutUsStore.aboutus?.data?.aboutDescription != ''">
                  <ps-label v-html="aboutUsStore.aboutus?.data?.aboutDescription"> </ps-label>
              </p>
            </div>
          </div>

          <div class="mx-8">
            <!-- for phone -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.aboutPhone != null && aboutUsStore.aboutus?.data?.aboutPhone != ''">
              <font-awesome-icon :icon="['fas', 'phone-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__phone") }}  </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.aboutPhone}} </ps-label-caption>
              </p>
            </div>

            <!-- for website -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.aboutWebsite != null && aboutUsStore.aboutus?.data?.aboutWebsite != ''">
              <font-awesome-icon :icon="['fas', 'globe']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__website") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.aboutWebsite}} </ps-label-caption>
              </p>
            </div>

            <!-- for facebook -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.facebook != null && aboutUsStore.aboutus?.data?.facebook != ''">
              <font-awesome-icon :icon="['fab', 'facebook-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__facebook") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.facebook}} </ps-label-caption>
              </p>
            </div>

            <!-- for twitter -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.twitter != null && aboutUsStore.aboutus?.data?.twitter != ''">
              <font-awesome-icon :icon="['fab', 'twitter-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__twitter") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.twitter}} </ps-label-caption>
              </p>
            </div>

            <!-- for instagram -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.instagram != null && aboutUsStore.aboutus?.data?.instagram != ''">
              <font-awesome-icon :icon="['fab', 'instagram-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__instagram") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.instagram}} </ps-label-caption>
              </p>
            </div>

            <!-- for google plus -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.googlePlus != null && aboutUsStore.aboutus?.data?.googlePlus != ''">
             <font-awesome-icon :icon="['fab', 'google-plus-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__google_plus") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.googlePlus}} </ps-label-caption>
              </p>
            </div>

            <!-- for youtube -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.youtube != null && aboutUsStore.aboutus?.data?.youtube != ''">
              <font-awesome-icon :icon="['fab', 'youtube-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__youtube") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.youtube}} </ps-label-caption>
              </p>
            </div>

            <!-- for pinterest -->
            <div class=" rtl:space-x-reverse space-x-2 flex mt-2" v-if="aboutUsStore.aboutus?.data?.pinterest != null && aboutUsStore.aboutus?.data?.pinterest != ''">
              <font-awesome-icon :icon="['fab', 'pinterest-square']" class="text-feSecondary-500 dark_text-fefeAchromatic-50  " size="2x" />
              <p class="ms-2">
                <ps-label-title-4 class="px-4"> {{ $t("about__pinterest") }} </ps-label-title-4>
                <ps-label-caption class="leading-normal px-4"> {{aboutUsStore.aboutus?.data?.pinterest}} </ps-label-caption>
              </p>
            </div>
          </div>

        </div>
      </div>
      <!-- google adsense desktop view -->
      <div class="mx-auto">
        <ps-ad-sense adFormat="horizontal"></ps-ad-sense>
      </div>

    </template>
  </ps-content-container>
</template>

<script lang='ts'>
import { Head } from '@inertiajs/inertia-vue3';
import PsLabel from '@template1/vendor/components/core/label/PsLabel.vue';
import PsLabelTitle4 from '@template1/vendor/components/core/label/PsLabelTitle4.vue';
import PsLabelCaption from '@template1/vendor/components/core/label/PsLabelCaption.vue';
import PsLabelTitle from '@template1/vendor/components/core/label/PsLabelTitle.vue';
import PsAdSense from '@template1/vendor/components/core/adsense/PsAdSense.vue';

import PsContentContainer from "@template1/vendor/components/layouts/container/PsContentContainer.vue";
import { useAboutUsStoreState } from "@templateCore/store/modules/aboutus/AboutUsStore";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare,faTwitterSquare,faGooglePlusSquare,faInstagramSquare,faYoutubeSquare,faPinterestSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare,faGlobe } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebookSquare,faTwitterSquare,faPhoneSquare,faGooglePlusSquare,faGlobe,faInstagramSquare,faYoutubeSquare,faPinterestSquare );
import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';
import PsConst from '@templateCore/object/constant/ps_constants';
import { PsValueStore } from '@templateCore/store/modules/core/PsValueStore';

export default {
  name: "AboutView",
  components: {
    PsContentContainer,
    PsLabel,
    PsLabelTitle4,
    PsLabelCaption,
    PsLabelTitle,
    PsAdSense,
    Head
  },
    layout: PsFrontendLayout,
    setup(props) {
        const aboutUsStore = useAboutUsStoreState();
        let psValueStore = PsValueStore();
        const loginUserId = psValueStore.getLoginUserId();
        aboutUsStore.loadAboutUs(loginUserId);

    return {
      aboutUsStore,
    };
  },
};
</script>
