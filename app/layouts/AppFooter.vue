<template>
    <footer class="bg-(--bg-primary-color) relative bottom-0 py-4">
        <div class="text-center">
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