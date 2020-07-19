<template>
  <v-navigation-drawer :stateless="false" dark v-model="$store.state.navigadionDrawer" app>
    <v-list nav>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>YAVB-CODE</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item-group v-model="item">
        <v-list-item v-for="(item,index) in items" :key="index">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      item: 1,
      items: [
        {
          text: "Profile",
          icon: "fa fa-lock"
        },
        {
          text: "Profile",
          icon: "fa fa-lock"
        },
        {
          text: "INISIAR SESSION",
          icon: "fa fa-lock"
        }
      ],
      isDrawer: false
    };
  },
  props: {},
  watch: {},
  computed: {}
};
</script>