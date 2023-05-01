<template>
  <a
    href="#"
    class="p-1 border-b-2 border-primary text-white flex items-center gap-4 shadow hover:shadow-md"
    :class="{ 'bg-primary': selected }"
  >
    <IconLoader :name="icon" class="fill-white" />
    <h2>{{ name }}</h2>
  </a>
</template>

<script setup lang="ts">
import IconLoader from "../IconLoader.vue";

defineExpose({
  components: {
    IconLoader,
  },
});

defineProps({
  name: {
    type: String,
    default: "Dashboard item",
  },
  icon: {
    type: String,
    default: "dashboard",
  },
  selected: {
    type: Boolean,
    default: false,
  },
});
</script>
