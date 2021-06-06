<template>
  <div class="p-grid">
    <div class="p-col-12 tokenbox">
      <h3>Token address:</h3>
      <div class="token">
        {{ token.address }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TokenAddress",
  data() {
    return {};
  },
  props: {
    token: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.tokenbox {
  color: black;
  padding: 0.4rem;
  border-radius: 10px;
  word-wrap: break-word;
  background-color: rgba(51, 48, 48, 0.582);
  &.token {
  width: fit-content;
  }
}
</style>
