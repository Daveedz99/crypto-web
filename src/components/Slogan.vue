<template>
  <div id="slogan" class="animate__animated animate__fadeIn">
    <div class="wave-container">
      <SvgWawe />
    </div>
    <div class="grid image-container">
      <div class="col-12">
        <div class="parallax"></div>
      </div>
      <div class="col-12">
        <Autotyper />
      </div>
      <div class="col-12">
        <ButtonSpecial2 v-ripple label="BUY MUSA" class="mx-2" />
        <ButtonSpecial2 v-ripple label="Join telegram" icon="fab fa-telegram" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSpecial2 from "../integrations/ButtonSpecial2.vue";
import Autotyper from "../integrations/Autotyper.vue";
import SvgWawe from "../integrations/SvgWawe"
export default {
  data() {
    return {};
  },
  components: {
    Autotyper,
    ButtonSpecial2,
    SvgWawe
  }
};
</script>

<style lang="scss" scoped>
#slogan {
  min-height: 100vh;
  svg {
    @media only screen and (max-width: 600px) {
      height: 20vh;
    }
  }
  .image-container {
    position: relative;
    z-index: 90;
    .parallax {
      margin: 2rem;
      /* The image used */
      background-image: url("../assets/imgs/bg-home.jpg");
      /* Set a specific height */
      min-height: 500px;
      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
