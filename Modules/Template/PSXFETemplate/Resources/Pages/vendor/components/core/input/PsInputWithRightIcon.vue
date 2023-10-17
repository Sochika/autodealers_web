<template>
    <div class="relative">
        <input

        :class="disabled ? [ rounded,disabledTheme, padding, className] : [theme, rounded,defaultBorder,placeholderColor, padding, className]"
        :disabled="disabled"
         :type="type" :value="value" :maxlength="maxlength" @input="handleInput($event.target.value)" :placeholder="placeholder"/>
        <div class="absolute inset-y-0 flex items-center ltr:ms-2 ltr:me-3.5 ltr:right-0 rtl:me-2 rtl:ms-3.5 rtl:left-0"  :class="theme">
            <slot name="icon"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "PsInputWithRightIcon",
    props: {
        "className" : {type: String, default: "bg-transparent  w-full text-sm shadow-sm"},
        "value" : { type: String, default: "" },
        "type" : { type: String, default: "text" },
        "theme" : { type: String, default : "text-feSecondary-500 dark_text-feSecondary-400" },
        "rounded": { type: String, default: "rounded-lg" },
        "maxlength" : { type : Number, default : 99999999 },
        "placeholder": { type: String, default: "" },
        "placeholderColor": {type: String, default: "placeholder-feSecondary-500 dark_placeholder-feSecondary-400"},
        "onInput" : Function,
        "disabled": { type: Boolean, default: false },
        "padding": { type:String, default: "py-2.5 px-4"},
        "disabledTheme": { type: String, default: " text-feSecondary-300 border-feSecondary-300 dark_border-feSecondary-800 dark_text-feSecondary-700 shadow-none placeholder-feSecondary-300 dark_placeholder-feSecondary-600" },
        "defaultBorder": { type: String, default: "border border-feSecondary-200 hover_border-feSecondary-400 dark_border-feSecondary-400 hover:dark_border-feSecondary-50 focus:outline-none focus_border-none focus_ring-2 focus_ring-fePrimary-300 ring-fePrimary-300 placeholder-feSecondary-500 dark_placeholder-feSecondary-400" },
    },
    setup(_, {emit}) {
        // const psValueHolder = PsValueProvider.psValueHolder;
        function handleInput(v) {
            emit('update:value', v)
        }

        return {
            handleInput,
            // psValueHolder
        }
    }
}
</script>
