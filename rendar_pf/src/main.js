import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './router/index.js';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
