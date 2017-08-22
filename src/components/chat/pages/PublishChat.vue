<template>
  <div id="publishChat">
  	<div class="publishChat">
  		<v-headerNav title="发布话题" publish="发布"></v-headerNav>
      <textarea placeholder="这一刻，你想说点什么呢？"></textarea>
      <div class="inputFile">
      	<input type="file" accept="image/*" capture="camera" />
      	<span  class="addImg"></span>
      </div>
      
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	
  export default{
  	components: {vHeaderNav},
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
.publishChat{background-color: #fff;border-bottom: 1px solid #eee;}
.publishChat textarea{padding: 15px;width: 100%;border: none;min-height: 100px;box-sizing: border-box;}
.inputFile{width: 100px;height: 100px;position: relative;margin: 15px;}
.inputFile input{width: 100px;height: 100px;position: absolute;top: 0;left: 0;z-index: 10;opacity: 0;}
.inputFile .addImg{width: 100px;height: 100px;text-align: center;font-size: 50px;color:#999;position: absolute;left: 0;top: 0;z-index: 1;border: 1px solid #ccc;}
.inputFile .addImg:before{width: 100px;height: 100px;display: block;position: absolute;content: "+";color: #eee;font-size: 68px;}
</style>
