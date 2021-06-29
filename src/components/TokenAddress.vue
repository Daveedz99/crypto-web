<template>
  <div class="p-grid p-mt-0 p-py-5">
    <div
      class="p-col-10 p-offset-1 p-md-6 p-md-offset-3 p-lg-4 p-lg-offset-4 tokenbox p-ripple"
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
      cloned: false,
    };
  },
  props: {
    token: {
      type: Object,
    },
  },
  watch: {
    cloned() {
      setTimeout(() => {
        this.cloned = false;
      }, 500);
    },
  },
  methods: {
    doCopyToken() {
      this.cloned = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.tokenbox {
  color: $text-primary;
  padding: 1rem;
  border-radius: 10px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  border-radius: 15px;
  background-color: #7d4aa763;
  background-image: url("../assets/imgs/scatter.png");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
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
