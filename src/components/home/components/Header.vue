<template>
  <div id="header">
  	<div class="header">
			<a href="http://m.youlanw.com/"><img src="http://m.youlanw.com/static/images/logo.png" alt="优蓝网" class="logo"></a>
			<div class="linkage-select">
				<div class="form-g-each-r overflow-hide change" >
					<a href="javascript:void(0)" @click="showCity">{{cityName}}<i class="arrow-d"></i></a>
				</div>
			</div>
			<a href="javascript:void(0)" class="icon-search">搜索</a>
			<a href="javascript:void(0)" class="icon-menu">导航</a>
		</div>
		<!--城市-->
		<div class="linkage-select-panel" :class="{on:active == true}">
			<div class="first-step">
				    <div class="box-g-w-2 cities">
				        <a href="javascript:void(0)" v-for="(city,index) in cities" v-model="cityName" @click="cityClick(city.name)">{{city.name}}</a>
				    </div>
				    <div class="clear"></div>
				    <!--当前定位-->
				    <div class="title-g-2">当前定位：<a href="" class="blue">上海</a><a href="http://m.youlanw.com/changeCity.html" class="right blue">全部招聘城市&nbsp;&gt;&gt;</a></div>
				    <!--/当前定位-->
		    </div>
		</div>
		<!--模态层-->
		<div class="mask-layer-2" :class="{show:active == true}" @click="hideCity"></div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
       active : false,
       cityName: '上海',
       cities:[
						    {
						        "id": "1",
						        "name": "上海"
						    },
						    {
						        "id": "2",
						        "name": "苏州"
						    },
						    {
						        "id": "4",
						        "name": "南京"
						    },
						    {
						        "id": "9",
						        "name": "重庆"
						    },
						    {
						        "id": "8",
						        "name": "成都"
						    },
						    {
						        "id": "3",
						        "name": "杭州"
						    },
						    {
						        "id": "13",
						        "name": "天津"
						    },
						    {
						        "id": "16",
						        "name": "武汉"
						    },
						    {
						        "id": "10",
						        "name": "厦门"
						    },
						    {
						        "id": "5",
						        "name": "宁波"
						    },
						    {
						        "id": "12",
						        "name": "无锡"
						    },
						    {
						        "id": "40",
						        "name": "合肥"
						    },
						    {
						        "id": "15",
						        "name": "南昌"
						    },
						    {
						        "id": "14",
						        "name": "北京"
						    },
						    {
						        "id": "34",
						        "name": "西安"
						    }
						]
      }
    },
    mounted(){
      
    },
    methods: {
      showCity(){
	        this.active = true
	    },
      hideCity(){
	        this.active = false
	    },
	    cityClick(index){
	    	  this.cityName = index
	    	  console.log(this.cityName)
	    	  this.hideCity()
	    }
    }
  };
</script>
<style scoped>
	.cities a {
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .title-g-2{text-align: left;}
</style>
