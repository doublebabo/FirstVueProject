import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Msite from '../pages/Msite/Msite'
import Login from '../pages/login/Login'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    }
  ]
})
