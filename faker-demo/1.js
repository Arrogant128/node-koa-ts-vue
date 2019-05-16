/*
 * @Author: yu shijun
 * @Date: 2019-05-15 13:37:21
 * @LastEditors: yu shijun
 * @LastEditTime: 2019-05-15 13:48:40
 * @Description: 
 */
const faker = require('faker')
faker.locale = 'zh_CN'
const user = {
    name: faker.name.findName(),
    uid: faker.random.uuid()
}
// console.log(faker)
console.log(user)