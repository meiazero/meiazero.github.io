<script setup lang="ts">
import Hero from '@/components/Hero.vue'

useHead({
  title: 'meiazero',
  meta: [{ name: 'description', content: 'My amazing personal website.' }],
})
</script>

<template>
  <main
    class="w-full h-[600px] flex justify-center items-center max-md:container"
  >
    <Hero message="In development, please wait and follow me on" />
  </main>
</template>
