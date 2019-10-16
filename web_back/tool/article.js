var article = {
  //getArticle方法获取文章类别接口操作方式
  getCate: function (options) {
    $.ajax({
      type: 'get',
      url: CATEGORY_SEARCH,
      success: options.callback,
    })
  },
  // addArticle方法添加文章类别接口操作方式
  addCate: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_ADD,
      data: options.data,
      success: options.callback,
    })
  },
  // 编辑分类功能
  editCate: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_EDIT,
      data: options.data,
      success: options.callback,
    })
  },
  // 删除分类的功能
  delCate: function (options) {
    $.ajax({
      type: 'post',
      url: CATEGORY_DEL,
      data: options.data,
      success: options.callback,
    })
  },
  //获取文章列表
  getList: function (options) {
    $.ajax({
      type: 'get',
      url: SEARCH,
      data: options.data,
      success: options.callback,
    })
  },
  // setTopOptGet: function (options) {
  //   $.ajax({
  //     type: 'get',
  //     url:,
  //     data:,
  //     success:
  //
  //   })
  // },
  // setTopOptPost: function (options) {
  //   $.ajax({
  //     type: 'post',
  //     url:
  //     data,
  //     success: ,
  // })
  // },


};