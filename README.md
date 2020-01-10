# modal

## Installation

```
yarn add vue-modally
```

### How to use

Include plugin in your `main.js` file.

```javascript
import Modally from 'vue-modally'

Vue.use(Modally)

/*
you can provide default options like this:

Example:

Vue.use(Modally, { width: 900; padding: 20 });


```

Put Vue-Modally's Root component in your App.vue

```jsx
<template>
<div id="app">
...

<router-view />

<VModalsComponent></VModalsComponent>//here
...
</div>
</template>

...
```

### Open a modal

Example below shows how to evoke a modal using Vue component

#### your template

```html
<template>
  <button @click="openModal">Open my modal</button>
</template>
```

#### Your javascript

```javascript
import MyModal from "./MyModal.vue"; //import your Vue component
export default {
  created() {},
  methods: {
    openModal() {
      this.$vmodal.show(MyModal, {
        props: { name: "wale", company: "macroware" }, // you have access to this props in MyModal compoent
        options: { width: 500 }
      });
    }
  }
};
```
