import { createApp } from "vue";
import App from "./App.vue";
import initDB from "./init";
import vuetify from "./plugin/vuetify";
import router from "./router";
import store from "./store";

initDB();

createApp(App).use(store).use(router).use(vuetify).mount("#app");
