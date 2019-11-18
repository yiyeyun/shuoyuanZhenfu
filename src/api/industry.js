import request from '@/utils/request'

export function getIndustry() {
  return request({
    url: `app/admin/getindustryContent`,
    method: 'post'
  })
}
export function industryHandle(data) {
  return request({
    url: `app/admin/industryContent`,
    method: 'post',
    data
  })
}
