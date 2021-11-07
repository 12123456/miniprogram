Page({
  data: {
    items: [
      { name: 'erro1', value: '功能异常：功能故障或不可用' },
      { name: 'erro2', value: '订单异常：订单错误等相关订单问题', },
      { name: 'erro3', value: '产品建议：操作不便，我有建议' },
      { name: 'erro4', value: '其他问题' }
    ],
    showPic1: false,
    showPic2: false,
    showPic3: false,
    picSrc1: '',
    picSrc2: '',
    picSrc3: '',
    picNum: 0,
    showModal: false,
  },
  onLoad() {
    
  },
  openCamera(e) {
    my.chooseImage({
				sourceType: ['camera', 'album'],
				count: 1,
				success: (res) => {
					console.log(e)
          switch(e.target.dataset.idx) {
            case '1':
              this.setData({
                showPic1: true,
                picSrc1: res.apFilePaths[0],
                picNum: this.data.picNum+1
              });
              break;
            case '2':
              this.setData({
                showPic2: true,
                picSrc2: res.apFilePaths[0],
                picNum: this.data.picNum+1
              });
              break;
            case '3':
              this.setData({
                showPic3: true,
                picSrc3: res.apFilePaths[0],
                picNum: this.data.picNum+1
              });
              break;
          }
				},
				fail: () => {
					my.showToast({
						content: 'fail', // 文字内容
					});
				}
			})
  },
  submit() {
    this.setData({
      showModal: true
    });
  },
  closeModal() {
    this.setData({
      showModal: false
    });
  },
  goShopping() {
    my.navigateBack({
      
    });
  }
});
