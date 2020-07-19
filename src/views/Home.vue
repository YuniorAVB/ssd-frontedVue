<template>
  <DashBoardUserLayout>
    <router-view name="home"></router-view>
  </DashBoardUserLayout>
</template>

<script>
import DashBoardUserLayout from "../layouts/DashBoardUserLayout";
export default {
  name: "Home",
  components: {
    DashBoardUserLayout
  }
};
</script>

<style lang="scss">
</style>
