<template>
  <div class="p-grid p-jc-center p-mx-0 p-my-0">
    <Card class="counters-card p-col" :style="{ backgroundColor: '#26232c' }">
      <template #content>
        <div class="counter">
          <i class="fas fa-hand-holding-water"></i>
          <Autocounter
            ref="counter"
            :startAmount="0"
            :endAmount="counters.holders"
            :duration="3"
            prefix=""
            suffix=""
            separator=""
            decimalSeparator=""
            :decimals="0"
            :autoinit="true"
          />
        </div>
        <span> Drill Wallet holders </span>
      </template>
    </Card>
    <Card
      class="counters-card p-col p-mx-0 p-mx-md-3"
      :style="{ backgroundColor: '#26232c' }"
    >
      <template #content>
        <div class="counter">
          <i class="fas fa-shopping-cart"></i>
           <Autocounter
            ref="counter"
            :startAmount="0"
            :endAmount="counters.marketCap"
            :duration="3"
            prefix=""
            suffix=""
            separator=""
            decimalSeparator=""
            :decimals="0"
            :autoinit="true"
          />
        </div>
        <span> Drill Wallet Marketcap </span>
      </template>
    </Card>
    <Card class="counters-card p-col" :style="{ backgroundColor: '#26232c' }">
      <template #content>
        <div class="counter">
          <i class="fas fa-coins"></i>
           <Autocounter
            ref="counter"
            :startAmount="0"
            :endAmount="counters.pricePer"
            :duration="3"
            prefix=""
            suffix=""
            separator=""
            decimalSeparator=""
            :decimals="4"
            :autoinit="true"
          />
        </div>
        <span>Drill Wallet price per coin </span>
      </template>
    </Card>
  </div>
</template>

<script>
import Vue3Autocounter from "vue3-autocounter";

export default {
  name: "Counters",
  data() {
    return {
      counters: {
        holders: 12,
        marketCap: 1231,
        pricePer: 0.0012,
      },
    };
  },
  components: {
    Autocounter: Vue3Autocounter,
  },
};
</script>

<style lang="scss" scoped>
.p-card {
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  .p-card-body {
    padding: 0 !important;
  }
  .counter {
    font-size: 2.5rem;
  }
}
</style>
