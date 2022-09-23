<template>
  <!-- <sidebar-menu :menu="menu" :hideToggle="false" :theme="theme" /> -->
  <div class="page-navigation-inner">
    <div class="page-navigation-title">
      <div class="icon">
        <img src="" alt="" />
      </div>
      <div class="name" :title="titleSidebar">
        <span>{{ titleSidebar }}</span>
      </div>
    </div>
    <div
      class="sidebar-list"
      v-for="(menu, menuIndex) in menus"
      :key="menuIndex"
      :class="classData(menu)"
    >
      <div class="sidebar-title" v-if="menu.title">
        <div class="icon" v-if="menu.icon">
          <i :class="menu.icon ? menu.icon : ''"></i>
        </div>
        <div class="name" :title="menu.title">
          <span>{{ menu.title }}</span>
        </div>
      </div>
      <div
        v-for="(submenu, subMenuIndex) in menu.items"
        :key="subMenuIndex"
        style="width: 100%"
      >
        <PageNavigationItem
          :name="submenu.name"
          :url="submenu.url"
          :icon="submenu.iconName"
          :hasGroup="submenu.items && submenu.items.length > 0"
          :collapsed="submenu.collapse"
          @handleClickShowSubMenu="
            showSubMenu(menuIndex, subMenuIndex, -1, submenu.collapse)
          "
          :id="null"
        />
        <AnimationFadeUp>
          <div
            v-if="!!submenu.items"
            style="padding-left: 12px"
            v-show="submenu.collapse"
          >
            <div
              v-for="(submenu1, subMenuIndex1) in submenu.items"
              :key="subMenuIndex1"
            >
              <PageNavigationItem
                :name="submenu1.name"
                :url="submenu1.url"
                :icon="submenu1.iconName"
                :hasGroup="submenu1.items && submenu1.items.length > 0"
                :collapsed="submenu1.collapse"
                :id="submenu1.id"
                @onRedirect="changeCategoryPage(submenu1.url)"
              />
            </div>
          </div>
        </AnimationFadeUp>
      </div>
    </div>
  </div>
</template>

<script>
import PageNavigationItem from "./PageNavigationItem.vue";
import AnimationFadeUp from "./AnimationFadeUp";
export default {
  name: "SideBarMenu",
  data() {
    return {
      freeLocationMenu: [],
      menus: [],
      activeUrl: "",
    };
  },
  components: { PageNavigationItem, AnimationFadeUp },
  created() {
    this.getListSidebar();
    this.praiseData();
  },
  methods: {
    classData(val) {
      if (val.title == "Labor Management Apps" || val.title == "労務管理 Apps")
        return "hidden-border-top";
    },
    changeCategoryPage(url) {
      if (!url) this.$router.push({ path: `/dashboard` });
      this.$router.push({ path: url });
    },
    showSubMenu(menuIndex, subMenuIndex, subMenuIndex1, status) {
      if (subMenuIndex1 == -1) {
        this.menus[menuIndex].items[subMenuIndex].collapse = !status;
      } else {
        this.menus[menuIndex].items[subMenuIndex].items[
          subMenuIndex1
        ].collapse = !status;
      }
    },
    praiseData() {
      let menuGroup = [];
      if (!this.freeLocationMenu) {
        return;
      }
      this.freeLocationMenu.forEach((group) => {
        let menu = {};
        menu.icon = group.icon ? group.icon : "";
        menu.title = group.name;
        menu.url = group.url;
        menu.items = [];
        group.menuLocation.forEach((submenu) => {
          let obj = {
            name: submenu.name,
            url: submenu.url,
            isOpenNewTab: submenu.isOpenNewTab,
            iconName: submenu.iconName,
            collapse: true,
          };
          if ("menus" in submenu) {
            obj.items = submenu.menus.map((i) => {
              i = { ...i, ...{ collapse: true } };
              return i;
            });
          }
          menu.items.push(obj);
        });
        menuGroup.push(menu);
      });
      this.menus = menuGroup;
    },
    async getListSidebar() {
      let menuSidebar = {
        meta: {
          taskCount: 2,
        },
        data: {
          categories: [
            {
              name: "Menu",
              menus: [
                {
                  url: `/`,
                  name: "Dashboard",
                },
                {
                  url: `/button`,
                  name: "Button",
                },
                {
                  url: `/dropdown`,
                  name: "Dropdown",
                },
                {
                  url: `/modal`,
                  name: "Modal",
                },
                {
                  url: `/avatar`,
                  name: "Avatar",
                },
                {
                  url: `/input`,
                  name: "Input",
                },
              ],
              url: "",
            },
          ],
        },
      };
      // get sub-category
      this.titleSidebar = menuSidebar.data.title;
      this.freeLocationMenu = menuSidebar.data.categories.map((item) => {
        return {
          name: "",
          menuLocation: [item],
        };
      });
    },
  },
};
</script>
<style>
.page-navigation-inner {
  width: 100%;
  margin-left: 20px;
}
</style>
