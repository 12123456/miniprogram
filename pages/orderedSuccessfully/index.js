Page({
  data: {},
  onLoad() {},
  toIndex() {
    my.navigateTo({
      url: "/pages/index/index"
    })
  },
  toOrder() {
    my.navigateTo({
      url: "/pages/orderList/index?status=2"
    })
  }
});