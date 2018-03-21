// pages/index/index.js
var amapFile = require('../../js/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude:0,
    distance: '',
    cost: '',
    polyline: []
  
  },
  
  bindcontroltap: function(e){
    console.log(e);
    switch (e.controlId) {
      case 1: this.moveToCenter();
              break;
      case 2: if (this.timer){    
        wx.navigateBack({
          delta: 1
        })
      }else{
        wx.scanCode({
          success: () => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5aacd5bcd3f6bd35dfb4bf2d/password',
              success: (res) => {
                console.log(res);
                wx.hideLoading();
                wx.redirectTo({
                  url: '../logs/logs?password=' + res.data.data.password + '&number=' + res.data.data.number,
                  success: () => {
                    wx.showToast({
                      title: '获取密码成功',
                      duration: 1000
                    })
                  }
                })
              }
            })

          },
          fail: () => {
            wx.showToast({
              title: '扫码失败',
              duration:1000
            })
          }
        }) 
      }
        break;
      case 3: wx.navigateTo({
        url: '../warn/warn',
      })
        break;
      case 4: wx.navigateTo({
        url: '../login/login',
      })
        break;
    }
  },
  bindmarkertap:function(e){
    
    let num = e.markerId - 1;
    console.log(num);
    let destlong = this.data.markers[e.markerId - 1].longitude;
    let destlat = this.data.markers[e.markerId - 1].latitude;
    let originlong = this.data.longitude;
    let originlat = this.data.latitude;
    let dest = destlong.toFixed(6) + ',' + destlat.toFixed(6);
    let origin = originlong + ',' + originlat;
    console.log(dest);
    console.log(origin);
    var myAmapFun = new amapFile.AMapWX({ key: '3b28498e55b6db9d0db25bd86bf4a1f1' });
    myAmapFun.getWalkingRoute({
      origin: origin,
      destination: dest,
      success: (data)=> {
        console.log(data)
        var points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        this.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }],
        
        });
        if (data.paths[0] && data.paths[0].distance) {
          
          this.setData({
            // markers[4].title: data.paths[0].distance + '米'
            distance: data.paths[0].distance + '米'
          });
        }
        if (data.paths[0] && data.paths[0].duration) {
          this.setData({
            cost: parseInt(data.paths[0].duration / 60) + '分钟'
          });
        }

      },
      fail: function (info) {

      }
    })
  },
  randomNum:function(){
    return (50-Math.round(Math.random()*100))/5000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    this.timer=options.timer;
  wx.getLocation({
    success: (res)=> {
      console.log(this.randomNum())
      this.setData({
        longitude: res.longitude,
        latitude: res.latitude,
        markers: [{
          id: "1",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
        }, {
          id: "2",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
          }, {
            id: "3",
            latitude: res.latitude + this.randomNum(),
            longitude: res.longitude + this.randomNum(),
            width: 40,
            height: 40,
            iconPath: "/images/zz006.png",
            title: "ufo"
        }, {
          id: "4",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
          }, {
            id: "5",
            latitude: res.latitude + this.randomNum(),
            longitude: res.longitude + this.randomNum(),
            width: 40,
            height: 40,
            iconPath: "/images/zz006.png",
            title: "ufo"
        }, {
          id: "6",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
          }, {
            id: "7",
            latitude: res.latitude + this.randomNum(),
            longitude: res.longitude + this.randomNum(),
            width: 40,
            height: 40,
            iconPath: "/images/zz006.png",
            title: "ufo"
        }, {
          id: "8",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
          }, {
            id: "9",
            latitude: res.latitude + this.randomNum(),
            longitude: res.longitude + this.randomNum(),
            width: 40,
            height: 40,
            iconPath: "/images/zz006.png",
            title: "ufo"
        }, {
          id: "10",
          latitude: res.latitude + this.randomNum(),
          longitude: res.longitude + this.randomNum(),
          width: 40,
          height: 40,
          iconPath: "/images/zz006.png",
          title: "ufo"
        }],
      })
      console.log(this.data)
    },
  })
  wx.getSystemInfo({
    success: (res) => {
     
      this.setData({
       
        controls: [{
          id: 1,
          iconPath: '/images/zz002.png',
          position: {
            left: 20,
            top: res.windowHeight - 70,
            width: 50,
            height: 50
          },
          clickable: true
        }, {
          id: 2,
          iconPath: '/images/zz001.png',
          position: {
            left: res.windowWidth / 2 - 45,
            top: res.windowHeight - 100,
            width: 90,
            height: 90
          },
          clickable: true
        }, {
          id: 3,
          iconPath: '/images/zz003.png',
          position: {
            left: res.windowWidth - 70,
            top: res.windowHeight - 70,
            width: 50,
            height: 50
          },
          clickable: true
        }, {
          id: 4,
          iconPath: '/images/zz004.png',
          position: {
            left: res.windowWidth - 70,
            top: res.windowHeight - 150,
            width: 50,
            height: 50
          },
          clickable: true
        }, {
          id: 5,
          iconPath: '/images/zz005.png',
          position: {
            left: res.windowWidth/2-10,
            top: res.windowHeight/2 - 35,
            width: 20,
            height: 30
          },

        }]
      })
    },

  })
  },
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  

  },
  moveToCenter: function () {
    this.mapCtx.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  
  onShow: function () {
    this.mapCtx=wx.createMapContext("ofo-map");
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