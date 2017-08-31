<template>
  <div id="chatList">
			<ul class="chatList" v-for="(item, key ,index) in chatListData.data" v-bind:item="item" v-bind:index="index" v-bind:key="item.id" >
				
		    	<li class="item">
		    		<div class="chat-left">
		    			<template v-if="item.createUser.icon != 0">
							  <img :src="item.createUser.icon" />
							</template>
							<template v-else>
							  <img  src="http://m.youlanw.com:80/static/images/default-portrait.png" />
							</template>
		    		</div>
		    		<div class="chat-right">
		    			<ul>
		    				<li class="first clearfix">
		    					<span class="name">{{item.createUser.name}}</span>
		    				  <span class="time">{{item.publishTime | time}}</span>
		    				</li>
		    				<router-link :to="{name: 'ChatDetail', params: {id: item.id}}">
		    				<li class="second">
		    					<img v-if="item.thumbImage != null" :src="item.thumbImage" />
		    					<p class="text">{{item.content}}</p>
		    				</li>
		    				</router-link>
		    				<li class="last clearfix">
		    					<span class="loop">{{item.circle.name}}</span>
		    				  <p class="interact">
		    				  	<span @click="praiseCount1(item)">{{count1}}赞：{{item.praiseCount}}</span><span @click="commentCount1(item)">{{count2}}回复：{{item.commentCount}}</span>
		    				  </p>
		    				</li>
		    				<li>
		    					<v-comment :commentData="item.comments"></v-comment>
		    					<router-link :to="{name: 'ChatDetail', params: {id: item.id}}">
		    					<span class="allComments" v-if="item.commentCount > 2">查看{{item.commentCount}}条回复</span>
		    					</router-link>
		    				</li>
		    			</ul>
		    		</div>
		    	</li>
			</ul>
			<section v-if="showLoading" v-for="n in 10">
       <img src="../../../../static/images/svg_bg.svg">
      </section>
			<div class="loadMore" @click="loadMore">查看更多&nbsp;&gt;&gt;</div>
  </div>
</template>
<script>
  import {fetchChatListByType} from '../../../store/api'
  import {mapGetters,mapActions} from 'vuex'
  import vComment from './Comment.vue'

  export default{
    components: {vComment},
    data(){
      return {
        chatListData: {
          data: []
        },
        loading:true,
        limit:10,
        showLoading:true
      }
    },
    computed: mapGetters([
    	'count1',
    	'count2'
    ]),
    mounted(){
       var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", page = 1 , limit = this.limit;
        fetchChatListByType(appkey, client_id, token , page , limit)
              .then((data,index) => {
                this.chatListData = data.ramble;
                console.log("说说："+this.chatListData.data[8].comments[0].userName);
                //隐藏展位图
                this.showLoading = false;
                //初始化点赞和评论的count
					      //this.$store.state.count1 = this.chatListData.data[index].praiseCount;
					      //this.$store.state.count2 = this.chatListData.data[index].commentCount;
              });
    },
    updated(){
    	
    },
    destroyed(){
    },
    methods: {
    	praiseCount1(item){
    		item.praiseCount++;
    	},
    	commentCount1(item){
    		item.commentCount++;
    	},
      loadMore() {
      	this.limit += 10
			  var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", page = 1 , limit = this.limit;
        fetchChatListByType(appkey, client_id, token , page , limit)
              .then((data) => {
                this.chatListData = data.ramble;
                console.log("说说："+this.chatListData.data)
              });
			},
			...mapActions([
				'praiseCount',
				'commentCount'
			])
    }
  }
</script>
<style scoped>
.chatList .item{position: relative;margin-top: 10px;border-bottom: 1px solid #eee;}
.chatList .item:first-child{margin-top: 0;}
.chatList .chat-left{position: absolute;left: 15px;top: 15px;}
.chatList .chat-left img{border-radius: 100%;width: 50px;height: 50px;}
.chatList .chat-right{padding:15px 15px 15px 75px;}
.chatList .chat-right ul li{text-align: left;}
.chatList .chat-right .first .name{float: left;color: #2bb7ab;font-size: 15px;}
.chatList .chat-right .first .time{float: right;color: #999;font-size: 10px;}
.chatList .chat-right .second{font-size: 14px;padding:  10px 0;}
.chatList .chat-right .second img{width: 100%;height: auto;}
.chatList .chat-right .last .loop{float: left;color: #999;height: 20px;line-height: 20px;}
.chatList .chat-right .last .interact{float: right;display: inline-block;font-size: 10px;}
.chatList .chat-right .last .interact span{width: 50px;font-size: 10px;color: #999;margin-left: 10px;display: inline-block;height: 20px;line-height: 20px;text-align: center;border: 1px solid #ccc;border-radius: 20px;background-color: #fff;}
.chatList .chat-right .last .interact span:active{background-color: rgba(0,0,0,.3);color: #fff;}
.loadMore{height: 40px;line-height: 40px;color: #2bb7ab;font-size: 14px;}
.loadMore:active{background-color: rgba(0,0,0,.3);color: #fff;}
.allComments{color: #2bb7ab;}
</style>
