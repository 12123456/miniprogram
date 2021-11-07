Page({
  data: {
    tabs: [{
      title: '全部',
      list: []
    },
    {
      title: '待付款',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }, {
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }, {
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }, {
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }, {
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }, {
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '待发货',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '待收货',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '租用中',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '待结算',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '已逾期',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    },
    {
      title: '已完成',
      list: [{
        company: '广州布拉布拉布公司',
        companyLogo: '../../image/companyLogo.png',
        autor: '李四',
        goodsImg: '../../image/test02.png',
        goodsTitle: '联想各种狠电脑无敌于天下I10处理器干就完啦文字文字文字文字文字',
        goodsDec: 'i5/4G/250ssd/HDCGFB',
        price: '263.00',
        allPrice: '263.00',
        num: 1
      }]
    }
    ],
    activeTab: 0,
    status: 0, // 上个页面的传值
  },
  onLoad(options) {
    this.data.status = Number(options.status)
  },
  onReady() {
    this.setData({
      activeTab: this.data.status
    });
    my.setNavigationBar({
      reset: true,
      title: this.data.tabs[this.data.status].title + '订单' //页面标题为路由参数
    })
  },
  handleTabClick({
    index
  }) {
    this.setData({
      activeTab: index,
    });
    my.setNavigationBar({
      reset: true,
      title: this.data.tabs[index].title + '订单' //页面标题为路由参数
    })
  },
  handleTabChange({
    index
  }) {
    this.setData({
      activeTab: index,
    });
  },
  toOrderDetail() {
    my.navigateTo({
      url: '/pages/orderDetail/index'
    });
  },
  toSteps() {
    my.navigateTo({
      url: '/pages/logistics/index'
    });
  },
  // 账单分期
  toRoderStaging() {
    my.navigateTo({
      url: '/pages/roderStaging/index'
    });
  },
  // 续租
  xuzuFun() {
    my.navigateTo({
      url: "/pages/leaseRenewal/index"
    })
  },
  // 归还
  toReturnItem() {
    my.navigateTo({
      url: "/pages/returnItems/index"
    })
  },
  // 买断
  buyOutFun() {
    my.navigateTo({
      url: "/pages/buyOut/index"
    })
  },
  toComment() {
    my.navigateTo({
      url: '/pages/comment/comment'
    });
  }
});