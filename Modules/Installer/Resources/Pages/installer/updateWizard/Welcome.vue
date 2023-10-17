<template>
    <div>
        <UpdaterLayout title="welcome_to_the_updater_wizard">
            <template v-slot:container>
                <p class="paragraph text-center">
                    {{ $t('welcome_to_the_updater_wizard_desc') }}
                </p>
                <div class="buttons">
                    <ps-button @click="toOverview()" class="button" type="reset" padding="px-7 py-2" rounded="rounded" hover="">{{ $t('let_s_start') }}</ps-button>
                    <!-- <Button :href="route('NextLaravelUpdater::overview')" class="button">{{ $t('installer_messages.next') }}</Button> -->
                </div>
            </template>

        </UpdaterLayout>
        <ps-loading-circle-dialog ref="ps_loading_circle_dialog" />

    </div>
</template>

<script>
    import { defineComponent, computed, onMounted, onUnmounted, ref } from "vue";
    import UpdaterLayout from '@/Layouts/UpdaterLayout.vue';
    import PsButton from "@/Components/Core/Buttons/PsButton.vue";
    import PsLoadingCircleDialog from '@/Components/Core/Dialog/PsLoadingCircleDialog.vue';
    import { Link } from '@inertiajs/inertia';
    import { trans } from 'laravel-vue-i18n';
    import {Inertia} from "@inertiajs/inertia";

    export default defineComponent({
        components: {
            UpdaterLayout,
            Link,
            PsButton,
            PsLoadingCircleDialog,
        },
        setup(props) {

            const ps_loading_circle_dialog = ref();


            function toOverview(){
                Inertia.get(route("NextLaravelUpdater::sourceCode"),{},{
                    onBefore: () => {
                        // ps_loading_circle_dialog.value.openModal(trans('core__be_importing_title'),trans('core__be_importing_note'));
                    },
                    onSuccess: (res) => {
                        ps_loading_circle_dialog.value.closeModal();
                        //
                    },
                    onError: () => {
                        ps_loading_circle_dialog.value.closeModal();
                    },
                });
            }

            // onMounted(() => {
            //     var loading = document. getElementById("home_loading__container");
            //     loading.style.display = "none";
            // });

            return {
                toOverview,
                ps_loading_circle_dialog
            }
        }
    });
</script>

<style lang="scss" scoped>

</style>
