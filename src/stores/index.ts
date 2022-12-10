import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useCounterStore } from './modules/counter';
import { useUserStore } from './modules/user';

const store = createPinia();
store.use(piniaPluginPersistedstate);

export default store;
export { useCounterStore, useUserStore };
