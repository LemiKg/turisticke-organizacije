<template>
  <aside
    class="h-full border-l-2 border-secondary p-2 flex flex-col items-center"
  >
    <IconLoader name="avatar" />
    <h1 class="text-lg bold text-white">
      <strong>
        {{ name }}
      </strong>
    </h1>
  </aside>
</template>

<script setup lang="ts">
import IconLoader from "./IconLoader.vue";
defineProps({
  name: {
    type: String,
    default: "User name",
  },
  icon: {
    type: String,
    default: "avatar",
  },
});
</script>

<style scoped></style>
