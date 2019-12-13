import request from '@/utils/request'

export function getSelectGroupList() {
  return request({
    url: `manager/qrCode/selectGroupList`,
    method: 'post'
  })
}
export function getPackageList(data) {
  return request({
    url: `manager/qrCode/packageList`,
    method: 'post',
    data
  })
}

export function downTxt(id) {
  return request({
    url: `manager/qrCode/downTxt/${id}`
  })
}

export function getPackageDetail(id) {
  return request({
    url: `manager/qrCode/packageInfo/${id}`,
    method: 'post'
  })
}
