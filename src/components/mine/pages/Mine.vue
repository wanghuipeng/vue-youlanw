<template>
  <div id="mine">
  	<div class="mine">
  		<v-headerNav title="我的"></v-headerNav>
      <div class="user">
      	<img src="../../../../static/images/default-portrait.png" />
      	<p>登录后找工作更方便</p>
      </div>
      <ul class="ul-li-3 clearfix">
      	<li class="ms">面试</li>
      	<li class="jl">简历</li>
      	<li class="sc">收藏</li>
      </ul>
      <div class="divider"></div>
      <ul class="list">
      	<li class="jb">优蓝金币</li>
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
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'

  export default{
  	components: {vHeaderNav},
    data(){
      return {
      }
    },
    mounted(){
      
    },
    methods: {
     
    }
  };
</script>
<style scoped>
.mine{background-color: #fff;}
.user{padding: 15px;height: 50px;position: relative;line-height: 50px;border-bottom: 1px solid #eee;}
.user img{position: absolute;left: 15px;top: 13px;width: 55px;height: 55px;border-radius: 100%;}
.user p{text-align: left;font-size: 16px;padding-left: 70px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 60%;}
.ul-li-3{padding: 10px 0;}
.ul-li-3 li{float: left;display: inline-block;width: 33%;position: relative;height: 20px;padding-top: 35px;border-left: 1px solid #eee;}
.ul-li-3 li:first-child{border-left: none;}
.ul-li-3 li:before{content: "";background: url(../../../../static/images/mine-common.png) no-repeat;width: 30px;height: 30px;background-size: 45px;
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -15px;}
.ul-li-3 li:first-child:before{background-position: 0px 0px;}
.ul-li-3 li:nth-child(2):before{background-position: 0px -31px;}
.ul-li-3 li:last-child:before{background-position: 0px -67px;}
.list li{text-align: left;height: 45px;line-height: 45px;border-bottom: 1px solid #eee;padding-left: 40px;padding-right: 15px;position: relative;}
.list li:before{content: "";display: block;width: 25px;height: 25px;background: url(../../../../static/images/mine-common.png) no-repeat;background-size: 29px;position: absolute;left: 10px;top: 10px;}
.list li.jb:before{background-position: 3px -64px;}
.list li.yz:before{background-position: 3px -89px;}
.list li.cgz:before{background-position: 3px -113px;}
.list li.fw:before{background-position: 3px -134px;}
.list li.yq:before{background-position: 3px -160px;}
.list li.gy:before{background-position: 3px -184px;}
.list li.lx:before{background-position: 0px -293px;background-size: 40px;}
</style>
