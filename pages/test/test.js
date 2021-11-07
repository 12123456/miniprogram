Page({
  data: {
    msg: "init",
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
    ]
  },
  onLoad() {
      let that = this;
      my.request({
        url: 'https://restapi.qmzuji.com/hello',
        method: 'GET',
        data: {
            from: '支付宝',
            production: 'AlipayJSAPI',
        },
        headers:{
            'content-type':'text/plain'  //默认值
        },
        dataType: 'text',
        success: function(res) {
            that.setData({ msg: res.data });
        },
        fail: function(res) {
            my.alert({content: 'fail'});
        },
        complete: function(res) {
            my.hideLoading();
        }
    });
  },
});
