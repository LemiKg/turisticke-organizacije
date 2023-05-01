import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/views/Dashboard.vue";
import HotelList from "@/components/views/HotelList.vue";
import Locations from "@/components/views/Locations.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/hotel-list", component: HotelList },
  { path: "/locations", component: Locations },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
