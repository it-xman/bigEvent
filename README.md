## 1. bigEvent项目文档

### 1.1 准备工作

- 在github上新建一个远程仓库并克隆到本地
- 将静态页面放入到仓库目录下
- 将项目的功能介绍都书写到README.md中

## 2 后台功能

> - 将所有的接口地址统一保存在config.js文件中，方便后期维护。
> - 将每个页面中进行接口调用的功能统一保存到某个文件中
>   - 用户相关功能：user.js
>     - 设置user对象，将每个请求的操作设置为user的方法，在页面中使用时调用方法即可.
>       - 好处：页面的具体操作和接口的操作分开，方便维护。
>   - 文章相关功能：article.js

### 2.1 后台登录页面功能制作

- 结构的修改：
    - 登录按钮是submit功能。
  - 希望使用ajax，应改为普通按钮。或者使用事件对象阻止元素的默认行为
  - 如a的跳转和submit的跳转
  - e.preventDefault()

- 功能简介：
  1. 点击登录按钮后，获取用户名和密码
  2. 检测获取的内容是否为空
  3. 如果不为空，通过接口发送给服务器端检测
  4. 根据检测结果进行对应处理
     - 成功： 跳转到首页
     - 失败： 进行相关提示
  5. 通过bootstrap提供的模态框功能进行弹框效果的美化，记住要引入css样式和js文件
     - 从文档中找到需要的模态框结构，复制到页面中
     - 替换掉alert操作，使用modal()激活模态框
       - 传入‘show’，显示‘hide’隐藏
       - 再修改提示的内容即可
- 实现功能
  1. 给登录按钮添加点击事件
  2. 获取用户名和密码并进行检测
  3. 如果不为空则发送ajax请求
  4. 改进接口地址，创建一个tool文件夹放配置文件,例如将接口地址统一保存在config.js中。