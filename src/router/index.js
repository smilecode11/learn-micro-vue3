import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/Home'
import Login from '../pages/Login'
import ErrorPage from '../pages/Error'

const routes = [{
    path: '/',
    redirect: '/home-page'
}, {
    name: "HomePage",
    path: '/home-page',
    component: HomePage
}, {
    name: "LoginPage",
    path: '/login',
    component: Login
}, {
    name: 'ErrorPage',
    path: '/error-page',
    component: ErrorPage
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
