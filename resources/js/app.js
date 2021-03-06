import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'
import UsersIndex from './views/UsersIndex'
import UserEdit from './views/UserEdit'
import UserCreate from './views/UserCreate'

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UserEdit,
        },
        {
            path: '/users/create',
            name: 'users.create',
            component: UserCreate,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: {App},
    router,
});

