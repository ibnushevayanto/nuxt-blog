import Vue from 'vue'
import Router from 'vue-router'

import Landing from '~/pages/Main/Landing/Landing.vue'
import About from '~/pages/About/About.vue'
import Auth from "~/pages/Main/Auth/Auth.vue";
import Blog from './routes/blog'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: 'landing'
      },
      {
        path: '/home',
        name: 'landing',
        component: Landing
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      ...Blog,
      {
        path: '/auth',
        name: 'auth',
        component: Auth
      }
    ]
  })
}
