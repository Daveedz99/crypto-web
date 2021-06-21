<template>
  <div class="p-grid w-100 p-d-flex p-jc-between">
    <div class="p-col social p-d-flex">
      <i class="fab fa-2x fa-discord"></i>
      <i class="fab fa-2x p-mx-2 fa-facebook"></i>
      <span class="insta">
        <i class="fab fa-2x fa-instagram"></i>
      </span>
      <i class="fab fa-2x p-ml-2 fa-twitter"></i>
    </div>
    <div class="p-col business-mail">cryptowallet@MUSA.it</div>
    <div class="p-col copyright">Copyright © 2021 MUSA</div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.business-mail {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.copyright {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.social {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .fa-facebook {
    color: #3b5998;
  }
  i.fa-telegram-plane {
    color: $i-telegram;
    transition: color 0.4s ease;
    &:hover {
      color: transparentize($color: $i-telegram, $amount: 0.5);
    }
  }
  i.fa-twitter {
    transition: color 0.4s ease;
    color: $i-twitter;
    &:hover {
      color: transparentize($color: $i-twitter, $amount: 0.5);
    }
  }
  i.fa-instagram {
    background-image: $i-instagram;
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    &:hover {
      background-image: linear-gradient(
        45deg,
        #405ce6ad,
        #5851db9c,
        #833ab4a8,
        #c13584a2,
        #e1306b8c,
        #fd1d1da9
      );
      background-size: 100%;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
  }
  .fa-discord {
    color: #2c2f33;
  }
}
</style>
