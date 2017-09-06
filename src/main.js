// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Swipe, SwipeItem,Tabbar, TabItem,InfiniteScroll  } from 'mint-ui';
import moment from '../static/js/moment.min.js';
/*说说列表的时间戳转换*/
Vue.filter('time', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).startOf('hour').fromNow(formatString);  
});
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

Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
	components: { App },
	watch:{
    "$route" : 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){

      //检查是否存在session
      if(!this.getCookie('session')){
        this.$router.push('/Login');
      }else{
        return true;
      }
    }
  }
})
