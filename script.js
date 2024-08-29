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
    if (num === 0) return false;
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Верстка по кайфу");
    screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
}

const getAllServicePrices = function () {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum1 = +prompt("Сколько это будет стоить?", 1000);
            } while (!isNumber(sum1))
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum2 = +prompt("Сколько это будет стоить?", 1000);
            } while (!isNumber(sum2))
        }

    }

    return sum1 + sum2;
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * rollback / 100;
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