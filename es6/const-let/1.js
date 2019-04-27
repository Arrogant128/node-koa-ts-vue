const a = '111'
console.log(a)

const arr = [1,2,3,4]
arr.push(5)
console.log(arr)

// 冻结这个对象，没法被修改,只冻结了一层，如果里面还有
// 只能递归再冻结
const arr1 = Object.freeze([1,2,3,4])
// 判断一个对象是不是被冻结
Object.isFrozen(arr1) // true
console.log(arr1)
