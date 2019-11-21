<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  try {importAll(require.context('../assets/icons/', true, /\.svg$/))} catch (error) {console.log(error)}


  @Component({
    props: {
      name: String
    }
  })
  export default class Icon extends Vue {
  }
</script>
<style scoped lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>