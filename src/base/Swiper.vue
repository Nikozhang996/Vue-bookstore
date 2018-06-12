<template>
  <swiper :options="swiperOption" @someSwiperEvent="fn">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: ['swiperSlides'],
    data () {
      return {
        timer: null,
        swiperOption: {
          autoplay: {
            delay: 2000
          },
          effect: 'coverflow',
          pagination: {
            el: '.swiper-pagination'
          }
        }
      };
    },
    methods: {
      fn() {
        console.log(this);
      }
    },
    mounted () {

    },
    destroyed() {

    }
  };
</script>

<style scoped>
img{
  width: 100%;
}
</style>
