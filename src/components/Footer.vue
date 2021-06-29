<template>
  <div class="p-d-flex p-jc-around w-100">
    <div class="social">
      <i class="fab fa-telegram">
        <span class="whitespace"></span>
      </i>
      <i class="fab p-mx-4 fa-facebook">
        <span class="whitespaceFb"></span>
      </i>
      <span class="insta">
        <i class="fab fa-instagram">
          <span class="whitespace"></span>
        </i>
      </span>
      <i class="fab p-ml-4 fa-discord">
        <span class="whitespace"></span>
      </i>
    </div>
    <!-- <div class="business-mail text-dark">cryptowallet@MUSA.it</div>
    <div class="copyright text-dark">Copyright © 2021 MUSA</div> -->
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
  font-size: 2rem;
  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
  }
  .fa-facebook {
    color: #3b5998;
    position: relative;
    transition: color 0.4s ease;
    z-index: 1;
    .whitespaceFb {
      background-color: white;
      padding: 14px;
      position: absolute;
      top: 11px;
      right: 2px;
      border-radius: 20px;
      z-index: -1;
      @media only screen and (min-width: 1200px) {
        padding: 20px;
        border-radius: 20px;
        top: 17px;
        right: 5px;
      }
    }
    &:hover {
      cursor: pointer;
      color: #556a97;
    }
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
      cursor: pointer;
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
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
    &:hover {
      color: #4e5358;
      cursor: pointer;
    }
  }
  .fa-telegram {
    color: #0088cc;
    position: relative;
    transition: color 0.4s ease;
    z-index: 1;
    &:hover {
      cursor: pointer;
      color: #56a5cc;
    }
  }
  .whitespace {
    background-color: white;
    padding: 11px;
    position: absolute;
    top: 11px;
    right: 4px;
    border-radius: 10px;
    z-index: -1;
    @media only screen and (min-width: 1200px) {
      padding: 17px;
      top: 16px;
      right: 5px;
    }
  }
}
</style>
