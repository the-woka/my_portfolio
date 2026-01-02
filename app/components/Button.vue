<template>
    <button class="relative group cursor-pointer">
        <span class="absolute inset-0 bg-(--tertiary-color) rounded-md"></span>
        <span class="relative inline-block px-2 py-2 bg-(--bg-primary-color) border-2 text-(--tertiary-color) rounded-md transform transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <slot />
        </span>
    </button>
</template>