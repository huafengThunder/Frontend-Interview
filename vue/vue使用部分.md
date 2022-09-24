#### vue.delete和js的delete的区别
Vue.delete 直接删除了数组 改变了数组的键值。
delete 只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变
```
var a=[1,2,3,4]
var b=[1,2,3,4]

delete a[1]
console.log(a)

Vue.$delete(b,1)
console.log(b)
```

#### v-on事件修饰符
  - capture捕获事件，点击子元素也会触发父级事件
  - stop阻止事件冒泡
  - once该事件触发一次
  - self修饰符.self只会触发自己范围内的事件，不会包含子元素。
  - prevent,阻止事件的默认事件，例如button[type="submit"] ，a[href="#"]虽然是冒泡阶段开始，但不会因为stop阻止事件传递而停止的事件；

#### 如何实现一个v-model的组件

#### 一个元素如何绑定多个方法(:[attr].async)

#### 组件通信方式有哪些

#### keep-alive组件属性include、exclude、max

#### 插槽

#### 封装组件注意事项


