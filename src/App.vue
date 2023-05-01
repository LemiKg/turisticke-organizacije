<script setup lang="ts">
import Content from "./components/Content.vue";
import MenuSidebar from "./components/MenuSidebar/MenuSidebar.vue";
import UserSidebar from "./components/UserSidebar.vue";
</script>

<template>
  <div class="grid grid-cols-pageLayout p-3 rounded h-screen">
    <MenuSidebar class="bg-secondary rounded" />
    <Content>
      <router-view></router-view>
    </Content>
    <UserSidebar name="John Doe" />
  </div>
</template>

<style scoped></style>
