<template>
  <div class="p-grid p-d-flex p-jc-center">
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
            <i class="fas fa-hand-holding-water"></i>
            {{counters.holders }}
          </div>
          <span> Drill Wallet holders </span>
        </template>
      </Card>
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
             <i class="fas fa-shopping-cart"></i>
            {{ counters.marketCap }}
          </div>
          <span> Drill Wallet Marketcap </span>
        </template>
      </Card>
      <Card class="counters-card" :style="{ backgroundColor: '#26232c' }">
        <template #content>
          <div class="counter">
            <i class="fas fa-coins"></i>
            {{ counters.pricePer }}
          </div>
          <span>Drill Wallet price per coin </span>
        </template>
      </Card>
    </div>
</template>

<script>
export default {
name: 'Counters',
data(){
    return{
         counters: {
        holders: 12,
        marketCap: 1231,
        pricePer: 0.0012,
      },
    }
}
}
</script>

<style lang="scss">
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