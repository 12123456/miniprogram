const requestApi = require('../../utils/myRequest.js')
const app = getApp();

Page({
  data: {
    middleList: [
      // {
      //   icon: "/image/mine/orderAll.png",
      //   title: "全部订单",
      // },
      {
        icon: "/image/mine/waitCollection.png",
        title: "待支付",
        status: 1
      },
      // {
      //   icon: "/image/mine/waitSend.png",
      //   title: "待发货",
      // },
      {
        icon: "/image/mine/waitReceive.png",
        title: "待收货",
        status: 3
      },
      {
        icon: "/image/mine/using.png",
        title: "租用中",
        status: 4
      },
      // {
      //   icon: "/image/mine/successed.png",
      //   title: "待结算",
      // },
      {
        icon: "/image/mine/overdue.png",
        title: "已逾期",
        status: 6
      },
      {
        icon: "/image/mine/returnGoods.png",
        title: "待评价",
        status: 7
      }
    ],
    infoList: [{
        icon: "/image/mine/electronicContract.png",
        title: "实名认证"
      }, {
        icon: "/image/mine/idInfor.png",
        title: "身份信息"
      },
      {
        icon: "/image/mine/coupon-center.png",
        title: "领券中心"
      },
      // {
      //   icon: "/image/mine/coupon.png",
      //   title: "我要续租"
      // }, {
      //   icon: "/image/mine/reneval.png",
      //   title: "我要买断"
      // }, {
      //   icon: "/image/mine/buyOut.png",
      //   title: "商家入驻"
      // }, 
      {
        icon: "/image/mine/helpCenter.png",
        title: "帮助中心"
      }, {
        icon: "/image/mine/feedBack.png",
        title: "意见反馈"
      }, {
        icon: "/image/mine/customerService.png",
        title: "在线客服"
      }
    ],
    userName: "未登录",
    status: '运输中',
    photoUrl: '/image/avatar.png',
    modalServiceOpened: false, // 显示客服
    authCode: '', // 授权码
    goodsList: [{
        id: '0',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9',
        priceInt: 10,
        pricefloat: 9
      },
      {
        id: '1',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9',
        priceInt: 10,
        pricefloat: 9
      },
      {
        id: '2',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9',
        priceInt: 10,
        pricefloat: 9
      },
      {
        id: '3',
        image_url: '../../image/test04.png',
        description: 'Apple iPhone 11 64G 移动联通电信4G全网通手机',
        extend: '全新',
        rentStart: '365天起租',
        price: '10.9',
        priceInt: 10,
        pricefloat: 9
      }
    ]
  },
  onLoad() {
    this.login();
  },
  onGetAuthorize() {
    my.getPhoneNumber({
      success: (res) => {
        let encryptedData = res.response;

        console.log(encryptedData);
        // my.request({
        //   url: '你的后端服务端',
        //   data: encryptedData,
        // });
      },
      fail: (res) => {
        console.log(res);
        console.log('getPhoneNumber_fail');
      },
    });
  },

  onTabItemTap(item) {
    my.getAuthCode({
      scopes: ['auth_user'],
      success: (res) => {
        console.log(res);
        my.getAuthUserInfo({
          success: (userInfo) => {
            console.log(userInfo)
            // this.setData({
            //   userName: userInfo.nickName,
            //   photoUrl: userInfo.avatar
            // });
          }
        });
      },
    });
    console.log(item, '123')
  },
  toOrder(e) {
    let status = e.target.dataset.status;
    my.navigateTo({
      url: '/pages/orderList/index?status=' + status
    });
  },
  selectItem(e) {
    let index = e.currentTarget.dataset.index
    switch (index) {
      case 0:
        // 实名
        my.navigateTo({
          url: '/pages/realNameRegister/index'
        });
        break;
      case 1:
        // 身份证信息
        my.navigateTo({
          url: '/pages/idInfor/index'
        });
        break;
      case 2:
        //领券中心
        // my.navigateTo({
        //   url: '/pages/bill/bill'
        // });
        my.navigateTo({
          url: '/pages/couponList/index'
        });
        break;
        // case 3:
        //   // 我要续租
        //   my.navigateTo({
        //     url: '/pages/orderList/index?status=4'
        //   });
        //   break;
        // case 4:
        //   // 我要买断
        //   my.navigateTo({
        //     url: '/pages/buyOut/index'
        //   });
        //   break;
        // case 5:
        //   // 商家入驻
        //   my.showToast({
        //     type: 'exception',
        //     content: '暂未开放',
        //     duration: 3000,
        //   });
        //   break;
      case 3:
        // 帮助中心
        my.navigateTo({
          url: '/pages/helpme/index'
        });
        break;
      case 4:
        // 意见反馈
        my.navigateTo({
          url: '/pages/feedback/index'
        });
        break;
      case 5:
        // 在线客服
        this.setData({
          modalServiceOpened: !this.data.modalServiceOpened
        });
        break;
    }
  },
  toAddress() {
    my.navigateTo({
      url: '/pages/addressList/index'
    });
  },
  toSettled() {
    my.navigateTo({
      url: '/pages/settled/settled'
    });
  },
  login() {
    // my.getAuthCode({
    //   scopes: ['auth_user', 'auth_base', 'auth_zhima'],
    //   success: (res) => {
    //     my.getAuthUserInfo({
    //       success: (userInfo) => {
    //         this.setData({
    //           userName: userInfo.nickName,
    //           photoUrl: userInfo.avatar
    //         });
    //       }
    //     });
    //   },
    // });
    /* my.getAuthCode({
      scopes: ['auth_user'],
      success: (res) => {
        requestApi.login(res.authCode, apiRes => {
          let code = apiRes.data.code;
          if(code === 10101){ //用户未注册
            my.navigateTo({
              url: '/pages/register/index'
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