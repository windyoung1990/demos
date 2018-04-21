# 慕课网学习angular笔记
## controller 控制器
* 负责和视图以及模型进行双向数据交互
* 一个控制器只负责和一个视图进行数据交互，多个控制器可以公用一个数据模型
* 两个控制器相同的方法应该抽出一个service文件，而不是抽出一个通用的控制器通过继承的方式实现。
### controller使用过程中的注意点
1. 不要试图去复用controller，一个控制器一般只负责一小块视图
2. 不要在controller中操作DOM，这不是控制器的职责
3. 不要在controller里面做数据格式化，ng有很好用的表单控件
4. 不要在controller里面做数据过滤操作，ng有$filter服务
5. 一般来说，controller是不会互相调用的，控制器之间的交互会通过事件进行

## View
利用Directive实现视图

## $scope
* scope是一个对象
* scope提供了一些工具方法
* scope是表达式的执行环境
* scope是一个树型结构
* 每个angulat应用只有一个根scope
* scope可以传播事件
* scope不仅是MVC的基础，也是实现双向数据绑定的基础

##

