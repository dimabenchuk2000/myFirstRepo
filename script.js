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
    rollback: 10,
    start: function () {
        this.asking();
        this.allServicePrices = this.getAllServicePrices();
        this.fullPrice = this.getFullPrice();
        this.servicePercentPrice = this.getServicePercentPrices();
        this.title = this.getTitle();
        this.logger();
    },
    isNumber: function (num) {
        if (num === 0) return false;
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        this.title = prompt("Как называется ваш проект?", "Верстка по кайфу");
        this.screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            this.screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
        } while (!appData.isNumber(this.screenPrice));

        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуги нужен?");
                do {
                    sum1 = +prompt("Сколько это будет стоить?", 1000);
                } while (!this.isNumber(sum1))
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуги нужен?");
                do {
                    sum2 = +prompt("Сколько это будет стоить?", 1000);
                } while (!this.isNumber(sum2))
            }

        }

        return sum1 + sum2;
    },
    getFullPrice: function () {
        return this.screenPrice + this.allServicePrices;
    },
    getServicePercentPrices: function () {
        return this.fullPrice - this.fullPrice * (this.rollback / 100);
    },
    getTitle: function () {
        return this.title.trim()[0].toUpperCase() + this.title.trim().substring(1).toLowerCase();
    },
    getRollbackMessage: function (price) {
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
    },
    logger: function () {
        console.log(this.title);
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.getRollbackMessage(this.fullPrice));
    }
}

appData.start();