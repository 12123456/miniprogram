const citysJSON = require('../../city/city_json/city_json.js');
Page({
  data: {
    closeShow: true,
    userName: '', // 收货人
    userTel: '', // 电话号码
    address: '', // 所在地区
    addressDetail: '', // 地区详细
    switch: false, // 默认?
    showBottomPop: false, // pop显示
    activeTab: 0, // 默认tabs页
    haveDelete: false, // 有没有删除键
    tabs: [
      {
        title: '请选择'
      },{
        title: '请选择'
      },{
        title: '请选择'
      },
    ]
  },
  onLoad() {

  },
  closableClick() {
    this.setData({
      closeShow: false
    });
  },
  userNameBlur(e) {
    this.data.userName = e.detail.value
  },
  userTelBlur(e) {
    this.data.userTel = e.detail.value
  },
  addressDetailBlur(e) {
    this.data.addressDetail = e.detail.value
  },
  switchChange(e) {
    this.data.switch = e.detail.value
  },
  saveClick() {
    console.log(this.data.userName)
    console.log(this.data.userTel)
    console.log(this.data.address)
    console.log(this.data.addressDetail)
    console.log(this.data.switch)
  },
  onPickerTap() {
    my.multiLevelSelect({
      title: '选择地址',//级联选择标题
      list: citysJSON.citys,//引入的js
      success: (res) => {
        console.log(res)
        let provinces=res.result[0].name
        let city=res.result[1].name
        let area=res.result[2].name
        this.setData({
          address: provinces+city+area
        });
      },
    });
  }
});
