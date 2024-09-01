let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = new Date().getDay();

if (day === 0) {
    day = 6;
} else {
    day -= 1;
}

for (let i in week) {
    if (week[i] === "Суббота" || week[i] === "Воскресенье") {
        week[i] = week[i].italics();
    }

    if (i === day.toString()) {
        week[i] = week[i].bold();
    }

    document.body.innerHTML += week[i] + "<br>";
}

console.log(day);

