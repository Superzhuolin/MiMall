<template>
  <div>
    <router-view></router-view>
    <nav-footer></nav-footer>
    <nav-header></nav-header>
  </div>
</template>
<script>
import NavHeader from "./../components/NavFooter.vue";
import NavFooter from "./../components/NavHeade.vue";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>
