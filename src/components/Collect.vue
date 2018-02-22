<template>
  <div>
    <m-header>购物车</m-header>
    <ul class="content">
      <li v-for="(item,index) in cartList" :key="index">
        <img :src="item.bookCover" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {mapState,mapGetters} from 'vuex';

  export default {
    name: "collect",
    components: {
      MHeader
    },
    mounted(){
      console.log(this.count);
    },
    computed: {
      ...mapState(['cartList']),
      ...mapGetters(['count']),
    }
  };
</script>

<style scoped>

</style>
