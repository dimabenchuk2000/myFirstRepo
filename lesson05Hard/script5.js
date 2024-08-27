let arr = [];

arr.push("123", "321", "234", "567", "478", "290", "102");

const primeNumbers = function (num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

for (let i = 0; i < arr.length; i++) {

    if (arr[i][0] === "2" || arr[i][0] === "4") {
        console.log(arr[i]);
    }

}

for (let i = 0; i < 100; i++) {
    if (primeNumbers(i)) console.log(i + " Делители этого числа: 1 и " + i);
}

console.log(arr);