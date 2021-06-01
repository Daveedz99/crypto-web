<template>
  <div class="container">
    <div class="p-d-flex p-jc-center">
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
            {{ "#" + counters.holders }}
          </div>
          <span> Drill Wallet holders </span>
        </template>
      </Card>
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
            {{ counters.marketCap }}
          </div>
          <span> Drill Wallet holders </span>
        </template>
      </Card>
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
            {{ counters.pricePer }}
          </div>
          <span> Drill Wallet holders </span>
        </template>
      </Card>
    </div>

    <h1>Roadmap</h1>

    <!-- <iframe
      src="https://poocoin.app/tokens/0x1e5f009d4f8ca44b5fcc4963dd301da82b4eed09"
      frameborder="0"
      class="myIframe"
    ></iframe> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      counters: {
        holders: 0,
        marketCap: 0,
        pricePer: 0,
      },
    };
  },
};
</script>
<style lang="scss">
.myIframe {
  height: 60vh;
  width: 60vw;
}
.p-card {
  width: 20rem;
  margin-right: 2em;
  .p-card-body {
    padding: 0 !important;
  }
  .counter {
    font-size: 2rem;
  }
}
</style>
