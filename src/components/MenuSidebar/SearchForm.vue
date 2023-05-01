<template>
  <form
    class="flex flex-col items-start gap-2"
    @submit.prevent="searchSubmitted"
  >
    <SidebarItem
      class="w-full border-primary"
      :class="searchVisible ? 'border-none shadow-none' : ''"
      name="Search"
      icon="search"
      @click="toggleSearchVisibility"
    />
    <input
      v-show="searchVisible"
      ref="searchInput"
      type="text"
      class="bg-transparent w-full border-b-2 border-primary text-white focus:outline-none p-2 shadow"
      :class="searchVisible ? 'shadow' : ''"
      placeholder="Search"
    />
  </form>
</template>

<script setup lang="ts">
import { ref, PropType, nextTick } from "vue";
import SidebarItem from "./SidebarItem.vue";

const props = defineProps({
  submitMethod: {
    type: Function as PropType<(data: string) => void>,
    default: () => {},
  },
});

const searchInput = ref<HTMLInputElement | null>(null);
const searchVisible = ref(false);

const searchSubmitted = () => {
  const data = (searchInput?.value?.value as string) || "";
  props.submitMethod(data);
};

const toggleSearchVisibility = () => {
  searchVisible.value = !searchVisible.value;

  if (searchVisible.value) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }

  return;
};
</script>
