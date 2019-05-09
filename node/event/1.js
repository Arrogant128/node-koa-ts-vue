/*
 * @Author: yu shijun
 * @LastEditors: yu shijun
 * @Description: 
 * @Date: 2019-05-08 20:41:03
 * @LastEditTime: 2019-05-08 21:09:57
 */
const EventEmmiter = require('events')
class Person extends EventEmmiter{
    constructor(name) {
        super()
        this.name = name;
        this.age = 0
        this.growup()
    }
    growup() {
        setInterval(() => {
            this.age++
            this.emit('growup')
        },1000)
    }
    sayHello () {
        console.log('name', this.name)
        return this
    }
    sayOk () {
        console.log('ok')
    }

}
const p1 = new Person('童无敌')
p1.addListener('growup', function(){
    console.log('111')
})

// 往这个事件之前追加事件
p1.prependListener('growup', function(){
    console.log('...')
})
console.log(p1.eventNames()) // 返回
// p1.sayHello().sayOk()