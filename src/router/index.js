import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeAdmin from "../views/admin/HomeAdmin";
import Login from "../views/Login";

import Bienvenidos from "../views/Bienvenidos";
import Contacto from "../views/Contacto";
import Consultas from "../views/Consultas";
import About from '../views/About'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "welcome",
        components: {
          home: Bienvenidos,
        },
      },
      {
        path: "consult",
        components: {
          home: Consultas,
        },
      },
      {
        path: "contac",
        components: {
          home: Contacto,
        },
      },
      {
        path: "about",
        components: {
          home: About,
        },
      },
    ],
  },
  {
    path: "/admin",
    component: HomeAdmin,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
