<template>
  <input
    class="form-group mr-2"
    type="checkbox"
    :checked="checked"
    @change="onChange"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    value: {
      handler() {
        this.checked = this.value.includes(this.id);
      },
      deep: true,
    },
  },
  created() {
    this.checked = this.value?.includes(this.id);
  },
  methods: {
    onChange() {
      this.$emit("changeChecked", this.id);
    },
  },
};
</script>

<style>
input[type="checkbox"] {
  height: 24px;
  width: 24px;
  margin: 0;
  background-image: url(../../assets/icons/checkmark-squarebox.png);
  background-repeat: no-repeat;
  outline: 0;
  box-shadow: none;
  vertical-align: -7px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-image: url(../../assets/icons/checkmark-square.png);
}
</style>
