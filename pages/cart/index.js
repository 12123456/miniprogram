Page({
  data: {
    stepperNum: 1, // 后期得改 加入到数组里
    allMoney: "0.00", // 总金额
    selectNum: 0, // 购物车总选中数量
    selectAllCheck: false, // 全选
    goodsList: [
      {
        company: "盛氏集团有限公司",
        title: "苹果（ios1）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios2）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios3）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios4）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios5）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios6）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      },{
        company: "盛氏集团有限公司",
        title: "苹果（ios7）布拉布拉布拉w文字文字文字...",
        dec: "i5系列各种狠有了它代码没有一点bug5杀超神不是梦各种牛逼各种狠...",
        select: false
      }
    ]
  },
  onLoad() {
    var that = this
  },
  stepperSubtract() { // 商品数量减
    if(this.data.stepperNum>1){
      this.setData({
        stepperNum:this.data.stepperNum-1
      })
    }
  },
  stepperAdd() { // 商品数量加
    if(this.data.stepperNum<100){
      this.setData({
        stepperNum:this.data.stepperNum+1
      })
    }
  },
  selectGoods(e) { // 选择购物车商品
    if(this.data.selectAllCheck === true) {
      this.setData({
        selectAllCheck: false
      })
    }
    let index = e.target.dataset.index
    let val = this.data.goodsList[index].select
    this.setData({
      [`goodsList[${index}].select`]:!val
    })
  },
  selectAll() { // 全选 
    let val = this.data.goodsList
    if(this.data.selectAllCheck === false) {
      for(var i=0;i<val.length;i++) {
        this.setData({
          [`goodsList[${i}].select`]:true
        })
      }
    } else {
      for(var i=0;i<val.length;i++) {
        this.setData({
          [`goodsList[${i}].select`]:false
        })
      }
    }
    this.setData({
      selectAllCheck: !this.data.selectAllCheck
    })
  }
});
