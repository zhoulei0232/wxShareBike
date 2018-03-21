// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bikenumber:1234,
      hours:0,
      minute:0,
      second:0,
      flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    // this.setData({
    //   bikenumber: options.number
    // })
    let h=0;
    let m=0;
    let s=0;
    this.timer=setInterval(()=>{
      
      this.setData({
        second:s++
      })
      if(s == 60){
        s=0;
        m++; 
        setTimeout(()=>{
          this.setData({
            minute: m,
          })
        },1000)
        
      }else if(m == 60){
        m=0;
        h++;
        setTimeout(() => {
          this.setData({
            hours: h,
          })
        }, 1000)
      }
    },1000)
    
  },
  runover:function(){
      clearInterval(this.timer);
      this.timer='';
      this.setData({
        flag:true
      })
  },
  tomap:function(){
      if(this.timer == ''){
        wx.redirectTo({
          url: '../index/index'
        })
      }else{
        wx.navigateTo({
          url: '../index/index?timer='+this.timer,
        })
      }
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