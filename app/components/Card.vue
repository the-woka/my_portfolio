<template>
  <a
    :href="extLink"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col bg-(--bg-secondary-color) rounded-sm p-6 transition-transform duration-400 hover:-translate-y-1 cursor-pointer h-full"
  >
    <div class="flex justify-between items-baseline mb-3">
        <span class="text-2xl text-(--tertiary-color)"><Icon name="meteor-icons:folder"/></span>
        <div class="flex gap-3">
            <span
                v-if="gitLink"
                @click.prevent.stop="openGitHub"
                class="text-(--text-secondary-color) text-lg hover:text-(--tertiary-color) transition-colors cursor-pointer"
                aria-label="GitHub Repository"
            >
                <Icon name="meteor-icons:github" />
            </span>
            <span class="text-(--text-secondary-color) text-lg hover:text-(--tertiary-color) transition-colors cursor-pointer">
                <Icon name="meteor-icons:arrow-up-right" />
            </span>
        </div>
    </div>
    <h3 class="text-(--text-primary-color) text-md font-bold mb-2">{{ name_app }}</h3>
    <p class="text-(--text-secondary-color) text-sm mb-3 grow">{{ desc }}</p>
    <div class="flex flex-wrap gap-2 mt-auto">
      <span
        v-for="technology in tech"
        :key="technology"
        class="text-(--text-tertiary-color) text-xs"
      >
        {{ technology }}
      </span>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  name_app: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  tech: {
    type: Array,
    required: true
  },
  extLink: {
    type: String,
    required: true
  },
  gitLink: {
    type: String,
    default: null
  }
})

const openGitHub = () => {
  window.open(props.gitLink, '_blank')
}
</script>