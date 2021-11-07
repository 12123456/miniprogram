Page({
  data: {
    value: '',
    historyList: ['游戏机','iPhone X','华为P30','3020','E7450','T430','L430','T440p','W540','冰火科技'],
    hotList: ['华为P30','iPhone X','Mac','华为P30','电竞',
    '笔记本电脑','iPhone 11','台式机电脑','佳能相机','iPhone 11Pro','mate30','大疆无人机机','苹果']
  },
  onLoad() {

  },
  handleInput(val) {
    this.setData({
      value: val
    });
  },
  handleClear() {
    this.setData({
      value: ''
    });
  },
  handleCancel() {
    my.navigateBack({
      
    });
  },
  handleSubmit(val) {
    let that = this
    this.setData({
      historyList: this.data.historyList.push(val)
    });
    my.setStorage({
      key: 'historySearch', // 缓存数据的key
      data: that.data.historyList, // 要缓存的数据
      success: (res) => {
        console.log('缓存成功',res)
      },
    });
  },
  handleBlur() {
    
  },
});
