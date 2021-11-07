Page({
  data: {
    readme: 'circle', // 是否已读图标
    checkReadme: false, // 是否已读
  },
  onLoad() {

  },
  readmeClick() {
    if (!this.data.checkReadme) {
      this.setData({
        readme: 'check_'
      });
    } else {
      this.setData({
        readme: 'circle'
      });
    }
    this.data.checkReadme = !this.data.checkReadme
  },
  toAfterSale() {
    my.navigateTo({
      url: '/pages/afterSale/index'
    });
  },
  toPaySuccess(){
    my.navigateTo({
      url:"/pages/orderedSuccessfully/index"
    })
  }
});