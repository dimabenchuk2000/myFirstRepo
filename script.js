'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 50,
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Верстка по кайфу");
        appData.screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    }
}

const isNumber = function (num) {
    if (num === 0) return false;
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getTitle = function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
}

const getAllServicePrices = function () {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum1 = +prompt("Сколько это будет стоить?", 1000);
            } while (!isNumber(sum1))
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            do {
                sum2 = +prompt("Сколько это будет стоить?", 1000);
            } while (!isNumber(sum2))
        }

    }

    return sum1 + sum2;
}

const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
}

const getServicePercentPrices = function () {
    return appData.fullPrice - appData.fullPrice * appData.rollback / 100;
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

appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
