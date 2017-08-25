<template>
  <div id="login">
  	<div class="login">
  		<v-headerNav title="登录"></v-headerNav>
  	  <img class="logo" src="../../../../static/images/logo.png" />
      <div class="login-form">
      	<div class="input-group tel">
      	   <input class="input-control" type="text" placeholder="请输入您的手机号码" />
      	   <input class="btn-code" type="button" value="获取验证码" />
      	</div>
      	<div class="input-group code">
      	   <input class="input-control" type="text" placeholder="请输入验证码" />
      	</div>
      	<div class="input-group login">
      	   <input class="btn-login" type="submit" value="登录" />
      	</div>
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
      }
    },
    mounted(){
      
    },
    methods: {
     
    }
  };
</script>
<style scoped>
.login{background-color: #fff;}
.login .logo{margin: 30px auto 20px auto;
width: 100px;
}
.login-form .input-group{width: 80%;margin: 0 auto 10px auto;position: relative;}
.login-form .input-control{width: 100%;border: none;border-bottom: 1px solid #ddd;height: 45px;padding: 5px 10px;box-shadow: none;box-sizing: border-box;background-color: #fff;padding-left: 35px;} 
.login-form .input-group:before{background: url(../../../../static/images/login-common.png) no-repeat;width: 30px;height: 25px;background-size: 25px;display: block;content: "";position: absolute;left: 0;top: 10px;}
.login-form .login:before{display: none;}
.login-form .tel:before{background-position: 0px 0px;}
.login-form .code:before{background-position: 5px -19px;
background-size: 18px;
}
.login-form .btn-code{width: 70px;
height: 28px;
border-radius: 5px;
color: orange;
border: 1px solid orange;
position: absolute;
right: 0px;
top: 9px;
background-color: #fff;
font-size: 10px;
}
.login-form .btn-login{width: 100%;display: block;height: 45px;line-height: 45px;color: #333;border: 1px solid #ccc;margin-top: 30px;border-radius: 5px;background-color: #fff;font-size: 16px;}
</style>
