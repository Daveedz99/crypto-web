<template>
  <div class="p-grid p-pt-3" id="slogan">
    <div class="p-col-12">
      <img src="https://fakeimg.pl/350x200/?text=MUSA&font=lobster" />
      <Autotyper />
    </div>
    <div class="p-col-12">
      <ButtonSpecial2 v-ripple label="BUY MUSA" class="p-mx-2" />
      <ButtonSpecial2 v-ripple label="Join telegram" icon="fab fa-telegram" />
    </div>
  </div>
</template>

<script>
import ButtonSpecial2 from "../integrations/ButtonSpecial2.vue";
import Autotyper from "../integrations/Autotyper.vue";
export default {
  data() {
    return {};
  },
  components: {
    Autotyper,
    ButtonSpecial2,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#slogan{
  background-color: #f0eef4;
}
</style>
