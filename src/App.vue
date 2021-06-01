<template>
  <div id="header">
    <Header />
  </div>
  <div id="main">
    <Home />
  </div>
  <div id="footer" class="p-mr-2 p-as-end">
    <div class="social p-d-flex">
    <i class="fab fa-2x fa-discord"></i>
    <i class="fab fa-2x p-mx-2 fa-facebook"></i>
    <i class="fab fa-2x fa-instagram"></i>
    <i class="fab fa-2x p-ml-2 fa-twitter"></i>
    </div>
  <div class="business-mail">
    LA NOSTRA MAIL
  </div>
  <div class="copyright">
    Copyright © 2021 DrillWallet
  </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
  },
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
@import "assets/scss/style.scss";
</style>
