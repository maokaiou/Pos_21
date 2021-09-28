<template>
  <div class="order-container" id="abc">
    <el-row>
        <el-row>
          <el-tabs>
            <el-tab-pane label="点餐" name="first">
              <el-table :data="tableData"
                max-height="250"
                border
                stripe
              >
                  <el-table-column label="商品名称" prop="goodsName" fixed >

                  </el-table-column>
                  <el-table-column label="金额" prop="price">

                  </el-table-column>
                  <el-table-column label="数量" prop="counts"></el-table-column>
                  <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                      <el-button type="text"
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      >移除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="挂单" name="third">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖" name="second">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row>
          <el-button type="info">结账</el-button>
          <el-button type="info">挂单</el-button>
          <el-button type="info">删除</el-button>
        </el-row>
    </el-row>
  </div>
</template>
<script>
 export default{
   data(){
     return{
       tableData:[
         {
           goodsName:"香干炒肉",
            price:17,
            counts:1,
         },
          {
           goodsName:"可乐",
            price:6,
            counts:3,
         },
          {
           goodsName:"虎皮青椒",
            price:14,
            counts:1,
         },
          {
           goodsName:"虎皮青椒",
            price:14,
            counts:1,
         },
          {
           goodsName:"虎皮青椒",
            price:14,
            counts:1,
         }
       ]
     }
   },
   methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
 }
</script>
<style>
  .order-container {
    background-color: #F9FAFC;
    border-right:1px solid #C0CCDA;
    width:30%;
    font-size:15px;
    box-sizing: border-box;
    padding:5px 8px;
  }
   .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
