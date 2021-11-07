let myRequest = require('../utils/request')
/**
 * 首页banner接口
 * @param {*} data 
 */
export function getBannerlist(data = {}) {
  return myRequest({
    url: '/users/banner/list',
    method: 'GET'
  })
}
/**
 * 登录获取code
 * @param {*} data 
 */
export function loginCodeFun(data = {}) {
  return myRequest({
    url: `/users/login/${data.authCode}`,
    method: 'POST'
  })
}