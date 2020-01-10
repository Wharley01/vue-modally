<template>
  <div @click="closeModal" class="vm__modal__wrapper">
    <div class="vm__modal__container">
      <div :style="'padding: ' + modal_padding + 'px'" class="vm__modal__box">
        <div
          @click="
            e => {
              e.stopPropagation();
            }
          "
          :style="'max-width: ' + modal_width + 'px'"
          class="vm__modal__box_container animated faster"
          :class="{ zoomIn: !closed, zoomOut: closed }"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modal_index: {
      type: Number
    },
    modal_width: {
      type: Number,
      default: 700
    },
    modal_padding: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      closed: false,
      transition_delay: 300
    };
  },
  created() {},
  methods: {
    closeModal() {
      this.closed = true;
      this.root.$emit("close", this.modal_index);
    }
  }
};
</script>
<style src="../assets/animate.css"></style>
<style lang="scss">
.vm__modal__wrapper {
  position: fixed;
  width: 100%;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  .vm__modal__container {
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    overflow: auto !important;

    .vm__modal__box {
      .vm__modal__box_container {
        border-radius: 12px;
        background: #fff;
        margin-left: auto;
        width: 100%;
        margin-right: auto;
      }
    }
  }
}
</style>
