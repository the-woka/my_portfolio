<template>
    <div class="hidden md:flex fixed top-0 right-0 items-center h-screen pr-9 z-20 bg-(--bg-primary-color) animate-fade-in-right">
        <a href="mailto:ois.woka23@gmail.com?subject=Let's%20Connect" class="text-(--text-tertiary-color) [writing-mode:vertical-rl] rotate-0 text-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:text-(--tertiary-color)">ois.woka23@gmail.com</a>
    </div>
</template>

<style scoped>
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-right {
  animation: fadeInRight 0.5s ease-out;
  animation-delay: 2.3s;
  animation-fill-mode: both;
}
</style>