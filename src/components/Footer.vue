<template>
  <div class="p-mr-2 p-as-end">
    <div class="p-grid p-d-flex p-jc-between">
      <div class="social p-d-flex">
        <i class="fab fa-2x fa-discord"></i>
        <i class="fab fa-2x p-mx-2 fa-facebook"></i>
        <span class="insta">
          <i class="fab fa-2x fa-instagram"></i>
        </span>
        <i class="fab fa-2x p-ml-2 fa-twitter"></i>
      </div>
      <div class="business-mail">
        cryptowallet@MUSA.it
      </div>
      <div class="copyright">
        Copyright © 2021 MUSA
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.fa-facebook {
  color: #3b5998;
}
.insta {
  padding: 1px 3px 0px 3px;
  border-radius: 7px;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
}
.fa-twitter {
  color: #1da1f2;
}
.fa-discord {
  color: #2c2f33;
}
</style>
