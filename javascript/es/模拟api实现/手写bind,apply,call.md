- 实现bind
  - 创建一个新函数
  - 将this绑定到该函数
  - 参数合并,将bind函数的参数与原来的函数合并作为创建的新函数的参数
  - 返回新函数
```
  // es6
  Function.prototype.myBind = function(obj){
    return ()=>{
      return this.apply(obj,[...arguments])
    }
  }
  // es5
  Function.prototype.myBind = function(obj){
    var that = this
    return function () {
      return that.apply(obj,[].slice.call(arguments))
    }
  }
```
```
// 上面的缺点
  function foo(name) {
      this.name = name;
  }
  var obj = {};
  var bar = foo.myBind(obj);
  var alice = new bar('Alice'); // es6会出现bar不是构造器的错误
  console.log(alice.name);    // undefined
```