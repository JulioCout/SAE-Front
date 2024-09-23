<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import SidenavItem from "./SidenavItem.vue";


const store = useStore();
const isRTL = computed(() => store.state.isRTL);

const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split("/");
  return routeArr[1];
};
</script>
<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          to="/inicio"
          :class="getRoute() === 'inicio' ? 'active' : ''"
          navText="Inicio"
        >
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/turmas"
          :class="getRoute() === 'tables' ? 'active' : ''"
          navText="Turmas"
        >
          <template v-slot:icon>
            <i
              class="ni ni-single-copy-04 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/alunos"
          :class="getRoute() === 'billing' ? 'active' : ''"
          navText="Alunos"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      
      <li class="mt-8 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          PÁGINAS DE EXEMPLO
        </h6>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/profile"
          :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="isRTL ? 'حساب تعريفي' : 'Perfil Aluno'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item
          to="/signin"
          :class="getRoute() === 'signin' ? 'active' : ''"
          :navText="isRTL ? 'تسجيل الدخول' : 'login'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <a href="https://github.com/JulioCout/esporte_back" target="_blank">
        <li class="nav-item">
          <sidenav-item
            to=""
            :class="getRoute() === 'signin' ? 'active' : ''"
            navText="Backend de exemplo"
          >
            <template v-slot:icon>
              <i class="ni ni-single-copy-04 text-dark text-sm opacity-10"></i>
            </template>
          </sidenav-item>
        </li>
      </a>

    </ul>
  </div>

  
</template>
