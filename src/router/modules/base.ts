import HomeView from "@/views/HomeView.vue";
export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pinia",
    name: "pinia",
    component: () => import("@/views/PiniaView.vue"),
  },
];
