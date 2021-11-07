const requestApi = require('../../utils/entry.js')
// const requestApi = require('../../utils/myRequest')
// import {
//   getBannerlist
// } from '../../api/index'

Page({
  data: {
    top: 0,
    swipers: [],//首页banner
    newStudiesList:[],
    logos: [],//导航按钮列表
    quicks: [],//限时抢购列表
    currentIndex: 0,
    goodsList: [], //首页推荐
    navList: [
      {id:1,title:"全部",subTitle:"为你推荐"},
      {id:2,title:"热门",subTitle:"精品手机"},
      {id:3,title:"爆款",subTitle:"电脑平板"},
      {id:4,title:"畅玩",subTitle:"游戏电玩"},
    ],//商品分类
    scrollLeft: 0,
    id: '1',
    recommendId:1,
    scrollHeight: 0,
    scrollTop: 0,
    showTop: false,
    windowWidth: 0
  },
  onLoad() {
    my.setNavigationBar({
      //图标设置为白色（通过改变背景颜色实现）
      backgroundColor: '#0C79FF',
    });
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          scrollHeight: res.windowHeight,
          windowWidth: res.windowWidth
        });
      }
    });
    this.getbannerList()
    // 请求banner
    // this.getBanner()
  },
  getBanner() {
    getBannerlist().then(res => {
      console.log(res,'banner');
    })
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      this.setData({
        currentIndex: e.detail.current
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    this.setData({
      //拿到当前索引并动态改变
      currentIndex: e.currentTarget.dataset.idx
    })
  },
  // 分类点击事件
  classClick(e) {
    let type = e.currentTarget.dataset.type
    if (type === '全部商品') {
      my.navigateTo({
        url: '/pages/category/index'
      })
    } else {
      my.navigateTo({
        url: '/pages/goodsList/goodsList?id=' + type
      })
    }
  },
  classsifyClick(e) {
    this.setData({
      showTop: true,
    });
  },
  clickClassifytBtn(event) {
    var nowLeft = this.data.windowWidth / 2;
    this.setData({
      id: event.currentTarget.dataset.id,
      scrollLeft: nowLeft
    });
    this.setData({
      showTop: false
    });
  },
  onPopupClose() {
    this.setData({
      showTop: false
    });
  },
  // 跳转商品详情
  toGoodsDetail(e) {
    my.navigateTo({
      url: '/pages/goodsDetail/index'
    })
  },
  toSearch() {
    my.navigateTo({
      url: '/pages/search/search'
    })

    //以下测试
    /* let res = requestApi.bannerList()
    console.log(res) */
  },
  switchCate: function (event) {
    if (this.data.recommendId == event.currentTarget.dataset.id) {
      return false;
    }
    // var clientX = event.detail.clientX; //当前点击元素的位置
    // var currentTarget = event.currentTarget;
    // // windowWidth
    // console.log("clientX:",clientX);
    // if (clientX > (this.data.windowWidth / 2)) {
    //   console.log(currentTarget.offsetLeft / 2 );
    //   this.setData({
    //     scrollLeft: currentTarget.offsetLeft / 2 
    //   });
    // }
    // if (clientX < 60) {

    // } else if (clientX > 330) {
    //   this.setData({
    //     scrollLeft: currentTarget.offsetLeft
    //   });
    // }
    this.setData({
      recommendId: event.currentTarget.dataset.id
    });
    
    this.getCategoryInfo();
  },
  getCategoryInfo: function () {
    let that = this;
    //nav位置
    let currentIndex = 0;
    let navListCount = that.data.navList.length;
    for (let i = 0; i < navListCount; i++) {
      currentIndex += 1;
      if (that.data.navList[i].id == that.data.id) {
        break;
      }
    }
    if (currentIndex > navListCount / 2 && navListCount > 4) {
      that.setData({
        scrollLeft: currentIndex * 60
      });
    }
    // that.getGoodsList();
    this.getRecomList()
  },
  getGoodsList: function () {},
  getbannerList: function () {
    let that = this
    // 顶部轮播
    requestApi.bannerList1({type: 1},function(res){
      console.log(res);
      if(res.code !== 200){
        return 
      }
      let imgs = res.data.map(item=>{
        return {image: item.imgPath}
      })
      console.log('image',imgs)
      console.log('轮播图',res)
      that.setData({
        swipers: imgs
      })
    })
    // 导航按钮
   requestApi.bannerList1({type: 2},function(res){
      console.log('妞妞',res);
      if(res.code !== 200){
        return 
      }
      that.setData({
        logos:res.data
      })
    })
    // 新品速报
    requestApi.pageProductList({type:1},function(res) {
      console.log('新品速报',res);
      if(res.code !== 200){
        return 
      }
      that.setData({
        newStudiesList:res.data
      })
    })
    // 限时抢购
    requestApi.pageProductList({type:2},function(res) {
      if(res.code !== 200){
        return 
      }
      that.setData({
        quicks: res.data
      })
    })
    // requestApi.categoryList({},function(res) {
    //   console.log('productList',res);
    //   if(res.code !== 200){
    //     return 
    //   }
    //   that.setData({
    //     navList: [{
    //       id: '',
    //       name: '为您推荐'
    //     },...res.data]
    //   })
      
    // })
    this.getRecomList()
  },
  getRecomList() {
     // 推荐
     let that = this
     requestApi.getRecommendGoodsList({id:this.data.recommendId},function(res) {
      if(res.code !== 200){
        return 
      }
      that.setData({
        goodsList: res.data
      })
    })
  },
  // 获取商品列表
  getproductList(){
    let cid = this.data.id
    if(!cid){
      this.getRecomList()
      return 
    }
    let that = this
    requestApi.productList({pid:cid},function(res) {
      console.log('productList',res);
      if(res.code !== 200){
        return 
      }
      that.setData({
        goodsList: res.data
      })
    })
  }
})