Page({
  data: {
    selIndex: 0,
    windowHeight:0,
    currentCategory: {
      id: 'bijiben',
      name: '笔记本',
      subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    navList: {
      id: 'bijiben',
      name: '笔记本',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    navList: [{
      id: 'bijiben',
      name: '笔记本',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    {
      id: 'taishiji',
      name: '台式机',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    {
      id: 'fuyidayinji',
      name: '复印/打印机',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    {
        id: 'diannaopeijian',
        name: '电脑配件',
        subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    {
      id: 'yidongshebei',
      name: '移动设备',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    {
      id: 'shumayule',
      name: '数码娱乐',subCategoryList: [{
        id: 'huawei',
        image_url: '../../image/test01.png',
        name: '华为',
      },{
        id: 'pingguo',
        image_url: '../../image/test01.png',
        name: '苹果',
      }]
    },
    ]
  },
  onLoad() {
    my.getSystemInfo({
       success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
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

    this.getCurrentCategory(event.currentTarget);
  },
  getCurrentCategory: function (currentTarget) {
    let that = this;
    that.setData({
      currentCategory: that.data.navList[currentTarget.dataset.index]
    });
  },
});
