<script setup lang="ts">
    import Button from '~/components/Button.vue';
</script>

<template>
    <section class="relative h-screen flex justify-center items-center mb-20 px-10 md:px-30">
        <div class="text-left md:text-left max-w-full">
            <h1 class="text-4xl md:text-6xl mb-5 text-(--text-primary-color) wrap-break-word animate-fade-in">
                yor<span class="text-(--tertiary-color)">.is()</span>
            </h1>
            <h3 class="text-xl md:text-2xl text-(--text-secondary-color) mb-3 wrap-break-word animate-fade-in-delay-1">
                Adrian Yoris Mbake Woka
            </h3>
            <h5 class="text-base md:text-lg text-(--text-tertiary-color) mb-6 wrap-break-word animate-fade-in-delay-2">
                Software Engineer, ERP Developer, and Fullstack Developer.
            </h5>
            <div class="flex md:justify-start animate-fade-in-delay-3">
                <a href="mailto:adrianyoris@gmail.com?subject=Let's%20Connect">
                    <Button size="medium">Chat me!</Button>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 0.9s;
  animation-fill-mode: both;
}

.animate-fade-in-delay-1 {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 1.2s;
  animation-fill-mode: both;
}

.animate-fade-in-delay-2 {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}

.animate-fade-in-delay-3 {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 1.8s;
  animation-fill-mode: both;
}
</style>