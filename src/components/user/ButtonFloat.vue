<template>
  <div class="container-button-float">
    <ChatBoot v-show="toggleChat"></ChatBoot>
    <v-btn @click="toggleChat=!toggleChat" fab dark>
      <v-icon>fas fa-paw</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ChatBoot from "./ChatBot";
export default {
  data() {
    return {
      toggleChat: false
    };
  },
  components: {
    ChatBoot
  }
};
</script>
<style lang="scss" scoped>
.container-button-float {
  position: absolute;
  bottom: 75px;
  right: 0;
  margin-right: 50px;
  z-index: 999;
}
</style>