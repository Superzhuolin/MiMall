<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if(this.$cookie.get("userId")){//若userId为true,则当前为登录状态
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    //页面刷新后通过mounted(钩子)再次读取用户名
    getUser() {
      this.axios.get("/user").then((res) => {
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res); //刷新后再次保存用户名
      });
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
