<template>
  <div id="chatDetail">
  	<div class="chatDetail">
  		<v-headerNav title="话题"></v-headerNav>
      
      <div class="detail">
      	<div class="top clearfix">
	      	<div class="top-left">
	      		<template v-if="chatDetailData.createUser.icon != 0">
						  <img :src="chatDetailData.createUser.icon" />
						</template>
						<template v-else>
						  <img  src="http://m.youlanw.com:80/static/images/default-portrait.png" />
						</template>
	      	</div>
	      	<div class="top-right clearfix">
	      		<p class="name">{{chatDetailData.createUser.name}}</p>
	      		<p class="time">{{chatDetailData.publishTime}}</p>
	      	</div>
      	</div>
      	<div class="cont">
      		<img v-if="chatDetailData.thumbImage != null" :src="chatDetailData.thumbImage" />
      		<p class="text">{{chatDetailData.content}}</p>
      	</div>
      	<div class="footer clearfix">
					<span class="loop">{{chatDetailData.circle.name}}</span>
				  <p class="interact">
				  	<span @click="praiseCount">赞：{{count1}}</span><span @click="praiseCount">回复：{{chatDetailData.commentCount}}</span>
				  </p>
				</div>
      </div>
      
      <div class="comments">
      	<p class="title">最新评论({{chatDetailData.commentCount}})</p>
      	<div class="comment">
      		<ul v-for="item in chatDetailData.comments">
      			<li class="comment-l">
      				<template v-if="item.userAvatar != 0">
							  <img :src="item.userAvatar" />
							</template>
							<template v-else>
							  <img  src="http://m.youlanw.com:80/static/images/default-portrait.png" />
							</template>
      				<p class="time">{{item.publishTime | time}}</p>
      			</li>
      			<li class="comment-r">
      				<p class="name">{{item.userName}}</p>
      				<p class="text">{{item.content}}</p>
      			</li>
      		</ul>
      	</div>
      </div>
		</div>
		<div class="chat-bar">
	  	<input class="chat-input" type="text" placeholder="写评论" v-model="commentText" />
	  	<input class="chat-btn" type="button" value="发送" @click="sendComment(commentText)" />
	  </div>
  </div>
</template>
<script>
	import vHeaderNav from '../../common/HeaderNav.vue'
	import {fetchChatDetailByType} from '../../../store/api'
	import {mapGetters,mapActions} from 'vuex'
	import axios from 'axios';
	var querystring = require('querystring');

  
  export default{
  	components: {vHeaderNav},
    data(){
      return {
      	commentText:"",
      	chatDetailData: {
          data: []
       }
      }
    },
    computed: mapGetters([
    	'count1',
    	'count2'
    ]),
    mounted(){
      var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", id = this.$route.params.id ;
      fetchChatDetailByType(appkey, client_id, token , id)
              .then((data) => {
                this.chatDetailData = data.entity;
              });
    },
    methods: {
     sendComment(datas){
       axios.post('/api/v6/article/postComments',querystring.stringify({
       	appkey:'145FB9D1-2643-4B18-B9EA-8CD2C44FAC00',
       	client_id:'test',
       	token:'b876efafcff64f7580ed2175bcb6ea2e',
       	id:this.$route.params.id,
       	title:'',
		    content:datas,
		    at_uid:''
		    })).then(response => {
		          var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", id = this.$route.params.id ;
				      fetchChatDetailByType(appkey, client_id, token , id)
	              .then((data) => {
	                this.chatDetailData = data.entity;
	              });
		        }).catch(function (error) {
				　　console.log(error);
				});
     },
     ...mapActions([
				'praiseCount',
				'commentCount'
			])
    }
  };
</script>
<style scoped>
.chatDetail{padding-bottom: 10px;margin-bottom: 70px;background-color: #fff;}
.detail{border-bottom: 1px solid #eee;padding-bottom: 10px;}
.top{position: relative;}
.top .top-left{position: absolute;left: 15px;top: 15px;}
.top .top-left img{border-radius: 100%;width: 45px;height: 45px;}
.top .top-right{padding:15px 15px 15px 75px;text-align:left;}
.top .top-right .name{font-size: 16px;}
.top .top-right .time{color: #999;font-size: 10px;margin-top: 5px;}
.cont{font-size: 14px;padding: 0px 15px 10px 15px;text-align: left;}
.cont img{width: 100%;height: auto;}
.footer{background-color: #fff;padding: 0 15px;box-sizing: border-box;}
.footer .loop{float: left;color: #999;height: 20px;line-height: 20px;}
.footer .interact{float: right;display: inline-block;font-size: 10px;}
.footer .interact span{width: 50px;font-size: 10px;color: #999;margin-left: 10px;display: inline-block;height: 20px;line-height: 20px;text-align: center;border: 1px solid #ccc;border-radius: 20px;background-color: #fff;}
.footer .interact span:active{background-color: rgba(0,0,0,.3);color: #fff;}
.chat-bar{position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ddd;
    padding: 10px 15px;}
.chat-bar .chat-input{    height: 35px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: none;
    width: 70%;
    float: left;
    padding: 0 10px;
    box-sizing: border-box;}
.chat-bar .chat-btn{    width: 25%;
    height: 35px;
    margin-left: 5%;
    background-color: #2bb7ab;
    color: #fff;
    border: none;
    border-radius: 5px;}
    .comments{padding:10px 15px;}
    .comments .title{text-align: left;font-size: 14px;}
    .comment{padding: 10px 0;}
    .comment ul{position: relative;min-height: 65px;}
    .comment .comment-l{position: absolute;left: 0;top: 0px;width: 80px;}
    .comment .comment-l img{width: 45px;height: 45px;border-radius: 100%;}
    .comment .comment-l .time{margin-top: 5px;color: #999;max-width: 80px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
    .comment .comment-r{padding-left: 90px;text-align: left;margin-bottom: 15px;color: #999;}
    .comment .comment-r .name{font-size: 14px;margin-bottom: 10px;}
    .comment .comment-r .text{padding: 10px;background-color: #fafafa;border-radius: 6px;}
</style>
