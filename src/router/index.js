import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/pages/Home.vue'
import JobSearch from '@/components/search/pages/JobSearch.vue'
import Notice from '@/components/notice/pages/Notice.vue'
import Chat from '@/components/chat/pages/Chat.vue'
import ChatDetail from '@/components/chat/pages/ChatDetail.vue'
import PublishChat from '@/components/chat/pages/PublishChat.vue'

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
    },
    {
      path: '/JobSearch',
      name: 'JobSearch',
      component: JobSearch
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Chat/ChatDetail/:id',
      name: 'ChatDetail',
      component: ChatDetail
    },
    {
      path: '/Chat/PublishChat',
      name: 'PublishChat',
      component: PublishChat
    }
  ]
})
