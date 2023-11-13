<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="bg-slate-100 min-w-screen min-h-screen">
    <Header />
    <slot />
  </div>
</template>
