<template>
  <div>
    <h1>HOME</h1>

    <button @click="test2">Fire first</button>
    <button @click="test">Fire second</button>
    <button @click="side">Fire side</button>
    <button @click="modal">Fire modal</button>
  </div>
</template>

<script>
import TestModalTwo from "./TestModalTwo";
import TestModalOne from "./TestModalOne";
export default {
  created() {},
  methods: {
    test() {
      this.$vmodal.show(TestModalTwo, {
        props: { name: "wale", company: "macroware" },
        options: { width: 500, type: "panel" },
      },() => {
        console.log('I am closed')
      });
    },
    modal() {
      this.$vmodal.show(TestModalTwo, {
        props: { name: "wale", company: "macroware" },
        options: { width: 500, type: "modal" },
      },() => {
        console.log('I am closed')
      });
    },
    side() {
      this.$vmodal.show(TestModalTwo, {
        props: { name: "wale", company: "macroware" },
        options: { width: 400, type: "side" },
      },() => {
        console.log('I am closed')
      });
    },
    async test2() {
      let res = await this.$openModalAsync(TestModalOne, {
        props: { name: "Adewale" },
        options: {
          width: 900,
          padding: 40,
          type: "panel",
          blur: false
        },
      });

      console.log({res})
      console.log('resolved')
    },
  },
};
</script>

<style></style>
