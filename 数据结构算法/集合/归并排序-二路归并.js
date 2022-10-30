/**
 * arr=[9, 2, 5, 1, 3, 2, 8]
 * 二分分割
 * [9,2,5][1,3,2]
 * [9,2][5][1,3][2]
 * [9][2][5][1][3][2]
 * 归并(递归合并)
 * [2,9][5][1,3][2]
 * [2,5,9][1,2,3]
 * [1,2,2,3,5,9]
 */
function  mergeSort(arr){
  // 二路拆分
  if (arr.length <= 1) { return arr }
  let middle = Math.floor(arr.length/2)
  let leftArr = arr.slice(0, middle)
  let rightArr = arr.slice(middle, arr.length)
  // 二路合并,采用双指针
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge (leftArr, rightArr){
  let res = []
  let l = 0
  let r = 0
  // 分三种情况
  while (l < leftArr.length && r < rightArr.length){
    if (leftArr[l] <= rightArr[r]){
      res.push(leftArr[l++])
    }
    else{
      res.push(rightArr[r++])
    }
  }
  while (l < leftArr.length){
    res.push(leftArr[l++])
  }
  while (r < rightArr.length) {
    res.push(rightArr[r++])
  }
  return res 
}
console.log(mergeSort([9, 2, 5, 1, 3, 2, 8]))