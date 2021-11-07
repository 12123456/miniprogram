const requestApi = require('../../utils/entry.js')

Page({
  data: {
    selIndex: 0,
    windowHeight:0,
    currentCategory: {
      id: 'bijiben',
      name: '笔记本',
      subCategoryList: [{
        id: 'huawei',
        image_url: '/image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '/image/test01.png',
        name: '苹果',
      }]
    },
    
    navList:[],
    goodList:[],
    rightTopPic:"../../image/classAd.png"
  },
  onLoad() {
    my.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          windowHeight: res.windowHeight 
        })
      }
    })
    this.getCatagoryList()
  },
  /**
   * 分类点击事件
   */
  onMenuTab: function (e) {
    console.log(e);
        var id = e.currentTarget.dataset.id;
        var index = e.currentTarget.dataset.index;
        // this.getProdList(id);
        this.getProdList(this.data.categoryList[index].categoryId);
        this.setData({
        selIndex: index
    });
  },
  getProdList(categoryId) {
    //加载分类列表
    
  },
  switchCate(event) {
    var that = this;
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }
    this.getGoodList(event.currentTarget.dataset.id);
    this.getCurrentCategory(currentTarget)
    this.data.navList.forEach(item => {
      if(item.id == event.currentTarget.dataset.id){
        console.log(item)
        this.setData({rightTopPic:item.picUrl})
      }
      if(this.data.rightTopPic == ""){
        this.setData({rightTopPic:"../../image/classAd.png"})
      }
    });
  },
  getCurrentCategory: function (currentTarget) {
    let that = this;
    that.setData({
      currentCategory: that.data.navList[currentTarget.dataset.index]
    });
  },

  //获取类别
  getCatagoryList(){
     let that = this
     requestApi.categoryList({},function(res) {
       console.log(res)
      if(res.code !== 200){
        return 
      }
      that.setData({navList:res.data})
    })
  },
  //获取商品
  getGoodList(pid){
    let that = this
     requestApi.goodsList({pid},function(res) {
       console.log(res)
      if(res.code !== 200){
        return 
      }
      that.setData({goodList:res.data})
    })
  }
});
