Object.assign()
Object.create()
Object.freeze()
Object.defineProperty()


let a = Object.assign({}, {x:1}) // 是把后面的值取出来，放到前面去


let obj2 = Object.create({a:1,b:2}) // 是在原型上创建对象

let obj3 = {x: 1}
obj3.y = 10

Object.defineProperty(obj3, 'z', {
    value: 100,
    writable: true, // 可以修改和读取
    enumerable: true, // 可以枚举，用户遍历
    configurable: true // 可以删除
})

