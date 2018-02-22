<template>
  <div>
    <p>当前：{{$store.state.count}}</p>
    <button @click="min">-</button>
    <button @click="add">+</button>
    {{$store.getters.value}}
  </div>
</template>

<script>
  import * as Types from '../store/mutations-types';

  export default {
    name: "counter",
    data () {
      return {
        count: 0
      };
    },
    methods:{
      add(){
        /*调用mutations里的add方法*/
        this.$store.commit(Types.INCREMENT,2);
      },
      min(){
        this.$store.commit(Types.DECREMENT, 1);
      }
    }
  }
</script>

<style scoped>

</style>
