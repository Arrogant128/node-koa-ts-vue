// 迭代

// 迭代协议：规定了迭代与实现的逻辑

// 迭代器：具体的迭代实现逻辑

// 迭代对象：可被迭代的对象 = [Symbol.iterator]方法

// 迭代语句：for...in：以原始插入的顺序迭代对象的可枚举属性
//           for...of：根据迭代对象的迭代器具体实现迭代对象数据

var obj1 = {
  name: 1,
  age:2,
  gender: '男',
  birthday: 12
}
obj1[Symbol.iterator] = function () {
  let keys = Object.keys(obj1)
  let len = keys.length
  let n = 0;
  return {
    next: function(){
      if (n < len) {
        return {
          value: obj1[keys[n++]],
          done: false
        }
      } else {
        return {
          value: '',
          done: true
        }
      }
    }
  }
}
console.log(obj1)
// for (let i in obj1) {
//   console.log(i) // name,age
//   console.log(obj1[i]) // 1,2
// }

// obj[Symbol.iterator]().next() => {done: true} 如果为true就停止迭代了
// 自定义得到迭代的对象的值
for (let i of obj1) { // of 是一个可迭代的对象
  console.log(i) // name,age
}
// var array1 = [
//   {name: 1},
//   {name: 2}
// ]
// for (let i of array1) {
//   console.log(i) // {name: 1}
// }

