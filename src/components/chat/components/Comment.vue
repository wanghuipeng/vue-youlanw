<template>
  <div id="comment">
			<div class="comment" v-for="(item,index) in commentData" v-if="index < 2">
					<span class="name">{{item.userName}}：</span>{{item.content}}
			</div>
			
  </div>
</template>
<script>
  import {fetchChatListByType} from '../../../store/api'
  
  export default{
  	props: ['commentData'],	
    data(){
      return {
        
      }
    },
    mounted(){

    },
    updated(){
    	
    },
    destroyed(){
    },
    methods: {
     
    }
  }
</script>
<style scoped>
.comment{padding: 10px 0;}
.comment .name{color: #2bb7ab;}
</style>
