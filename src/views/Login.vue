<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-btn icon @click="returnPage">
                  <v-icon>fas fa-arrow-left</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-title>LOGIN FORM</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    v-model="usuario"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="passsword"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      passsword: ""
    };
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    },
    login() {
      console.log(this.usuario, this.passsword);
    }
  }
};
</script>