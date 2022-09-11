import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductManage from '@/views/ProductManage.vue'
import UserManage from '@/views/UserManage.vue'
import OtherOne from '@/views/OtherOne.vue'
import OtherTwo from '@/views/OtherTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/productManage',
    component: ProductManage
  },
  {
    path: '/userManage',
    component: UserManage
  },
  {
    path: '/other',
    children: [
      {
        path: '/otherOne',
        component: OtherOne
      },
      {
        path: '/otherTwo',
        component: OtherTwo
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
