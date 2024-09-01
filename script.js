'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 10,
    start: function () {
        this.asking();
        this.getAllServicePrices();
        this.getFullPrice();
        this.getServicePercentPrices();
        this.getTitle();

        this.logger();
    },
    isNumber: function (num) {
        if (num === 0) return false;
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        this.title = prompt("Как называется ваш проект?", "Верстка по кайфу");

        for (let i = 0; i < 2; i++) {
            let name = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные (Выбрать один)");
            let price = 0;

            do {
                price = +prompt("Сколько будет стоить данная работа?", 10000);
            } while (!this.isNumber(price))

            this.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price = 0;

            do {
                price = +prompt("Сколько это будет стоить?", 1000);
            } while (!this.isNumber(price))

            this.services[name] = price;
        }

        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        for (let key in this.services) {
            this.allServicePrices += this.services[key];
        }
    },
    getFullPrice: function () {
        this.fullPrice = this.screenPrice + this.allServicePrices;
    },
    getServicePercentPrices: function () {
        this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
    },
    getTitle: function () {
        this.title = this.title.trim()[0].toUpperCase() + this.title.trim().substring(1).toLowerCase();
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
        console.log(this.services);
        console.log(this.screens);
    }
}

appData.start();