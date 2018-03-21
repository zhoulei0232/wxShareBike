// pages/recharge/recharge.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    wallet:''
  },
  inputcharge:function(e){
    this.setData({
      wallet: e.detail.value
    })
  },
  btncharge:function(){
    let _wallet = this.data.wallet;
    if(this.checkNum(_wallet)){
      wx.getStorage({
        key: 'usewallet',
        success: (res)=> {
          let nowWallet = res.data.wallet ;
          wx.setStorage({
            key: 'usewallet',
            data: {
              wallet: parseInt(nowWallet) + parseInt(_wallet)
            },
          })
          wx.showToast({
            title: '充值成功',
            duration:1000
          })
        },
        fail:()=>{
          wx.setStorage({
            key: 'usewallet',
            data: {
              wallet: _wallet
            },
          })
        }
      })
  
      wx.redirectTo({
        url: '../wallet/wallet',
      })
    }else{
      wx.showModal({
        showCancel:false,
        title: '请输入正确的金额',
        content: '金额必须为数字',
        success:(res)=>{
          if(res.confirm){
            this.setData({
              wallet: ''
            })
          }
        }
      })
    }
   
  },
  checkNum:function(value){
    var r=value.match(/^[0-9]*$/);
    if(r == null){
      return false;
    }else{
      return true;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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