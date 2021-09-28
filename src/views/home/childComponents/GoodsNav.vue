<template>
  <div class="goods_nav_container">
    <div class="goods_hot">
      <div class="goods_title">
        常用
      </div>
      <ul>
        <li v-for="(item,index) in goods" :key="index">
          <img :src="item.img" alt="">
          <div>
            <span>￥{{item.price}}</span>
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="goods_type">
      <el-tabs type="border-card">
        <el-tab-pane >
          <span slot="label"><i class='el-icon-dish'></i> 菜品</span>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label"><i class='el-icon-milk-tea'></i> 饮料</span>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label"><i class='el-icon-tableware'></i> 饭</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default{
     props:{
      goods:{
        type: Array
      }
   }
  }
</script>
<style>
  .goods_nav_container {
    background-color: #eee;
    width:65%;
    height:350px;
  }
  .goods_nav_container .goods_hot{
    height:100%;
     border-bottom: 1px solid #333;
  }
   .goods_hot .goods_title{
     font-size:20px;
      padding:8px 2px;
      text-align: left;
      background-color: #F9FAF2;
      border-bottom: 1px solid #E5E9F2;
   }
 .goods_hot ul{
    display:flex;
    flex-wrap: wrap;
    font-size:14px;
  }
  .goods_hot ul li{
    margin:10px;
    justify-content: space-around;
    align-items: center;

  }

  .goods_hot ul li img{
    width:60px;
    height:40px;
  }

</style>

