let a = 10;
alert(`Переменная а = ${a}`);
a = 20;
alert(`Переменная а = ${a}`);
let yearOfIssue = 2007;
alert(`Выпуск первого iPhone ${yearOfIssue} г.`);
let creatorJavaScript = "Брендан Эйх";
alert(`Создателем JavaScript является ${creatorJavaScript}`);
let x1 = 10;
let x2 = 2;
alert(`Сумма чисел ${x1} и ${x2} равна `+ (x1+x2));
alert(`Разность чисел ${x1} и ${x2} равна `+ (x1-x2));
alert(`Произведение чисел ${x1} и ${x2} равно `+ (x1*x2));
alert(`Частное чисел ${x1} и ${x2} равно `+ (x1/x2));
let result = 2**5;
alert(`Число 2 в 5 степени = ${result}`)
a = 9;
let b = 2;
alert(`Остаток от деления = `+ (a%b));
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
let age = prompt("Сколько вам лет?");
alert('Ваш возраст ' + age);
const user = {
    name: 'Иван',
    age: 15,
    isAdmin: true,
};
user['city of residence'] = 'Калининград';
user.age = 30;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
let nameUser = prompt("Сообщите ваше имя");
alert(`Привет, ${nameUser}!`);