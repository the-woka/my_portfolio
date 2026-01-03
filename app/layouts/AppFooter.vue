<template>
    <footer class="bg-(--bg-primary-color) relative bottom-0 py-4">
        <div class="text-center">
            <div class="flex justify-center gap-6 mb-4 md:hidden">
                <a href="https://github.com/the-woka" target="_blank" rel="noopener noreferrer" class="text-xl text-(--text-tertiary-color) transition-all duration-200 hover:text-(--tertiary-color) hover:-translate-y-1" title="GitHub">
                    <Icon name="meteor-icons:github" />
                </a>
                <a href="https://www.instagram.com/yoryoriis/" target="_blank" rel="noopener noreferrer" class="text-xl text-(--text-tertiary-color) transition-all duration-200 hover:text-(--tertiary-color) hover:-translate-y-1" title="Instagram">
                    <Icon name="meteor-icons:instagram" />
                </a>
                <a href="https://www.linkedin.com/in/adrian-yoris-mbake-woka/" target="_blank" rel="noopener noreferrer" class="text-xl text-(--text-tertiary-color) transition-all duration-200 hover:text-(--tertiary-color) hover:-translate-y-1" title="LinkedIn">
                    <Icon name="meteor-icons:linkedin" />
                </a>
            </div>
            
            <p class="text-(--text-secondary-color) text-sm">
                Made with Love & Coffee ☕ <br> 
                © {{ currentYear }} Yoris
            </p>
        </div>
    </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear()
</script>