<script setup lang="ts">
import AppFooter from './AppFooter.vue';
import AppHeader from './AppHeader.vue';
import LeftBar from './LeftBar.vue';
import RightBar from './RightBar.vue';

</script>

<template>
  <div class="min-h-screen bg-(--bg-primary-color)">
    <AppHeader />
    <LeftBar />
    <RightBar />

    <slot />

    <AppFooter />
  </div>
</template>
