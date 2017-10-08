import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/pages/Home.vue'
import JobSearch from '@/components/search/pages/JobSearch.vue'
import Notice from '@/components/notice/pages/Notice.vue'
import Chat from '@/components/chat/pages/Chat.vue'
import ChatDetail from '@/components/chat/pages/ChatDetail.vue'
import PublishChat from '@/components/chat/pages/PublishChat.vue'
import Record from '@/components/record/pages/Record.vue'
import Mine from '@/components/mine/pages/Mine.vue'
import Login from '@/components/login/pages/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'Home',
	  component: Home,
	  title: '首页',
	  meta: {
      keepAlive: true // 需要被缓存
    }
	},
    {
      path: '/Home',
      name: 'Home',
      title: '首页',
      component: Home
    },
    {
      path: '/JobSearch',
      name: 'JobSearch',
      title: '职位搜索',
      component: JobSearch
    },
    {
      path: '/Notice',
      name: 'Notice',
      title: '消息',
      component: Notice
    },
    {
      path: '/Chat',
      name: 'Chat',
      title: '说说',
      component: Chat,
      meta:{
      	keepAlive: true
      }
    },
    {
      path: '/Chat/ChatDetail/:id',
      name: 'ChatDetail',
      title: '话题详情',
      component: ChatDetail,
      meta:{
      	keepAlive: true
      }
    },
    {
      path: '/Chat/PublishChat',
      name: 'PublishChat',
      title: '发布话题',
      component: PublishChat
    },
    {
      path: '/Record',
      name: 'Record',
      title: '浏览记录',
      component: Record
    },
    {
      path: '/Mine',
      name: 'Mine',
      title: '我的',
      component: Mine,
      meta:{
      	keepAlive: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      title: '登录',
      component: Login
    }
  ]
})
