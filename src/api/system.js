import request from '@/utils/request'

export function fetchSystemInfoList(query) {
  return request({
    url: '/system/getSystemInfolist',
    method: 'get',
    params: query
  })
}

export function fetchInputInfoList(query) {
  return request({
    url: '/system/getInputInfolist',
    method: 'get',
    params: query
  })
}

export function fetchTableInfoList(query) {
  return request({
    url: '/system/getTableInfolist',
    method: 'get',
    params: query
  })
}

export function fetchContractTemplateCategoryList(query) {
  return request({
    url: '/system/getContractTemplateCategoryList',
    method: 'get',
    params: query
  })
}
