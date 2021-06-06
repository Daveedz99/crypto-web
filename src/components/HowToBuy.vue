<template>
  <div>
   
      <section class="section" >
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
            <img class="img-responsive" src="../assets/imgs/pt1.png" />
          </div>
        </div>
      </section>
    <section class="section">
      <div class="step">
        2
      </div>
      <h2>
        Configura il tuo Wallet
      </h2>
    </section>
    <section class="section">
      <div class="step">
        3
      </div>
      <h2>
        Acquista dei BNB
      </h2>
    </section>
    <section class="section">
      <div class="step">
        4
      </div>
      <h2>
        Accedi a Pancakeswap.finance dal browser del tuo Wallet.
      </h2>
    </section>
    <section class="section">
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
    <section class="section">
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
    <section class="section">
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
    <section class="section">
      <div class="step">
        8
      </div>
      <h2>Controlla che le monete siano state accreditate sul tuo Wallet</h2>
    </section>
    <section class="section">
      <div class="step">
        <i class="fas fa-2x fa-check"></i>
      </div>
      <h2>
        Guarda i tuoi guadagni direttamente su Poocoin
      </h2>
      <Button
        icon="fas fa-poo"
        class="p-button-help p-button-text p-my-2"
        label="Poocoin.com"
      />
      <div class="p-grid">
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
.section {
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  background-color: transparentize($color: black, $amount: 0.7%);
  .step {
    font-size: 2.5rem;
    color: #00000062;
    font-weight: bolder;
    position: absolute;
    border: 2px solid #9b27b08a;
    width: 80px;
    border-radius: 3rem;
  }
  h2 {
    color: white;
  }
  img {
    width: 30vw;
  }
}
</style>
