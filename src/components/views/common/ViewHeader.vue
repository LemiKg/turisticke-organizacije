<template>
  <div
    class="pb-3 border-b-2 border-secondary flex gap-2 items-center min-h-[55px]"
  >
    <IconLoader :name="icon" class="fill-white" />
    <h1 class="text-xl text-white">
      {{ name }}
    </h1>

    <span v-show="searchString">| {{ searchString }} |</span>
  </div>
</template>

<script setup lang="ts">
import IconLoader from "@/components/IconLoader.vue";

defineProps({
  name: {
    type: String,
    default: "Dashboard",
  },
  icon: {
    type: String,
    default: "dashboard",
  },
  searchString: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
