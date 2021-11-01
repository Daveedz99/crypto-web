<template>
  <div id="counters">
    <TokenAddress id="tokenaddress" :token="token" />
    <div class="grid nogutter justify-content-center relative my-0 z-1">
      <Card
        class="counters-card-1 col-12 lg:col-3"
        data-aos="fade-right"
        data-aos-duration="1500"
        @click="restartCounter('holders')"
      >
        <template #content>
          <div class="counter">
            <i class="fas fa-hand-holding-water mr-3"></i>
            <i
              v-if="isLoading.includes('holders')"
              class="fad fa-refresh fa-spin"
            ></i>
            <Autocounter
              v-else
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
        @click="restartCounter('marketCap')"
        class="counters-card-2 col-12 lg:col-3 md:mx-1 lg:mx-5 my-4  lg:my-0"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <template #content>
          <div class="counter">
            <i class="fad fa-shopping-cart mr-3"></i>
            <i
              v-if="isLoading.includes('marketCap')"
              class="fad fa-refresh fa-spin"
            ></i>
            <Autocounter
              v-else
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
      <Card
        @click="restartCounter('pricePer')"
        class="counters-card-3 col-12 lg:col-3"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <template #content>
          <div class="counter">
            <i class="fad fa-coins mr-3"></i>
            <i
              v-if="isLoading.includes('pricePer')"
              class="fad fa-refresh fa-spin"
            ></i>
            <Autocounter
              v-else
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
      isLoading: [],
      counters: {
        holders: 12,
        marketCap: 1231,
        pricePer: 0.0012
      }
    };
  },
  props: {
    token: Object
  },
  components: {
    Autocounter: Vue3Autocounter,
    TokenAddress
  },
  methods: {
    restartCounter(type) {
      this.isLoading.push(type);
      let counter = this.counters[type];
      this.counters[type] = 0;
      setTimeout(() => {
        this.isLoading.pop(type);
        this.counters[type] = counter;
      }, 800);
    }
  }
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
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      @media screen and (max-width: 994px){
        transform: scale(0.9);
      }
    }
  }
}
</style>
