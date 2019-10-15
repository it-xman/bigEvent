// 将项目中使用的接口地址统一保存在这个文件中
// 将基地址保存为一个变量然后进行拼接，方便后期维护

var BASEURL = 'http://localhost:8000/';

var USER_LOGIN = BASEURL + 'admin/login';
var USER_LOGOUT = BASEURL + 'admin/logout';
var USER_INFO = BASEURL + 'admin/getuser';
var ARTICLETOTAL = BASEURL + 'admin/article_count';
var COMMENTTOTAL = BASEURL + 'admin/comment_count';
var MONTH_ARTICLE = BASEURL + 'admin/month_article_count';
var ARTICLE_CATEGORY_COUNT = BASEURL + 'admin/article_category_count';
var ARTICLE_CATEGORY_VISIT = BASEURL + 'admin/article_category_visit';
var SEARCH = BASEURL + 'admin/search';
var PUBLISH = BASEURL + 'admin/article_publish';
var EDIT = BASEURL + 'admin/article_edit';
var DEL = BASEURL + 'admin/article_delete';
var CATEGORY_SEARCH = BASEURL + 'admin/category_search';
var CATEGORY_ADD = BASEURL + 'admin/category_add';
var CATEGORY_EDIT = BASEURL + 'admin/category_edit';
var CATEGORY_DEL = BASEURL + 'admin/category_delete';
var COMMENT_SEARCH = BASEURL + 'admin/comment_search';
var COMMENT_PASS = BASEURL + 'admin/comment_pass';
var COMMENT_REJECT = BASEURL + 'admin/comment_reject';
var COMMENT_DEL = BASEURL + 'admin/comment_delete';
var USERINFO = BASEURL + 'admin/userinfo_get';
var USERINFOEDIT = BASEURL + 'admin/userinfo_edit';


