import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue')
    },
    {
      path: '/application',
      name: 'application',
      component: () => import(/* webpackChunkName: "application" */ '../pages/application.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import(/* webpackChunkName: "application" */ '../pages/games.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import(/* webpackChunkName: "application" */ '../pages/ranking.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import(/* webpackChunkName: "application" */ '../pages/manage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "login" */ '../pages/register.vue')
    }
  ]
})
