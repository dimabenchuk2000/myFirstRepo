'use strict'

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентебря", "октября", "ноября", "декабря"]

setInterval(() => {
    const dateAndTime = new Date();
    let day = dateAndTime.getDay();

    const textHours = function () {
        const hours = dateAndTime.getHours();

        if (hours === 1 || hours === 21) {
            return ' час ';
        } else if (hours === 2 || hours === 3 || hours === 4 || hours === 22 || hours === 23) {
            return ' часа ';
        } else {
            return ' часов ';
        }
    }

    if (day === 0) {
        day = 6;
    } else {
        day -= 1;
    }

    console.clear();

    console.log(
        "Сегодня " + week[day] + ", " + dateAndTime.getDate() + " " + month[dateAndTime.getMonth()] + " " + dateAndTime.getFullYear() + " года, "
        + dateAndTime.getHours() + textHours() + dateAndTime.getMinutes() + " минут " + dateAndTime.getSeconds() + " секунд.");
}, 1000);