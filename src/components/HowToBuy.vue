<template>
  <div>
    <section class="section">
      <div class="p-grid">
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <h2>
            1. Installa Metamask o Trust Wallet
          </h2>
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img class="img-responsive" src="../assets/imgs/pt1.png" />
        </div>
      </div>
    </section>
    <section class="section">
      <h2>
        2. Configura il tuo Wallet
      </h2>
    </section>
    <section class="section">
      <h2>
        3. Acquista dei BNB
      </h2>
    </section>
    <section class="section">
      <h2>
        4. Accedi a Pancakeswap.finance dal browser del tuo Wallet.
      </h2>
    </section>
    <section class="section">
      <div class="p-grid">
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img class="img-responsive" src="../assets/imgs/pt2.png" />
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <h2>
            5. Connetti il tuo Wallet a Pancake Swap premendo il pulsante in
            alto a destra.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="p-grid">
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <h2>
            6. Dalle impostazioni, Imposta lo slippage a 12.
          </h2>
        </div>
        <div class="p-col-6 p-d-flex p-ai-center p-jc-center">
          <img class="img-responsive" src="../assets/imgs/slippage.png" />
        </div>
      </div>
    </section>
    <section class="section">
      <h2>
        7. Fai lo swap dai BNB appena acquistati a MUSA, importando l’address
        del token su Pancakeswap. Token Address:
        0x83testdf1a
      </h2>
    </section>
    <section class="section">
      <h2>8. Controlla che le monete siano state accreditate sul tuo Wallet</h2>
    </section>
    <section class="section">
      <h2>
        Guarda i tuoi guadagni direttamente su Poocoin 
      </h2>
       <Button icon="fas fa-poo" class="p-button-help p-button-text p-my-2" label="Poocoin.com" />
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
<style lang="scss">
.section {
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  background-color: transparentize($color: black, $amount: 0.7%);
  & h2 {
    color: white;
  }
  & img {
    width: 30vw;
  }
}
</style>
