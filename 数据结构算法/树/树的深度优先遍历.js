/**
 * 采用递归实现深度优先遍历
 * 
 *  3
   / \
  9  20
    /  \
   15   7
  ==>[3,9,20,15,7] 
 */
const tree = {
  value: 3,
  children: [{
    value: 9
  }, {
    value: 20,
    children: [{
      value: 15
    }, {
      value: 7
    }]
  }],
}

function dfs (tree) {
  let res = []
  function recursion (tree){
    res.push(tree.value)
    tree.children && tree.children.forEach(recursion);
  }
  recursion(tree)
  return res
}
console.log(dfs(tree))