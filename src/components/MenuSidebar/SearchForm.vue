<template>
  <form class="flex flex-col items-start gap-2">
    <SidebarItem
      :class="[
        'w-full',
        'border-primary',
        searchVisible ? 'border-none shadow-none' : '',
      ]"
      name="Search"
      icon="search"
      @click="toggleSearchVisibility"
    />
    <input
      v-show="searchVisible"
      ref="searchInput"
      type="text"
      :class="
        `bg-transparent w-full border-b-2 border-primary text-white focus:outline-none p-2 ` +
        (searchVisible ? 'shadow' : '')
      "
      placeholder="Search"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SidebarItem from "./SidebarItem.vue";

const searchVisible = ref(false);

const toggleSearchVisibility = () => {
  searchVisible.value = !searchVisible.value;
  return;
};
</script>
