<script setup lang="ts">
import AppFooter from './layouts/AppFooter.vue';
import AppHeader from './layouts/AppHeader.vue';
import LeftBar from './layouts/LeftBar.vue';
import RightBar from './layouts/RightBar.vue';
import AboutSection from './sections/AboutSection.vue';
import ContactSection from './sections/ContactSection.vue';
import ExperiencesSection from './sections/ExperiencesSection.vue';
import HeroSection from './sections/HeroSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';

</script>

<template>
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
</template>


