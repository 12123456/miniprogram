const requestApi = require('../../utils/myRequest.js')
const app = getApp();

Page({
  data: {
    userName: "未登录",
    status: '运输中',
    photoUrl: '../../image/touxiang.png',
    modalServiceOpened: false, // 显示客服
    authCode: '', // 授权码
    goodsList:[
      {
        id:'0',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9'
      },
      {
        id:'1',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9'
      },
      {
        id:'2',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9'
      },
      {
        id:'3',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9'
      }
    ]
  },
  onLoad() {
    this.login();
  },
  toOrder(e) {
    let status = e.target.dataset.status;
    my.navigateTo({
      url: '/pages/orderList/orderList?status='+status
    });
  },
  toAddress() {
    my.navigateTo({
      url: '/pages/addressList/addressList'
    });
  },
  toCoupon() {
    my.navigateTo({
      url: '/pages/couponList/couponList'
    });
  },
  toRealNameAuthen() {
    my.navigateTo({
      url: '/pages/realNameRegister/realNameRegister'
    });
  },
  toIDInfor() {
    my.navigateTo({
      url: '/pages/idInfor/idInfor'
    });
  },
  showService() {
    this.setData({
      modalServiceOpened: !this.data.modalServiceOpened
    });
  },
  toHelp() {
    my.navigateTo({
      url: '/pages/helpme/helpme'
    });
  },
  toFeedback() {
    my.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },
  toBuyOut() {
    my.navigateTo({
      url: '/pages/buyOut/buyOut'
    });
  },
  toSettled() {
    my.navigateTo({
      url: '/pages/settled/settled'
    });
  },
  toBill() {
    my.navigateTo({
      url: '/pages/bill/bill'
    });
  },
  login() {
    let that = this;
    my.getAuthCode({
    scopes: ['auth_user','auth_base','auth_zhima'],
    success: (res) => {
      my.getAuthUserInfo({
        success: (userInfo) => {
          this.setData({
            userName: userInfo.nickName,
            photoUrl: userInfo.avatar
          });
        }
      });
    },
  });
    /* my.getAuthCode({
      scopes: ['auth_user'],
      success: (res) => {
        requestApi.login(res.authCode, apiRes => {
          let code = apiRes.data.code;
          if(code === 10101){ //用户未注册
            my.navigateTo({
              url: '/pages/register/register'
            });
            return;
          }
          let token = apiRes.data.data.token;
          if(code !==0 || token == null){ // token获取失败
            my.showToast({
              content: "系统繁忙，请稍后再试"
            });
            return;
          }
          app.globalData.token = token;
          my.getOpenUserInfo({success: (res) => {
            let userInfo = JSON.parse(res.response);
            console.log(userInfo.response.avatar);
              that.setData({
                userName: userInfo.response.nickName,
                photoUrl: userInfo.response.avatar
              });
            }
          });
        });
      }
    }); */
  }
});
