<template>
  <div id="roadmap">
    <h5>Customized</h5>
    <Timeline :value="events1" align="alternate" class="customized-timeline">
      <template #marker="el">
        <span
          class="custom-marker p-shadow-2"
          :style="{ backgroundColor: el.item.color }"
        >
          <i :class="el.item.icon"></i>
        </span>
      </template>
      <template #content="el">
        <div class="card">
          <h2 class="p-text-bold">
            {{ el.item.status }}
            {{ el.item.date }}
          </h2>

          <img
            v-if="el.item.image"
            :src="'demo/images/product/' + el.item.image"
            :alt="el.item.name"
            width="200"
            class="p-shadow-2"
          />
          <div class="message">
            {{ el.item.msg }}
          </div>
        </div>
      </template>
    </Timeline>
  </div>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      events1: [
        {
          status: "Q4",
          date: "",
          icon: "fas fa-coins",
          color: "#9C27B0",
          image: "",
          msg: ""
        },
        {
          status: "Q3",
          date: "",
          icon: "fas fa-cog",
          color: "#673AB7",
          msg: ""
        },
        {
          status: "Q2",
          date: "Coming soon..",
          icon: "fas fa-coins",
          color: "#FF9800",
          msg: ""
        },
        {
          status: "Q1",
          date: "Coming soon..",
          icon: "fas fa-check",
          color: "#607D8B",
          msg: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  z-index: 1;
}

::v-deep(.p-timeline-event-content) ::v-deep(.p-timeline-event-opposite) {
  line-height: 1;
}
.card {
  background: transparent;
  color: #ffffff;
  //   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
  //     0 1px 3px 0 rgb(0 0 0 / 12%);
  border-radius: 3px;
}
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }

    .p-card {
      width: 0%;
      margin-top: 1rem;
    }
  }
}
</style>
