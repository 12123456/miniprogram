Page({
  data: {
    addressList:[
      {
        userName: '张三'
      },
      {
        userName: '张三'
      },
      {
        userName: '张三'
      },
      {
        userName: '张三'
      },
      {
        userName: '张三'
      }
    ]
  },
  onLoad() {

  },
  toOption() {
    my.navigateTo({
      url: '/pages/addressOption/addressOption'
    });
  }
});
