<template>
  <div class="container">
    <span class="slogan">
      <Slogan />
    </span>
    <div class="token-address">
      <h3>Token address:</h3>
      <span class="token">{{ token.address }}</span>
    </div>
    <div class="counters">
      <Counters />
    </div>
    <div class="poocoin">
      <Button icon="fas fa-poo" class="p-button-help" label="Poocoin.com" />
      <!-- <iframe
      src="https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09"
      frameborder="0"
      class="myIframe"
    ></iframe> -->
    </div>
    <div class="our-project">
      <h3>OUR PROJECT</h3>
    </div>
    <div class="roadmap">
      <Roadmap />
    </div>
    <div class="developers">
      DEVS--SPACE
    </div>
  </div>
</template>

<script>
import Counters from "../components/Counters.vue";
import Roadmap from "../components/Roadmap.vue";
import Slogan from "../components/Slogan.vue";
export default {
  name: "Home",
  data() {
    return {
      token: {
        address: "0x83testdf1a7c56e7test7d321312TEST52e0a2aad0e",
      },
    };
  },
  components: {
    Counters,
    Roadmap,
    Slogan,
  },
};
</script>
<style lang="scss" scoped>
.myIframe {
  height: 60vh;
  width: 60vw;
}
.token-address {
  margin: 1rem 1rem 1rem 1rem;
}
.token {
  color: black;
  padding: 0.4rem;
  border-radius: 10px;
  background-color: rgba(51, 48, 48, 0.582);
}
.counters {
  margin: 4rem 1rem 4rem 1rem;
}
.poocoin {
  margin: 1rem 1rem 1rem 1rem;
}
.container {
  padding: 5rem;
}
</style>
