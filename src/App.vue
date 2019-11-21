<template>
  <div id="app">
    <router-view/>
    <div id="bottom">
      <Icon/>
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
  import Nav from "./components/Nav.vue"
  import Icon from "./components/Icon.vue"

  export default {
    components: {Nav, Icon}
  }
</script>

<style scoped lang="scss">
  @import "assets/styles/reset";
  @import "assets/styles/vars";
  #app {
    font-family: $font-hei;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
