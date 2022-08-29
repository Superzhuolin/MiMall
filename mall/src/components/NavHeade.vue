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
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RemMi红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script> 
<style lang="scss">
@import "/src/assets/scss/base.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
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
          margin-right: 4px;
          background: url("/public/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      display: flex; //:设置元素两边对齐  中间居中
      justify-content: space-between; //水平方向居中
      align-items: center; //垂直方向居中
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ""; //占位 生成伪类
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/public/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: margin 0.2s; //过渡动画
          }
          &:after {
            content: ""; //占位 生成伪类
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/public/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s; //过渡动画
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 220px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          span {
            cursor: pointer; //鼠标带手
          }
          &:hover{
            
          }
        }
      }
    }
  }
}
</style>
