<template>
  <!-- <transition appear="animate__animated animate__slideInUp" appear-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutDown">
      <div
        class="full-y bg-darkfull"
        v-if="fakeLoading"
      > -->
  <!-- <BreedingRhombusSpinner
          id="spinner"
          :animation-duration="1500"
          :size="64"
          color="#b193c9"
        />
     </div>
    </transition> -->
  <!-- <div v-if="!fakeLoading"> -->
  <div id="header">
    <Header />
  </div>
  <div id="main">
    <Home />
  </div>
  <div id="footer">
    <Footer />
  </div>
  <!-- </div> -->
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue";
// import { BreedingRhombusSpinner } from "epic-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  data() {
    return {
      fakeLoading: false
    };
  },
  components: {
    Header,
    Home,
    Footer
    // BreedingRhombusSpinner,
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    AOS.init();
    if (this.isMobile()) {
      this.fakeLoading = true;
      setTimeout(() => {
        this.fakeLoading = false;
      }, 4000);
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/app.scss";
@import "assets/scss/style.scss";
</style>
