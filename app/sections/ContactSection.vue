<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '~/components/Button.vue';

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})
</script>

<template>
    <section ref="sectionRef" class="relative flex justify-center items-center mb-40 px-10 md:px-30">
        <div class="flex flex-col items-center w-full max-w-7xl">
            <h2 
                class="text-(--text-primary-color) text-2xl mb-10 transition-all duration-800"
                :class="{ 'opacity-0 translate-y-5': !isVisible, 'opacity-100 translate-y-0': isVisible }"
            >
                .contact()
            </h2>
            
            <div 
                class="flex flex-col items-center justify-center text-center gap-4 w-full max-w-150 mb-5 transition-all duration-1000 delay-200"
                :class="{ 'opacity-0 scale-95': !isVisible, 'opacity-100 scale-100': isVisible }"
            >
                <h5 class="text-(--text-secondary-color) text-lg md:text-xl">
                    Contact Me!
                </h5>
                <p class="text-(--text-tertiary-color) text-sm md:text-md">
                    I'm currently exploring full-time roles and freelance collaborations. If you think I'd be a good fit for your team, or just want to grab a virtual coffee, I'd love to connect!
                </p>
            </div>
            
            <div 
                class="transition-all duration-1000 delay-400"
                :class="{ 'opacity-0 translate-y-8': !isVisible, 'opacity-100 translate-y-0': isVisible }"
            >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ois.woka23@gmail.com&su=Let's%20Connect">
                    <Button size="large">Say Hello</Button>
                </a>
            </div>
        </div>
    </section>
</template>