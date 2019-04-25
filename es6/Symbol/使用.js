// Symbol的使用
// 属性私有化-数据保护

// 我希望一个Person的性别在出生以后就能够确定，
// 并一直保存到死
// function Person (name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
//
// var p1 = new Person('莫涛', '男')
// console.log(p1.gender)

// 实现方式1：
// var Person = (function () {
//     var _gender = ''
//     function p (name, gender) {
//         this.name = name;
//         _gender = gender;
//     }
//     p.prototype.getGender = function () {
//         return _gender
//     }
//     return p
// })()

// var p1 = new Person('莫涛', '男')
// console.log(p1)
// console.log(p1.getGender())

// 用symobol函数产生的值不会一样，即使都是Symbol('gender')，还是不一样的
var Person = (function () {
    var _gender = Symbol('gender')
   function p (name, gender) {
       this.name = name
       this[_gender] = gender
   }
   // p.prototype.getGender = function () {
   //     return this[_gender]
   // }
   return p
})()
var p1 = new Person('莫涛', '男')
console.log(p1)
console.log(p1[Symbol('gender')]) // undefined
