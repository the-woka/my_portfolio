<template>
    <section class="relative flex justify-center items-start mb-50 px-10 md:px-30">
        <div class="flex flex-col items-center max-w-7xl w-full">
            <h2 class="text-(--text-primary-color) text-2xl mb-10">
                .experiences()
            </h2>
            <div class="flex flex-col justify-center md:flex-row gap-10 w-full">
                <div class="w-full md:w-45 md:shrink-0 text-sm">
                    <ul class="flex md:flex-col gap-2 md:gap-0 md:space-y-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                        <li 
                            v-for="(exp, index) in experiences" 
                            :key="index"
                            @click="activeTab = index"
                            :class="[
                                'cursor-pointer py-4 px-4 transition-all duration-200 whitespace-nowrap md:whitespace-normal',
                                'border-b-2 md:border-b-0 md:border-l-2',
                                activeTab === index 
                                    ? 'border-(--tertiary-color) bg-(--bg-secondary-color) text-(--tertiary-color)' 
                                    : 'border-(--text-tertiary-color) text-(--text-tertiary-color) hover:bg-(--bg-secondary-color)'
                            ]"
                        >
                            {{ exp.company }}
                        </li>
                    </ul>
                </div>
                
                <div class="w-full md:w-125">
                    <h4 class="text-base md:text-lg text-(--text-primary-color) mb-1">
                        {{ experiences[activeTab].position }}
                        <span class="text-(--tertiary-color)">@ {{ experiences[activeTab].company }}</span>
                    </h4>
                    <h6 class="text-(--text-secondary-color) mb-6 text-xs md:text-sm">
                        {{ experiences[activeTab].period }}
                    </h6>
                    <ul class="space-y-4">
                        <li 
                            v-for="(task, idx) in experiences[activeTab].tasks" 
                            :key="idx"
                            class="flex gap-2 text-(--text-tertiary-color) text-xs md:text-sm"
                        >
                            <span class="text-(--tertiary-color) mt-1">▹</span>
                            <span>{{ task }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const experiences = [
    {
        company: 'Boon Software',
        position: 'Aplication Developer Intership',
        period: 'August 2024 - August 2025',
        tasks: [
            'Developed robust reporting workflows in Oracle APEX, enhancing productivity and reporting efficiency by 20%, streamlining data access for decision-making.',
            'Architected and optimized API integration between WMS and e-commerce platforms using Oracle Integration Cloud, achieving a 40% increase in system effectiveness, enabling faster transactions.',
            'Facilitated report development for partners, boosting reporting performance by 60%, allowing for data-driven insights and en hanced business strategies.',
            'Engineered fixes and automated processes in Odoo ERP, resulting in a 40% improvement in operational efficiency, leading to significant time-savings.',
            'Conducted in-depth research and developed a proof-of-concept for EDI transmission using BOTs system, achieving a 10-20% reduction in API communication costs.'
        ]
    },
    {
        company: 'Bangkit Academy',
        position: 'Cloud Computing Cohort',
        period: 'February 2022 - July 2022',
        tasks: [
            'Deployed a capstone project using Google Cloud Platform, improving system scalability by 30-40% compared to local deployment, enhancing performance for production-level applications.',
            'Collaborated within a multidisciplinary team of 5 (Cloud, ML, Mobile) to deliver an innovative end-to-end solution, impacting over 100 target users and driving meaningful engagement.',
            'Optimized cloud resource utilization by 20% through strategic deployment on Compute Engine and Cloud Run, significantly lowering operational costs.',
        ]
    }
]
</script>