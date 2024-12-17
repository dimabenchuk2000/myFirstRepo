"use strict"

const input = document.querySelector("#inputText")
const p = document.querySelector(".section__p > p")

const debounce = (fn, ms) => {
    let timeout
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    }
}

function onKeyUp (a, b) {
    p.textContent = input.value
    console.log(a + b);
}

onKeyUp = debounce(onKeyUp, 300)

input.addEventListener("keyup", () => {
    onKeyUp(1, 2)
})