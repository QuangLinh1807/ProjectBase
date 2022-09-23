<template>
  <div>
    <div class="">
      <h2 class="title">Dropdown</h2>
    </div>
    <div class="basic-button">
      <div class="title">#Basic Dropdown</div>
      <div class="basic-button_child">
        <DropdownBase
          id="dropdownmenu1"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          >Dropdown</DropdownBase
        >
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Dropdown Color</div>
      <div class="basic-button_child">
        <DropdownBase
          id="dropdownmenu2"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'primary'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu3"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'secondary'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu4"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'success'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu5"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'warning'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu6"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'danger'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu7"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          >Dropdown</DropdownBase
        >
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Dropdown Location</div>
      <div class="basic-button_child">
        <DropdownBase
          id="dropdownmenu8"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'bottomLeft'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu9"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'bottomRight'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu11"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'topLeft'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu12"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'topRight'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu13"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'right'"
          >Dropdown</DropdownBase
        >
        <DropdownBase
          id="dropdownmenu14"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :location="'left'"
          >Dropdown</DropdownBase
        >
      </div>
    </div>
    <div class="basic-button">
      <div class="title">#Dropdown Disable</div>
      <div class="basic-button_child">
        <DropdownBase
          id="dropdownmenu1"
          :arrays="arrays"
          :outLine="false"
          :statusColor="'dark'"
          :disable="true"
          >Dropdown</DropdownBase
        >
      </div>
    </div>
  </div>
</template>
<script>
import DropdownBase from "@/components/Dropdown/DropdownBase.vue";
export default {
  data() {
    return {
      arrays: [
        {
          id: 1,
          text: "Item 1",
          link: "/about",
        },
        {
          id: 2,
          text: "Item 2",
          link: "/about",
        },
        {
          id: 3,
          text: "Item 3",
          link: "/about",
        },
        {
          id: 4,
          text: "Item 4",
          link: "/about",
        },
        {
          id: 5,
          text: "Item 5",
          link: "/about",
        },
      ],
    };
  },
  components: { DropdownBase },
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
