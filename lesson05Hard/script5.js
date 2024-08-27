let arr = [];

arr.push("123", "321", "234", "567", "478", "290", "102");

for (let i = 0; i < arr.length; i++) {

    if (arr[i][0] === "2" || arr[i][0] === "4") {
        console.log(arr[i]);
    }

}

console.log(arr);