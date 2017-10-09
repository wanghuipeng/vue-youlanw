<template>
  <div id="banner">
		<div class="page-swipe" >
      <mt-swipe :auto="4000" >
			  <mt-swipe-item><img class="img-show" :src="bannerData.data[0].resource.thumbImageUrl"/></mt-swipe-item>
			  <mt-swipe-item><img class="img-show" :src="bannerData.data[1].resource.thumbImageUrl"/></mt-swipe-item>
			  <mt-swipe-item><img class="img-show" :src="bannerData.data[2].resource.thumbImageUrl"/></mt-swipe-item>
			</mt-swipe>
		</div>

  </div>
</template>
<script>
//高清缩放解决方案（单位rem）
!function(x) {  
function w() {  
    var a = r.getBoundingClientRect().width;  
    a / v > 640 && (a = 640 * v), x.rem = a / 16, r.style.fontSize = x.rem + "px"  
}  
var v, u, t, s = x.document, r = s.documentElement, q = s.querySelector('meta[name="viewport"]');  
if (q) {  
    var o = q.getAttribute("content").match(/initial\-scale=(["‘]?)([\d\.]+)\1?/);  
    o && (u = parseFloat(o[2]), v = parseInt(1 / u))  
}  
if (!v && !u) {  
    var n = (x.navigator.appVersion.match(/android/gi), x.navigator.appVersion.match(/iphone/gi)), v = x.devicePixelRatio;  
    v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, u = 1 / v  
}  
if (r.setAttribute("data-dpr", v), !q) {  
    if (q = s.createElement("meta"), q.setAttribute("name", "viewport"), q.setAttribute("content", "initial-scale=" + u + ", maximum-scale=" + u + ", minimum-scale=" + u + ", user-scalable=no"), r.firstElementChild) {  
        r.firstElementChild.appendChild(q)  
    } else {  
        var m = s.createElement("div");  
        m.appendChild(q), s.write(m.innerHTML)  
    }  
}  
x.dpr = v, x.addEventListener("resize", function() {  
    clearTimeout(t), t = setTimeout(w, 300)  
}, !1), x.addEventListener("pageshow", function(b) {  
    b.persisted && (clearTimeout(t), t = setTimeout(w, 300))  
}, !1), "complete" === s.readyState ? s.body.style.fontSize = 12 * v + "px" : s.addEventListener("DOMContentLoaded", function() {  
    s.body.style.fontSize = 12 * v + "px"  
    }, !1), w()  
}(window); 

  import * as types from '../../../store/types';
  import {API_TYPE, fetchBannersByType} from '../../../store/api';

  export default{

    data(){
      return {
        loading: true,
        bannerData: {
          data: []
        },
      }
    },
    mounted(){
      var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "7b79c6b4e3754797bf375c6367ef3ec1", branch_id = 1;
      fetchBannersByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.bannerData = data;
                this.loading = false;
                console.log(this.bannerData.data)
              });

    },
    updated(){
    },
    destroyed(){
    }
  };
</script>
<style scoped>
  .page-swipe .mint-swipe {
    height: 3.3rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
.page-swipe .mint-swipe img{width: 100%;height: auto;}
</style>
