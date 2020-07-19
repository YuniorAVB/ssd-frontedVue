<template>
  <v-main class="consult">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            APROVECHA NUESTROS PRECIOS DE PROMOCION
            <v-btn color="success" icon>
              <v-icon>fas fa-paw</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(plan,index) in planes" :key="index" cols="12" md="4" lg="4" sm="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title v-text="plan.cost"></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0" v-text="plan.name"></v-card-subtitle>

          <v-card-text class="text--primary">
            <div v-text="plan.description"></div>
          </v-card-text>

          <v-card-actions>
            <v-btn block :class="plan.color" :plan="plan.plan" @click="buyPlan" v-text="plan.plan"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    
  </v-main>
</template>

<script>
export default {
  name: "Consultas",
  data() {
    return {
      planes: [
        {
          img: "",
          name: "Plan Free",
          description: "1 Consulta Gratis",
          plan: "free",
          cost: "$0.0",
          color: "success"
        },
        {
          img: "",
          name: "Plan Medium",
          description: " 1 Consulta Diaria",
          plan: "medium",
          cost: "$25.0",
          color: "warning"
        },
        {
          img: "",
          name: "Plan Premiun",
          description: "Consulta y Diagnostico",
          plan: "premiun",
          cost: "$100.00",
          color: "primary"
        }
      ]
    };
  },
  methods: {
    buyPlan(e) {
      console.log(e.target.getAttribute("plan"));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>