<template>
  <div>
    <order-header title="购物车">
      <template v-slot:tip>
        <span>温习提示:产品是否购买成功,以最终下单为准,请尽快结算</span>
      </template>
    </order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader.vue";
import NavFooter from "./../components/NavFooter.vue";
export default {
  name: "cart",
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>
