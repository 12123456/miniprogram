Page({
  data: {
    showModal: false,
  },
  onLoad() {

  },
  save() {
    this.showModal()

  },
  showModal() {
    this.setData({
      showModal: !this.data.showModal
    });
  }
});
