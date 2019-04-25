// var a = {
//     name: '11',
//     age: 20
// }
// const {name, age} = a
// var b = {name,age}
// console.log(name) // '11'
// console.log(age) // 20
// console.log(b) // {name: '11', age:20}
// a.name = 20 // 对象a里面的name赋值
// console.log(name) // '11'
// console.log(age) // 20
// console.log(b) // {name:'11', age:20}


let [a,b,c,...d] = [1,2,3,4,5,5,6,6,7,8,9]
console.log(d)
console.log(a)

// console.log(top) // 就是window

let {top: t, left: l} = {top:100, left:200} // 将top重新赋值给变量t
console.log(t,l)
