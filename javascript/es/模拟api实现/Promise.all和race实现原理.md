- Promise.race
```
// 1,获取最快的promise实例结果
Promise.race = function(arr){
  if(arr[Symbol.itrerator] === undefiend){
    return Promise.resolve('params is not a iterator type') 
  }
  promiseArr = Array.from(arr);
    return new Promise((resolve,reject)=>{
      for (let i = 0; i < promiseArr.length; i++){
        promiseArr[i].then(res=>{
          resolve(res)
        }).catch(err=>{
          reject(err)
        })
      }
    })
}
```