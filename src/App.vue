<template>
  <div id="app">
    <router-view/>
    <div id="bottom">
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
  import Nav from '@/components/Nav.vue'

  export default {
    components: {Nav}
  }
</script>

<style lang="scss">
  @import "assets/styles/reset";
  @import "assets/styles/vars";
  * {box-sizing: border-box;}
  *::before, *::after {box-sizing: border-box}
  a {text-decoration: none; color: inherit;}
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
