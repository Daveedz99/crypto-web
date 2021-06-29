<template>
  <div class="container">
    <Slogan />
    <div class="section">
      <Counters :token="token" />
    </div>
    <Social id="socialbox" />
    <!-- <div class="poocoin"> 
      <iframe
      src="https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09"
      frameborder="0"
      class="myIframe"
    ></iframe> 
    </div>-->
    <div id="our-project" class="section our-project">
    <OurProject />
    </div>
    <div class="section">
      <Roadmap />
    </div>
    <div class="section">
      <HowToBuy />
    </div>
    <div class="section">
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
import OurProject from "../components/OurProject.vue";

export default {
  name: "Home",
  data() {
    return {
      windowTop: null,
      number: 0,
      tweenedNumber: 0,
      token: {
        address: "0x83testdf1a7c56e7test7d321312TEST52e0a2aad0e",
      },
    };
  },
  props: {
    anchor: {
      type: String,
    },
  },
  components: {
    Counters,
    Roadmap,
    Slogan,
    HowToBuy,
    Social,
    Developers,
    OurProject
  },
  methods: {
    // //PARALLAX EFFECT DA RIVEDERE for each section
    //     handleScroll() {
    //      let el = document.getElementsByClassName("section3");
    //       new simpleParallax(el, {
    //         orientation: "up",
    //         overflow: true,
    //         scale: 1.5,
    //         transition: "cubic-bezier(0,0,0,1)",
    //       });
    //    },
    //  },
    //   beforeUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    //   },
    //   mounted() {
    //     window.addEventListener("scroll", this.handleScroll);
    //   },
  }
};
</script>
<style lang="scss" scoped>
$prim: #af96c4;
.container {
  overflow-x: hidden;
  .section {
    min-height: 100vh;
    position: relative;
  }
  .our-project {
    padding: 2rem 0rem 2rem 0rem;
  }
  .p-button {
    z-index: 0;
  }
  .p-scrolltop {
    z-index: 10 !important;
    background: linear-gradient(-45deg, #ee76528c, #e73c7e86, #23a5d586, #23d5ab7a);
    &:hover{
      background: linear-gradient(-45deg, #ee7652d0, #e73c7eb8, #23a5d5bf, #23d5abb1);
    }
  }
  .p-scrolltop.p-link {
    left: 1rem;
    @media only screen and (max-width: 600px) {
      max-width: 35px;
      max-height: 35px;
    }
  }
}
 
</style>
