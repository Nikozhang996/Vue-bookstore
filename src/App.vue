<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
  import 'rest-css'
  import Tab from './base/Tab'
  export default {
    name: 'App',
    components:{
      Tab
    }
  }
</script>

<style>
  body{
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
</style>
