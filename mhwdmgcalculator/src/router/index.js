import Vue from 'vue'
import Router from 'vue-router'
import CalculatorView from '@/components/CalculatorView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CalculatorView',
      component: CalculatorView
    }
  ]
})
