import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: App
    },
    {
      path: "/red",
      component: App
    },
    {
      path: "/yellow",
      component: App
    },
    {
      path: "/green",
      component: App
    }
  ]
});
