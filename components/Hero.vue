<script setup lang="ts">
import X from '@/components/icons/X.vue';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-vue-next';

interface Props {
  message?: string
}

defineProps<Props>()
</script>

<template>
  <section
    class="w-[550px] h-[300px] flex flex-col justify-center items-center"
  >
    <h1 class="text-2xl font-semibold">{{ message }}</h1>
    <div class="flex flex-row gap-x-4 py-4 items-center">
      <a
        href="https://github.com/meiazero"
        target="_blank"
        referrerpolicy="no-referrer"
        title="Github profile"
        >
        <Badge class="px-2">
          <Github width="18" />
        </Badge>
      </a>
      <a
        href="https://x.com/avila_json"
        target="_blank"
        referrerpolicy="no-referrer"
        title="X(Twitter) profile"
      >
        <Badge class="px-2">
          <X />
        </Badge>
      </a>
    </div>
  </section>
</template>
