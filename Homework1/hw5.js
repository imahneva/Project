function findTheSmallestNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

const parityOfNumber = function () {
    let userNumber = Number(prompt('Введите число для проверки четности'));
    if (userNumber % 2) {
        alert('Число нечетное');
    } else {
        alert('Число четное');
    }
}

const squareOutput = (a) => console.log(a ** 2);

const returnSquare = (a) => a ** 2;

const ageUser = () => {
    let userAnswer = Number(prompt('Сколько вам лет?'));
    if (userAnswer < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAnswer <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

function checkingNumbers(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        return 'Одно или оба значения не являются числом';
    }
}

const cubeOfNumbers = () => {
    let userAnswer = Number(prompt('Введите число'));
    if (!isNaN(userAnswer)) {
        let result = userAnswer ** 3;
        return `n в кубе равняется ${result}`;
    } else {
        return 'Переданный параметр не является числом';
    }
}

//console.log(cubeOfNumbers());

function getArea() {
    let result = 3.14 * this.radius ** 2;
    return result;
}

function getPerimeter() {
    let result = 2 * 3.14 * this.radius;
    return result;
}

const circle1 = {
    radius: 15,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 45,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

function getSeasons() {
    let monthNumber = Number(prompt('Введите порядковый номер месяца'));
    if (monthNumber >= 1 && monthNumber <= 12) {
        if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
            console.log('Зима');
        } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
            console.log('Весна');
        } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
            console.log('Лето');
        } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
            console.log('Осень');
        }
    } else {
        console.log('Такого месяца нет');
    }    
}