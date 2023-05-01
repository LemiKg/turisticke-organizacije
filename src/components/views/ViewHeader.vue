<template>
  <div>
    <h1 class="text-xl pb-3 border-b-2 border-secondary text-white">
      {{ name }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped></style>
