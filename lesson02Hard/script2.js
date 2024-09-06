let num = 266219;
let sum = 1;

function multiplication(num) {
    num = num.toString();
    num = num.split('');

    for (let i = 0; i < num.length; i++) {
        sum *= Number(num[i]);
    }

    sum **= 3;

    console.log(sum.toString().substring(0, 2));
}

multiplication(num);