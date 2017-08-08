/**
 * Created by superman on 2016/12/14.
 */
import * as types from '../types';
import {fetchMoviesByType, fetchSearchMovies, fetchMovieById} from '../api';

const state = {
  movies: [],
  movieList: {
    title: '',
    total: 0,
    subjects: [],
  },
  busy: false,
  movie: {},
};

const actions = {
  [types.FETCH_MOVIES](context,payload){
    fetchMoviesByType(payload.appkey, payload.client_id, payload.token, payload.branch_id)
        .then(data=>{
          data.type = payload.type;
          return context.commit([types.FETCH_MOVIES], data)
        });
  }
};

const mutations = {
  [types.FETCH_MOVIES](state, list){
    state.movies.push(list);
  }
};


export default {
  state,
  mutations,
  actions
}