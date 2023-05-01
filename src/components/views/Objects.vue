<template>
  <div class="">
    <ViewHeader icon="hotel" name="Objects" />
    <ObjectsTable :touristObjects="objects" />
  </div>
</template>

<script setup lang="ts">
import ObjectsTable from "../Objects/ObjectsTable.vue";
import ViewHeader from "./common/ViewHeader.vue";
const objects = [
  {
    id: "1",
    image: "https://example.com/image1.jpg",
    name: "Object 1",
    category: "Nature",
  },
  {
    id: "2",
    image: "https://example.com/image2.jpg",
    name: "Object 2",
    category: "History",
  },
  {
    id: "3",
    image: "https://example.com/image3.jpg",
    name: "Object 3",
    category: "Culture",
  },
];
</script>

<style scoped></style>
