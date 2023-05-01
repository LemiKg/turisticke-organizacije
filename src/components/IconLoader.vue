<template>
  <component :is="icon" class="w-10 h-auto" />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const icon = defineAsyncComponent(
  () => import(`../assets/svg/${props.name}.svg`)
);
</script>
