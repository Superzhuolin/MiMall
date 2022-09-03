<template>
  <div class="nav-bar">
    <div class="container">
      <!-- 标题栏 -->
      <div class="pro-title">小米8</div>
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
  data(){

  },
  mounted(){
    // window.addEventListener("scroll",this.inintHeight)
  },
  methods:{

  }
};

</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid $colorH;
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
