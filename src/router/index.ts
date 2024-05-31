import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/user/edit/:id",
    name: "edit",
    component: () => import("../views/UserEditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
