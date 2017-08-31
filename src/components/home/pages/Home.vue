<template>

			<div id="home">
			  <div class="home">
			  	<div class="header">
						<a href="http://m.youlanw.com/"><img src="http://m.youlanw.com/static/images/logo.png" alt="优蓝网" class="logo"></a>
						<div class="linkage-select">
							<div class="form-g-each-r overflow-hide change" >
								<a href="javascript:void(0)" @click="showCity">{{cityName}}<i class="arrow-d"></i></a>
							</div>
						</div>
						<router-link to="/JobSearch">
						<a href="javascript:void(0)" class="icon-search">搜索</a>
						</router-link>
						<a href="javascript:void(0)" class="icon-menu" @click="showPanel">导航</a>
						<!--导航panel-->
				    <div class="nav-panel bg-white" :class="{on:show == true}">
				        <div class="nav-menu">
				        	<router-link to="/Notice" class="city">消息</router-link> 
				          <router-link to="/Chat" class="user">说说</router-link> 
				          <router-link to="/Mine" class="welfare">我的</router-link> 
				          <router-link to="/Record" class="record">浏览记录</router-link> 
				        </div>
				    </div>
				    <!--/导航panel-->
					</div>
					<!--城市-->
					<div class="linkage-select-panel" :class="{on:active == true}">
						<div class="first-step">
							    <div class="box-g-w-2 cities">
							        <a href="javascript:void(0)" v-for="(city,index) in cities" v-model="cityName" @click="cityClick(city.id,city.name)">{{city.name}}</a>
							    </div>
							    <div class="clear"></div>
							    <!--当前定位-->
							    <div class="title-g-2">当前定位：<a href="" class="blue">{{cityName}}</a><a href="http://m.youlanw.com/changeCity.html" class="right blue">全部招聘城市&nbsp;&gt;&gt;</a></div>
							    <!--/当前定位-->
					    </div>
					</div>
					<!--模态层-->
					<div class="mask-layer-2" :class="{show:active == true}" @click="hideCity"></div>
					
			  	<div id="banner">
						<div class="page-swipe" >
				      <mt-swipe :auto="4000"   >
							  <mt-swipe-item v-for="(item, index) in bannerData.data"><img class="img-show" :src="item.resource.thumbImageUrl" :alt="item.resource.subtitle"/></mt-swipe-item>
							</mt-swipe>
						</div>
				  </div>
			
			    <v-classify></v-classify>
			    <v-recommend></v-recommend>
			    <v-title-bar></v-title-bar>
			    
			    <div class="jobList"> 
						<v-loading v-if="isLoging" marginTop="0" style="top:35px"></v-loading>
						<ul class="joblist joblist-sty">
								<div  v-for="(item, index) in jobListData.data">
							    	<a :href="['http://m.youlanw.com/zhaopin_'+item.resource.resourceValue+'.html']" @click="recordId(item.resource.id)">
							    	<li>
							    		<ul class="joblist-each">
								    			<div v-if="item.resource.label1 == '招聘'">
													  <li class="hot-icon"></li>
													</div>
								    			<li class="title"><span class="jobName">{{item.resource.description}}</span> , {{item.resource.title}}</li> 
												<li class="welfare-spans">
													<span>包住</span>|<span>餐补</span>|<span>无需经验</span></li>
												<li class="salary">
													<span>{{item.resource.subtitle}}</span>
												</li>
												<li class="comp-pic">
												<img :src="item.resource.thumbImageUrl" :alt="item.resource.imgAlt" class="pic">
													</li>
												<li class="location">{{item.resource.label2}}</li>
											</ul>
							    	</li>
							    	</a>
								</div>
						</ul>
						<p v-if="!isLoging">
							<a href="http://m.youlanw.com/sh_zhaopin/" class="view-more">查看更多招工信息&nbsp;&gt;&gt;</a>
						</p>
					</div>
			
			  </div>
			  <div class="mask-layer" :class="{show:show == true}" @click="hidePanel"></div>
			</div>

</template>

<script>
	//高清缩放解决方案（单位rem）
!function(x) {  
function w() {  
    var a = r.getBoundingClientRect().width;  
    a / v > 640 && (a = 640 * v), x.rem = a / 16, r.style.fontSize = x.rem + "px"  
}  
var v, u, t, s = x.document, r = s.documentElement, q = s.querySelector('meta[name="viewport"]');  
if (q) {  
    var o = q.getAttribute("content").match(/initial\-scale=(["‘]?)([\d\.]+)\1?/);  
    o && (u = parseFloat(o[2]), v = parseInt(1 / u))  
}  
if (!v && !u) {  
    var n = (x.navigator.appVersion.match(/android/gi), x.navigator.appVersion.match(/iphone/gi)), v = x.devicePixelRatio;  
    v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, u = 1 / v  
}  
if (r.setAttribute("data-dpr", v), !q) {  
    if (q = s.createElement("meta"), q.setAttribute("name", "viewport"), q.setAttribute("content", "initial-scale=" + u + ", maximum-scale=" + u + ", minimum-scale=" + u + ", user-scalable=no"), r.firstElementChild) {  
        r.firstElementChild.appendChild(q)  
    } else {  
        var m = s.createElement("div");  
        m.appendChild(q), s.write(m.innerHTML)  
    }  
}  
x.dpr = v, x.addEventListener("resize", function() {  
    clearTimeout(t), t = setTimeout(w, 300)  
}, !1), x.addEventListener("pageshow", function(b) {  
    b.persisted && (clearTimeout(t), t = setTimeout(w, 300))  
}, !1), "complete" === s.readyState ? s.body.style.fontSize = 12 * v + "px" : s.addEventListener("DOMContentLoaded", function() {  
    s.body.style.fontSize = 12 * v + "px"  
    }, !1), w()  
}(window); 
	import vClassify from '../components/Classify.vue'
	import vRecommend from '../components/Recommend.vue'
	import vTitleBar from '../components/TitleBar.vue'
	import * as types from '../../../store/types';
    import {API_TYPE, fetchBannersByType,fetchJobListByType} from '../../../store/api';
    import vLoading from '../../common/Loading.vue'
    
	export default{
    components: {vClassify,vRecommend,vTitleBar,vLoading},
    data(){
      return {
        parentMsg:"hello",
        bannerData: {
          data: []
        },
         active : false,
         show: false,
       cityName: '上海',
       cityId: '1',
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
						],
				jobListData: {
          data: []
        },
        data_id: '1',
        recordArr:[],
        isLoging: true
      }
    },
    mounted(){
    	 var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", branch_id = this.data_id;
       fetchBannersByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.bannerData = data;
                console.log(this.bannerData.data)
              });
              

      fetchJobListByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.jobListData = data;
                //菊花
		        this.isLoging = false;
                console.log(this.jobListData.data)
              });
        
              
    },
    updated(){
    },
    destroyed(){
    },
    methods: {
    	recordId(id){
    		this.recordArr.push(id);
			//存储，IE6~7 cookie 其他浏览器HTML5本地存储
			if (window.localStorage) {
			    localStorage.setItem("menuTitle"+id, this.recordArr);	
			} else {
			    Cookie.write("menuTitle"+id, this.recordArr);
			}
    	},
    	showPanel(){
    		  this.show = true
    	},
    	hidePanel(){
    		  this.show = false
    	},
    	showCity(){
	        this.active = true
	    },
      hideCity(){
	        this.active = false
	    },
	    cityClick(id,name){
	    	  this.cityName = name
	    	  this.cityId =  id
	    	  console.log(this.cityName+":"+id)
	    	  this.hideCity()
          //更新列表
          var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", branch_id = this.cityId;
	    	  fetchJobListByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.jobListData = data;
                this.loading = false;
                console.log("更新列表"+this.cityId)
              });
	    }
    }
 };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{background-color: #f5f5f5;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.page-swipe .mint-swipe {
    height: 3.3rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
.page-swipe .mint-swipe img{width: 100%;height: auto;}
.cities a {
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  .title-g-2{text-align: left;}
  .jobName{text-overflow:ellipsis;overflow: hidden;white-space: nowrap;width: 4.8rem;float: left;display: inline-block;vertical-align: middle;}
	.jobList,.joblist,.joblist>div,.joblist>div>a,.joblist>div>a>li{background-color: #fff;}
	.joblist-sty .joblist-each .title{text-align: left;}
  .joblist-sty .joblist-each .salary,.joblist-sty .joblist-each .welfare-spans{text-align: left;}
  .joblist-sty li{margin: 0;}
  .joblist-sty .joblist-each .welfare-spans{margin:0;}
  .joblist-each .salary{width: 100%;}
.joblist-sty .joblist-each {
    padding: 15px 15px 10px 111px;
}
.nav-panel{width: 80px;}
.nav-menu .user{background-position: 11px -82px;}
.nav-menu .welfare{background-position: 9px -25px;}
.nav-menu .record {
    background-position: 10px -63px;
}
.nav-menu a{background-position-x: 4px !important;padding-left: 25px;}
.nav-menu a:first-child{background-position-x: 6px !important;}
</style>
