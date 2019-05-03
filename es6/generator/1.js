function* f () {
    console.log(1)
    yield console.log(2)
    console.log(3)
}
let f1 = f()

// f1.next()
// f1.next()
