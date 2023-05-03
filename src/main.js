import {createApp} from 'vue'
import {createPinia} from 'pinia';
import {router} from './router';
import 'animate.css';
import "./style/style.scss"
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const store = createPinia();
const options = {
    transition: "Vue-Toastification__fade",
    maxToasts: 2,
    newestOnTop: true,
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false
}
createApp(App).use(Toast, options).use(router).use(store).mount('#app')
