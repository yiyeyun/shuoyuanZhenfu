import request from '@/utils/request'

export function login(data) {
  return request({
    url: `app/admin/login`,
    method: 'post',
    data
  })
}

export function govermentDataHandle(data) {
  return request({
    url: `app/admin/governmentInfo`,
    method: 'post',
    data
  })
}
