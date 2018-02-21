<template>
  <div id="home">
    <my-header :back="true">首页</my-header>
    <div class="content">
      <loading v-if="loading">疯狂加载中……</loading>
      <template v-else="loading">
        <swiper :swiperSlides="sliders"></swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(book,index) in hotBooks" :key="index">
              <div>
                <img :src="book.bookCover" alt="">
                <span class="book-price">{{book.bookName}}</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import Swiper from '../base/Swiper';
  import Loading from '../base/Loading';
  import {getSliders, getHotBooks, getAll} from "../api";

  export default {
    name: "home",
    components: {
      MyHeader: MHeader,
      Swiper,
      Loading
    },
    data () {
      return {
        loading: true,
        sliders: [],
        hotBooks: []
      };
    },

    /*async和await配合，await必须返回一个Promise对象*/
    created () {

      this._getAllData();
    },
    methods: {
      async _getSliders () {
        this.sliders = await getSliders();
        // getSliders().then(res => this.sliders = res);
      },
      async _getHotBooks () {
        this.hotBooks = await getHotBooks();
      },
      async _getAllData () {
        let [sliders, hotBooks] = await getAll();
        this.sliders = sliders;
        this.hotBooks = hotBooks;

        this.loading = false;
      }
    }
  };
</script>

<style scoped lang="less">
  .container {
    width: 90%;
    margin: 0 auto;
    h3 {
      font-size: 1.4rem;
      margin: 4% 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 46%;
        margin: 2%;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        text-align: center;
        div {
          padding: 10px;
          img {
            width: 100%;
          }
          .book-price {
            display: block; /*内联对象需加*/

            word-break: keep-all; /* 不换行 */

            white-space: nowrap; /* 不换行 */

            overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */

            text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
          }
        }
      }
    }
  }
</style>
