let title, screens, screenPrice, rollback, fullPrice, adaptive;

title = "JS course";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 100;
rollback = 50;
fullPrice = 1000;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(screenPrice + "$");
console.log(fullPrice + "$");

console.log(screens.toLowerCase().split(", "));

console.log(fullPrice * (rollback / 100) + "$");