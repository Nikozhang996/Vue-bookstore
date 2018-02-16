<template>
  <div class="detail">
    <my-header>详细</my-header>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" id="bookInfo" v-model="book.bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的信息</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </li>
      <li>
        <button>确认修改</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {findOneBook} from '../api';

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
    methods:{
      async _findOneBook(){
        this.book = await findOneBook(this.curId);
        console.log(this.book);
      }
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
    ul {
      margin-top: 40px;

    }
  }
</style>
