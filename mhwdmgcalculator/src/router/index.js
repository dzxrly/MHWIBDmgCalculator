import Vue from 'vue'
import Router from 'vue-router'
import CalculatorView from '@/components/CalculatorView'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'CalculatorView',
      component: CalculatorView
    }
  ]
})
