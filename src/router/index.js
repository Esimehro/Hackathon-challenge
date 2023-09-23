import { createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: "/",
    component: () => import("../layout/Layout.vue"),
    name: "Layout",
  },
  {
    path: "/register",
    component: () => import("../components/RegisterPage.vue"),
    name: "RegisterPage",
  },
  {
    path: "/contact",
    component: () => import("../components/ContactPage.vue"),
    name: "ContactPage",
  },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });
  
  export default router;