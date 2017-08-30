<template>
  <div id="app">
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<keep-alive>
		   <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
  </div>
</template>

<script>
import vHome from './components/home/pages/Home.vue'
export default {
  name: 'app',
  data(){
  	return {
      isLogin: false,
      userInfo: { //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        portrait: null
      }
    }
  },
  
  mounted(){
    //组件开始挂载时获取用户信息
    this.getUserInfo();
  },

  methods: {
    //请求用户的一些信息
    getUserInfo(){

      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: 'wanghuipeng',
        ulevel: 20,
        uid: '10000',
        portrait: '../static/images/ok.png'
      }

      //实例开发中这里会向服务端请求数据
      //如下(用了vue-resource):
      /*ts.$http.get(url, {
        //参数
        "params":{}
      }).then((response) => {
        //Success
      }, (response) => {
        //Error
      });*/

      //提交mutation到Store
      this.$store.commit('updateUserInfo', this.userInfo); 
    }
    
    
  }
}
</script>

<style>
body{background: #ffffff;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
}
</style>
