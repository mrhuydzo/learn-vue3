import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About"

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
        meta: {
            layout: "default"
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