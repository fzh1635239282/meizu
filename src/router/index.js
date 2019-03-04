import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from 'components/pages/Main'
import Recommend from 'components/main/Recommend'
import Phone from 'components/main/Phone'
import Music from 'components/main/Music'
import Parts from 'components/main/Parts'
import Life from 'components/main/Life'
import Login from 'components/pages/Login'
import Register from 'components/pages/Register'
import WillLogin from 'components/pages/WillLogin'
import Detail from 'components/pages/Detail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index/home'
        },
        {
            path: '/index',
            component: Main,
            children: [
                {
                    path: 'home',
                    component: Recommend
                },
                {
                    path: 'phone',
                    component: Phone
                },
                {
                    path: 'music',
                    component: Music
                },
                {
                    path: 'parts',
                    component: Parts
                },
                {
                    path: 'life',
                    component: Life
                }
            ]
        },
        {
            path: "/login",
            redirect: "/login/home"
        },
        {
            path: "/login/home",
            component: Login
        },
        {
            path: "/login/willlogin",
            component: WillLogin
        },
        {
            path: "/register",
            redirect: "/register/home"
        },
        {
            path: "/register/home",
            component: Register
        },
        {
            path: "/detail",
            component: Detail
        }
  ],
    mode: "history"
})