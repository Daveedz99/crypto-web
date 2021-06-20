<template>
  <div class="container">
    <div class="slogan">
      <Slogan />
    </div>

    <div class="section counters">
      <Counters :token="token" />
    </div>
    <div class="social">
      <Social />
    </div>
    <div class="poocoin">
      <!-- <iframe
      src="https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09"
      frameborder="0"
      class="myIframe"
    ></iframe> -->
    </div>
    <div id="our-project" class="section our-project">
      <h3 class="p-my-0">OUR PROJECT</h3>
    </div>
    <div class="section3 roadmap">
      <Roadmap />
    </div>
    <div class="section howtobuy">
      <HowToBuy />
    </div>
    <div class="section developers">
      <Developers />
    </div>
    <ScrollTop icon="fad fa-chevron-up" behavior="smooth" :threshold="400" />
  </div>
</template>
<script>
import Counters from "../components/Counters.vue";
import Roadmap from "../components/Roadmap.vue";
import Slogan from "../components/Slogan.vue";
import HowToBuy from "../components/HowToBuy.vue";
import Social from "../components/Social.vue";
import Developers from "../components/Developers.vue";
// import simpleParallax from "simple-parallax-js";

export default {
  name: "Home",
  data() {
    return {
      windowTop: null,
      number: 0,
      tweenedNumber: 0,
      token: {
        address: "0x83testdf1a7c56e7test7d321312TEST52e0a2aad0e"
      }
    };
  },
  props: {
    anchor: {
      type: String
    }
  },
  components: {
    Counters,
    Roadmap,
    Slogan,
    HowToBuy,
    Social,
    Developers
  },
  methods: {
    //PARALLAX EFFECT DA RIVEDERE for each section
    //    handleScroll() {
    //     let el = document.getElementsByClassName("section3");
    //      new simpleParallax(el, {
    //        orientation: "right",
    //        overflow: true,
    //        scale: 1.5,
    //        transition: "cubic-bezier(0,0,0,1)",
    //      });
    //   },
    // },
    //  beforeUnmount() {
    //    window.removeEventListener("scroll", this.handleScroll);
    //  },
    //  mounted() {
    //    window.addEventListener("scroll", this.handleScroll);
    //  },
  }
};
</script>
<style lang="scss" scoped>
.section {
  min-height: 100vh;
  position: relative;
}
.myIframe {
  height: 60vh;
  width: 60vw;
}
.token-address {
  background: linear-gradient(to right, #aaaaaab9, #2b2b2bb9);
}
.slogan {
  background-color: rgba(0, 0, 0, 0.699);
}
.counters {
  background: linear-gradient(to right, #aaaaaab9, #2b2b2bb9);
  padding: 4rem 1rem 4rem 1rem;
}
.our-project {
  padding: 2rem 0rem 2rem 0rem;
  background-color: rgba(0, 0, 0, 0.699);
}
.roadmap {
  background-color: rgba(204, 0, 245, 0.699);
}
.howtobuy {
  background-color: rgba(126, 91, 255, 0.699);
}
.developers {
  padding: 3rem 1rem 3rem 1rem;
  background-color: rgba(91, 203, 255, 0.699);

  // margin: 1rem 1rem 1rem 1rem;
}
.container {
  overflow-x: hidden;
  // padding: 5rem;
  // @media only screen and (max-width: 600px) {
  //   padding: 2rem;
  // }
}
.p-button {
  z-index: 0;
}
.p-scrolltop {
  z-index: 10 !important;
}
.p-scrolltop.p-link {
  left: 1rem;
  @media only screen and (max-width: 600px) {
    max-width: 35px;
    max-height: 35px;
    opacity: 0.5;
  }
}
</style>
