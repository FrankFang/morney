<template>
  <nav>
    <router-link class="item" active-class="selected"
                 to="/labels">
      <Icon name="label"/>
      <p>标签</p>
    </router-link>
    <router-link class="item" active-class="selected"
                 to="/money">
      <Icon name="money"/>
      <p>记账</p>
    </router-link>
    <router-link class="item" active-class="selected"
                 to="/statistics">
      <Icon name="chart"/>
      <p>统计</p>
    </router-link>
  </nav>
</template>
<script lang="ts">
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import Icon from '@/components/Icon.vue'

  @Component({
    props: {
    },
    components: {Icon}
  })
  export default class Nav extends Vue {

  }
</script>
<style scoped lang="scss">
  //noinspection CssUnknownTarget
  @import "~@/assets/styles/vars";
  nav {
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 3px $shadow;
    .item {
      padding: 8px 0 4px;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      svg {width: 32px; height: 32px;}
      p {margin: 4px 0;}
      &.selected{
        color: red;
      }

    }
  }
</style>