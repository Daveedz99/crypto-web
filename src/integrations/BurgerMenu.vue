<template>
  <div class="outer-menu md:hidden">
    <input class="checkbox-toggle" type="checkbox" v-model="opened" />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div :class="!opened ? 'hidden' : ''">
        <div>
          <ul class="p-text-uppercase">
            <li v-scroll-to="'#roadmap'" @click="doCloseBurger">
              <a href="#">Roadmap</a>
            </li>
            <li v-scroll-to="'#howtobuy'" @click="doCloseBurger">
              <a href="#">How to buy</a>
            </li>
            <li v-scroll-to="'#ourproject'" @click="doCloseBurger">
              <a href="#">Our project</a>
            </li>
            <li v-scroll-to="'#developers'" @click="doCloseBurger">
              <a href="#">Chi siamo</a>
            </li>
            <li>
              <div class="grid flex justify-content-between">
                <div class="social flex">
                  <i class="fab fa-telegram">
                    <span class="whitespace"></span>
                  </i>
                  <i class="fab mx-2 fa-facebook"></i>
                  <span class="insta">
                    <i class="fab fa-instagram"></i>
                  </span>
                  <i class="fab ml-2 fa-twitter"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      opened: false
    };
  },
  watch: {
    opened(val) {
      if (!val) {
        document.body.classList.remove("overflow");
      } else {
        document.body.classList.add("overflow");
      }
    }
  },
  methods: {
    doCloseBurger() {
      this.opened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
.hidden {
  visibility: hidden;
}
.outer-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outer-menu .checkbox-toggle {
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: 2;
  cursor: pointer;
  width: 40px;
  height: 40px;
  opacity: 0;
}
.outer-menu .checkbox-toggle:checked + .hamburger > div {
  transform: rotate(135deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:before,
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  top: 0;
  transform: rotate(90deg);
}
.outer-menu .checkbox-toggle:checked + .hamburger > div:after {
  opacity: 0;
}
.outer-menu .checkbox-toggle:checked ~ .menu {
  pointer-events: auto;
  visibility: visible;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div {
  transform: scale(2);
  transition-duration: 0.75s;
}
.outer-menu .checkbox-toggle:checked ~ .menu > div > div {
  opacity: 1;
  transition: opacity 0.4s ease 0.4s;
  width: 100%;
}
.outer-menu .checkbox-toggle:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}
.outer-menu .hamburger {
  position: absolute;
  z-index: 1;
  top: 20%;
  right: 10%;
  width: 46px;
  height: 40px;
  padding: 0.4em 0.6em;
  border-radius: 0 0.12em 0.12em 0;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .hamburger > div {
  position: relative;
  flex: none;
  width: 100%;
  height: 2px;
  background: #fefefe;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .hamburger > div:before,
.outer-menu .hamburger > div:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: inherit;
  transition: all 0.4s ease;
}
.outer-menu .hamburger > div:after {
  top: 10px;
}
.outer-menu .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  visibility: hidden;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  outline: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.outer-menu .menu > div {
  width: 200vw;
  height: 200vw;
  color: #fefefe;
  border-radius: 50%;
  transition: all 0.4s ease;
  flex: none;
  transform: scale(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
.outer-menu .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
  overflow-y: auto;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .social {
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
    .fa-telegram {
      color: #0088cc;
      position: relative;
      .whitespace {
        background-color: white;
        padding: 8px;
        position: absolute;
        top: 11px;
        right: 4px;
        border-radius: 10px;
        z-index: -1;
      }
    }
  }
}
.outer-menu .menu > div > div > ul {
  list-style: none;
  padding: 0 1em;
  width: 100%;
  margin: 0;
  display: block;
  max-height: 100vh;
}
.outer-menu .menu > div > div > ul > li {
  padding: 1rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
}
.outer-menu .menu > div > div > ul > li > a {
  position: relative;
  display: inline;
  cursor: pointer;
  font-size: 0.5rem;
  transition: color 0.4s ease;
}
.outer-menu .menu > div > div > ul > li > a:hover {
  color: #e5e5e5;
}
.outer-menu .menu > div > div > ul > li > a:hover:after {
  width: 100%;
}
.outer-menu .menu > div > div > ul > li > a:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: -0.15em;
  left: 0;
  width: 0;
  height: 2px;
  background: #e5e5e5;
  transition: width 0.4s ease;
}
</style>
