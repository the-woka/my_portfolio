<script setup lang="ts">
import Button from '~/components/Button.vue';

</script>

<template>
    <section class="relative flex justify-center items-center mb-40 px-10 md:px-30">
        <div class="flex flex-col items-center w-full max-w-7xl">
            <h2 class="text-(--text-primary-color) text-2xl mb-10">
                .contact()
            </h2>
            <div class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-150 mb-5">
                <h5 class="text-(--text-secondary-color) text-lg md:text-xl">
                    Contact Me!
                </h5>
                <p class="text-(--text-tertiary-color) text-sm md:text-md">
                    I'm currently exploring full-time roles and freelance collaborations. If you think I'd be a good fit for your team, or just want to grab a virtual coffee, I'd love to connect!
                </p>
            </div>
            <a href="mailto:adrianyoris@gmail.com?subject=Let's%20Connect">
                 <Button size="large">Say Hello</Button>
            </a>
        </div>
    </section>
</template>