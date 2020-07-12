<template>
  <div @click="closeModal" :class="blur ? 'blur' : ''" class="vm__modal__wrapper">
    <div
      class="vm__modal__container"
      :class="
        `${modal_type == 'modal' && 'is-modal'} ${modal_type == 'panel' &&
          'is-panel'}`
      "
    >
      <div :style="'padding: ' + (!is_panel ? modal_padding : 0) + 'px'" class="vm__modal__box">
        <div
          @click="
            (e) => {
              e.stopPropagation();
            }
          "
          :style="
            'max-width: ' + modal_width + 'px; background: ' + modal_background
          "
          class="vm__modal__box_container animated faster"
          :class="
            `${
              !closed
                ? is_panel
                  ? 'slideInUp'
                  : 'zoomIn'
                : is_panel
                ? 'slideOutDown'
                : 'zoomOut'
            } ${is_panel && 'is-panel'}`
          "
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
    closed: {
      type: Boolean,
      default: false
    },
    modal_width: {
      type: Number,
      default: 700
    },
    modal_background: {
      type: String,
      default: "white"
    },
    modal_padding: {
      type: Number,
      default: 20
    },
    modal_closable: {
      type: Boolean,
      default: true
    },
    modal_type: {
      type: String,
      default: 20
    },
    blur: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      transition_delay: 300
    };
  },
  created() {},
  methods: {
    closeModal() {
      if (this.modal_closable) {
        this.$___root.$emit("close", this.modal_index);
      }
    }
  },
  computed: {
    is_panel() {
      return this.modal_type === "panel";
    }
  }
};
</script>
<style src="../assets/animate.css"></style>
<style lang="scss">
.vm__modal__wrapper {
  position: fixed;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  &.blur {
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
  }

  .vm__modal__container {
    &.is-modal {
      margin-top: auto;
      margin-bottom: auto;
    }
    &.is-panel {
      margin-top: auto;
      margin-bottom: 0;
    }
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    overflow: auto !important;
    .vm__modal__box {
      .vm__modal__box_container {
        &.is-panel {
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }
        border-radius: 15px;
        margin-left: auto;
        width: 100%;
        margin-right: auto;
      }
    }
  }
}
</style>
