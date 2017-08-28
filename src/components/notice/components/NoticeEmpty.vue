<template>
  <div id="noticeEmpty">
  	<div class="noticeEmpty">
    	<p>投递职位后，服务动态都在这里哦~</p>
    	<p class="btn-g btn-blue">去找好工作</p>
		</div>
  </div>
</template>
<script>
  export default {
	  name: 'page-tab-container',
	  data() {
	    return {
	      active: 'tab-container1'
	    };
	  },
	  methods:{
        tabClick(id){
            this.active = id
            console.log(this.active)
        }
    }
	};
</script>
<style scoped>
  .mint-button--small {
    height: 40px;
    line-height: 40px;
    border-radius: 0;
    float: left;
}
	.mint-button--small.current{
	    background-color: #2bb7ac;
	    color: #333;
	    border-width: 2px;
	    color: #fff;
	}
.mint-button--default {
    background-color: #f0f0f0;
    box-shadow:none;
}
.nav{
    width: 200px;
    margin: 20px auto 0 auto;}
    .nav .mint-button{width: 100px;}
.mint-cell-wrapper{text-align: left;}
.notice-empty{padding: 15px;margin-top: 60px;}
</style>
