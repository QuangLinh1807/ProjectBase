<template>
  <div>
    <div class="">
      <h2 class="">Avatar</h2>
    </div>
  </div>
  <div class="basic-avatar">
    <div class="title">#Basic Avatar</div>
    <div class="basic-avatar_child">
      <AvatarBase :imgList="imgList" />
    </div>
  </div>
  <div class="basic-avatar">
    <div class="title">#Sizes Avatar</div>
    <div class="basic-avatar_child">
      <AvatarBase :size="'lg'" :imgList="imgList" />
      <AvatarBase :size="'nm'" :imgList="imgList" />
      <AvatarBase :size="'sm'" :imgList="imgList" />
      <AvatarBase :size="'xs'" :imgList="imgList" />
    </div>
  </div>
  <div class="basic-avatar">
    <div class="title">#Avatar rounded</div>
    <div class="basic-avatar_child">
      <AvatarBase :round="'xl'" :imgList="imgList" />
      <AvatarBase :round="'circle'" :imgList="imgList" />
    </div>
  </div>
  <div class="basic-avatar">
    <div class="title">#Avatar with presence indicator</div>
    <div class="basic-avatar_child">
      <AvatarBase :round="'circle'" :status="'online'" :imgList="imgList" />
      <AvatarBase :round="'circle'" :status="'offline'" :imgList="imgList" />
    </div>
  </div>
  <div class="basic-avatar">
    <div class="title">#Avatar with ring</div>
    <div class="basic-avatar_child">
      <AvatarBase :round="'circle'" :status="'online'" />
    </div>
  </div>
  
</template>
<script>
import AvatarBase from "@/components/Avatar/AvatarBase.vue";
export default {
  data() {
    return {
      imgList: "https://placeimg.com/192/192/people",
    };
  },
  components: { AvatarBase },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  margin-bottom: 10px;
}
.basic-avatar {
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
