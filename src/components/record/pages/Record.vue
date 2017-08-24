<template>
  <div id="record">
  	<div class="record">
  		<v-headerNav title="浏览记录"></v-headerNav>
        <v-jobList></v-jobList>
        <div>事实上{{arr}}</div>
        
        <div class="clearAll">
        	<p class="btn-g btn-blue">清除全部</p>
        </div>
    </div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import vJobList from '../../home/components/JobList.vue'

	
  export default{
  	components: {vHeaderNav,vJobList},
    data(){
      return {
      	arr:[]
      }
    },
    mounted(){
    	var strStoreDate = window.localStorage? localStorage.getItem("menuTitle"): Cookie.read("menuTitle");

        this.arr.push(strStoreDate);

    },
    methods: {
     
    }
  };
</script>
<style scoped>	
.record{background-color: #fff;}
.clearAll{padding: 15px;}
</style>
