import request from '@/utils/request'

export function createAccount(data) {
  return request({
    url: `app/admin/account/createAccount`,
    method: 'post',
    data
  })
}
