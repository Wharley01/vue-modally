<template>
  <div class="home">
    <Modal
      v-for="(modal, index) in modals"
      :key="index"
      :bind="$attrs"
      :modal_index="index"
      :modal_width="modal.options.width"
      :modal_padding="modal.options.padding"
      :modal_closable="modal.options.closable"
      :modal_background="modal.options.background"
      :modal_type="modal.options.type"
      :blur="modal.options.blur"
      :closed="modal.closed"
      :style="'z-index: ' + (201 + index)"
    >
      <component
        @close="closeModal(index,$event)"
        @close-all="closeAllModal($event)"
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
    this.$___root.$on("addNewModal", this.addNewModal);
    this.$___root.$on("close", this.closeModal);
    this.$___root.$on("close-all", this.closeAllModal);

    if (typeof window != "undefined") {
      document.addEventListener("keydown", e => {
        if (e.keyCode === 27) {
          this.closeLastModal();

        }
      });
    }
  },
  methods: {
    addNewModal(component, configs, key) {
      component = {
        ...component,
        ...configs,
        closed: false
      };

      this.modals.push(component);
    },
    setModalCloseState(index) {
      let modals = this.modals;
      modals[index].closed = true;
      this.modals = modals;
    },
    closeModal(index,$event) {
      this.setModalCloseState(index);
      this.fireClosedCallback(index,$event);
      setTimeout(() => {
        if (index > -1) this.modals.splice(index, 1);
      }, this.transition_delay);
    },
    closeAllModal($event) {
      // this.modals = [];
      // return;
      let total = this.modals.length;
      if (total === 1) {
        this.closeLastModal();
        return;
      }

      for (let index = 0; index < total; index++) {
        this.setModalCloseState(index);
        this.fireClosedCallback(index,$event);
        setTimeout(() => this.modals.pop(), index * this.transition_delay);
      }
    },
    fireClosedCallback(index,$event){
      let closedFnc = this.modals[index].onClosed;
      if(closedFnc){
        closedFnc($event);
      }
    },
    closeLastModal() {
      if (this.modals.length > 0) {
        this.setModalCloseState(this.modals.length - 1);
        this.fireClosedCallback(0);

        setTimeout(() => {
          if (this.modals.length > 0) this.modals.pop();
        }, this.transition_delay);
      }
    }
  },
  computed: {
    cmp_key(){
      return Math.random()
    }
  }
};
</script>
