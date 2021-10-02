import { createApp } from "vue";
// import Vue from 'vue';
// import Vuelidate from 'vuelidate';
import App from "./App.vue";
// import VueResource from 'vue-resource'
import router from "./router";
import JQuery from 'jquery'
window.$ = JQuery

import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css';



createApp(App).use(router).mount("#app");
// Vue.use(VueResource);  
// Vue.use(Vuelidate);
