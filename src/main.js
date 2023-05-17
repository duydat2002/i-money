import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "@/untils/import";

const app = createApp(App);

registerGlobalComponent(app);

app.use(router).mount("#app");
