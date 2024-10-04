class First {
    constructor() { }
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    constructor() { }
    hello() {
        super.hello()
        console.log("А я наследуемый метод!");
    }
}

Second.prototype.hello()