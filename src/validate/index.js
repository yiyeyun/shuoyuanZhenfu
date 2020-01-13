import { Message } from 'element-ui'
const warningMessage = (message) => {
  Message({
    message,
    type: 'warning'
  })
}

// 验证手机号
export function validatePhone(value) {
  return new Promise((resolve, reject) => {
    if (!(value && value.trim())) {
      warningMessage('手机号不能为空')
      reject()
    }
    if (!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(value.trim())) {
      warningMessage('手机号格式有误')
      reject()
    } else {
      resolve()
    }
  })
}

// 验证手机号座机
export function validateTel(value) {
  return new Promise((resolve, reject) => {
    if (!(value && value.trim())) {
      warningMessage('联系方式不能为空')
      reject()
    }
    const reg = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[0123456789][0-9]{8}|17[0123456789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/
    if (!reg.test(value.trim())) {
      warningMessage('联系方式格式有误')
      reject()
    } else {
      resolve()
    }
  })
}

// 不为空验证
export function validateNotNull(value, type) {
  return new Promise((resolve, reject) => {
    if (!(value && (value + '').trim())) {
      warningMessage(type)
      reject()
    } else {
      resolve()
    }
  })
}
export function validateIntege(value, message) {
  return new Promise((resolve, reject) => {
    if (!value && value !== 0) {
      reject()
    }
    if (!/^[1-9]+[0-9]*$/.test(+value)) {
      warningMessage(message)
      reject()
    } else {
      resolve()
    }
  })
}
