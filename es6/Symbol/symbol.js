/**
 *  Symbol
 *      ES6新增的数据类型-基本类型
 *      值是由Symbol函数调用产生的
 */
var s1 = Symbol()
var s2 = Symbol()
console.log(s1, s2) // Symbol() Symbol()

var s3 = Symbol('miaowei')
var s4 = Symbol('miaowei')

console.log(s3 === s4) // false
