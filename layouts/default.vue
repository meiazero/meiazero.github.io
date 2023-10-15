<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="bg-slate-100 w-screen h-screen">
    <Header />
    <slot />
  </div>
</template>
