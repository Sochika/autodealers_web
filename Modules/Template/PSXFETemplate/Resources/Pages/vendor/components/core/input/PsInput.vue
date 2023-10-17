<template>
    <input
        class="block bg-transparent w-full px-3 py-2 text-sm shadow-sm dark_placeholder-feSecondary-300 placeholder-feSecondary-500"
        :type="type"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :class="disabled ? [ opacity,rounded,disabledTheme, ] : isError ? [theme, rounded, , errorBorder, opacity] : [theme, rounded, defaultBorder, opacity]"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @input="handleInput($event.target.value)" />
</template>

<script>
import { ref } from 'vue';

export default {
    name : "PsInput",
    props: {
        "value" : { type: String, default: "" },
        "type" : { type: String, default: "text" },
        "theme" : { type: String, default : "text-feSecondary-500 dark_text-feSecondary-400" },
        "rounded": { type: String, default: "rounded" },
        "maxlength" : { type : Number, default : 99999999 },
        "placeholder": { type: String, default: "" },
        "disabled": { type: Boolean, default: false },
        "readonly": { type: Boolean, default: false },
        "disabledTheme": { type: String, default: " text-feSecondary-300 border-feSecondary-300 dark_border-feSecondary-800 dark_text-feSecondary-700 shadow-none placeholder-feSecondary-300 dark_placeholder-feSecondary-600" },
        "defaultBorder": { type: String, default: "border border-feSecondary-200 hover_border-feSecondary-400 dark_border-feSecondary-400 hover:dark_border-feSecondary-50 focus:outline-none focus_border-none focus_ring-2 focus_ring-fePrimary-300 ring-fePrimary-300 placeholder-feSecondary-500 dark_placeholder-feSecondary-400" },
        "errorBorder": { type: String, default: "border border-fePrimary-500 focus_border-fePrimary-500 focus:outline-none focus_border-none focus_ring-1 focus_ring-fePrimary-500-500 ring-fePrimary-500-500 placeholder-feSecondary-500 dark_placeholder-feSecondary-400" },
        "onInput" : Function,
        opacity: {
                type: String,
                default: 'opacity-100'
            },

    },

    setup( props , { emit}) {

        const isError = ref(false);
        function handleInput(v) {
            emit('update:value', v);

            if(props.onInput != null) {
                props.onInput(v);
            }
        }

        return {
            handleInput,
            isError
        }
    }
}
</script>
