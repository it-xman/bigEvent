//这个user.js用来管理用户进行的所有接口请求操作
var user = {
  // login方法用来管理用户登录接口的操作方式
  // - 将页面中的功能提取到user.js后需要区分哪些代码和接口有关，哪些代码和页面有关
  // - 和接口有关的代码留在user.js，和页面有关的部分放回页面，通过传参方式传入
  // 这里的options是一个对象形式的参数
  login: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback,
    })
  },
  //logout方法是管理用户退出接口的操作方式
  logout: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback,
    })
  },
  // getInfo方法用来管理用户的简单信息获取接口的操作方式
  getInfo: function (options) {
    $.ajax({
      type: 'get',
      url: USER_INFO,
      success: options.callback,
    })
  }
};