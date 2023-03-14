console.log("WXMPLifecycle");

// App 生命周期回调
// function initAppExtentionDyz(App) {
//   return function (app) {
//     app.onLaunch = function (options) {
//       console.log("====>>>> App onLaunch");
//     };

//     app.onShow = function (options) {
//       console.log("====>>>> App onShow");
//     };

//     app.onHide = function (options) {
//       console.log("====>>>> App onHide");
//     };

//     app.onError = function (options) {
//       console.log("====>>>> App onError");
//     };

//     return App(app);
//   };
// }

// var originalApp = App;
// App = initAppExtentionDyz(originalApp); 


// Page 生命周期回调
// function initPageExtensionDyz(Page) {
//   return function (page) {
//     page.onShow = function (options) {
//       console.log("====>>>> page.onShow");
//     }
//     page.onHide = function (options) {
//       console.log("====>>>> page.onHide");
//     }
//     page.onShareAppMessage = function (options) {
//       console.log("====>>>> page.onShareAppMessage");
//     }
//     // console.log("===>>> page");
//     // console.log(page);
//     return Page(page);
//   };
// }

// var originalPage = Page;
// // console.log("===>>> originalPage");
// // console.log(originalPage);
// Page = initPageExtensionDyz(originalPage);




// App 生命周期回调 方式2
// App({

//   /**
//    * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
//    */
//   onLaunch: function () {
//     console.log("====>>>> App onLaunch");
//   },

//   /**
//    * 当小程序启动，或从后台进入前台显示，会触发 onShow
//    */
//   onShow: function (options) {
//     console.log("====>>>> App onShow");
//   },

//   /**
//    * 当小程序从前台进入后台，会触发 onHide
//    */
//   onHide: function () {
//     console.log("====>>>> App onHide");
//   },

//   /**
//    * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
//    */
//   onError: function (msg) {
//     console.log("====>>>> App onError");
//   }
// });
