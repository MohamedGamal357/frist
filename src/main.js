import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/counter'
import './assets/tailwind.css'
import {createPinia} from 'pinia'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const options = {
    // You can set your default options here
};
const pinia = createPinia()
createApp(App).use(Toast).use(store).use(router).use(pinia).mount('#app')
