<script setup>
import AuthorsTable from "./components/AuthorsTable.vue";
import ArgonButton from "@/components/ArgonButton.vue";

</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="row mb-5 d-flex align-items-center">
          <div class="col-lg-3">
            <div class="card-body pt-4 p-3 align-middle">
              <div class="input-group">
                <span class="input-group-text text-body">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pesquisar Aluno"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card-body pt-4 p-3 d-flex flex-row justify-content-around">
              <argon-button
                color="info"
                size="md"
                fullWidth
                ><h6 class="mt-1">+ Cadastrar Aluno</h6>
              </argon-button>
            </div>
          </div>
          
          <div class="col-lg-3">
            <div class="card-body pt-4 p-3 d-flex flex-row justify-content-around">
              <argon-button
                color="info"
                size="md"
                fullWidth
                ><h6 class="mt-1">+ Incluir Atestado</h6>
              </argon-button>
            </div>
          </div>


        </div>

        <div class="row">
          <authors-table />
        </div>
      </div>
    </div>
  </div>
</template>
