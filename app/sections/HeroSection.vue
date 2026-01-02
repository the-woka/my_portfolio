<script setup lang="ts">
    import Button from '~/components/Button.vue';
</script>

<template>
    <section class="relative h-screen w-screen flex justify-center items-center">
        <div>
            <h1 class="text-6xl mb-5 text-(--text-primary-color)">
                yor<span class="text-(--tertiary-color)">.is()</span>
            </h1>
            <h3 class="text-2xl text-(--text-secondary-color) mb-3">
                Adrian Yoris Mbake Woka
            </h3>
            <h5 class="text-lg text-(--text-tertiary-color) mb-6">
                Software Engineer, ERP Developer, and Fullstack Developer.
            </h5>
            <Button>Chat me!</Button>
        </div>
    </section>
</template>