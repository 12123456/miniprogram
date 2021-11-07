Page({
  data: {
    step1:true,
    step2: true,
    step3: true,
    step4: false,
    orderCode: '12345678998'
  },
  onLoad() {

  },
  doCopy() {
    my.setClipboard({
      text: this.data.orderCode,
      success: () => {
        my.showToast({
          type: 'none',
          content: '复制成功',
          duration: 1500
        });
      },
      fail: () => {
        my.showToast({
          type: 'none',
          content: '复制失败',
          duration: 1500
        });
      }
    });
  }
});
