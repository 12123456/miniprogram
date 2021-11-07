const requestApi = require('../../utils/myRequest.js')
const app = getApp();

Page({
  data: {
    mobile: "",
    smsCode: ""
  },
  onLoad() {
    
  },
  inputOnblur(){
    console.log("mobile: ", this.data.mobile);
    console.log("smsCode: ", this.data.smsCode);
  },
  setMobile(e){
    this.setData({
      mobile: e.detail.value,
    });
  },
  setSmsCode(e){
    this.setData({
      smsCode: e.detail.value,
    });
  },
  getSmsCode() {
    requestApi.getSmsCode("register", this.data.mobile, res=>{
      console.log("send sms");
    })
  },
  register() {
    my.getAuthCode({
      scopes: ['auth_user'],
      success: (e) => {
        requestApi.register(this.data.mobile, this.data.smsCode, e.authCode, res=>{
          if(res.data.code !== 0){
            my.showToast({
              content: "系统繁忙，请稍后再试"
            });
          }
          app.globalData.token = res.data.data.token;
          my.navigateTo({
            url: '/pages/me/me'
          });
        })
      }
    });
  }
});
