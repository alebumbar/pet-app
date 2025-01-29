import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/pets",
    name: "Pets",
    component: () => import("@/views/Pets.vue"),
  },

  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("@/views/ProtectedPage.vue"),
    meta: {
      loggedIn: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.loggedIn && !window.user) {
    return { name: "login" };
  }
});
export default router;
