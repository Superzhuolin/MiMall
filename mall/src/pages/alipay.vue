<template>
  <div class="ali-pay">
     
  </div>
</template>
<script>
export default {
  name: "alipay",
  data(){
      return{
        orderId:this.$route.query.orderId,
        content:""
      }
  },
  mounted(){
    this.paySubmit();
  },
  methods:{
    paySubmit(){
      this.axios.post("/pay",{
        orderId:this.orderId,
        orderName:"Vue高仿小米商城", //扫码支付时订单名称
        amount:0.01, //单位元
        payType:1 //1支付宝，2微信
      }).then((res)=>{//res就是data
        this.content =res.content;
      })
    }
  }
};
</script>
 