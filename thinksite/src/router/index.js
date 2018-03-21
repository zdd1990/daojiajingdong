
import Vue from 'vue'
import Router from 'vue-router'
// D: \study3\revers\thinksite\src==@
import Home from '@/components/Home.vue'
import My from '@/components/My.vue'
import Classify from '@/components/Classify.vue'
import Shop from '@/components/Shop.vue'
import Login from '@/components/Login.vue'
import Regist from '@/components/Regist.vue'
import Shopcar from '@/components/Shopcar.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/mlogin',
      component: Login
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/shop/:addr/:uname/:uadd',
      component: Shop,
      props: true
    },
    {
      path: '/shopcar/:cars',
      component: Shopcar,
      props: true
    }
  ]
})
