<template>
  <div class="p-grid p-mt-5 animate__animated animate__zoomInDown">
    <div
      class="p-col-10 p-offset-1 p-lg-4 p-lg-offset-4 tokenbox p-ripple"
      v-ripple
      v-clipboard:copy="token.address"
      v-clipboard:success="doCopyToken"
    >
      <h3>Token address:</h3>
      <div class="token">
        {{ token.address }}
      </div>
      <transition
        enter-active-class="animate__animated animate__zoomIn "
        leave-active-class="animate__animated animate__zoomOut"
      >
        <div class="tokenCopied" v-if="cloned">
          <i class="fas fa-2x fa-check"></i>
        </div>
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
<style lang="scss">
.tokenbox {
  color: black;
  padding: 0.4rem;
  border-radius: 10px;
  word-wrap: break-word;
  background-color: rgba(51, 48, 48, 0.411);
  &:hover {
    cursor: pointer;
  }
  &.token {
    width: fit-content;
  }
  .tokenCopied {
    color: #770173;
    position: absolute;
    top: 5px;
    right: 10px;
  }
}
</style>
