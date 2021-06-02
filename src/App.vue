<template>
  <div id="header">
    <Header />
  </div>
  <div id="main">
    <Home />
  </div>
  <div id="footer">
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
@import "assets/scss/style.scss";
</style>
