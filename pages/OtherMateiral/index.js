Page({
  data: {
    windowHeight:0
  },
  onLoad() {
    my.setNavigationBar({
      reset: true,
      title: '身份信息',
    })
    my.getSystemInfo({
       success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
});
