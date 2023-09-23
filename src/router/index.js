import { createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: "/",
    component: () => import("../layout/Layout.vue"),
    name: "Layout",
  },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });
  
  export default router;