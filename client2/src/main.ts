import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/_global.scss";
import { router } from "./config/router";

const app = createApp(App);
app.use(createPinia());
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
