import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "@/layout/BaseLayout.vue";
import Button from "@/components/Button/ButtonsLayout.vue";
import DropDown from "@/components/Dropdown/DropdownLayout.vue";
import Modal from "@/components/Modal/ModalLayout.vue";
import Avatar from "@/components/Avatar/AvatarLayout.vue";
import Input from "@/components/Input/InputLayout.vue";
import Login from "@/views/LoginPage.vue";
const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/menu",
    component: SideMenu,
    children: [
      {
        path: "/menu/button",
        component: Button,
        name: "Button",
      },
      {
        path: "/menu/dropDown",
        component: DropDown,
        name: "DropDown",
      },
      {
        path: "/menu/modal",
        component: Modal,
        name: "Modal",
      },
      {
        path: "/menu/avatar",
        component: Avatar,
        name: "Avatar",
      },
      {
        path: "/menu/input",
        component: Input,
        name: "Input",
      },
    ],
  },
  { path: "/*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // chuyển đến trang login nếu chưa được login
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("login");
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
