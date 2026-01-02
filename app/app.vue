<script setup lang="ts">
import AboutSection from './sections/AboutSection.vue';
import ContactSection from './sections/ContactSection.vue';
import ExperiencesSection from './sections/ExperiencesSection.vue';
import HeroSection from './sections/HeroSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';

</script>

<template>
  <NuxtLayout>
    <main>
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </NuxtLayout>
</template>


