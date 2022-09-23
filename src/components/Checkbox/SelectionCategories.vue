<template>
  <ul class="multivalent__content" :key="keyUpdate">
    <li v-for="item in categories" :key="item.id">
      <label class="mb-2 checkbox">
        <Checkbox
          :value="valueChecked"
          :id="item.id"
          @changeChecked="handleSelect"
        />
        <span>{{ item.name }}</span>
      </label>
    </li>
  </ul>
</template>
<script>
import Checkbox from "./../Checkbox/CheckboxBase.vue";
export default {
  name: "SelectionCategories",
  components: { Checkbox },
  props: {
    valueChecked: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
    },
  },
  data: function () {
    return {
      keyUpdate: 0,
    };
  },
  watch: {
    categories: {
      handler() {
        this.keyUpdate++;
      },
      deep: true,
    },
  },
  methods: {
    handleSelect(id) {
      let dataChange = [];
      if (this.valueChecked.includes(id))
        dataChange = this.valueChecked.filter((item) => item !== id);
      else {
        dataChange = this.valueChecked;
        dataChange.push(id);
      }
      this.$emit("handleChecked", dataChange);
    },
  },
};
</script>
<style lang="scss" scoped>
.multivalent__content {
  list-style: none;
  li {
    margin-bottom: 12px;
    .checkbox {
      display: flex;
      input {
        width: 34px;
      }
      span {
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
