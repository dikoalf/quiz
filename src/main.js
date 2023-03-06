import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/main.css';
import store from './store'

// import VueSweetalert2 from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  // .use(VueSweetalert2)
  .use(router)
  .use(store)
  .mount('#app')