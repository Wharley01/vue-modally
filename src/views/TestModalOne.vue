<template>
  <div style="padding: 40px" class>
    <h1>TEST MODAL ONE</h1>
    <button @click="test">Fire second</button>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
import TestModalTwo from "./TestModalTwo";

export default {
  name: "ModalOne",
  methods: {
    test() {
      this.$vmodal.show(TestModalTwo, {
        props: { name: "Adewale" },
        options: { width: 500, type: "panel" },
      });
    },
  },
};
</script>

<style></style>
