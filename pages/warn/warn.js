// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btncolor:'#f2f2f2',
    bikemessage:{
      bikenumber:'',
      message:''
    },
    warnvalue:[],
    warntype: [{value: "私锁私用", flag: false },
               {value: '车牌缺损', flag: false },
               { value: '轮胎坏了', flag: false },
               { value: '车锁坏了', flag: false },
               { value: '违规乱停', flag: false },
               { value: '密码不对', flag: false },
               { value: '刹车坏了', flag: false },
               { value: '其他故障', flag: false }],
    picurls: []
    
  },
  warntypes:function(e){
    let _warnvalue = e.detail.value ;
    if (_warnvalue.length==0){
      this.setData({
        warnvalue: [],
        btncolor: '#f2f2f2'
      })
    }else{
      this.setData({
        warnvalue: _warnvalue,
        btncolor: '#b9dd08'
      })
    }
   
  },
 addpic:function(){
    wx.chooseImage({
      count:4,
      success: (res)=> {
        let _picurls = res.tempFilePaths;
        let _nowpic = this.data.picurls;
    
        for (let prop of _picurls){
          _nowpic.push(prop)
        };
        this.setData({
          picurls: _nowpic
        })
        console.log(this.data.picurls);
      },
    })
  },
 closepic: function (e) {
   let _index = e.target.dataset.index
   let _nowpic = this.data.picurls;
   _nowpic.splice(_index,1);
   this.setData({
     picurls: _nowpic
   })
  },
 putbikenumber:function(e){
   let _message = this.data.bikemessage.message;
    console.log(e.detail.value)
    this.setData({
      bikemessage: {
        bikenumber: e.detail.value,
        message: _message
      }
    })
 },
 putmessage: function (e) {
   let _bikenumber = this.data.bikemessage.bikenumber;
   console.log(e.detail.value)
   this.setData({
     bikemessage: {
       bikenumber: _bikenumber,
       message: e.detail.value
     }
   })
 },
 submit:function(){ 
   if (this.data.warnvalue.length > 0 && this.data.picurls.length>0){
      wx.request({
        url: 'https://www.easy-mock.com/mock/5aacd5bcd3f6bd35dfb4bf2d/success',
       
        success:(res)=>{
          wx.showToast({
            title: '提交成功',
            icon:"success"
          })
            console.log(res)
        }
      })
   }else{
     wx.showModal({
       title: '信息不完整',
       content: '请勾选损坏类型或者添加照片',
       confirmText:'继续填写',
       cancelText:'取消填写',
      //  showCancel:false,
       
       success:(res)=>{
         console.log(res)
         if (res.cancel){
           console.log(21323)
           wx.navigateBack({
             delta: 2
           })
         }
         
       }
     })
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