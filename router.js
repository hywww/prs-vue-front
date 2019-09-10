import Vue from 'vue'
import Router from 'vue-router'
import list from '@/views/list'
import main from "@/views/main"
import rightContent from './components/rightContent'
import parameterIntro from './components/parameterIntro'
import history from './components/history'
import attention from './components/attention'
import functionDemo from './components/functionDemo'
import functionDemoDetail from './components/functionDemoDetail'
import problemList from './components/problemList'
import code from './components/code'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: main,
      children:[
        {
          path: 'content/:name',
          name: 'detail',
          component: rightContent
        },
        {
          path: 'history/:name',
          name: 'history',
          component: history
        },
        {
          path: 'parameter/:name',
          name: 'parameter',
          component: parameterIntro
        },
        {
          path: 'attention/:name',
          name: 'attention',
          component: attention
        },
        {
          path: 'function/edit',
          name: 'functionDemoEdit',
          component: functionDemo
        },
        {
          path: 'functionDemoDetail/:name',
          name: 'functionDemoDetail',
          component: functionDemoDetail
        },
        {
          path: 'problem/:name',
          name: 'problemList',
          component: problemList
        },
        {
          path: 'code/:name/:type/:version',
          name: 'code',
          component: code
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
  ],
  // mode: 'history',
  // base: '/dist/'
})
