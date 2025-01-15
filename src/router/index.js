import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pets from "../views/Pets.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/pets",
    name: "Pets",
    component: Pets,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
