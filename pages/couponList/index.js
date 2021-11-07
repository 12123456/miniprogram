Page({
  data: {
    couponList: [{
      money: '450'
    }, {
      money: '450'
    }, {
      money: '450'
    }],
    activeIndex: 1, // 优惠券类型
    tabIndex: 0
  },
  onLoad() {

  },
  // 切换状态tab
  changeTabs(e) {
    let index = e.currentTarget.dataset.status
    this.setData({
      tabIndex: index,
      couponList: [{
        money: '450'
      }, {
        money: '450'
      }, {
        money: '450'
      }]
    })
  },
  // 切换优惠券类型
  tabClick(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      tabIndex: 0,
      couponList: [{
        money: '450'
      }, {
        money: '450'
      }, {
        money: '450'
      }]
    });
  }
});