<template>
    <button class="relative group cursor-pointer">
        <span class="absolute inset-0 bg-(--tertiary-color) rounded-md"></span>
        <span 
            :class="[
                'relative inline-block bg-(--bg-primary-color) border-2 text-(--tertiary-color) rounded-md transform transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1',
                sizeClasses
            ]"
        >
            <slot />
        </span>
    </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'small',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
})

const sizeClasses = computed(() => {
    const sizes = {
        small: 'px-2 py-2 text-sm',
        medium: 'px-4 py-3 text-base',
        large: 'px-6 py-4 text-lg'
    }
    return sizes[props.size]
})
</script>