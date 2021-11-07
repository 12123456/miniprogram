const utils = require('./api.js')
/********************************首页api************************************/
// 首页-顶部轮播
function bannerList1(params,successFunc) { // 获取banner列表
  let url = "/banner/pageBannerList"
  let data = {...params }
  let res = utils.postRequest(url,data,successFunc)
  return res;
}
// 首页-推荐
function pageMainCmdlist(params,successFunc) { // 获取banner列表
  let url = "/banner/pageMainCmdlist"
  let data = {...params }
  let res = utils.postRequest(url,data,successFunc)
  return res;
}
// 首页-限时抢购
function pageProductList(params,successFunc) { // 获取banner列表
  let url = "/banner/pageProductList"
  let data = {...params }
  let res = utils.postRequest(url,data,successFunc)
  return res;
}
// 首页-商品分类
function categoryList(params,successFunc) { // 获取banner列表
  let url = "/category/list"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}
// 首页-商品分类商品list
function goodsList(params,successFunc) { // 获取banner列表
  let url = "/category/getCategoryById"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}

// 首页-商品列表
function productList(params,successFunc) { // 获取banner列表
  let url = "/product/list"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}

/************************************首页api*********************************************/

/************************************商品*********************************************/
// 首页-商品列表
function getGoodsList(params,successFunc) {
  let url = "/mp/goods/getGoodsList"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}

// 首页-推荐商品列表
function getRecommendGoodsList(params,successFunc) { 
  let url = "/mp/goods/getRecommendGoodsList"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}

// 首页-商品详情
function getGoodsDetailInfo(params,successFunc) {
  let url = "/mp/goods/getGoodsDetailInfo"
  let data = {...params }
  let res = utils.getRequest(url,data,successFunc)
  return res;
}

/************************************商品*********************************************/

/************************************分类*********************************************/
/************************************分类*********************************************/


/************************************我的*********************************************/
/************************************我的*********************************************/


module.exports = {
  bannerList1,
  pageMainCmdlist,
  pageProductList,
  productList,
  categoryList,
  goodsList,getGoodsList,getRecommendGoodsList,getGoodsDetailInfo
};
