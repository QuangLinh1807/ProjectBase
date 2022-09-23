<template>
  <div class="basic-layout">
    <template class="side-bar-menu">
      <SideBarMenu />
    </template>
    <div :style="{ backgroundColor: 'white', height: '100%', width: '100%' }">
      <div class="dx-container">
        <div class="dx-content">
          <div class="dx-content-main">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarMenu from "@/components/SideBar/SideBarMenu.vue";
export default {
  name: "BasicLayout",
  components: { SideBarMenu },
};
</script>
<style lang="scss" scoped>
.basic-layout {
  display: flex;
  width: 100%;
  .side-bar-menu {
    display: flex;
    width: 15%;
  }
}
.dx-container {
  background: #fff;
  min-height: calc(100vh - 16px);
}

.dx-content-main {
  flex: auto;
  width: 100%;
  padding-left: 102px;
  padding-top: 32px;
  padding-right: 102px;
}

.dx-content {
  display: flex;
  transition-duration: 0.3s;
  margin: 0 auto;
}

.dx-content-wrap-comment {
  width: 100%;
  .dx-content-main {
    width: calc(100% - 581px);
  }
  .dx-content {
    width: 100%;
  }
}

.dx-content {
  display: flex;
  transition-duration: 0.3s;
  margin: 0 auto;
}
</style>

<style lang="scss">
body {
  background: #fff;
}
.disable-scroll {
  overflow: hidden;
}
#pp--body {
  height: calc(100vh - 64px);
  zoom: 100% !important;
}

.arrow-right {
  width: 50px !important;
}
.preview__image-container_change {
  z-index: 100 !important;
}
.wrap-override {
  @media (max-width: 767px) {
    background: #ffffff;
    height: 100vh;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
