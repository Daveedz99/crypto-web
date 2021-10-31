<template>
  <div id="howtobuy">
    
    <div class="grid">
      <div class="col-12">HOW TO BUY</div>
    </div>
    <section class="section mt-0" data-aos="fade-up" data-aos-duration="2500">
      <div class="grid">
        <div class="step">1</div>
        <div class="col-6 flex align-items-center justify-content-center sectionbox">
          <h2>Installa Metamask o Trust Wallet</h2>
        </div>
        <div class="col-6 flex align-items-center justify-content-center">
          <img
            class="img-responsive"
            src="../assets/imgs/pt1.png"
            data-aos="fade-up"
            data-aos-duration="1500"
            @click="toggleDialog('pt1.png', 'Installa App')"
          />
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="grid">
        <div class="step">2</div>
        <div class="col-12">
          <h2>Configura il tuo Wallet</h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="grid">
        <div class="step">3</div>
        <div class="col-12">
          <h2>Acquista dei BNB</h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="grid">
        <div class="step">4</div>
        <div class="col-12 m-1">
          <h2>Accedi a Pancakeswap.finance dal browser del tuo Wallet.</h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="grid">
        <div class="step">5</div>
        <div class="col-6 flex align-items-center justify-content-center">
          <img
            class="img-responsive"
            @click="toggleDialog('pt2.png', 'Wallet')"
            src="../assets/imgs/pt2.png"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-center"
          />
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <h2>
            Connetti il tuo Wallet a Pancake Swap premendo il pulsante in alto a
            destra.
          </h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="grid">
        <div class="step">6</div>
        <div class="col-6 flex align-items-center justify-content-center">
          <h2>Dalle impostazioni, Imposta lo slippage a 12.</h2>
        </div>
        <div class="col-6 flex align-items-center justify-content-center">
          <img
            @click="toggleDialog('slippage.png', 'Slippage')"
            class="img-responsive"
            src="../assets/imgs/slippage.png"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="grid">
        <div class="step">7</div>
        <div class="col-12 m-1">
          <h2>
            Fai lo swap dai BNB appena acquistati a MUSA, importando l’address
            del token su Pancakeswap. Token Address: 0x83testdf1a
          </h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="grid">
        <div class="step">8</div>
        <div class="col-12 m-1">
          <h2>
            Controlla che le monete siano state accreditate sul tuo Wallet
          </h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="zoom-in" data-aos-duration="2500">
      <div class="grid">
        <div class="step final">
          <i class="fad fa-2x fa-check-double"></i>
        </div>
        <div class="col-12 flex justify-content-center m-1">
          <h2 class="flex align-items-center">
            E' ora di guardare i tuoi guadagni direttamente su
          </h2>
        </div>
        <div class="m-auto">
          <Button
            icon="fas fa-poo"
            class="p-button-help p-button-text p-button-sm text-success"
            label="Poocoin.com"
          />
        </div>
        <div class="col-12">
          <img
            @click="toggleDialog('pt3.png', 'Poocoin')"
            src="@/assets/imgs/pt3.png"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </section>
    <Dialog
      :visible="dialog.show === 'open'"
      :showHeader="false"
      @update:visible="closeDialog()"
      :breakpoints="{ '960px': '75vw', '640px': 'fit-content' }"
      :style="{ width: '30vw' }"
      :contentStyle="{ backgroundColor: 'rgba(0, 0, 0, 0.358)' }"
      autoZIndex
      modal
      dismissableMask
    >
      <img class="dinamycImg" :src="imageUrl" />
    </Dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: {
        show: false,
        img: "",
        imgName: "",
      },
    };
  },
  computed: {
    imageUrl() {
      return require("../assets/imgs/" + this.dialog.img);
    },
  },
  methods: {
    closeDialog() {
      this.dialog.show = "";
      this.dialog.img = "";
      this.dialog.imgName = "";
    },
    toggleDialog(url, imgName) {
      if (this.dialog.img === url) {
        return;
      }
      this.dialog.img += url;
      this.dialog.imgName = imgName;
      console.log(url);
      this.dialog.show = "open";
    },
  },
};
</script>
<style lang="scss" >
#howtobuy {
  padding-top: 70px;
  padding-bottom: 70px;
  // background-image: linear-gradient(
  //   to bottom,
  //   #8854b4 0%,
  //   #9269b4 12%,
  //   #9778b1 25%,
  //   #a78dbd 37%,
  //   #a798b4 50%,
  //   #beb7c5 62%,
  //   #cac9d8 75%,
  //   #f8f9fa 87%,
  //   #f8f9fa 100%
  // );

  .section {
    padding: 1rem;
    margin: 1rem;
    border-radius: 15px;
    background-color: transparentize($color: black, $amount: 0.7%);
    .step {
      font-size: 2rem;
      // background-color: #9b27b03d;
      top: 2px;
      left: 2px;
      margin-bottom: 1rem;
      color: #ffffff3d;
      font-weight: bolder;
      position: absolute;
      // border: 2px solid #9b27b03d;
      width: 60px;
      border-radius: 3rem;
      @media only screen and (max-width: 800px) {
        font-size: 1rem;
        width: 30px;
      }
      &.final {
        font-size: 1rem;
        @media only screen and (max-width: 800px) {
          font-size: 0.5rem;
        }
      }
    }
    h2 {
      color: white;
      @media only screen and (max-width: 800px) {
        font-size: 0.8rem;
      }
    }
    img {
      width: 25vw;
      transition: all 0.6s;
    }
  }
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
}
.p-dialog .p-dialog-content {
  display: flex;
  justify-content: center;
  padding: 1rem !important;
}
.dinamycImg {
  max-width: 20vw;
}

</style>
