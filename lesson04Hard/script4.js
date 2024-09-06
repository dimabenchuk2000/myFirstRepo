let wish = prompt('Напишите пожелание на новый год');

const textChecking = function (text) {
    if (typeof text === "string") {
        let correctWish = text.trim();
        if (correctWish.length > 30) {
            correctWish = correctWish.substring(0, 30) + "...";
            return correctWish
        } else {
            return correctWish
        }
    } else {
        alert('В качестве аргумента передана не строка');
    }
}

console.log(textChecking(wish));