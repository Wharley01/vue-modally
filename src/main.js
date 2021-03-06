import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Modally from '../index';
import "animate.css"
Vue.use(Modally, {
  background: 'red'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')