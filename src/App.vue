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
    cryptowallet@drillwallet.it
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
.fa-facebook{
  color: #3b5998;
}
.fa-instagram{
  background-color: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);

}
.fa-twitter{
color: #7ee1ff;
}
.fa-discord{
color: #777777;

}
@import "assets/scss/app.scss";
@import "assets/scss/style.scss";
</style>
