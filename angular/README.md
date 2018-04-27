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

## directive 指令
### 指令-scope
* false（默认值）：直接使用父scope,且父子间model会互相改变。比较“危险”
* true：继承父scope,但是子scope改变，不影响父scope
* { }：创建一个新的“隔离”scope，但仍可与父scope通信
1. @：单向绑定，外部scope能够影响内部scope，但反过来不成立
2. =：双向绑定，外部scope和内部scope的model能够相互改变
3. &：把内部scope的函数的返回值和外部scope的任何属性绑定起来
### 指令-require
* require - 请求另外的controller，传入当前directive的link function中。require需要传入一个directive controller的名称。如果找不到这个名称对应的controller，那么将会抛出一个error。名称可以加入以下前缀：

1. ? - 不要抛出异常。这使这个依赖变为一个可选项。
2. ^ - 允许查找父元素的controller

### 指令-compile
如果需要给Directive自定义事件或用程序生成模板，就需要用到compile和link函数了。基于性能的考虑，Angular中，模板的处理过程分为compile和link两个阶段，Directive也会在这两个阶段分别进行处理。
* compile阶段：compile阶段主要是对模板内容的处理，可以对模板内容进行修改，如ng-repeat就是在compile阶段执行的。
* link阶段：link阶段主要对模板进行数据绑定和事件绑定等操作。






