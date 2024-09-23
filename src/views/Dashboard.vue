<script setup>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import AtalhosCard from "@/views/components/AtalhosCard.vue"

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

const sales = {
  us: {
    country: "Musculação",
    sales: 320,
    value: "R$ 19.000,00",
    bounce: "R$ 60,00",
    flag: US,
  },
  germany: {
    country: "Pilates",
    sales: "270",
    value: "R$ 13.500,00",
    bounce: "R$ 50,00",
    flag: DE,
  },
  britain: {
    country: "Natação",
    sales: "220",
    value: "R$ 8.800,00",
    bounce: "R$ 40,00",
    flag: GB,
  },
  brasil: {
    country: "Hidroginástica",
    sales: "150",
    value: "R$ 6.000,00",
    bounce: "R$ 40,00",
    flag: BR,
  },
};
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row mb-3">
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Receita de Setembro"
              value="R$ 13.270,00"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+12%</span> em relação a Agosto"
              :icon="{
                component: 'ni ni-money-coins',
                background: 'bg-gradient-primary',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Ocupação de Professores"
              value="68%"
              description="<span
                class='text-sm font-weight-bolder text-danger'
                >-3%</span> em relação a Agosto"
              :icon="{
                component: 'ni ni-chart-bar-32',
                background: 'bg-gradient-danger',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Novos Alunos"
              value="+23"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+2%</span> em relação a Agosto"
              :icon="{
                component: 'ni ni-paper-diploma',
                background: 'bg-gradient-success',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="Vagas Disponíveis"
              value="14"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >-5%</span> do que agosto"
              :icon="{
                component: 'ni ni-book-bookmark',
                background: 'bg-gradient-warning',
                shape: 'rounded-circle',
              }"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart
                id="chart-line"
                title="Acompanhamento de Receita"
                description="<i class='fa fa-arrow-up text-success'></i>
      <span class='font-weight-bold'>4% more</span> in 2021"
                :chart="{
                  labels: [
                    'Jan',
                    'Fev',
                    'Mar',
                    'Abr',
                    'Jun',
                    'Jul',
                    'Ago',
                    'Set',
                  ],
                  datasets: [
                    {
                      label: 'Mobile Apps',
                      data: [12800, 9700, 11800, 10500, 9400, 15000, 11000, 13270],
                    },
                  ],
                }"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <atalhos-card></atalhos-card>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-2">Modalidades que mais arrecadam</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(sale, index) in sales" :key="index">
                      <td class="w-30">
                        <div class="px-2 py-1 d-flex align-items-center">
                          <div class="ms-4">
                            <p class="mb-0 text-xs font-weight-bold">
                              Modalidade:
                            </p>
                            <h6 class="mb-0 text-sm">{{ sale.country }}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Alunos:</p>
                          <h6 class="mb-0 text-sm">{{ sale.sales }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <p class="mb-0 text-xs font-weight-bold">Receita:</p>
                          <h6 class="mb-0 text-sm">{{ sale.value }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <p class="mb-0 text-xs font-weight-bold">receita per capita:</p>
                          <h6 class="mb-0 text-sm">{{ sale.bounce }}</h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
