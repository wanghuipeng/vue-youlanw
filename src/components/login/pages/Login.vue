<template>
  <div id="login">
  	<div class="login">
  		<v-headerNav title="登录"></v-headerNav>
  	  <img class="logo" src="../../../../static/images/logo.png" />
      <div class="login-form">
      	<div class="input-group tel">
      	   <input class="input-control" type="text" placeholder="请输入您的手机号码" v-model="account" />
      	   <input class="btn-code" type="button" value="获取验证码" />
      	</div>
      	<div class="input-group code">
      	   <input class="input-control" type="text" placeholder="请输入验证码" v-model="password" />
      	</div>
      	<div class="input-group login">
      	   <input class="btn-login" type="submit" value="登录" @click="login" />
      	</div>
      </div>
		</div>
		<v-loading v-if="isLoging" marginTop="-30%"></v-loading>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import vLoading from '../../common/Loading.vue'

  
  export default{
  	components: {vHeaderNav,vLoading},
    data(){
      return {
      	isLoging: false,
	  		account: '',
	  		password: ''
      }
    },
    mounted(){
      
    },
    methods: {
		     //登录逻辑
		  	login(){
		  		if(this.account!='' && this.password!=''){
		  			this.toLogin();
		  		}
		  	},
		
		  	//登录请求
		  	toLogin(){
		
		  		//一般要跟后端了解密码的加密规则
		  		//这里例子用的哈希算法来自./js/sha1.min.js

		
		  		//需要想后端发送的登录参数
		  		let loginParam = {
		  			account: this.account,
		  			password: this.password
		  		}
		
		      //设置在登录状态
		      this.isLoging = true;
		      
		  		//请求后端,比如:
		  		/*this.$http.post( 'example.com/login.php', {
		  		param: loginParam).then((response) => {
		        if(response.data.code == 1){
		          let expireDays = 1000 * 60 * 60 * 24 * 15;
		          this.setCookie('session', response.data.session, expireDays);
		          //登录成功后
		          this.$router.push('/user_info'); 
		        }
			    }, (response) => {
			        //Error
			    });
		  		*/
		  	   
		      //演示用
		  		setTimeout(()=>{
		        //登录状态15天后过期
		        let expireDays = 1000 * 60 * 60 * 24 * 15;
		  			this.setCookie('session','blablablablabla...', expireDays);
		        this.isLoging = false;
		        //登录成功后
		  			this.$router.push('/Mine');
		  		},3000)
		  	}
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
