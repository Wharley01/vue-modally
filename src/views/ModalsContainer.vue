<template>
  <div class="home">
    <Modal
      v-for="(modal, index) in modals"
      :key="index"
      :bind="$attrs"
      @close="closeModal"
      :modal_index="index"
      :modal_width="modal.options.width"
      :modal_padding="modal.options.padding"
      :style="'z-index: ' + index"
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
import VModal from "../plugin";
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
      modals: []
    };
  },
  created() {
    this.root.$on("addNewModal", this.addNewModal);
    this.root.$on("closeModal", this.closeModal);
  },
  methods: {
    addNewModal(component, configs) {
      component = {
        ...component,
        ...configs
      };

      console.log({ component });
      this.modals.push(component);
    },
    closeModal(index) {
      if (index > -1) this.modals.splice(index, 1);
    }
  },
  computed: {}
};
</script>
