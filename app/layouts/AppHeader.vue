<script setup lang="ts">
import Button from '~/components/Button.vue';

</script>

<template>
    <nav class="flex justify-between px-6 py-6 bg-(--bg-primary-color) items-center fixed top-0 right-0 left-0 z-50">
        <a href="#">
            <h1 class="text-3xl text-(--tertiary-color)">
                .is()
            </h1>
        </a>
        <ul class="flex gap-4 justify-end items-center text-(--text-secondary-color) text-sm">
            <a href="#" class="hover:text-(--tertiary-color)"><li>.about()</li></a>
            <a href="#" class="hover:text-(--tertiary-color)"><li>.experiences()</li></a>
            <a href="#" class="hover:text-(--tertiary-color)"><li>.projects()</li></a>
            <a href="#" class="hover:text-(--tertiary-color)"><li>.contact()</li></a>
            <a href="#" class=""><li><Button size="small">Resume</Button></li></a>
        </ul>
    </nav>
</template>