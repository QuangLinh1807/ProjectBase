<template>
  <div
    class="item"
    :class="isActive ? `active item-${statusColor}` : `item-${statusColor}`"
    @click="doFunc"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ItemDropdown",
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => {},
    },
    valueActive: {
      type: Number,
    },
    statusColor: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    doFunc() {
      this.$emit("changeValue", this.item.id);
      this.closeDropdown();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.item {
  display: block;
  padding: 5px 10px;
  transition: 0.3s;
  position: relative;
  &:hover {
    background: #747a81;
    color: white;
  }
  .active {
    background: #747a81;
    color: white;
  }
}
</style>
