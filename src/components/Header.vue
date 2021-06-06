<template>
  <div class="p-grid p-d-flex p-ai-center navbar">
    <div class="p-col-6 p-offset-2 sx">
      <img class="img-responsive logo" src="../assets/imgs/logo.png" />
    </div>
    <div class="p-col-4">
      <div class="anchors  p-d-none p-d-md-flex p-jc-between">
        <div class="anchor">ROADMAP</div>
        <div class="anchor">HOW TO BUY</div>
        <div class="anchor">OUR PROJECT</div>
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
        search: null
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.logo {
  margin-top: 0.5rem;
  width: 5vw;
}
.search {
  width: 200px;
  transition: 0.4s;
}
.search:focus {
  width: 250px;
}
.navbar {
  z-index: 100;
  position: fixed;
  width: 100%;
  background: #42275a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #d3d0d2,
    #584f9e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #d3d0d2,
    #584f9e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fefefe;
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
  color: #9C27B0;
  background-size: 100% 2px;
}
}

</style>
