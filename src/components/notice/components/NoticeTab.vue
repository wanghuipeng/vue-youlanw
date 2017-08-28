<template>
  <div id="noticeTab">
  	<div class="noticeTab">
  		<div class="nav clearfix">
        <mt-button size="small" @click="tabClick('tab-container1')" :class="{current:active=='tab-container1'}">通知</mt-button>
        <mt-button size="small" @click="tabClick('tab-container2')" :class="{current:active=='tab-container2'}">好友</mt-button>
      </div>
			<mt-tab-container v-model="active" swipeable >
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell>
			    	<v-noticeEmpty></v-noticeEmpty>
			    </mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell>
			    	<v-noticeEmpty></v-noticeEmpty>
			    </mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
  </div>
</template>
<script>
  import vNoticeEmpty from './NoticeEmpty.vue'
  export default {
  	components: {vNoticeEmpty},
	  name: 'page-tab-container',
	  data() {
	    return {
	      active: 'tab-container1'
	    };
	  },
	  methods:{
        tabClick(id){
            this.active = id
            console.log(this.active)
        }
    }
	};
</script>
<style scoped>
  .mint-button--small {
    height: 40px;
    line-height: 40px;
    border-radius: 0;
    float: left;
}
	.mint-button--small.current{
	    background-color: #2bb7ac;
	    color: #333;
	    border-width: 2px;
	    color: #fff;
	}
.mint-button--default {
    background-color: #f0f0f0;
    box-shadow:none;
}
.nav{
    width: 200px;
    margin: 15px auto 15px auto;}
    .nav .mint-button{width: 100px;}
.mint-cell-wrapper{text-align: left;background-image: none;}
.mint-cell-wrapper .mint-cell-value{width: 100%;text-align: center;}
</style>
