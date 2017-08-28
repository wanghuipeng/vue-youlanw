<template>
  <div id="notice">
  	<div class="notice">
  		<v-headerNav title="消息"></v-headerNav>
  		<v-noticeTab></v-noticeTab>
  		
    </div>
  </div>
</template>
<script>
  import vHeaderNav from '../../common/HeaderNav.vue'
  import vNoticeTab from '../components/NoticeTab.vue'
  
  export default{
  	components: {vHeaderNav,vNoticeTab},
    data(){
      return {
      
      }
    },
    mounted(){
    	
    },
    methods: {
     
    }
  };
</script>
<style scoped>	
.notice{background-color: #fff;}
</style>
