<template>
  <div id="chat">
  	<div class="chat">
  		<v-headerNav title="说说" camera="照片"></v-headerNav>
      <v-chatList></v-chatList>
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import vChatList from '../components/ChatList.vue'

	
  export default{
  	components: {vHeaderNav,vChatList},
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
.chat{background-color: #fff;}
</style>
