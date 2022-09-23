<template>
  <div class="base-input-radio">
    <input
      :type="inputField.type"
      :placeholder="inputField.placeholder"
      :name="inputField.name"
      class="input-radio border-color radio-primary"
      :class="classList"
      v-model.trim="textValue"
      :checked="textValue"
    />
    <span class="title">{{ inputField.label }}</span>
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
      this.$emit("input", val);
    },
  },
  methods: {
    getClassList() {},
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.base-input-radio {
  .radio-primary:checked {
    background-color: $primary;
  }
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  .input-radio {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid $primary;
    border-radius: 9999px;
    border-width: 1px;
    border-color: $primary;
    --tw-border-opacity: 0.2;
    transition: background, box-shadow 0.2s ease-in-out;
  }
  .title {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>
