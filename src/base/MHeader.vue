<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
  </div>
</template>

<script>
  export default {
    name: "m-header",
    props: {
      back: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    methods: {
      goBack () {
        console.log(this.$router);
        this.$router.go(-1);
      }
    }
  };
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #96ff9e;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }
  }
</style>
