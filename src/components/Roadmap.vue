<template>
  <h5>Customized</h5>
  <Timeline :value="events1" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
      <span
        class="custom-marker p-shadow-2"
        :style="{ backgroundColor: slotProps.item.color }"
      >
        <i :class="slotProps.item.icon"></i>
      </span>
    </template>
    <template #content="slotProps">
      <div class="card">
        {{ slotProps.item.status }}
        {{ slotProps.item.date }}
        <img
          v-if="slotProps.item.image"
          :src="'demo/images/product/' + slotProps.item.image"
          :alt="slotProps.item.name"
          width="200"
          class="p-shadow-2"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
        <Button label="Read more" class="p-button-text"></Button>
      </div>
    </template>
  </Timeline>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      events1: [
        {
          status: "Ordered",
          date: "15/10/2020 10:30",
          icon: "fas fa-shopping-cart",
          color: "#9C27B0",
          image: "game-controller.jpg",
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          icon: "fas fa-cog",
          color: "#673AB7",
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          icon: "fas fa-shopping-cart",
          color: "#FF9800",
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          icon: "fas fa-check",
          color: "#607D8B",
        },
      ],
    };
  },
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
  background: #ffffff;
  color: #495057;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
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
