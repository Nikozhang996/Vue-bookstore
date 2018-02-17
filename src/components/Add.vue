<template>
  <div id="add">
    <MHeader>添加</MHeader>
    <div class="content">
      <ul class="addBook">
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
          <button @click="addBook">确认添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {addBook} from "../api";

  export default {
    name: "add",
    components: {
      MHeader
    },
    data () {
      return {
        book:{}
      }
    },
    methods:{
      async addBook(){
        await addBook(this.book);
        console.log(navigator);
        this.$router.push('/list');
      }
    }
  }
</script>

<style scoped lang="less">
  .addBook {
    margin: 50px 20px 0 20px;
    li {
      label {
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
</style>
