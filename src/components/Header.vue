<template>
  <div class="p-grid p-d-flex p-ai-center">
    <div class="p-col-6 p-offset-2 sx">
      <img class="img-responsive logo" src="../assets/imgs/logo.png" />
    </div>
    <div class="p-col-4">
      <div class="anchors p-d-flex p-jc-between">
        <div class="anchor">Roadmap</div>
        <div class="anchor">How to buy</div>
        <div class="anchor">Our Project</div>
      </div>
      <!-- <span class="p-input-icon-left">
        <i class="fas fa-search" />
        <InputText
          type="text"
          v-model="query.search"
          placeholder="Search"
          class="search"
        />
      </span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      query: {
        search: null,
      },
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.logo {
  width: 5vw;
}
.search {
  width: 200px;
  transition: 0.4s;
}
.search:focus {
  width: 250px;
}
.anchor {
  width: fit-content;
  padding: 7px;
  background-image: linear-gradient(#fff, #fff);
  background-position: bottom left;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.7s,
    /*animate the background-size*/ background-position 0s 1s; /*don't animate position and add a delay */
}

.anchor:hover {
  cursor: pointer;
  background-position: bottom right;
  background-size: 100% 2px;
}
</style>
