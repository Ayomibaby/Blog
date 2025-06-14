import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue"
import SignUpPage from "@/views/Auth/SignUp.vue"
const routes = [
    // auth routes
    {path:"/SignUp", component:SignUpPage},
{path:"/Blogs", component:Home},

]

export const router = createRouter({
    history:createWebHistory(),
    routes
})