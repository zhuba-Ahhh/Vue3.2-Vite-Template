import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import { useCounterStore } from './modules/counter';
import { useUserStore } from './modules/user';

const store = createPinia();
store.use(piniaPluginPersist);

export default store;
export { useCounterStore, useUserStore };
