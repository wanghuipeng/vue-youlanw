<template>
  <div id="record">
  	<div class="record">
  		<v-headerNav title="浏览记录"></v-headerNav>
        <div>浏览记录列表id:{{arr}}</div>
        
        <div class="clearAll">
        	<p class="btn-g btn-blue" @click="clearLocalStorage">清除全部</p>
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
    	this.initArr()
    },
    methods:{
    	initArr(){
    		 var storageArr = window.localStorage;  
				 for (var i=0, len = storageArr.length; i  <  len; i++){     
				  var key = storageArr.key(i);       
				  var value = storageArr.getItem(key);     
				  this.arr.push(value);  
				  this.removeByValue(this.arr, "undefined");
				 }  
    	},
    	clearLocalStorage(){
    		var storageArr = window.localStorage; 
    		//清空storage
    		 storageArr.clear();
    		 //清空数组
    		 this.arr.splice(0,this.arr.length);
    	},
    	removeByValue(arr, val) {
			  for(let i=0; i<arr.length; i++) {
			    if(arr[i] == val) {
			      arr.splice(i, 1);
			      break;
			    }
			  }
			}
    }
     
  };
</script>
<style scoped>	
.record{background-color: #fff;}
.clearAll{padding: 15px;}
</style>
