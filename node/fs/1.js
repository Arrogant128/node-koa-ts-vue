/*
 * @Author: yu shijun
 * @LastEditors: yu shijun
 * @Description: 
 * @Date: 2019-05-09 13:01:21
 * @LastEditTime: 2019-05-09 13:06:35
 */
const fs = require('fs')
const path = require('path')

function resolve(ctx){
    return path.join(__dirname, ctx)
}
let result = fs.writeFileSync(resolve('./test.txt'), '你好！')
console.log(result)
let content = fs.readFileSync(resolve('./test.txt'))
console.log(content.toString())