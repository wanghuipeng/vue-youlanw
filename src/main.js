// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Swipe, SwipeItem,Tabbar, TabItem,InfiniteScroll  } from 'mint-ui';


/*Mint*/
Vue.use(Mint);
/*InfiniteScroll*/
Vue.use(InfiniteScroll);
/*Banner.vue*/
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/*Classify.vue*/
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
/**/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
	components: { App }
})