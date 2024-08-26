'use strict';

let rollback = 50;

let title = prompt("Как называется ваш проект?");
let screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", 100);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", 100);

let allServicePrices, fullPrice, servicePercentPrice;

const showTypeOf = function (variable) {
    return variable + ", " + typeof variable;
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%";
        case price >= 15000 && price < 30000:
            return "Даем скидку в 5%";
        case price >= 0 && price < 15000:
            return "Скидка не предусмотрена";
        case price < 0:
            return "Что-то пошло не так";
    }
}

const getTitle = function (t) {
    let correctTitle = t.toLowerCase().trim().split('').map((char, index) =>
        index === 0 ? char.toUpperCase() : char).join('');
    return correctTitle
}

function getFullPrice(price1, callback) {
    return price1 + callback(servicePrice1, servicePrice2);
}

const getServicePercentPrices = function (price1, price2) {
    return price1 - price1 * price2 / 100;
}

fullPrice = getFullPrice(screenPrice, function (price1, price2) {
    return price1 + price2;
});

servicePercentPrice = getServicePercentPrices(fullPrice, rollback)

console.log(showTypeOf(getTitle(title)));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

console.log(screens.toLowerCase().split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice + "$");