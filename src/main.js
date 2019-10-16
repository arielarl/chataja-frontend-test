import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import store from './store/store'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDK1fcvk2bNhlsYxMCrfPCAn4SY1CU2Qng",
  authDomain: "chataja-9a2dd.firebaseapp.com",
  databaseURL: "https://chataja-9a2dd.firebaseio.com",
  projectId: "chataja-9a2dd",
  storageBucket: "chataja-9a2dd.appspot.com",
  messagingSenderId: "1015379872971",
  appId: "1:1015379872971:web:1c58cf9d61fbaaa250df4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

// db.settings({
//   timestampsInSnapshots: true
// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
