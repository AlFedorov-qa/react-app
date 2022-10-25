"use strict";

// Упражнение 1
let a = '$100';
let b = '300$';

a = a.slice(1);
b = b.slice(0, -1);
let summ = +a + +b;
console.log(summ);

// Упражнение 2
let message = "  привет, медвед         ";

message = message.trim();
message = message[0].toUpperCase() + message.slice(1);
console.log(message);

// Упражнение 3
let age = prompt("Сколько вам лет?");

if (age < 4) {
    alert(`Вам ${age} лет и вы младенец`)
}else if (age < 12) {
    alert(`Вам ${age} лет и вы ребенок`)
}else if (age < 19) {
    alert(`Вам ${age} лет и вы подросток`)
}else if (age < 41) {
    alert(`Вам ${age} лет и вы познаёте жизнь`)
}else if (age < 81) {
    alert(`Вам ${age} лет и вы познали жизнь`)
}else if (age > 80) {
    alert(`Вам ${age} лет и вы долгожитель`)
}


// Упражнение 4
let message1 = 'Я работаю со строками как профессионал!';

let count = message1.split(' ');
console.log(count.length);