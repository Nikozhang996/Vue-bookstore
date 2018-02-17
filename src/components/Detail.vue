<template>
  <div class="detail">
    <my-header>详细</my-header>
    <ul class="booksList">
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" id="bookInfo" v-model="book.bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </li>
      <li>
        <button @click="update">确认修改</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {findOneBook,updataBook} from '../api';

  export default {
    name: "detal",
    components: {
      myHeader: MHeader
    },
    data () {
      return {
        book: {}
      };
    },
    created () {
      this._findOneBook();
    },
    watch:{
      $route(){
        this._findOneBook();
        // this.$router.push('/list');
      }
    },
    methods:{
      async update(){
        await updataBook(this.curId,this.book);
        this.$router.push('/list');
      },
      async _findOneBook(){
        this.book = await findOneBook(this.curId);

        // 如果请求不存在，则返回list页
        if (!Object.keys(this.book).length){
          this.$router.push('/list');
        }
      },

    },
    computed: {
      curId () {
        return this.$route.params.curId;
      }
    }
  };
</script>

<style scoped lang="less">
  .detail {
    /*覆盖整个页面*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    .booksList {
      /*margin-top: 40px;*/
      margin: 50px 20px 0 20px;
      li{
        label{
          display: block;
          font-size: 26px;
        }
        input {
          width: 100%;
          height: 26px;
          border: 2px solid #666;
        }
        button {

        }
      }
    }
  }
</style>
