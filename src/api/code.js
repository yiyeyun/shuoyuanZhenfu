import request from '@/utils/request'

export function getSelectGroupList() {
  return request({
    url: `qrCode/selectGroupList`,
    method: 'post'
  })
}
export function getPackageList(data) {
  return request({
    url: `qrCode/packageList`,
    method: 'post',
    data
  })
}

export function downTxt(id) {
  return request({
    url: `qrCode/downTxt/${id}`
  })
}

export function getPackageDetail(id) {
  return request({
    url: `qrCode/packageInfo/${id}`,
    method: 'post'
  })
}

export function getPackageSubList(data) {
  return request({
    url: `qrCode/packageSubList`,
    method: 'post',
    data
  })
}
