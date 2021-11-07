const BASE_URL = 'https://restapi.qmzuji.com'; // 请求的域名
const app = getApp();
console.log(app)
module.exports = (params = {
    url: '',
    method: '',
    data: {}
}) => {
    return new Promise((resolve, reject) => {
        my.request({
            url: BASE_URL + params.url,
            method: params.method,
            data: params.data,
            // 这里是接收数据格式，看自己需求选择，一般JSON
            dataType: 'json',
            headers: {
                'Authorization': '',
                'content-type': 'application/json'
            }, //设置头部
            success: res => {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(res.data.msg);
                }
            },
            fail: res => {
                reject('网络延迟，请稍后重试');
            }
        })
    })
}