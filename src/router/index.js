import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'Home',
	  component: Home
	},
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
