<template>
  <div class="base-input" :class="inputField.error ? 'error-input' : ''">
    <span class="title">{{ inputField.label }}</span>
    <div class="icon-input cp-icon-search"></div>
    <span
      v-if="inputField.icon"
      :class="inputField.icon ? inputField.icon : ''"
    ></span>
    <input
      :type="inputField.type"
      :name="inputField.name"
      class="input w-full p-32 max-w-xs border-color"
      :class="classList"
      v-model.trim="textValue"
    />
    <div class="error" v-if="inputField.error">
      Invalid {{ inputField.label }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inputField: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      textValue: "",
      classList: "",
    };
  },
  components: {},
  created() {
    this.getClassList();
  },
  watch: {
    textValue(val) {
      this.$emit("clickInput", val);
    },
  },
  methods: {
    getClassList() {
      if (this.inputField.icon) {
        this.classList += ` pl-50`;
      }
      switch (this.inputField.color) {
        case "primary":
          this.classList += ` border-color-primary`;
          break;
        case "secondary":
          this.classList += ` border-color-secondary`;
          break;
        case "success":
          this.classList += ` border-color-success`;
          break;
        case "warning":
          this.classList += ` border-color-warning`;
          break;
        case "danger":
          this.classList += ` border-color-danger`;
          break;
        case "dark":
          this.classList += ` border-color-dark`;
          break;
        case "black":
          this.classList += ` border-color-black`;
          break;
        case "while":
          this.classList += ` border-color-while`;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.base-input {
  margin-bottom: 10px;
  position: relative;
  .title {
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .icon-input {
    position: absolute;
    left: 9px;
    color: #666;
    font-size: 24px;
    &::before {
      content: "\e9fe";
    }
  }
  .pl-50 {
    padding-left: 50px;
  }
  .error {
    animation-name: errorShake;
    animation-duration: 0.3s;
    color: red;
    margin-top: 10px;
  }
  .error-input {
    .input {
      border-color: red;
    }
  }
}
</style>
