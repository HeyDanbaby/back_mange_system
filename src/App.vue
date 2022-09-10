<template>
  <div id="app">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="right">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
export default {
  components: { Menu, Header },
};
</script>

<style lang="scss">
@import url("@/assets/common.css");
#app {
  display: flex;
  height: 100%;
  .right {
    width: 100%;
  }
}
</style>
