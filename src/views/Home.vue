<template>
  <div>
    <h1>HOME</h1>

    <button @click="test2">Fire first</button>
    <button @click="test">Fire second</button>
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
        options: { width: 500 }
      });
    },
    test2() {
      this.$vmodal.show(TestModalOne, {
        props: { name: "Adewale" },
        options: { width: 900, padding: 40 }
      });
    }
  }
};
</script>

<style></style>
