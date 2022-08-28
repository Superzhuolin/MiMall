<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";
export default {
  name: "App",
  components: {},

  data() {
    return {};
  },
  mounted() {
    // storage.setItem("a", 1);
    storage.setItem("user", { a: 1 });
  },
};
// {"user":{"userName":"jack","age":30,"sex":1}}
</script>
<style>
</style>
