<template>
  <v-app-bar dark app clipped-right dense :collapse-on-scroll="true">
    <v-app-bar-nav-icon @click="drawerClick"> </v-app-bar-nav-icon>
    <v-toolbar-title>Sistema-SDD</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/favorite">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: true
  }),
  methods: {
    drawerClick() {
      this.drawer = !this.drawer;
      this.$store.commit("toggleNavigationDrawer", this.drawer);
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.search = false;
    });
  }
};
</script>