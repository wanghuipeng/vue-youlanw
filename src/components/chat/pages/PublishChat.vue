<template>
  <div id="publishChat">
  	<div class="publishChat">
  		<v-headerNav title="发布话题"></v-headerNav>
  		<router-link :to="{name: 'Chat'}">
  		<a href="javascript:void(0)" class="pushChat" @click="pushChat()">发布</a>
  		</router-link>
      <textarea placeholder="这一刻，你想说点什么呢？" v-model="content"></textarea>
      <div class="inputFile" v-if="!image">
      	<input type="file" accept="image/*" capture="camera" @change="onFileChange" />
      	<span  class="addImg"></span>
      	
      	<div class="vue-upload-img-multiple">
			    <div v-if="images.length >0">
			      <ul style="width: 100px;height: 100px;position: absolute;left: 0;top: 0;z-index: 20;">
			        <li v-for="image in images">
			          <img :src="image" width="102px" height="102px" />
			          <a href="javascript:void(0)" style="position: absolute;right: -10px;top: -10px;z-index: 20;" @click='delImage($index)'>
			            <span class="icon-del"></span>
			          </a>
			        </li>
			      </ul>
			    </div>
			  </div>
      	
      </div>
		</div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import axios from 'axios';
	var querystring = require('querystring');
	
  export default{
  	components: {vHeaderNav},
    data(){
      return {
      	images:[],
      	content:''
      }
    },
    mounted(){
      
    },
    methods: {
	    onFileChange (e) {
	      var files = e.target.files || e.dataTransfer.files
	      if (!files.length) return
	      this.createImage(files,e)
	    },
	    createImage (file,e) {
	      var vm = this
	      var reader = null
	      var leng = file.length

	      for (var i = 0; i < leng; i++) {
	        reader = new window.FileReader()
	        reader.readAsDataURL(file[i])
	        reader.onload = function (e) {
	          vm.images.push(e.target.result)
	        }
	      }
	    },
	    delImage(index) {
	      this.images.shift(index);
	      this.images.splice(0,this.images.length);
	    },
	    pushChat(){
       axios.post('/api/v1/article/post',querystring.stringify({
       	appkey:'145FB9D1-2643-4B18-B9EA-8CD2C44FAC00',
       	client_id:'test',
       	token:'7b79c6b4e3754797bf375c6367ef3ec1',
       	circle_id:'565beaf9c4aae15967757b50',
       	article_type:'1',
		    content:this.content,
		    large_image:this.images[0]
		    })).then(response => {
		         console.log(this.images[0])
		        }).catch(function (error) {
				　　console.log(error);
				});
      }
    }
  };
</script>
<style scoped>
.publishChat{background-color: #fff;border-bottom: 1px solid #eee;}
.publishChat textarea{resize: none;padding: 15px;width: 100%;border: none;min-height: 100px;box-sizing: border-box;}
.inputFile{width: 100px;height: 100px;position: relative;margin: 15px;}
.inputFile input{width: 100px;height: 100px;position: absolute;top: 0;left: 0;z-index: 10;opacity: 0;}
.inputFile .addImg{width: 100px;height: 100px;text-align: center;font-size: 50px;color:#999;position: absolute;left: 0;top: 0;z-index: 1;border: 1px solid #ccc;}
.inputFile .addImg:before{width: 100px;height: 100px;display: block;position: absolute;content: "+";color: #eee;font-size: 68px;}
.icon-del{background: url(../../../../static/images/mine-common.png) no-repeat;width: 30px;height: 30px;background-size: 40px;background-position:3px -323px;display: inline-block;opacity: 0.6;}
.pushChat{    position: fixed;
    right: 15px;
    top: 12px;
    color: #fff;
    z-index: 100;
    font-size: 15px;}
</style>
