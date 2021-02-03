import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/persons-list"),
    meta: {
      title: "Главная"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/about"),
    meta: {
      title: "О приложении"
    }
  },
  {
    path: "/person",
    name: "Person",
    component: () => import("../components/person"),
    meta: {
      title: "Сотрудник"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  //  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = `${process.env.VUE_APP_TITLE} | ${to.meta.title}`;
  next();
});

export default router;
