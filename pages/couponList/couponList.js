Page({
  data: {
    couponList: [
      {
        money: '450'
      },{
        money: '450'
      },{
        money: '450'
      },
    ],
    activeIndex: 1, // 当前显示tab
  },
  onLoad() {

  },
  tabClick(e) {
    let index = e.currentTarget.dataset.id
    this.setData({
      activeIndex: index
    });
  }
});
