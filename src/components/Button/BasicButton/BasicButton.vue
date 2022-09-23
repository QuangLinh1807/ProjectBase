<template>
  <button class="btn" :class="classList" @click.prevent="handleSubmit">
    <span
      v-if="icon"
      class="icon-left"
      :class="icon && location ? icon : ''"
    ></span>
    <span v-if="loading" class="loader"></span>
    <span>{{ text }}</span>
    <span
      v-if="icon"
      class="icon-right"
      :class="icon && !location ? icon : ''"
    ></span>
  </button>
</template>
<script>
export default {
  props: {
    statusColor: {
      type: String,
    },
    text: {
      type: String,
    },
    outLine: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    disable: {
      type: Boolean,
    },
    icon: {
      type: String,
    },
    location: {
      type: Boolean,
      note: "location icon",
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      classList: "",
    };
  },
  components: {},
  created() {
    this.getClassList();
  },
  watch: {
    classList() {
      this.getClassList();
    },
    loading() {
      this.getClassList();
    },
  },
  methods: {
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
      this.classList += this.loading ? " loading" : "";
    },
    handleSubmit() {
      if (!this.disable && !this.loading) {
        this.$emit("clickButton");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
</style>
