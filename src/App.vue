<template>
  <div id="app">
    <router-view />
    <VModalsComponent ref="root_modal_container"></VModalsComponent>
  </div>
</template>
<script>
export default {
  name: "modal_container",
  components: {}
};
</script>