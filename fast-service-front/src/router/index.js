import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/templates/Dashboard'
import Login from '@/templates/Login'
import Hire from '@/templates/Hire'
import Order from '@/templates/Order'
import RegisterService from '@/templates/RegisterService'
import Register from '@/templates/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    },
    {
      path: '/hire',
      name: 'Hire',
      component: Hire,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    },
    {
      path: '/registerService',
      name: 'RegisterService',
      component: RegisterService,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    },
    {
      path: '/registerUser',
      name: 'registerUser',
      component: Register,
      beforeEnter: (to, from, next) => {
        document.title = `${to.name}`
        next();
      }
    }

  ]
})
