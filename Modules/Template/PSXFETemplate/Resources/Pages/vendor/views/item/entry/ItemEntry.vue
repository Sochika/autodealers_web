<template>
    <Head :title="$t('item_entry__title')"/>
    <item-upload-1 :authUser="$page.props.authUser" :thumb2xUrl="$page.props.thumb2xUrl" :dir="$page.props.dir" :sysImageUrl="$page.props.sysImageUrl" :itemId="itemId" />

</template>

<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent, onMounted ,ref} from 'vue'
import ItemUpload1 from './ItemUpload1.vue'

import PsFrontendLayout from '@template1/vendor/components/layouts/container/PsFrontendLayout.vue';

export default defineComponent({
    name: "ItemEntry",
    components:{
        ItemUpload1,
        Head
    },
    props: ['query', 'backendSetting'],
    layout: PsFrontendLayout,
    setup(props) {
        const itemId = ref('0');
        if(props.query && props.query.itemId){
            itemId.value = props.query.itemId;
        }

        return {
            itemId
        }
    },
})
</script>
