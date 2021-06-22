<template>
  <div id="counters">
    <TokenAddress :token="token" data-aos="fade-up" data-aos-duration="1500" />
    <div class="p-grid p-jc-center p-mx-0 p-my-0">
      <Card class="counters-card-1 p-col-12 p-lg-3" data-aos="fade-up" data-aos-duration="1500">
        <template #content>
          <div class="counter">
            <i class="fas fa-hand-holding-water p-mr-3"></i>
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
          <span class="detail"> MUSA holders </span>
        </template>
      </Card>
      <Card
        class="counters-card-2 p-col-12 p-lg-3 p-mx-md-1 p-mx-lg-5 p-my-4 p-my-lg-0"
        data-aos="fade-up" data-aos-duration="1500"
      >
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
          <span class="detail"> MUSA Marketcap </span>
        </template>
      </Card>
      <Card class="counters-card-3 p-col-12 p-lg-3" data-aos="fade-up" data-aos-duration="1500">
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
          <span class="detail">MUSA price per coin </span>
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
  padding: 20vh 1rem 1rem 1rem;
  min-height: 100vh;
  .counters-card-1 {
    background-position: left;
  }
  .counters-card-2 {
    background-position: center;
  }
  .counters-card-3 {
    background-position: right;
  }
  .p-card.p-component {
    background-color: $primary-transparent;
    background-image: url("../assets/imgs/symbol-scatter.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 1rem;
    border-radius: 10px;
    color: $text-primary;
    i.fa-coins {
      color: #35003a;
    }
    i.fa-hand-holding-water {
      color: #35003a;
    }
    i.fa-shopping-cart {
      color: #35003a;
    }
    .p-card-body {
      padding: 0 !important;
    }
    .counter {
      font-size: 2.5rem;
      font-weight: bolder;
    }
    .detail {
      font-weight: bolder;
    }
  }
}
</style>
