<template>
  <div class="w-full text-white">
    <div class="flex w-full font-bold mb-2">
      <div class="p-2 w-1/3">Image</div>
      <div class="p-2 w-1/3">Name</div>
      <div class="p-2 w-1/3">Primary Category</div>
      <div class="p-2 w-1/3">Actions</div>
    </div>
    <ObjectRow
      v-for="object in touristObjects"
      class="divide-x-2 divide-tertiary divide-dotted"
      :key="object.id"
      :object="object"
      @edit="edit"
      @remove="remove"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ObjectRow from "./ObjectRow.vue";

defineProps({
  touristObjects: {
    type: Array as PropType<
      Array<{ id: string; image: string; category: string }>
    >,
    required: true,
  },
});

const edit = (object: { id: string; image: string; category: string }) => {
  // Handle edit logic here
  console.log("Editing:", object);
};

const remove = (object: { id: string; image: string; category: string }) => {
  // Handle delete logic here
  console.log("Deleting:", object);
};
</script>

<style scoped>
.container {
  background-color: transparent;
}
</style>
