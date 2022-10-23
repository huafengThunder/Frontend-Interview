/*
 * 实现思路
 * 1,创建一个纯净空对象
 * 2,继承父类原型上的方法
 * 3,添加父类的属性到新的对象上并初始化. 保存方法的执行结果
 * 4,如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
 */
 /*
 * 问题一，Object.create(obj.prototype)和字面量区别
 *
 */
```
function new (){
  let obj = new Object();
  let constructor = [].shift.call(arguments)
  obj._proto_ = constructor.prototype
  constructor.apply(person, arguments)
  return obj
} 
```