
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import login from './modules/login'

Vue.use(Vuex);

const state = {
	count1: 0,
	count2: 0
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
   modules: {
    login
   },  
})


export default store