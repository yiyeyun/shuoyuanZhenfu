import request from '@/utils/request'
export function getTourism() {
  return request({
    url: `app/admin/selectTourismContent`,
    method: 'post'
  })
}
export function tourismHandle(data) {
  return request({
    url: `app/admin/tourismContent`,
    method: 'post',
    data
  })
}
