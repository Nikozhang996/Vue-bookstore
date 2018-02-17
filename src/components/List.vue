<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content">
      <ul @click="getId">
        <router-link
          v-for="(book,index) in books"
          :key="index"
          :to="{
            name:'detail',
            params:{
              curId:book.bookId
            }
          }"
          tag="li">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <p>{{book.bookPrice}}</p>
          </div>
          <button @click.stop="_removeBook(book.bookId)">删除</button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import {getAllBooks, removeBook} from "../api";

  export default {
    name: "list",
    components: {
      MHeader
    },
    data () {
      return {
        books: []
      };
    },
    created () {
      this._getAllBooks();
    },
    methods: {
      async _getAllBooks () {
        this.books = await getAllBooks();
      },
      async _removeBook(id){
        // await removeBook(id);  // 删除后台数据
        this.books = this.books.filter(item => item.bookId !== id);
      },
      getId(){
        // console.log(this.books[1].bookId);
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    ul {
      padding: 10px;
      li {
        display: flex;
        img {
          /*width: 120px;*/
        }
      }
    }
  }

</style>
