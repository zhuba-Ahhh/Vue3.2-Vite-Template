import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三',
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage, // 储存到local 或者 session
        paths: ['name', 'age'], // 指定保存哪些
      },
    ],
  },
});
