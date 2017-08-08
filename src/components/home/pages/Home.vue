<template>
  <div class="hello">
    <v-header></v-header>
    <v-banner></v-banner>
    <v-classify></v-classify>
    <v-recommend></v-recommend>
    <v-title-bar></v-title-bar>
    <v-job-list></v-job-list>
    <v-card></v-card>
    <v-footer-tab></v-footer-tab>
  </div>
</template>

<script>
	import vHeader from '../components/Header.vue'
	import vBanner from '../components/Banner.vue'
	import vClassify from '../components/Classify.vue'
	import vRecommend from '../components/Recommend.vue'
	import vTitleBar from '../components/TitleBar.vue'
	import vJobList from '../components/JobList.vue'
	import vCard from '../components/Card.vue'
	import vFooterTab from '../components/FooterTab.vue'
	export default{
    components: {vHeader,vBanner,vClassify,vRecommend,vTitleBar,vJobList,vCard,vFooterTab},
    data(){
      return {
        
      }
    },
    mounted(){

    },
    updated(){
    },
    destroyed(){
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
