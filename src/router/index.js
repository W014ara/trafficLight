import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";
import Data from "../data.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      component: App,
      props: {
        curObj: Data[1],
        shift: Data[4].shift
      }
    },
    {
      path: "/red",
      component: App,
      props: {
        curObj: Data[1],
        shift: Data[4].shift
      }
    },
    {
      path: "/yellow",
      component: App,
      props: {
        curObj: Data[2],
        shift: Data[4].shift
      }
    },
    {
      path: "/green",
      component: App,
      props: {
        curObj: Data[3],
        shift: Data[4].shift
      }
    }
  ]
});
