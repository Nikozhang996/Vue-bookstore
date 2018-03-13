<template>
  <div>
    <m-header>购物车</m-header>
    <ul class="content">
      <li v-for="(item,index) in cartList" :key="index">
        <img :src="item.bookCover" alt="">
        <div class="book-content">
          <h4 class="book-name">{{item.bookName}}</h4>
          <div class="book-info">
            <p class="book-price">{{item.bookPrice | formatMoney(2,'￥')}}</p>
            <p class="book-count">{{item.bookCount}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "collect",
    components: {
      MHeader
    },
    mounted () {
      // console.log(this.count);
    },
    computed: {
      ...mapState([
        'cartList'
      ]),
      ...mapGetters([
        'count'
      ])
    }
  };
</script>

<style scoped lang="less">
  .content {
    padding: 10px;

    li {
      display: flex;
      height: 90px;
      border-bottom: 1px solid #dddddd;
      img {
        height: 80px;
      }

      .book-content {
        width: 66%;
        min-height: 80px;
        /*position: absolute;*/


        .book-name {
          font-size: 16px;
          font-weight: bold;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-info {
          display: flex;
          justify-content: space-between;
          .book-price {
            color: red;
          }
          .book-count{
            color: #67cf22;
          }
        }

      }
    }

  }
</style>
