<template>
  <div class="">
    <ViewHeader icon="location" name="Locations" />
    <Table :items="locations" :headers="headers" />
  </div>
</template>

<script setup lang="ts">
import ViewHeader from "./common/ViewHeader.vue";
import Table from "../Table/Table.vue";

const headers = [
  {
    text: "Image",
    value: "image",
  },
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Category",
    value: "category",
  },
  {
    text: "Actions",
    value: "actions",
  },
];

const locations = [
  {
    id: "1",
    image: "https://example.com/image1.jpg",
    name: "Location 1",
    category: "Nature",
  },
  {
    id: "2",
    image: "https://example.com/image2.jpg",
    name: "Location 2",
    category: "History",
  },
  {
    id: "3",
    image: "https://example.com/image3.jpg",
    name: "Location 3",
    category: "Culture",
  },
];
</script>

<style scoped></style>
