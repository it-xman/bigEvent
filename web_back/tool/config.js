// 将项目中使用的接口地址统一保存在这个文件中
// 将基地址保存为一个变量然后进行拼接，方便后期维护

const BASEURL = 'http://localhost:8000/';

const USER_LOGIN = BASEURL + 'admin/login';
const USER_LOGOUT = BASEURL + 'admin/logout';
const USER_INFO = BASEURL + 'admin/getuser';
const ARTICLETOTAL = BASEURL + 'admin/article_count';
const COMMENTTOTAL = BASEURL + 'admin/comment_count';
const MONTH_ARTICLE = BASEURL + 'admin/month_article_count';
const ARTICLE_CATEGORY_COUNT = BASEURL + 'admin/article_category_count';
const ARTICLE_CATEGORY_VISIT = BASEURL + 'admin/article_category_visit';
const SEARCH = BASEURL + 'admin/search';
const PUBLISH = BASEURL + 'admin/article_publish';
const EDIT = BASEURL + 'admin/article_edit';
const DEL = BASEURL + 'admin/article_delete';
const CATEGORY_SEARCH = BASEURL + 'admin/category_search';
const CATEGORY_ADD = BASEURL + 'admin/category_add';
const CATEGORY_EDIT = BASEURL + 'admin/category_edit';
const CATEGORY_DEL = BASEURL + 'admin/category_delete';
const COMMENT_SEARCH = BASEURL + 'admin/comment_search';
const COMMENT_PASS = BASEURL + 'admin/comment_pass';
const COMMENT_REJECT = BASEURL + 'admin/comment_reject';
const COMMENT_DEL = BASEURL + 'admin/comment_delete';
const USERINFOGET = BASEURL + 'admin/userinfo_get';
const USERINFOEDIT = BASEURL + 'admin/userinfo_edit';


