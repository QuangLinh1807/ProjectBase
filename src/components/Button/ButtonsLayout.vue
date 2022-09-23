<template>
  <div>
    <div class="">
      <h2 class="">Buttons</h2>
    </div>
    <div class="basic-button">
      <div class="title">#Basic Button</div>
      <div class="basic-button_child">
        <div v-for="item in buttonList" :key="item.id">
          <BasicButton
            :statusColor="item.statusColor"
            :outLine="false"
            :text="item.text"
          />
        </div>
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Out Line Button</div>
      <div class="basic-button_child">
        <div v-for="item in buttonList" :key="item.id">
          <BasicButton
            :outLine="true"
            :statusColor="item.statusColor"
            :text="item.text"
          />
        </div>
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Sizes</div>
      <div class="basic-button_child">
        <BasicButton
          :statusColor="'dark'"
          class="basic-button_child_lg"
          :text="'Large'"
          :size="'lg'"
        />
        <BasicButton
          :statusColor="'dark'"
          class="basic-button_child_normal"
          :text="'Normal'"
          :size="'nm'"
        />
        <BasicButton
          :statusColor="'dark'"
          class="basic-button_child_sm"
          :text="'Small'"
          :size="'sm'"
        />
        <BasicButton
          :statusColor="'dark'"
          class="basic-button_child_xs"
          :text="'Tiny'"
          :size="'xs'"
        />
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Disable</div>
      <div class="basic-button_child">
        <BasicButton
          :statusColor="'primary'"
          class="basic-button_child_disable"
          :text="'Primary'"
          :disable="true"
        />
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Icons</div>
      <div class="basic-button_child">
        <div class="basic-button_child_icon">
          <BasicButton
            :statusColor="'primary'"
            :outLine="false"
            :text="'primary'"
            :icon="'ic--sun-primary'"
            :location="true"
          />
          <BasicButton
            :statusColor="'primary'"
            :outLine="false"
            :text="'primary'"
            :icon="'ic--sun-primary'"
            :location="false"
          />
        </div>
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Loading</div>
      <div class="basic-button_child">
        <div class="basic-button_child_icon">
          <BasicButton
            :statusColor="'primary'"
            :outLine="false"
            :text="'primary'"
            :loading="loading"
            @clickButton="clickButton"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BasicButton from "@/components/Button/BasicButton/BasicButton.vue";
export default {
  data() {
    return {
      loading: false,
      disable: false,
      buttonList: [
        {
          id: 1,
          statusColor: "primary",
          text: "primary",
          icon: "ic--sun-primary",
        },
        {
          id: 2,
          statusColor: "secondary",
          text: "secondary",
          icon: "ic--sun-primary",
        },
        {
          id: 3,
          statusColor: "success",
          text: "success",
          icon: "ic--sun-primary",
        },
        {
          id: 4,
          statusColor: "warning",
          text: "warning",
          icon: "ic--sun-primary",
        },
        {
          id: 5,
          statusColor: "danger",
          text: "danger",
          icon: "ic--sun-primary",
        },
        {
          id: 6,
          statusColor: "dark",
          text: "dark",
          icon: "ic--sun-primary",
        },
      ],
    };
  },
  components: { BasicButton },
  methods: {
    clickButton() {
      this.loading = true;
      setTimeout(() => {
        return (this.loading = false);
      }, 10000);
      this.disable = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.basic-button {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  &_child {
    display: flex;
    justify-content: center;
    &_icon {
      display: flex;
    }
  }
}
</style>
