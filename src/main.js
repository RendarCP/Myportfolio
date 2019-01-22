import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './router/index.js';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAbzWd1xUtVrumLso61mC9mu0LUVR0VVb4",
  authDomain: "myportfolio-0217.firebaseapp.com",
  databaseURL: "https://myportfolio-0217.firebaseio.com",
  projectId: "myportfolio-0217",
  storageBucket: "myportfolio-0217.appspot.com",
  messagingSenderId: "845530695306"
}
firebase.initializeApp(config);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
