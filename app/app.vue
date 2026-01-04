<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppFooter from './layouts/AppFooter.vue';
import AppHeader from './layouts/AppHeader.vue';
import LeftBar from './layouts/LeftBar.vue';
import RightBar from './layouts/RightBar.vue';
import AboutSection from './sections/AboutSection.vue';
import ContactSection from './sections/ContactSection.vue';
import ExperiencesSection from './sections/ExperiencesSection.vue';
import HeroSection from './sections/HeroSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';

const isLoading = ref(true)
const loadingProgress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    loadingProgress.value += 10
    if (loadingProgress.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 300)
    }
  }, 100)
})
</script>

<template>
  <div 
    v-if="isLoading" 
    class="fixed inset-0 z-100 bg-(--bg-primary-color) flex flex-col items-center justify-center transition-opacity duration-500"
    :class="{ 'opacity-0 pointer-events-none': !isLoading }"
  >
    <h1 class="text-5xl md:text-7xl text-(--tertiary-color) mb-12 animate-pulse-slow">
      .is()
    </h1>
    
    <div class="w-64 h-1 bg-(--bg-secondary-color) rounded-full overflow-hidden">
      <div 
        class="h-full bg-(--tertiary-color) transition-all duration-300 ease-out"
        :style="{ width: `${loadingProgress}%` }"
      ></div>
    </div>
    
    <p class="text-(--text-tertiary-color) text-sm mt-4">
      {{ loadingProgress }}%
    </p>
  </div>

  <div 
    v-show="!isLoading"
    class="animate-fade-in-content"
  >
    <NuxtLayout>
      <AppHeader />
      <LeftBar />
      <RightBar />
      <main class="min-h-screen bg-(--bg-primary-color) overflow-x-hidden">
        <HeroSection />
        <AboutSection id="about"/>
        <ExperiencesSection id="experiences" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <AppFooter />
    </NuxtLayout>
  </div>
</template>

<style>
@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}

@keyframes fadeInContent {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-content {
  animation: fadeInContent 0.8s ease-out;
}
</style>