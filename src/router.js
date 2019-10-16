import Vue from 'vue'
import Router from 'vue-router'

import Chat from './view/chat.vue'
import Login from './view/login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'login',
            component: Login
        },
        {
            path: "/chat",
            name: 'chat',
            component: Chat
        }
    ]

});

export default router
