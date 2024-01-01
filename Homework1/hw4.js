let i = 0;
while (i<2) {
    console.log('Привет');
    i++;
}

i = 1;
do {
   console.log(i);
   i++; 
} while (i<=5);

for (i = 7; i<=22; i++){
    console.log(i);
}

const obj = {
    'Коля':200,
    'Вася':300,
    'Петя':400,
}
for (const key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

let n=1000;
let num = 0;
while (n>=50) {
    n /= 2;
    num++;
}
console.log(num);

let friday = 3;
for (i=1;i<=31;i++){
    if (i===friday) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
       friday +=7;        
    } 
}