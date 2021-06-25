<template>
  <div id="developers">
    <div class="p-grid p-mx-0 w-100 p-ai-center">
      <div
        class="p-col-12 p-md-6 p-lg-6 p-d-flex p-jc-center"
        v-for="dev in devs"
        :key="dev"
      >
        <Card data-aos="fade-up" data-aos-duration="2500">
          <template #header>
            <!-- <img alt="user header" src="demo/images/usercard.png" /> -->
            <i class="fad fa-3x fa-user"></i>
          </template>
          <template #title> {{ dev.name }} </template>
          <template #content>
            {{ dev.description }}
            <div class="p-mt-3">
              <ButtonSpecial2
                v-ripple
                label="social"
                icon="fad fa-external-link"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Developers",
  data() {
    return {
      devs: [
        {
          name: "Davide",
          work: "Front end developer",
          description: "testing..",
          image: "",
          social: [],
        },
        {
          name: "Nicolò",
          work: "Developer",
          description: "testing..",
          image: "",
          social: [],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#developers {
  padding-top: 70px;
  min-height: 100vh;
  padding-bottom: 70px;
  display: flex;
  // background-color: #f8f9fa;

  .p-card {
    transition: all 0.3s ease;
    border-radius: 15px;
    background-color: #7d4aa793;
    background-image: url("../assets/imgs/scatter.png");
    background-size: contain;
    width: 50%;
    @media only screen and (max-width: 800px) {
      width: 90%;
    }
    &:hover {
      box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2),
        0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>