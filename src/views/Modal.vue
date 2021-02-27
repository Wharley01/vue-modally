<template>
  <div @click="closeModal" :class="blur ? 'blur' : ''" class="vm__modal__wrapper">
    <div
      class="vm__modal__container"
      :class="
        `${modal_class[modal_type].cls}`
      "
    >
      <div :style="modal_class[modal_type].style" class="vm__modal__box">
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
                ? modal_class[modal_type].anim_in
                : modal_class[modal_type].anim_out
            } ${modal_class[modal_type].cls}`
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
      transition_delay: 300,
      modal_class:{
          modal: {cls: "is-modal",anim_in: "zoomIn",anim_out: "zoomIn",style: ''},
          panel: {cls: "is-panel",anim_in: "slideInUp",anim_out: "slideOutDown",style: 'padding: 0'},
          side: {cls: "is-side",anim_in: "slideInRight",anim_out: "slideOutRight",style: 'padding: 0'}
      }
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
    },
    is_side() {
      return this.modal_type === "side";
    },

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
    &.is-side {
      margin-left: auto;
      margin-bottom: 0;
      width: auto!important;
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
        &.is-side {
          border-bottom-right-radius: 0 !important;
          border-top-right-radius: 0 !important;
          height: 100vh;
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
