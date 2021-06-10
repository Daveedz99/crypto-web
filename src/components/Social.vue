<template>
  <div class="prova">
    <div class="socialbox">
      <i class="fab fa-2x p-mx-2 fa-facebook"></i>
      <i class="fab fa-2x fa-instagram"></i>
      <i class="fab fa-2x p-ml-2 fa-twitter"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.prova {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  margin-top: 20rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
.socialbox {
  justify-self: flex-end;
  background-color: rgba(0, 0, 0, 0.385);
  border: 2px solid black;
  width: 100px;
}
</style>
