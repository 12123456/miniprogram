// const apiHost = "https://clientapi.qmzuji.com";
const apiHost = "http://localhost:8845";
const app = getApp();

//url添加最后的相对路径即可
function getRequest(url,data,successFunc) {
  my.request({
    url: apiHost + url,
    method: 'GET',
    headers: {
      'Authorization':app.globalData.token
    }, 
    data: data,
    success: (res) => {
      console.log('token', app.globalData.token);
      // console.log('util data', res);
      successFunc(res.data);
      return res;
    },
    fail: (err) => {
      console.log('util error', err);
      console.log('token', app.globalData.token);
      return res
    },
  });
}

function postRequest(url, data, successFunc) {
    my.request({
      url: apiHost + url,
      method: 'POST',
      header: {
        'Authorization':app.globalData.token
      },
      data: data,
      dataType: 'json',
      success: function(res) {
        successFunc(res.data);
        return res;
      },
      fail: function(res) {
        console.log('util erro',res);
      }
    });
}

module.exports.getRequest = getRequest;
module.exports.postRequest = postRequest;