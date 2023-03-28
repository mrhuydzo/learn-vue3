import {createWebHistory, createRouter} from "vue-router";
// import HomePage from "@/views/index";
import About from "@/views/About"
// import Register from "@/views/Register"

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */"@/views/index"),
        name: 'Home',
        meta: {
            layout: "default"
        }
    },
    {
        path: '/register',
        component: () => import(/* webpackChunkName: "register" */ "@/views/Register"),
        name: 'Register',
        meta: {
            layout: "auth"
        }
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ "@/views/Login"),
        name: 'Login',
        meta: {
            layout: "auth"
        }
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            layout: "auth"
        },
        component: About
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;