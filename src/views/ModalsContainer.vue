<template>
  <div class="home">
    <Modal
      v-for="(modal, index) in modals"
      :key="index"
      :bind="$attrs"
      :modal_index="index"
      :modal_width="modal.options.width"
      :modal_padding="modal.options.padding"
      :style="'z-index: ' + (20 + index)"
    >
      <component
        @close="closeModal(index)"
        v-bind="modal.props"
        :is="modal.component"
      ></component>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "./Modal";
export default {
  name: "ModalsContainer",
  inheritAttrs: false,
  props: {
    tst: String
  },
  components: {
    Modal
  },
  data() {
    return {
      modals: [],
      transition_delay: 300
    };
  },
  created() {
    this.root.$on("addNewModal", this.addNewModal);
    this.root.$on("close", this.closeModal);
    if (typeof window != "undefined") {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27) {
          this.closeLastModal();
        }
      });
    }
  },
  methods: {
    addNewModal(component, configs) {
      component = {
        ...component,
        ...configs
      };

      this.modals.push(component);
    },
    closeModal(index) {
      setTimeout(() => {
        if (index > -1) this.modals.splice(index, 1);
      }, this.transition_delay);
    },
    closeLastModal() {
      if (this.modals.length > 0) {
        this.modals.pop();
      }
    }
  },
  computed: {}
};
</script>
