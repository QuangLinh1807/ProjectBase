<template>
  <router-view />
  <div v-if="$route.path != '/login'" class="log-out" @click="logOut">
    Log out
  </div>
</template>
<script>
export default {
  methods: {
    logOut() {
      this.$router.push({ path: `/login` });
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .ic--sun-primary {
  background-image: url("assets/icons/sun-primary.svg");
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 32px;
  width: 32px;
  height: 32px;
}
/deep/ .ic--search {
  background-image: url("assets/icons/search.svg");
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 26px;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 52%;
  margin: 0 10px;
}
.log-out {
  position: absolute;
  top: 40px;
  right: 7%;
  width: 80px;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #343a40;
}
.log-out:hover {
  background-color: #8f9091;
  color: #fff;
  border: 0;
  cursor: pointer;
}
</style>
