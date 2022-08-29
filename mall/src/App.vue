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
    //本地加载请求json文件形式
    // this.axios.get("/mock/user/login.json").then((res)=>{
    //   this.res=res;
    // });
    //通过easy-mock平台实现数据mock
    // this.axios.get("/user/login").then((res)=>{
    //   this.res=res;
    // });
    //本地集成mock js实现mock
    this.axios.get("/user/login").then((res)=>{
      this.res=res;
    });
  },
};
// {"user":{"userName":"jack","age":30,"sex":1}}
</script>
<style>
</style>
