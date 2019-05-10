/*
 * @Author: yu shijun
 * @LastEditors: yu shijun
 * @Description: 
 * @Date: 2019-05-09 21:47:46
 * @LastEditTime: 2019-05-09 22:03:50
 */
const fs = require('fs')
fs.readFile('./迪丽娜尔,NCS-迪力夏提 - Tu Vivi Nellaria (小黄人版).mp3', function(err, data) {
    // 读取文件的流
    // 字符串可以用data.toString()
})
let info = fs.statSync('./test.txt') // 获取文件的创建时间和修改时间
console.log(info)

fs.unlinkSync('./test.txt') // 删除文件

fs.mkdirSync('./a') // 创建文件夹
fs.mkdirSync('./b/c') // 不能递归创建文件夹

fs.rmdirSync('./a') // 移除文件夹，不能删除非空文件夹
