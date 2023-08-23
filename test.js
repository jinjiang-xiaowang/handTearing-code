const arr1 = ['a', 'b',[1,2]];
const arr2 = ['c'];
const arr3  = [...arr1,...arr2]
arr1[2][0] = 9999 // 修改arr1里面数组成员值
console.log(arr3) // 影响到arr3,['a','b',[9999,2],'c']