<template>
  <div class="navbar" :class="colored ? 'colored' : ''">
    <div class="p-grid p-d-flex p-ai-center p-m-0">
      <div class="p-col-4 p-lg-6 p-offset-2 sx">
        <img class="logo" src="https://fakeimg.pl/70x70/?LOGO&font=lobster" />
        <!-- <img class="img-responsive logo" src="../assets/imgs/logo.png" />  -->
      </div>
      <div class="p-col-6 p-md-6 p-lg-4">
        <div class="anchors p-d-none p-d-md-flex p-jc-around">
          <div class="anchor" v-scroll-to="'#roadmap'">ROADMAP</div>
          <div class="anchor" v-scroll-to="'#howtobuy'">HOW TO BUY</div>
          <div class="anchor" v-scroll-to="'#our-project'">OUR PROJECT</div>
        </div>
        <BurgerMenu />
      </div>
    </div>
  </div>
</template>

<script>
import BurgerMenu from "../integrations/BurgerMenu.vue";
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      colored: false,
    };
  },
  components: {
    BurgerMenu,
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    handleScroll() {
      if (this.isMobile()) {
        if (window.scrollY >= 55) {
          this.colored = true;
        } else {
          this.colored = false;
        }
      } else {
        if (window.scrollY >= 114) {
          this.colored = true;
        } else {
          this.colored = false;
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.navbar {
  margin: 0;
  z-index: 200;
  color: whitesmoke;
  transition: all 0.4s ease-in-out;
  background: transparent;
  border-radius: 17px;
  .logo {
    margin-top: 0.5rem;
    width: 40px;
    height: 40px;
    @media only screen and (max-width: 600px) {
      width: 40px;
    }
  }
  .anchor {
    width: fit-content;
    font-weight: bold;
    padding: 7px;
    background-image: linear-gradient(#6024a5, #584f9e);
    background-position: bottom left;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    transition: background-size 0.7s, background-position 0s 1s;
    &:hover {
      cursor: pointer;
      background-position: bottom right;
      color: #9500af;
      background-size: 100% 2px;
    }
  }
}
.colored {
  // background: #ad8ec7;
  box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12);
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
}
.burger {
  .hidden {
    visibility: hidden;
  }
  button {
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
  .burger-button {
    position: relative;
    width: 35px;
    display: block;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-bar {
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }

  .burger-bar--3 {
    transform: translateY(6px);
  }

  &.active .burger-button {
    transform: rotate(-180deg);
  }

  &.active .burger-bar--1 {
    transform: rotate(45deg);
  }

  &.active .burger-bar--2 {
    opacity: 0;
  }

  &.active .burger-bar--3 {
    transform: rotate(-45deg);
  }
}
</style>
