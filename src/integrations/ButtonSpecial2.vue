<template>
  <a href="#" class="button"><i class="p-mr-2" :class="icon"></i>{{ label }}</a>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    label: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
$color: #4f3566;
.button {
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 0.4rem;
  color: #fff;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darken($color, 15%);
    transition: all 0.8s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
}
</style>
