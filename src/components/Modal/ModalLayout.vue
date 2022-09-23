<template>
  <div>
    <div class="">
      <h2 class="">Modal</h2>
    </div>
    <div class="basic-button">
      <div class="title">#Basic Modal</div>
      <div class="basic-button_child">
        <BasicButton
          :statusColor="'primary'"
          :outLine="false"
          :text="'Open Modal'"
          @click="openModal"
        />
      </div>
    </div>

    <ModalBase v-if="isOpenModal" @closeModal="closeModal" />
    <div v-if="isOpenModal" class="overlay" @click="closeModal"></div>
  </div>
</template>
<script>
import BasicButton from "@/components/Button/BasicButton/BasicButton.vue";
import ModalBase from "@/components/Modal/ModalBase.vue";

export default {
  data() {
    return {
      isOpenModal: false,
    };
  },
  components: { BasicButton, ModalBase },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
    closeModal() {
      this.isOpenModal = false;
    },
  },
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
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1049;
  overflow: hidden;
  outline: 0;
  opacity: 0.5;
  background-color: #000;
}
</style>
