<template>
  <aside class="h-full p-4 flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-2">
      <SearchForm
        :submitMethod="(data) => navigateTo('/search', 'search', { q: data })"
      />
      <SidebarItem
        :selected="selectedItem === 'dashboard'"
        @click.native="() => navigateTo('/', 'dashboard')"
        name="Dashboard"
        icon="dashboard"
      />
      <SidebarItem
        :selected="selectedItem === 'hotel-list'"
        @click.native="() => navigateTo('/hotel-list', 'hotel-list')"
        name="Hotel list"
        icon="stack"
      />
      <SidebarItem
        :selected="selectedItem === 'locations'"
        @click.native="() => navigateTo('/locations', 'locations')"
        name="Locations"
        icon="location"
      />
      <SidebarItem
        :selected="selectedItem === 'objects'"
        @click.native="() => navigateTo('/objects', 'objects')"
        name="Objects"
        icon="hotel"
      />
    </div>
    <SidebarItem name="Log out" icon="logout" />
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SearchForm from "./SearchForm.vue";
import SidebarItem from "./SidebarItem.vue";

const router = useRouter();

const selectedItem = ref("dashboard");
const navigateTo = (
  path: string,
  itemId: string,
  query?: Record<string, string>
) => {
  selectedItem.value = itemId;
  router.push({ path, query });
};
</script>

<style scoped></style>
