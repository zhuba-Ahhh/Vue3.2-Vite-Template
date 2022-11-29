import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';

import '@/assets/main.css';
// import "@/styles/variables.less"; // Test 全局样式

import store from '@/stores';

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');
