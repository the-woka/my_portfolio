<template>
    <section class="relative h-screen w-screen flex justify-center items-center">
        <div class="flex flex-col items-center w-full px-4">
            <h2 class="text-(--text-primary-color) text-2xl mb-10">
                .projects()
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-225">
                <Card
                    v-for="project in projects"
                    :key="project.name_app"
                    :name_app="project.name_app"
                    :desc="project.desc"
                    :tech="project.tech"
                    :ext-link="project.ext_link"
                    :git-link="project.git_link"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from '~/components/Card.vue';

const projects = [
    {
        name_app: 'Todo App',
        desc: 'Todo App simple controlled by CLI. I made this to strengthen my knowledge about CLI app in Rust',
        tech: ['Rust'],
        ext_link: 'https://vercel.app',
        git_link: 'https://github.com'
    },
    {
        name_app: 'Weather App',
        desc: 'Using API Open Weather to learn how API and CLI connects in Rust',
        tech: ['Rust', 'OpenWeather API'],
        ext_link: 'https://weather.vercel.app',
    },
    {
        name_app: 'Calculator Income',
        desc: 'Inspired by my "waste", I\'m creating an app to count my income into some parts',
        tech: ['Rust'],
        ext_link: 'https://weather.vercel.app',
    },
]
</script>