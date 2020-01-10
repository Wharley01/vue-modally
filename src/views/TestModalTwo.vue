<template>
  <div style="padding: 40px" class>
    <h1>TEST MODAL TWO {{name}}</h1>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  name: "ModalSecond",
  props: ["name"]
};
</script>

<style>
</style>