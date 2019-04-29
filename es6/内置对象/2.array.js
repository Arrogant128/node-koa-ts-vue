includes()
every()
some()
filter()
map()
reduce()


let arr2 = [1,2,3,4,5,6,7]
let a = arr2.reduce(function (prev, current) {
    return prev + current
}, 0)
console.log(a)
