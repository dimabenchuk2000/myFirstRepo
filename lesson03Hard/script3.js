let lang = prompt("Укажите язык", "ru/en");

let Arr = [];
Arr.ru = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
Arr.en = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
console.log(Arr[lang.toLowerCase()]);

let namePerson = 'Артем';
console.log(
    (namePerson == 'Артем') ? 'Директор' :
        (namePerson === 'Александр') ? 'Преподователь' : 'Студент');

if (lang.toLowerCase() === "ru") {
    console.log("Понедельник, вторник, среда, пятница, суббота, воскресенье");
} else if (lang.toLowerCase() === "en") {
    console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
} else {
    console.log("Неверно указан язык");
}

switch (lang.toLowerCase()) {
    case 'ru':
        console.log('пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс');
        break;
    case 'en':
        console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
        break;
    default:
        console.log("Неверно указан язык");
};