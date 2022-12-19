import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/login-page.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/progress",
    name: "progress",
    component: () => import("../views/Progress.vue"),
  },
  {
    path: "/target",
    name: "target",
    component: () => import("../views/Target.vue"),
  },
  {
    path: "/total",
    name: "total",
    component: () => import("../views/Total.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main.vue"),
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
