<template>
    <p class="" :class="textColor === '' ? 'text-feSecondary-800 dark_text-feSecondary-300' : textColor">
        <slot></slot>
    </p>
</template>

<script lang='ts'>
export default {
    name : 'PsLabel',
    props: {
        textColor : {
            type: String,               
            default: 'text-feSecondary-800 dark_text-feSecondary-300',            
        }        
    }
}
</script>
