<template>
  <v-app>
    <AppBar></AppBar>

    <NavigationDrawer></NavigationDrawer>

    <v-main>
      <slot></slot>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from "../components/admin/AppBar";
import NavigationDrawer from "../components/admin/NavigationDrawer";
import Footer from "../components/admin/Footer";

export default {
  name: "DashBoardLayout",
  data: () => ({}),
  methods: {},
  components: {
    AppBar,
    NavigationDrawer,
    Footer
  }
};
</script>