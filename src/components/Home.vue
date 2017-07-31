<template>
  <div class="hello">
    <v-header></v-header>
    <v-banner></v-banner>
  </div>
</template>

<script>
	import vHeader from './Header.vue'
	import vBanner from './Banner.vue'
	export default{
    components: {vHeader,vBanner},
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
