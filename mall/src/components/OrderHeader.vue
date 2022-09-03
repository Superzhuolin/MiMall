// 购物车头部组件
<template>
  <div class="order-header">
    <!-- 设置最大宽度 :防止超出此区域-->
    <div class="container clearfix" >
        <!-- logo -->
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <!-- 标题 -->
        <div class="title">
          <h2>我的购物车
            <span>温习提示:产品是否购买成功,以最终下单为准,请尽快结算</span>  
          </h2> 
        </div>
        <!-- 用户名称  右浮动 -->
        <div class="username">
          <a href="javascript:;">Jack</a>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
};
//
</script>
<style  lang="scss">
.order-header{
  padding: 30px 0;
  .header-logo{
    float: left;
  }
  .title,.username{
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title{
    font-size: 28px;
    float: left;
    color: #333333;
    margin-left: 54px;
    span{
      font-size: 14px;
      margin-left: 17px;
      color: #999999;
      font-weight: bold;
    }
  }
  .username{
    float: right;
    a{
      color: #666666;
      font-size: 16px;
    }  
  }
}
</style>>

