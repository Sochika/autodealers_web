<template>
  <div class="overflow-hidden lg:rounded-2xl rounded-lg dark_bg-feSecondary-800  dark_border-black"
    :class="enabledHover ? 'hover:shadow-md' : '' " key="">
    <slot class=""></slot>
  </div>
</template>

<script lang='ts'>
export default {
    name : "PsCard",
    props: {
        enabledHover : {
            type : Boolean,
            default : false
        },
    }
};
</script>
