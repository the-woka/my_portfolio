<script setup lang="ts">
import Button from '~/components/Button.vue';

</script>

<template>
    <section class="relative w-screen flex justify-center items-center mb-60">
        <div class="flex flex-col items-center">
            <h2 class="text-(--text-primary-color) text-2xl mb-10">
                .contact()
            </h2>
            <div class="flex flex-col items-center justify-center text-center gap-4 w-150 mb-5">
                <h5 class="text-(--text-secondary-color) text-xl">
                    Contact Me!
                </h5>
                <p class="text-(--text-tertiary-color) text-md">
                    I'm currently exploring full-time roles and freelance collaborations. If you think I'd be a good fit for your team, or just want to grab a virtual coffee, I'd love to connect!
                </p>
            </div>
            <Button size="large">Say Hello</Button>
        </div>
    </section>
</template>