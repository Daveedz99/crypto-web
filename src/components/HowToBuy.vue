<template>
  <div id="howtobuy">
    <section class="section p-mt-0" data-aos="fade-up" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          1
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center sectionbox">
          <h2>
            Installa Metamask o Trust Wallet
          </h2>
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img
            class="img-responsive"
            src="../assets/imgs/pt1.png"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-center"
          />
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          2
        </div>
        <h2>
          Configura il tuo Wallet
        </h2>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          3
        </div>
        <h2>
          Acquista dei BNB
        </h2>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          4
        </div>
        <h2>
          Accedi a Pancakeswap.finance dal browser del tuo Wallet.
        </h2>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          5
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img class="img-responsive" src="../assets/imgs/pt2.png" />
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
      <div class="p-grid">
        <div class="step">
          6
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <h2>
            Dalle impostazioni, Imposta lo slippage a 12.
          </h2>
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img class="img-responsive" src="../assets/imgs/slippage.png" />
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-right" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          7
        </div>
        <div class="p-col-12">
          <h2>
            Fai lo swap dai BNB appena acquistati a MUSA, importando l’address
            del token su Pancakeswap. Token Address: 0x83testdf1a
          </h2>
        </div>
      </div>
    </section>
    <section class="section" data-aos="fade-left" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          8
        </div>
        <h2>Controlla che le monete siano state accreditate sul tuo Wallet</h2>
      </div>
    </section>
    <section class="section" data-aos="zoom-in" data-aos-duration="2500">
      <div class="p-grid">
        <div class="step">
          <i class="fas fa-2x fa-check"></i>
        </div>
        <div class="p-col-12 p-d-flex p-jc-center">
          <h2 class="p-d-flex p-ai-center">
            E' ora di guardare i tuoi guadagni direttamente su
            <Button
              icon="fas fa-poo"
              class="p-button-help p-button-text text-success p-mx-2"
              label="Poocoin.com"
            />
          </h2>
        </div>
        <div class="p-col-12">
          <img src="../assets/imgs/pt3.png" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#howtobuy {
  padding: 1rem;
  .section {
    padding: 1rem;
    margin: 1rem;
    border-radius: 15px;
    background-color: transparentize($color: black, $amount: 0.7%);
    .step {
      font-size: 2.5rem;
      background-color: #9b27b03d;
      color: #ffffff3d;
      font-weight: bolder;
      position: absolute;
      border: 2px solid #9b27b03d;
      width: 80px;
      border-radius: 3rem;
      @media only screen and (max-width: 800px) {
        font-size: 1rem;
        width: 30px;
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
</style>
