Page({
  data: {
    goodsList: [
      {
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      },{
        img:'/image/test01.png',
        title: 'ThinkPaid的测试文字测试文字..',
        price: '￥6.67/天起',
        condition: '一月起租'
      }
    ],
    activeIndex: 1, // 用于切换样式
  },
  onLoad() {

  },
  tabClick(e) {
    let index = e.currentTarget.dataset.id
    this.setData({
      activeIndex: index
    });
  },
  toSearch() {
    my.navigateTo({
      url: '/pages/search/search'
    });
  }
});
