document.onclick = function () {
    console.log(this) // document

    function f () {
      console.log(this) // window
    }
    f()

    function f1 () {
        console.log(this) // button
    }
    button.onclick = f1()

    let f2 = () => {
        console.log(this) // document
    }
    f2()
    button.onclick = f2()
}
