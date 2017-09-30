<template>
  <div id="mine">
  	<div class="mine">
  		<div class="headerNav">
	  		<router-link to="/"><span class="arrow-return"></span></router-link>
				<span class="title">我的</span>
			</div>
			<div class="height-45"></div>
      <div class="user">
      	<!--<img src="../../../../static/images/default-portrait.png" />-->
      	<img :src=this.$store.state.login.userInfo.portrait />
      	<router-link to="/Login">
      		<p>{{this.$store.state.login.userInfo.nick}}</p>
      	</router-link>
      </div>
      <ul class="ul-li-3 clearfix">
      	<li class="ms">面试</li>
      	<li class="jl">简历</li>
      	<li class="sc">收藏</li>
      </ul>
      <div class="divider"></div>
      <ul class="list">
      	<router-link to="/Demo">
      	<li class="jb">优蓝金币</li>
      	</router-link>
      	<li class="yz">预支工资</li>
      	<li class="cgz">查工资单</li>
      	<li class="fw">常用服务</li>
      </ul>
      <div class="divider"></div>
      <ul class="list">
      	<li class="yq">邀请好友<span class="right c999">叫上朋友一起找工作</span></li>
      </ul>
      <div class="divider"></div>
      <ul class="list">
      	<li class="gy">关于优蓝</li>
      	<li class="lx">联系客服</li>
      </ul>
      <div class="divider"></div>
      <div class="logout">
	    	<p class="btn-g btn-blue" @click="logout" v-if="!isLogouting">退出</p>
	    </div>
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'

  export default{
  	components: {vHeaderNav},
    data(){
      return {
      	isLogouting: false
      }
    },
    mounted(){

    },
    computed: {
  	levelClass(){
  		var level = this.level;
  		if (1 <= level && level <= 7) {
        	return 1;
      	} else if (8 <= level && level <= 16) {
        	return 2;
      	} else if (16 <= level && level <= 31) {
        	return 3;
      	} else if (32 <= level && level <= 63) {
        	return 4;
      	} else if (64 <= level && level <= 127) {
          	return 5;
      	} else if (128 <= level && level <= 254) {
        	return 6;
      	} else {
        	return 6;
      	}
  	}
  },
    methods: {
     //注销
	    logout(){
	      //删除cookie并跳到登录页
	      this.isLogouting = true;
	      this.delCookie('session');
	      
	       //演示
	      setTimeout(()=>{
	        this.$router.push('/login/');
	        this.isLogouting = false;
	      },1000)
	    }
    }
  };
</script>
<style scoped>
.mine{background-color: #fff;}
.user{padding: 15px;height: 50px;position: relative;line-height: 50px;border-bottom: 1px solid #eee;}
.user img{position: absolute;left: 15px;top: 13px;width: 55px;height: 55px;border-radius: 100%;}
.user p{text-align: left;font-size: 16px;padding-left: 70px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 80%;}
.ul-li-3{padding: 10px 0;}
.ul-li-3 li{float: left;display: inline-block;width: 33%;position: relative;height: 20px;padding-top: 25px;border-left: 1px solid #eee;}
.ul-li-3 li:first-child{border-left: none;}
.ul-li-3 li:before{content: "";background: url(../../../../static/images/mine-common.png) no-repeat;width: 30px;height: 20px;background-size: 30px;
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -15px;}
.ul-li-3 li:first-child:before{background-position: 6px 0px;background-size: 35px;}
.ul-li-3 li:nth-child(2):before{background-position: 6px -20px;}
.ul-li-3 li:last-child:before{background-position: 6px -45px;}
.list li{text-align: left;height: 45px;line-height: 45px;border-bottom: 1px solid #eee;padding-left: 40px;padding-right: 15px;position: relative;}
.list li:last-child{border-bottom: none;}
.list li:before{content: "";display: block;width: 25px;height: 25px;background: url(../../../../static/images/mine-common.png) no-repeat;background-size: 29px;position: absolute;left: 10px;top: 10px;}
.list li.jb:before{background-position: 3px -64px;}
.list li.yz:before{background-position: 3px -89px;}
.list li.cgz:before{background-position: 3px -113px;}
.list li.fw:before{background-position: 3px -134px;}
.list li.yq:before{background-position: 3px -160px;}
.list li.gy:before{background-position: 3px -184px;}
.list li.lx:before{background-position: 0px -293px;background-size: 40px;}
.height-45{height: 45px;width: 100%;}
a{-webkit-tap-highlight-color: rgba(0,0,0,.3);}
.headerNav{height: 45px;line-height: 45px;text-align: center;background-color:#2bb7ab;position: fixed;width: 100%;z-index: 100;left: 0;right: 0;}
.arrow-return{width: 24px;height: 24px;display: block;position: absolute;left: 15px;top: 10px;background: url(../../../../static/images/m-arrow.png);background-position: 5px -134px;background-size: 30px;}
.title{font-size: 15px;color: #fff;}
.camera,.publish{position: absolute;right: 15px;color: #fff;top: 0px;font-size: 14px;}
.logout{padding: 15px;}
</style>
