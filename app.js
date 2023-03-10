// app.js

console.log("微信小程序基础");

// 执行WXMPSystemMethod.js 里面的内容
require("./WXMPSystemMethod.js");
require("./WXMPNetworkRequest.js");

// ======= 导出对象 ============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 2、接收TATest.wx.js 中 导出 ThinkingAPI 对象
// var TATestObject = require("./TATest.wx.js");
// console.log(TATestObject);
// ======= 导出对象 ============>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
