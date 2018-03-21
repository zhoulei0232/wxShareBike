// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginbtn:{
      btncolor:"primary",
      btntext:"登录"
    },
    user:{
      username:"",
      userurl:""
    }
  },
  loginbtn:function(){
    if (this.data.loginbtn.btntext =='登录'){
      wx.getUserInfo({
        success: (res) => {
          wx.setStorage({
            key: 'useInfo',
            data: {
              username: res.userInfo.nickName,
              userurl: res.userInfo.avatarUrl
            },
          }),
            this.setData({
              loginbtn: {
                btncolor: "warn",
                btntext: "退出登录"
              },
              user: {
                username: res.userInfo.nickName,
                userurl: res.userInfo.avatarUrl
              }
            })
        }
      })
     
    }else{
     wx.removeStorage({
       key: 'useInfo',
       success:(res) =>{
         this.setData({
           loginbtn: {
             btncolor: "primary",
             btntext: "登录"
           },
           user: {
             username: "",
             userurl: ""
           }
         })
         
       },
     })
     
    }
   
  },
  wallet:function(){
    wx.navigateTo({
      url: '../wallet/wallet',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'useInfo',
      success: (res)=> {
        console.log(res);
        this.setData({
          user: {
            username: res.data.username,
            userurl: res.data.userurl
          },
          loginbtn: {
            btncolor: "warn",
            btntext: "退出登录"
          }

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