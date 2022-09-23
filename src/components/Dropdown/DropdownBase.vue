<template>
  <div :id="id" class="dropdown">
    <button class="btn" :class="classList" @click="isOpen = !isOpen">
      <slot />
    </button>
    <div class="dropdown-list" :class="classDropdown" v-if="isOpen">
      <Item
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
        :valueActive="valueActive"
        @changeValue="changeValue"
        :statusColor="statusColor"
      >
        {{ item.text }}
      </Item>
    </div>
  </div>
</template>
<script>
import Item from "./ItemDropdown.vue";
export default {
  name: "DropdownBase",
  props: {
    arrays: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    statusColor: {
      type: String,
    },
    outLine: {
      type: Boolean,
    },
    disable: {
      type: Boolean,
    },
    location: {
      type: String,
      default: "bottomLeft",
      note: "location",
    },
  },
  components: {
    Item,
  },
  data() {
    return {
      isOpen: false,
      valueChecked: 1,
      isActive: false,
      classList: "",
      classDropdown: "",
    };
  },
  created() {
    this.getClassList();
    window.addEventListener("click", this.checkClickOn);
  },
  watch: {
    classList() {
      this.getClassList();
    },
  },
  beforeUnmount() {
    window.removeEventListener("click", this.checkClickOn);
  },

  methods: {
    callToClose() {
      this.isOpen = false;
    },
    changeValue(value) {
      this.valueChecked = value;
    },
    checkClickOn(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false;
      }
    },
    getClassList() {
      this.outLine
        ? (this.classList = `btn-outline-${this.statusColor}`)
        : (this.classList = `btn-${this.statusColor}`);
      if (this.disable) this.classList += " disable";
      switch (this.size) {
        case "lg":
          this.classList += " btn-lg";
          break;
        case "sm":
          this.classList += " btn-sm";
          break;
        case "xs":
          this.classList += " btn-xs";
          break;
      }
      switch (this.location) {
        case "bottomRight":
          this.classDropdown += " dropdown-bottom-right";
          break;
        case "bottomLeft":
          this.classDropdown += " dropdown-bottom-left";
          break;
        case "topLeft":
          this.classDropdown += " dropdown-top-left";
          break;
        case "topRight":
          this.classDropdown += " dropdown-top-right";
          break;
        case "right":
          this.classDropdown += " dropdown-right";
          break;
        case "left":
          this.classDropdown += " dropdown-left";
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.btn {
  position: relative;
  padding: 10px 20px;
  // background-color: #747a81;
  // border: 1px solid #747a81;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: 0px;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &.isActive {
    opacity: 1;
    cursor: pointer;
  }
}

.dropdown {
  position: relative;
  width: fit-content;

  &-list {
    background: white;
    margin-top: 5px;
    position: absolute;
    z-index: 10;
    width: 100%;
    border: 1px solid black;
    border-radius: 4px;
  }
}
</style>
