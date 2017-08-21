<template>
  <div id="headerNav">
  	<div class="headerNav">
  		<a href="javascript:history.back(-1)"><span class="arrow-return"></span></a>
			<span class="title">{{title}}</span>
			<span class="camera">照片</span>
		</div>
		<div class="height-45"></div>
  </div>
</template>
<script>
  export default{
  	props: ['title'],		
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
	.height-45{height: 45px;width: 100%;}
	a{-webkit-tap-highlight-color: rgba(0,0,0,.3);}
	.headerNav{height: 45px;line-height: 45px;text-align: center;background-color:#2bb7ab;position: fixed;
    width: 100%;
    z-index: 100;
    left: 0;
    right: 0;}
  .arrow-return{width: 24px;height: 24px;display: block;position: absolute;left: 15px;top: 10px;background: url(../../../static/images/m-arrow.png);background-position: 5px -134px;background-size: 30px;}
  .title{font-size: 15px;color: #fff;}
  .camera{position: absolute;right: 15px;color: #fff;top: 0px;font-size: 14px;}
</style>
