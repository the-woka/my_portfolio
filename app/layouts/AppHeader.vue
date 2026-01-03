<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import Button from '~/components/Button.vue';

const isMenuOpen = ref(false);
const isVisible = ref(true);
const lastScrollY = ref(0);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Detect if scrolled down from top (for blur effect)
  isScrolled.value = currentScrollY > 50;
  
  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Scrolling down & passed 100px
    isVisible.value = false;
  } else {
    // Scrolling up
    isVisible.value = true;
  }
  
  lastScrollY.value = currentScrollY;
};

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav 
        :class="[
            'flex justify-between px-6 py-6 items-center fixed top-0 right-0 left-0 z-50 transition-all duration-300',
            isVisible ? 'translate-y-0' : '-translate-y-full',
            isScrolled ? 'bg-(--bg-primary-color)/80 backdrop-blur-md shadow-lg' : 'bg-(--bg-primary-color)'
        ]"
    >
        <a href="#">
            <h1 class="text-3xl text-(--tertiary-color)">
                .is()
            </h1>
        </a>
        
        <ul class="hidden md:flex gap-4 justify-end items-center text-(--text-secondary-color) text-sm">
            <a href="#about" class="hover:text-(--tertiary-color)"><li>.about()</li></a>
            <a href="#experiences" class="hover:text-(--tertiary-color)"><li>.experiences()</li></a>
            <a href="#projects" class="hover:text-(--tertiary-color)"><li>.projects()</li></a>
            <a href="#contact" class="hover:text-(--tertiary-color)"><li>.contact()</li></a>
            <a href="/files/CV-Adrian-Yoris.pdf" target="_blank" rel="noopener noreferrer" class=""><li><Button size="small">Resume</Button></li></a>
        </ul>

        <button @click="toggleMenu" class="md:hidden text-(--tertiary-color) text-2xl cursor-pointer z-60 relative">
            <Icon v-if="!isMenuOpen" name="bitcoin-icons:menu-outline" />
            <Icon v-else name="bitcoin-icons:cross-outline" />
        </button>
    </nav>

    <!-- Mobile Menu Backdrop (Outside nav, blur seluruh layar) -->
    <div 
        v-if="isMenuOpen" 
        @click="closeMenu"
        class="md:hidden fixed inset-0 backdrop-blur-sm bg-black/20 z-40"
    ></div>

    <!-- Mobile Menu Panel -->
    <div 
        v-if="isMenuOpen" 
        class="md:hidden fixed top-0 right-0 w-3/4 h-screen bg-(--bg-primary-color) shadow-lg z-50"
    >
        <ul class="flex flex-col gap-6 px-6 py-24 text-(--text-secondary-color) text-sm text-center">
            <a href="#about" @click="closeMenu" class="hover:text-(--tertiary-color)"><li>.about()</li></a>
            <a href="#experiences" @click="closeMenu" class="hover:text-(--tertiary-color)"><li>.experiences()</li></a>
            <a href="#projects" @click="closeMenu" class="hover:text-(--tertiary-color)"><li>.projects()</li></a>
            <a href="#contact" @click="closeMenu" class="hover:text-(--tertiary-color)"><li>.contact()</li></a>
            <a href="/files/CV-Adrian-Yoris.pdf" target="_blank" rel="noopener noreferrer" @click="closeMenu" class="flex justify-center"><li><Button size="small">Resume</Button></li></a>
        </ul>
    </div>
</template>