<template>
  <div id="footerTab">
  	<div class="footerTab">
  		<div class="nav clearfix">
        <mt-button size="small" @click="tabClick('tab-container1')" :class="{current:active=='tab-container1'}">热门城市</mt-button>
        <mt-button size="small" @click="tabClick('tab-container2')" :class="{current:active=='tab-container2'}">热门企业</mt-button>
        <mt-button size="small" @click="tabClick('tab-container3')" :class="{current:active=='tab-container3'}">热门职位</mt-button>
        <mt-button size="small" @click="tabClick('tab-container4')" :class="{current:active=='tab-container4'}">热门招聘</mt-button>
      </div>
			<mt-tab-container v-model="active" swipeable >
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell v-for="n in 3" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container4">
			    <mt-cell v-for="n in 4" title="tab-container 4"></mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
  </div>
</template>
<script>
  export default {
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
	    border-bottom: 1px solid #2bb7ac;
	    color: #333;
	    border-width: 2px;
	    background-color: #fff;
	}
.mint-button--default {
    background-color: #f0f0f0;
    box-shadow:none;
}
</style>
