<template>
  <div id="jobList">
  	<div class="jobList">
			<ul class="joblist joblist-sty">
					<a href="http://m.youlanw.com/zhaopin_448866.html" v-for="(item, index) in jobListData.data">
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
									<li class="location"><span>上海市</span><span class="ml5">{{item.resource.label2}}</span></li>
								</ul>
				    	</li>
					</a>
			</ul>
		</div>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import {API_TYPE, fetchJobListByType} from '../../../store/api';
  
  export default{
    data(){
      return {
        loading: true,
        jobListData: {
          data: []
        },
        data_id: '1'
      }
    },
    mounted(){
      var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", branch_id = this.data_id;
      fetchJobListByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.jobListData = data;
                this.loading = false;
                console.log(this.jobListData.data)
              });
      
    },
    updated(){
    	
    },
    destroyed(){
    }
  };
</script>
<style scoped>
	.jobName{text-overflow:ellipsis;overflow: hidden;white-space: nowrap;width: 4.8rem;float: left;display: inline-block;vertical-align: middle;}
	.joblist-sty .joblist-each .title{text-align: left;}
  .joblist-sty .joblist-each .salary,.joblist-sty .joblist-each .welfare-spans{text-align: left;}
</style>
