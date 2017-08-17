<template>
  <div id="jobSearch">
  	<div class="jobSearch">
			<v-headerNav title="职位搜索"></v-headerNav>
			<div class="search-box border-t">
        <div class="inner">
           	<input type="text" placeholder="优蓝求职，全程免费！值得信赖！" class="text" v-model="mess">
           	<input type="button" class="btn search-enter" @click="searchJob">
           	<!--/搜索-->
						<div class="search-block">
					        <div class="search-cont">
					        	<p>热门职位</p>
					        	<ul>
					        		<li><a href="http://m.youlanw.com/sh_zp_服务员_0_0_0.html?urlsource=search">服务员</a></li>
					        		<li><a href="http://m.youlanw.com/sh_zp_服务员_0_0_0.html?urlsource=search">普工</a></li>
					        		<li><a href="http://m.youlanw.com/sh_zp_营业员_0_0_0.html?urlsource=search">营业员</a></li>
					        		<li><a href="http://m.youlanw.com/sh_zp_快递员_0_0_0.html?urlsource=search">快递员</a></li>
					        		<li><a href="http://m.youlanw.com/sh_zp_销售_0_0_0.html?urlsource=search">销售</a></li>
					        		<li><a href="http://m.youlanw.com/sh_zp_保安_0_0_0.html?urlsource=search">保安</a></li>
					        	</ul>
					        </div>
						</div>
        </div>
      </div>
      
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
  import {fetchSearchListByType} from '../../../store/api';
  export default{
    components: {vHeaderNav},
    data(){
      return {
         mess:""
      }
    },
    mounted(){
      
    },
    methods: {
      searchJob(){
      	
      	window.location.href = "http://m.youlanw.com/sh_zp_"+this.mess+"_0_0_0.html?urlsource=search"
      }
    }
  };
</script>
<style scoped>
.search-block .search-cont p {
    padding-top: 20px;font-size: 14px;
}
.search-block .search-cont ul li a{font-size: 14px;}
</style>
