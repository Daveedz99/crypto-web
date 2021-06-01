<template>
  <div class="p-grid p-d-flex p-ai-center">
    <div class="p-col-4 sx">
      <i class="fad fa-2x fa-bars p-ml-4"></i>
    </div>
    <div class="p-col-4">
      <img class="img-responsive logo" src="../assets/imgs/logo.png" />
    </div>

    <div class="p-col-4 dx">
      <span class="p-input-icon-left">
        <i class="fas fa-search" />
        <InputText
          type="text"
          v-model="query.search"
          placeholder="Search"
          class="search"
        />
      </span>
    </div>
  </div>
  <hr />
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.logo {
  width: 4vw;
}
.search {
  width: 200px;
  transition: 0.5s;
}
.search:focus {
  width: 250px;
}
</style>
