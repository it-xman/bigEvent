var article = {
  //getArticle方法获取文章类别接口操作方式
  getArticle: function (options) {
    $.ajax({
      type: 'get',
      url: CATEGORY_SEARCH,
      success: options.callback,
    })
  },
  // addArticle方法添加文章类别接口操作方式
  addArticle: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_ADD,
      data: options.data,
      success: options.callback,
    })
  },
  // 编辑分类功能
  editArticle: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_EDIT,
      data: options.data,
      success: options.callback,
    })
  }





};