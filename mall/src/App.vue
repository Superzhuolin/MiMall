<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "App",
  components: {},

  data() {
    return {};
  },
  mounted() {
    // storage.setItem("a", 1);
    // storage.setItem("user", { d: 5 });
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("a");
    storage.clear("d", "user");
  },
};
// {"user":{"userName":"jack","age":30,"sex":1}}
</script>
<style>
</style>
