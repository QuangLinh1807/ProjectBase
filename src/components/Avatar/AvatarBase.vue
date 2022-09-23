<template>
  <div class="avatar placeholder" :class="statusClass">
    <div v-if="imgList" :class="avatarClass">
      <img :class="imgClass" :src="imgList" />
    </div>
    <div class="no-img" v-else :class="avatarClass">
      <span class="text-xl">QL</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "lg",
    },
    round: {
      type: String,
      default: "xl",
    },
    status: {
      type: String,
      default: "",
    },
    imgList: {
      type: String,
    },
  },
  data() {
    return {
      avatarClass: "",
      imgClass: "",
      statusClass: "",
    };
  },
  components: {},
  created() {
    this.getClassList();
  },
  watch: {
    classList() {
      this.getClassList();
    },
  },
  methods: {
    getClassList() {
      switch (this.size) {
        case "lg":
          this.avatarClass += " w-24";
          break;
        case "nm":
          this.avatarClass += " w-16";
          break;
        case "sm":
          this.avatarClass += " w-12";
          break;
        case "xs":
          this.avatarClass += " w-8";
          break;
      }
      this.imgClass = this.round == "xl" ? " rounded-xl" : " rounded-full";
      if (this.status == "online") {
        this.statusClass = " online";
      } else if (this.status == "offline") {
        this.statusClass = " offline";
      } else this.statusClass = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.avatar {
  position: relative;
  display: inline-flex;
  margin: 0 10px;
  div {
    display: block;
    aspect-ratio: 1/1;
    overflow: hidden;
  }
  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }
  .text-xl {
    font-size: 1.875rem;
    line-height: 1.75rem;
  }
}
.placeholder {
  .no-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    border-radius: 9999px;
    opacity: 0.8;
  }
}
</style>
