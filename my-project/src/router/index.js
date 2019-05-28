import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowEchartsOne from '@/components/ShowEchartsOne'
import ShowEchartsTwo from '@/components/ShowEchartsTwo'
import ShowEchartsThree from '@/components/ShowEchartsThree'
import ShowEchartsFour from '@/components/ShowEchartsFour'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
		{
			path: '/e1',
			component: ShowEchartsOne
		},
		{
			path: '/e2',
			component: ShowEchartsTwo
		},
		{
			path: '/e3',
			component: ShowEchartsThree
		},
		{
			path: '/e4',
			component: ShowEchartsFour
		}
  ]
})
