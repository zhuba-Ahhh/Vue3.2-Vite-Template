import { createPinia } from "pinia";
import { useCounterStore } from "./modules/counter";
import { useUserStore } from "./modules/user";
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
export { useCounterStore, useUserStore };
