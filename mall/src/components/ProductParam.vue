// 产品吸顶栏
<template>
  <!-- 动态绑定变量 若isFixed为true加上is_fixed类 -->
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <!-- 标题栏 -->
      <div class="pro-title">{{title}}</div>
      <!-- 参数栏 -->
      <div class="pro-param">
        <a href="javasrcipt:;">概述</a><span>|</span>
        <a href="javasrcipt:;">参数</a><span>|</span>
        <a href="javasrcipt:;">用户评价</a>
        <!-- 插槽(button) -->
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "nav-barr",
  data() {
    return {
      isFixed: false,
    };
  },
  props:{
    title:String
  }
  ,
  mounted() {
    window.addEventListener("scroll", this.inintHeight);//默认通过捕获方式干掉
  },
  methods: {
    inintHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.inintHeight, false);//通过冒泡方式干掉
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG; //设置背景色为白色，盖住背景色
  z-index: 10;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%; //解决宽度不一样导致的样式问题
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex(); //设置左右结构
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold; //加粗
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>
