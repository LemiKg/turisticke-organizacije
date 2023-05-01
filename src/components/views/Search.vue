<template>
  <div class="">
    <ViewHeader icon="search" :name="'Search: ' + query" />
  </div>
</template>

<script setup lang="ts">
import ViewHeader from "./common/ViewHeader.vue";
const props = defineProps({
  query: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped></style>
