<template>
  <div class="grid mt-0 mb-5 index animate__animated animate__bounceIn">
    <div
      class="col-10 col-offset-1 md:col-6 md:col-offset-3 lg:col-2 lg:col-offset-5 tokenbox p-ripple"
      v-ripple
      v-clipboard:copy="token.address"
      v-clipboard:success="doCopyToken"
    >
      <h3><i class="fad fa-alien-monster"></i> Token address:</h3>
      <div class="token">
        {{ token.address }}
      </div>
      <transition
        enter-active-class="animate__animated animate__zoomIn "
        leave-active-class="animate__animated animate__zoomOut"
      >
        <div class="tokenCopied" v-if="cloned">Copied</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "TokenAddress",
  data() {
    return {
      cloned: false
    };
  },
  props: {
    token: {
      type: Object
    }
  },
  watch: {
    cloned() {
      setTimeout(() => {
        this.cloned = false;
      }, 500);
    }
  },
  methods: {
    doCopyToken() {
      this.cloned = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.index {
  position: relative;
  z-index: 100;
}
.tokenbox {
  color: $text-primary;
  padding: 1rem;
  border-radius: 10px;
  word-wrap: break-word;
  transition: transform 0.5s, background-position 1s;
  border-radius: 15px;
  background-color: #7d4aa763;
  background-image: url("../assets/imgs/scatter.png");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
    background-position: center center;
    transform: scale(1.085);
    .token {
      transition: .6s color;
      color: #f7edff;
    }
  }
  &.token {
    width: fit-content;
  }
  .tokenCopied {
    color: $text-primary;
    position: absolute;
    top: 5px;
    right: 10px;
  }
}
</style>
