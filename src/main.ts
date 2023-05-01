import { createApp } from "vue";
import "./style.pcss";
import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");
