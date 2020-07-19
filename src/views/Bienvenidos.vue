<template>
  <v-main>
    <v-row>
      <v-carousel class="mx-3">
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
          src="../assets/portada.jpg"
        ></v-carousel-item>
        <v-carousel-item
          reverse-transition="fade-transition"
          transition="fade-transition"
          src="../assets/portada.jpg"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="6">
        <v-card height="100%" class="pb-2">
          <v-container fluid>
            <h1 class="text-center">GALERIA</h1>
            <v-row>
              <v-col
                v-for="(image,index) in gallery"
                :key="index"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex">
                  <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6">
        <v-card class="mb-2" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">NUESTRO PERSONAL</v-card-title>

              <v-card-subtitle>Un equipo de profesionales con más de 20 años de experiencia son nuestro principal valor. Actualmente el equipo dispone de:</v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
            </v-avatar>
          </div>
        </v-card>

        <v-card class="mb-2" color="#385F73" dark>
          <v-card-title class="headline">Principios</v-card-title>

          <v-card-subtitle>Nuestro centro abrió las puertas en el año 1990, pero a los tres años y para poder ofrecer un mejor servicio, nos trasladamos en el local actual, que hemos ido actualizando no sólo a nivel de imagen sino con los equipos de tecnología puntera para ofrecer un servicio completo a vuestras mascotas. Tanto es así que también os ofrecemos el servicio de urgencias 24 horas.</v-card-subtitle>

          <v-card-actions>
            <v-btn text>VER PDF</v-btn>
          </v-card-actions>
        </v-card>

        <v-card dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">NUESTRO PERSONAL</v-card-title>

              <v-card-subtitle>Un equipo de profesionales con más de 20 años de experiencia son nuestro principal valor. Actualmente el equipo dispone de:</v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <h2 class="pa-3 text-uppercase">Donde nos Encuentras</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7762.65118763159!2d-76.14302298180422!3d-13.39215449695092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x911016fb9ba2e5e7%3A0x7feb7135b961b004!2zRmUgeSBBbGVncsOtYSBOwrozMA!5e0!3m2!1ses-419!2spe!4v1594843311070!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "Bienvenidos",
  data: () => {
    return {
      imagesSlides: ["../assets/portada.jpg", "../assets/portada.jpg"],
      gallery: [
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg",
        "../assets/1.jpg"
      ]
    };
  }
};
</script>