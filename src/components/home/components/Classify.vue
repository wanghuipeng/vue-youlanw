<template>
  <div id="classify">
  	<div class="classify">
		<mt-tabbar>
		  <mt-tab-item id="tab1">
		  	<p class="circle circle-1"><i class="icon-1"></i></p>
		    高工资
		  </mt-tab-item>
		  <mt-tab-item id="tab2">
            <p class="circle circle-2"><i class="icon-2"></i></p>
		    包吃住
		  </mt-tab-item>
		  <mt-tab-item id="tab3">
            <p class="circle circle-3"><i class="icon-3"></i></p>
		    当天进
		  </mt-tab-item>
		  <mt-tab-item id="tab4">
            <p class="circle circle-4"><i class="icon-4"></i></p>
		    所有职位
		  </mt-tab-item>
		</mt-tabbar>
	</div>
  </div>
</template>
<script>
  export default{
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
	.classify .mint-tabbar{position: relative;}
	.mint-tab-item-label .circle{width: 50px;
height: 50px;
border-radius: 50%;
display: block;
margin: 0 auto 10px auto;
position: relative;}
.mint-tab-item-label .circle-1{background-color: #f7c346;} 
.mint-tab-item-label .circle-2{background-color: #82b7e1;} 
.mint-tab-item-label .circle-3{background-color: #81d54c;} 
.mint-tab-item-label .circle-4{background-color: #df7aa4;} 

	.mint-tab-item-label i{
		background: url(../../../../static/images/img.png) no-repeat;
    background-position-x: 0%;
    background-position-y: 0%;
    background-size: auto auto;
width: 30px;
height: 30px;
display: inline-block;
vertical-align: middle;
position: absolute;
left: 50%;
margin-left: -15px;
top: 50%;
margin-top: -15px;
background-size: 50px !important;
-webkit-animation-duration: 1s;
animation-duration: 1s;
-webkit-animation-fill-mode: both;
animation-fill-mode: both;
-webkit-animation-name: rubberBand;
animation-name: rubberBand;
	}
  .icon-1{background-position: 5px 1px !important;}
  .icon-2{background-position: 0px -33px !important;}
  .icon-3{background-position: 2px -67px !important;}
  .icon-4{background-position: 5px -102px !important;}
/*水滴弹性*/
@-webkit-keyframes rubberBand {
	0% {
		-webkit-transform:scale3d(1,1,1);
		transform:scale3d(1,1,1)
	}
	30% {
		-webkit-transform:scale3d(1.25,.75,1);
		transform:scale3d(1.25,.75,1)
	}
	40% {
		-webkit-transform:scale3d(0.75,1.25,1);
		transform:scale3d(0.75,1.25,1)
	}
	50% {
		-webkit-transform:scale3d(1.15,.85,1);
		transform:scale3d(1.15,.85,1)
	}
	65% {
		-webkit-transform:scale3d(0.95,1.05,1);
		transform:scale3d(0.95,1.05,1)
	}
	75% {
		-webkit-transform:scale3d(1.05,.95,1);
		transform:scale3d(1.05,.95,1)
	}
	100% {
		-webkit-transform:scale3d(1,1,1);
		transform:scale3d(1,1,1)
	}
}
@keyframes rubberBand {
	0% {
		-webkit-transform:scale3d(1,1,1);
		transform:scale3d(1,1,1)
	}
	30% {
		-webkit-transform:scale3d(1.25,.75,1);
		transform:scale3d(1.25,.75,1)
	}
	40% {
		-webkit-transform:scale3d(0.75,1.25,1);
		transform:scale3d(0.75,1.25,1)
	}
	50% {
		-webkit-transform:scale3d(1.15,.85,1);
		transform:scale3d(1.15,.85,1)
	}
	65% {
		-webkit-transform:scale3d(0.95,1.05,1);
		transform:scale3d(0.95,1.05,1)
	}
	75% {
		-webkit-transform:scale3d(1.05,.95,1);
		transform:scale3d(1.05,.95,1)
	}
	100% {
		-webkit-transform:scale3d(1,1,1);
		transform:scale3d(1,1,1)
	}
}
.rubberBand {
	-webkit-animation-name:rubberBand;
	animation-name:rubberBand
}
.mint-tab-item{padding: 10px 0;}
.mint-tabbar{background-image: none;}
</style>
