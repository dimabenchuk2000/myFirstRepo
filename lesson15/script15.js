'use strict'

let block
let left = 0
let top1 = 0

// const DomElement = function (selector, height, width, bg, fontSize) {
//     this.selector = selector
//     this.height = height
//     this.width = width
//     this.bg = bg
//     this.fontSize = fontSize

//     this.createElement = function (position) {
//         let newElem

//         if (selector.split('')[0] === '.') {
//             newElem = document.createElement('div')
//             newElem.classList.add(selector.slice(1))
//             newElem.textContent = 'div c классом ' + selector.slice(1)
//         } else if (selector.split('')[0] === '#') {
//             newElem = document.createElement('p')
//             newElem.id = selector.slice(1)
//             newElem.textContent = 'p c id ' + selector.slice(1)
//         }
//         newElem.style.cssText += `
//                 position: ${position};
//                 height: ${height}px;
//                 width: ${width}px;
//                 background-color: ${bg};
//                 font-size: ${fontSize}px;
//             `;

//         return newElem
//     }
// }

class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector
        this.height = height
        this.width = width
        this.bg = bg
        this.fontSize = fontSize
    }

    createElement(position) {
        let newElem

        if (this.selector.split('')[0] === '.') {
            newElem = document.createElement('div')
            newElem.classList.add(this.selector.slice(1))
            newElem.textContent = 'div c классом ' + this.selector.slice(1)
        } else if (this.selector.split('')[0] === '#') {
            newElem = document.createElement('p')
            newElem.id = this.selector.slice(1)
            newElem.textContent = 'p c id ' + this.selector.slice(1)
        }
        newElem.style.cssText += `
                position: ${position};
                top: ${0};
                left: ${0};
                height: ${this.height}px;
                width: ${this.width}px;
                background-color: ${this.bg};
                font-size: ${this.fontSize}px;
            `;

        return newElem
    }
}

const newElem = new DomElement('.block', 100, 100, 'green', 16)

const createElement = function () {
    block = newElem.createElement('absolute')
    document.body.appendChild(block)
}

const movingElement = function (e) {
    if (e.key === "ArrowRight") {
        left += 10
        block.style.left = `${left}px`
    }
    if (e.key === "ArrowDown") {
        top1 += 10
        block.style.top = `${top1}px`
    }
    if (e.key === "ArrowUp") {
        top1 -= 10
        block.style.top = `${top1}px`
    }
    if (e.key === "ArrowLeft") {
        left -= 10
        block.style.left = `${left}px`
    }
}

document.addEventListener('DOMContentLoaded', createElement)
document.addEventListener('keydown', movingElement)

console.log(newElem);