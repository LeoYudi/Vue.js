import { createRouter, createWebHashHistory } from 'vue-router'

import store from '@/store';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admins',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.getters.token;

  if (to.path === '/login') {
    if (token)
      return next({ name: 'Home' });
    return next()
  }


  if (!token)
    return next({ name: 'Login' });

  return next();
});

export default router
