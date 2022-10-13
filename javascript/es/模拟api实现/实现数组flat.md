#### 数组扁平化
- 首先看个例子,扁平化1层
  [1,2,3,[1,2]] ==> [1,2,3,1,2]
  - 通过concat直接拼接一层(或者解构赋值)
  ```
  function flat (arr) {
    if(arr.length<1) return
    return arr.reduce((acc,cur)=>{
      if(Array.isArray(cur)){
        return acc.concat(cur)
      }else{
        return acc.concat(cur) //[].push(1)结果是1;[].concat(1)结果才是[1]
      }
    },[])
  }
  ```
- 假如是多层
  [1,2,3,[1,2,[4,5,6]]] ==> [1,2,3,1,2,4,5,6]
  - 通过递归实现
  ```
  function flat (arr) {
    if(arr.length<1) return
    return arr.reduce((acc,cur)=>{
      if(Array.isArray(cur)){
        // return flat(cur) // acc不具累加效果
        return acc.concat(flat(cur))
      }else{
        return acc.concat(cur) //[].push(1)结果是1;[].concat(1)结果才是[1]
      }
    },[])
  }
  ```
- 但是这样相当于flat(Infinity),没办法控制深度,那如何通过flat(arr,deepth)控制深度
  - 那只要在递归的时候判断下当前深度是否等于deepth就好了,deepth默认值为1
  ```
  function flat (arr, deepth = 1){
    let i = 0
    function recursion (arr, deepth = 1) {
      if (arr.length < 1) return
      i++
      return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
          if (i >= deepth) {
            return acc.concat(cur)
          } else {
            return acc.concat(recursion(cur))
          }
        } else {
          return acc.concat(cur)
        }
      }, [])
    }
    return recursion(arr, deepth)
  }
  ```