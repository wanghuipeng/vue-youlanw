<template>
  <div id="jobList">
  	<div class="jobList">
			<ul class="joblist joblist-sty">
					<a href="http://m.youlanw.com/zhaopin_448866.html" v-for="(item, index) in jobItemDatas">
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
  export default{
  	props:["jobItemDatas"],
    data(){
      return {
        jobItemData: {
          data: []
        },
      }
    },
    mounted(){

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
