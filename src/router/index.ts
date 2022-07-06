import { createRouter,createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/screen-A",
    name: "screen-A",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/screen-A.vue"),
  },
   {
    path: "/screen-B",
    name: "screen-B",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/screen-B.vue"),
  },
  {
    path: "/pis",
    name: "pis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pis.vue"),
  },
  {
    path: "/ipss",
    name: "ipss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ipss.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
