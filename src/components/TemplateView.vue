<template>
  <v-sheet class="ma-4">
    <h1 class="text-h4 text-center ma-4">{{ viewName }}</h1>
    <slot>Content</slot>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps<{
  viewName: string;
}>();
</script>
