<template>
  <div id="counters">
    <TokenAddress :token="token" />
    <div class="p-grid p-jc-center p-mx-0 p-my-0">
      <Card class="counters-card p-col-12 p-lg-3">
        <template #content>
          <div class="counter">
            <i class="fad fa-hand-holding-water p-mr-3"></i>
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
          <span> MUSA holders </span>
        </template>
      </Card>
      <Card class="counters-card p-col-12 p-lg-3 p-mx-lg-3 p-my-4 p-my-lg-0">
        <template #content>
          <div class="counter">
            <i class="fad fa-shopping-cart p-mr-3"></i>
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
          <span> MUSA Marketcap </span>
        </template>
      </Card>
      <Card class="counters-card p-col-12 p-lg-3">
        <template #content>
          <div class="counter">
            <i class="fad fa-coins p-mr-3"></i>
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
          <span>MUSA price per coin </span>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Vue3Autocounter from "vue3-autocounter";
import TokenAddress from "./TokenAddress.vue";

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
  props: {
    token: Object,
  },
  components: {
    Autocounter: Vue3Autocounter,
    TokenAddress,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
#counters {
  background: #f0eef4;
  padding: 4rem 1rem 1rem 1rem;
  min-height: 100vh;
  .p-card.p-component {
    background-color: $bg-transparent;
    padding: 1rem;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.781);
    i.fa-coins {
      color: $text-secondary;
    }
    i.fa-hand-holding-water {
      color: #6868db;
    }
    i.fa-shopping-cart {
      color: #628f48;
    }
    .p-card-body {
      padding: 0 !important;
    }
    .counter {
      font-size: 2.5rem;
    }
  }
}
</style>
