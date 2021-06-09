<template>
  <div class="container">
    <div class="slogan">
      <Slogan />
    </div>
    <div class="token-address">
      <TokenAddress :token="token" />
    </div>
    <div class="counters">
      <Counters />
    </div>
    <div class="poocoin">
      <!-- <iframe
      src="https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09"
      frameborder="0"
      class="myIframe"
    ></iframe> -->
    </div>
    <div id="our-project" class="our-project">
      <h3 class="p-my-0">OUR PROJECT</h3>
    </div>
    <div class="roadmap">
      <Roadmap />
    </div>
    <div class="howtobuy">
      <HowToBuy />
    </div>
    <div class="developers">
      DEVS--SPACE
      <!-- <input v-model.number="number" type="number" step="20" />
      {{ animatedNumber }} -->
    </div>
  </div>
</template>
<script>
import Counters from "../components/Counters.vue";
import Roadmap from "../components/Roadmap.vue";
import Slogan from "../components/Slogan.vue";
import TokenAddress from "../components/TokenAddress.vue";
import HowToBuy from "../components/HowToBuy.vue";
// import { gsap } from "gsap";
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
  // // // // watch: {
  // // // //   number(newValue) {
  // // // //     gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
  // // // //   }
  // // // },
  // // computed: {
  // //   animatedNumber() {
  // //     return this.tweenedNumber.toFixed(0);
  // //   }
  // },
  components: {
    Counters,
    Roadmap,
    Slogan,
    TokenAddress,
    HowToBuy,
  },
  methods: {
    onScroll() {
      //console.log(e);
      this.windowTop = window.top.scrollY;
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss" scoped>
.myIframe {
  height: 60vh;
  width: 60vw;
}
.token-address {
  background: linear-gradient(to right, #aaaaaab9, #2b2b2bb9);
}
.slogan {
  background-color: rgba(0, 0, 0, 0.699);
  // margin: 1rem 1rem 1rem 1rem;
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
</style>
