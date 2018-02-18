<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive v-if="$route.meta.keepalive" keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
  import 'rest-css'
  import Tab from './base/Tab'

  export default {
    name: 'App',
    components: {
      Tab
    },
    create () {
    }
  }
</script>

<style>
  body {
    /*color: white;*/
    background-color: #f9f9f9;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }

  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
