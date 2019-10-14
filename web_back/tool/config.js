// 将项目中使用的接口地址统一保存在这个文件中
// 将基地址保存为一个变量然后进行拼接，方便后期维护

var BASEURL = 'http://localhost:8000/';

var USER_LOGIN = BASEURL + 'admin/login';
var USER_LOGOUT = BASEURL + 'admin/logout';
var USER_INFO = BASEURL + 'admin/getuser';
