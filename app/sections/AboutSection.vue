<template>
    <section ref="sectionRef" class="relative flex justify-center items-center mb-50 px-10 md:px-30">
        <div class="flex flex-col items-center max-w-7xl">
            <h2 
                class="text-(--text-primary-color) text-2xl mb-10 transition-all duration-800"
                :class="{ 'opacity-0 translate-y-5': !isVisible, 'opacity-100 translate-y-0': isVisible }"
            >
                .about()
            </h2>
            <div class="flex flex-col md:flex-row gap-10 md:gap-20 w-full">
                <div 
                    class="space-y-3 text-(--text-tertiary-color) text-sm md:text-base w-full md:max-w-125 transition-all duration-1000 delay-200"
                    :class="{ 'opacity-0 -translate-x-8': !isVisible, 'opacity-100 translate-x-0': isVisible }"
                >
                    <p v-for="(paragraph, index) in aboutText" :key="index">
                        <span v-html="paragraph"></span>
                    </p>
                </div>
                <div 
                    class="relative w-70 md:w-70 h-70 md:h-full mx-auto md:mx-0 transition-all duration-1000 delay-400"
                    :class="{ 'opacity-0 translate-x-8': !isVisible, 'opacity-100 translate-x-0': isVisible }"
                >
                    <div class="absolute inset-0 translate-x-4 translate-y-4 border-2 border-(--tertiary-color) rounded-md"></div>
                    <img 
                        src="../assets/img/foto.webp" 
                        class="relative z-10 w-full h-full object-contain rounded-md transition-all duration-300 hover:filter-none hover:-translate-y-1 hover:-translate-x-1"
                        alt="Profile photo"
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aboutText = [
    '<span>Hello!</span> I\'m Yoris — developer, problem-solver, coffee enthusiast.',
    'I build apps that don\'t just work — they feel good to use. My sweet spot? Combining clean logic with creative solutions, whether that\'s debugging gnarly code or designing smooth user experiences.',
    'Here\'s my superpower: I find answers fast. That obscure bug? Solved. That perfect library? Found. If the solution exists, I\'ll track it down in record time.',
    'I\'m all about leveling up, collaborating with great people, and shipping work I\'m proud of. So, <a href="https://www.linkedin.com/in/adrian-yoris-mbake-woka/" target="_blank" class="text-(--tertiary-color) hover:underline hover:opacity-75">Let\'s connect</a> and build something awesome.'
]

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
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