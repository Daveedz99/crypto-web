<template>
  <div id="slogan">
    <div class="wave-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#8854b4"
          fill-opacity="1"
          d="M0,192L26.7,176C53.3,160,107,128,160,133.3C213.3,139,267,181,320,197.3C373.3,213,427,203,480,192C533.3,181,587,171,640,176C693.3,181,747,203,800,218.7C853.3,235,907,245,960,218.7C1013.3,192,1067,128,1120,128C1173.3,128,1227,192,1280,197.3C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div class="p-grid">
      <div class="p-col-12">
        <img src="https://fakeimg.pl/350x200/?text=MUSA&font=lobster" />
        <Autotyper />
      </div>
      <div class="p-col-12">
        <ButtonSpecial2 v-ripple label="BUY MUSA" class="p-mx-2" />
        <ButtonSpecial2 v-ripple label="Join telegram" icon="fab fa-telegram" />
      </div>
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
#slogan {
  min-height: 100vh;
  svg {
    @media only screen and (max-width: 800px) {
      height: 20vh;
    }
  }
}
</style>
