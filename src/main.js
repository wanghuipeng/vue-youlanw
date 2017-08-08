// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Swipe, SwipeItem } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';


/*Mint*/
Vue.use(Mint);
/*Banner.vue*/
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/*Classify.vue*/
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
/*FooterTab.vue*/
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
/**/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
