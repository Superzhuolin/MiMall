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
    return {
      res:{}
    };
  },
  mounted() {
    this.axios.get("/mock/user/login.json").then((res)=>{
      this.res=res;
    });
  },
};
// {"user":{"userName":"jack","age":30,"sex":1}}
</script>
<style>
</style>
