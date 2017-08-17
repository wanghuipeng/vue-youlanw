
import axios from 'axios';

// 使用代理
const HOST =process.env.NODE_ENV === 'production' ? '不告诉你' : 'http://10.12.1.44:8080/api';

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
  }
};

export function fetch(url) {

  return new Promise((resolve, reject)=> {
    axios.get(HOST + url)
        .then(response => {
          resolve(response.data);
        })
  })
}
//首页轮播
export function fetchBannersByType(appkey, client_id, token , branch_id) {
  return fetch(`/v5/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//首页推荐
export function fetchRecommendByType(appkey, client_id, token , branch_id) {
  return fetch(`/v5/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//首页职位列表
export function fetchJobListByType(appkey, client_id, token , branch_id) {
  return fetch(`/v5/adv/homePageByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//职位搜索
export function fetchSearchListByType(appkey, client_id, token , keyword) {
  return fetch(`/v4/enterprise/findByKeyword?appkey=${appkey}&client_id=${client_id}&token=${token}&keyword=${keyword}`)
}
//说说列表
export function fetchChatListByType(appkey, client_id, token , page , limit) {
  return fetch(`/v6/article/ramble?appkey=${appkey}&client_id=${client_id}&token=${token}&page=${page}&limit=${limit}`)
}
//说说详情
export function fetchChatDetailByType(appkey, client_id, token , id) {
  return fetch(`/v6/article/detail?appkey=${appkey}&client_id=${client_id}&token=${token}&id=${id}`)
}