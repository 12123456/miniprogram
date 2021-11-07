import {
  loginCodeFun
} from './api/index'
App({
  globalData: {
    token: '',
    alipayId: '',
    userInfo: {},
  },
  data: {
    isLogin: false
  },
  onLaunch(options) {
    console.log(options)
    this.onOpenAPIHandler()
    // my.getAuthCode({
    //   scopes: ['auth_user'],
    //   success: (res) => {
    //     console.log(res);
    //     my.getAuthUserInfo({
    //       success: (userInfo) => {
    //         console.log(userInfo)
    //         // this.setData({
    //         //   userName: userInfo.nickName,
    //         //   photoUrl: userInfo.avatar
    //         // });
    //       }
    //     });
    //   },
    // });
    // let that = this
    // my.getAuthCode({
    //   scopes: ['auth_base'],
    //   success: (res) => {
    //     console.log(res)
    //   },
    //   complete: (res) => {
    //     // my.request({
    //     //       url: 'https://restapi.qmzuji.com/users/login/'+res.authCode,
    //     //       method: 'POST',
    //     //       data: {
    //     //         authCode:res.authCode
    //     //       },
    //     //       dataType: 'JSON',
    //     //       success: function(res) {
    //     //         that.globalData.token = res.data.data.token
    //     //         console.log('token', that.globalData)
    //     //       },
    //     //       fail: function(res) {
    //     //         console.log('erro',res);
    //     //       }
    //     //     });
    //   }
    // });
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  onLoad() {

  },
  /**
   *  调用OPENAPI
   *
   */
  async onOpenAPIHandler() {
    let that = this
    console.log(this,'this');
    if (!this.data.isLogin) {
      try {
        const user = await this.getLoginUserHandler();
        console.log(user, 'user')
        this.data = {
          userInfo: user,
          isLogin: true,
        };
      } catch (error) {
        console.error(error);
        // that.toast(error.message);
        this.data ={
          userInfo: {
            nickname: '未登录',
            avatar: '',
          },
          isLogin: false,
        };
      }
    } else {
      this.setData({
        userInfo: {
          nickname: '未登录',
          avatar: '',
        },
        isLogin: false,
        isAvatar: false
      });
    }
  },
  getLoginUserHandler() {
    return new Promise(async (resolve, reject) => {
      try {
        const auth = await this.getAuthCode('auth_user');
        const user = await this.getLoginUserInfo(auth.authCode);
        resolve(user);
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
  },
  getLoginUserInfo(authCode) {
    return new Promise((resolve, reject) => {
      loginCodeFun({
        authCode: authCode
      }).then(res => {
        if (!res.data.success) {
          reject({
            message: '登录失败',
            res
          });
        }
        resolve(res.data);
      }).catch((err) => {
        reject({
          message: '用户登录失败',
          err
        });
      })
    });
  },

  getAuthCode(scope) {
    return new Promise((resolve, reject) => {
      my.getAuthCode({
        scopes: scope,
        success: (auth) => {
          resolve(auth);
        },
        fail: (error) => {
          reject({
            message: '用户取消授权',
            error
          });
        }
      });
    });
  },
});