<script setup>
import ArgonButton from "@/components/ArgonButton.vue";

</script>

<template>
    <div class="card h-100 mb-4">
        <div class="card-header pb-0 px-3">
            <h6 class="mb-0">Atalhos</h6>
        </div>

        <div class="card-body pt-4 p-3">
            <ul class="list-group">
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <argon-button
                    color="info"
                    full-width
                    size="md"
                    class="d-flex align-items-left justify-content-center "
                    ><h6 class="mt-1">+ Cadastrar Aluno</h6></argon-button>
                </li>

                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <argon-button
                    color="info"
                    full-width
                    size="md"
                    class="d-flex align-items-left justify-content-center "
                    ><h6 class="mt-1">+ Incluir Atestado</h6></argon-button>
                </li>

                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                    <argon-button
                    color="info"
                    full-width
                    size="md"
                    class="d-flex align-items-left justify-content-center "
                    ><h6 class="mt-1">+ Abrir Turma</h6></argon-button>
                </li>

                <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                    <argon-button
                    color="info"
                    full-width
                    size="md"
                    class="d-flex align-items-left justify-content-center "
                    ><h6 class="mt-1">+ Nova Matrícula</h6></argon-button>
                </li>

            
            
            
            </ul>
        </div>
    </div>
</template>
