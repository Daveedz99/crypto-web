<template>
  <div class="socialbox animate__animated animate__heartBeat animate__slow">
    <div class="social-icon">
      <i class="fab fa-telegram-plane"></i>
    </div>
    <div class="social-icon">
      <i class="fab fa-instagram"></i>
    </div>
    <div class="social-icon">
      <i class="fab fa-twitter"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.socialbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  z-index: 100;
  top: 50%;
  right: 0;
  position: fixed;
  background-color: rgba(70, 70, 70, 0.89);
  border-radius: 5px 0px 0px 5px;
  transition: all 1.5s ease;
  &:hover {
    padding: 1.4rem;
    background-color: rgba(80, 80, 80, 0.774);
  }
}
.social-icon {
  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
  cursor: pointer;
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
}
</style>
