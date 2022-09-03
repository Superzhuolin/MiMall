// 订单
<template>
  <div class="product">
    <!-- 引入产品参数组件 -->
    <product-param>
      <!-- v-slot:xxx（可简写为#xxx） -->
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
export default {
  name: "Product",
  components: { ProductParam },
};
</script>
<style lang="scss">
.product {
  .h{
    height: 150px;
  }
  button {
    margin-left: 10px;
  }
}
</style>
