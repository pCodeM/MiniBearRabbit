<template>
    <svg :style="{width, height }" :fill="color">
        <use :xlink:href="prefix+name"></use>
    </svg>
</template>
<script lang="ts" setup>
    defineProps({
        prefix: {
            type: String,
            default: '#icon-'
        },
        name: {
            type: String
        },
        width: {
            type: String,
            default: '20px'
        },
        height: {
            type: String,
            default: '20px'
        },
        color: {
            type: String,
            default: ''
        }
    })
</script>