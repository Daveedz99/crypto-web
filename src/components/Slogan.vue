<template>
  <div class="p-grid p-pt-3">
    <div class="p-col-12">
      <img src="https://fakeimg.pl/350x200/?text=MUSA&font=lobster" />
      <h1 class="text-white">
        Buy and sell your music using crypto!
      </h1>
      <ButtonSpecial
        label="BUY MUSA"
        icon="fad fa-wallet"
        class="p-mx-4 p-ripple"
        v-ripple
      />

      <ButtonSpecial
        label="Seguici su telegram"
        icon="fab fa-telegram"
        class="p-mx-4 p-ripple"
        v-ripple
      />
      <!-- <Button
        icon="fab fa-telegram"
        class="p-button-outlined p-button-lg p-ml-3 p-mt-2 p-mt-md-0 p-mt-lg-0 p-button-help"
        label="Join Telegram"
      /> -->
    </div>
  </div>
</template>

<script>
import ButtonSpecial from "../integrations/ButtonSpecial.vue";
export default {
  data() {
    return {};
  },
  components: {
    ButtonSpecial,
  },
  methods: {},
};
</script>

<style></style>
