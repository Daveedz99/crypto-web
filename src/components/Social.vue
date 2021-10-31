<template>
  <div class="socialbox" :class="transaprentize ? 'transparentize' : ''">
    <div class="social-icon animate_animated animate__bounceIn">
      <i class="fab fa-telegram-plane">
        <span class="whitespace"></span>
      </i>
    </div>
    <div class="social-icon animate_animated animate__bounceIn">
      <i class="fab fa-instagram"></i>
    </div>
    <div class="social-icon animate_animated animate__bounceIn">
      <i class="fab fa-discord">
        <span class="whitespace"></span>
      </i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {
      transparentize: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 5000) {
        this.transparentize = true;
      } else {
        this.transparentize = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.transparentize {
  opacity: 0;
}
.socialbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  z-index: 90;
  top: 45vh;
  right: 0;
  position: fixed;
  // background-color: $primary-transparent;
  border-radius: 5px 0px 0px 5px;
  transition: all 1s ease;
  background: linear-gradient(-45deg, #ee7752, #e73c7ec5, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      transition: all 0.4s ease-in-out;

      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  &:hover {
    padding: 1.4rem;
    background-color: transparentize($primary-transparent, $amount: 0.2);
  }
}
.social-icon {
  font-size: 2rem;
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
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
  i.fa-telegram-plane {
    color: #0088cc;
    position: relative;
    transition: color 0.4s ease;
    z-index: 1;
    &:hover {
      cursor: pointer;
      color: #56a5cc;
    }
  }
  i.fa-discord {
    color: #2c2f33;
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
    &:hover {
      color: #4e5358;
      cursor: pointer;
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
    @media only screen and (max-width: 600px) {
      padding: 8px;
      top: 6px;
      right: 1px;
    }
  }
}
</style>
