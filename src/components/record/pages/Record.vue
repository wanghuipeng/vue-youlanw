<template>
  <div id="record">
  	<div class="record">
  		<v-headerNav title="浏览记录"></v-headerNav>
        <div>浏览记录列表id:{{arr}}</div>
        <v-JobList :jobItemDatas="jobItemData.data"></v-JobList>
        <div class="clearAll">
        	<p class="btn-g btn-blue" @click="clearLocalStorage">清除全部</p>
        </div>
    </div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import vJobList from '../../home/components/JobList.vue'
  import {API_TYPE, fetchJobListByType} from '../../../store/api';
	
  export default{
  	components: {vHeaderNav,vJobList},
    data(){
      return {
      	arr:[],
      	branch_id:"1",
      	jobItemData: {
          data: []
        },
      }
    },
    mounted(){
    	 //浏览记录的id数组
    	 this.initArr();
    	 var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "7b79c6b4e3754797bf375c6367ef3ec1", branch_id = this.branch_id;
       fetchJobListByType(appkey, client_id, token ,branch_id)
	      .then((data) => {
	        this.jobItemData = data;
	        //菊花
	        this.isLoging = false;
	        console.log(this.jobItemData.data)
	      });
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
