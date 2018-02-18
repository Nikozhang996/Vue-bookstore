<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
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
      <loading v-show="isLoading"></loading>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader';
  import Loading from '../base/Loading';
  import {getAllBooks, pagination, removeBook} from "../api";

  export default {
    name: "list",
    components: {
      MHeader,
      Loading,
    },
    data () {
      return {
        books: [],
        offset: 0,
        hasMore: true,
        isLoading:false
      };
    },
    created () {
      this._getAllBooks();
    },
    mounted(){
      let scroll = this.$refs.scroll;
      let top = scroll.offsetTop;
      scroll.addEventListener('touchstart',(ev)=>{
        let start = ev.touches[0].pageY;
        scroll.addEventListener('touchmove', (ev) => {
          let current = ev.touches[0].pageY;

        },false);
        console.log(start);
      },false);
    },
    methods: {
      moreBook(){
        this._getAllBooks();
      },
      async _getAllBooks () {
        if(this.hasMore && !this.isLoading) {   //防止用户多次点击改善多次请求
          this.isLoading = true;
          let {hasMore, books} = await pagination(this.offset);
          this.books = [...this.books,...books];
          this.hasMore = hasMore;
          this.offset = this.books.length;
          this.isLoading = false;
        }
      },
      async _removeBook (id) {
        // await removeBook(id);  // 删除后台数据
        this.books = this.books.filter(item => item.bookId !== id);
      },
      loadMore(){
        /*
        * 此处需要函数节流思想，防止多次出发事件导致性能消耗
        * */
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let{scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
          if (scrollTop+clientHeight+20>scrollHeight) {
            this._getAllBooks();
          }
          console.log(this.$refs.scroll.scrollTop);
        },100);
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
