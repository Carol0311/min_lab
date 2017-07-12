//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    items: [
      { name: '理想实验《伽利略理想斜面实验》', src: 'http://minlab-1253987689.coscd.myqcloud.com/%E4%BC%BD%E5%88%A9%E7%95%A5%E7%90%86%E6%83%B3%E6%96%9C%E9%9D%A2%E5%AE%9E%E9%AA%8C_%E6%A0%87%E6%B8%85.mp4' },
      { name: '观察实验《美丽化学--结晶过程》', src: 'http://minlab-1253987689.coscd.myqcloud.com/%E3%80%8A%E7%BE%8E%E4%B8%BD%E5%8C%96%E5%AD%A6%E3%80%8B%EF%BC%9A%E7%BB%93%E6%99%B6%E8%BF%87%E7%A8%8B_%E6%A0%87%E6%B8%85.mp4'},
      { name: '模拟实验《创元素引进-油滴实验模拟量子世界》', src:  "http://minlab-1253990000.coscd.myqcloud.com/%E5%88%9B%E5%85%83%E7%B4%A0%E5%BC%95%E8%BF%9B-%E6%B2%B9%E6%BB%B4%E5%AE%9E%E9%AA%8C%E6%A8%A1%E6%8B%9F%E9%87%8F%E5%AD%90%E4%B8%96%E7%95%8C%EF%BC%88Is%20This%20What%20Quantum%20Mechanics%20Looks%20Like%EF%BC%89_%E6%A0%87%E6%B8%85.mp4"},
      { name: '控制实验《水中骰子实验- 自如的控制意念》', src: 'http://minlab-1253990000.coscd.myqcloud.com/%E6%B0%B4%E4%B8%AD%E9%AA%B0%E5%AD%90%E5%AE%9E%E9%AA%8C-%20%E8%87%AA%E5%A6%82%E7%9A%84%E6%8E%A7%E5%88%B6%E6%84%8F%E5%BF%B5_%E6%A0%87%E6%B8%85.mp4'}
    ],
    background_color: "white"
  },
  globalData : {
    userIntrest : []
  },
  checkboxSelect: function (e) {
    this.setData({index: e.detail.value});
  },
  sendRequestData: function(){
    wx.request({
      url: 'videos.json', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data[this.data.index]);
      }
    })
  }
})
