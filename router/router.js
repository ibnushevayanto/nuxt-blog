import Vue from 'vue'
import Router from 'vue-router'

import Landing from '~/pages/Main/Landing/Landing.vue'
import About from '~/pages/About/About.vue'
import Blog from '~/pages/Blog/Blog.vue'

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
      {
        path: '/blog',
        name: 'blog',
        component: Blog
      }
    ]
  })
}
