<template>
  <v-card class="chatboot" height="350" min-width="250">
    <header class="primary chatboot-header">
      <span class="chatboot-header-title">Asesores</span>
    </header>
    <section class="chatboot-body">
      <div class="chatboot-body-chat">
        <div class="chatboot-body-chat-admin">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <span>Hola En que puedo Ayudarte?</span>
        </div>
        <div class="chatboot-body-chat-user">
          <span>Hola En que puedo Ayudarte?</span>
        </div>
        <div class="chatboot-body-chat-user">
          <span>Hola En que puedo Ayudarte?</span>
        </div>
        <div class="chatboot-body-chat-admin">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <span>Hola En que puedo Ayudarte?</span>
        </div>
         <div class="chatboot-body-chat-user">
          <span>Hola En que puedo Ayudarte?</span>
        </div> <div class="chatboot-body-chat-user">
          <span>Hola En que puedo Ayudarte?</span>
        </div>
      </div>
      <div class="chatboot-body-input">
        <input type="text" v-model="message" />
        <v-icon style="cursor:pointer;" color="primary">fas fa-paper-plane</v-icon>
      </div>
    </section>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}
.chatboot {
  position: absolute;
  right: 0;
  bottom: 75px;
  .chatboot-header {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .chatboot-body {
    height: 300px;
    background: white;
    .chatboot-body-chat {
      height: 250px;
      overflow-y: scroll;
      font-size: 14px;
      color: white;

      .chatboot-body-chat-admin {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 5px;
        span {
          background-color: #1976d2 !important;
          border-color: #1976d2 !important;
          border-radius: 10px;
          text-align: center;
          margin-left: 5px;
          padding: 5px 8px;
        }
      }
      .chatboot-body-chat-user {
        margin-bottom: 15px;
        span {
          background-color: #1976d2 !important;
          border-color: #1976d2 !important;
          border-radius: 10px;
          text-align: center;
          margin-left: 5px;
          padding: 5px 8px;
          position: relative;
          left: 25px;
          max-width: 165px;
          width: 165px;
        }
      }
    }
    .chatboot-body-input {
      height: 50px;
      background: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 250px;
      max-width: 250px;
      width: 250px;

      input[type="text"] {
        border-radius: 20px;
        background: white;
        border: 1px solid #1976d2 !important;
        height: 40px;
        outline: none;
        padding: 0 5px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {}
  }
};
</script>