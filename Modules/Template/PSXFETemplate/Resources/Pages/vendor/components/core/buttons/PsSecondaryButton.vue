<template>
    <button :type="type" :disabled="disabled" :class="disabled ? [rounded, padding, border, shadow, textSize , justify, 'bg-feSecondary-100 text-feSecondary-300 dark_text-feSecondary-600 dark_bg-feSecondary-700 dark_border-feSecondary-500 cursor-not-allowed opacity-90'] : [rounded, colors, padding, border, shadow, textSize, hover, focus, cursor, opacity , justify]"
    class="font-medium transition duration-150 ease-in-out" >
        <slot />
    </button>
</template>

<script>
    export default {
        name: "PsCustomButton",
        props: {
            type: {
                type: String,
                default: 'submit',
            },
            rounded : {
                type: String,
                default: 'rounded'
            },
            colors : {
                type: String,
                default: 'bg-feAchromatic-50 dark_bg-feAchromatic-900 text-feSecondary-800 dark_text-feAchromatic-50'
            },
            padding : {
                type: String,
                default: 'py-2 px-4'
            },
            border : {
                type: String,
                default: 'border border-feSecondary-200 '
            },
            shadow : {
                type: String,
                default: 'shadow-none'
            },
            textSize : {
                type: String,
                default: 'text-sm '
            },
            justify : {
                type: String,
                default: 'flex justify-center items-center '
            },
            hover : {
                type: String,
                default: 'hover:outline-none dark_hover_text-feSecondary-800 dark_active_text-feSecondary-800  hover_bg-feSecondary-50 active_bg-feSecondary-500 dark_hover_bg-feSecondary-500 dark_active_bg-feSecondary-400'
            },
            focus : {
                type: String,
                default: 'focus:outline-none dark_focus_text-feAchromatic-50 focus_border-none focus_bg-feAchromatic-50 dark_focus_bg-feAchromatic-900 focus_ring focus_ring-fePrimary-200'
            },
            cursor: {
                type: String,
                default: 'cursor-pointer'
            },
            opacity: {
                type: String,
                default: 'opacity-100'
            },
            disabled: {
                type: Boolean,
                default: false
            },
        }
    }
</script>