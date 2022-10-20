"use strict";

// Упражнение 1
for (let n = 0; n <= 20; n = n + 2) {
    console.log(n);
}

// Упражнение 2
let sum = 0;
for (let i = 0; i < 3; i++) {
    let number = +prompt("Введите число");

    if (isNaN(number)) {
        alert("Ошибка, выввели не число");
        break;
    }

    if (number) {
        sum += number;   
    }
}
alert("Сумма: " + sum);



// Упражнение 3
function getNameOfMonth(m) {
    if (m === 0) return 'Январь';
    if (m === 1) return 'Февраль';
    if (m === 2) return 'Март';
    if (m === 3) return 'Апрель';
    if (m === 4) return 'Май';
    if (m === 5) return 'Июнь';
    if (m === 6) return 'Июль';
    if (m === 7) return 'Август';
    if (m === 8) return 'Сентябрь';
    if (m === 9) return 'Октябрь';
    if (m === 10) return 'Ноябрь';
    if (m === 11) return 'Декабрь';
}

for (let m = 0; m < 12; m++) {
    if (m === 9) continue;
    const month = getNameOfMonth(m);    

    console.log(month);
}

// Упражнение 4
//IIFE — это функция, которая выполняется сразу же 
//после того, как была определена.

//При помощи IIFE мы можем использовать одинаковые 
//названия переменных, не боясь, что они случайно 
//перезапишут значения переменных из чужих модулей, 
//если мы не контролируем кодовую базу полностью сами.
