/*
 * @Author: yu shijun
 * @Date: 2019-05-12 14:30:39
 * @LastEditors: yu shijun
 * @LastEditTime: 2019-05-12 14:44:24
 * @Description: 
 */
const chalk = require('chalk')
const commander = require('commander')

commander.version('v1.o.o.o', '-v, --version')
console.log(chalk.bold.red('hello world!') + 'miaov')