
import axios from 'axios';

// 使用代理
const HOST =process.env.NODE_ENV === 'production' ? 'http://10.0.11.44:8080' : 'http://10.0.11.44:8080';

export function fetch(url) {

  return new Promise((resolve, reject)=> {
    axios.get(url)
        .then(response => {
          resolve(response.data);
        })
  })
}


//首页轮播
export function fetchBannersByType(appkey, client_id, token , branch_id) {
  return fetch(`/api/v5/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//首页推荐
export function fetchRecommendByType(appkey, client_id, token , branch_id) {
  return fetch(`/api/v5/adv/homeBannerByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//首页职位列表
export function fetchJobListByType(appkey, client_id, token , branch_id) {
  return fetch(`/api/v5/adv/homePageByBranchId?appkey=${appkey}&client_id=${client_id}&token=${token}&branch_id=${branch_id}`)
}
//职位搜索
export function fetchSearchListByType(appkey, client_id, token , keyword) {
  return fetch(`/api/v4/enterprise/findByKeyword?appkey=${appkey}&client_id=${client_id}&token=${token}&keyword=${keyword}`)
}
//说说列表
export function fetchChatListByType(appkey, client_id, token , page , limit) {
  return fetch(`/api/v6/article/ramble?appkey=${appkey}&client_id=${client_id}&token=${token}&page=${page}&limit=${limit}`)
}
//说说详情
export function fetchChatDetailByType(appkey, client_id, token , id) {
  return fetch(`/api/v6/article/detail?appkey=${appkey}&client_id=${client_id}&token=${token}&id=${id}`)
}
//根据企业id查询企业对象
export function fetchJobItemByType(appkey, client_id, token , id) {
  return fetch(`/api/v4/enterprise/getEnterpriseById?appkey=${appkey}&client_id=${client_id}&token=${token}&id=${id}`)
}
