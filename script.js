'use strict';

let rollback = 50;

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Верстка по кайфу");
    screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    screenPrice = prompt("Сколько будет стоить данная работа?", 12000);

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

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

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
}

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        sum += +prompt("Сколько это будет стоить?", 1000);
    }

    return sum;
}

const getFullPrice = function () {
    return +screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * rollback / 100;
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

console.log(screens.toLowerCase().split(", "));

console.log(getRollbackMessage(fullPrice));

console.log(servicePercentPrice + "$");