<template>
  <div class="home_container">
    <left-nav></left-nav>
    <order-nav ></order-nav>
    <goods-nav :goods='goodsHot'></goods-nav>
  </div>
</template>
<script>
import GoodsNav from './childComponents/GoodsNav.vue'
import LeftNav from './childComponents/LeftNav.vue'
import OrderNav from './childComponents/OrderNav.vue'
  export default {
    name:'Home',
    data(){
      return {
        goodsHot:[]
      }
    },
    components:{
      LeftNav,
      OrderNav,
      GoodsNav
    },
    created(){
      this.$http.get('/goods/host').then((res)=>{
          this.goodsHot = res
          console.log(res)
      })

    }
  }
</script>
<style>
  .home_container{
    display:flex;
    height:100%;
  }
</style>
