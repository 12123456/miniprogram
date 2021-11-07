Page({
  data: {
    showDetails:true
  },
  onLoad() { },
  daysFun(event) {
    this.setData({
      showDetails:!event.detail.value
    })
  }
});
