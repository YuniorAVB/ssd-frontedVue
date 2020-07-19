<template>
  <div class="overflow-hidden">
    <v-app-bar
      absolute
      shrink-on-scroll
      prominent
      src="../../assets/appbar-fondo.png"
      fade-img-on-scroll
      dark
      scroll-target="#scrolling-techniques-3"
      style="z-index:99;"
      height="300px"
      class="appbar-header-user"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props"></v-img>
      </template>

      <v-toolbar-title>PET-SHOP Animal Club</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon to="/login">
        <v-icon>fas fa-user</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/home/welcome">BIENVENIDOS</v-tab>
          <v-tab to="/home/consult">CONSULTAS</v-tab>
          <v-tab to="/home/contac">CONTACTO</v-tab>
          <v-tab to="/home/about">Acerca</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="100vh">
      <v-container class="appbar-container-user">
        <slot></slot>
      </v-container>
    </v-sheet>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.appbar-header-user {
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: url("../../assets/pattern_bg.webp");
    top: 0;
    left: 0;
  }
}

.appbar-container-user {
  height: 100%;
  padding-top: 415px;
  max-width: 1000px;
}

::-webkit-scrollbar {
  display: none;
}
</style>