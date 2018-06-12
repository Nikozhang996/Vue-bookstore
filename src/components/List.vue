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
          <img v-lazy="book.bookCover">
          <div class="book-content">
            <h4 class="book-name">{{book.bookName}}</h4>
            <p class="book-info">{{book.bookInfo}}</p>
            <p class="book-price">{{book.bookPrice | formatMoney(2,'￥')}}</p>
            <div class="btn-list">
              <button @click.stop="_removeBook(book.bookId)">删除</button>
              <button @click.stop="addCart(book)">添加</button>
            </div>
          </div>
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
  import * as Types from '../store/mutations-type';

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
        isLoading: false
      };
    },
    created () {
      this._getAllBooks();
    },
    mounted () {
      let scroll = this.$refs.scroll;
      let top = scroll.offsetTop;
      let distance = 0;
      let isMove = false;

      scroll.addEventListener('touchstart', (ev) => {
        if (scroll.scrollTop != 0 || scroll.offsetTop != top) {
          return
        }
        let start = ev.touches[0].pageY;  //手指点击的起始位置
        let move = (ev) => {
          isMove = true;
          let current = ev.touches[0].pageY;
          distance = current - start;
          if (distance > 0) {
            if (distance <= 50) {
              scroll.style.top = distance + top + 'px';
            } else {
              distance = 50;
              scroll.style.top = top + 50 + 'px'
            }
          } else {
            // 如果不在考虑满园内，则移除move和end事件
            scroll.removeEventListener('touchmove', move);
            scroll.removeEventListener('touchend', end);
          }
        };

        let end = (ev) => {
          if(!isMove) {
            return;
          }

          isMove = false;
          clearInterval(this.scrollTimer);
          this.scrollTimer = setInterval(() => {
            if (distance <= 0) {
              clearInterval(this.scrollTimer);
              distance = 0;
              scroll.style.top = top + 'px';
              this.books = [];
              this.books = this._getAllBooks();
              this.offset = 0;
              scroll.removeEventListener('touchmove', move);
              scroll.removeEventListener('touchend', end);
              return;
            }
            distance -= 1;
            scroll.style.top = top + distance + 'px';
          }, 10);
        };

        scroll.addEventListener('touchmove', move);
        scroll.addEventListener('touchend', end);
      }, false);
    },
    methods: {
      moreBook () {
        this._getAllBooks();
      },
      async _getAllBooks () {
        if (this.hasMore && !this.isLoading) {   //防止用户多次点击改善多次请求
          this.isLoading = true;
          let {hasMore, books} = await pagination(this.offset);
          this.books = [...this.books, ...books];
          this.hasMore = hasMore;
          this.offset = this.books.length;
          this.isLoading = false;
        }
      },
      async _removeBook (id) {
        // await removeBook(id);  // 删除后台数据
        this.books = this.books.filter(item => item.bookId !== id);
      },
      loadMore () {
        /*
        * 此处需要函数节流思想，防止多次出发事件导致性能消耗
        * */
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this._getAllBooks();
          }
          // console.log(this.$refs.scroll.scrollTop);
        }, 100);
      },
      addCart (book) {
        this.$store.commit(Types.ADD_CART, book);
      },

    }
  };
</script>

<style scoped lang="less">
  .content {
    ul {
      padding: 10px;
      li+li{
        border-top: 1px solid #dddddd;
      }
      li {
        display: flex;
        height: 130px;
        padding: 10px 0;
        img {
          height: 120px;
        }
        .book-content{
          .book-name {
            font-size: 16px;
            font-weight: bold;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .book-info {
            height: 50px;
            overflow: hidden;
            font-size: 14px;
            color: #666666;
            line-height: 16px;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .book-price {
            color: red;
          }
          .btn-list {
            display: flex;
            justify-content: flex-end;
            button {
              display: block;
              width: 44px;
              height: 22px;
              font-size: 14px;
              color: #666666;
              background-color: #8dffb4;
              border-radius: 4px;
              margin-left: 4%;
            }
          }
        }

      }
    }
  }

</style>
