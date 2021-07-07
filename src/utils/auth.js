import Cookies from 'js-cookie'

const TokenName = 'adminToken'

export function getItem (item) {
  return window.sessionStorage.getItem(item)
}
export function setItem (item, data) {
  return window.sessionStorage.setItem(item, data)
}
export function removeItem (item) {
  return window.sessionStorage.removeItem(item)
}

// 获取 token
export function getToken () {
  return Cookies.get(TokenName)
}

// 存储 token
export function setToken (token) {
  return Cookies.set(TokenName, token)
}

// 删除 token
export function removeToken (token) {
  return Cookies.remove(TokenName, token)
}
