// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wallet:0,
    mycard:[{
      title: '余额说明',
      content: '省略。。。。。。',
    },{
      title: '我的用车卷',
      content: '暂无',
    }, {
        title: '我的押金',
        content: '可退押金99元',
    },{
      title: '关于ufo',
      content: '暂无',
    }]
  },
  recharge:function(){
    wx.navigateTo({
      url: '../recharge/recharge',
    })
  },
  explain:function(e){
    let _index = e.currentTarget.dataset.index;
    console.log(_index)
    let msg = this.data.mycard[_index];
    wx.showModal({
      showCancel: false,
      title: msg.title,
      content: msg.content,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'usewallet',
      success: (res)=> {
        console.log(res.data.wallet)
        this.setData({
          wallet: res.data.wallet
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})