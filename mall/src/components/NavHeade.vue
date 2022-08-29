<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-hearder"></div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script> 
<style lang="scss">
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      display: flex; //:设置元素两边对齐  中间居中
      justify-content: space-between; //水平方向居中
      align-items: center; //垂直方向居中
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 4px   ;
          background: url("/public/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
}
</style>
