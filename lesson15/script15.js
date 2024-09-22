const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize

    this.createElement = function () {
        let newElem
        if (selector.split('')[0] === '.') {
            newElem = document.createElement('div')
            newElem.classList.add(selector.slice(1))
            newElem.textContent = 'div c классом ' + selector.slice(1)
        } else if (selector.split('')[0] === '#') {
            newElem = document.createElement('p')
            newElem.id = selector.slice(1)
            newElem.textContent = 'p c id ' + selector.slice(1)
        }
        newElem.style.cssText = `
                height: ${height}px;
                width: ${width}px;
                background-color: ${bg};
                font-size: ${fontSize}px;
            `;
        document.body.appendChild(newElem)
    }
}

const newElem = new DomElement('#class', 200, 400, 'red', 80)

newElem.createElement()
