const requestApi = require('../../utils/entry.js')

Page({
  data: {
    /* position: 'bottomright', // 气泡位置
    popoverShow: false, // 气泡显示
    showMask: true, // 气泡蒙层显示
    leaseTerm: '租期升序',
    price: '价格升序', */
    categoryId:"",
    goodsList: [{
      id: '0',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '1',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '2',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '3',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '4',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '5',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    {
      id: '6',
      image_url: '../../image/test04.png',
      description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
      extend: '全新',
      rentStart: '365天起租',
      price: '10.9',
      priceInt: 10,
      pricefloat: 9
    },
    ],
    sortIndex:0,
    currentSortType: 'id',
    bandName: '综合',
    currentSortOrder: 'desc',
    categoryFilter: false,
    animation: null,
    isRuleTrue: false,
    quickList: [{
      id: 0,
      name: "全新"
    }, {
      id: 1,
      name: "99新"
    }, {
      id: 2,
      name: "95新"
    }, {
      id: 3,
      name: "9成新"
    }, {
      id: 4,
      name: "8成新"
    }, {
      id: 5,
      name: "7成新"
    }],
    rentStartList: [{
      id: 0,
      name: '1天起租'
    }, {
      id: 1,
      name: '7天起租'
    }, {
      id: 2,
      name: '15天起租'
    }, {
      id: 3,
      name: '30天起租'
    }, {
      id: 4,
      name: '90天起租'
    },
    {
      id: 5,
      name: '180天起租'
    }, {
      id: 6,
      name: '365天起租'
    }
    ],
    rentfullList: [{
      id: 0,
      name: "是"
    }, {
      id: 1,
      name: "否"
    }],
    priceOrderList: [{
      id: 0,
      name: '从高到低'
    }, {
      id: 1,
      name: '从低到高'
    }],
    addressList: [{
      id: 0,
      name: "北京"
    }, {
      id: 1,
      name: "长沙"
    }, {
      id: 2,
      name: "成都"
    }]
  },
  onLoad(options) {
    my.setNavigationBar({
      reset: true,
      title: '产品列表',
    })
    console.log(options)
    this.setData({
      categoryId: options.id
    });
    this.getGoodsList(options.id)
  },
  onReady() { },
  onPopupClose() {
    this.setData({
      isRuleTrue: false,
    });
  },
  openSortFilter(e) {
    let index=Number(e.target.targetDataset.index)
    this.setData({
      sortIndex:index
    })
    // let currentId = event.currentTarget.id;
    // switch (currentId) {
    //   case 'categoryFilter':
    //     this.setData({
    //       'categoryFilter': !this.data.categoryFilter,
    //       'currentSortOrder': 'asc'
    //     });
    //     break;
    //   case 'priceSort':
    //     let tmpSortOrder = 'asc';
    //     if (this.data.currentSortOrder == 'asc') {
    //       tmpSortOrder = 'desc';
    //     }
    //     this.setData({
    //       'currentSortType': 'price',
    //       'currentSortOrder': tmpSortOrder,
    //       'categoryFilter': false
    //     });
    //     this.getGoodsList();
    //     break;
    //   default:
    //     //综合排序
    //     this.setData({
    //       'currentSortType': 'default',
    //       'currentSortOrder': 'desc',
    //       'categoryFilter': false
    //     });
    //     this.getGoodsList();
    // }
  },
  openTranslate() {
    this.setData({
      isRuleTrue: true
    })
  },
  // 初始化-获取商品列表
  getGoodsList(cid) {
    console.log("获取商品列表");
    requestApi.productList({cid},function(res) {
       console.log(res)
      if(res.code !== 200){
        return 
      }
      that.setData({goodsList:res.data})
    })
  },
  selectCategory(event) {
    let currentIndex = event.target.dataset.categoryIndex;
    let filterCategory = this.data.filterCategory;
    let currentCategory = null;
    for (let key in filterCategory) {
      if (key == currentIndex) {
        filterCategory[key].selected = true;
        currentCategory = filterCategory[key];
      } else {
        filterCategory[key].selected = false;
      }
    }
    this.setData({
      'filterCategory': filterCategory,
      'categoryFilter': false,
      categoryId: currentCategory.id,
      page: 1,
      goodsList: []
    });
    this.getGoodsList();
  },


  // 筛选-点击快捷筛选
  quickOrderTap(e) {
    let id = e.currentTarget.dataset.id
    for (var i = 0; i < this.data.quickList.length; i++) {
      if (this.data.quickList[i].id == id) {
        this.data.quickList[i].checked = true; //当前点击的位置为true即选中
      } else {
        this.data.quickList[i].checked = false; //其他的位置为false
      }
    }
    this.setData({
      quickList: this.data.quickList
    })
  },
  // 筛选-点击选择起租日
  rentStartTap(e) {
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.rentStartList //获取Json数组
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true; //当前点击的位置为true即选中
      } else {
        parameterList[i].checked = false; //其他的位置为false
      }
    }
    this.setData({
      rentStartList: parameterList
    })
  },

  // 筛选-点击选择价格
  priceOrderTap(e) {
    var this_checked = e.currentTarget.dataset.id
    var parameterList = this.data.priceOrderList //获取Json数组
    for (var i = 0; i < parameterList.length; i++) {
      if (parameterList[i].id == this_checked) {
        parameterList[i].checked = true; //当前点击的位置为true即选中
      } else {
        parameterList[i].checked = false; //其他的位置为false
      }
    }
    this.setData({
      priceOrderList: parameterList
    })
  },
  // 筛选-点击满租即送
  rentfullTap(e) {
    let id = e.currentTarget.dataset.id
    for (var i = 0; i < this.data.rentfullList.length; i++) {
      if (this.data.rentfullList[i].id == id) {
        this.data.rentfullList[i].checked = true; //当前点击的位置为true即选中
      } else {
        this.data.rentfullList[i].checked = false; //其他的位置为false
      }
    }
    this.setData({
      rentfullList: this.data.rentfullList
    })
  },
  // 筛选-发货地
  addressTap(e) {
    let id = e.currentTarget.dataset.id
    for (var i = 0; i < this.data.addressList.length; i++) {
      if (this.data.addressList[i].id == id) {
        this.data.addressList[i].checked = true; //当前点击的位置为true即选中
      } else {
        this.data.addressList[i].checked = false; //其他的位置为false
      }
    }
    this.setData({
      addressList: this.data.addressList
    })
  },
  // 完成筛选
  carryOut() {
    this.setData({
      isRuleTrue: false
    })
  },
});