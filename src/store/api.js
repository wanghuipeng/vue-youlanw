
import axios from 'axios';

// 使用代理
const HOST =process.env.NODE_ENV === 'production' ? '不告诉你' : 'http://10.12.1.44:8080/api/v5';

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

export function fetchBannersByType(appkey, client_id, token , branch_id) {
  return fetch(`/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}

export function fetchRecommendByType(appkey, client_id, token , branch_id) {
  return fetch(`/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}

export function fetchJobListByType(appkey, client_id, token , branch_id) {
  return fetch(`/adv/homePageByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
