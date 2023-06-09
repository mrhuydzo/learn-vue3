import {createApp} from 'vue'
import App from './App.vue'
import "./assets/css/index.css"
import router from './router'
import {registerGlobalComponent} from "@/utils/import";
import {fireStoreAuth} from "@/config/firebase";

let app;
fireStoreAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        registerGlobalComponent(app)
        app.use(router)
        app.mount('#app')
    }
})

