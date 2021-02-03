import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Home,
    meta: {
      title: "Главная"
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
