<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Breadcrumbs from "../Breadcrumbs.vue";



const store = useStore();
const isRTL = computed(() => store.state.isRTL);

const route = useRoute();


const currentRouteName = computed(() => {
  return route.name;
});
const currentDirectory = computed(() => {
  let dir = route.path.split("/")[1];
  return dir.charAt(0).toUpperCase() + dir.slice(1);
});






</script>
<template>
  <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    :class="isRTL ? 'top-0 position-sticky z-index-sticky' : ''"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs
        :current-page="currentRouteName"
        :current-directory="currentDirectory"
      />

      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        id="navbar"
      >
        <div class=" pe-md-5 d-flex align-items-center ms-md-auto">
          <span class="text-light font-weight-bold" >Usuário: Silva  -  Função: Operador</span>
        </div>

        <ul class="navbar-nav justify-content-end">

          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'Signin' }"
              class="px-0 nav-link font-weight-bold text-white"
              target=""
            >
              <i class="fa fa-user me-sm-2"></i>
              <span class="d-sm-inline d-none">Sair</span>
            </router-link>
          </li>
          
          
          
          
        </ul>
      </div>
    </div>
  </nav>
</template>
