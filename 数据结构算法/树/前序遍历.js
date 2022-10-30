function dfs (obj){
  let arr = []
  function recursion (obj){
    if(obj.children){
      arr.push(obj.left)
      arr.push(obj.value)
      arr.push(obj.right)
    }
  }
  recursion(obj)
  return arr
}