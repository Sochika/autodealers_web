<template>
    <ps-image-modal ref="psmodal" :isClickOut='true' class="z-50 content-center mx-auto" > 
        <template #body>
            <div class="w-screem flex flex-col">
                <div class="flex flex-row justify-between"> 
                    <div class="flex-grow" />
                    <font-awesome-icon @click="psmodal.toggle(false)" :icon="['fas', 'times']" class="text-feSecondary-700 dark_text-feAchromatic-500" size="2x" />
                </div>
                <div class=" flex flex-row justify-between">
                
                    <div class="flex flex-grow max-w-10/12">
                        <!-- <img alt="Placeholder" width="400px" height="400px" class="w-full h-112 overflow:hidden object-contain" 
                        :src="chatHistoryProvider.imageUrl(gallery)"
                        @error="chatHistoryProvider.defaultCarImage" > -->
                    </div>
                </div>
            </div>
        </template>
        
    </ps-image-modal>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';
import PsImageModal from '@template1/vendor/components/core/modals/PsImageModal.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes)
export default defineComponent({
    name: "ChatImageDetail",
    components : {
        PsImageModal
    },
    setup() {
        const psmodal = ref();
        let gallery = ref('');
        
        function openModal(galleryParam ) {
            gallery.value = galleryParam;           
            psmodal.value.toggle(true);           
        }

        function closeModal() {
            psmodal.value.toggle(false);
        }
        return {
            psmodal,
            openModal,
            closeModal,
            gallery,

        }
    },
})
</script>