import request from '@/utils/request'

// todo 老街口
export function createAccount(data) {
  return request({
    url: `app/admin/account/createAccount`,
    method: 'post',
    data
  })
}

export function createGroupAccount(data) {
  return request({
    url: `manager/account/createdGroupAccount`,
    method: 'post',
    data
  })
}

export function getAccountList(data) {
  return request({
    url: `manager/account/groupAccountList`,
    method: 'post',
    data
  })
}

export function accountEnable(data) {
  return request({
    url: `manager/account/accountEnable`,
    method: 'post',
    data
  })
}
export function createPackage(data) {
  return request({
    url: `manager/qrCode/createdPackage`,
    method: 'post',
    data
  })
}
