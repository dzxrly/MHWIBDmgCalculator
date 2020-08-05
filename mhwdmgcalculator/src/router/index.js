import Vue from 'vue'
import Router from 'vue-router'
import CalculatorView from '@/views/CalculatorView'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'CalculatorView',
      component: CalculatorView,
      meta: {
        title: 'MHWIB简易伤害计算器'
      }
    }
  ]
})
