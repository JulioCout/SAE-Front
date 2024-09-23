import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";
// import Billing from "../views/Billing.vue";

import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";


import Turmas from "../views/Turmas.vue";
import Alunos from "../views/Alunos.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Dashboard,
  },
  {
    path: "/turmas",
    name: "Turmas",
    component: Turmas,
  },
  {
    path: "/alunos",
    name: "Alunos",
    component: Alunos,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
