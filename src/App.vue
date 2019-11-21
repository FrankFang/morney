<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
  import Home from '@/views/Home.vue'

  export default {
    components: {Home}
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
