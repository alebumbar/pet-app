import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pets from "../views/Pets.vue";
import About from "../views/About.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/pets",
    name: "Pets",
    component: Pets
  },

  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;