<template>
  <div class=" ">
    <div class="">
      <h2 class="">Inputs</h2>
    </div>
    <div class="basic-input">
      <div class="title">#Basic Input</div>
      <div class="basic-input_child" v-for="item in listFields" :key="item.id">
        <InputBase :inputField="item" @clickInput="handleValue" />
      </div>
    </div>
    <div class="basic-input">
      <div class="title">#Basic Radio</div>
      <div class="basic-input_child" v-for="item in listRadio" :key="item.id">
        <RadioBase :inputField="item" />
      </div>
    </div>
    <div class="basic-input">
      <div class="title">#Basic Checkbox</div>
      <div class="basic-input_child list-category">
        <SelectionCategories
          :categories="childOptions"
          @handleChecked="handleCheckedCategory"
          :valueChecked="valueData"
        />
        <span>{{ childOptions.find((item) => item == valueData) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import InputBase from "@/components/Input/InputBase.vue";
import RadioBase from "@/components/Input/RadioBase.vue";
import SelectionCategories from "@/components/Checkbox/SelectionCategories.vue";

export default {
  props: {},
  data() {
    return {
      listFields: [
        {
          id: 1,
          name: "name",
          label: "Label 1",
          value: "",
          type: "text",
          placeholder: "Type here",
          color: "dark",
        },
        {
          id: 2,
          name: "name",
          label: "Label 2",
          value: "",
          type: "text",
          placeholder: "Type here",
          color: "dark",
          icon: "ic--search",
        },
      ],
      listRadio: [
        {
          id: 1,
          name: "name",
          label: "Label 1",
          value: "",
          type: "radio",
          placeholder: "Type here",
          color: "black",
          checked: true,
        },
        {
          id: 1,
          name: "name",
          label: "Label 2",
          value: "",
          type: "radio",
          placeholder: "Type here",
          color: "black",
          checked: false,
        },
      ],
      childOptions: [
        { id: 0, name: "Checkbox 0" },
        { id: 1, name: "Checkbox 1" },
        { id: 2, name: "Checkbox 2" },
        { id: 3, name: "Checkbox 3" },
        { id: 4, name: "Checkbox 4" },
        { id: 5, name: "Checkbox 5" },
        { id: 6, name: "Checkbox 6" },
      ],
      valueData: [],
    };
  },
  components: { InputBase, RadioBase, SelectionCategories },
  methods: {
    handleValue(val) {
      console.log("input", val);
    },
    handleCheckedCategory(listSelected) {
      this.valueData = listSelected;
      console.log("checked", this.valueData);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.basic-input {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  .list-category {
    width: 284px;
    border: 1px solid #dcdcdc;
    padding: 10px;
    max-height: 346px;
    overflow: auto;
    border-radius: 4px;
  }
}
/deep/ .ic--sun-primary {
  position: absolute;
  top: 50%;
  font-size: 24px;
}
</style>
