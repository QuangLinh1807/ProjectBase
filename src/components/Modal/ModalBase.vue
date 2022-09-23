<template>
  <div class="modal fade" id="exampleModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="exampleModalLabel">Title</h2>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">Body</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-dark"
            data-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="handleSubmit">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpenModal: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    handleSubmit() {
      //Todo: submit form
      console.log("Submit Succes!!!");
      this.$emit("closeModal");
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/style.scss";
.modal {
  width: 25%;
  position: fixed;
  left: 50%;
  z-index: 1050;
  overflow: hidden;
  display: block;
  transform: translate(-50%, -50%);
  .modal-dialog {
    max-width: 500px;
    margin: auto;
    .modal-content {
      flex-direction: column;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      .modal-header {
        display: flex;
        align-items: flex-start;
        padding: 1rem;
        border-bottom: 1px solid #e9ecef;
        .modal-title {
          margin-bottom: 0;
          line-height: 1.5;
          margin-top: 0;
        }
        .close {
          border: 0;
          background-color: #fff;
          font-size: 30px;
          padding: 1rem;
          margin: -1rem -1rem -1rem auto;
          cursor: pointer;
        }
      }
      .modal-body {
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
      }
      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem;
        border-top: 1px solid #e9ecef;
      }
    }
  }
}
.fade {
  transition: opacity 0.15s linear;
}
</style>
