/**
 * arr = [5,2,3,-1,8]步骤如下:
 * 第一步:选中目标元素第一个元素5,首尾双指针遍历得到:[2,3,-1][5][8]
 * 第二步:左边部分选中第一个元素2,首尾双指针遍历得到[-1][2][3];右边部分[8]长度为一,停止交换
 */

//通过两个额外变量
function quickSort (arr) {
  if (arr.length <= 1) { return arr }
  let lArr = []
  let rArr = []
  let target = arr.splice(0,1) //必须从原数组中截取出来,不然是没办法确定目标元素位置
  for (let i = 0; i < arr.length; i++) {
    arr[i] > target ? rArr.push(arr[i]) : lArr.push(arr[i])
  }
  return quickSort(lArr).concat(target,quickSort(rArr))
}
console.log(quickSort([5, 2, 3, 5, -1, 8]))