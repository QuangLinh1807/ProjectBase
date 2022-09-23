<template>
  <div
    class="menu-item"
    :class="{ 'has-group': hasGroup, active: isActive }"
    @click="showSubMenu"
  >
    <div
      class="menu-item__toggle"
      v-if="hasGroup"
      :class="{ collapsed: collapsed }"
    ></div>
    <div class="menu-item__link" @click="redirect(url)">
      <div class="icon" v-if="icon">
        <i :class="icon ? icon : ''"></i>
      </div>
      <div class="name" :title="name">
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNavigationItem",
  components: {},
  props: {
    name: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    url: {
      require: true,
    },
    hasGroup: {
      type: Boolean,
      require: true,
      default: false,
    },
    collapsed: {
      type: Boolean,
      require: true,
      default: true,
    },
    id: {
      type: Number,
      require: false,
    },
  },
  computed: {
    isActive() {
      this.$route;
      return window.location.pathname == this.url;
    },
  },
  watch: {
    "$route.href": {
      handler: function () {
        this.isActive = window.location.pathname == this.url;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    redirect() {
      this.$emit("onRedirect");
    },
    showSubMenu() {
      this.$emit("handleClickShowSubMenu");
    },
    checkUrlItem(url) {
      return url.includes("undefined");
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;
  .menu-item__link {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .menu-item__toggle {
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    .icon {
      display: flex;
      align-items: center;
      background-size: 24px;
      height: 24px;
      width: 24px;
    }
  }
  .menu-item__toggle.collapsed {
    transform: rotate(0deg);
  }
  .current-menu-item {
    font-weight: bold;
    font-size: 16px;
    color: #007bc3;
  }
  &.has-group {
    .menu-item__link {
      width: calc(100% - 24px);
    }
    .menu-item__toggle {
      display: flex;
      align-items: center;
    }
  }
  .icon,
  .icon i {
    background-size: 24px 24px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-size: 16px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.active {
    color: #007bc3;
    background-color: #f4f7fb;
  }
  &:hover {
    color: #007bc3;
  }
}
</style>
