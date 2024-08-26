let rollback = 50;

let title = prompt("Как называется ваш проект?");
let screens = prompt("Как типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = prompt("Нужен ли адаптив на сайте?", "Да/Нет");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", 100);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", 100);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * rollback / 100;

if (adaptive.toLowerCase() == "да") {
    adaptive = true;
} else {
    adaptive = false;
}

switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break
    case fullPrice >= 0 && fullPrice < 15000:
        console.log("Скидка не предусмотрена");
        break
    case fullPrice < 0:
        console.log("Что-то пошло не так");
        break
}

console.log(fullPrice);
console.log(servicePercentPrice);