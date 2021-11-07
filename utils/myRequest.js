const utils = require('./api.js')

function getSmsCode(template, mobile, successFunc) { // 获取短信验证码接口
  let url = "/sms/";
  let data = {
    mobile,
    template
  }
  let res = utils.postRequest(url, data, successFunc)
  return res;
}
module.exports.getSmsCode = getSmsCode;

function register(mobile, smsCode, authCode, successFunc) { // 手机号注册接口
  let url = "/register/alipay"
  let data = {
    mobile,
    smsCode,
    authCode
  }
  let res = utils.postRequest(url, data, successFunc)
  return res;
}
module.exports.register = register;

function login(params, successFunc) { // 登录获取token接口
  let url = "/login/alipay"
  let data = {
    'authCode': params
  }
  let res = utils.postRequest(url,data,successFunc)
  return res;
}
module.exports.login = login;

function bannerList(params) { // 获取banner列表
  let url = "/users/banner/list"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.bannerList = bannerList;
// function bannerPageList(params) { // 获取banner列表
//   let url = "/banner/pageBannerList"
//   let data = {
    
//   }
//   let res = utils.getRequest(url,data)
//   return res;
// }
// module.exports.bannerPageList = bannerPageList;

function getCoupon(params) { // 领取优惠券
  let url = "/users/coupon/card/add"
  let data = {
    "templateId": params
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.getCoupon = getCoupon;

function couponList(params) { // 优惠券分页
  let url = "/users/coupon/card/page"
  let data = {
    "pageNo":params,
    "pageSize":params,
    "status":params
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.couponList = couponList;

function couponMsg(params) { // 优惠券模板信息
  let url = "/users/coupon/template/get"
  let data = {
    "id":params
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.couponMsg = couponMsg;

function fucName(params) { // 获取订单评论分页
  let url = "/users/order_comment"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获取评论和商家回复
  let url = "/users/order_comment/order_comment_info_merchant_reply"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获取评论分页
  let url = "/users/order_comment/order_comment_page"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 创建订单回复
  let url = "/users/order_comment_reply/create_order_comment_reply"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获取评论分页
  let url = "/users/order_comment/order_comment_page"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 创建订单回复
  let url = "/users/order_comment/order_comment_page"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 分页获取评论回复
  let url = "/users/order_comment/order_comment_page"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 确认创建订单前计算价格
  let url = "/users/order/confirm_create_order"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 确认收货
  let url = "/users/order/confirm_receiving"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;


function fucName(params) { // 直接创建订单
  let url = "/users/order/create_order"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;


function fucName(params) { // 直接创建订单
  let url = "/users/order/create_order"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 购物车创建订单
  let url = "/users/order/create_order_from_cart"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 订单详情
  let url = "/users/order/info"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 订单分页
  let url = "/users/order/order_page"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 物流详细 - 物流通用
  let url = "/users/order_logistics/info"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 物流详细 - 返回订单所关联的所有物流信息(订单用的)
  let url = "/users/order_logistics/info_order"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 订单售后
  let url = "/users/order_return/apply"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 订单售后详细
  let url = "/users/order_return/info"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 退货原因列表
  let url = "/users/order_return/reason"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 检查支付交易是否成功
  let url = "/users/transaction/get"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 提交支付交易
  let url = "/users/transaction/submit"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 时间选择列表
  let url = "/user/time_choose/list"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 用户地址添加
  let url = "/users/address/add"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;


function fucName(params) { // 获取地址
  let url = "/users/address/address"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获取默认地址
  let url = "/users/address/default_address"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 用户地址列表
  let url = "/users/address/list"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 用户地址删除
  let url = "/users/address/add"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 用户地址更新
  let url = "/users/address/add"
  let data = {
    
  }
  let res = utils.postRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获得指定编号下的子分类的数组
  let url = "/users/category/list"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 获得所有推荐商品列表
  let url = "/user/product_recommend/list"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;

function fucName(params) { // 商品 SPU 明细
  let url = "/users/spu/info"
  let data = {
    
  }
  let res = utils.getRequest(url,data)
  return res;
}
module.exports.fucName = fucName;