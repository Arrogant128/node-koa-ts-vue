function f(x = 0,y = 1) {
  console.log(x,y)
}
f(1,2)
f()

function f1(arr, ...args) {
  console.log(args)
}
f1([1,2,3], 1,2,3,4,5,5,6,7,7,8,8,9)


// let f2 = (x) => {
//   return x + 1
// }
// let f2 = x => {
//   return x + 1
// }

// 如果函数体内有且只有一条语句，name{}也可以省略，return也可以省略
let f2 = x => x + 1
console.log(f2(2))
