<template>
  <div class="w-full text-white">
    <div class="flex w-full font-bold mb-2">
      <div v-for="col in headers" class="p-2 w-1/3">
        {{ col.text }}
      </div>
    </div>
    <Row
      v-for="el in items"
      class="divide-x-2 divide-tertiary divide-dotted"
      :key="el.id"
      :object="el"
      @edit="edit"
      @remove="remove"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import Row from "./Row.vue";

defineProps({
  items: {
    type: Array as PropType<
      Array<{ id: string; image: string; category: string }>
    >,
    required: true,
  },
  headers: {
    type: Array as PropType<
      Array<{ text: string; value: string; align?: string }>
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
