import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/system/getlist',
    method: 'get',
    params: query
  })
}

export function fetchContractList(query) {
    return request({
      url: '/system/getContractlist',
      method: 'get',
      params: query
    })
}