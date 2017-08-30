<template>
  <div id="recommend">
  	<div class="recommend">
		<ul class="clearfix">
			<li v-for="(item, index) in recommendData.data">
				<a href="" class="recommend-item-1">
					<p>{{item.resource.title}}</p>
					<p>{{item.resource.subtitle}}</p>
					<img :src="item.resource.thumbImageUrl" :alt="item.resource.subtitle">
				</a>
	    </li>
	  </ul>
	</div>
  </div>
</template>
<script>
  import * as types from '../../../store/types';
  import {API_TYPE, fetchRecommendByType} from '../../../store/api';
  export default{
    data(){
      return {
        loading: true,
        recommendData: {
          data: []
        },
      }
    },
    mounted(){
      var appkey = "145FB9D1-2643-4B18-B9EA-8CD2C44FAC00", client_id = "test", token = "b876efafcff64f7580ed2175bcb6ea2e", branch_id = 1;
      fetchRecommendByType(appkey, client_id, token , branch_id)
              .then((data) => {
                this.recommendData = data;
                this.loading = false;
                console.log(this.recommendData.data)
              });
    },
    methods: {
      
    }
  };
</script>
<style scoped>
  .recommend ul li{box-sizing: border-box;}
  .recommend ul li:nth-child(odd){border-left: none;
    margin-right: -1px;
    border-left-width: 0;}
</style>
