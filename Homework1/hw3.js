let password = 'привет';
let valuePassword = String(prompt('Введите пароль'));
valuePassword = valuePassword.toLocaleLowerCase;
password === valuePassword ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

let c = 2;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

let d = 25;
let e = 68;
d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = Number(prompt('Введите порядковый номер месяца'));
switch (monthNumber) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('Весна');
        break;
    case 4:
        alert('Весна');
        break;
    case 5:
        alert('Весна');
        break;
    case 6:
        alert('Лето');
        break;
    case 7:
        alert('Лето');
        break;
    case 8:
        alert('Лето');
        break;
    case 9:
        alert('Осень');
        break; 
    case 10:
        alert('Осень');
        break;  
    case 11:
        alert('Осень');
        break; 
    case 12:
        alert('Зима');
        break;      
    default:
        alert('Такого месяца нет');
        break;
}

let number1 = Number(prompt('Пожалуйста, введите любое число'));
if (!isNaN(number1)) {
    if (number1 % 2) {
        alert('Число нечетное');
    } else {
        alert('Число четное');
    }   
} else {
    alert('Введено не число');     
}

let clientOS = 1;
let message;
clientOS === 0 ? message = 'Установите версию приложения для iOS по ссылке':message = 'Установите версию приложения для Android по ссылке';
console.log(message);

let clientDeviceYear = 2015;
if (clientDeviceYear<2015) {
    if (clientOS === 0) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    console.log(message);
}