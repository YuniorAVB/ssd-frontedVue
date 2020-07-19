<template>
  <v-app>
    <AppBar>
      <v-main>
        <slot></slot>
      </v-main>
    </AppBar>
    <ButtonFloat></ButtonFloat>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from "../components/user/AppBar";
import Footer from "../components/user/Footer";
import ButtonFloat from "../components/user/ButtonFloat";
export default {
  name: "DashBoardUserLayout",
  components: {
    AppBar,
    Footer,
    ButtonFloat
  }
};
</script>
